var http = require("http");
// var environmentVars = JSON.stringify(process.env, null, 4);
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Version Three");
  console.log("Got a connection");
});
server.listen(80, "::0");
// server.listen(80, "0.0.0.0");
console.log("Server running on localhost at port 80");
console.log("this server is available via ipv4 and ipv6");
console.log("made a change");

function handleExit(signal) {
  console.log(`Received ${signal}. Close my server properly.`)
  server.close(function () {
    process.exit(0);
  });
}
process.on('SIGINT', handleExit);
process.on('SIGQUIT', handleExit);
process.on('SIGTERM', handleExit);
