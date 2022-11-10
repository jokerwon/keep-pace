const fs = require("fs-extra");
const process = require("process");
const path = require("path");
const ora = require("ora");

const resolveMsg = msg => {
  if (typeof msg === "object") {
    return msg;
  }
  return {
    loading: msg,
  };
};
// 加载动画
function wrapLoading(fn, message) {
  const { loading, success, fail } = resolveMsg(message);
  return async function (...args) {
    const spinner = ora(loading);
    // 开始加载动画
    spinner.start();

    try {
      const result = await fn(...args);
      // 修改 loading 状态为成功
      spinner.succeed(success);
      return result;
    } catch (err) {
      spinner.fail(fail);
      throw err;
    }
  };
}

function mergeOption(main, second) {
  const { ignore } = main;
  const ignoreList = ignore ? ignore.split(/,\s?/) : [];
  return {
    ignoreList,
  };
}

function isAbsolutePath(link) {
  return link.startsWith("/");
}

function getFullPath(link) {
  if (isAbsolutePath(link)) {
    return link;
  }
  return path.resolve(process.cwd(), link);
}

module.exports = { wrapLoading, mergeOption, getFullPath, isAbsolutePath };
