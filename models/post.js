var mongoose = require('mongoose');

// User Schema
var PostSchema = mongoose.Schema({
	title: {
		type: String,
	},
	ownerId: {
		type: String
	},
	body: {
		type: String
	}
});

var Post = module.exports = mongoose.model('Post', PostSchema);
