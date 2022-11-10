const { resolve, dirname } = require("path");
const fs = require("fs-extra");
const chokidar = require("chokidar");
const { getFullPath } = require("./util");

const HANDLERS = {
  change: copy,
  add: copy,
  addDir: copy,
  unlink: remove,
  unlinkDir: remove,
};

async function copy(absSrcFileOrDir, absDestFileOrDir) {
  if (fs.statSync(absSrcFileOrDir).isDirectory()) {
    if (fs.existsSync(absDestFileOrDir)) {
      return;
    }
    await fs.copy(absSrcFileOrDir, absDestFileOrDir, {
      overwrite: true,
      recursive: true,
      errorOnExist: false,
    });
  } else {
    fs.ensureDirSync(dirname(absDestFileOrDir));
    await fs.copyFile(absSrcFileOrDir, absDestFileOrDir);
  }
}

async function remove(_, absDestFileOrDir) {
  if (fs.existsSync(absDestFileOrDir)) {
    await fs.rm(absDestFileOrDir, { recursive: true });
  }
}

module.exports = function watch(source, destination, mergedOptions) {
  const absSrc = getFullPath(source);
  if (!fs.existsSync(source)) {
    console.warn(`The directory or file ${absSrc} is not existed.`);
    return;
  }
  const absDest = getFullPath(destination);
  fs.ensureDirSync(absDest);
  let running = false;
  let quene = [];
  return chokidar
    .watch(absSrc, {
      // 指定 cwd 则会返回相对路径，否则返回的是绝对路径
      cwd: absSrc,
      // 启动时不上报初始文件
      ignoreInitial: true,
      usePolling: true,
      interval: 400,
    })
    .on("all", async (event, path) => {
      async function task() {
        running = true;
        const absSrcFileOrDir = resolve(absSrc, path);
        const absDestFileOrDir = resolve(absDest, path);
        const handler =
          HANDLERS[event] ||
          (() => {
            console.warn(`No handler defined for file event "${event}".`);
          });
        // console.log(`${event} ${path} ${absDestFileOrDir}`);
        try {
          await handler(absSrcFileOrDir, absDestFileOrDir);
        } catch (error) {
          console.error(error);
        }
        running = false;
      }
      if (running) {
        quene.push(task);
        return;
      }
      await task();
      while (quene.length) {
        const job = quene.shift();
        job && (await job());
      }
    });
};
