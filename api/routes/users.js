var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const user = require("../models/user");

// GET users listing
router.get("/", async function (req, res, next) {
	const { id } = req.query;
	if (id) {
		try {
			if (id) {
				let response = await user.findById(id);
				res.status(200).send(response);
			}
		} catch (error) {
			res.status(400).send({ error: error.toString() });
		}
	}

	try {
		let response = await user.find();
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.toString() });
	}
});

//POST user
router.post("/", async (req, res) => {
	let body = req.body;
	let { username, email, password, role } = body;
	let user_info = new user({
		username,
		email,
		password: bcrypt.hashSync(password, 10),
		role,
	});
	try {
		const add_user = user(user_info);
		let response = await add_user.save();
		res.status(201).send(response);
	} catch (error) {
		res.status(409).send({ error: error.message });
	}
});

module.exports = router;
