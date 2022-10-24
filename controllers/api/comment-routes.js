const router = require('express').Router();
const { Comment, User } = require('../../models');

// CREATE new comment
router.post('/', async (req, res) => {
    console.log("Post comment req received!!!");
    try {
      const dbCommentData = await Comment.create({
        content: req.body.content,
        date: req.body.date,
        user_id: req.body.user_id,
        post_id: req.body.post_id,
      });
  
      req.session.save(() => {
        res.status(200).json(dbCommentData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;