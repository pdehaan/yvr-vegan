module.exports = cfg => {
  const lib = require("../utils/lib");

  // Static assets to pass through
  cfg.addPassthroughCopy(lib.inputDir("fonts"));
  cfg.addPassthroughCopy(lib.inputDir("images"));
  cfg.addPassthroughCopy(lib.inputDir("css"));
};
