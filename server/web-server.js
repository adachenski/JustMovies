/**
 * Created by Administrator on 3/10/2017.
 */

var express = require('express'),
    path = require('path'),
    app = express(),
    rootPath = path.normalize(__dirname+'/../'),
    bodyParser = require('body-parser');

app.use(express.static(rootPath+'/app'));
app.get('*',function(req, res){res.sendFile(rootPath+'/app/index.html')});

app.listen(9000);

console.log('App running on port 9000');