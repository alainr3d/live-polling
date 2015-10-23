import express from 'express';

var app = express();
//app.use(express.logger());

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

//app.listen(process.env.PORT, process.env.IP);
//console.log("Polling server is running");

//app.listen(process.env.PORT, function(){
//  console.log('listening on', app.address().port);
//});

