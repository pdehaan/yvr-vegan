module.exports = eleventyConfig => {
  const configs = require("./src/configs/index");
  const lib = require("./src/utils/lib");

  configs(eleventyConfig);

  return {
    dir: lib.dir,
    passthroughFileCopy: true,
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
