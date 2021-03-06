const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
	{
		userName: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},

	{
		timestamps: true
	}
);

schema.set("toJSON", {
	virtuals: true
});

module.exports = mongoose.model("User", schema);