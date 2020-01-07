/**
 * Shared utilities for filters and shortcodes.
 */

const path = require("path");
const { DateTime } = require("luxon");
const dir = require("../../package.json").eleventy.dir;

module.exports = {
  dir,

  dump(obj) {
    return require("util").inspect(obj);
  },
  hostname(url) {
    return new URL(url).hostname.replace(/^www\./, "");
  },
  readableDate(dateObj) {
    return $formatDate(dateObj, "LLLL d, y");
  },
  htmlDate(dateObj) {
    return $formatDate(dateObj, "y-MM-dd");
  },
  phone(number) {
    return `<a href="tel:${number.trim()}">${number}</a>`;
  },
  link(linkObj) {
    if (linkObj.rel === undefined) {
      linkObj.rel = "noopener noreferrer nofollow";
    }
    if (linkObj.target === undefined) {
      linkObj.target = "_blank";
    }
    return `
      <a href="${linkObj.href}"
        ${linkObj.target ? `target="${linkObj.target}"` : ""}
        ${linkObj.rel ? `rel="${linkObj.rel}"` : ""}
        ${linkObj.class ? `class="${linkObj.class}"` : ""}
      >${linkObj.label}</a>
    `.trim();
  },
  gmap(mapObj) {
    return `
      <iframe src="${mapObj.src}"
        width="${mapObj.width || "100%"}"
        height="${mapObj.height || 300}"
        frameborder="0"
        style="border:0;"
        class="py-4"
        allowfullscreen=""></iframe>
    `.trim();
  },
  inputDir(...paths) {
    return path.join(dir.input, ...paths);
  },
  isProductionEnv() {
    return process.env.NODE_ENV === "production";
  }
};

function $formatDate(dateObj, fmt) {
  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(fmt);
}
