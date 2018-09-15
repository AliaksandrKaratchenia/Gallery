const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/post");
//const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
// 	Post.find({}).then(posts => {
// 		res.render("index", { posts: posts });
// 	});
// }); // res.render("index", { arr: arr }));

//app.get("/create", (req, res) => res.render("create"));

// app.post("/create", (req, res) => {
// 	const { title, body } = req.body;
//     console.log(title, body);
// 	// Post.create({
// 	// 	title: title,
// 	// 	body: body
//     // }).then(post => console.log(post.id));
// });

app.post("/create", (req, res) => {
    const { title, body } = req.body;
	const post = new Post({
		title: title,
		body: body
	});
	post.save().then(post => console.log(post,"User create"));
	return res.json({ answer: "HI" });
});


module.exports = app;