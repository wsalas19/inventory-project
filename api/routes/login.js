const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
const User = require("../models/user");

router.post("/", (req, res) => {
	let body = req.body;
	User.findOne({ email: body.email }, (error, userDB) => {
		if (error) {
			return res.status(500).json({
				ok: false,
				err: error,
			});
		}
		// validates user's existance on db
		if (!userDB) {
			return res.status(400).json({
				ok: false,
				error: {
					message: "user does not exists",
				},
			});
		}
		// validates password
		if (!bcrypt.compareSync(body.password, userDB.password)) {
			return res.status(400).json({
				ok: false,
				error: {
					message: "invalid user or password",
				},
			});
		}
		// generates auth token
		let token = jwt.sign(
			{
				usuario: userDB,
			},
			process.env.SEED_AUTENTICACION,
			{
				expiresIn: process.env.CADUCIDAD_TOKEN,
			}
		);
		res.json({
			ok: true,
			usuario: userDB,
			token,
		});
	});
});

module.exports = router;
