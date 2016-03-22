/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		var params = req.params.all();

		User.create(params).exec(function(err, user) {
			if(err) {return res.badRequest(err)};
			return res.json(user);
		});
	},

	get: function(req, res) {

		if (!(req.param('firstName') && req.param('gameName'))) {
			var body = {};
			body.err = 0;
			body.message = "firstName and gameName params required";
			return res.badRequest(body);
		}

		var params = req.params.all();

		console.log(params);

		User.findOne(params).exec(function(err, user) {
			if (err) return res.badRequest(err);

			var body = {};

			if (!user) {
				body.err = 0;
				body.message = "Could not find such user.";
				return res.badRequest(body);
			}
			return res.json(user);
		});
	},

	getAll: function(req,res) {
		User.find().exec(function(err,users) {
			if (err) return res.badRequest(err);
			return res.json(users);
		})
	}

};

