const User = require("./models/user");
//const Note = require("./models/note");

exports.createUser = function(userName, password) {
	const user = new User({
		userName: userName,
		password: password
	});
	return user.save();
};

// exports.createNote = function(user, title, text, color) {
// 	const note = new Note({
// 		creator: user._id,
// 		title: title,
// 		text: text,
// 		bg: color
// 	});

// 	return note.save();
// };

// exports.listNotes = function(userId) {
// 	return Note.find({ creator: userId });
// };

// exports.deleteNote = function(id) {
// 	return Note.findById(id).remove();
// };
