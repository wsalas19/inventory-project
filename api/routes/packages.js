const express = require("express");
const router = express.Router();
const Package = require("../models/package");
const User = require("../models/user");

router.get("/", async (req, res) => {
	const { id } = req.query;
	if (id) {
		try {
			if (id) {
				let response = await Package.findById(id);
				res.status(200).send(response);
			}
		} catch (error) {
			res.status(400).send({ error: error.toString() });
		}
	}

	try {
		let response = await Package.find();
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.toString() });
	}
});

router.post("/", async (req, res) => {
	const { name, notes, image, user } = req.body;
	console.log(user);
	let target = await User.findOne({ username: user }).exec();
	try {
		const new_package = {
			name,
			notes,
			image,
			user: target._id,
		};

		//const target_user = User.findOne({ username: user });
		const created_package = Package(new_package);
		//target_user.package = created_package;
		let response = await created_package.save();
		await User.updateOne({ username: name }, { package: created_package._id });
		res.status(201).send({ response });
	} catch (error) {
		res.status(409).send({ error: error.message });
	}
});

router.delete("/:id", async (req, res) => {
	const { id } = req.params;

	try {
		let response = await Package.findByIdAndDelete(id);
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

module.exports = router;
