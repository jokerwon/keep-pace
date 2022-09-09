const fs = require("fs-extra");
const execute = require("./execute");
const { mergeOption } = require("./util");

module.exports = async function runner(source, destination, options = {}) {
  if (!fs.existsSync(source)) {
    console.warn("source directory is not exist.");
    return;
  }
  const mergedOptions = await mergeOption({ source, destination, ...options });
  execute(source, destination, mergedOptions).catch(error => {
    console.error(error);
  });
};
