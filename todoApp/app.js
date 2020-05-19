//jshint esverion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

const items =['Buy food', 'Cook food','Eat food'];
const workItems =[""];



//set up view engine for ejs
app.set('view engine', 'ejs');


//set up your body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){

    const today = new Date();
    
     const options = {
         weekday: "long",
         day: "numeric",
         month: "long",
         year: "numeric"
        
     };

     const day = today.toLocaleDateString("en-US", options);
     

    
     res.render("list", { listTitle: day, newListItems: items});
   
    });
    

    app.post("/", function(req,res){
        const item = req.body.newItem;
        if (req.body.list === "work"){
            workItems.push([item]);
            res.redirect("/work");
        }else{
            items.push([item]);
            res.redirect("/");

        }
      
        
    
});


app.get("/work", function(req,res){
    res.render("list", {listTitle: "work list", newListItems: workItems });
});
app.get("/about", function(req,res){
    res.render("about");
});

//  app.post("/work", function(req,res){
//    const item = req.body.newItem;
//     workItems.push([item]);
//    res.redirect("/work");
//  });
    


  app.listen( 3000, function(){
    console.log("server is up and running on port 300");
   });