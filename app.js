const http = require('http')

http.createServer(function (req, res) {
  res.write("On the way to being a full stack doll!")
  res.end();
}).listen(3000)

console.log("server starte on port: ", 3000)
