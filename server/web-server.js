/**
 * Created by Administrator on 3/10/2017.
 */

var express = require('express'),
    path = require('path'),
    app = express(),
    rootPath = path.normalize(__dirname+'/../'),
    bodyParser = require('body-parser');

var port = process.env.PORT || 9000;

app.use(express.static(rootPath+'/app'));
app.get('*',function(req, res){res.sendFile(rootPath+'/app/index.html')});

app.listen(port);

console.log("Server running on port "+port);