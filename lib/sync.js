const fs = require("fs-extra");
const { wrapLoading } = require("./util");

const copy = (source, destination, options = {}) => {
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

module.exports = wrapLoading(copy, {
  loading: "Synchronizing",
  success: "Sync successfully.",
  fail: "Sync failed.",
});
