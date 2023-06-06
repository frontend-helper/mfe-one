const concat = require("concat");
(async function build() {
  const files = [
    "dist/mfe1/main.js",
    "dist/mfe1/polyfills.js",
    "dist/mfe1/runtime.js",
  ];
  await concat(files, "cdn/mfe-one.js");
})();
