var express = require('express'),
    swig = require('swig');
var server  = express();

server.engine('html', swig.renderFile);
server.set('view engine', 'html');
server.set('views','./');
server.use(express.static('./'));

server.get('./',function(req, res){
    
    res.render('index');
});

server.listen(3000);