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

  app.get("/threads", (req, res) => {  // ** Delete this route?? ** 
    res.render("threads")
  })

  app.get("/posts", (req, res) => {
    res.render("posts")
  })

  app.get("/threads/:title/:id", (req, res) => {
    console.log(req.params)
    db.Thread.findAll({
      where: {
        TopicId: req.params.id
      }
    }).then(dbPost => {
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
    db.Thread.findOne({
      where: {
        id: req.params.threadId
      }
    }).then(dbthread => {
      db.Post.findAll({
        where: {
          threadId: req.params.threadId
        }
      }).then(dbPost => {
        res.render("posts", {
          Post: dbPost,
          Thread: dbthread,
          threadId: req.params.threadId
        });
      })
    });
  })

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => res.render("404"));

}

