const fs = require("fs-extra");
const chokidar = require("chokidar");
const { getFullPath } = require("./util");

module.exports = function watch(source, destination, mergedOptions) {
  const target = getFullPath(source);
  if (!fs.existsSync(source)) {
    console.warn(`The directory or file ${target} is not existed.`);
    return;
  }
  const fullDest = getFullPath(destination);

  return chokidar.watch(target, {
    // 启动时不上报初始文件
    ignoreInitial: true
  }).on("all", (event, path) => {
    console.log(event, path);
  });
};
