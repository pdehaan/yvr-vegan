#!/usr/bin/env node

const fs = require("fs").promises;
const glob = require("fast-glob");
const frontmatter = require("gray-matter");

const schemas = require("../src/schemas");
const lib = require("../src/utils/lib");

main();

async function main() {
  const restaurantGlob = lib.inputDir("restaurants/*.md");
  const files = await glob(restaurantGlob);
  for (const file of files) {
    const contents = await fs.readFile(file, "utf-8");
    const data = frontmatter(contents).data;
    try {
      await schemas.validateAsync(schemas.restaurant, data);
    } catch (err) {
      err.src = file;
      console.error(err);
      process.exitCode = 1;
    }
  }
}
