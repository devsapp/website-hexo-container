const express = require("express");
const path = require("path");
const app = express();
const PORT = 9000;
const HOST = "0.0.0.0";

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const server = app.listen(PORT, HOST);
server.timeout = 0;
server.keepAliveTimeout = 0;
