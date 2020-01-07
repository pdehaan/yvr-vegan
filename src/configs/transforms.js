module.exports = cfg => {
  const lib = require("../utils/lib");
  // minify the html output when running in prod
  if (lib.isProductionEnv()) {
    cfg.addTransform("htmlmin", require("../utils/minify-html"));
  }
};
