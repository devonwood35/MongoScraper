var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	headline: {
		type: String,
		required: true,
		index: { unique: true }
	},
	summary: {
		type: String,
		required: true,
		index: { unique: true }
	},
	link: {
		type: String,
		required: true,
		index: { unique: true }
	},
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;