const express = require('express')
const bodyParser = require('body-parser');
//const Post = require('./models/post')
const User = require("./models/user");
// const utils = require("./DataBaseUtils");
// const path = require("path");

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.get("/", (req, res) => {
// 	Post.find({}).then(posts => {
// 		res.render("index", { posts: posts });
// 	});
// }); // res.render("index", { arr: arr }));

// app.get("/create", (req, res) => res.render("create"));

// app.post("/create", (req, res) => {
// 	const { title, body } = req.body;
//     console.log(title, body);
// 	// Post.create({
// 	// 	title: title,
// 	// 	body: body
//     // }).then(post => console.log(post.id));
// });

app.post('/create', (req, res) => {
  const { userName, password } = req.body
  
  const user = new User({
    userName: userName,
    password: password
  })

  user.save((err) => {
	if (err)  return res.json({ saved: false })
	else return res.json({ saved: true })
  })
    // utils.createUser(userName, password);
    // const post = new Post({
    // 	title: title,
    // 	body: body
    // });
    // post.save().then(post => console.log(post,"User create"));
 // return res.json({ ok: true })
})

module.exports = app
