const path = require("path");
const glob = require("fast-glob").sync;
const lib = require("../utils/lib");

module.exports = cfg => {
  const layoutExt = ".njk";
  const layouts = $getLayouts();
  for (const layout of layouts) {
    const alias = path.basename(layout, layoutExt);
    cfg.addLayoutAlias(alias, $layoutAlias(alias, layoutExt));
  }
};

function $getLayouts() {
  return glob(lib.inputDir("_includes", $layoutAlias("*")));
}

function $layoutAlias(alias, ext = "") {
  return `layouts/${alias}${ext}`;
}
