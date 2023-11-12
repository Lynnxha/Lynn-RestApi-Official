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
    message: "Sedang Dalam Perbaikan",
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
  random +
  randomlagi +
  "--------LynnnLynnn--KibieptrKibieptr" +
  "HUNTERS--KILLERS";

/** @note
 * Liat cara nulis code yang bener
 */

// Anime Api


router.get("/anime/akira", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.pinimg.com/474x/f6/27/65/f627657859f8b197cfdec94309b76486.jpg",
      "https://i.pinimg.com/originals/1e/70/5d/1e705d9d58b39eb2793edfaf9be0d1c2.png",
      "http://upload.wikimedia.org/wikipedia/en/5/5d/AKIRA_(1988_poster).jpg",
      "https://i.pinimg.com/originals/12/45/34/12453414a6f68ac212c375d72507a9b8.png",
      "https://i.pinimg.com/originals/2c/1f/04/2c1f0464ff5cf9692cae9601aba1fd74.jpg",
      "https://i.pinimg.com/736x/91/44/93/9144931889e97e8b49b66777b21b9883.jpg",
      "https://i.pinimg.com/originals/b5/36/51/b5365185235d417aaa7ffd685e735f5d.jpg",
      "https://i.pinimg.com/736x/c8/de/a5/c8dea5945d70755cf75d7f623f4ddd76--akira-trailer-sci-fi-anime.jpg",
      "https://i.pinimg.com/originals/a6/9a/2e/a69a2edfe08394936bf64fe660d75da8.jpg",
      "https://i.pinimg.com/originals/9b/c1/b0/9bc1b00f9135e139ee4381e0cebf3145.jpg",
      "https://i.pinimg.com/originals/c0/c4/fc/c0c4fc755aa73961b28e24c71ad6e154.jpg",
      "https://i.pinimg.com/564x/21/44/3f/21443f132f6244d10823d3ee2640cd26--akira-poster-poster-art.jpg",
      "https://i.pinimg.com/originals/72/72/b2/7272b2957138ce3982944ea41c85d5b4.png",
      "https://i.pinimg.com/originals/6d/1b/69/6d1b697f0f45e6804afa1465ae8aca26.jpg",
      "https://i.pinimg.com/originals/01/19/74/011974ef39eb0e5c850b631dfbcbc091.jpg",
      "https://i.pinimg.com/736x/0e/2e/81/0e2e81ba0f3a6a9f1791bb115b186d4b.jpg",
      "https://i.pinimg.com/originals/35/d5/0e/35d50ea7dac12997c537c9c7e59e5498.jpg",
      "https://i.pinimg.com/474x/16/3e/f0/163ef03eff751391e840a839ada6f198.jpg",
      "https://i.pinimg.com/736x/41/e2/5a/41e25a1c28e97a602e358fe3037239ee--akira-anime-cyberpunk-anime.jpg",
      "https://i.pinimg.com/736x/e6/0b/b0/e60bb031b655eefb921b40cf3b8104a2.jpg",
      "https://i.pinimg.com/originals/09/06/f8/0906f89c679e065180125368c34f75c9.jpg",
      "https://i.pinimg.com/originals/48/be/c9/48bec9a9e176ddfe8ff54e02a81567b3.jpg",
      "https://i.pinimg.com/originals/9e/2f/d7/9e2fd71508f1a1c249c3d01e4ea0a633.jpg",
      "https://i.pinimg.com/474x/27/c7/ed/27c7ed35c99d1456e3b58ceb524e3bf3.jpg",
      "https://i.pinimg.com/originals/0b/f8/20/0bf8203eac29b01c7c5046dcd14f18fb.jpg",
      "https://i.pinimg.com/originals/53/7c/94/537c949bc1bfbd077b586fcf3f4feb69.png",
      "https://i.pinimg.com/originals/3b/3f/97/3b3f97994562fbeac69cddf0104baed5.jpg",
      "https://i.pinimg.com/originals/2b/61/cf/2b61cfc31fb01395e3a39ba669cdac63.jpg",
      "https://i.pinimg.com/736x/8e/dc/9f/8edc9f02abf43ae621592cc7beacadc7.jpg",
      "https://i.pinimg.com/originals/da/3a/71/da3a71fd49bd74425a8e83868efbbffe.jpg",
      "https://i.pinimg.com/originals/86/33/3a/86333a6912d38132b92636775eb99e5c.jpg",
      "https://i.pinimg.com/originals/78/c3/1a/78c31ad222007490f442cc150771e25d.jpg",
      "https://i.pinimg.com/736x/e1/95/1d/e1951dc9a747cb1d2ed56e6595cb6d06.jpg",
      "https://i.pinimg.com/564x/38/75/63/3875635ae5af99a36aa7025dd0a0b213.jpg",
      "https://i.pinimg.com/originals/12/42/ac/1242ac34621c6bc8c8fdd057ed70e667.jpg",
      "https://i.pinimg.com/originals/7e/57/cb/7e57cbd6fbab1f0436fad8cecad342e5.png",
      "https://i.pinimg.com/originals/f2/fe/94/f2fe945869cb17713dbd58a2abf68334.gif",
      "https://i.pinimg.com/originals/f8/9a/23/f89a235a504401afcdc166ee9437aa5d.gif",
      "https://i.pinimg.com/originals/7a/2b/d6/7a2bd6fd78ac200e3fd1e836ba4f25e3.jpg",
      "https://i.pinimg.com/736x/f0/88/e7/f088e74d95958728a1a11ff11322b408.jpg",
      "https://i.pinimg.com/474x/d7/b8/01/d7b801ea18abf2920f482d6d6ac679b4--akira-manga-katsuhiro-otomo.jpg",
      "https://i.pinimg.com/originals/f6/8e/8f/f68e8fcb284cfdf21f7150b8e35097c9.jpg",
      "https://i.pinimg.com/originals/de/ad/88/dead8872093e2793c7968c2ba1a2d59d.gif",
      "https://i.pinimg.com/736x/49/cb/d5/49cbd5e5393ceed268d0f2d578002a0c.jpg",
      "https://i.pinimg.com/564x/d0/bc/6f/d0bc6f70c9f9f58c9c336736b9afdc70.jpg",
      "https://i.pinimg.com/originals/db/26/25/db2625ae0d72040949c73c12349440f0.png",
      "https://i.pinimg.com/originals/ac/0a/ef/ac0aefdda430f64668bc6146040e95e1.jpg",
      "https://i.pinimg.com/originals/e4/0b/7a/e40b7a40360ba0666d2785d239c5780f.jpg",
      "https://i.pinimg.com/474x/be/5b/16/be5b168518296dcd07f0b1f2d5bde1c7.jpg",
      "https://i.pinimg.com/originals/8b/63/c2/8b63c2d89efacf6e35498ae2c8efdcbf.gif",
      "https://i.pinimg.com/736x/5e/5b/d8/5e5bd827eab4a20502d9955459cf06c3.jpg",
      "https://i.pinimg.com/originals/9d/f7/b2/9df7b2db9c439f3beb433740aef3855f.jpg",
      "https://i.pinimg.com/564x/83/58/89/8358892f1edc22b6c64bb261094ee16a.jpg",
      "https://i.pinimg.com/564x/52/99/5c/52995c742d2ded17391660e819a93026.jpg",
      "https://i.pinimg.com/736x/01/e9/00/01e900c9a0a5fda02fbc60014a3dab48.jpg",
      "https://i.pinimg.com/originals/67/96/7d/67967d3be48405eb3d47fb539a06257e.jpg",
      "https://i.pinimg.com/originals/17/f7/8c/17f78c79b650eea0583773c0cec14692.gif",
      "https://i.pinimg.com/originals/c4/55/15/c45515cf7990aedb6c51e85f9ffb65bd.jpg",
      "https://i.pinimg.com/236x/68/a9/97/68a99785d1df270080a0da469856fca4.jpg",
      "https://i.pinimg.com/originals/29/04/f8/2904f87dd2d40263b9579f97c00a53a5.gif",
      "https://i.pinimg.com/564x/d5/15/c6/d515c6856e3b48b4b3df010f075bca33--akira-manga-katsuhiro-otomo.jpg",
      "https://i.pinimg.com/originals/ac/0b/df/ac0bdf5c854c74af9e0bbc985b7cb2ef.jpg",
      "https://i.pinimg.com/736x/19/0e/38/190e386f226bf18915dcee81d48bfd89.jpg",
      "https://i.pinimg.com/236x/d6/c6/fa/d6c6fa855412c403458484efa9bec945.jpg",
      "https://i.pinimg.com/736x/2a/65/91/2a65914a6607a1730c7d0ab7cbb77eab--katsuhiro-otomo-manga-anime.jpg",
      "https://i.pinimg.com/originals/57/81/5c/57815c9b7a006e3e75b55014b13b0a56.gif",
      "https://i.pinimg.com/originals/47/30/2b/47302b4b18215d75698e110413446869.jpg",
      "https://i.pinimg.com/originals/8c/5c/88/8c5c88664816f5de42fc6b4393d8dafb.png",
      "https://i.pinimg.com/originals/76/32/f4/7632f465ff46ebaf5516fb84f53fc272.jpg",
      "https://i.pinimg.com/originals/63/db/77/63db7777520669ee010552761de63a71.jpg",
      "https://i.pinimg.com/originals/cb/b3/5a/cbb35a2c16812af108f972be22420411.jpg",
      "https://i.pinimg.com/originals/22/e2/dc/22e2dc4a386dbe65de6fd72a44e8a176.png",
      "https://i.pinimg.com/originals/65/6e/a7/656ea79f75091ba67aa0c3d2a333a841.jpg",
      "https://i.pinimg.com/originals/f4/3d/6b/f43d6b47e57c0becc93a731da73ae1b6.jpg",
      "https://i.pinimg.com/736x/11/3c/2b/113c2bd5ca3a0d29e6c639f2e1c6da02.jpg",
      "https://i.pinimg.com/736x/81/3d/bb/813dbbd545752290c2546a4e3ea8fa6e.jpg",
      "https://i.pinimg.com/736x/6e/df/25/6edf25a75158c963300a546b52ed1c02.jpg",
      "https://i.pinimg.com/originals/36/56/5b/36565b319e1f74961b26b9da90693435.jpg",
      "https://i.pinimg.com/474x/d3/8a/45/d38a459f196e5ca1737a0201cefe9eb5.jpg",
      "https://i.pinimg.com/564x/bc/5c/b0/bc5cb000fe7f9ccf15b9d641d02ae5a6.jpg",
      "https://i.pinimg.com/564x/87/12/fe/8712fee75df5fc75e0fe368e91c43373.jpg",
      "https://i.pinimg.com/550x/d6/16/27/d61627ae9f6947c8e7e443ba1b9c7b8e.jpg",
      "https://i.pinimg.com/originals/95/f5/bb/95f5bb19509506f3327eec343d5fdfce.jpg",
      "https://i.pinimg.com/originals/11/63/8b/11638b2f373042936b6aa688708532a9.jpg",
      "https://i.pinimg.com/736x/34/7d/da/347dda907613b93819cc69e5d2868572.jpg",
      "https://i.pinimg.com/originals/30/78/0a/30780a6ac1811c3aae5f1bc84dba4b81.jpg",
      "https://i.pinimg.com/736x/ed/eb/54/edeb54b65789e6ea8dcbf9518c8e5457.jpg",
      "https://i.pinimg.com/originals/68/af/33/68af332d483b06f54cc0b245e8af2ff7.png",
      "https://i.pinimg.com/originals/de/47/f5/de47f5f1cce3fe7925af8ceeb698c620.jpg",
      "https://i.pinimg.com/736x/62/fa/6c/62fa6c3cc3badbbb425cca21ae1cde8f.jpg",
      "https://i.pinimg.com/originals/7d/b5/e2/7db5e28c162b4d03163e50038fe86ee1.jpg",
      "https://i.pinimg.com/originals/92/59/ee/9259eefc365f54ba9ea7535bee425598.jpg",
      "https://i.pinimg.com/736x/63/2f/0d/632f0dacb82051510cb4889b83e8350d.jpg",
      "https://i.pinimg.com/originals/b2/1e/96/b21e9649641d215b39a9762decde5c82.jpg",
      "https://i.pinimg.com/736x/31/74/d7/3174d726d6e2aafd04f7a49d69850162.jpg",
      "https://i.pinimg.com/originals/71/98/11/71981161c4783fff27075c62d9efc8ca.jpg",
      "https://i.pinimg.com/originals/42/a9/3a/42a93a28940b0e9792f9ab633c01d1dd.jpg",
      "https://i.pinimg.com/736x/c9/06/03/c9060312e5b6f8c9a86bce0ce6482b5b--akira-tetsuo-art-manga.jpg",
      "https://i.pinimg.com/originals/fe/6e/b5/fe6eb51f7621dbcb0e2c9d056b33285e.jpg",
      "https://i.pinimg.com/736x/2e/68/6b/2e686b70cf4552c933ec4bb8181f3e17.jpg",
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

router.get("/anime/akiyama", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.pinimg.com/640x/dd/a7/f8/dda7f85648604e9dba45ccbcfbc3b614.jpg",
      "https://i.pinimg.com/originals/69/2d/22/692d222977dc88477b5907820b4a1a13.jpg",
      "https://i.pinimg.com/474x/6c/66/b9/6c66b9b6bd147c52efdd5919a03d17bd.jpg",
      "https://i.pinimg.com/originals/0b/20/76/0b207633b8a09700ea167b9ae448f181.webp",
      "https://i.pinimg.com/originals/42/07/c0/4207c0929768a3309eb505f703dfe23b.jpg",
      "https://i.pinimg.com/originals/71/18/f2/7118f29a312705a254ee4d161cfb7305.png",
      "https://i.pinimg.com/236x/65/4f/50/654f5021af20f511252107000e588de9.jpg",
      "https://i.pinimg.com/236x/0f/fc/49/0ffc498a965c17b2ff8fe1cd12a9285c.jpg",
      "https://i.pinimg.com/originals/b4/ee/bc/b4eebc4099687cbfcc83bdb6177e16d6.jpg",
      "https://i.pinimg.com/736x/32/a3/91/32a391aa0ec3fc38d6417b20136a9837.jpg",
      "https://i.pinimg.com/originals/5a/1e/2d/5a1e2de7ee527200b0209b3a610829ad.png",
      "https://i.pinimg.com/originals/59/2d/68/592d689836c89ba1c503a287b1e6aa5c.png",
      "https://i.pinimg.com/originals/56/96/7e/56967e375ee1063591ad146ef916f388.jpg",
      "https://i.pinimg.com/736x/d9/a4/44/d9a4442d7f44b9c7278aead78e9b2a35.jpg",
      "https://i.pinimg.com/736x/f0/5e/80/f05e8049b6d51c166ea516c07153fe12.jpg",
      "https://i.pinimg.com/736x/cc/8d/71/cc8d71e3dfb11ba03daecdda3e5d3b9d.jpg",
      "https://i.pinimg.com/originals/84/e6/ce/84e6ce980d09604daefcbdf9c88aeb62.png",
      "https://i.pinimg.com/originals/8a/75/74/8a757409a4444994d56a3806028143b8.jpg",
      "https://i.pinimg.com/originals/86/d7/47/86d7471b83baabb6606923877d58708c.png",
      "https://i.pinimg.com/474x/f9/7f/b2/f97fb2cadd07064b92059a291ad462d3.jpg",
      "https://i.pinimg.com/736x/6a/43/94/6a43949a5dd5061c2b5c168ad968a262.jpg",
      "https://i.pinimg.com/474x/ca/8d/f2/ca8df22f1272b56762a0a4eff2806892.jpg",
      "https://i.pinimg.com/736x/57/ab/06/57ab069d72244918daf83a1b5b3cddb8.jpg",
      "https://i.pinimg.com/originals/25/5a/c2/255ac25f94806af21c3c3b2ca7e6ac0e.jpg",
      "https://i.pinimg.com/originals/f8/66/7b/f8667be17b52fe442040aca8246c3447.jpg",
      "https://i.pinimg.com/474x/3e/d7/15/3ed7152e438232ee2eb9ac7d85c297ac.jpg",
      "https://i.pinimg.com/originals/dd/99/f5/dd99f52ef2412f76abb9543dea459d54.gif",
      "https://i.pinimg.com/originals/25/50/45/255045ad3cc2f58b9aada5d0b502270a.jpg",
      "https://i.pinimg.com/736x/31/c7/19/31c71997ba285d5473be2eb6c40ca183.jpg",
      "https://i.pinimg.com/736x/74/9b/16/749b160b01eb347d19a9d3bf3c629eac.jpg",
      "https://i.pinimg.com/236x/51/d7/a2/51d7a20abfc045b4b4532b6978313145.jpg",
      "https://i.pinimg.com/originals/e9/ba/5b/e9ba5bc3344571e64db89284a79a2340.jpg",
      "https://i.pinimg.com/originals/9b/0b/22/9b0b22a8ae677e8cc97ae6cd4ce4938f.jpg",
      "https://i.pinimg.com/originals/14/25/4b/14254b0ded5ad48177658897858bfe16.png",
      "https://i.pinimg.com/736x/bd/d0/0c/bdd00c140088eeaf2680aa3f6e22a0e7.jpg",
      "https://i.pinimg.com/originals/83/81/cf/8381cf16654fba0362520454f870930f.jpg",
      "https://i.pinimg.com/280x280_RS/73/ac/84/73ac843bbe98d1f0c93d88819930cf58.jpg",
      "https://i.pinimg.com/600x315/80/53/86/80538637f4a612d0bccd89b2e8935044.jpg",
      "https://i.pinimg.com/originals/b3/5d/2e/b35d2e33ac1812fc7038afb184a7a52c.jpg",
      "https://i.pinimg.com/originals/70/02/cf/7002cf021fcd9b341ad472a2e95a5773.jpg",
      "https://i.pinimg.com/originals/26/98/3a/26983abffa69d0585b3f4250dca36527.jpg",
      "https://i.pinimg.com/474x/55/32/c5/5532c5ffa1c4afe16bd059dae132faad--k-on-gif.jpg",
      "https://i.pinimg.com/originals/4d/68/6c/4d686cff95a17e8544fae3f6f94421b4.jpg",
      "https://i.pinimg.com/736x/81/17/38/81173817d111600620e9ef56f77f5261--a-mother-k-on.jpg",
      "https://i.pinimg.com/736x/f2/2d/86/f22d8661644d8de2c8607702a44ea910.jpg",
      "https://i.pinimg.com/originals/3a/97/47/3a97477ed7ab0d52fea1861ade122671.jpg",
      "https://i.pinimg.com/originals/2b/3d/a6/2b3da63bdd5b2d01e13048a40f007aa5.png",
      "https://i.pinimg.com/originals/54/e3/4e/54e34e939348698d1f659e63e1f9d6e8.jpg",
      "https://i.pinimg.com/564x/f4/9e/44/f49e440b0782754852e8b430cc0d9dea.jpg",
      "https://i.pinimg.com/736x/52/06/f0/5206f0a010fdf7900b071658fb623c16.jpg",
      "https://i.pinimg.com/736x/3b/b1/98/3bb198aa0d1dba2422c3210040b8bdb7.jpg",
      "https://i.pinimg.com/originals/06/9c/52/069c52df3863f7f6a25f6d69d9eda292.jpg",
      "https://i.pinimg.com/564x/21/51/5d/21515d20c0d48df49903ee0ebd2eaf45.jpg",
      "https://i.pinimg.com/474x/3b/0e/4e/3b0e4eb918ddf06de9c8f835306f4cc9.jpg",
      "https://i.pinimg.com/474x/50/4a/4b/504a4b70fd1c7c79e0dd049de81b0a9a.jpg",
      "https://i.pinimg.com/originals/1b/0f/3a/1b0f3a3cef4f6601101ad78b00807c66.jpg",
      "https://i.pinimg.com/originals/d5/cf/d9/d5cfd9020fff1db57ad9948108a53608.jpg",
      "https://i.pinimg.com/736x/85/12/17/851217bfb6d439343b5aec4d2d223845--manga-girl-manga-anime.jpg",
      "https://i.pinimg.com/474x/70/fd/a3/70fda3fa4628fd37227f32522576c0ef.jpg",
      "https://i.pinimg.com/originals/e9/6d/62/e96d62c7f536e16f917330bc03a96e11.jpg",
      "https://i.pinimg.com/736x/35/51/58/355158dd945cd590eda185cae602a25d.jpg",
      "https://i.pinimg.com/originals/97/04/2e/97042e9cb4e1196cb90c5d103ab83912.jpg",
      "https://i.pinimg.com/originals/8b/45/2d/8b452dfdfd1fd947a197173bea0da3f5.png",
      "https://i.pinimg.com/736x/76/a3/2b/76a32b910e75a0a40cccd3adc8132290.jpg",
      "https://i.pinimg.com/736x/d1/43/91/d1439173fcba0d8840f3e7eed47024ce.jpg",
      "https://i.pinimg.com/474x/fd/f1/2b/fdf12b99411d82116dfda88a0a4313b3.jpg",
      "https://i.pinimg.com/originals/ba/09/a3/ba09a3fbab1fb2e630c6dfc4c9240128.jpg",
      "https://i.pinimg.com/originals/76/33/c9/7633c927ab7cdf6fb795cabce8d87aa3.jpg",
      "https://i.pinimg.com/736x/d6/8c/02/d68c02e82dde76f7bf07153145646547--cosplay.jpg",
      "https://i.pinimg.com/736x/29/58/ce/2958ce66c9880469c6590e61db2c1a4f--christmas-girls-merry-christmas.jpg",
      "https://i.pinimg.com/originals/30/44/77/304477a23af880e2b2d09a3c6aaeddc2.jpg",
      "https://i.pinimg.com/originals/3e/76/6b/3e766b55a91f32cba96d3de70ac51254.png",
      "https://i.pinimg.com/736x/8d/9f/e4/8d9fe4aaa29e346aa73333239d4f733b.jpg",
      "https://i.pinimg.com/originals/98/8e/98/988e9814dcc8a4d60ee7af5458715f62.jpg",
      "https://i.pinimg.com/originals/b6/12/d1/b612d18e00d28b5a712af503cc596ad3.jpg",
      "https://i.pinimg.com/736x/da/33/38/da333836125fdcd61dd34b5453ecccdf.jpg",
      "https://i.pinimg.com/236x/ce/cc/f6/ceccf65bc80b780e64b7c584ee99d80e.jpg",
      "https://i.pinimg.com/236x/17/01/39/1701396545f208d1e3b9c5d08074770c.jpg",
      "https://i.pinimg.com/736x/70/4c/40/704c40f413838164f382376c0d952f98.jpg",
      "https://i.pinimg.com/736x/19/24/cd/1924cdaa9a72ae03f84ff1fa41b7ef36.jpg",
      "https://i.pinimg.com/564x/0f/d4/77/0fd4777e14ebfac378cf2beff1ac1fa8.jpg",
      "https://i.pinimg.com/originals/f7/d2/4e/f7d24e8c912ec85d2b68abcfae616add.jpg",
      "https://i.pinimg.com/originals/46/05/8a/46058aeebce85a5e9a02f7cd87cc5c1c.jpg",
      "https://i.pinimg.com/originals/3e/85/dd/3e85dda6c566fb944930e5fcc41bf06c.png",
      "https://i.pinimg.com/474x/18/d8/8a/18d88ae8b6a16e90fbf321b2e516f3c3.jpg",
      "https://i.pinimg.com/originals/3d/5f/26/3d5f2698137b23cb54430c39d9f90e32.gif",
      "https://i.pinimg.com/736x/14/f2/bb/14f2bbb5126005092180ba86f1fbe75d.jpg",
      "https://i.pinimg.com/originals/49/84/fc/4984fc999dc29d52f07a9043e9ba2c8b.jpg",
      "https://i.pinimg.com/originals/07/7d/5f/077d5fbd77d94f1baec3db7b07d6d9eb.jpg",
      "https://i.pinimg.com/736x/4c/e6/d5/4ce6d57eee84af7caf8b448ed25a65fc.jpg",
      "https://i.pinimg.com/originals/7c/d9/5c/7cd95c311311a8f4dc15590abd4a90a9.jpg",
      "https://i.pinimg.com/originals/2d/6f/cf/2d6fcfa7e1094d4370114f6f140068d1.gif",
      "https://i.pinimg.com/originals/d5/1d/41/d51d41723d9f5048eab0d4b1c3cf3b4a.jpg",
      "https://i.pinimg.com/originals/8f/1c/7b/8f1c7b187d3b2264105802c1a0b4c917.jpg",
      "https://i.pinimg.com/736x/17/f5/57/17f5575cf7d349d1c0ac0eb0c8ba7e9c.jpg",
      "https://i.pinimg.com/originals/02/25/67/022567594709371f30e8cfa68277492a.jpg",
      "https://i.pinimg.com/originals/bd/9c/bb/bd9cbb31230cbc16892c67a9223cbb04.jpg",
      "https://i.pinimg.com/736x/e5/c3/0b/e5c30b262f468d069d4dff1c07745ac7.jpg",
      "https://i.pinimg.com/736x/85/98/ec/8598ec2fba15782216907c481170cbe3--kyoto-chicas-anime.jpg",
      "https://i.pinimg.com/originals/d9/45/00/d9450054f3b90b48b3c8f990b913a25d.png",
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

router.get("/anime/ana", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.pinimg.com/originals/ec/66/22/ec662278affd46bfb4f31698e4823d19.jpg",
      "https://i.pinimg.com/originals/4f/8c/c0/4f8cc01c555cb880a8bf01f052bfd4e6.png",
      "https://i.pinimg.com/564x/36/2f/fc/362ffc4088677633ac68c72aac7ae8a6.jpg",
      "https://i.pinimg.com/474x/23/fd/c6/23fdc6153bed325c15a848517e88b3bf.jpg",
      "https://i.pinimg.com/originals/14/6e/1f/146e1fe3061488a8b2997e77d8804c5b.png",
      "https://i.pinimg.com/564x/76/92/3b/76923b55c184d1988363a8e6b00c29f3.jpg",
      "https://i.pinimg.com/originals/47/12/c9/4712c9a3b2c4836febde6493cbdfa6c3.jpg",
      "https://i.pinimg.com/originals/d0/8e/8b/d08e8bee7a0d81d0badc52d7b3c990db.jpg",
      "https://i.pinimg.com/originals/7e/3e/6f/7e3e6f844097caa0efca359c345a97dc.png",
      "https://i.pinimg.com/236x/6b/5a/c9/6b5ac9c1d7812d1c0aa6676b7c794494--quotes.jpg",
      "https://i.pinimg.com/originals/d2/4a/e3/d24ae3000d76f79a24fba528d68786d0.jpg",
      "https://i.pinimg.com/600x315/1c/38/2d/1c382d942782e9ba515f2627a682398f.jpg",
      "https://i.pinimg.com/600x315/b7/b6/c1/b7b6c1ea2925ed7b6f9cc8f8b1d917d6.jpg",
      "https://i.pinimg.com/236x/54/61/09/5461099d9dd688ca856b279c520a6589--reference-manga-female-reference.jpg",
      "https://i.pinimg.com/originals/cc/c0/1f/ccc01f9c0b8955278470b3be9f4c79cb.jpg",
      "https://i.pinimg.com/originals/3a/28/29/3a2829c5d776f3a4c7271026a6657877.png",
      "https://i.pinimg.com/474x/a9/12/72/a912721b8dcea4be067400d3f96ca638.jpg",
      "https://i.pinimg.com/originals/74/40/e1/7440e156a6aabf044f851e568cf3a1ec.gif",
      "https://i.pinimg.com/600x315/21/10/0c/21100c14768257853288dd2517d3f924.jpg",
      "https://i.pinimg.com/originals/2f/79/ba/2f79ba20ea7df6eb0adc73461c8962c3.jpg",
      "https://i.pinimg.com/originals/6b/57/42/6b574287df57a0f9cc3b918f5d9d8535.png",
      "https://i.pinimg.com/736x/90/43/3d/90433d3a088544fc61957719bf9f4edd--anna.jpg",
      "https://i.pinimg.com/originals/26/26/01/262601fa3d758c9bff7bd13f71872c3c.jpg",
      "https://i.pinimg.com/474x/61/75/f8/6175f817ca7ba6f690a55d5d3a221b61.jpg",
      "https://i.pinimg.com/originals/e1/be/61/e1be611ade1db9c5366bb73db13ac16a.png",
      "https://i.pinimg.com/originals/68/54/e8/6854e8b7a73b34cbbbeb247c2fef3374.png",
      "https://i.pinimg.com/originals/1b/60/a8/1b60a8c01d5cb6d5824b748548965486.png",
      "https://i.pinimg.com/originals/14/4f/50/144f508feba5b06d43c1e6f08ce5c997.png",
      "https://i.pinimg.com/736x/82/4e/ce/824ece928d52e6037faf19ca03565269.jpg",
      "https://i.pinimg.com/originals/04/b2/be/04b2be57048433b22220a2e28afffec3.gif",
      "https://i.pinimg.com/736x/02/a1/66/02a1665bd61d8cf781fe970ffaae2bbe.jpg",
      "https://i.pinimg.com/564x/55/4c/e1/554ce130348d3425d0087cd3fe917fbf.jpg",
      "https://i.pinimg.com/originals/a1/c3/c7/a1c3c7e4fdad13688f24de84efddb36b.jpg",
      "https://i.pinimg.com/474x/21/6d/8a/216d8ae2eace196b943982e8cc4c4647.jpg",
      "https://i.pinimg.com/originals/5a/ed/67/5aed6783fb09524c7e6d0dd1fb431721.png",
      "https://i.pinimg.com/1200x/65/03/4a/65034a23500c3bbcd71aa39a24021cce.jpg",
      "https://i.pinimg.com/originals/a4/22/06/a42206f2f8cb8ac3a26fbd92c830cfc8.png",
      "https://i.pinimg.com/originals/26/d5/e5/26d5e5f4697805579597a9c31e37ae75.png",
      "https://i.pinimg.com/736x/91/8e/d9/918ed92e87110e3f0921aa1676c504c5.jpg",
      "https://i.pinimg.com/originals/2f/16/88/2f16883cb5e49e5b830b62347ce0d3eb.jpg",
      "https://i.pinimg.com/originals/ed/15/6c/ed156c802220ac848d46bda2e7f74e5c.gif",
      "https://i.pinimg.com/originals/f0/f0/35/f0f035cee59a9032dae4874983c2ce35.jpg",
      "https://i.pinimg.com/originals/62/b7/ed/62b7ed855c573a50130556688636540b.png",
      "https://i.pinimg.com/736x/1a/f7/e5/1af7e527e7fc5159c4467322248b3fae--romance-anime-romances.jpg",
      "http://e-shuushuu.net/images/2016-01-16-802621.jpeg",
      "https://i.pinimg.com/236x/79/a1/98/79a19867ff39356fe74bfebe494f500b--caps-black.jpg",
      "https://i.pinimg.com/originals/2a/db/e2/2adbe23b780612c6e09fa30f3d49c377.jpg",
      "https://i.pinimg.com/236x/cb/dd/5e/cbdd5e18bed417a05e7897938f2d8bfc--mizuno-.jpg",
      "https://i.pinimg.com/474x/e6/98/66/e6986671aa6161706d05fbf3f334f56b--manga-art-manga-anime.jpg",
      "https://i.pinimg.com/736x/ab/3a/68/ab3a6857f63fdc64dfdea61dc50cc4a7.jpg",
      "http://www.otakupt.com/wp-content/uploads/2016/03/21aeed61f5054a8c72dfull.jpg",
      "https://i.pinimg.com/originals/29/3f/6b/293f6b213535a1ef82639169149476cc.jpg",
      "https://i.pinimg.com/originals/25/5b/eb/255bebd54b5704d12e3ed0618fe0ddc5.gif",
      "https://i.pinimg.com/1200x/21/fa/a9/21faa9f83dfd34993cd67076e06d6dd6.jpg",
      "https://i.pinimg.com/736x/5a/c5/24/5ac52412c57431565d2adf7e01837bc0.jpg",
      "https://i.pinimg.com/474x/0b/8b/68/0b8b688b21503d8ceae8caccc1b42d7a.jpg",
      "https://i.pinimg.com/originals/9a/a2/c2/9aa2c2b515aa001df01918c09a19c560.jpg",
      "https://i.pinimg.com/originals/dd/3e/a8/dd3ea8923038306526323d3b02437aa9.jpg",
      "https://i.pinimg.com/236x/d1/05/09/d105094fc3e16cef501cdd0bcd33f485.jpg",
      "https://i.pinimg.com/474x/56/74/46/5674463fb6407cdf770b524fc6ddfafd--noragami-post.jpg",
      "https://i.pinimg.com/736x/bc/69/18/bc691814823cb60c18d6fc2aff57bbb2.jpg",
      "https://i.pinimg.com/originals/96/54/20/9654209233f18a15a15e5f009840c6e8.png",
      "https://i.pinimg.com/236x/10/e8/d1/10e8d125fc5b0c54b00a5d1421dfaead--nijiro-days-avy.jpg",
      "https://i.pinimg.com/736x/2b/99/05/2b9905bb5533e1b14d87f81a1e3a9646--shirt-skirt-no-.jpg",
      "https://i.pinimg.com/236x/ba/9f/79/ba9f79038d62aa5edc43cadb918fb38e.jpg",
      "https://i.pinimg.com/originals/98/4e/8b/984e8b5a7e3b587ba8d670a45c01b0ff.jpg",
      "https://i.pinimg.com/736x/5c/c9/43/5cc943671923aa30ec788d1b0e6c88d2--nijiiro-days-image.jpg",
      "https://i.pinimg.com/222x/5e/57/8d/5e578dc528cea2ca0f2aebcf11ed9104.jpg",
      "https://i.pinimg.com/736x/1f/5e/c7/1f5ec7dfd0df22ffb13191dfd1c44aac--anime-fantasy-digital-art.jpg",
      "https://i.pinimg.com/564x/aa/6d/fe/aa6dfef36667f45e621e1f559be7ac75.jpg",
      "https://i.pinimg.com/originals/a4/69/37/a4693760f849a71f6a6ad45a491fad2c.jpg",
      "https://i.pinimg.com/originals/86/78/88/8678880fbfd16ca2f04544e38f130922.jpg",
      "https://i.pinimg.com/736x/92/ad/df/92addf5a29a6f4cede0477974aae48f9--anna.jpg",
      "https://i.pinimg.com/custom_covers/222x/797629852692870909_1590728469.jpg",
      "https://i.pinimg.com/originals/f8/92/69/f89269958b7acf94a823ff28d74eac77.jpg",
      "https://i.pinimg.com/222x/bb/ea/df/bbeadfca412726f879689930a9c51ccf.jpg",
      "https://i.pinimg.com/736x/16/e4/3c/16e43c4f0945e049ae3edcb518f359f5--rainbows-manga.jpg",
      "https://i.pinimg.com/736x/99/9e/a6/999ea6de2e8a851938ac5d30f25e6085.jpg",
      "http://orig14.deviantart.net/8b17/f/2015/242/2/0/nijiiro_days_37_mattsun_and_mari_by_nigaisuiren-d97sp6e.png",
      "https://i.pinimg.com/236x/2c/ca/cb/2ccacb85a49bc57f161b07821f9bc9d8--nijiiro-days-expressions.jpg",
      "https://i.pinimg.com/originals/54/49/e7/5449e78653aed604bf4147756382412e.jpg",
      "https://i.pinimg.com/474x/f0/17/fe/f017fe55461cc68746c7aeedbeafb786.jpg",
      "https://i.pinimg.com/474x/17/22/0c/17220cc9ca4a4c42342d082073b1fea2--casual-cosplay-anime-guys.jpg",
      "https://i.pinimg.com/originals/bf/a0/de/bfa0de97a12d0787b747eb590bbaf02f.jpg",
      "https://i.pinimg.com/originals/8a/c6/bf/8ac6bf442544727a143a2d83221831d5.gif",
      "https://i.pinimg.com/custom_covers/222x/716424321911772675_1543035839.jpg",
      "https://i.pinimg.com/originals/83/2c/75/832c75be20d460fda421542cadc1a195.jpg",
      "https://i.pinimg.com/550x/cd/e2/d2/cde2d259338a344b3da0c6902265bc2d.jpg",
      "https://i.pinimg.com/originals/29/fd/5d/29fd5d0266bb7eff14f5f8b7f69db2b8.png",
      "https://i.pinimg.com/originals/33/04/5d/33045dfea5aae36fe8fb3cd80a568c77.jpg",
      "https://i.pinimg.com/600x315/13/70/9b/13709b8e536a0f082777bfd979f4c9e5.jpg",
      "https://i.pinimg.com/originals/c4/1d/4d/c41d4dc12cd46b6de8c9fc68b7fd37df.png",
      "https://i.pinimg.com/736x/31/be/af/31beaf6e1ff467f972a5d1f617ae22f7--anime-kawaii-kiss.jpg",
      "https://i.pinimg.com/736x/ec/b2/08/ecb2087035130c2d49017678769ba7d6.jpg",
      "https://i.pinimg.com/550x/d5/43/24/d543244cbc3130538e3254759b5b2f29.jpg",
      "https://i.pinimg.com/236x/d9/0c/bb/d90cbba44bd23f11638803b5e70d0713--reference-manga-female-reference.jpg",
      "https://i.pinimg.com/originals/3d/e9/8d/3de98d231c0dd21ddc61e20d787dc9c1.gif",
      "https://i.pinimg.com/originals/4d/45/ea/4d45ea00119037cf41af92a55aab7bea.jpg",
      "https://i.pinimg.com/originals/14/61/9d/14619daad0f5716b257a20b9798c0302.jpg",
      "https://i.pinimg.com/736x/9b/6a/08/9b6a08a0a9840836c198fef032439899.jpg",
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

router.get("/anime/asuna", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    var data = [
      "https://i.pinimg.com/originals/45/03/cc/4503cc4f4e1d187374a843e2f06748f1.jpg",
      "https://i.pinimg.com/originals/b8/4b/8c/b84b8c3a5b678b9ae8800c68fdb9d6e7.jpg",
      "https://i.pinimg.com/originals/42/8f/90/428f90ce15242ec6dd33565ac4887ccf.jpg",
      "https://i.pinimg.com/originals/c4/37/88/c437886e3290e2a6ca7a611869e83b28.jpg",
      "https://i.pinimg.com/originals/77/f5/4c/77f54c5ed015a587c4f2b1f79c26ca58.jpg",
      "https://i.pinimg.com/originals/f4/0c/6e/f40c6e17a87b204537bd3800995584f2.jpg",
      "https://i.pinimg.com/originals/46/01/87/460187584d9fa0ae334cd56780bce3e8.png",
      "https://i.pinimg.com/originals/f2/b4/fb/f2b4fbe5704a339627bb24b90d9f5886.jpg",
      "https://i.pinimg.com/originals/8c/cb/f2/8ccbf2b29acfb2d94232af33fffbc25e.png",
      "https://i.pinimg.com/736x/b5/34/d0/b534d0bf0c38626394d98e8641cdee89.jpg",
      "https://i.pinimg.com/564x/e4/5f/8b/e45f8ba6064189c06d998cd6bd8df871.jpg",
      "https://i.pinimg.com/originals/58/62/a6/5862a6e17e8b989eceb5d53977a30d73.jpg",
      "https://i.pinimg.com/originals/53/5d/95/535d95f6f54bb530a5fa6e2e884bc0d4.png",
      "https://i.pinimg.com/originals/ea/2a/76/ea2a76806bf74166b20d848b539471c2.jpg",
      "https://i.pinimg.com/originals/5f/a7/19/5fa7193d2e8337a4f7ff819a956a09e4.jpg",
      "https://i.pinimg.com/originals/4b/40/b0/4b40b0c33fa2c55c51fa06a7633fa8e9.jpg",
      "https://i.pinimg.com/736x/4f/22/60/4f226098889db82f2f59c4679fb9f9c8.jpg",
      "https://i.pinimg.com/736x/f8/54/f3/f854f3f08158f89c4483a154f5788632.jpg",
      "https://i.pinimg.com/originals/8d/be/78/8dbe7842373b3e7715d80a1d05b2b420.jpg",
      "https://i.pinimg.com/originals/47/ef/59/47ef594e23a1f1f7144fb279809da9d0.jpg",
      "https://i.pinimg.com/originals/d5/1c/53/d51c5394b46f5e8d978257379f5f6fc3.png",
      "https://i.pinimg.com/originals/0b/5d/d0/0b5dd0cc5b1bf77cfed50d68508f1f9f.jpg",
      "https://i.pinimg.com/736x/55/9e/2f/559e2f7a61d7bd6ae75285e31250880c.jpg",
      "https://i.pinimg.com/originals/a5/ce/6a/a5ce6a68ce413cb23fbe606d9e371aad.png",
      "https://i.pinimg.com/736x/b6/30/5a/b6305a49cf3fd978d07810f0b9853145.jpg",
      "https://i.pinimg.com/originals/d1/89/8d/d1898d7038283080a0b9dc579ecc5b0b.jpg",
      "https://i.pinimg.com/originals/26/19/83/261983fd6738dc7f948ff3cf45b692c9.jpg",
      "https://i.pinimg.com/564x/78/ae/1c/78ae1c9d6761502c89e690a5a612a9a6.jpg",
      "https://i.pinimg.com/originals/db/b2/d3/dbb2d30fdbf607da36eb3511b6181e5a.jpg",
      "https://i.pinimg.com/564x/05/af/fe/05affea899b9c849b8bfdb6c500d22b0.jpg",
      "https://i.pinimg.com/474x/14/2e/4b/142e4b1041d67fd7c40e1e469d7b9044--main-image-chicas-anime.jpg",
      "https://i.pinimg.com/originals/9d/8f/60/9d8f6091dd4d2c5e968c38d1d22525d2.png",
      "https://i.pinimg.com/280x280_RS/97/15/e2/9715e211c134845500fc5fcf12029b93.jpg",
      "https://i.pinimg.com/originals/b7/7e/58/b77e58b8721af56340b76385f7dd5a48.jpg",
      "https://i.pinimg.com/564x/e9/cf/10/e9cf10d3231e3851822aae6e1408bf9e.jpg",
      "https://i.pinimg.com/originals/2f/92/be/2f92bef6c07a27dca9a8680378dcaa36.jpg",
      "https://i.pinimg.com/originals/6b/30/09/6b300943a2b726ecbdf48952982416ff.jpg",
      "https://i.pinimg.com/originals/93/77/13/9377130ead6dace4f05830f7c7d31d97.jpg",
      "https://i.pinimg.com/originals/7f/82/35/7f8235d929f7284597473eb6a132bb81.jpg",
      "https://i.pinimg.com/originals/cb/87/fb/cb87fb583842526f62e20a1e70d5f900.jpg",
      "https://i.pinimg.com/280x280_RS/fa/94/0c/fa940caa0ca74f45feef5d7be782603f.jpg",
      "https://i.pinimg.com/736x/95/c5/93/95c5932c34b882566cbe3198ce48df01.jpg",
      "https://i.pinimg.com/originals/00/84/af/0084afa5629c64a210f55bc049d52998.jpg",
      "https://i.pinimg.com/originals/fa/41/b1/fa41b1d21ae3ad8164a82834fa215b4f.jpg",
      "https://i.pinimg.com/originals/7a/21/9a/7a219a7da1a3ab3f5457baa1094f6813.jpg",
      "https://i.pinimg.com/474x/c1/37/b7/c137b76156c0ae7fc39ec0c959cc60dd.jpg",
      "https://i.pinimg.com/originals/e7/ce/ac/e7ceac4dd04d697cc13de516c199c651.jpg",
      "https://i.pinimg.com/736x/6d/ba/c3/6dbac337e52dcc16bb70f72331a2c43e.jpg",
      "https://i.pinimg.com/originals/de/61/06/de6106bdff20dedb416425633419f5cb.jpg",
      "https://i.pinimg.com/originals/a2/05/54/a2055433d3d86d75d6d1326d19c805a5.jpg",
      "https://i.pinimg.com/originals/77/39/65/773965e5d59c1c21344427066ee1840d.jpg",
      "https://i.pinimg.com/originals/72/2c/30/722c308252ca0615f527b356af9ba3de.jpg",
      "https://i.pinimg.com/originals/c3/8b/a8/c38ba8a995bbeabcad93891af62d24f3.jpg",
      "https://i.pinimg.com/736x/ff/bb/2d/ffbb2dea4c11df2f573f5e4abd1d566c.jpg",
      "https://i.pinimg.com/736x/33/e6/be/33e6bea5887a2208f4fd3d52e2cc1331.jpg",
      "https://i.pinimg.com/originals/02/d6/3a/02d63a5b62e5a9ced750b5db119f5e5b.jpg",
      "https://i.pinimg.com/originals/b8/98/7a/b8987a0d915065584f73819e4c75c065.jpg",
      "https://i.pinimg.com/originals/dc/bd/50/dcbd50e462ce26571b74e3e2ca0163f8.jpg",
      "https://i.pinimg.com/originals/92/b6/38/92b63898c9a75f9ffc582d1caff5a165.jpg",
      "https://i.pinimg.com/originals/bd/dc/9d/bddc9d2476b2f7d1af5dd6fc279e9027.gif",
      "https://i.pinimg.com/originals/90/a7/96/90a7969a5913940c683d088e3c891c61.jpg",
      "https://i.pinimg.com/474x/52/40/80/524080efb492d979c6caa6d7523491cc.jpg",
      "https://i.pinimg.com/originals/98/52/50/985250a0954d79ef3e10a1c62c234ef6.jpg",
      "https://i.pinimg.com/280x280_RS/3a/68/b2/3a68b238c64f6596378a07a8070d81b2.jpg",
      "https://i.pinimg.com/originals/2e/3e/42/2e3e42ab915df22b7060f67731d993b9.jpg",
      "https://i.pinimg.com/originals/bf/c6/54/bfc654d8452bff5d98790d5c18c9c532.jpg",
      "https://i.pinimg.com/originals/07/70/29/0770299a4fe16f89b166e6464ffe9d39.png",
      "https://i.pinimg.com/originals/34/49/59/3449591b5267a5817ccb131bbe4e9707.gif",
      "https://i.pinimg.com/originals/78/da/0c/78da0c97f5ee663052be88c5b97a7f2c.png",
      "https://i.pinimg.com/736x/60/28/29/6028291b7f6941b0ac8086601ab95bc9.jpg",
      "https://i.pinimg.com/564x/5e/12/3d/5e123df2a94586ed0deda7808109a53b.jpg",
      "https://i.pinimg.com/originals/6d/f6/72/6df672399f79d86e702fd1d44e1b7c2f.jpg",
      "https://i.pinimg.com/736x/d1/49/22/d14922997c349159f896437680a6de1e.jpg",
      "https://i.pinimg.com/originals/d7/8f/6e/d78f6e74087e8543b8b4f1f5bdcee344.jpg",
      "https://i.pinimg.com/736x/2a/d0/e6/2ad0e6389ca871ee794c2f90e6704865.jpg",
      "https://i.pinimg.com/originals/38/78/e7/3878e748e4ad0a0cbaa78c72a77c8c52.jpg",
      "https://i.pinimg.com/736x/14/de/ef/14deef5294d32ebee65a7987b36e298b.jpg",
      "https://i.pinimg.com/736x/ee/5c/e2/ee5ce2310d205f129f1934781e57d648.jpg",
      "https://i.pinimg.com/originals/26/be/c1/26bec198f7825d16437a3268a439d9c7.jpg",
      "https://i.pinimg.com/originals/dd/80/61/dd80612176ecee9c1489703227a644c9.jpg",
      "https://i.pinimg.com/originals/01/a2/c6/01a2c649957208b038f03969eb8e5db3.jpg",
      "https://i.pinimg.com/originals/e5/90/7d/e5907db32dfab2c5f9470fde3a0352f2.png",
      "https://i.pinimg.com/originals/24/13/85/2413851e4fa3877f3872b5afab236e28.jpg",
      "https://i.pinimg.com/originals/ec/86/1d/ec861de6fb2bcc70062860004753f26a.jpg",
      "https://i.pinimg.com/564x/3a/51/db/3a51db9bf0e09a781f8ac766e1936e9b.jpg",
      "https://i.pinimg.com/736x/c8/8d/0d/c88d0de13ee6b4e696972ff70e438e0b--sword-art-online-asuna-kirito-asuna.jpg",
      "https://i.pinimg.com/originals/cb/00/b5/cb00b5b1a0591336f0b3b858c00efe3a.jpg",
      "https://i.pinimg.com/originals/86/c7/3b/86c73b01f1cdb9a4dbd46162c719c60f.jpg",
      "https://i.pinimg.com/originals/8d/35/e1/8d35e153b163ee6fd4a9e7d607bc8739.jpg",
      "https://i.pinimg.com/originals/95/37/3b/95373bb9c85d7d653ffe6d9876aca131.jpg",
      "https://i.pinimg.com/originals/e3/fc/60/e3fc609f15219d178348eed37a32d654.jpg",
      "https://i.pinimg.com/originals/74/c7/dd/74c7dd15e1a328a5d3d0adc1427fd9a5.jpg",
      "https://i.pinimg.com/originals/7a/df/c8/7adfc8bc6c3120a403e2c1b9bcab08d8.png",
      "https://i.pinimg.com/564x/a6/df/84/a6df8436c6a9cfe929e9076ed44a569f--kirito-asuna-gift.jpg",
      "https://i.pinimg.com/originals/7c/ab/65/7cab65a9fab17d9e1447096cb8cde36d.jpg",
      "https://i.pinimg.com/originals/33/52/a1/3352a13f198e18a2963f2da2f405362c.jpg",
      "https://i.pinimg.com/originals/17/75/6b/17756b8529cf04fca6b8c15b5da7242e.png",
      "https://i.pinimg.com/originals/67/4c/cc/674cccca4a8c2f40271367d31115c10a.png",
      "https://i.pinimg.com/originals/d8/d2/8f/d8d28f737dc7d700e86623edb6aa1b94.jpg",
      "https://i.pinimg.com/736x/fb/c5/25/fbc5250671c972dcd89d9c1e72781fb7.jpg",
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

router.get("/anime/random", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/random/anime");
      const animeData = response.data;

      if (animeData.data) {
        const result = animeData.data.images.jpg.large_image_url;

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
        res.json({ error: "No data found for the anime." });
      }
    } catch (error) {
      console.error("Error fetching anime data:", error);
      res.json({ error: "Failed to fetch anime data." });
    }
  } else {
    res.json(loghandler.apikey);
  }
});

router.get("/anime/manga", async (req, res, next) => {
  var apikey = req.query.apikey;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/random/manga");
      const animeData = response.data;

      if (animeData.data) {
        const result = animeData.data.images.jpg.large_image_url;

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
        res.json({ error: "No data found for the anime." });
      }
    } catch (error) {
      console.error("Error fetching anime data:", error);
      res.json({ error: "Failed to fetch anime data." });
    }
  } else {
    res.json(loghandler.apikey);
  }
});


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
router.get("/search/gempa", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/BochilTeam/database/master/meteorologi-klimatologi-geofisika/gempa/gempa_dirasakan.json`
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

router.get("/search/film", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.query;
  if (!apikey) return res.json(loghandler.noapikey);
  if (!text)
    return res.json({
      status: false,
      creator: `Lynnxha`,
      message: "Query Nya Mana?",
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
      message: "Query Nya Mana?",
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
      message: "Query Nya Mana?",
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
      message: "Query Nya Mana?",
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

// islamic api
router.get("/islam/tahlil", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    fetch(
      encodeURI(
        `https://raw.githubusercontent.com/Zeltoria/Database/main/religi/tahlil.json`
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
        `https://raw.githubusercontent.com/Zeltoria/Database/main/religi/wirid.json`
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
        `https://raw.githubusercontent.com/Zeltoria/Databasee-Untuk-Bot/main/data/dataAyatKursi.json`
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
        `https://raw.githubusercontent.com/Zeltoria/Database/main/religi/doaharian.json`
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

// Game Api
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

router.get("/game/caklontong", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    scr
      .caklontong()
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

router.get("/game/asahotak", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    scr
      .asahotak()
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

router.get("/game/family100", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    scr
      .family100()
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

router.get("/game/siapakahaku", async (req, res, next) => {
  var apikey = req.query.apikey;
  var text = req.query.page;
  if (!apikey) return res.json(loghandler.noapikey);
  if (listkey.includes(apikey)) {
    scr
      .siapakahaku()
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

// other api
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
