__path = process.cwd();

require("../settings.js");
const { Tiktok } = require("@xct007/tiktok-scraper");
var express = require("express");
var axios = require("axios");
var qs = require("qs");
var fetch = require("node-fetch");
var cheerio = require("cheerio");
var request = require("request");
var fs = require("fs");
var router = express.Router();
var creator = global.creator;
const listkey = global.apikey;

const api = require("caliph-api");
const Frieren = require("@xct007/frieren-scraper");
const scr = require("@bochilteam/scraper");
const { color, bgcolor } = require(__path + "/lib/color.js");
const { fetchJson } = require(__path + "/lib/fetcher.js");
const options = require(__path + "/lib/options.js");
const { getBuffer } = require(__path + "/lib/functions.js");
const oxy = require(__path + "/lib/oxy.js");

var { Vokal, Base, Searchnabi, Gempa } = require("./../lib");
const { next } = require("cheerio/lib/api/traversing.js");

_ = require("lodash");

loghandler = {
  noapikey: {
    status: 403,
    message: "Masukkan parameter apikey",
    maintanied_by: `Lynnxha`,
  },
  error: {
    status: 503,
    message: "Sedang Dalam Perbaikan Cuy",
    maintanied_by: `Lynnxha`,
  },
  apikey: {
    status: 403,
    message:
      "Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey anda",
    maintanied_by: `Lynnxha`,
  },
  noturl: {
    status: 403,
    message: "Forbiden, Invlid url, masukkan parameter url",
    maintanied_by: `Lynnxha`,
  },
};

var len = 15;
var arr = "123456789abcdefghijklmnopqrstuvwxyz";
var random = "";

for (var i = len; i > 0; i--) {
  random += arr[Math.floor(Math.random() * arr.length)];
}

var lenn = 5;
var randomlagi = "";

for (var i = lenn; i > 0; i--) {
  randomlagi += arr[Math.floor(Math.random() * arr.length)];
}

var randomTextNumber =
  random + randomlagi + "---------Apriliya-Putri-Fatmawati" + "LOLI--KILLERS";

/** @note
 * Liat cara nulis code yang bener
 */
// Anime Api

// Asupan Api
router.get("/asupan/china", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.postimg.cc/QdncScPQ/1.jpg",
      "https://i.postimg.cc/zv1CK5Q4/10.jpg",
      "https://i.postimg.cc/4x3zzW84/11.jpg",
      "https://i.postimg.cc/pXCfhwJ1/12.jpg",
      "https://i.postimg.cc/brHQRWcr/13.jpg",
      "https://i.postimg.cc/zX8wfzKg/14.jpg",
      "https://i.postimg.cc/QM91zHGR/15.jpg",
      "https://i.postimg.cc/43DVRsXn/16.jpg",
      "https://i.postimg.cc/nrkDmmBQ/17.jpg",
      "https://i.postimg.cc/CLhDgvpC/18.jpg",
      "https://i.postimg.cc/fT8dTxMG/19.jpg",
      "https://i.postimg.cc/RFwfMy0d/2.jpg",
      "https://i.postimg.cc/nrZmM2jJ/20.jpg",
      "https://i.postimg.cc/dVDy7L1L/21.jpg",
      "https://i.postimg.cc/kMF8z0zX/22.jpg",
      "https://i.postimg.cc/VkTbXmr4/23.jpg",
      "https://i.postimg.cc/3wv0BV2h/24.jpg",
      "https://i.postimg.cc/V6PrHgFC/25.jpg",
      "https://i.postimg.cc/MT0MkBsr/26.jpg",
      "https://i.postimg.cc/RhM3v0yC/27.jpg",
      "https://i.postimg.cc/D0BS0T3r/28.jpg",
      "https://i.postimg.cc/VsRrDj0J/29.jpg",
      "https://i.postimg.cc/TY3ySpnC/3.jpg",
      "https://i.postimg.cc/NfCywB4Y/30.jpg",
      "https://i.postimg.cc/3RZRfTRs/31.jpg",
      "https://i.postimg.cc/HnZLH9b3/4.jpg",
      "https://i.postimg.cc/rFsmj7LH/5.jpg",
      "https://i.postimg.cc/4N03Swfx/6.jpg",
      "https://i.postimg.cc/66YqdtFR/7.jpg",
      "https://i.postimg.cc/rwtpXWsC/8.jpg",
      "https://i.postimg.cc/wB8j6vsK/9.jpg",
    ];
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/asupan/vietnam", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.postimg.cc/QdncScPQ/1.jpg",
      "https://i.postimg.cc/zv1CK5Q4/10.jpg",
      "https://i.postimg.cc/4x3zzW84/11.jpg",
      "https://i.postimg.cc/pXCfhwJ1/12.jpg",
      "https://i.postimg.cc/brHQRWcr/13.jpg",
      "https://i.postimg.cc/zX8wfzKg/14.jpg",
      "https://i.postimg.cc/QM91zHGR/15.jpg",
      "https://i.postimg.cc/43DVRsXn/16.jpg",
      "https://i.postimg.cc/nrkDmmBQ/17.jpg",
      "https://i.postimg.cc/CLhDgvpC/18.jpg",
      "https://i.postimg.cc/fT8dTxMG/19.jpg",
      "https://i.postimg.cc/RFwfMy0d/2.jpg",
      "https://i.postimg.cc/nrZmM2jJ/20.jpg",
      "https://i.postimg.cc/dVDy7L1L/21.jpg",
      "https://i.postimg.cc/kMF8z0zX/22.jpg",
      "https://i.postimg.cc/VkTbXmr4/23.jpg",
      "https://i.postimg.cc/3wv0BV2h/24.jpg",
      "https://i.postimg.cc/V6PrHgFC/25.jpg",
      "https://i.postimg.cc/MT0MkBsr/26.jpg",
      "https://i.postimg.cc/RhM3v0yC/27.jpg",
      "https://i.postimg.cc/D0BS0T3r/28.jpg",
      "https://i.postimg.cc/VsRrDj0J/29.jpg",
      "https://i.postimg.cc/TY3ySpnC/3.jpg",
      "https://i.postimg.cc/NfCywB4Y/30.jpg",
      "https://i.postimg.cc/3RZRfTRs/31.jpg",
      "https://i.postimg.cc/HnZLH9b3/4.jpg",
      "https://i.postimg.cc/rFsmj7LH/5.jpg",
      "https://i.postimg.cc/4N03Swfx/6.jpg",
      "https://i.postimg.cc/66YqdtFR/7.jpg",
      "https://i.postimg.cc/rwtpXWsC/8.jpg",
      "https://i.postimg.cc/wB8j6vsK/9.jpg",
    ];
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/asupan/thailand", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.postimg.cc/PJtYFxrk/1.jpg",
      "https://i.postimg.cc/445zHzB4/10.jpg",
      "https://i.postimg.cc/RFTnfB1p/11.jpg",
      "https://i.postimg.cc/RZ3fY29q/12.jpg",
      "https://i.postimg.cc/jd3PZtpG/13.jpg",
      "https://i.postimg.cc/65qG7F8z/14.jpg",
      "https://i.postimg.cc/T3WL0mqD/15.jpg",
      "https://i.postimg.cc/6q54fmYW/16.jpg",
      "https://i.postimg.cc/rmgKs9cv/17.jpg",
      "https://i.postimg.cc/j2Ld50M7/18.jpg",
      "https://i.postimg.cc/YC12jxzb/19.jpg",
      "https://i.postimg.cc/MHMqw0G0/2.jpg",
      "https://i.postimg.cc/63Hpt5fK/20.jpg",
      "https://i.postimg.cc/zBLGDYtR/21.jpg",
      "https://i.postimg.cc/jdnSYTwV/3.jpg",
      "https://i.postimg.cc/HWykfH8q/4.jpg",
      "https://i.postimg.cc/fycZkzxk/5.jpg",
      "https://i.postimg.cc/MK0KpDDt/6.jpg",
      "https://i.postimg.cc/5NJbTzVz/7.jpg",
      "https://i.postimg.cc/QtWjGkCQ/8.jpg",
      "https://i.postimg.cc/C5TSFBnW/9.jpg",
    ];
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/asupan/indonesia", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.postimg.cc/sgYy39Yy/1.jpg",
      "https://i.postimg.cc/k5wmbJYp/10.jpg",
      "https://i.postimg.cc/XJJ0KRT7/11.jpg",
      "https://i.postimg.cc/PfCCT9Pj/12.jpg",
      "https://i.postimg.cc/GpbRt8KD/13.jpg",
      "https://i.postimg.cc/gkRr6hVt/14.jpg",
      "https://i.postimg.cc/rsRX3SVB/15.jpg",
      "https://i.postimg.cc/52S0sMkw/16.jpg",
      "https://i.postimg.cc/tTY4RnR5/17.jpg",
      "https://i.postimg.cc/4d7XRCw2/18.jpg",
      "https://i.postimg.cc/k55nwRSm/19.jpg",
      "https://i.postimg.cc/QCcsVp2p/2.jpg",
      "https://i.postimg.cc/zGz5XH0g/20.jpg",
      "https://i.postimg.cc/y8LKJ6br/21.jpg",
      "https://i.postimg.cc/WbjcXJRH/22.jpg",
      "https://i.postimg.cc/m2wfq2B2/23.jpg",
      "https://i.postimg.cc/MGghRnbt/24.jpg",
      "https://i.postimg.cc/1t6bKyvS/25.jpg",
      "https://i.postimg.cc/fyNp21P9/26.jpg",
      "https://i.postimg.cc/J05g9Pwd/27.jpg",
      "https://i.postimg.cc/m2TKQfCx/28.jpg",
      "https://i.postimg.cc/MKtN5Pmn/29.jpg",
      "https://i.postimg.cc/PxGRJBTR/3.jpg",
      "https://i.postimg.cc/cHQ5nXJ4/30.jpg",
      "https://i.postimg.cc/bY9BYCMm/31.jpg",
      "https://i.postimg.cc/QdH4bXMz/32.jpg",
      "https://i.postimg.cc/Rhgd78x9/33.jpg",
      "https://i.postimg.cc/sD2wjV52/34.jpg",
      "https://i.postimg.cc/pXV1mQMR/35.jpg",
      "https://i.postimg.cc/sfmTCBQ8/36.jpg",
      "https://i.postimg.cc/ZRcxmgR3/37.jpg",
      "https://i.postimg.cc/mkgNgwzn/38.jpg",
      "https://i.postimg.cc/pXyJNsth/4.jpg",
      "https://i.postimg.cc/13q0X4Xy/5.jpg",
      "https://i.postimg.cc/DZBLHXjP/7.jpg",
      "https://i.postimg.cc/RhYfVzz3/8.jpg",
      "https://i.postimg.cc/TYZmzG9F/9.jpg",
    ];
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/asupan/korea", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.postimg.cc/K87Z4CkB/p-19620motq1.jpg",
      "https://i.postimg.cc/wvgR7hjT/p-19623vybj1.jpg",
      "https://i.postimg.cc/QtJ5bfyT/p-19623z95r1.jpg",
      "https://i.postimg.cc/XJbddRQW/p-19624y1on1.jpg",
      "https://i.postimg.cc/dVG0rLX7/p-19625anrs1.jpg",
      "https://i.postimg.cc/9fWc91ZS/p-19625lzea1.jpg",
      "https://i.postimg.cc/SKWzSZqv/p-19626rftx1.jpg",
      "https://i.postimg.cc/hPjxLbbX/p-196298pkr1.jpg",
      "https://i.postimg.cc/hvGJ0cmk/p-1962alh5c1.jpg",
      "https://i.postimg.cc/ZqcKsXJ4/p-1962asjl31.jpg",
      "https://i.postimg.cc/pX6jqhqq/p-1962enqpe1.jpg",
      "https://i.postimg.cc/T1SPqmfb/p-1962gl6nf1.jpg",
      "https://i.postimg.cc/mZVC16Mx/p-1962koqm41.jpg",
      "https://i.postimg.cc/d3zqTYjm/p-1962pvq221.jpg",
      "https://i.postimg.cc/3xQ883R3/p-1962spcdo1.jpg",
      "https://i.postimg.cc/BbZFw2rw/p-1962u3qhb1.jpg",
      "https://i.postimg.cc/nVwMJ8BL/p-1962umwai1.jpg",
      "https://i.postimg.cc/76hDs6Bn/p-1962y8lij1.jpg",
      "https://i.postimg.cc/ydp6s9JG/p-1962yt9ph1.jpg",
    ];
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/asupan/japan", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.postimg.cc/RCcjLvF6/p-196252lk91.jpg",
      "https://i.postimg.cc/7hMdHncM/p-19625eppj1.jpg",
      "https://i.postimg.cc/CLpwwvZD/p-19629cg431.jpg",
      "https://i.postimg.cc/pVwLpWSm/p-19629eev81.jpg",
      "https://i.postimg.cc/ydxwTRD7/p-1962cau3w1.jpg",
      "https://i.postimg.cc/D0LFqGN8/p-1962ck87p1.jpg",
      "https://i.postimg.cc/76zjcknR/p-1962fyik51.jpg",
      "https://i.postimg.cc/bYtzcXvp/p-1962i85aq1.jpg",
      "https://i.postimg.cc/nLWtgTbX/p-1962nvj4g1.jpg",
      "https://i.postimg.cc/rFGMsSWH/p-1962o5sp41.jpg",
      "https://i.postimg.cc/wTgnWnyW/p-1962p9nlk1.jpg",
      "https://i.postimg.cc/T1XBv4k3/p-1962q7ura1.jpg",
      "https://i.postimg.cc/nz6pj20y/p-1962qiubc1.jpg",
      "https://i.postimg.cc/13CxVMzv/p-1962tt38s1.jpg",
      "https://i.postimg.cc/ZYBqbBwk/p-1962ufc7p1.jpg",
      "https://i.postimg.cc/52x1C6S2/p-1962vn5rc1.jpg",
      "https://i.postimg.cc/GpHWFY8d/p-1962vpyp71.jpg",
      "https://i.postimg.cc/tTc8vg6W/p-1962w2hyp1.jpg",
    ];
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/asupan/malaysia", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.postimg.cc/L8BFTfV1/p-1962mt0wq1.jpg",
      "https://i.postimg.cc/SKgF0h3Q/p-1962p3bmk1.jpg",
      "https://i.postimg.cc/25tYbYwc/p-1962pac7k1.jpg",
      "https://i.postimg.cc/fRXRhJfz/p-1962qpsvb1.jpg",
      "https://i.postimg.cc/Yq7Hmb6H/p-1962rcc7k1.jpg",
      "https://i.postimg.cc/G3QDZSh7/p-1962v04461.jpg",
      "https://i.postimg.cc/6QttJzQc/p-1962va89q1.jpg",
      "https://i.postimg.cc/t4HHWDFb/p-1962y8nl71.jpg",
      "https://i.postimg.cc/02VB2fZZ/p-1962y8oif1.jpg",
      "https://i.postimg.cc/CMqh8R9j/p-1962yyuuh1.jpg",
      "https://i.postimg.cc/Hn7f77xj/p-19622gld51.jpg",
      "https://i.postimg.cc/Hnpyrb39/p-196240q3o1.jpg",
      "https://i.postimg.cc/wMGj9Nrv/p-19624pvv61.jpg",
      "https://i.postimg.cc/hPXGpCJ7/p-19625n89w1.jpg",
      "https://i.postimg.cc/TwQPHFqn/p-19627bm3c1.jpg",
      "https://i.postimg.cc/zG08NKR1/p-1962c7n2o1.jpg",
      "https://i.postimg.cc/j2XkfQTx/p-1962caiz61.jpg",
      "https://i.postimg.cc/59TJNf06/p-1962csdwa1.jpg",
      "https://i.postimg.cc/6pwptBjC/p-1962d0xml1.jpg",
      "https://i.postimg.cc/PqyhtZpj/p-1962d4cuh1.jpg",
      "https://i.postimg.cc/DZYTGTPp/p-1962grit21.jpg",
      "https://i.postimg.cc/T1LXq4kd/p-1962zgkj21.jpg",
    ];
    var result = data[Math.floor(Math.random() * data.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});

router.get("/download/pinterest", async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.q;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!url)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter q",
    });
  if (listkey.includes(apikey)) {
    scr
      .pinterest(url)
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/download/tiktok", (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.url;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!url)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "Linknya Mana Anying?",
    });
  if (listkey.includes(apikey)) {
    Tiktok(url).then((data) => {
      if (!data.status) {
        return res.json(loghandler.error);
      }
      res.json(data);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/download/ytmp3", async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.url;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!url)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "Linknya Mana Anying?",
    });
  if (listkey.includes(apikey)) {
    const { id, thumbnail, audio: _audio, title } = await scr.youtubedlv2(url);
    try {
      for (let i in _audio) {
        audio = _audio[i];
        let kin = await audio.download();
        res.json({
          id: id,
          thumbnail: thumbnail,
          title: title,
          size: audio.fileSize,
          download: kin,
        });
      }
    } catch {
      console.log(e);
      res.json(loghandler.error);
    }
  } else {
    res.json(loghandler.apikey);
  }
});

router.get("/download/ytmp4", async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.url;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!url)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "Linknya Mana Anying?",
    });
  if (listkey.includes(apikey)) {
    const { id, thumbnail, video: _video, title } = await scr.youtubedlv2(url);
    try {
      for (let i in _video) {
        video = _video[i];
        let kin = await video.download();
        res.json({
          id: id,
          thumbnail: thumbnail,
          title: title,
          size: video.fileSize,
          download: kin,
        });
      }
    } catch {
      console.log(e);
      res.json(loghandler.error);
    }
  } else {
    res.json(loghandler.apikey);
  }
});
// news
router.get("/news/cnn", async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.type;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news`))
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/news/cnbc", async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.type;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news`))
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/news/republika", async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.type;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news`))
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/news/tempo", async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.type;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!url)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter type",
    });
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          author: "Lynnxha",
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/news/antara", async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.type;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!url)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter type",
    });
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          author: "Lynnxha",
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/news/kumparan", async (req, res, next) => {
  var apikey = req.query.apikey;
  var url = req.query.type;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          author: "Lynnxha",
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});

//photooxy
router.get("/photooxy/flaming", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.text;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter text",
    });
  if (listkey.includes(apikey)) {
    oxy(
      "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
      [text]
    )
      .then((data) => {
        res.set({ "Content-Type": "image/png" });
        res.send(data);
      })
      .catch((err) => {
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/photooxy/shadow-sky", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.text;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter text",
    });
  if (listkey.includes(apikey)) {
    oxy(
      "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
      [text]
    )
      .then((data) => {
        res.set({ "Content-Type": "image/png" });
        res.send(data);
      })
      .catch((err) => {
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/photooxy/metallic", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.text;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter text",
    });
  if (listkey.includes(apikey)) {
    oxy(
      "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
      [text]
    )
      .then((data) => {
        res.set({ "Content-Type": "image/png" });
        res.send(data);
      })
      .catch((err) => {
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/photooxy/naruto", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.text;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter text",
    });
  if (listkey.includes(apikey)) {
    oxy(
      "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html",
      [text]
    )
      .then((data) => {
        res.set({ "Content-Type": "image/png" });
        res.send(data);
      })
      .catch((err) => {
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/photooxy/pubg-mobile", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.text;
  var text2 = req.query.text;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text || !text2)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter text & text2",
    });
  if (listkey.includes(apikey)) {
    oxy(
      "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
      [text, text2]
    )
      .then((data) => {
        res.set({ "Content-Type": "image/png" });
        res.send(data);
      })
      .catch((err) => {
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});

// search api
router.get("/search/film", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.query;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "Query Nya Mana Vangsat?",
    });
  if (listkey.includes(apikey)) {
    api.search
      .film(query)
      .then((data) => {
        var data = data;
        res.json({
          status: 200,
          data,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/search/soundcloudsearch", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.query;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "Query Nya Mana Vangsat?",
    });
  if (listkey.includes(apikey)) {
    api.search
      .soundcloud(query)
      .then((data) => {
        var data = data;
        res.json({
          status: 200,
          data,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/search/wallpaper", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.query;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "Query Nya Mana Vangsat?",
    });
  if (listkey.includes(apikey)) {
    scr
      .wallpaper(text)
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/search/pinterest", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.query;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "Query Nya Mana Vangsat?",
    });
  if (listkey.includes(apikey)) {
    scr
      .pinterest(text)
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});

//nsfw
router.get("/nsfw/yuri", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var yuri = [
      "https://konachan.com/image/e137c359f365f112573f76eee499e41d/Konachan.com%20-%20317364%202girls%20bed%20breasts%20censored%20naga_%28pixiv%29%20nipples%20nude%20pussy%20shinobu_akira%20tears%20tokiwa_nanaka%20translation_request%20tribadism%20white%20yuri.jpg",
      "https://konachan.com/image/87a2d73ac859e02cdb0fabe8f16d345e/Konachan.com%20-%20297889%202girls%20aqua_eyes%20bed%20blue_hair%20blush%20breasts%20censored%20dildo%20gloves%20long_hair%20navel%20nipples%20nude%20passionlip%20pussy%20ribbons%20thighhighs%20wei_yu%20yuri.png",
      "https://konachan.com/image/ffd89da1ccfffb4e50e1104e0a036ae6/Konachan.com%20-%20286706%20arknights%20breasts%20fingering%20headdress%20long_hair%20muike%20navel%20nipples%20nude%20nun%20pussy_juice%20red_eyes%20skadi_%28arknights%29%20white_hair%20yuri.png",
      "https://konachan.com/image/b21daf2c057692c869e79ed4f3363829/Konachan.com%20-%20281360%202girls%20blue_eyes%20blue_hair%20blush%20breasts%20cunnilingus%20headdress%20nipples%20nude%20pink_eyes%20pink_hair%20short_hair%20spread_legs%20thighhighs%20twins%20yuri.png",
      "https://booru.allthefallen.moe/data/ce34f010761de7bc8bf16b889dd9a551.png",
      "https://konachan.com/image/2287c90e2a56b2f4071c2b0fba23f06b/Konachan.com%20-%20294386%202girls%20atelier%20atelier_ryza%20blindfold%20bra%20breasts%20cleavage%20fingering%20klaudia_valentz%20lila_decyrus%20long_hair%20navel%20signed%20underwear%20yuri%20yurichtofen.jpg",
      "https://konachan.com/image/d837c7a5110049569ce8228c6b641b2e/Konachan.com%20-%20317109%20bed%20blonde_hair%20breasts%20bzsk.%20fingering%20konpaku_youmu%20myon%20nipples%20nude%20pink_hair%20saigyouji_yuyuko%20signed%20touhou%20yakumo_yukari%20yuri.png",
      "https://konachan.com/image/c2da540be256da19a3a0130db07857b6/Konachan.com%20-%20315430%202girls%20ass%20azur_lane%20barefoot%20blue_hair%20building%20car%20city%20dress%20long_hair%20night%20panties%20ponytail%20red_hair%20sideboob%20twintails%20underwear%20watermark%20yuri.png",
      "https://konachan.com/image/0e8f679f66ebcdd90d690f5ecc2ca896/Konachan.com%20-%20308989%20allenes%20ass%20bikini%20blush%20breasts%20demon%20headband%20long_hair%20navel%20nipples%20nude%20original%20pussy%20red_eyes%20succubus%20swimsuit%20tail%20tattoo%20white%20wings%20yuri.jpg",
      "https://konachan.com/image/64b3b66ff1db1c4fcbf6b113db41b38b/Konachan.com%20-%20318215%202girls%20aria.%20blue_eyes%20breasts%20censored%20green_eyes%20hitachi_mako%20nipples%20senren_banka%20tomotake_yoshino%20yuri.jpg",
      "https://konachan.com/image/5ee5008dd4fc7374eb4b16e663149893/Konachan.com%20-%20284872%20ass%20bed%20blush%20breasts%20brown_eyes%20cum%20futanari%20group%20long_hair%20navel%20nipples%20nude%20penis%20pink_hair%20pussy%20sex%20twins%20twintails%20vocaloid%20voiceroid%20yuri.png",
      "https://konachan.com/image/dbe8e7caafffb36bf75d0a0d1ab425cc/Konachan.com%20-%20313537%202girls%20bloomers%20bow%20breasts%20brown_eyes%20brown_hair%20fingering%20green_eyes%20ke-ta%20long_hair%20miko%20navel%20nipples%20nopan%20open_shirt%20see_through%20touhou%20yuri.jpg",
      "https://konachan.com/image/d49e46869473ee7f52e6618335fb990d/Konachan.com%20-%20292171%202girls%20atelier%20atelier_lydie_%26_suelle%20dkoro%20firis_mistlud%20ilmeria_von_leinweber%20signed%20uncensored%20yuri.png",
      "https://img2.gelbooru.com/images/d3/d3/d3d3f650e9792251c396fd20f2ce95b7.jpeg",
      "https://konachan.com/image/0380a55fee80e9837c0696f703974e55/Konachan.com%20-%20311634%20azur_lane%20blush%20book%20breasts%20brown_eyes%20elbow_gloves%20gloves%20gray_hair%20hat%20long_hair%20pink_eyes%20pink_hair%20pussy_juice%20shorts%20thighhighs%20twintails%20yuri.jpg",
      "https://konachan.com/image/910682b66dda631a3d3cd2f6736e2f12/Konachan.com%20-%20281574%202girls%20aliasing%20ass%20ass_grab%20bed%20black_eyes%20blush%20bra%20brown_hair%20idolmaster%20long_hair%20panties%20pussy_juice%20shiomi_shuuko%20short_hair%20underwear%20yuri.png",
      "https://files.yande.re/image/2283f51bbf9c65eae2d3c394849332e3/yande.re%20704468%20anal%20areola%20ass%20bodysuit%20bondage%20bra%20breast_grab%20garter%20no_bra%20pantsu%20see_through%20suerte%20thighhighs%20thong%20uniform%20weapon%20yuri.jpg",
      "https://konachan.com/image/93f77f83758fd0e4787fbc074fc883a7/Konachan.com%20-%20297005%202girls%20barefoot%20bed%20black_hair%20blonde_hair%20blue_eyes%20blush%20breasts%20dark_skin%20dildo%20green_eyes%20long_hair%20nipples%20nude%20sasayuki%20vibrator%20wet%20yuri.png",
      "https://konachan.com/image/b7d047617b696e63c9760e5542dd0df3/Konachan.com%20-%20203818%202girls%20bed%20black_hair%20blush%20breasts%20brown_hair%20fingering%20fukuroumori%20long_hair%20nipples%20no_bra%20open_shirt%20ponytail%20thighhighs%20wet%20yellow_eyes%20yuri.png",
      "https://konachan.com/image/ea9e3c232cc3dfcbd77c5d57b004647f/Konachan.com%20-%20282112%20anus%20ass%20bed%20blonde_hair%20braids%20breast_grab%20breasts%20censored%20game_cg%20long_hair%20mia_welch%20nipples%20panty_pull%20pantyhose%20pink_hair%20pussy%20pussy_juice%20yuri.png",
      "https://konachan.com/image/7b6c307beb6de3af2cf8bb164ae8bb91/Konachan.com%20-%20308089%202girls%20bed%20black_eyes%20blush%20bow%20breasts%20brown_hair%20kneehighs%20nipples%20nopan%20open_shirt%20original%20pussy%20skirt%20skirt_lift%20tribadism%20uncensored%20yuri.png",
      "https://img.xbooru.com/images/550/bbb696e077cd3526cb933cc9961f32a4.png",
      "https://konachan.com/image/5529847ee73bb653ffe1d3fe4b88f1cd/Konachan.com%20-%20295642%202girls%20ass%20braids%20censored%20gray_eyes%20gray_hair%20hisakawa_hayate%20hisakawa_nagi%20hug%20idolmaster%20kiss%20long_hair%20narunaru1320%20nude%20pussy%20yuri.png",
      "https://konachan.com/image/27f61f0d96044a59f95943f7dc1a6bf3/Konachan.com%20-%20289321%202girls%20anal%20aqua_eyes%20breasts%20cape%20corset%20dark_skin%20dildo%20halloween%20hoodie%20nipples%20no_bra%20nopan%20open_shirt%20pussy%20tail%20uncensored%20wanaca%20yuri.png",
      "https://img.xbooru.com/images/640/1d04c002e04d3f31135d0f4d94abc166.jpeg",
      "https://konachan.com/image/669b9926ef9a1f72f68a9b042e99ea5f/Konachan.com%20-%20302897%202girls%20bed%20blush%20bra%20breasts%20dildo%20gray_hair%20navel%20night%20nipples%20no_bra%20nopan%20original%20panties%20red_eyes%20ribbons%20sex%20twintails%20underwear%20wink%20yuri.jpg",
      "https://konachan.com/image/d283ef84fe2e7506984a4d0f289fc060/Konachan.com%20-%20280375%202girls%20azur_lane%20bikini_top%20breasts%20foxgirl%20gloves%20long_hair%20navel%20nipples%20nude%20ponytail%20pussy%20thighhighs%20tofuubear%20tribadism%20watermark%20wristwear%20yuri.jpg",
      "https://hk.rule34.xxx/images/3747/b9b8eefabe4c7655b20e38b1509265dcc9dd0b88.jpg",
      "https://konachan.com/image/a177f5e9627b0ede708370c10104d128/Konachan.com%20-%20285065%202girls%20an-telin%20barefoot%20blue_eyes%20blue_hair%20blush%20bow%20hoodie%20long_hair%20necklace%20nopan%20ofuda%20ponytail%20sunglasses%20touhou%20twintails%20wristwear%20yuri.png",
      "https://hk.rule34.xxx/images/3748/9fd652328db276d4f4910e3be9e190c1.png",
      "https://konachan.com/image/7242e59d01ee362bd2390144ab5c10e1/Konachan.com%20-%20297033%202girls%20ass%20blush%20breasts%20cum%20fingering%20gloves%20hanshu%20logo%20long_hair%20nipples%20pussy%20red_eyes%20tattoo%20techgirl%20thighhighs%20wet%20white%20white_hair%20wink%20yuri.jpg",
      "https://konachan.com/image/78cd6ca98725846e2b7645d6c05e5f85/Konachan.com%20-%20273318%202girls%20ass%20barefoot%20bed%20blue_eyes%20blush%20breasts%20dildo%20green_eyes%20headband%20katarina%20long_hair%20nipples%20pussy%20red_hair%20uncensored%20vibrator%20yuri.jpg",
      "https://img.xbooru.com/images/550/e8fc4013176caff11a4ed23667de76aa.png",
      "https://konachan.com/image/d8be52c698148c5cfb1d5abfb6cff7ce/Konachan.com%20-%20295420%202girls%20ass%20breasts%20cropped%20fingering%20green_hair%20kiss%20nipples%20ouma_tokiichi%20pink_hair%20pussy_juice%20short_hair%20spread_legs%20touhou%20waifu2x%20yuri.png",
      "https://konachan.com/image/f3ab8ef64d2fd8fcb0c677935382a3bb/Konachan.com%20-%20293717%202girls%20ass%20black_hair%20blush%20cameltoe%20hat%20long_hair%20numpopo%20original%20panties%20pussy_juice%20red_eyes%20skirt_lift%20stockings%20underwear%20white_hair%20yuri.jpg",
      "https://konachan.com/image/c1b988a24309b6310d4d9c1d8997a98f/Konachan.com%20-%20291674%202girls%20blindfold%20blush%20breasts%20gray_hair%20limgae%20long_hair%20navel%20nier%20nipples%20pussy%20realistic%20short_hair%20techgirl%20thighhighs%20tribadism%20watermark%20yuri.png",
      "https://files.yande.re/image/eb0d2db92e7711089cd0618ffa795cc4/yande.re%20705150%20anus%20lexaiduer%20naked%20nipples%20pussy%20tagme%20thighhighs%20uncensored%20wings%20yuri.jpg",
      "https://konachan.com/image/fefdb862e1f4f7043c64ad9b1b59b402/Konachan.com%20-%20303184%202girls%20anal%20barefoot%20blush%20bondage%20braids%20breasts%20catgirl%20collar%20karyl%20long_hair%20miazi%20nipples%20nude%20pecorine%20stockings%20twintails%20waifu2x%20yuri.png",
      "https://konachan.com/image/57604b19db5dd074a337bf30e88311f3/Konachan.com%20-%20301938%202girls%20anal%20animal_ears%20azur_lane%20blue_eyes%20blush%20bondage%20braids%20breasts%20catgirl%20long_hair%20nipples%20nude%20pussy_juice%20tail%20white_hair%20yuri.png",
      "https://konachan.com/image/5ae548947affac3ebfc17a7929162458/Konachan.com%20-%20296265%202girls%20anotoki_ashi%20arknights%20breasts%20long_hair%20nipples%20skadi_%28arknights%29%20specter_%28arknights%29%20tentacles%20yuri.jpg",
      "https://konachan.com/image/78ad4f538685b3b66008c0d9a82ea5a7/Konachan.com%20-%20315515%202girls%20anthropomorphism%20azur_lane%20blonde_hair%20cum%20erect_nipples%20kumano_%28azur_lane%29%20long_hair%20open_shirt%20purple_eyes%20pussy_juice%20shirt%20spread_legs%20yuri.jpg",
      "https://img2.gelbooru.com/images/d6/78/d678b043dcc5366631878bb4269a0527.png",
      "https://hk.rule34.xxx/images/3748/28ae2f64c5cbb3c1fffed9c539719d50.jpeg",
      "https://konachan.com/image/af85a2ba30be6122e732a679b049cd9e/Konachan.com%20-%20318826%202girls%20anthropomorphism%20azur_lane%20cameltoe%20dido_%28azur_lane%29%20dress%20fingering%20long_hair%20microphone%20monobe_%28pixiv3695323%29%20nopan%20pussy_juice%20yuri.jpg",
      "https://konachan.com/image/8e6d1791a6a9a941580474e860fa24d8/Konachan.com%20-%20312419%202girls%20anus%20ass%20blonde_hair%20garter_belt%20goth-loli%20long_hair%20niliu_chahui%20nopan%20original%20pussy%20thighhighs%20tokisaki_mio%20uncensored%20white_hair%20yuri.png",
      "https://konachan.com/image/648f696a16f8fe531d5e2ce2a58204b8/Konachan.com%20-%20315850%202girls%20aqua_eyes%20ass%20blue_eyes%20blue_hair%20braids%20breasts%20cropped%20gray_hair%20long_hair%20navel%20nipples%20nude%20pussy%20twintails%20uncensored%20watermark%20yuri.png",
      "https://konachan.com/image/528d4da9075e6c052ebd6d562a08c491/Konachan.com%20-%20315540%202girls%20anus%20ass%20barefoot%20breasts%20building%20car%20city%20dress%20long_hair%20night%20nipples%20no_bra%20panties%20ponytail%20pussy%20red_hair%20sideboob%20underwear%20yuri.png",
      "https://konachan.com/image/e82e742b1a165947598db0be01ad8f25/Konachan.com%20-%20281468%202girls%20anus%20ass%20bed%20blue_hair%20blush%20breasts%20green_eyes%20headband%20horns%20janong%20long_hair%20navel%20nipples%20nude%20pink_hair%20pussy%20tears%20yuri%20zero_two.png",
      "https://files.yande.re/image/c6c5c08fd1d3d1471f6705bd35ccf3f8/yande.re%20705716%20animal_ears%20ass%20bondage%20dildo%20ginklaga%20naked%20nekomimi%20nipples%20nopan%20pussy%20pussy_juice%20tail%20thighhighs%20topless%20yuri.jpg",
      "https://konachan.com/image/be3c5f2eb727e2acb426efdb570a96d6/Konachan.com%20-%20295670%202girls%20anus%20ass%20blush%20bodysuit%20bow%20breasts%20cameltoe%20close%20cropped%20garter%20gloves%20kiss%20leotard%20long_hair%20mvv%20navel%20ofuda%20original%20pussy%20tattoo%20yuri.jpg",
      "https://img2.gelbooru.com/images/31/22/3122f271008debaaf33a8efe8f265a67.jpeg",
      "https://konachan.com/image/68fec3d2a884691299324c5911bb1cd9/Konachan.com%20-%20300357%202girls%20aqua_eyes%20ass%20blonde_hair%20blush%20close%20iku_%28ikuchan_kaoru%29%20long_hair%20original%20pubic_hair%20short_hair%20wet%20yuri.jpg",
      "https://konachan.com/image/edc6842af6b904336ba91c6ce0cd9faf/Konachan.com%20-%20281990%202girls%20anus%20ass%20blue_eyes%20blue_hair%20blush%20cropped%20headband%20ishikei%20navel%20nude%20pussy%20rem_%28re%3Azero%29%20scan%20short_hair%20thighhighs%20twins%20uncensored%20yuri.png",
      "https://img.xbooru.com/images/640/4ce8ed4048f6a8732b908d95f34dfda9.jpeg",
      "https://konachan.com/image/4abe54ed5eb3724c0eddf5d1c58af2aa/Konachan.com%20-%20299741%202girls%20aki99%20blonde_hair%20breast_grab%20close%20dark_skin%20navel%20nipples%20pussy%20pussy_juice%20sakura_hibiki%20uehara_ayaka%20uncensored%20yuri.png",
      "https://img2.gelbooru.com/images/62/af/62af2bd77db97553cfb2af1ff86ee579.png",
      "https://konachan.com/image/6c139cc4c732c393b102a6ef18420a9d/Konachan.com%20-%20315609%202girls%20annalise_queen_of_the_vilebloods%20bloodborne%20gray_bear%20gray_hair%20long_hair%20navel%20nopan%20pussy%20uncensored%20yuri.jpg",
      "https://konachan.com/image/654bc278d5d4ef0aaf2aa664681967b3/Konachan.com%20-%20314123%202girls%20animal_ears%20anus%20censored%20dildo%20elbow_gloves%20garter_belt%20gloves%20kiss%20long_hair%20pink_hair%20pussy%20sex%20sy4%20tagme_%28character%29%20yuri%20zero_project.png",
      "https://img2.gelbooru.com/images/e3/8b/e38b93d4219d9382674096a252a80dda.jpeg",
      "https://konachan.com/image/2ff28a2d0a8f28e908417f1f7c869da6/Konachan.com%20-%20288808%202girls%20ass%20breasts%20brown_hair%20cunnilingus%20gayarou%20nipples%20nude%20original%20purple_eyes%20pussy_juice%20scan%20short_hair%20yuri.png",
      "https://hk.rule34.xxx/images/3748/ba1562ae22f9bcca3d644a6b65a0d13c.jpeg",
      "https://danbooru.donmai.us/data/415317915f5d0ec7bf4f853d92cd169a.jpg",
      "https://files.yande.re/image/f7df44f38a9ad8cc790a94a51d8d10af/yande.re%20705922%20anus%20areola%20black_clover%20cunnilingus%20mandio_art%20mimosa_vermillion%20naked%20nipples%20noelle_silva%20pussy%20pussy_juice%20topless%20uncensored%20yuri.jpg",
      "https://konachan.com/image/024f5fc0d5c4166583f3386841aa11bb/Konachan.com%20-%20295407%20anal%20anus%20ass%20ass_grab%20blue_eyes%20blue_hair%20braids%20breasts%20dildo%20gray_hair%20kiss%20leotard%20long_hair%20nude%20pussy%20richelieu%20thighhighs%20vibrator%20white%20yuri.jpg",
      "https://konachan.com/image/9db3d3a222e6eda57016bbc2cc4edeb3/Konachan.com%20-%20279579%202girls%20blindfold%20blonde_hair%20blush%20breasts%20fingering%20ginhaha%20long_hair%20navel%20nipples%20nude%20pussy%20spread_legs%20sword_maiden%20uncensored%20yuri.png",
      "https://konachan.com/image/1ce8af3fd0410e5e33b69d5118789d80/Konachan.com%20-%20296632%202girls%20blush%20bow%20bra%20breasts%20cropped%20long_hair%20nipples%20open_shirt%20original%20pubic_hair%20pussy%20red_eyes%20skirt%20tribadism%20twintails%20underwear%20yuri.png",
      "https://konachan.com/image/24b4cddac31867b31b0db6c8f663630f/Konachan.com%20-%20313939%20anal%20anus%20bed%20black_hair%20blue_eyes%20breasts%20censored%20dildo%20fingering%20group%20hat%20long_hair%20nipples%20nude%20pussy%20short_hair%20thighhighs%20twintails%20yuri.jpg",
      "https://konachan.com/image/5d61536e7b89bcf6f4c98206683da347/Konachan.com%20-%20290987%202girls%20aconitea%20bed%20black_hair%20cunnilingus%20game_cg%20gray_hair%20il_shi%20koichi_ai%20long_hair%20navel%20nude%20pussy%20shirt_lift%20short_hair%20uncensored%20yuri.png",
      "https://img.xbooru.com/images/256/20d004f74a4274c7ead6826c625ecdbe.png",
      "https://konachan.com/image/711e98c61ac7ea0fc22c2a9ef0bf8683/Konachan.com%20-%20298887%20anal%20anus%20ass%20barefoot%20blue_eyes%20blush%20breasts%20censored%20gradient%20group%20kinhasu%20kiss%20long_hair%20navel%20nipples%20nude%20pink_hair%20pussy%20red_hair%20yuri.png",
      "https://konachan.com/image/afe3d812c9ae05236d0f08e61dc0d605/Konachan.com%20-%20305749%202girls%20ass%20blonde_hair%20cameltoe%20long_hair%20niliu_chahui%20original%20panties%20pussy_juice%20red_eyes%20ribbons%20thighhighs%20tokisaki_mio%20underwear%20white_hair%20yuri.jpg",
      "https://hk.rule34.xxx/images/3746/da5e54be98ef5baca376afcf10b1e7c0afee79f1.jpg",
      "https://konachan.com/image/23c2660c30dabc5c66ce69166b7a083b/Konachan.com%20-%20312886%202girls%20braids%20breasts%20brown_hair%20flowers%20game_cg%20gray_hair%20long_hair%20navel%20nipples%20pussy%20red_eyes%20short_hair%20tears%20twintails%20uncensored%20yuri.png",
      "https://img.xbooru.com/images/256/ea4ed1ed341d51306982765807add575.jpeg",
      "https://konachan.com/image/59ef8a1bc78232192f3a766c6290ad34/Konachan.com%20-%20285962%202girls%20anus%20black_hair%20blonde_hair%20blush%20breasts%20close%20cropped%20fingering%20furisuku%20long_hair%20nipples%20nude%20pussy%20red_eyes%20spread_pussy%20uncensored%20yuri.png",
      "https://konachan.com/image/300cced6072c25f04486e6af9ce6217c/Konachan.com%20-%20310506%202girls%20aliasing%20blush%20bondage%20gray_eyes%20gray_hair%20long_hair%20nipples%20nude%20original%20pink_hair%20piripun%20pussy%20red_eyes%20short_hair%20uncensored%20wet%20yuri.png",
      "https://konachan.com/image/7269065f5933f1eaed8aec26c7c26d72/Konachan.com%20-%20313539%202girls%20ass%20blush%20breasts%20brown_hair%20bunny_ears%20bunnygirl%20censored%20dress%20ke-ta%20long_hair%20navel%20nipples%20pink_hair%20pussy%20red_eyes%20tie%20touhou%20wink%20yuri.jpg",
      "https://konachan.com/image/089cad47976d20772e8e55cf8ff724f9/Konachan.com%20-%20281340%202girls%20breasts%20fire_emblem%20headband%20horns%20long_hair%20nipples%20nude%20pussy%20pussy_juice%20red_eyes%20thighhighs%20tofuubear%20uncensored%20watermark%20wink%20yuri.jpg",
      "https://konachan.com/image/a9e5251b13a86f59a9000d7d87e5afdb/Konachan.com%20-%20311734%20animal_ears%20anthropomorphism%20azur_lane%20bondage%20foxgirl%20horns%20kiss%20nagato_%28azur_lane%29%20pantyhose%20pussy_juice%20school_uniform%20tokinohimitsu%20watermark%20yuri.png",
      "https://konachan.com/image/f81458920cd5d02f8a957e7f70f57354/Konachan.com%20-%20290349%20ass%20bed%20blush%20breasts%20collar%20dildo%20garter_belt%20gray_hair%20green_eyes%20headphones%20long_hair%20navel%20nipples%20purple_eyes%20sex%20stockings%20topless%20wet%20yuri.png",
      "https://konachan.com/image/3d97492781661a362e5c94646b008753/Konachan.com%20-%20304559%202girls%20anus%20ass%20ass_grab%20azur_lane%20black_hair%20blush%20bra%20breasts%20brown_eyes%20foxgirl%20long_hair%20nipples%20nude%20pussy%20signed%20sousouman%20underwear%20yuri.png",
      "https://hk.rule34.xxx/images/3748/a1b42b78f0a5d7030d939f9105afd1cb0367a209.jpg",
      "https://konachan.com/image/bfd2066604b369bcebae93012c7a3dbf/Konachan.com%20-%20298716%20blush%20fingering%20footjob%20group%20masturbation%20oouso%20original%20pantyhose%20school_uniform%20skirt%20spread_legs%20thighhighs%20tie%20yuri.jpg",
      "https://konachan.com/image/a751b4c14cfd3e74e24cdd46fbccd809/Konachan.com%20-%20313533%202girls%20animal_ears%20ass%20bed%20breasts%20catgirl%20censored%20cunnilingus%20kaenbyou_rin%20ke-ta%20nipples%20nude%20pink_eyes%20pink_hair%20short_hair%20tail%20touhou%20yuri.jpg",
      "https://konachan.com/image/b10689c69d5980ef22a5a6f054190dce/Konachan.com%20-%20313523%202girls%20aki_shizuha%20blonde_hair%20blush%20breasts%20censored%20fingering%20ke-ta%20kiss%20navel%20nipples%20no_bra%20nopan%20nude%20open_shirt%20short_hair%20touhou%20yuri.jpg",
      "https://konachan.com/image/c2299cb78238de2bb66f0de0cf32da23/Konachan.com%20-%20280882%202girls%20aqua_eyes%20blush%20breast_grab%20brown_hair%20cameltoe%20demon%20gloves%20gray_hair%20navel%20orange_eyes%20original%20panties%20pussy_juice%20rebe11%20underwear%20yuri.png",
      "https://konachan.com/image/5fd3a470b9b13c29a9af9bd799a2a89d/Konachan.com%20-%20308069%202girls%20arknights%20ass%20blue_hair%20blush%20breasts%20brown_eyes%20ch%27en_%28arknights%29%20dishwasher1910%20fingering%20gray_hair%20kiss%20nipples%20nude%20tail%20yuri.png",
      "https://konachan.com/image/b992278e1245578e44134b90fbc2f7c1/Konachan.com%20-%20283954%20anal%20ass%20bed%20black_hair%20blue_eyes%20blush%20breasts%20catgirl%20game_cg%20group%20headband%20long_hair%20nipples%20pink_hair%20pussy%20red_eyes%20tail%20thighhighs%20wanaca%20yuri.png",
      "https://konachan.com/image/5f8509c54e4af1a25f291face7cf1370/Konachan.com%20-%20316156%20animal_ears%20boots%20breasts%20brown_hair%20eliskalti%20foxgirl%20long_hair%20nipples%20no_bra%20nopan%20pussy_juice%20spread_legs%20tail%20tribadism%20uncensored%20yuri.jpg",
      "https://img2.gelbooru.com/images/c1/ed/c1ed4a7a65881b61387ccd2bb709b1d6.jpg",
      "https://img.xbooru.com/images/554/63ecf7e66de05726b7dd0eed1933360d.png",
      "https://files.yande.re/image/4a320a60e6b6c67780df0e400e733ecd/yande.re%20705575%20azur_lane%20breasts%20cum%20garter%20gothic_lolita%20lingerie%20lolita_fashion%20no_bra%20open_shirt%20pantyhose%20stockings%20thighhighs%20yuri%20yusha_%28m-gata%29.jpg",
      "https://konachan.com/image/ea8e0485b2dce1aead519de12d97afd9/Konachan.com%20-%20319062%202girls%20aki_minoriko%20aki_shizuha%20blonde_hair%20breast_grab%20breasts%20censored%20cropped%20nipples%20nude%20pussy%20red_eyes%20rukitsura%20scan%20touhou%20yuri.png",
      "https://konachan.com/image/aeb6a0bd6a179dabdc4a26360e00d367/Konachan.com%20-%20289241%202girls%20anus%20aqua_eyes%20aqua_hair%20ass%20badapple1003%20bed%20blush%20breasts%20pink_eyes%20pink_hair%20pussy%20rem_%28re%3Azero%29%20short_hair%20stockings%20twins%20uncensored%20yuri.png",
      "https://konachan.com/image/0205376afaccbedc164fdb67ce11172e/Konachan.com%20-%20315194%202girls%20animal_ears%20ass%20breasts%20bunny_ears%20bunnygirl%20censored%20houraisan_kaguya%20long_hair%20nipples%20nude%20purple_hair%20pussy%20red_eyes%20touhou%20yuri.png",
      "https://konachan.com/image/0d59ef92665ae4bcad590dd75e0e88b0/Konachan.com%20-%20211573%202girls%20aliasing%20black_hair%20blonde_hair%20blue_eyes%20breasts%20fingering%20hewsack%20lactation%20navel%20nipples%20purple_eyes%20pussy_juice%20skirt%20thighhighs%20yuri.png",
      "https://konachan.com/image/128635d447df8a89708578f2311b6e51/Konachan.com%20-%20314077%202girls%20ass%20blush%20breasts%20brown_hair%20christmas%20couch%20kiss%20long_hair%20original%20pussy_juice%20red_hair%20tree%20tribadism%20yuri%20yuritamashi.jpg",
      "https://konachan.com/image/ace02093fba803cd4021b295f69d8777/Konachan.com%20-%20303867%202girls%20black_hair%20blue_eyes%20blush%20bow%20bra%20breasts%20censored%20nipples%20pantyhose%20purple_eyes%20purple_hair%20pussy%20tshangen131%20underwear%20waifu2x%20wet%20yuri.png",
      "https://konachan.com/image/647c499d8b46970042625601133a0d18/Konachan.com%20-%20315321%202girls%20anthropomorphism%20anus%20ass%20azur_lane%20bed%20bondage%20cat_smile%20cheshire_%28azur_lane%29%20dildo%20pussy%20pussy_juice%20rhasta%20uncensored%20vibrator%20yuri.jpg",
      "https://img.xbooru.com/images/550/5746f2ebb3ca1bba776b07321956da12.jpeg",
      "https://konachan.com/image/b7bbf99c08e8ca68cdb24f6a67654f6b/Konachan.com%20-%20295926%20anthropomorphism%20anus%20breasts%20censored%20pantyhose%20pointed_ears%20pussy%20ray_%28pixiv9514208%29%20tail%20tentacles%20torn_clothes%20wet%20yuri%20zhanjian_shaonu.jpg",
      "https://konachan.com/image/9b7a83c1f5e0eb7ecadf197542ef6778/Konachan.com%20-%20318764%202girls%20a.x.%20bed%20brown_hair%20cunnilingus%20original%20pussy%20school_uniform%20short_hair%20skirt_lift%20uncensored%20waifu2x%20yuri.png",
      "https://img2.gelbooru.com/images/78/2f/782f9b382122415cd28bee286f35d7f5.jpeg",
      "https://img.xbooru.com/images/523/8721a749a4b534893d900fb88f0e40f3.png",
      "https://konachan.com/image/94d759b13c6b360e78f3c9d4e1f2234e/Konachan.com%20-%20297220%202girls%20ass%20blush%20breasts%20brown_eyes%20couch%20green_eyes%20hat%20kirani%20long_hair%20nipples%20nude%20pokemon%20pussy%20short_hair%20twintails%20watermark%20wink%20yuri.png",
      "https://konachan.com/image/3e8677c20de868e9148bf668ad042cdd/Konachan.com%20-%20282448%202girls%20akizone%20anus%20ass%20ass_grab%20au_ra%20black_hair%20blush%20breasts%20christmas%20horns%20nipples%20pussy%20red_eyes%20thighhighs%20uncensored%20white_hair%20yuri.jpg",
      "https://konachan.com/image/b05910b9fa2337c8609dd6da77d72adb/Konachan.com%20-%20292793%202girls%20aqua_eyes%20blush%20bondage%20bow%20breasts%20censored%20gag%20lexington%20long_hair%20nipples%20no_bra%20nopan%20pussy%20rope%20tape%20tears%20thighhighs%20wristwear%20yuri.png",
      "https://konachan.com/image/493d966233f1059544ef78c7d8b58fdd/Konachan.com%20-%20303839%202girls%20blue_eyes%20blue_hair%20blush%20breasts%20censored%20chain%20gloves%20long_hair%20nipples%20no_bra%20nopan%20poho%20pussy%20red_eyes%20tribadism%20white%20white_hair%20yuri.png",
      "https://img2.gelbooru.com/images/e9/31/e93178884da4ba2c4ac12ca93eee908e.jpeg",
      "https://konachan.com/image/2d5bdbda71a88990d240fa13ded6f8a3/Konachan.com%20-%20300224%202girls%20ass%20blue_hair%20breasts%20cameltoe%20cropped%20fang%20hat%20long_hair%20nipples%20nude%20ofuda%20original%20panties%20sideboob%20tribadism%20underwear%20waifu2x%20wet%20yuri.png",
      "https://konachan.com/image/88f9e710c0a0ef8fca366f20088eba84/Konachan.com%20-%20308646%20anus%20ass%20ayase-mio%20blush%20breasts%20censored%20fingering%20long_hair%20nipples%20no_bra%20nopan%20original%20pussy%20skirt%20tears%20thighhighs%20tribadism%20twintails%20wet%20yuri.png",
      "https://konachan.com/image/64db7d25f941a2570640203b7c3c504b/Konachan.com%20-%20292306%202girls%20ass%20blonde_hair%20breasts%20dildo%20long_hair%20nipples%20nude%20original%20pantyhose%20pussy%20pussy_juice%20sex%20tail%20thighhighs%20uncensored%20watermark%20yuri.jpg",
      "https://konachan.com/image/886dcaeba5da08aa80d040c00222ae0d/Konachan.com%20-%20313482%202girls%20amami_haruka%20censored%20idolmaster%20idolmaster_cinderella_girls%20kanzaki_ranko%20maechuu%20navel%20nipples%20nude%20pussy%20yuri.png",
      "https://konachan.com/image/e91c84dd2b79eea19b27100a12f3c896/Konachan.com%20-%20292162%202girls%20anus%20ass%20bed%20blush%20fingering%20hat%20long_hair%20navel%20nomayo%20open_shirt%20purple_hair%20pussy_juice%20red_eyes%20touhou%20twintails%20uncensored%20wet%20wink%20yuri.png",
      "https://img.xbooru.com/images/550/32b9f7b10b011afcbedba11d2e8e015b.jpeg",
      "https://konachan.com/image/779855c5901c635d7765126e96a05988/Konachan.com%20-%20310021%202girls%20aqua_eyes%20ass%20blush%20braids%20breasts%20catgirl%20gloves%20karyl%20long_hair%20miazi%20nipples%20nude%20pecorine%20ponytail%20tail%20thighhighs%20tiara%20waifu2x%20yuri.png",
      "https://konachan.com/image/b2b6b90992c8a6be422afa74def9c7aa/Konachan.com%20-%20310029%202girls%20barefoot%20blue_eyes%20blue_hair%20blush%20bra%20breasts%20cleavage%20kentarosu7%20navel%20nipples%20nude%20panties%20pink_hair%20pussy%20red_eyes%20tribadism%20underwear%20yuri.png",
      "https://konachan.com/image/c1634dec99be017b89f6005771322b82/Konachan.com%20-%20318423%202girls%20arknights%20ass%20barefoot%20blush%20breasts%20cameltoe%20footjob%20long_hair%20panties%20pubic_hair%20pussy%20tail%20thighhighs%20uncensored%20underwear%20white_hair%20yuri.jpg",
      "https://konachan.com/image/e3b32faf248ebe88d4c5f335b8644534/Konachan.com%20-%20304904%202girls%20blush%20bow%20breasts%20brown_hair%20fingering%20gray_eyes%20gray_hair%20long_hair%20no_bra%20nude%20open_shirt%20original%20piripun%20red_eyes%20shirt%20skirt%20yuri.png",
      "https://konachan.com/image/e14de232964bf49318aab09b00930f85/Konachan.com%20-%20305756%202girls%20black_hair%20blonde_hair%20blue_eyes%20blush%20fingering%20green_eyes%20hakuleg%20long_hair%20panties%20sen_no_kiseki%20tears%20underwear%20waifu2x%20wink%20yuri.png",
      "https://konachan.com/image/c79ecbe0c2ee890819b3c3992fea9fd6/Konachan.com%20-%20296206%202girls%20an-telin%20ass%20bed%20blonde_hair%20cunnilingus%20gray_hair%20hakurei_reimu%20kirisame_marisa%20long_hair%20nude%20touhou%20yuri.png",
      "https://konachan.com/image/f8c83a910f8960c8c8f453342619233e/Konachan.com%20-%20296311%202girls%20anus%20bow%20breasts%20censored%20collar%20crossover%20cum%20green_eyes%20kiss%20nipples%20pussy%20red_eyes%20red_hair%20short_hair%20tattoo%20touhou%20vibrator%20wings%20yuri.jpg",
      "https://files.yande.re/image/78120ab17d73aa813353aee5659e9f61/yande.re%20705698%20bondage%20breast_grab%20feet%20ginklaga%20nipples%20nopan%20pantyhose%20pussy%20pussy_juice%20strap-on%20thighhighs%20topless%20yuri.jpg",
      "https://konachan.com/image/b8576e22a3f1ef1fbeb37069ecf1df37/Konachan.com%20-%20317267%202girls%20ass%20censored%20demon%20fingering%20kiss%20long_hair%20nude%20original%20pointed_ears%20pussy%20succubus%20tahnya%20tail%20yuri.png",
      "https://konachan.com/image/a38af19762292efa9d6a42c304e81016/Konachan.com%20-%20288830%202girls%20blush%20breasts%20brown_eyes%20cunnilingus%20long_hair%20nipples%20no_bra%20nopan%20open_shirt%20red_eyes%20red_hair%20sekibanki%20skirt_lift%20touhou%20wolfgirl%20yuri.jpg",
      "https://konachan.com/image/8d181352ed049c7ffd09b8cb4051c492/Konachan.com%20-%20314982%202girls%20censored%20heroine_%28pokemon_conquest%29%20mibry_%28phrysm%29%20oichi_%28pokemon_conquest%29%20pokemon%20pokemon_%2B_nobunaga_no_yabou%20watermark%20yuri.jpg",
      "https://konachan.com/image/dd3837107a2d32d09a959b826c0014dc/Konachan.com%20-%20310672%202girls%20bed%20fate_grand_order%20fate_%28series%29%20jeanne_d%27arc_alter%20jeanne_d%27arc_%28fate%29%20kaze_no_gyouja%20nipples%20nude%20pussy%20signed%20uncensored%20yuri.jpg",
      "https://konachan.com/image/a5157b1f5cc3100f2b3603400312e5f7/Konachan.com%20-%20299120%202girls%20anus%20ass%20blindfold%20blonde_hair%20blue_eyes%20breast_grab%20breasts%20dress%20hat%20long_hair%20nipples%20no_bra%20nopan%20pussy%20rei_kun%20thighhighs%20uncensored%20yuri.png",
      "https://konachan.com/image/c932849dc9b3aa815e4a3c113e0c9f55/Konachan.com%20-%20293783%202girls%20ass%20barefoot%20black_hair%20blush%20brown_hair%20fingering%20green_eyes%20hug%20long_hair%20michairu%20pussy_juice%20sketch%20tougou_mimori%20yuri%20yuuki_yuuna.jpg",
      "https://konachan.com/image/344c3ecaa02cb82920e096d7e89a3ec2/Konachan.com%20-%20308229%202girls%20anus%20ass%20ass_grab%20barefoot%20black_hair%20blush%20brown_eyes%20censored%20couch%20cunnilingus%20idolmaster%20nude%20purple_hair%20pussy%20short_hair%20wink%20yuri.png",
      "https://img2.gelbooru.com/images/29/2d/292db8e7c92c826638f18cf805593574.jpeg",
      "https://danbooru.donmai.us/data/53df4e8e4ff58bb5bfc4493b003003e0.jpg",
      "https://konachan.com/image/02002b789838a7cdb96f7788369a418b/Konachan.com%20-%20281989%202girls%20blush%20breasts%20brown_hair%20fingering%20gray_hair%20microphone%20nipples%20panty_pull%20pantyhose%20pussy%20thighhighs%20twintails%20uncensored%20urine%20yuri.png",
      "https://img.xbooru.com/images/682/4e64ee18e4e470ec423ea9e41e36fde3.png",
      "https://konachan.com/image/ccfd41c656ad2957c4010e1dbc4bba25/Konachan.com%20-%20285031%202girls%20bed%20blonde_hair%20breast_grab%20brown_hair%20fingering%20food%20honey%20navel%20nude%20original%20panties%20panty_pull%20shirt_lift%20short_hair%20underwear%20yuri.png",
      "https://konachan.com/image/c5f0bf3a5a32ad9ee8b2bb3d92d4c4d6/Konachan.com%20-%20315509%202girls%20breasts%20brown_eyes%20brown_hair%20kaga_%28kancolle%29%20navel%20nipples%20nude%20pussy%20pussy_juice%20the_phoenix%20uncensored%20vibrator%20waifu2x%20wink%20yuri.png",
      "https://konachan.com/image/43b83c3a27d75b0a5346cc9e81da0300/Konachan.com%20-%20314389%20blush%20breasts%20brown_eyes%20cunnilingus%20dildo%20gray_hair%20horns%20long_hair%20nipples%20original%20parutoneru%20ponytail%20pussy%20tattoo%20tears%20yellow_eyes%20yuri.jpg",
      "https://img2.gelbooru.com/images/b3/4d/b34d9d87d8ad9d9bd6c77b41b9de03b9.jpg",
      "https://konachan.com/image/7069058463232cebd89d380620d7f915/Konachan.com%20-%20299712%20anus%20aqua_eyes%20ass%20bed%20black_hair%20blush%20breasts%20brown_hair%20dark_skin%20long_hair%20navel%20nipples%20nude%20pokemon%20ponytail%20pussy%20short_hair%20uncensored%20yuri.png",
      "https://konachan.com/image/dc2c83dde0301b1cdbebe793397f3b80/Konachan.com%20-%20288796%20apron%20blush%20bow%20bra%20breasts%20choker%20dark_skin%20dressing%20gloves%20gray_hair%20headdress%20long_hair%20maid%20mvv%20nipples%20original%20panties%20pussy%20underwear%20yuri.jpg",
      "https://konachan.com/image/33ef926ca2ec2161c8d1df55d280038c/Konachan.com%20-%20315510%202girls%20anthropomorphism%20anus%20ass%20breasts%20brown_eyes%20brown_hair%20kaga_%28kancolle%29%20long_hair%20pussy%20the_phoenix%20thighhighs%20uncensored%20vibrator%20waifu2x%20yuri.png",
      "https://konachan.com/image/31f04a68fb1d45ae3afa4c93df594eb6/Konachan.com%20-%20287240%202girls%20blush%20breasts%20brown_eyes%20gloves%20kiss%20logo%20long_hair%20nipples%20pussy%20pussy_juice%20rebe11%20red_hair%20skirt%20thighhighs%20tie%20uncensored%20watermark%20yuri.png",
      "https://konachan.com/image/8a1c18c36146e616eb8943544302128b/Konachan.com%20-%20316540%20aliasing%20blonde_hair%20fate_testarossa%20knsei%20long_hair%20mahou_shoujo_lyrical_nanoha%20nopan%20ponytail%20purple_hair%20pussy%20signum%20tribadism%20uncensored%20yuri.jpg",
      "https://files.yande.re/image/8e98dfe5b4f7baa538cf0beae110b70e/yande.re%20707187%20kagawa_ichigo%20sheets%20skirt_lift%20yuri.jpg",
      "https://img.xbooru.com/images/523/ca9998c3fc51a66d348eb687736eda30.jpeg",
      "https://konachan.com/image/fc3918b7405fe258b4ddf653a73fa700/Konachan.com%20-%20313494%202girls%20anus%20ass%20censored%20gradient%20long_hair%20naruto%20nipples%20nude%20pussy%20translation_request%20uchiha_mikoto%20uzumaki_kushina%20xiumu_bianzhou%20yuri.jpg",
      "https://img.xbooru.com/images/640/2d427887fe32fcc767848b1103afac8a.jpeg",
      "https://img2.gelbooru.com/images/28/cc/28ccd82c6ce9d6c97cea5140b6887709.jpeg",
      "https://img2.gelbooru.com/images/3d/dd/3ddd22f545fa34d1b134b3c31c08d61d.jpg",
      "https://danbooru.donmai.us/data/5a764d0dd03e3d4db468b709e246dd9c.jpg",
      "https://konachan.com/image/f797f915de17e87a905567020b9fb105/Konachan.com%20-%20305658%202girls%20blue_eyes%20blush%20book%20brown_hair%20censored%20drink%20food%20hoodie%20niranom%20nopan%20original%20pubic_hair%20pussy%20short_hair%20thighhighs%20tribadism%20yuri.png",
      "https://konachan.com/sample/73352d5d8243ba4a15587e5eb7d03228/Konachan.com%20-%20294462%20sample.jpg",
      "https://konachan.com/image/e7ec7b32b0118b32fe4b563ea2138ac4/Konachan.com%20-%20312418%202girls%20anus%20ass%20blonde_hair%20garter_belt%20goth-loli%20long_hair%20niliu_chahui%20nopan%20original%20pussy%20thighhighs%20tokisaki_mio%20uncensored%20white_hair%20yuri.png",
      "https://konachan.com/image/6a1699fd21ec869e3a7bfa12b6fa2774/Konachan.com%20-%20285884%202girls%20arknights%20ch%27en_%28arknights%29%20horns%20hoshiguma_%28arknights%29%20kvpk5428%20long_hair%20nipples%20sex%20urine%20yuri.jpg",
      "https://konachan.com/image/b5bd4c69bbbaaff55fee083b8c3addf2/Konachan.com%20-%20317765%20breasts%20cum%20dark_skin%20green_hair%20lactation%20lillie_%28pokemon%29%20long_hair%20mao_%28pokemon%29%20navel%20nipples%20nude%20pokemon%20pussy%20suiren_%28pokemon%29%20yuri.png",
      "https://img2.gelbooru.com/images/be/14/be14e6fc288f3c6cfaa43d727cec1004.png",
      "https://hk.rule34.xxx/images/3748/b72a7fadc4e19ca4d90b26faf21e105e.jpeg",
      "https://konachan.com/image/cd3e3e928f2a343a1ce0674493017e20/Konachan.com%20-%20279799%202girls%20animal_ears%20blush%20breasts%20brown_hair%20censored%20fingering%20gray_hair%20microphone%20nipples%20panty_pull%20pantyhose%20pussy%20thighhighs%20twintails%20urine%20yuri.jpg",
      "https://img2.gelbooru.com/images/9a/9a/9a9aba73a9401f5062215b24fbe8cbc2.jpeg",
    ];
    var result = yuri[Math.floor(Math.random() * yuri.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/pussy", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var pussy = [
      "https://konachan.com/sample/f9fa53d9c84cb91e888ffebbaadb60dd/Konachan.com%20-%20314894%20sample.jpg",
      "https://konachan.com/sample/4eb3474d10f12495a2be3e182cbf7e01/Konachan.com%20-%20316619%20sample.jpg",
      "https://konachan.com/sample/08bb82891f6c6d0238942531c179dd69/Konachan.com%20-%20316316%20sample.jpg",
      "https://konachan.com/image/117b3b27f741563e3cc898b535a9f1fc/Konachan.com%20-%20317353%20anus%20eyepatch%20fischl_%28genshin_impact%29%20genshin_impact%20masturbation%20nipples%20nude%20pussy%20spread_pussy%20third-party_edit%20tttanggvl%20uncensored.jpg",
      "https://konachan.com/image/4b81b9d411dc35ba1e296f00054000c5/Konachan.com%20-%20317350%20barbara_%28genshin_impact%29%20censored%20genshin_impact%20long_hair%20penis%20pussy%20sex%20skirt_lift%20twintails%20vierzeck%20wink.jpg",
      "https://konachan.com/image/2e62ca6980a2c2cd77a97a7923d7de08/Konachan.com%20-%20317345%20animal_ears%20barefoot%20bell%20bow%20breasts%20brown_hair%20building%20choker%20flowers%20grass%20long_hair%20nipples%20original%20pussy%20tail%20tree%20uncensored%20yellow_eyes.jpg",
      "https://konachan.com/sample/4a0f6bb2cf85559ec865da7b2ddf2547/Konachan.com%20-%20317339%20sample.jpg",
      "https://konachan.com/sample/440a7610b93d91ab093544a89089c2e7/Konachan.com%20-%20317337%20sample.jpg",
      "https://konachan.com/sample/ea55561790e0fdc8ea63b1f54c1fbda3/Konachan.com%20-%20317328%20sample.jpg",
      "https://konachan.com/sample/8f46ff65ee4b208316a0c4bdcc989370/Konachan.com%20-%20317317%20sample.jpg",
      "https://konachan.com/sample/2b26ab530b7c6f015873004040e4ae60/Konachan.com%20-%20317285%20sample.jpg",
      "https://konachan.com/sample/e6970436ee2b650d3fcde3cb4210e6f2/Konachan.com%20-%20317290%20sample.jpg",
      "https://konachan.com/sample/e3747d62ab22fe9511124268c63be7c9/Konachan.com%20-%20317222%20sample.jpg",
      "https://konachan.com/sample/cffb8dd3fdd559af7ac39297f7cab4cc/Konachan.com%20-%20317167%20sample.jpg",
      "https://konachan.com/sample/2009598d749a5a111e61d5c65e3c757c/Konachan.com%20-%20317279%20sample.jpg",
      "https://konachan.com/sample/5c9c32ad5b7624d0c2baa8f298c31188/Konachan.com%20-%20317101%20sample.jpg",
      "https://konachan.com/sample/ba3859ae1511e240a88daccaf7a04573/Konachan.com%20-%20317063%20sample.jpg",
      "https://konachan.com/jpeg/448e0c4705f456978b5e2c901493471f/Konachan.com%20-%20316847%20cropped%20game_cg%20hentai_girl_hime%20tagme_%28artist%29%20tagme_%28character%29%20uncensored.jpg",
      "https://konachan.com/sample/36f0c0e075865ef92a4f72ca379ddcc7/Konachan.com%20-%20316955%20sample.jpg",
      "https://konachan.com/sample/747b76bfb23f7903019da58fb09bea9b/Konachan.com%20-%20316633%20sample.jpg",
      "https://konachan.com/sample/52730995ccd5136bb6c8524ab7363396/Konachan.com%20-%20316634%20sample.jpg",
      "https://konachan.com/sample/f855a318c6e1d15cf2762b075a80d36f/Konachan.com%20-%20316712%20sample.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770989111023894557/Hentai_nation_4.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770989422682439680/Hentai_nation_1.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/771000755216973874/0497-1cmypx0C9hI.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001007869788180/0509-zbyvCgRkuSA.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001299226984469/0524-HdkO8t2f6go.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001347696099421/523-C7dtJ0l-rj0.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002374822297610/0608-aXFKZN-PWlU.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002684639150090/0636-67wdpO6mMcc.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002947240722432/0661-VwzjLvsGI7A.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002955733663764/662-Yx9XfYTatZM.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771015583209750578/1626-H7y-au_FDqU.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771015701518614548/1635-U5PnTGNEoGk.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016132718362664/1636-eIXD3KBhtKQ.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016370569740308/1653-cIpIm5JVhAQ.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771017275360411668/1813-W4HozU682l8.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771019708522037248/Hentai_Nation_253.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771035044617125918/RLyUz_2OSXM.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771035046747308032/TEszjyDPdSw.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771375290500775936/Hentai_Nation_48.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771861611995463730/z4EdGoMSXwaMwrb6SSLu56WBCcGI7Kfk8s0L4kxgBi8.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/771861644044271677/EbQUWvvWoAk90ng.png",
    ];
    var result = pussy[Math.floor(Math.random() * pussy.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/orgy", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var orgy = [
      "https://media.discordapp.net/attachments/531827568966631425/683171889190797313/BQY3GFi_d.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/681081380930846726/image-3.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/677196930182283330/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/673765341649829898/7mylpnyd3qm31.png",
      "https://media.discordapp.net/attachments/531827568966631425/669589880040456222/hamakaze_kantai_collection_drawn_by_mukka__sample-5fb9fb58367f2a0d7af0049d6e7fa153.png",
      "https://media.discordapp.net/attachments/531827568966631425/669511182763425792/563-moon-porn.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/669506265361285130/lusciousnet_lusciousnet_cum-dumpster-collection_335554-0167_1297474808.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/668546234872496145/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/668504855089774612/22019832.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/666773194669031473/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/666772798164828203/image1.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/666772798164828202/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/665746767207464960/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/665699961295339549/image1.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/665668017589583876/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/665335006633394186/image1.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/664648350754275359/Orgy_Hentai_1.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/656900840627503104/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/655455362425552896/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/653195581803462666/kizuna_ai_a_i_channel_drawn_by_hews_hack__sample-868f2a2d1e8da46818d80373b166eee8.png",
      "https://media.discordapp.net/attachments/531827568966631425/646576108132630528/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/644976759447486494/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/643700315568472094/image0-3.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/641889592097898506/image0-3.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/641679265187758101/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/641155224911872001/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/639262771950780417/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/639262419247431681/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/638430989042843660/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/637869509029527552/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/637294005184626727/image0.png",
      "https://media.discordapp.net/attachments/531827568966631425/637157203211714590/e3d3370082da72e0b1d2dcfbb3292a0e.png",
      "https://media.discordapp.net/attachments/531827568966631425/636747814558498835/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/636744465234657310/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/636737649813487636/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/636158140060139530/IFN3Muy.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/636158139317878785/DRK8a6h.png",
      "https://media.discordapp.net/attachments/531827568966631425/636158138680082443/B0FoBbI.png",
      "https://media.discordapp.net/attachments/531827568966631425/634878496170311681/9268df5.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/634878496170311680/2404072.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/634876590173716481/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/634874013524426754/b9f2ee4.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/634702880791855125/5V84Rx5.png",
      "https://media.discordapp.net/attachments/531827568966631425/634636786882052103/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/634635186902007818/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/634160824214224906/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/634160678650773515/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/631304450845442048/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/630040247563976704/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/630034581688680498/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/627193902415216651/katsuragi_kantai_collection_drawn_by_1059__sample-7ad5a9fb4315c475ab0bb22a9e26c418.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/626684102342475786/image0.png",
      "https://media.discordapp.net/attachments/531827568966631425/626286266207567882/image0.jpg",
      "https://media.discordapp.net/attachments/526379385691963392/578543045830770689/20190516_202027.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/624698026434363405/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/622324922630537236/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/622323032609783808/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/622321941667381249/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/622212619259871255/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/621944042636443648/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/621440737032142858/kairi_and_sora_kingdom_hearts_iii_and_etc_drawn_by_lightsource__6c27aa68d16c7fcc130e8f21397521e9.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/620285258239311882/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/619102984474984458/lusciousnet_lusciousnet_double-penetration-hentai-pictures_p_2124846625.1024x0.png",
      "https://media.discordapp.net/attachments/531827568966631425/615605406252662784/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/614306030045757473/image0.png",
      "https://media.discordapp.net/attachments/531827568966631425/613029080941723673/daganronpa_pervifycom_0151_01BSC2NHZYNA9X3TTHKGMKRH54.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/612387612619177996/image0.png",
      "https://media.discordapp.net/attachments/531827568966631425/611005249989115928/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/611005233161699328/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/610127521249361971/image0.png",
      "https://media.discordapp.net/attachments/531827568966631425/606821554940149780/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/602659863872536587/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/602652234433560734/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/594381900068683777/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/594306859037360130/image0.png",
      "https://media.discordapp.net/attachments/531827568966631425/592754037804368044/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/592753766164594695/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/592424386850455554/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/590621640895758337/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/588268212534247474/image0-31.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/586944666683834378/74456943_p0.png",
      "https://media.discordapp.net/attachments/531827568966631425/585263565699547168/WMc8lZG.png",
      "https://media.discordapp.net/attachments/531827568966631425/585120697559547917/bnsems7x43231.png",
      "https://media.discordapp.net/attachments/531827568966631425/584051248366354433/retrte.png",
      "https://media.discordapp.net/attachments/531827568966631425/582204888532910090/74838243_p0.png",
      "https://media.discordapp.net/attachments/531827568966631425/582201577209593857/fhmfolm7kxy21.png",
      "https://media.discordapp.net/attachments/531827568966631425/581209252756979723/5439eb883247c49ad0a9bb11c08a9df8.png",
      "https://media.discordapp.net/attachments/531827568966631425/581209252169908233/2f39b53.png",
      "https://media.discordapp.net/attachments/531827568966631425/581209251331178503/IMG_9791.png",
      "https://media.discordapp.net/attachments/531827568966631425/581209251331178500/sample_168cb435cb67d6b1b52e6109eba5f2fb-1.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/581059942166036480/71862188_p0.png",
      "https://media.discordapp.net/attachments/531827568966631425/581051389304897539/73875532_p3.png",
      "https://media.discordapp.net/attachments/531827568966631425/581051352885493760/73875532_p2.png",
      "https://media.discordapp.net/attachments/531827568966631425/581051307649925129/73875532_p1.png",
      "https://media.discordapp.net/attachments/531827568966631425/580862019964764161/6fcace204f5f5cd899be72762a0af87a.jpeg.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/580862019964764160/588cceaec340d6301dcfaa7d1f383395.jpeg.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/580670568647360512/69071877_p0_master1200.png",
      "https://media.discordapp.net/attachments/531827568966631425/580662785529348128/74264039_p0_master1200.png",
      "https://media.discordapp.net/attachments/531827568966631425/579973208225087498/Hetero_2.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/579954259957645331/74165176_p1_master1200.png",
      "https://media.discordapp.net/attachments/531827568966631425/579953954620964864/74165176_p0_master1200.png",
      "https://media.discordapp.net/attachments/531827568966631425/578846971855634433/c264625a-dbc4-4e20-9750-965365b87d9f.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578846971117174785/sample_740f904d4110ebcc5fa71cd6ab5680a9.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578846971117174784/sample_0d1560557e775b94b629d38935750459.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578838327571251210/38cf4cd.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578838326824402944/59b8110.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578838326170222593/c41882d.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578838325646065666/971d7c2.png",
      "https://media.discordapp.net/attachments/531827568966631425/578838325646065664/15c598e.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578837225580658701/sample_c86f9988e462027816d73733e1d7f790.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578837223907131393/sample_5801be411044274adbe1f3aab8a87c43.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578837223907131392/sample_a79586a278bb52959e55d1d4dcf7be16.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578837223458471946/cc6cd3a66d9526726608d21b3c4df499.jpeg.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/578685481252945924/rinpoo_chuan_breath_of_fire_ii_and_etc_drawn_by_faustsketcher__ebe4a2c596a1da0b31035004902f8405.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/577389898118594560/b373bd3751ab43a97b812ca2259bcaf2.jpeg.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/577389897456025604/sample_ace930e1b790c9080727f151217ca5c9.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/577389896491204608/589deb83e3a90b7febc589ac230cbc9a.png",
      "https://media.discordapp.net/attachments/531827568966631425/577389855684952084/illust_69319823_20190508_233719.png",
      "https://media.discordapp.net/attachments/531827568966631425/576884482939027468/1af2224.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/576884482939027466/7aac95c.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/576884481202454572/IMG_20190505_221537.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/576884480065667082/47ed252-1.png",
      "https://media.discordapp.net/attachments/531827568966631425/575154644909686784/kjgjk.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/574642399666503702/sample_e6647954c33964df156e9634a41ae0b0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/573560577549533222/image-119.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/572360138564829194/1407359636035.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/571393624726831139/image0_3.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/570030536714878986/cum_lewd_12.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/567355680197967893/Konachan.com_-_280866_sample.png",
      "https://media.discordapp.net/attachments/531827568966631425/567073800148221953/Konachan.com_-_281339_black_hair_blue_eyes_blush_breast_hold_breasts_censored_choker_dark_skin_group.png",
      "https://media.discordapp.net/attachments/531827568966631425/567034528003129375/Konachan.com_-_281645_sample.png",
      "https://media.discordapp.net/attachments/531827568966631425/567032666701037578/Konachan.com_-_281656_ass_barefoot_bed_breasts_bunny_ears_bunnygirl_dark_skin_group_long_hair_nipple.png",
      "https://media.discordapp.net/attachments/531827568966631425/566141105310007296/Konachan.com_-_272768_blue_eyes_blush_breasts_censored_group_long_hair_navel_nipples_no_bra_no_no_ya.png",
      "https://media.discordapp.net/attachments/531827568966631425/566141085408165888/2BYoRHa-NieR-Automata-nier-series-games-3920671.png",
      "https://media.discordapp.net/attachments/531827568966631425/560071864261804044/camilla_fire_emblem_if_and_etc_drawn_by_boris_noborhys__sample-d613280f3f08844ad548fdd1ad034f9c.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/560071864261804042/IMG_20181118_102229.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/559931606823862273/gfhdfh.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/559930281663135754/cbvn.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/559714330891911178/yande.re_497776_black_rock_shooter_bondage_bottomless_breasts_bukkake_cum_gangbang_nafhe_nipples_no_.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/558506718221303838/image0_2.png",
      "https://media.discordapp.net/attachments/531827568966631425/558505210444513298/jfgfj.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/556982041338708008/passion_lip_fate_extra_ccc_and_etc_drawn_by_rak_kuraga__sample-ee9fb708478d93ed7e0e16578e237f0e.png",
      "https://media.discordapp.net/attachments/531827568966631425/555254494619762698/fgdhg.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/555254446439792640/fggfh.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/555254439783563279/fgdf.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/555253138618187778/hgjgfv.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/555253070645428224/f.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/555252963548069898/fgjh.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/554876848337846282/rutuy.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/554536715038097408/tuyitt.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/554533474342535168/hgcjhg.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/554178578443665438/uhkkghu.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/553831792780771328/1550554117392m.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/553508379830517790/0e78d1137d488c472f89450eee3948719ad095f5.png",
      "https://media.discordapp.net/attachments/531827568966631425/553507959708057602/a281e040b5454744beb860d28b0c426edacca3a8.png",
      "https://media.discordapp.net/attachments/531827568966631425/553446147600154624/8ro6.png",
      "https://media.discordapp.net/attachments/531827568966631425/553171179276599327/58620497_p7_master1200.png",
      "https://media.discordapp.net/attachments/531827568966631425/553075403590336512/yjgtjkxyrf.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/553072917215182869/hjhdyj.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552954409613656105/100_01B9CF9NWB5SEJPFPC8S7ESSGG.640x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954386511429644/90_01B9CF77H3QA6V7ADHYXB801Y4.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954381620740101/91_01B9CF7ETGT4S29K1RVVVRGQGE.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954378533732352/92_01B9CF7PZ7Y98ACVJ0M8DFG9BP.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954374335234050/94_01B9CF85NHC2DN860T810C5S2V.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954357226930177/99_01B9CF9F7YNT2F4N6P7B263PMS.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954359525277697/96_01B9CF8RKDTM69HJAR170H8ZAP.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954347047223317/98_01B9CF95AGVQ14KDYZ0S2BK44E.640x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954339015262208/89_01B9CF6Z82Q7ACAKS6NDE1W0NS.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954299274231818/83_01B9CF5HC9XQFKJTWF2HRPSD0Q.640x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954300507095050/80_01B9CF4WVTTTTNN1H97RZ1MB4Z.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954287077195806/85_01B9CF63FQR1JGWGA04JADXZZB.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552954280685076497/82_01B9CF5AB3TCF7A56DZJYD609B.1024x0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/552361275456356352/original_drawn_by_alpha_alpha91__1ce491653cd74497f706b144e1be5e22.png",
      "https://media.discordapp.net/attachments/531827568966631425/552360738757541899/mukka-Anime-Art-Anime-censored-hentai-4990169.png",
      "https://media.discordapp.net/attachments/531827568966631425/552356517630705665/knknb.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552349723814527001/kjgjgkccg.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552348205992509441/khgdgkdhj.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552346427381121033/kjgjk.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552343839440896030/jtztezj.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552343085544112136/jlhvvhj_2.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552338988363677726/jjlvhjhv.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552336774043664384/jgjxf.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552332506758774796/jjhv.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552332012032229416/intrepid_kantai_collection_drawn_by_arciealbano__97cf88f2618f9456bdc7d454c1bf00f5.png",
      "https://media.discordapp.net/attachments/531827568966631425/552326492395405312/hjgfx.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552326208508002304/hjf.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552318111420776474/gmfhmfx.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552316201850634241/gjfhfc.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552315412176437251/ghkv.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552315294039932928/ghkfk.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552306179494248459/dtkyukdutdt.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/552306162255790090/dtkskry.PNG",
      "https://media.discordapp.net/attachments/531827568966631425/550161095575470081/iu.png",
      "https://media.discordapp.net/attachments/531827568966631425/550162507147247616/yande.png",
      "https://media.discordapp.net/attachments/531827568966631425/550274276792467459/lusciousnet_lusciousnet_366_1879603679.png",
      "https://media.discordapp.net/attachments/531827568966631425/550160113361485854/ai_gangbang.png",
      "https://media.discordapp.net/attachments/531827568966631425/549366839923310592/66824903_p0_master1200.png",
      "https://media.discordapp.net/attachments/531827568966631425/549335713473101835/17e34a65847f1b8de1f8a0a91f690b26.png",
      "https://media.discordapp.net/attachments/531827568966631425/549090893399982110/79346b386e288adcdd44a609fc25f1d1.png",
      "https://media.discordapp.net/attachments/531827568966631425/548912211486179329/Konachan.com_-_267229_anal_aqua_eyes_black_hair_blush_breasts_cameltoe_censored_fellatio_group_headb.png",
      "https://media.discordapp.net/attachments/531827568966631425/548740667363426314/1402368900065.png",
      "https://media.discordapp.net/attachments/531827568966631425/547291211162058763/1538700766628.png",
      "https://media.discordapp.net/attachments/531827568966631425/547291181571375106/1b33dc411bbde8c04b55504627070ec6eccfa6f8_01CYT1503FKR10E5VYPH5NEGSS.png",
      "https://media.discordapp.net/attachments/531827568966631425/547232488972615701/915a1b51e48c31c3f2a9876473d638ebe50c9e27.png",
      "https://media.discordapp.net/attachments/531827568966631425/544098642169167882/34MNu4e.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/542794844146237440/5c4d905b66e08.png",
      "https://media.discordapp.net/attachments/531827568966631425/542510349895598111/image0.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/542510349895598108/image1.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/541463253700575233/5IG3Pak.jpg",
      "https://media.discordapp.net/attachments/531827568966631425/541400129911914511/eva004_fm_01CEHRA6QR95C2967MS8M72FJV.png",
      "https://media.discordapp.net/attachments/531827568966631425/540311768107319296/11kmt3zbtkd21.png",
      "https://media.discordapp.net/attachments/531827568966631425/540141403649474560/Konachan.com_-_265892_anus_ass_bed_fellatio_garter_belt_hewsack_hyperdimension_neptunia_male_noire_n.png",
      "https://media.discordapp.net/attachments/531827568966631425/539149890505408527/Konachan.com20-2027297820aqua_hair20azur_lane20breasts20dark_skin20gloves20group20hat20honolulu20nip.png",
      "https://media.discordapp.net/attachments/531827568966631425/539130858746019850/sex32.png",
      "https://media.discordapp.net/attachments/531827568966631425/539122728356020224/sex67.png",
      "https://media.discordapp.net/attachments/531827568966631425/539094695670710283/yande.re_297119_ass_bondage_bottomless_breasts_cum_extreme_content_fairy_kancolle_lactation_monikano.png",
      "https://cdn.discordapp.com/attachments/681523355576303627/687936006942359553/77125093_p0.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002631786594335/629-k8LrraY_lI.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016193234305074/1637-n594l7QjF50.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771373045550022686/3ca192a6-073d-4693-ba1f-87189202c04e.gif",
      "https://media.discordapp.net/attachments/531827568966631425/539913500722724864/cf2646eee9d96c3a1ae8d46bd064da82.png",
    ];
    var result = orgy[Math.floor(Math.random() * orgy.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/masturbation", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var masturbation = [
      "https://media.discordapp.net/attachments/527959815717388299/740760092256763963/sample_64474316af46cc1241013d465fea986111abd85e.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/744277346470854857/IMG_1584.JPG?width=577&height=834",
      "https://konachan.com/image/981bb7a9606e67f11710598eeb7e4312/Konachan.com%20-%20292127%20animal_ears%20blush%20breasts%20ke-ta%20masturbation%20mystia_lorelei%20nipples%20nude%20red_eyes%20red_hair%20short_hair%20tears%20touhou%20wings.png",
      "https://konachan.com/image/7e615f214e87a7f370d7b7c59e9a458d/Konachan.com%20-%20290971%20aconitea%20ass%20brown_hair%20game_cg%20gray_hair%20handjob%20il_shi%20koichi_ai%20long_hair%20masturbation%20navel%20penis%20pussy%20red_eyes%20short_hair%20uncensored.png",
      "https://media.discordapp.net/attachments/527959815717388299/726187524971692142/illust_82570191_20200626_142945.jpg?width=516&height=834",
      "https://konachan.com/image/b2031ff553151539f0f2f82da9c3b98d/Konachan.com%20-%20291417%20black_eyes%20breasts%20fingering%20girls_frontline%20glasses%20gray_hair%20letdie1414%20logo%20masturbation%20nipples%20nude%20pussy%20pussy_juice%20uncensored%20watermark.png",
      "https://media.discordapp.net/attachments/527959815717388299/740417837256146984/sample_35a5ba87a5fb405816f1bd4ec95c226daecd5b46.jpg?width=582&height=834",
      "https://konachan.com/image/412afe39a96fcd9ac3b984e2583a3a78/Konachan.com%20-%20288237%20bed%20blush%20breasts%20brown_eyes%20brown_hair%20long_hair%20masturbation%20navel%20nipples%20nude%20pussy%20spread_legs%20spread_pussy%20touhou%20uncensored%20wink%20z_loader.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/744277354888691782/IMG_1671.JPG?width=595&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/740411202194112572/sample_9fdf916aaf9cae4e4e5dfe151aaeed5aa88516a9.jpg?width=595&height=834",
      "https://konachan.com/image/ed82a05b8506475f7730b34e8c005e30/Konachan.com%20-%20282270%20bra%20breast_hold%20edogawakid%20elbow_gloves%20fingering%20flowers%20garter_belt%20gloves%20gokou_ruri%20masturbation%20necklace%20rose%20stockings%20thighhighs%20underwear.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/768039407109406730/11.png?width=441&height=834",
      "https://konachan.com/image/8ceb825da206d6a479b2098c5dfb7154/Konachan.com%20-%20273689%20black_hair%20blush%20breasts%20brown_eyes%20choker%20demon%20fang%20fingering%20garter%20gloves%20horns%20long_hair%20massan%20nipples%20original%20stockings%20succubus%20tail%20wings.jpg",
      "https://konachan.com/image/68ffb00bdc7f8d5dc88e136280e26c87/Konachan.com%20-%20292485%20blue_eyes%20blush%20cameltoe%20go-toubun_no_hanayome%20long_hair%20masturbation%20nakano_itsuki%20red_hair%20skirt%20tama_%28monster1553%29%20upskirt.png",
      "https://konachan.com/image/02069820b97504d6efc990e674432d1b/Konachan.com%20-%20284202%20anthropomorphism%20anus%20bed%20black_eyes%20black_hair%20blush%20breasts%20jack_dempa%20masturbation%20nipples%20nude%20pussy%20short_hair%20spread_legs%20uncensored%20wet.png",
      "https://konachan.com/image/055fa2c80fd1d9daf001c9a4c16b6767/Konachan.com%20-%20290969%20aconitea%20bed%20braids%20breast_hold%20breasts%20fingering%20game_cg%20gray_hair%20il_shi%20koichi_ai%20masturbation%20nipples%20onii-chan_asobo%20pussy%20uncensored%20yukata.png",
      "https://konachan.com/image/a5bc4289955b14eb0f8e8b4edace838e/Konachan.com%20-%20272982%20animal_ears%20anus%20aqua_eyes%20ass%20bed%20blush%20breasts%20computer%20long_hair%20nipples%20panties%20panty_pull%20pussy%20tail%20thighhighs%20uncensored%20underwear%20wanaca.png",
      "https://media.discordapp.net/attachments/527959815717388299/719618046318084156/image0.jpg?width=480&height=834",
      "https://media.discordapp.net/attachments/779341385140273202/779342753024835634/Konachan.png?width=1201&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/713356349098164254/illust_81758285_20200522_043655.jpg?width=625&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/769725762919858226/1603560999913.jpg",
      "https://konachan.com/image/d42c5b9c96ec7874596e29105182d10b/Konachan.com%20-%20280558%20aliasing%20anus%20blush%20breasts%20brown_eyes%20brown_hair%20fingering%20lambda%20long_hair%20microphone%20nipples%20no_bra%20nopan%20original%20pussy%20skirt%20uncensored.png",
      "https://konachan.com/image/ea0be84e48d4cc24555a25a3b9f4f2b9/Konachan.com%20-%20303672%20anus%20bed%20black_hair%20blush%20brown_eyes%20kidmo%20long_hair%20masturbation%20original%20pussy%20realistic%20school_uniform%20skirt%20tie%20torn_clothes%20uncensored.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/740411281646944316/sample_d791e23c717fd2b55be7de4a3239553415c2e5f8.jpg",
      "https://konachan.com/image/b693271ef20411f8ef409a35f2216e9b/Konachan.com%20-%20297748%20anus%20armor%20breasts%20byleth_%28female%29%20censored%20ei1han%20fire_emblem%20masturbation%20nipples%20pussy%20sketch%20vibrator.png",
      "https://konachan.com/image/bc91572637d96b06eca0e9596d7a2f85/Konachan.com%20-%20282704%202girls%20akino_hamo%20blue_eyes%20blush%20braids%20censored%20dress%20gray_hair%20microphone%20nopan%20purple_hair%20pussy%20tears%20thighhighs%20twintails%20vocaloid%20voiceroid.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/769458313120841738/74b5026764eb83ecf9c4a3e5314c389d6ef39060.png",
      "https://konachan.com/image/ee0908779549d1a44fb43e5185429483/Konachan.com%20-%20181077%20black_hair%20blush%20bra%20breasts%20fingering%20headphones%20long_hair%20microphone%20nipples%20open_shirt%20original%20panties%20skirt%20spread_legs%20thighhighs%20underwear.jpg",
      "https://konachan.com/image/5002b4bb3f98cea4ccb2a8cc1e576a12/Konachan.com%20-%20304003%20barefoot%20blonde_hair%20blush%20cube%20fingering%20game_cg%20kami-sama_no_you_na_kimi_e%20kantoku%20long_hair%20masturbation%20nopan%20purple_eyes%20rana_liddell-hart.png",
      "https://konachan.com/image/128a0a2662de8371c5d334eb0b00ab2e/Konachan.com%20-%20291238%20bra%20breasts%20emily%20game_cg%20gray_hair%20long_hair%20maid%20maisaka_mai%20marmalade%20masturbation%20nipples%20panties%20pantyhose%20phone%20twintails%20underwear.png",
      "https://konachan.com/image/a06e1c1e58f11973ced608e80d12bce0/Konachan.com%20-%20294130%20breasts%20censored%20fingering%20masturbation%20mutsuno_hekisa%20nipples%20original%20pussy.png",
      "https://media.discordapp.net/attachments/527959815717388299/764285394254299168/Jox7PAt.png",
      "https://konachan.com/image/fcb90edc4bb442d23c669b2605d7b690/Konachan.com%20-%20287158%20ass%20bed%20black_hair%20blue_eyes%20blush%20bra%20breasts%20cameltoe%20condom%20long_hair%20navel%20nipples%20open_shirt%20panties%20stockings%20thighhighs%20underwear%20wet.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/768748112764076032/-hentai---6203690.png",
      "https://media.discordapp.net/attachments/527959815717388299/732242718255874068/image0.jpg?width=595&height=834",
      "https://konachan.com/image/487377a34165504bacea04cfac14c1bb/Konachan.com%20-%20302861%20animal_ears%20anus%20bed%20censored%20glasses%20masturbation%20mo3hig3%20pussy%20tail%20vibrator%20vrchat%20yuyake_hino.png",
      "https://konachan.com/image/36b0af977e0c556ce3a1eaeaf0412726/Konachan.com%20-%20293480%20aburi%20blonde_hair%20book%20breasts%20censored%20game_cg%20masturbation%20navel%20nude%20orc_soft%20pointed_ears%20pussy%20pussy_juice%20spread_legs.png",
      "https://konachan.com/image/4d6a9a242a3cc88b85c9e7357b24eddf/Konachan.com%20-%20280889%20aqua_eyes%20bed%20blonde_hair%20blush%20breasts%20catherine%20catherine_%28character%29%20fingering%20lasterk%20masturbation%20navel%20nipples%20nude%20twintails.png",
      "https://media.discordapp.net/attachments/527959815717388299/752365117676716173/Konachan.com_-_305213_sample.jpg?width=1482&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/740411282456576060/028206cc4c500d383e280ed7d76fe82e2e6f79d6.jpg?width=589&height=833",
      "https://konachan.com/image/5680d381e1f93ee768c8f9629ca43ea0/Konachan.com%20-%20293676%20aqua_eyes%20ass%20blush%20breasts%20fingering%20gray_hair%20long_hair%20masturbation%20mutsuno_hekisa%20nopan%20original%20twintails.png",
      "https://konachan.com/image/323e6819654f758e35d96bd97eda37af/Konachan.com%20-%20300820%20anus%20ass%20blue_hair%20breasts%20fingering%20game_cg%20hinata_nao%20masturbation%20moonstone_cherry%20nanase_rika%20nipples%20pussy%20red_eyes%20uncensored%20underwear.png",
      "https://media.discordapp.net/attachments/527959815717388299/726160992203047012/image9_1.jpg?width=590&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/753814741792849920/EVjf9lqVAAAS5Jp.png",
      "https://konachan.com/image/90fbcee972620442648219a34e2ff45f/Konachan.com%20-%20293905%20anal%20breasts%20dannex009%20fire_emblem%20masturbation%20ophelia_%28fire_emblem%29%20pussy%20uncensored%20vibrator.png",
      "https://media.discordapp.net/attachments/527959815717388299/718416368160210944/illust_66934584_20200605_034840.png?width=590&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/732242719048466442/image3.jpg?width=596&height=834",
      "https://konachan.com/image/71adcd042506c09664bdd22e67beffb6/Konachan.com%20-%20298991%20barefoot%20breast_hold%20censored%20goggles%20green_hair%20masturbation%20matamataro%20pussy%20tail%20vibrator%20vrchat%20yuyake_hino.png",
      "https://media.discordapp.net/attachments/527959815717388299/769613861137154108/image0.jpg",
      "https://konachan.com/image/4cf463345418502863b5d3d433901c00/Konachan.com%20-%20293714%20aqua_eyes%20blush%20breast_hold%20breasts%20masturbation%20nipples%20no_bra%20nopan%20open_shirt%20original%20school_uniform%20see_through%20short_hair%20tagme_%28artist%29%20tie.png",
      "https://konachan.com/image/f9b1cdc20c3182a3f9000876d2946bf0/Konachan.com%20-%20270338%20barefoot%20blush%20breasts%20fingering%20game_cg%20headband%20laplacian%20long_hair%20navel%20nipples%20panties%20ponytail%20shimofuri%20skirt%20skirt_lift%20underwear%20white_hair.png",
      "https://konachan.com/image/c50d9eb4cc73b070356caa26f8011987/Konachan.com%20-%20277814%20anus%20black_hair%20bow%20bra%20breasts%20navel%20nipples%20nironiro%20original%20panties%20purple_eyes%20pussy%20short_hair%20spread_legs%20thighhighs%20uncensored%20underwear%20wet.png",
      "https://media.discordapp.net/attachments/779341385140273202/779343984895328296/Konachan.png",
      "https://konachan.com/image/e621a89764880b5a52fc36b806c7764f/Konachan.com%20-%20283636%20anal%20barefoot%20blush%20breasts%20dildo%20dugtrio%20hat%20marill%20navel%20nipples%20nude%20pignite%20pikachu%20pokemon%20ponytail%20popplio%20pussy%20urine%20vibrator%20wobbuffet.png",
      "https://media.discordapp.net/attachments/527959815717388299/721461507367632906/r34--Helltaker-porn-Modeus-28Helltaker29-5959373.png",
      "https://konachan.com/image/6535d773edf9f84df4bac2ed14688ede/Konachan.com%20-%20312153%20blonde_hair%20blush%20censored%20game_cg%20kagome%20kneehighs%20long_hair%20masturbation%20nopan%20purple_eyes%20pussy%20pussy_juice%20underwear%20uniform.png",
      "https://media.discordapp.net/attachments/527959815717388299/719246385475616778/illust_82159013_20200607_104816.jpg?width=590&height=834",
      "https://konachan.com/image/2bce7887dadd475e4edcdf6e0a01d2ca/Konachan.com%20-%20293775%20aqua_eyes%20blush%20breast_grab%20breasts%20long_hair%20masturbation%20navel%20nipples%20nude%20pussy_juice%20tagme_%28artist%29%20thighhighs%20white_hair.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/732242718704533674/image2.jpg?width=1179&height=834",
      "https://konachan.com/image/6f0d8d034ef1393a37ff2a42e15fa688/Konachan.com%20-%20291136%20anus%20ass%20close%20fingering%20futomomomoe%20masturbation%20original%20pussy%20pussy_juice%20tail%20thighhighs%20uncensored%20watermark.jpg",
      "https://konachan.com/image/237dd82ad3ef0263714bcd0e3f19fadf/Konachan.com%20-%20296423%20anus%20blush%20brown_eyes%20brown_hair%20censored%20masturbation%20nopan%20original%20ponytail%20pubic_hair%20shikuta_maru%20spread_legs.jpg",
      "https://konachan.com/image/fb175a886e823b7c0475f6be35935797/Konachan.com%20-%20282113%20anus%20barefoot%20blush%20breast_hold%20breasts%20censored%20fingering%20game_cg%20long_hair%20nipples%20nude%20purple_hair%20pussy%20pussy_juice%20twintails%20yellow_eyes.png",
      "https://media.discordapp.net/attachments/527959815717388299/740411282783469588/bd5fef3ad010d26ab55e02ed11f24a422764ad1e.jpg?width=591&height=834",
      "https://konachan.com/image/0c16badca4f463dfa3de6ebc3cd6aa9e/Konachan.com%20-%20277553%20blush%20bow%20breasts%20cleavage%20dress%20fate_%28series%29%20fingering%20kyokucho%20long_hair%20masturbation%20matou_sakura%20purple_eyes%20purple_hair%20pussy_juice%20tears.jpg",
      "https://konachan.com/image/ba46927bc90f08adb820c457ef40690f/Konachan.com%20-%20290948%20bed%20fingering%20game_cg%20gym_uniform%20masturbation%20onaji_class_no_idol-san%20panty_pull%20sawayaka_samehada%20shirt_lift%20sonora%20takanashi_ei.png",
      "https://konachan.com/image/edd264398564f239900a4b7455a69648/Konachan.com%20-%20303716%20bed%20blush%20bra%20breasts%20brown_eyes%20brown_hair%20censored%20cube%20fingering%20game_cg%20kantoku%20kneehighs%20long_hair%20nipples%20open_shirt%20panty_pull%20pussy%20underwear.png",
      "https://konachan.com/image/13f4b78c9b74032ccf0e20917277a91c/Konachan.com%20-%20286117%20anus%20ass%20bed%20black_hair%20breasts%20brown_eyes%20censored%20fingering%20game_cg%20nipples%20panties%20panty_pull%20pussy%20pussy_juice%20socks%20underwear%20whirlpool.png",
      "https://konachan.com/image/539fcde479bc981b3a83cd8c51eb650a/Konachan.com%20-%20299390%20blush%20bow%20brown_eyes%20couch%20heart%20masturbation%20original%20panties%20pink_hair%20ponytail%20pussy_juice%20skirt%20skirt_lift%20socks%20spread_legs%20underwear.png",
      "https://konachan.com/image/e3e5189766535ccc265f7f8e6e36e289/Konachan.com%20-%20273334%20anus%20ass%20bikini%20blush%20breasts%20couch%20dildo%20green_eyes%20green_hair%20hewsack%20long_hair%20nipples%20panty_pull%20pussy%20pussy_juice%20swimsuit%20tears%20uncensored.png",
      "https://konachan.com/image/f2ea272c793d120ac0b4ef9178f6d93a/Konachan.com%20-%20297243%20azur_lane%20blush%20breasts%20censored%20fingering%20headband%20maid%20masturbation%20nipples%20pussy%20ribbons%20short_hair%20spread_legs%20thighhighs%20white_hair%20yoshimo.png",
      "https://konachan.com/image/1458b645954f1641ae4c31cd1718c973/Konachan.com%20-%20292866%20anus%20ass%20bed%20blonde_hair%20blush%20braids%20breasts%20epic7%20headband%20kaetzchen%20long_hair%20navel%20nipples%20nude%20petals%20pussy%20signed%20uncensored%20vibrator.png",
      "https://media.discordapp.net/attachments/527959815717388299/718566958387429396/illust_82115948_20200605_134755.png?width=533&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/721836950218080306/1592112164884.jpg?width=625&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/740760094022566009/sample_d863bca50d09836d68e22f67208ae78f8ab4e184.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/740411281873567804/sample_284fe785fbb6242b2eaa739dab36dfd3421ffcdc.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/740411283140247672/sample_5068651bb0a528b0e5c85e18d94f9c2e24efcc3d.jpg?width=632&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/721411036665610390/image0.jpg?width=595&height=834",
      "https://konachan.com/image/48fd50374cc24ba2429d58b97e5db0ad/Konachan.com%20-%20283498%20breast_hold%20breasts%20fingering%20keruto_ishi%20masturbation%20mikasa_ackerman%20nipples%20panties%20pussy_juice%20shingeki_no_kyojin%20underwear.jpg",
      "https://konachan.com/image/d1492aca433eb29e8f812d9f4e67439e/Konachan.com%20-%20272747%20anal%20blush%20breast_hold%20breasts%20censored%20condom%20ctrlz77%20cum%20dildo%20fingering%20gray_eyes%20long_hair%20nipples%20original%20pussy%20pussy_juice%20tie%20vibrator.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/768748136109047828/-hentai---6203691.png",
      "https://media.discordapp.net/attachments/527959815717388299/740417837566525500/sample_c4a6912bee4940d45194547b9d3d0971050ffab9.jpg?width=582&height=834",
      "https://media.discordapp.net/attachments/779341385140273202/779341416618131466/Konachan.png?width=1201&height=834",
      "https://konachan.com/image/f2b9752297e8343938265ae615036130/Konachan.com%20-%20288259%20bed%20brown_eyes%20cameltoe%20candy%20collar%20lollipop%20long_hair%20maid%20nipples%20no_bra%20original%20panties%20ribbons%20scan%20sousouman%20thighhighs%20underwear%20upskirt.png",
      "https://konachan.com/image/721ee99047577bddd0bddb185fdc44f6/Konachan.com%20-%20273415%20aliasing%20bed%20blonde_hair%20blush%20breast_hold%20breasts%20brown_eyes%20fingering%20headdress%20long_hair%20navel%20nipples%20nude%20pussy_juice%20ryu_jiao%20sword_maiden.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/769458258820726784/760qu6mquqr31.png",
      "https://konachan.com/image/1b32a7921c08c532f595a903a7bf5664/Konachan.com%20-%20273500%20breast_hold%20breasts%20brown_hair%20censored%20close%20dd_%28ijigendd%29%20fingering%20gloves%20masturbation%20nipples%20no_bra%20nopan%20pussy%20school_uniform%20short_hair%20white.png",
      "https://media.discordapp.net/attachments/527959815717388299/719185321505456208/image0.png?width=530&height=833",
      "https://media.discordapp.net/attachments/527959815717388299/740417836933185597/sample_e1cbe7d5332b527f1539feb26cd10a20f3650fc1.jpg?width=582&height=834",
      "https://konachan.com/image/fe1bb2d1509599625867a4f077476826/Konachan.com%20-%20271556%20barefoot%20bed%20black_eyes%20breasts%20censored%20ginhaha%20gray_hair%20masturbation%20navel%20nipples%20nude%20pussy%20pussy_juice%20short_hair%20spread_legs%20white_hair%20wink.png",
      "https://konachan.com/image/e65fcd87d4db64b600ae0c53e31f52f2/Konachan.com%20-%20301675%20anal%20barefoot%20breasts%20cropped%20crown%20lavie%20nipples%20no_bra%20nopan%20original%20pink_hair%20pussy%20red_eyes%20short_hair%20spread_legs%20staff%20tears%20uncensored.png",
      "https://konachan.com/image/0285ead86a27cc15b4ef2c0b483f4712/Konachan.com%20-%20284771%20black_eyes%20black_hair%20blush%20bra%20breast_hold%20breasts%20headphones%20long_hair%20navel%20nipples%20no_bra%20open_shirt%20original%20panties%20pussy_juice%20underwear.jpg",
      "https://konachan.com/image/13e2b46b20d8c33c764ca21087197c20/Konachan.com%20-%20275951%20bra%20breasts%20dress%20fingering%20game_cg%20green_eyes%20green_hair%20long_hair%20masturbation%20muririn%20nipples%20nopan%20pussy%20skirt_lift%20uncensored%20underwear%20yuzusoft.png",
      "https://media.discordapp.net/attachments/527959815717388299/744277341903126552/IMG_1582.JPG?width=695&height=834",
      "https://konachan.com/image/703345dde412907cbcf1bc63f4f90390/Konachan.com%20-%20292416%20aqua_eyes%20aqua_hair%20blush%20breasts%20censored%20dress%20long_hair%20masturbation%20mataro_%28mtr_prpr%29%20nipples%20no_bra%20nopan%20original%20pussy_juice%20tears%20vibrator.png",
      "https://media.discordapp.net/attachments/527959815717388299/769638387187056660/5cf32ec31466a.jpeg?width=730&height=834",
      "https://konachan.com/image/00642425460a0cd5bee946388303da8b/Konachan.com%20-%20291211%20anus%20bed%20blush%20bow%20breasts%20brown_hair%20censored%20game_cg%20green_eyes%20kneehighs%20long_hair%20marmalade%20nipples%20panties%20panty_pull%20ponytail%20pussy%20underwear.png",
      "https://media.discordapp.net/attachments/527959815717388299/773589894052052992/8rrrmy5k65x51.jpg?width=600&height=834",
      "https://konachan.com/image/6eb82ee915514b4dd7aae5b3aec2e11a/Konachan.com%20-%20297920%20anus%20ass%20bed%20breasts%20cameltoe%20censored%20exlic%20garter_belt%20gray_hair%20headband%20nier%20panties%20pussy%20short_hair%20stockings%20thighhighs%20underwear%20watermark.png",
      "https://konachan.com/image/54cc709b2308d970734c268e599c4724/Konachan.com%20-%20304276%20batsuma%20blush%20bow%20breasts%20censored%20fingering%20masturbation%20nipples%20no_bra%20open_shirt%20original%20purple_hair%20pussy%20pussy_juice%20skirt%20spread_legs.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/751951841377648690/73e514f-1.jpg?width=590&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/773295232284360754/IMG_20201101_145218.jpg?width=591&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/740411201917550704/sample_6bdaef5758583188cb9aa5bf3d9bb7caf0f387cf.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/738918012681453618/1596147615769.jpg?width=1196&height=834",
      "https://konachan.com/image/d135281094218117a713a126eb3bda59/Konachan.com%20-%20288938%20animal%20bed%20bell%20blush%20bow%20braids%20breasts%20cat%20catgirl%20fingering%20flowers%20mwwhxl%20nipples%20original%20pussy%20rose%20stockings%20tail%20waifu2x%20watermark%20wink.png",
      "https://media.discordapp.net/attachments/527959815717388299/740760092751953960/68c1a789c5564594af8d82ed5c73804bcf39cf22.jpg?width=625&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/763262871529717801/image0.png?width=590&height=834",
      "https://konachan.com/image/a7b8832e8cd51be71efa1e06726d62bc/Konachan.com%20-%20300365%20anthropomorphism%20barefoot%20bed%20blush%20braids%20brown_hair%20fingering%20headband%20long_hair%20masturbation%20panties%20school_uniform%20skirt%20twintails%20underwear.jpg",
      "https://konachan.com/image/4b46f4e6cad9aba83b7385058f3bf21e/Konachan.com%20-%20302745%20anus%20asa_ni_haru%20blush%20breasts%20gray_hair%20long_hair%20masturbation%20nipples%20purple_eyes%20pussy%20spread_legs%20spread_pussy%20thighhighs%20torn_clothes%20uncensored.jpg",
      "https://konachan.com/image/bce63c75ba26a3dee452f4d5d4284172/Konachan.com%20-%20304786%20blush%20censored%20close%20cum%20fingering%20lize_helesta%20long_hair%20masturbation%20navel%20nijisanji%20nopan%20nude%20penis%20phone%20purple_eyes%20sex%20wet%20white_hair.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/708680740833067078/55.png?width=589&height=834",
      "https://konachan.com/image/f4bdc35634dd0eea8ba5b2d86797a3d5/Konachan.com%20-%20278669%20breasts%20long_hair%20masturbation%20navel%20nipples%20nude%20original%20pointed_ears%20pubic_hair%20purple_hair%20pussy_juice%20ricegnat%20tattoo%20thighhighs%20uncensored.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/720650339635953755/lusciousnet_lusciousnet_22_484278995.png",
      "https://konachan.com/image/45a0019dc82ba236c064c7fa60b7d3cc/Konachan.com%20-%20289638%20animal_ears%20bra%20breast_hold%20fingering%20glasses%20hashimoto_kokai%20masturbation%20original%20panties%20underwear.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/770025434569244692/4e24f42.png?width=511&height=834",
      "https://konachan.com/image/e98a991fc9b85da8c569924e1d236310/Konachan.com%20-%20295842%20anthropomorphism%20azur_lane%20blonde_hair%20breasts%20crown%20fingering%20long_hair%20masturbation%20nipples%20queen_elizabeth_%28azur_lane%29%20suwakana.png",
      "https://konachan.com/image/b2275b83b7b55fa7a79aa47da47c5012/Konachan.com%20-%20292640%20breast_hold%20fingering%20long_hair%20masturbation%20nipples%20original%20panties%20shirt_lift%20thighhighs%20underwear%20wsman.png",
      "https://media.discordapp.net/attachments/527959815717388299/740411201695121408/sample_0095da8760354c714ece63be689a229f3776b63b.jpg",
      "https://konachan.com/image/a366947083f5051dd8cb3558798f6ba1/Konachan.com%20-%20272124%20anus%20ass%20azur_lane%20bed%20blonde_hair%20blue_eyes%20catgirl%20censored%20dildo%20dress%20long_hair%20maid%20mino106%20panties%20pussy%20tears%20thighhighs%20underwear%20vibrator.jpg",
      "https://konachan.com/image/e6005ca3e30c4083c44128c6a58597ed/Konachan.com%20-%20278991%20aoba_moka%20ass%20bang_dream%21%20bed%20blue_eyes%20blush%20fingering%20gray_hair%20hoodie%20masturbation%20naitou_kirara%20nopan%20pussy_juice%20short_hair%20shorts%20uncensored.png",
      "https://konachan.com/image/398f0eb146117b0ad2ae3b14e4be8be7/Konachan.com%20-%20293302%20anus%20blue_hair%20blush%20breasts%20censored%20choker%20demon%20fang%20fingering%20horns%20kimono%20marisayaka%20nijisanji%20nipples%20no_bra%20nopan%20open_shirt%20pussy%20watermark.jpg",
      "https://media.discordapp.net/attachments/527959815717388299/740411202487844874/6304030e393f14d70e68aba9274a0590e2bb8153.png?width=591&height=834",
      "https://media.discordapp.net/attachments/527959815717388299/770025444120330240/ElHM9YkXIAESwoT.png?width=1067&height=834",
      "https://konachan.com/image/f086eb77e8376c3485affecb0bd0dcab/Konachan.com%20-%20293095%20amatsukaze_%28kancolle%29%20anthropomorphism%20ass%20ebifurya%20fingering%20garter_belt%20kantai_collection%20masturbation%20panties%20signed%20sketch%20underwear.png",
      "https://media.discordapp.net/attachments/527959815717388299/732242718453137408/image1.jpg?width=490&height=834",
      "https://konachan.com/image/34cc7d180d3697a0b60d0425ebad698e/Konachan.com%20-%20303863%20amego%20anus%20breasts%20censored%20chiyoda_momo%20green_eyes%20masturbation%20nipples%20nude%20pink_hair%20pussy%20pussy_juice%20spread_legs%20thighhighs%20twintails.png",
      "https://konachan.com/image/326a628ca22a90db52ba10ca33f3b0c0/Konachan.com%20-%20294303%20ass%20dark%20fingering%20idolmaster%20idolmaster_cinderella_girls%20masturbation%20panties%20phone%20pussy_juice%20sunaba_suzume%20underwear%20yumemi_riamu.jpg",
      "https://konachan.com/image/1fd2cebbdc055ec037c6997dbfe41502/Konachan.com%20-%20286054%20black_hair%20blush%20breast_hold%20breasts%20fingering%20masturbation%20nipples%20original%20panties%20pussy_juice%20shirt_lift%20skirt_lift%20toenketsu%20underwear.jpg",
    ];
    var result = masturbation[Math.floor(Math.random() * masturbation.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/manga", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var manga = [
      "https://cdn.discordapp.com/attachments/770948564947304448/770950443089264650/00004-VNJ6qrF23KQ.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951666174132224/05.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951690300031006/06.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951703041671178/07.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951712537706516/08.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951727485681684/09.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951740929343539/10.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951753238577182/11.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951765427617842/12.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951777864253450/13.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770951793395105792/14.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952155804467230/zN0qPqwMf4s.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952158912577536/2bnd32F6b24.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952162317828096/3ZjHrJKqeGA.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952165401165834/6bq3S331D-s.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952168688582666/A6VYGMYNGIs.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952180948533248/jZrtEMRayGU.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952183704715264/OlX_-IYmRVU.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952188021178390/qeLAfKEcuX0.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952189500719114/QKPD7SQP4es.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952192420479006/rrCP2IPpX0Y.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952195117416478/TTwnaD5s3AI.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952197159649280/u7T8oqkMRAs.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770952200600027136/Y1NOiVdb8E0.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/676450710107455508/image0.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/675468441330778194/image0.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/675468425417719808/image0.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/675468410838057020/image0.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/670305815780917248/image0.png",
      "https://media.discordapp.net/attachments/527959259107950603/667506610809077773/image3.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/667506610809077771/image2.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/667506610310217729/image1.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/667506610310217728/image0.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/667502729047965707/image3.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/667502728485797889/image2.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/667502728033075243/image1.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/667502728033075242/image0.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/666770291736838174/image0.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/646576444306358293/image0.png",
      "https://media.discordapp.net/attachments/527959259107950603/552304850239619072/019.thumb.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/552045740621299717/ebluberry-510984-Persona_5_-_Tae_Takemi_1.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/551311902806900740/1551469614984.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771017128924807228/1759-eBIrfZS5ZHY.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374706984353792/00430-8kYf26o3PAQ.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374710566289438/00431-x4-6aZWb8d4.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374739918028820/00437-7W5cuD94R8s.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374764173295666/00438-541HJ2qMjI.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374861670940682/00420-KxOKYWh0BG4.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374866518900796/00421-vBOD4X0a5ss.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374870810066965/00422-ZAl-znYOO0o.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374875494449152/00423-pLtfHabSh8Q.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374902518218772/00424-eFQtPC4yxYI.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374923499175936/00425-UgxpF5O-SSs.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374932352303124/00426-zmmGnSPzAMw.jpg",
    ];
    var result = manga[Math.floor(Math.random() * manga.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/jahy", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var jahy = [
      "https://cdn.discordapp.com/attachments/707201738255368194/771368472752029696/jahy_jahy_sama_wa_kujikenai_drawn_by_konbu_wakame__eb4df739bfe1edaaf865228922f56a6b.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368473904676925/jahy_jahy_sama_wa_kujikenai_drawn_by_konbu_wakame__ee7cce76258c028105c26761b4843a63.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368476828762152/0002.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368478896422942/0012.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368479612993606/jahy_jahy_sama_wa_kujikenai_drawn_by_konbu_wakame__fcd38f5dd297b4b0c412014f12fc6570.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368482616639538/EVN_1_hU8AUiZAh.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368480821608478/33ffb315ccc5.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368482872098886/Anime-Paint-Anime-Art-Anime-Konbu-Wakame-4111984.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368484780113960/jahy-sama-wa-kujikenai-Jahy-Konbu-Wakame-Anime-Ero-4739457.jpeg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368524001837066/yande.re_523639_animal_ears_bikini_top_cleavage_jahy_jahy-sama_wa_kujikenai_konbu_wakame_swimsuits.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771369268801306634/jlYrWJH.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771369982926913556/XQkDWwNpCqc.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771369987704750111/Manga_Serialization_Announcement_Illustration.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/772559222084730930/16f6a933241d87f1e2228f7424fe8e94.jpg",
    ];
    var result = jahy[Math.floor(Math.random() * jahy.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/glasses", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var glasses = [
      "https://media.discordapp.net/attachments/556959468252954634/694944530285199440/image0-2.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/704130759199293580/image0.png",
      "https://media.discordapp.net/attachments/556959468252954634/603283581002842155/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/634877730416099336/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/589496991852265532/D34mtWJUYAAg70m_large.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/603283662460682243/image0.png",
      "https://media.discordapp.net/attachments/556959468252954634/603283591161446402/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/627289213662003200/70287451_p0_master1200.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/589497115353546752/DzodToGUUAUpHlS_large.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/590654270936711179/hitsujigaoka_nemu_gankutsu_sou_no_fuyajou_san_drawn_by_nitro_mugityaoisii__sample-50086066f2632d8de6.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/737046330647773294/illust_83251610_20200726_133858.png",
      "https://media.discordapp.net/attachments/556959468252954634/707412081095344138/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/631301414542639116/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/669270831016443924/76563936_p0_master1200.png",
      "https://media.discordapp.net/attachments/556959468252954634/704805820256485523/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/589498132828520468/Dzse-h9VAAAzELR_large.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/589497137658724362/DznW-CgUYAAk5Vg_large.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/718175932602515557/illust_82084629_20200604_115318.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/636752505388400670/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/603283674477363280/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/603283604054868001/image0.png",
      "https://media.discordapp.net/attachments/556959468252954634/668468590181089280/155_mar_e04_03.png",
      "https://media.discordapp.net/attachments/556959468252954634/606821723668611083/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/652578306658533376/8455b06ca3b211bf821c741eb502ed5e.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/626878949992955929/3068bce1548e2f9de29d37afc6ba6571_01C9VVDA5ZJA2K41XT5G8ZQ55Z.640x0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/637296463709208586/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/638471226087440393/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/594866567788101654/illust_70464839_20190626_225617.png",
      "https://media.discordapp.net/attachments/556959468252954634/652578219794497547/8eef3837087c9944f37ad27b7e0115ba.jpeg",
      "https://media.discordapp.net/attachments/556959468252954634/719469938154143785/illust_74759514_20200608_011759.png",
      "https://media.discordapp.net/attachments/556959468252954634/636750057076686871/image0.png",
      "https://media.discordapp.net/attachments/556959468252954634/590654250468507707/mash_kyrielight_fate_grand_order_and_etc_drawn_by_uguisu_kagura__edf776eb552730b0c936c7ee51a14225.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/590654280076230704/thompson_submachine_gun_girls_frontline_drawn_by_take_trude1945oneetyan__sample-01fb97622066360dd20a.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/603283587982164009/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/631678867932839936/girls-with-guns-01112018-06.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/706540746651729980/I9ywLzxfXcagS_2t4X10EHg1KxjrErStzgu3-doVIJ4.png",
      "https://media.discordapp.net/attachments/556959468252954634/669270727232323584/78249151_p0_master1200.png",
      "https://media.discordapp.net/attachments/556959468252954634/590654263324180520/bb_and_bb_fate_grand_order_and_etc_drawn_by_michael_r__sample-ea83c48d614d56429b02987f500924cb.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/617774863549202479/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/668489652646182988/78507501_p0_master1200.png",
      "https://media.discordapp.net/attachments/556959468252954634/634877731720658956/image8.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/737871875048472576/illust_83289281_20200728_201909.png",
      "https://media.discordapp.net/attachments/556959468252954634/627289247933661184/70802989_p0_master1200.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/634877729803862041/image6.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/627289251981033473/53806164_p0_master1200.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/669270455169056778/78238187_p0_master1200.png",
      "https://media.discordapp.net/attachments/556959468252954634/636750060356370433/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/707407235609002054/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/634877729283506186/image7.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/771269079029776394/illust_84539103_20201029_000743.png",
      "https://media.discordapp.net/attachments/556959468252954634/769038451717701662/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/589498132438712330/DzqqfOMVAAA76W3_large.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/636746176993165323/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/615581457733124096/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/627289233572233217/68282091_p0_master1200.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/603283626225827900/image0.jpg",
      "https://media.discordapp.net/attachments/556959468252954634/706739518522523658/image0.jpg",
    ];
    var result = glasses[Math.floor(Math.random() * glasses.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/gangbang", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var gangbang = [
      "https://img2.gelbooru.com/samples/34/45/sample_34459111cb632e38a8c40ee942ddf843.jpg",
      "https://img2.gelbooru.com/images/31/e7/31e7c44931e7448f4181031594182ed9.jpg",
      "https://gelbooru.com/index.php?page=post&s=view&id=5596970&tags=multiple_penises",
      "https://img2.gelbooru.com/samples/13/6b/sample_136bed9dc6974c934f568bee7c441cc5.jpg",
      "https://img2.gelbooru.com/samples/4b/49/sample_4b493bd0e14ddc012799a72c41ebc1ec.jpg",
      "https://img2.gelbooru.com/samples/46/c7/sample_46c7279d81794bc2293fb8dcf1120ac6.jpg",
      "https://img2.gelbooru.com/images/1a/5f/1a5f18396a948fb86108de83967f29cb.jpg",
      "https://img2.gelbooru.com/images/d7/f9/d7f9aceb5c4250f689c5fca077726541.jpg",
      "https://img2.gelbooru.com/samples/a3/07/sample_a307112f00bcc7fa3596ffe2e54b8f42.jpg",
      "https://img2.gelbooru.com/images/62/f6/62f600e5ea118bdf1d1681e1e71bd852.jpg",
      "https://img2.gelbooru.com/images/62/f6/62f600e5ea118bdf1d1681e1e71bd852.jpg",
      "https://img2.gelbooru.com/images/9e/3a/9e3a87763750b8ebbbec5916da579656.jpg",
      "https://img2.gelbooru.com/images/6d/9f/6d9f279b25996efbaddb6416dc8235c6.jpg",
      "https://img2.gelbooru.com/images/c1/8b/c18bc5cb557d2c63662337bcff56db31.jpg",
      "https://img2.gelbooru.com/samples/0f/04/sample_0f04a7ee3ed4ca6885d079aeceeac64c.jpg",
      "https://img2.gelbooru.com/images/68/6f/686fc564acdda2858f0f4a032797ef4d.jpg",
      "https://img2.gelbooru.com/samples/8a/21/sample_8a21fe7e8c5327bf754e1182fd732095.jpg",
      "https://img2.gelbooru.com/samples/b9/66/sample_b9667235ff2c49c75d8cabdb2707785f.jpg",
      "https://img2.gelbooru.com/samples/bd/b3/sample_bdb3c0b983a300b78867aaa9b93f63de.jpg",
      "https://img2.gelbooru.com/samples/e6/ce/sample_e6ceaa105dea5fe9081cb52fdef92513.jpg",
      "https://img2.gelbooru.com/images/37/e8/37e882cbc065a8a1874bc99928cc14ea.jpg",
      "https://img2.gelbooru.com/samples/f1/c5/sample_f1c539235686301e85f943665d88fbdc.jpg",
      "https://img2.gelbooru.com/samples/32/69/sample_326944dacf4e9b71928280f7066aa253.jpg",
      "https://img2.gelbooru.com/samples/6a/0e/sample_6a0e8a07c06dfde5bd1fb5c633bbb59c.jpg",
      "https://img2.gelbooru.com/samples/fc/b8/sample_fcb8850246c8aef78eb4e3708eeaab88.jpg",
      "https://img2.gelbooru.com/samples/9d/4b/sample_9d4bfd4c996be28a7e54c12678a8c5e2.jpg",
      "https://img2.gelbooru.com/samples/e7/6e/sample_e76ee790a06401e7dc6809f3c9c7fc3b.jpg",
      "https://img2.gelbooru.com/samples/15/f7/sample_15f7245377fe7189dd7442990215bfea.jpg",
      "https://img2.gelbooru.com/images/b2/d0/b2d012e396290bdb4a8c11572cefe9bd.png",
      "https://img2.gelbooru.com/images/66/8d/668d9b9c2f30ec0146b53d9fbde021a5.jpg",
      "https://img2.gelbooru.com/images/64/83/64833a1ce79e5dc94f7328354ab0a2d7.jpg",
      "https://img2.gelbooru.com/samples/88/86/sample_8886c84620e6bf410323c83844556025.jpg",
      "https://img2.gelbooru.com/samples/6f/db/sample_6fdb557c345722bbd119a3961328079e.jpg",
      "https://img2.gelbooru.com/samples/17/e2/sample_17e217960c692674d0dc74f879c089af.jpg",
      "https://img2.gelbooru.com/samples/f4/13/sample_f413ad61e0ae6c07e36754781c06e646.jpg",
      "https://img2.gelbooru.com/samples/09/ac/sample_09ac8638fe88834bf6dbabc2ce550aee.jpg",
      "https://img2.gelbooru.com/samples/72/8d/sample_728dc0b49e5f051557ede4f47df9326c.jpg",
      "https://img2.gelbooru.com/images/4d/a1/4da1613bb4bd119e52e08bc38dd85fe0.jpg",
      "https://img2.gelbooru.com/samples/31/dc/sample_31dce5b51052cb58015bfcd645f45c8e.jpg",
      "https://img2.gelbooru.com/samples/f1/98/sample_f198f9f3e2d99eaa1bb034205369f2ae.jpg",
      "https://img2.gelbooru.com/samples/d5/75/sample_d575c6b47af35d91755c3cb6eb423d3f.jpg",
      "https://konachan.com/sample/8f46ff65ee4b208316a0c4bdcc989370/Konachan.com%20-%20317317%20sample.jpg",
      "https://konachan.com/sample/2b26ab530b7c6f015873004040e4ae60/Konachan.com%20-%20317285%20sample.jpg",
      "https://konachan.com/sample/2009598d749a5a111e61d5c65e3c757c/Konachan.com%20-%20317279%20sample.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770953743255470140/49feaec0-0192-449a-82b7-44b717d9d849.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770969329357160498/GIF_52.gif",
      "https://cdn.discordapp.com/attachments/770948564947304448/770983088888610826/1c6dc9b8-6e04-45fb-b78f-1aa741e98d2d.gif",
      "https://cdn.discordapp.com/attachments/770948564947304448/770986448329506846/3360-xWcGyI07i_A.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770986610749603861/3471-9vvJccyONJk.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770987549363535902/16c691dc-bbbc-4c1c-b7e9-d1bc9f4c3d50.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988869780635688/3cfbdf1c-d533-4ba9-ab3d-ca49d2ac0b0a.gif",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988991394611230/3a7d63407f9f5143517202feea7111fc.jpeg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770989484657344512/lusciousnet_swimsuit_slave_949905045.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771000856518721536/0500-JoBwW6kA3kk.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771000963888316456/0503-yDlwnTv6si4.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001745924816896/0555-it84pW6ebn4.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002263976017940/603-mq77h7AVEfA.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002980522655755/0663-d87YM3v4VjE.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016785435688960/1721-Thyo_5A5g9I.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016825914916894/1725-XhHmtbknnmQ.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771030693425053726/382f3175-dcff-439c-89fb-309ed04d52fd.jpg",
    ];
    var result = gangbang[Math.floor(Math.random() * gangbang.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/foot", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var foot = [
      "https://konachan.com/sample/6b56f616636dee37b9cd7a3f4286bb9c/Konachan.com%20-%20316447%20sample.jpg",
      "https://konachan.com/sample/d85db565ce195e5fbc3fcc4045f80fe0/Konachan.com%20-%20313418%20sample.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771029453387595797/8bcdbeeb-35c8-4272-b9fd-70ddbab414c5.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368482373369856/145746z8x5lw2a5l0zt055.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/771368914386681926/tumblr_o4gryejrvv1uxlh2uo3_1280.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/771371202752413706/ELV-Kd5WkAACqxJ.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/771372528392208394/000c22cf59bb8f3b2c8e82a7b8bb9194.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/771372567453892638/30a1512590925400d25bf562e5560933.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/771373704030322718/dce32100-40df-44c0-b0df-a4dc8ccb2789.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771373796937695282/03eb6382-5be5-448e-b078-39baddb872d8.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/771373820723593226/1e1e48f2-9ef3-4b3b-a9c9-241c1f4a495e.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771373853377036339/20170319_002303.gif",
      "https://cdn.discordapp.com/attachments/770948564947304448/771373873899110411/956487e1-e6c1-4d8d-9145-a20c30bc3a41.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771374024001454090/yande.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/771376251931590747/Q0Vc8.png",
    ];
    var result = foot[Math.floor(Math.random() * foot.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/fendom", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var femdom = [
      "https://media.discordapp.net/attachments/516059858924208138/681659736759861318/image0_6.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/681658400810991650/lusciousnet_lusciousnet_hentai-a-small-facesitting-album-x-p_160480173_1.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/679172636252700692/5d63377e84f7d.jpeg",
      "https://media.discordapp.net/attachments/516059858924208138/678115448344018944/image0.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/677623452538241050/4e98dcbfed1201003cd6f481ad58e311.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/677254777180127243/camilla-hentai-1.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/677054546278613004/481lf0qukyb31.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/676001334482173972/image0.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/674625128616689671/image0.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/672517231745433641/571b3b0a489c325e0aefd6bf4f000c92.png",
      "https://media.discordapp.net/attachments/516059858924208138/672517231313289216/336aeae234bf6b53225c626361ac9067.png",
      "https://media.discordapp.net/attachments/516059858924208138/671022545390141440/image0.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/669051142046482455/chcomic.png",
      "https://media.discordapp.net/attachments/516059858924208138/669051124610891796/cutewship2.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/667061547142610945/image3.png",
      "https://media.discordapp.net/attachments/516059858924208138/666665636306485280/image0-5.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/666665577275981834/image0-3.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/666306387659456512/4dfa85.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/666071339555356683/IMG_20190724_092936.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/665938875524317184/image1-1-1.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/665882446725906442/Screenshot_20190924-075728_Discord.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/665678391495753758/image3-1.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/665308716056444957/image0-7.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/664155658140123156/Litchipix-628467-femdom_handjob.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/663015503815507978/9578efa.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/662081719385718786/6a8ae79.png",
      "https://media.discordapp.net/attachments/516059858924208138/661640081060397086/f693a9683b409df100514296dd9b6fcb.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/661638128964075520/5d2d41181dc0c75337b431952aedf734.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/661638125352648709/IMG_20191202_221150.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/661637986831695882/69674763_p2_master1200.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/661637985594507307/hk416_and_ump45_girls_frontline_drawn_by_beluga_dolphin__sample-bfbbb30c37f0adaa34af976a9f918ebb.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/661637985166557196/f21.png",
      "https://media.discordapp.net/attachments/516059858924208138/661637984654721045/1560099824154.png",
      "https://media.discordapp.net/attachments/516059858924208138/661637984654721044/lusciousnet_lusciousnet_1453086825996_2049130559_01C0YXDYVXDQ9B58RAXZMTDZXR.png",
      "https://media.discordapp.net/attachments/516059858924208138/660791681620246554/tumblr_phdy21Ypw61v73vj5_1280.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/660520486996017172/tumblr_o2cy4jjOVE1v5h9coo1_500.png",
      "https://media.discordapp.net/attachments/516059858924208138/660250656476758035/1567518493520.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/659691562158260224/1253c9.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/658471323034583050/tumblr_oxxvbjN5qA1tm1dgio1_540.png",
      "https://media.discordapp.net/attachments/516059858924208138/658439955344916488/D12YGbcUgAAWkHT.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/651178121193586689/image0-6.jpg",
      "https://media.discordapp.net/attachments/516059858924208138/650617998717091856/mcjtmzwzj0m31.png",
      "https://media.discordapp.net/attachments/516059858924208138/650617985689583617/kniqtktx3sp31.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016911948611624/1728-J6EgZMRLOYs.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771023805438623784/Hentai_Nation_592.jpg",
    ];
    var result = femdom[Math.floor(Math.random() * femdom.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/ero", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var ero = [
      "https://media.discordapp.net/attachments/527959391446761473/682672218207027260/A9I9FLW_d.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/681855421245554708/J4gfxcR_d.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/681790172592865315/xgt7ys7ua1b41.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/681790129203052568/image0-5.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/681790122743693313/66193871_p0_master1200.png",
      "https://media.discordapp.net/attachments/527959391446761473/681790107539341380/image0-7.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/681790096722231327/ec32416771771cea8a46f077c62fe174.png",
      "https://media.discordapp.net/attachments/527959391446761473/681790083115909154/image2.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/681790058176446489/image0-9.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/681790048206585924/image2-1.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/681790032599973989/IMG_1572905606332.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/681790022856474654/image0-10.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/673284759065198612/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/671109511976583186/IQqVj85_-_Copy.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/670306041048727572/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/668528655043002368/sophia_tanaka_the_wizard_drawn_by_m_da_s_tarou__ffd81eb33f59c40621e5023f29f0df37.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/668485777185046538/1_33.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/667325160159969290/66193871_p0_master1200.png",
      "https://media.discordapp.net/attachments/527959391446761473/666010814938873861/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/665995702551445514/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/665972706323202081/image3.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/665972705417363470/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/665712394672013322/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/665259247474573320/full_07da84a5-9f5c.webp",
      "https://media.discordapp.net/attachments/527959391446761473/664932180966768657/image1.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/664932180966768654/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/657028534623010836/03da4d7036effc392dabce5d4c9db0e1.png",
      "https://media.discordapp.net/attachments/527959391446761473/657028190904254469/ec32416771771cea8a46f077c62fe174.png",
      "https://media.discordapp.net/attachments/527959391446761473/655453753515835422/image2.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/655453752580636693/image1.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/655453752580636692/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/651106170995605524/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/643475455151964170/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/643472954684080141/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/643414515928662016/Jh10Eh5.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/643414491438120970/vn6udN3.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/641678607235678248/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/641405739012718592/IMG_1572823502432.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/641405724123201596/IMG_1572717415604.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/683505579444011079/9cUvraP_d.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/683508839743881241/7LP0hxB_d.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/641148731219116052/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/639266734980988938/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/638792710286868496/image0.png",
      "https://media.discordapp.net/attachments/527959391446761473/637878322726043669/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/637296785181769779/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/636755521164017674/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/636754317197574155/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/636745919655575552/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/636745915738226739/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/636744380329492481/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/636740594202574848/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/636157761066893325/M6PA37a.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/634439280218865695/d5e3d47.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/634439279543713802/ba8c3fe.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/633618828781289482/1ff5da6.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/630451853196525568/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/630451849123856422/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/630042122514595840/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/622732860092055592/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/621442352837427210/sirius_azur_lane_drawn_by_takayaki__a8c6e0862d8666f5d64914dfc7138852.png",
      "https://media.discordapp.net/attachments/527959391446761473/611122245611552799/wa2000_girls_frontline_drawn_by_saya_mychristian2__sample-bf4b5ffc8bf7d39c077b56910847ffaf.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/611122245099585575/original_drawn_by_shibainu_niki__e608924584a026ad1774bc35b23920d7.png",
      "https://media.discordapp.net/attachments/527959391446761473/611122244365713438/nakano_nino_go_toubun_no_hanayome_drawn_by_suisen_21__sample-d374908c0a2dba790fdd0828ccee7f12.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/611122243682172928/original_drawn_by_piripun__sample-c7239167f9610c0b7267a2ecd8208f04.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/611122242918547456/original_drawn_by_akausuko__sample-a573900473d9d90db9da856ddda01c21.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/606527197720870912/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/606519853884637184/75828537_p0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/595244278587064328/x.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/592568179444940808/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/592566544425549844/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/592566327755931668/image1.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/592238817050886144/Kyonyuu-Anime-Ero-Anime-Maid-5273030.png",
      "https://media.discordapp.net/attachments/527959391446761473/590083191142875136/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/582632110263894046/f29b0f8.png",
      "https://media.discordapp.net/attachments/527959391446761473/582206981494931457/74827240_p0.png",
      "https://media.discordapp.net/attachments/527959391446761473/582198509042925599/8meop31uc7x21.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/581828815592882187/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/578296008581185550/image0.png",
      "https://media.discordapp.net/attachments/527959391446761473/578295988540932117/image0.png",
      "https://media.discordapp.net/attachments/527959391446761473/578295355280457759/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/575837526187835402/74635394_p0.png",
      "https://media.discordapp.net/attachments/527959391446761473/575477218659139604/macciatto-28aciel0229-Anime-AO-Anime-Art-5183289.png",
      "https://media.discordapp.net/attachments/527959391446761473/575477166771404820/hiragi-ringo-Anime-AO-Anime-Art-5183293.png",
      "https://media.discordapp.net/attachments/527959391446761473/575108498636144640/ero-waifu-Rem-28re-zero29-Re-Zero-Kara-Hajimeru-Isekai-Seikatsu-Anime-5181899.png",
      "https://media.discordapp.net/attachments/527959391446761473/574223805711384586/74541928_p0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/572054221134888971/image0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/571642065704845322/74398146_p1.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/571642063909552129/74398146_p0.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/570387521658290246/Konachan.com_-_274528_apron_ass_ass_grab_blonde_hair_blush_book_bow_breasts_cleavage_maid_male_origi.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/569413547273093130/74285341_p0.png",
      "https://media.discordapp.net/attachments/527959391446761473/568198898242289664/Konachan.com_-_269716_sample.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/568198854822985738/Konachan.com_-_260033_sample.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/568198737915281410/Konachan.com_-_258221_dokiyuri_drink_idolmaster_idolmaster_cinderella_girls_kurokawa_chiaki_maid.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/568198734144471080/Konachan.com_-_227749_sample.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/568198734144471080/Konachan.com_-_227749_sample.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/568198715425292347/Konachan.com_-_232936_bed_blue_eyes_blue_hair_blush_bow_braids_breasts_censored_cleavage_cum_footjob.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/567856327221706771/saki-saki-achiga-hen-Matsumi-Kuro-trista-28makkoivenus29-5138348.png",
      "https://media.discordapp.net/attachments/527959391446761473/567759128060100627/arisugawa_natsuha_idolmaster_shiny_colors_and_etc_drawn_by_wasabi_nmrw4477__36b438983e3b3f3e99ff5e8b.png",
      "https://media.discordapp.net/attachments/527959391446761473/567292967103234062/54559599_p0.png",
      "https://media.discordapp.net/attachments/527959391446761473/567047011568844831/Konachan.com_-_281407_apron_blush_breasts_brown_hair_cameltoe_cum_gloves_headdress_long_hair_maid_ni.png",
      "https://media.discordapp.net/attachments/527959391446761473/567045419398594591/f8fa5a3.jpg",
      "https://media.discordapp.net/attachments/527959391446761473/567041161085190154/Konachan.com_-_281528_sample.png",
      "https://media.discordapp.net/attachments/527959391446761473/567017638673252363/Konachan.com_-_281985_ass_azur_lane_brown_eyes_drink_elbow_gloves_food_fruit_fujima_takuya_gloves_lo.png",
      "https://media.discordapp.net/attachments/527959391446761473/561680566546857984/Konachan.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/770949690048380959/Hentai_Nation_20.jpg",
      "https://images-ext-2.discordapp.net/external/qKu6CT8vnfvWk9A90TCHZCMSk-WYfJ78NM8yjawQGuU/%3Ffit%3D270%252C400%26ssl%3D1/https/i1.wp.com/manytoon.com/wp-content/uploads/2019/05/miss.jpg",
      "https://images-ext-2.discordapp.net/external/H3mxlBUSkdq98OhtbA2OlmB5GcFJCpLKEwG94ggak1o/%3Ffit%3D270%252C400%26ssl%3D1/https/i1.wp.com/manytoon.com/wp-content/uploads/2019/07/Pheromone-Holic-manhwahentai.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/553360483315613739/22t.jpg",
      "https://media.discordapp.net/attachments/527959259107950603/553360456392245248/21t.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771335958271623168/504af0dc33851aacf0e5cdfd46094514.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/771000644152197130/710.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771000747315560488/497-Fe67B-bfmcg.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001374086397962/0525-iWRn0JWF9EY.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001575933476884/0545-SwaxxBy0cAk.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001885883629588/569-6VBU3b08Y-A.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002102260563968/0585-GJ5pfHuOWkc.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002155427168301/590-upM3zPauvLw.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016377116655626/1653-52vm09z1VuM.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016584859746384/1684-Rhc9pVcoy4c.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771018006133735434/1898_mIjFlf6bPc.jpg",
      "https://cdn.discordapp.com/attachments/763827461250613268/771857665046872085/image0.gif",
      "https://cdn.discordapp.com/attachments/707201738255368194/771861522757976064/1mu59y817hm41.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/771861594694352926/4a61e5528a0d1efb0ed163edc4cd31c1.png",
      "https://cdn.discordapp.com/attachments/707201738255368194/771861708267585596/qakn1osmum451.png",
    ];
    var result = ero[Math.floor(Math.random() * ero.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/cum", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var cum = [
      "https://media.discordapp.net/attachments/480750844363538433/682844580265197608/yande.re_492406_sample_anus_ass_breasts_cum_fellatio_gangbang_handjob_heels_horns_maid_no_bra_nopan_.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/682844300521766932/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/682841909453914132/qeXIT47.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/682841370532380672/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/682840148538294322/yande.re_560426_sample_breasts_censored_cum_fate_grand_order_francis_drake_fate_grand_order_orange_m.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/682839047240155152/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/682837729528119296/3ne5az-bfGlG39Qb4z2lhRHuBClzSG-enaPMHHOgHkU.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/682837373062873098/image0.png",
      "https://media.discordapp.net/attachments/480750844363538433/682835254100492511/y8Q5Jur.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/682835247724888074/fbzs309cGB1ACirimEnAIJApZD2lxhpowooHJTL8vrWjUw.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/682835244688474142/fbzs309cGB1ACirimEnAIJApZD2lxhpoHJTL8vrWjUw.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/681688469126381613/image0-2.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/681246477649313855/146547403963.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/681246079450480651/146547204998.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/681246077571170313/146547196783.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/681245742815510747/xjpsdojqn9531_01DE62SAAGN2TMC6VA6G8YYY24.315x0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/680742874522058752/8pf8eltvny041.png",
      "https://media.discordapp.net/attachments/480750844363538433/679732598070706449/5c6c6249e94042563ba3c2d6e9080175f761f732.png",
      "https://media.discordapp.net/attachments/480750844363538433/679424490693722122/77LoOsq.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/679424490287005726/szfpc4tnqkg41.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/679316941642399764/3Y8mCDq.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/679316941164380160/rrg1swtz1pf41.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/678315512228347952/75115124_p0_master1200.png",
      "https://media.discordapp.net/attachments/480750844363538433/678306384571531274/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/678300259591651338/sample_305cd17921289a6c83971a19b817a066.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/678297456328572928/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/678297442952937510/image0.png",
      "https://media.discordapp.net/attachments/480750844363538433/678160862237818891/gascogne_azur_lane_drawn_by_suushiki__8a65b2999b4abc0f85bf95e62a370f51.png",
      "https://media.discordapp.net/attachments/480750844363538433/678084677981962290/f938943e56ba7b5672d3ec69176725b2.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677991750995935241/Z1maqZB.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677991543461642270/464xlk5c4ra41.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677735705459294208/saigyouji_yuyuko_touhou_drawn_by_asutora__60a8754fe2473314e9988cb7eceb08bc.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677421945662210071/ssss-gridman-anime-takarada-rikka-ecchi-hentai-image-12.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677421874430607370/image1-1.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677200835876356106/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677085026789097492/sample_eeeb113cc657c8c133390faa4e64d181.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677085024969031680/sample_dae8d4aedf23ae64719ea29e32d3fc39.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677085020346777600/sample_a1836fc618e0773a6e08cf7100d816e1.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677085015414276096/e3fcd533bb73e1d1b541d3b326c33a9cdd0b327c.jpeg",
      "https://media.discordapp.net/attachments/480750844363538433/677085009953161235/dda9fd1b6738a861eeadac302b1a037f232f2367.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677084963853828096/b09fd417a9902b20214087808eeaebc8.jpeg",
      "https://media.discordapp.net/attachments/480750844363538433/677084961718796328/a72315daa0782c3492ad6ca723e3abff.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677084956060549120/a647cf3d070306dee457f279d1f34939.jpeg",
      "https://media.discordapp.net/attachments/480750844363538433/677084948586561536/67327684_p0_Blowjob_slave_angel.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677084938687741952/66121561_p0_.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677084895482216468/63550153_p0_.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677084886775103503/63041531_p0_.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677084872946221056/1948f4da08ac2738b48c6d2881dcc44f.jpeg",
      "https://media.discordapp.net/attachments/480750844363538433/677084835323314176/0111_68159094_p00.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677084810585571328/7d25ebc591c50dda05e030a283ad1d75.png",
      "https://media.discordapp.net/attachments/480750844363538433/677084796941500416/6c8b64f93ee2921e9b6a811767771c453038c857.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677084775739293706/ogata_chieri_idolmaster_and_idolmaster_cinderella_girls_drawn_by_black_mutou__sample-c42984753cb31a2.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/677054402716106762/k1_Mqi_v54kGPlWZY6WPImpCKe99hMRRp2FlwwucaW8.png",
      "https://media.discordapp.net/attachments/480750844363538433/677054367030968330/481lf0qukyb31.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676834970727088128/y_ADoPjytVBzhDaQdpOYBaaWVahKXGq1cjIcdMRhR8Q.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676834970442137611/61ZksxQ.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676834970181959724/z2l8tvbnjbr31.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676663050002104320/62aajqvku0g41.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676494479162736653/darkstalkers_morrigan_aensland_potion_artist.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676241985065189426/illust_79244059_20200209_224405.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676226862703312906/sample_8f96b18133f1f4dcda995c20d2e705e7.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676121943799496704/image0-7.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676121910261841924/image1.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/676121890921644043/image0-8.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675967900640608265/ciel_alencon_god_eater_2_rage_burst_and_etc_drawn_by_lolicept__8302c1e0b1a518ec5a044d17571b8448.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675821575752122378/49475471_p0_-_6_.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675818075656028160/78245621_p0_-_1.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675752177985126400/ai_chan_getsuyoubi_no_tawawa_drawn_by_sayori__1bab0b728705aea8c3a6fad0d488a0f9.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675627352901943301/1090352.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675626454859644938/image5-2.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675626303197544458/9Cloud.us_0259-Dtz7Bg4H3N331-1.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675589951286673418/14kky.png",
      "https://media.discordapp.net/attachments/480750844363538433/675589864892268544/140l5.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675588382264655873/rpk_16_girls_frontline_drawn_by_cenangam__2a07aee3b143714659b34ed69b44e4f9.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675229498941112331/meltryllis_fate_and_1_more_drawn_by_angelo_gomahangetsu__29c2be00c166f99319c68ef86d014008.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/675026057916842006/Konachan.com_-_271639_blonde_hair_blue_eyes_blush_breast_hold_breasts_cum_f-cla_game_cg_horns_long_h.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/674887828811022346/875760_jun-ho-kim_fgo-yu-miaoyi-2.png",
      "https://media.discordapp.net/attachments/480750844363538433/674887611235696640/882097_jun-ho-kim_fgo-murasaki-shikibu-2.png",
      "https://media.discordapp.net/attachments/480750844363538433/674880579090645021/sample_a89adf1a9766003c1d0f1cad09847365.png",
      "https://media.discordapp.net/attachments/480750844363538433/674501962947100672/65156653_p5_master1200.webp",
      "https://media.discordapp.net/attachments/480750844363538433/674501962674339858/65156653_p4_master1200.webp",
      "https://media.discordapp.net/attachments/480750844363538433/674501962363830272/Konachan.com_-_282662_sample.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/674501784781455360/dee37c2.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/674350616981798912/sample-67567e9f17bdee88aa15e830fd188bc1.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/674301413253447680/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/673843903077810196/sample_1da3dede5f9c0ed167d20cd3a68c5cd2596e69ac.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/673632027836416047/362270a.png",
      "https://media.discordapp.net/attachments/480750844363538433/673588230343491644/sample_22c5aaa028099c1c3edcb348d7f4cd5f6a469b7a.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/673367557838864470/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/673275672155652116/1441634_-_apple_cake_lina_inverse_slayers.png",
      "https://media.discordapp.net/attachments/480750844363538433/673275652539023390/306554_-_695_naga_the_serpent_slayers_mukuko.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/672928704967475221/4234092.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/672668397468647424/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/672516951842488354/78501760_p0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/672516951540760577/image0-19.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/672516383812354069/c6d1ada7e47dc72147c2db26e43ca865e23139f7_1.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/671894256105029645/2104246-little_witch_academia-ursula_callistis-h_01BW04N03YCFDPBD6H4P5ED0M2.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/671814479792570387/sample_baa82e5468094be09420933b7b86cf1cf0304099.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/671746638452097024/IMG_20200128_173721.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/671746638032928792/ead6026.png",
      "https://media.discordapp.net/attachments/480750844363538433/671487285593899058/image0.png",
      "https://media.discordapp.net/attachments/480750844363538433/671023984342728741/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670767753908584483/kaleina_original_drawn_by_ricegnat__sample-afd39f9a04eafb0bcbd492b2741ac7ac.png",
      "https://media.discordapp.net/attachments/480750844363538433/670767732584611870/kaleina_original_drawn_by_ricegnat__1c98df9b42e2803664ba39316095f79f.png",
      "https://media.discordapp.net/attachments/480750844363538433/670767716520558602/kaleina_original_drawn_by_ricegnat__sample-af305ca5a5725be1b85d0611d2e3aae7.png",
      "https://media.discordapp.net/attachments/480750844363538433/670767698174803978/melusine_original_drawn_by_ibuki_notsu__358970ff017fc01ea997c50056f34206.png",
      "https://media.discordapp.net/attachments/480750844363538433/670733809196466186/sample_d5d3e5b64682f8e3739bde0387ca1165b78231ca.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670733649016258590/7f8e9d5238915b6633e1f07a7bf331a5f9536106.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670731057305354300/8147e78db12dcfd46f6d613b1f7621785321d0fb.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670730537555460096/sample_60d8d565510608b1dfbb850f430ea6c91ada5ded.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670696384843874330/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670696318737580032/image4.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670603030856466444/d433bf9.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670602657928577024/d0c76d7.png",
      "https://media.discordapp.net/attachments/480750844363538433/670602465330331648/5fa61ec.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670602395214020621/86456f5.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670072074055974912/image2.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670072073770500106/image1.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670072073363914752/image0.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670024433515364372/hsjjs.jpg",
      "https://media.discordapp.net/attachments/480750844363538433/670024193512833044/8.gif",
      "https://konachan.com/sample/efc2db82a388ecaed8e3214ec2fcf065/Konachan.com%20-%20316542%20sample.jpg",
      "https://konachan.com/sample/f3f6ea463f111501fc8cc2b9b51e5c46/Konachan.com%20-%20316327%20sample.jpg",
      "https://konachan.com/sample/737a707688c52fdfdd74797e76d67ee2/Konachan.com%20-%20316192%20sample.jpg",
      "https://konachan.com/jpeg/a0863dacd6d8ad422e50aeb423d80111/Konachan.com%20-%20316184%20anus%20ass%20blush%20braids%20censored%20kanojo_okarishimasu%20miazi%20nopan%20purple_eyes%20pussy%20red_hair%20sakurasawa_sumi%20school_uniform%20skirt%20thighhighs%20waifu2x%20wet.jpg",
      "https://konachan.com/sample/dcaf0a2ad0b79ff1717a18359ec44996/Konachan.com%20-%20316088%20sample.jpg",
      "https://konachan.com/sample/647c499d8b46970042625601133a0d18/Konachan.com%20-%20315321%20sample.jpg",
      "https://konachan.com/jpeg/163ed4cbe0e542484733e18a953683ea/Konachan.com%20-%20313778%20aliasing%20arknights%20black_hair%20blush%20bodhi_wushushenghua%20bondage%20breasts%20chain%20cleavage%20eunectes_%28arknights%29%20flowers%20garter%20goggles%20tail.jpg",
      "https://konachan.com/sample/e94bc73cafb5d81656f0f54051a3676f/Konachan.com%20-%20313642%20sample.jpg",
      "https://konachan.com/sample/f855a318c6e1d15cf2762b075a80d36f/Konachan.com%20-%20316712%20sample.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770953789183754250/1e18894c-b74b-4b3f-b222-e7f3f275a5b0.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770955805268246588/2d7006b1-d605-4dbf-adca-784321b8c1e3.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770961930139598858/26.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770967403441553408/8e911801-c0cc-4dc2-ade7-bf9d156fad15.gif",
      "https://cdn.discordapp.com/attachments/770948564947304448/770969192937684992/ezgif-3-fdc2b1173d.gif",
      "https://cdn.discordapp.com/attachments/770948564947304448/770969365158952990/GIF_58.gif",
      "https://cdn.discordapp.com/attachments/770948564947304448/770983119200190484/1aaa1185-e5f4-4f6d-a189-49106284a87f.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770983209638428692/06b09de9-659d-4250-a8ff-e5d2e817eb8e.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770983268186062908/8d9540bb-cc0e-40d6-a11d-73700e0b04dd.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770983345701126154/13.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770984223359893514/3025-vrcLi7EmrgY.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770984482685321236/3149-8jKSIhsXJdk.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770984667707867146/3239-kw3QHkdUyAM.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770986285723549717/3312-xxIYUdxZ0O8.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770987240532082738/3846-5g-iXVCHn60.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770987336766324776/3906-HCyXW0EZP5Q.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770987908802805780/248954c8-f0dd-4230-bcf9-5b64e42ab9d5.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988179250610197/7e09dbc7-9622-42e8-9963-9258d5a40cb9.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988235944886292/9Cloud.us_0173-44.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988277636661248/32bea8e1-2e8c-4b47-8f2d-2f6c3d552b85.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988290378825748/23b2a6d6-a80d-4fa9-9c04-26c7b4a38909.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988334503559188/74ba2448-1302-4c9c-a718-896da56a35ea.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988336751575070/81e0bb81-a642-42be-b48d-dbb7287387c0.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988530007539732/570dd511-0fce-4c0c-b8b7-5e0d17001547.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988542263820308/551ac7d9-4903-456d-9242-37f53d9cf411.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988565119238154/7068b6e9-f6a8-470f-a327-766c2d7cd3b2.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770988628653637662/89101360-d821-47ff-8d7f-6961fb01fe9a.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/770989398619455518/Hentai_nation_6.jpeg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771000752494608384/496-Odrgv5y3mVI.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771000757516107796/0497-a33NIuSb02k.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771000882720407562/500-isbFfj1EUjg.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001095077625936/0513-oDl4jPKoy7c.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001196173197362/0520-X_h1x_0zPLc.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001232667705374/0522-LuNDjP9XKr0.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001254427230238/0523-ixzV6q3Ihuw.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001420521930792/0529-ZPm9NV5Q-Mg.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001492835663893/0534-DNRJOz4lz_w.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001663695749171/0549-Y_IqVtNXAZg.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771001848223367184/0564-mrkdEiHqr7I.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002012757393438/582-zDzQ3rEK1Jc.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002130097635358/586-pF9GIkocDO4.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771002176948142110/0593-DhP97fXehsk.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771015441887789106/1611-F3IsWMwD8Sg.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771015957828861952/1633-WwPYzfGXLfE.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016372423229451/1652-DUE0B49LLaQ.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016373890842624/1652-l3ooUtn_ukE.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016410931396608/1661-VQ7LbvM06Cg.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016458363994132/1663-8g7dVYIRRMM.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016665474400266/1693-XoXwzCm6jdQ.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016712685879376/1695-4dKKpGwocPQ.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771016950418898954/1729-Z-vO-XSRa5w.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771017798498517023/1860-JdSBnt2m8hQ.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771019724858720336/Hentai_Nation_259.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771023587985457202/Hentai_Nation_436.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771035044889231410/uEiTyPj53Pc.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771035045125292092/j_wa_-7Nmz8.jpg",
      "https://cdn.discordapp.com/attachments/770948564947304448/771035046428934154/raniwM_3PA8.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771369379069296640/61.png",
      "https://cdn.discordapp.com/attachments/770948564947304448/771374675946897408/00446-kTcnNdtJZec.jpg",
      "https://cdn.discordapp.com/attachments/707201738255368194/771861442127331388/8I2eO9j.png",
    ];
    var result = cum[Math.floor(Math.random() * cum.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/cosplay", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var cosplay = [
      "https://cdn.nekobot.xyz/e/9/6/ffc914822489a51b2946e5d2f150b.jpg",
      "https://cdn.nekobot.xyz/b/9/a/114079157c091a632f839c93bf546.jpg",
      "https://i0.nekobot.xyz/4/0/0/a26b285804a922d7a155523b23f32.jpg",
      "https://i0.nekobot.xyz/4/9/0/4fb8a1caeac76e0460874b55dd24b.jpg",
      "https://cdn.nekobot.xyz/d/2/4/fc06e03e644b809f8a326915e11e1.jpg",
      "https://cdn.nekobot.xyz/e/3/8/2dd83e6cb351625c91d6be01d4294.jpg",
      "https://i0.nekobot.xyz/6/6/3/f020e750c8b284218f85fdecbb576.jpg",
      "https://cdn.nekobot.xyz/b/6/b/37deea40362f1816bdd212c0b6d59.jpg",
      "https://i0.nekobot.xyz/2/3/d/cc380af646f2e95b68845c9587f9e.jpg",
      "https://i0.nekobot.xyz/3/9/f/6b32934d825333444a46e0109f396.jpg",
      "https://cdn.nekobot.xyz/a/b/1/a83112e57f55180bfc2f5a4549775.jpg",
      "https://cdn.nekobot.xyz/e/2/c/ff576d535e7c87377c24e24d2bdb6.jpg",
      "https://i0.nekobot.xyz/6/d/0/00989a5aab58b3ddd884ff15bdea3.gif",
      "https://i0.nekobot.xyz/7/d/8/df337eb2aee6fb3fef37564ef0e4e.jpg",
      "https://i0.nekobot.xyz/7/f/1/6287d2fbbf89b48f5e86f258d2ac6.jpg",
      "https://i0.nekobot.xyz/7/0/4/a8208770466ba0951f97d61d5c170.jpg",
      "https://i0.nekobot.xyz/7/b/0/f7da7635f3f6c34a664ffdd4cd24b.jpg",
      "https://cdn.nekobot.xyz/a/2/5/1e4efb710f4a7ca22d109ac07e8cc.jpg",
      "https://cdn.nekobot.xyz/b/d/a/87a13044fd418d8ebb869ccbc9477.jpg",
      "https://cdn.nekobot.xyz/f/0/d/44b2d88fc52c9f3f2dfd9c7201f5d.jpg",
      "https://cdn.nekobot.xyz/e/9/2/3e0f3bd320243c20718f6f5f0538b.jpg",
      "https://i0.nekobot.xyz/6/f/1/f8a585487112ba9e23219c4b9c7e4.jpg",
      "https://i0.nekobot.xyz/2/8/5/70b379c84d0391ab4e685afdccd6f.jpg",
      "https://cdn.nekobot.xyz/d/7/6/d459a30cd3c3337522a86d6eaceeb.jpg",
      "https://i0.nekobot.xyz/7/7/9/dd0950bfb9e74f9379a3d5a8abf8e.jpg",
      "https://cdn.nekobot.xyz/a/9/9/c00c7bf15a7e30cc7df22051d77ce.jpg",
      "https://cdn.nekobot.xyz/f/9/d/a3af76465ade7618d158a24bb78cb.jpg",
      "https://i0.nekobot.xyz/7/8/6/22aa2a3f038caf996340b5a7743b1.jpg",
      "https://cdn.nekobot.xyz/e/7/4/086fcdaa0851ebedc005b259093f4.jpg",
      "https://i0.nekobot.xyz/5/8/f/8698738e8418f3b9f69de488b1abf.jpg",
      "https://i0.nekobot.xyz/3/2/1/217008cd5a2a13c559d94cbcb6a8a.jpg",
      "https://i0.nekobot.xyz/6/1/9/a38ee5c9e81b1fbf105e9d072aaee.jpg",
      "https://cdn.nekobot.xyz/e/c/f/06f51474fcafa8f9c23c5462c8b22.jpg",
      "https://i0.nekobot.xyz/6/b/6/f4508098d6268827ca66bf74a1fb4.jpg",
      "https://i0.nekobot.xyz/2/a/1/64dde238e5216b9745fcf5a82aa47.jpg",
      "https://i0.nekobot.xyz/6/0/9/34acdcd0ba1f31eb1bf531ce8271b.jpg",
      "https://cdn.nekobot.xyz/a/a/0/843b46e84d2351633da2f2bf529ca.jpg",
      "https://i0.nekobot.xyz/1/1/6/546fb6b6681de8d29081f2972abaa7061dee1.jpg",
      "https://i0.nekobot.xyz/4/8/a/04a844de6f0af84b1a5e540bd05b1.jpg",
      "https://cdn.nekobot.xyz/d/8/6/5e2770754df2d15ed501a0b9808e4.jpg",
      "https://i0.nekobot.xyz/3/7/0/53bb8a0b03f59fd16fabb123760fa.jpg",
      "https://i0.nekobot.xyz/5/a/2/126c89a323de9ba7e02c45c952261.jpg",
      "https://cdn.nekobot.xyz/d/d/1/fd741e67a592ec02b925c5121855b.jpg",
      "https://i0.nekobot.xyz/1/b/8/222990d810d5fae5dfb8d15d56a51.jpg",
      "https://i0.nekobot.xyz/6/e/9/ba83ab0b45944ee9edf1a1ca1dcef.jpg",
      "https://cdn.nekobot.xyz/f/9/c/83df5bfcfcfb877c23da9140609ac.jpg",
      "https://i0.nekobot.xyz/2/b/a/03d91913fb6395a9ed47452e51ee2.jpg",
      "https://cdn.nekobot.xyz/9/e/3/8b6138a79c91f1c3bc974f3c9999a.jpg",
      "https://cdn.nekobot.xyz/f/3/6/e9ebea57374ed4f5aefd3d30867c0.jpg",
      "https://cdn.nekobot.xyz/b/7/5/070d4c695cf0158292a69f4771fd3.jpg",
      "https://i0.nekobot.xyz/6/b/5/147b038ffe5b81003e1ecf9cf1561d109987e.jpg",
      "https://i0.nekobot.xyz/8/c/9/502c9804a1a153ca24e4d270b2f4a.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352241099608114/20220530_014953.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352262100500622/20220530_015118.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352355490877530/20220530_015248.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352355838984313/20220531_003114.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352356208099358/Screenshot_20220820-203954_Gallery.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352356489101342/Screenshot_20220429-235311_Facebook.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352356812075128/Screenshot_20220429-234533_Facebook.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352357080506540/Screenshot_20220429-235010_Facebook.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352357407666297/Screenshot_20220429-234857_Facebook.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352144362188800/20220306_045313.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352144907436203/20220311_135858.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352145247191152/20220429_165704.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352145700167700/20220306_045104.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352145935044658/20220429_165748.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352237517684818/20220429_165746.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352237870010519/20220306_045346.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352238385905674/20220531_003105.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352238759202817/20220616_022459.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352240243986502/20220705_072420.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352240529190962/20220429_165538.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352240793419836/20220530_015130.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352241099608114/20220530_014953.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352262100500622/20220530_015118.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352355490877530/20220530_015248.jpg",
      "https://media.discordapp.net/attachments/1017089820369100872/1020352355838984313/20220531_003114.jpg",
    ];
    var result = cosplay[Math.floor(Math.random() * cosplay.length)];
    var requestSettings = {
      url: result,
      method: "GET",
      encoding: null,
    };
    request(requestSettings, function (error, response, body) {
      res.set("Content-Type", "image/png");
      res.send(body);
    });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/ass", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/ass.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
        var requestSettings = {
          url: result.url,
          method: "GET",
          encoding: null,
        };
        request(requestSettings, function (error, response, body) {
          res.set("Content-Type", "image/png");
          res.send(body);
        });
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/ahegao", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/ahegao.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
        var requestSettings = {
          url: result.url,
          method: "GET",
          encoding: null,
        };
        request(requestSettings, function (error, response, body) {
          res.set("Content-Type", "image/png");
          res.send(body);
        });
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/bdsm", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/bdsm.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
        var requestSettings = {
          url: result.url,
          method: "GET",
          encoding: null,
        };
        request(requestSettings, function (error, response, body) {
          res.set("Content-Type", "image/png");
          res.send(body);
        });
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/blowjob", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/blowjob.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
        var requestSettings = {
          url: result.url,
          method: "GET",
          encoding: null,
        };
        request(requestSettings, function (error, response, body) {
          res.set("Content-Type", "image/png");
          res.send(body);
        });
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/nsfw/cuckold", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/cuckold.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
        var requestSettings = {
          url: result.url,
          method: "GET",
          encoding: null,
        };
        request(requestSettings, function (error, response, body) {
          res.set("Content-Type", "image/png");
          res.send(body);
        });
      });
  } else {
    res.json(loghandler.apikey);
  }
});

// islamic
router.get("/islam/tahlil", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataTahlil.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/wirid", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataWirid.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/ayatkursi", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataAyatKursi.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/doaharian", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataDoaHarian.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/bacaanshalat", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataBacaanShalat.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/niatshalat", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataNiatShalat.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/kisahnabi", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataKisahNabi.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/asmaulhusna", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataAsmaulHusna.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/niatsubuh", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatShubuh.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/niatzuhur", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatDzuhur.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/niatmagrib", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatMaghrib.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/niatisya", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/islam/niatashar", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatAshar.json`
      )
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});

//game
router.get("/game/tebakgambar", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    scr
      .tebakgambar()
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});

// other

router.get("/other/github-stalk", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.username;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter username",
    });
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${text}`)
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          author: "Lynnxha",
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/other/hilih", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.kata;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter kata",
    });
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${text}`)
    )
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/other/kodepos", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.kota;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter kota",
    });
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/other/covid-world", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.kata;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});
router.get("/other/kbbi", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.kata;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "masukan parameter kata",
    });
  if (listkey.includes(apikey)) {
    fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${text}`))
      .then((response) => response.json())
      .then((data) => {
        var result = data;
        res.json({
          result,
        });
      })
      .catch((e) => {
        console.log(e);
        res.json(loghandler.error);
      });
  } else {
    res.json(loghandler.apikey);
  }
});

module.exports = router;
