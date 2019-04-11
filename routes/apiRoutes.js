const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");





module.exports = app => {

  // app.post("/api/add-thread", function(req, res) {
  //   console.log(req.body);
  //   db.Thread.create({
  //     title: req.body.title
  //   }).then((result) => {
  //     res.send(result);
  //   })

  //   .catch((error) => {
  //     res.send(error);
  //   })
    
  // })
  // Get all examples

  app.get("/topic/:TopicId", (req, res) => {
    console.log("route hit")
    
    db.Thread.findAll({
      where: { TopicId: req.params.TopicId}
    }).then((data) => {
      res.json(data)
    })
  }); 


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    //this was res.json("/profile"); below
    res.json("/profile");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(422).json(err.errors[0].message);
      });
  });

  // // Route for logging user out
  // app.get("/logout", (req, res) => {
  //   req.logout();
  //   res.redirect("/");
  // });
};
