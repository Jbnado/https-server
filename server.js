const https = require("https");
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

// Provide your key and certificate
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Create an HTTPS service with your app
https.createServer(options, app).listen(3000, () => {
  console.log("Server running at https://localhost:3000/");
});
