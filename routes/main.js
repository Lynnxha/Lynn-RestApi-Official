__path = process.cwd();

var { performance } = require("perf_hooks");
var fetch = require("node-fetch");
var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__path + "/views/home.html");
});

router.get("/api", (req, res) => {
  res.sendFile(__path + "/views/index.html");
});

router.get("/api/status", async (req, res) => {
  var date = new Date();
  var jam = date.getHours();
  var menit = date.getMinutes();
  var detik = date.getSeconds();
  var old = performance.now();
  var neww = performance.now();
  var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
    2
  )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB`;
  var cpu = require("os").cpus();
  var json = await (await fetch("https://api.ipify.org/?format=json")).json();
  var port = process.env.PORT || 8080 || 5000 || 3000;
  status = {
    status: "online",
    memory: ram,
    cpu: cpu[0].model,
    port: port,
    ip: json.ip,
    time: `${jam} : ${menit} : ${detik}`,
    uptime: muptime(process.uptime()),
    speed: `${neww - old}ms`,
    info: {
      owner: "Lynnxha",
      apikey: "Chat Owner: https://wa.me/6285776353741",
    },
  };
  res.json(status);
});

module.exports = router;

function muptime(seconds) {
  function pad(s) {
    return (s < 10 ? "0" : "") + s;
  }
  var hours = Math.floor(seconds / (60 * 60));
  var minutes = Math.floor((seconds % (60 * 60)) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + " : " + pad(minutes) + " : " + pad(seconds);
}
