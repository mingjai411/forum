// FileName: index.js
let express = require("express");
const dotenv = require("dotenv");
dotenv.config();
let app = express();
var port = process.env.PORT || 8080;

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let apiRoutes = require("./routes/rootRoutes");
app.use("/api", apiRoutes);

let mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_ENDPOINT, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database"));

app.listen(port);
