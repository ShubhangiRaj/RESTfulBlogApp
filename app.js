var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');

// set up mongoose
mongoose.connect("mongodb://localhost/BlogApp");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// create mongoose schema
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

// compile into model
var Blog = mongoose.model("Blog", blogSchema);

// create a blog
// Blog.create({
//     title: "Test Blog",
//     image: "https://i.pinimg.com/736x/02/d7/01/02d701b77a984a1b6cf970e6eb0468e1--teacup-maltipoo-maltipoo-puppies.jpg",
//     body: "My first blog is on my dog"
// });

// --------------------------- RESTful routes ---------------------------

app.get("/", function (req,res) {
    res.redirect("/blogs");
});

// 1. INDEX route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
       if(err){
           console.log("OOPS!! Something went wrong.");
       } else {
           res.render("index", {blogs: blogs});
       }
    });
});

// 2. NEW route
app.get("/blogs/new", function(req,res){
    res.render("new");
})

// 3. CREATE route
app.post("/blogs", function (req,res) {
    // create blog
    Blog.create(req.body.blog, function (err, newBlog) {
        if(err){
            console.log("OOPS!! Something went wrong.");
        } else {
            // then, redirect
            res.redirect("/blogs");
        }
    })
})

// 4. SHOW route
app.get("/blogs/:id", function (req,res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if(err){
            console.log("OOPS!! Something went wrong.");
        } else {
            res.render("show", {blog: foundBlog});
        }
    })
})

// 5. EDIT route
app.get("/blogs/:id/edit", function (req,res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if(err){
            console.log("OOPS!! Something went wrong.");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    })
})

// 6. UPDATE route
app.put("/blogs/:id", function (req,res) {
    // Blog.findByIdAndUpdate(id, newData, callback)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            console.log("OOPS!! Something went wrong.");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    })
})

// 7. DESTROY route
app.delete("/blogs/:id", function (req,res) {
    // destroy blog
    Blog.findByIdAndRemove(req.params.id, function (err) {
        if(err){
            console.log("OOPS!! Something went wrong.");
        } else {
            // redirect somewhere
            res.redirect("/blogs");
        }
    })
})

app.listen(3000, function () {
    console.log("Listening to port 3000");
})