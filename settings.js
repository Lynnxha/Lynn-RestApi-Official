const fs = require("fs");

global.creator = "Lynnxha";
global.apikey = ["LynnKeyOfficial", "Rainchy"];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
