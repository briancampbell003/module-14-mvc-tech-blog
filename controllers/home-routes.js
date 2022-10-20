const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({});

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/post/:id', withAuth, async (req, res) => {
    // If the user is logged in, allow them to view the post
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          { model: User },
          { model: Comment }
        ]
      });
      const post = dbPostData.get({ plain: true });
      console.log(post);
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// TODO: Dashboard route
router.get('/dashboard', withAuth, async (req, res) => {
    try {

      res.render('dashboard', { loggedIn: req.session.loggedIn });
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// GET log-in route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
