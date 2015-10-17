var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res,next){
	res.sendfile('index.html');
});

io.sockets.on('connection',function(socket){
	socket.on('chat message', function(msg){
		/**
		Validation done on the client side
		Word + time stamp obtained must be pushed to the client 
		}
		**/
		console.log('message:' + msg);
		io.emit('chat message',msg);
	});
});

http.listen(3000, function(){
	console.log('Listening on localhost:3000');
});