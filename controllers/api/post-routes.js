const router = require('express').Router();
const { Post, User } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
    console.log("New post req received!!!");
    try {
      const dbPostData = await Post.create({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        user_id: req.session.loggedUser,
      });
  
      req.session.save(() => {
        res.status(200).json(dbPostData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;