"use strict";
	var express  		= require('express');
	var path 	 		= require('path');
    var mongoose 		= require('mongoose');                     
    var morgan 	 		= require('morgan');             
    var bodyParser  	= require('body-parser');    
    var methodOverride  = require('method-override'); 
	var socket			= require('socket.io');
	
	var app      		= express(); 
	var server 			= require('http').createServer(app);
	var io 				= socket.listen(server);


	app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/bower_components'));
	app.use(morgan('dev'));
	
	server.listen(8080);
	console.log('listening on 8080 port');
	var clients = {};
	var j = 0;
	var i = 0;
	io.on('connection',function(socket) {
		console.log('connected');
		if (j == 0) {
			console.log(j);
		i = socket.id;
		clients[socket.id] = socket;
		}
		if(j!=0) {
			console.log(j);
			console.log(i);
			var socket1 = clients[i];
			socket1.emit('data', "test"+j);
		}
		j++;
	});
	
	