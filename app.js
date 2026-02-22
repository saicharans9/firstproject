function add(a, b) {
  return a + b;
}

module.exports = add;

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("🚀 DevOps Docker Deployment Successful");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});