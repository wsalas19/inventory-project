const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const User = require("./user");

const package = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		notes: {
			type: String,
			required: true,
			maxLength: 100,
		},
		image: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);

const Package = model("Package", package);

module.exports = Package;
