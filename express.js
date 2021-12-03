let express = require('express');
let app = express();
app.use('/archivos', express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/somefolder/*', function (req, res) {
    res.send('Some foler!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});