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
		address: { type: String, required: true, maxLength: 100 },
		coordinates: {
			type: [Number],
			required: true,
			validate: {
				validator: function (v) {
					return v.length === 2;
				},
				message: "Coordinates must be an array of 2 numbers",
			},
		},
	},
	{ timestamps: true }
);

const Package = model("Package", package);

module.exports = Package;
