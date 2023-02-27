const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Package = require("./package");

const user = new Schema({
	username: {
		type: String,
		required: true,
		lowercase: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["admin", "op"],
		default: "op",
		required: true,
	},
	package: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "Package",
		required: false,
	},
});

// pre save hook, encrypt password
/* user.pre("save", function (next) {
	const user = this,
		SALT_FACTOR = 10;

	if (!user.isNew) {
		next();
	}

	// generate a salt then run call back
	bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
		if (err) {
			return next(err);
		}

		// hash (encrypt) password using the salt
		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if (err) {
				return next(er);
			}

			// store encrypted password
			user.password = hash;

			// save model
			next();
		});
	});
}); */

const User = model("User", user);

module.exports = User;
