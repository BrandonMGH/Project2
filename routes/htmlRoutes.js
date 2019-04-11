const db = require("../models");
const isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = app => {

  app.get("/", (req, res) => res.render("signup"));


  app.get("/login", (req, res) => res.render("login"));


  app.get("/threads", (req, res) => {  //** Delete this route?? */
    db.User.findOne({
      where: {
        id: req.user.id
      },
    }).then(dbUser => {
      res.render("threads", { user: dbUser });
    });
  });

  // Load profile page
  app.get("/profile", isAuthenticated, (req, res) => {
    db.User.findOne({
      where: {
        id: req.user.id
      },

    }).then(dbUser => {
      res.render("profile", { user: dbUser });
    });
  });

  // // Load threads page
  // app.get("/threads", isAuthenticated, (req, res) => {
  //   db.User.findOne({
  //     where: {
  //       id: req.user.id
  //     },
  //     include: [db.Example]
  //   }).then(dbUser => {
  //     res.render("threads", { user: dbUser });
  //   });
  // });

  app.get("/threads", (req, res) => {  // ** Delete this route?? ** 
    res.render("threads")
  })

  app.get("/posts", (req, res) => {
    res.render("posts")
  })

  app.get("/threads/:title/:id", (req, res) => {
    console.log(req.params)
    db.Thread.findAll({ where: { TopicId: req.params.id } }).then(dbPost => {
      console.log(dbPost);
      res.render("threads", {
        Thread: dbPost,
        title: req.params.title,
        TopicId: req.params.id
      });
    });
  });

  app.get("/posts/:threadId", (req, res) => {
    console.log(req.param)

    // db.sequelize.query("SELECT * FROM Posts WHERE id=2").then(users => {console.log(users)})
    db.Post.findAll({
      where:
      {
        ThreadId: req.params.threadId,
      
      },
      // include: [db.Thread]
    }).then(dbPost => {
      res.render("posts",{
        Post: dbPost
      });
    });
  });
  

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => res.render("404"));
};
