/** @format */

const express = require('express');
const spdy = require('spdy');
const fs = require('fs');
const cors = require('cors');
const PORT = 8000;
const CERT_DIR = `${__dirname}/cert`;

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (_, res) => {
  res.status(200).json({
    data: [
      {
        title: 'HTTP2 test server API',
        message: 'Hello JunMango',
      },
    ],
  });
});
function createServer() {
  return spdy.createServer(
    {
      key: fs.readFileSync(`${CERT_DIR}/server.key`),
      cert: fs.readFileSync(`${CERT_DIR}/server.cert`),
    },
    app
  );
}

const server = createServer();

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
