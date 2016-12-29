var express = require("express"),
    app     = express(),
    bodyParser = require("body-parser");


 //get configuration settings for database connection
var secret = require('./config/secret');  
 //   expressSanitizer = require("express-sanitizer"),
 //   methodOverride = require('method-override');
var sql = require("seriate");

var util = require('util');


app.use(bodyParser.urlencoded({extended: true}));
//app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//app.use(methodOverride('_method'));


var agents = {};

sql.setDefaultConfig(secret.config);

sql.execute({
  query: sql.fromFile("./sql/get_agents")

  }).then( function(results){

    // console.log(results[0]);

    agents = results
    // jsonfile.writeFile("./data/islandStats.json", results, function (err) { 
    // console.error(err)
    //  })

    }, function (err){
    console.log ("Something bad happened:", err);
  });
 


app.get("/", function(req, res){
    //res.redirect("/farm");
  console.log(agents[0])
  res.render("agents", {agents: agents})

});

  app.get("/farm/new", function(req, res){
    //res.redirect("/farm");
      res.render("form")

});
  
  app.get("/farm/:id", function(req, res){
    //res.redirect("/farm");
    //res.json("Home Page " + req.params.id)

      sql.execute({
        query: sql.fromFile("./sql/get_agents_farms"),
        params:{
          pruagentid : {
            type: sql.int,
            val: req.params.id
          }
        }
      }).then( function(results){
          console.log(results[0]);
          res.render("farms", {farms: results})

          }, function (err){
          console.log ("Something bad happened:", err);
        });




});


  app.get("/farm/:id/:farmid", function(req, res){
    //res.redirect("/farm");
    res.json("Home Page " + req.params.id + " " + req.params.farmid)

});




// app.get("/blogs/new", function(req, res){
//    res.render("new"); 
// });

// app.post("/blogs", function(req, res){
//     req.body.blog.body = req.sanitize(req.body.blog.body);
//    var formData = req.body.blog;
//    Blog.create(formData, function(err, newBlog){
//        console.log(newBlog);
//       if(err){
//           res.render("new");
//       } else {
//           res.redirect("/blogs");
//       }
//    });
// });



// app.get("/blogs/:id/edit", function(req, res){
//    Blog.findById(req.params.id, function(err, blog){
//        if(err){
//            console.log(err);
//            res.redirect("/")
//        } else {
//            res.render("edit", {blog: blog});
//        }
//    });
// });

// app.put("/blogs/:id", function(req, res){
//    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
//        if(err){
//            console.log(err);
//        } else {
//          var showUrl = "/blogs/" + blog._id;
//          res.redirect(showUrl);
//        }
//    });
// });

// app.delete("/blogs/:id", function(req, res){
//    Blog.findById(req.params.id, function(err, blog){
//        if(err){
//            console.log(err);
//        } else {
//            blog.remove();
//            res.redirect("/blogs");
//        }
//    }); 
// });


app.listen(process.env.PORT || 9000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Running on port 9000" );

  };

});
