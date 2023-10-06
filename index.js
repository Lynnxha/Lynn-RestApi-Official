var express = require("express"),
	cors = require("cors"),
	secure = require("ssl-express-www");
const PORT = process.env.PORT || 8080 || 5000 || 3000;
var { color } = require("./lib/color.js");

var apirouter = require("./routes/api");

var app = express();
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__path + "/views/home.html");
});
app.get("/docs", (req, res) => {
	res.sendFile(__path + "/views/index.html");
});

app.use("/api", apirouter);

app.listen(PORT, () => {
	console.log(color("Server running on port " + PORT, "green"));
});

module.exports = app;
