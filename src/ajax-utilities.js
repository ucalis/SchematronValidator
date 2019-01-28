var schematronValidator = require('./schematronValidator');
var request = require('request');
var querystring = require('querystring');

/*
	functions in this file all have to take the same arguments:
	 - req: the ajax request object, contains parameters sent threw ajax call in req.query 
	 - res: the response object that MUST be called through res.send to send the result back
	The only cases where res.send doesn't need to be used is in case of errors.
	Then it is possible to throw the error and let it be handled by the server.js call.
*/


/**
 * 100MB limit to map size, to avoid potential flood.
 */
exports.isValid = function (req, res) {
	var file;
	// passing the entire map for validation is too big to use GET request. POST should be prefered.
	if(req.method == 'POST') {
		var body = '';
		req.on('data', function (data) {
			body += data;
		});

		req.on('end', function () {
			var post = querystring.parse(body);
			file = post.file;
			res.send(schematronValidator.isValid(file));
		});
	}
	else if(req.method == 'GET') {
		file = req.query.file;
		res.send(schematronValidator.isValid(file));
	}

	
};


