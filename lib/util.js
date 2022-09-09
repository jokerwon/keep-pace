const ora = require("ora");

// 加载动画
async function wrapLoading(fn, message, ...args) {
  const spinner = ora(message);
  // 开始加载动画
  spinner.start();

  try {
    const result = await fn(...args);
    // 修改 loading 状态为成功
    spinner.succeed();
    return result;
  } catch (error) {
    spinner.fail(error);
    return error;
  }
}

async function mergeOption(main, second) {
  const { ignore = "" } = main;
  const ignoreList = ignore.split(/,\s?/);
  return {
    ignoreList,
  };
}

module.exports = { wrapLoading, mergeOption };
