const express = require('express');
const bodyParser = require('body-parser');

const _=require("lodash")  // to acces lodash i.e Abc-efg-hijk

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";


const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


let arr=[];

app.get("/",function(req,res){
   
    res.render("home",{hometext:homeStartingContent,arrlist:arr})
})

app.get("/about",function(req,res){
    res.render("about",{abouttext:aboutContent})
})

app.get("/contact",function(req,res){
    res.render("contact",{contacttext:contactContent})
})

app.get("/compose",function(req,res){
    res.render("compose");
})

app.post("/",function(req,res){
   
    const a={
         k:req.body.Compose,
         v:req.body.post
    }
    // console.log(a.k);
     arr.push(a);
     res.redirect("/")
})



app.get("/posts/:topic",function(req,res){
    let da=_.lowerCase(req.params.topic);          // params to access the link name 
                                                 //to make req.params.topic to lower case which will be in upper of - - - 
    arr.forEach(function(element){
        if (da==_.lowerCase(element.k) ){
           // console.log("match found ")

           res.render("post",{heading:element.k,para:element.v})
        }
    })



})


// app.get("/posts/:topic",function(req,res){
//     console.log(req.params.topic)                // params to access the link name 
// })






app.listen(3000,function(){
    console.log("server is running on port 3000")
})


// bolier code

// const express =require("express");

// const bodyParser=require("body-parser");

// const app=express();

// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",function(req,res){
//     res.send("hello");
// })

// app.listen(3000,function(){
//     console.log("server is running on port 3000")
// })