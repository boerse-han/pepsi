var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
    var fileName = './' + req.url;
    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.write('404');
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(8888);
console.log('ok');