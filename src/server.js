const express = require("express");

const server = express();

module.exports = server;

server.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

server.get("/colour", (req, res) => {
  const hex = req.query.hex || "ffffff";
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
       <style>
       body {
           background-color: #${hex};
        }
        </style>
    </head>
    <body>
        
    </body>
    </html>`);
});
