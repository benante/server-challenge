const express = require("express");

const server = express();

module.exports = server;

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="/cheese" method="post">
      <label for="cheese">cheese</label>
      <input type="text" />
      <label for="rating">rating</label>
      <input type="number" max="5" min="0" />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
`;
server.get("/cheese", (req, res) => {
  res.send(html);
});
