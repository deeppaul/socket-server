var engine = require('engine.io');
var server = engine.listen(4000);

server.on('connection', function(socket){
  var cl = new Client (socket);
});


function Client (sock)
{
  send ({cmd:'hi'}); 
  function send(data)
  {
    sock.send(JSON.stringify(data));
  }
}