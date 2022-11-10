const fs = require("fs-extra");
const sync = require("./sync");
const watch = require("./watch");
const { mergeOption } = require("./util");

const COMMAND_HANDLER = {
  sync,
  watch,
};

module.exports = async function runner(
  command,
  source,
  destination,
  options = {}
) {
  if (!fs.existsSync(source)) {
    console.warn(`The source directory "${source}" is not existed.`);
    return;
  }
  const mergedOptions = mergeOption({ source, destination, ...options });
  const handler = COMMAND_HANDLER[command];
  try {
    handler && handler(source, destination, mergedOptions);
  } catch (error) {
    console.error(error);
  }
};
