module.exports = cfg => {
  const lib = require("../utils/lib");

  cfg.addFilter("dump", lib.dump);
  cfg.addFilter("hostname", lib.hostname);
  cfg.addFilter("readableDate", lib.readableDate);
  cfg.addFilter("htmlDate", lib.htmlDate);
  cfg.addFilter("section", require("../utils/section"));
  cfg.addFilter("jsmin", require("../utils/minify-js"));
};
