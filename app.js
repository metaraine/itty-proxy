var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res){
	request({
			url: req.query.url,
			headers: {
				'User-Agent': 'request'
			}
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body)
			}
			else {
				res.status(500).send(error && error.message || response && response.statusCode)
			}
	});
});

app.listen(process.env.PORT || 8000);
