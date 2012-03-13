exports.expressServer = function(hook_name, args, cb) {
	args.app.get('/ddi', function(req, res) { 
		res.send("<em>Didaktik der Informatik</em>");
	});
};