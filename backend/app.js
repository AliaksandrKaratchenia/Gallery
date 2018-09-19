const express = require('express')
const bodyParser = require('body-parser');
//const Post = require('./models/post')
const User = require("./models/user");
// const utils = require("./DataBaseUtils");
// const path = require("path");
const fetch = require('node-fetch');
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
//https://api.unsplash.com/photos/random?client_id=eaf9609e0b11e4fda9dc433b61f2ad8913ba9a6694dcba85878266b59b243d49
 const key ="eaf9609e0b11e4fda9dc433b61f2ad8913ba9a6694dcba85878266b59b243d49";
//https://api.unsplash.com/search/photos/?page=1&per_page=10&query=wheather&client_id=eaf9609e0b11e4fda9dc433b61f2ad8913ba9a6694dcba85878266b59b243d49
  

app.get("/getPhotos", async (req,res)=>{
  //let responseArr= await fetch(`https://api.unsplash.com/search/photos/?&page=1&per_page=4&query=ocean&client_id=${key}`);
  let responseArr= await fetch(`https://api.unsplash.com/search/photos/?&page=1&per_page=4&query=ocean&client_id=eaf9609e0b11e4fda9dc433b61f2ad8913ba9a6694dcba85878266b59b243d49`);
  let data = await responseArr.json();
  let validData =  data.results.map(el=>el.urls.small); 
  return res.json({ data:validData})
  //let r= await fetch("https://picsum.photos/200");
  //let rs =  await r.json();
  //const preImg = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
  //let preArr=Array(12).fill(preImg);
  //return res.json({ data:[r]})
})


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
