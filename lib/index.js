const fs = require("fs-extra");
const execute = require("./execute");
const { mergeOption } = require("./util");


module.exports = function runner(source, destination, options = {}) {
  if (!fs.existsSync(source)) {
    console.warn("source directory is not exist.");
    return;
  }
  const mergedOptions = mergeOption({ source, destination, ...options });
  execute(source, destination, mergedOptions);
};
