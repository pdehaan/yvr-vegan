module.exports = cfg => {
  const path = require("path");
  const glob = require("fast-glob").sync;

  // Process all *.js files in the current directory (except the current file).
  const files = glob([path.join(__dirname, "*.js"), `!${__filename}`]);
  for (const file of files) {
    require(`./${path.basename(file)}`)(cfg);
  }
};
