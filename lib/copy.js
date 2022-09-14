const fs = require("fs-extra");
const { wrapLoading } = require("./util");

const execute = (source, destination, options = {}) => {
  const { ignoreList = [] } = options;
  return fs.copy(source, destination, {
    filter(src) {
      if (ignoreList.length <= 0) return true;
      if (!src) return false;
      // TODO: 支持 glob 和 Reg
      return ignoreList.some(ignoreItem => !src.includes(ignoreItem));
    },
  });
};

module.exports = wrapLoading(
  execute,
  "Synchronizing",
  "Sync successfully.",
  "Sync failed."
);
