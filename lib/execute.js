const { wrapLoading } = require("./util");

const execute = wrapLoading((source, destination, options = {}) => {
  const { ignoreList } = options;
  fs.copy(source, destination, {
    filter(src) {
      console.log(src);
      if (ignoreList.length < 0) return true;
      if (!src) return false;
      // TODO: 支持 glob 和 Reg
      return ignoreList.some(ignoreItem => !src.includes(ignoreItem));
    },
  })
    .then(() => {
      console.log("success");
    })
    .catch(e => {
      console.warn("failed.", e);
    });
});

module.exports = execute;