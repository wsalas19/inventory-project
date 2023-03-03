const express = require("express");
const router = express.Router();
const Package = require("../models/package");
const User = require("../models/user");

router.get("/", async (req, res) => {
	const { id } = req.query;
	if (id) {
		try {
			let response = await Package.findById(id);
			return res.status(200).send(response);
		} catch (error) {
			return res.status(400).send({ error: error.toString() });
		}
	}

	try {
		let response = await Package.find();
		return res.status(200).send(response);
	} catch (error) {
		return res.status(400).send({ error: error.toString() });
	}
});

router.post("/", async (req, res) => {
	const { name, notes, image, user, address, coordinates } = req.body;
	console.log(user);
	try {
		let target = await User.findOne({ username: user }).exec();
		const new_package = {
			name,
			address,
			coordinates,
			notes,
			image,
			user: target._id,
		};

		//creates the new package
		const created_package = Package(new_package);
		let response = await created_package.save();
		//asigns the new package to the target user
		target.package = created_package._id;
		await target.save();
		res.status(201).send({ response });
	} catch (error) {
		res.status(409).send({ error: error.message });
	}
});

router.delete("/", async (req, res) => {
	const { id, all } = req.query;
	if (all) {
		let response = await Package.deleteMany({
			coordinates: [],
		});
		return res.status(200).send(response);
	}
	try {
		let response = await Package.findByIdAndDelete(id);
		res.status(200).send(response);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

module.exports = router;
