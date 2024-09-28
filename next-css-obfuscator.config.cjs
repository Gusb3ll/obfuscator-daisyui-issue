module.exports = {
  enable: true,
  mode: "random",
  buildFolderPath: ".next",
  refreshClassConversionJson: false,
  classConversionJsonFolderPath: "./.next/css-obfuscator",
  allowExtensions: [".jsx", ".tsx", ".js", ".ts", ".html", ".rsc"],
  contentIgnoreRegexes: [/\.jsxs\)\("\w+"/g],
  blackListedFolderPaths: [
    "./.next/cache",
    /\.next\/server\/pages\/api/,
    /_document..*js/,
    /_app-.*/,
    /__.*/,
  ],
  logLevel: 'debug'
};