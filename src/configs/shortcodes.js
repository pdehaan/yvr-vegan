module.exports = cfg => {
  const lib = require("../utils/lib");

  cfg.addShortcode("tele", lib.phone);
  cfg.addShortcode("link", lib.link);
  cfg.addShortcode("gmap", lib.gmap);
};
