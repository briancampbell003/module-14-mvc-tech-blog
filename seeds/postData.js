const { Post } = require('../models');

const postdata = [
  {
    title: 'The Bootstrap Disaster And Its Consequences For Humanity',
    content: 'type a post in here',
    date: 'May 15, 2021',
    user_id: 1,
  },
  {
    title: 'Three Reasons You Should Ditch VSCode Right Now',
    content: 'hot take in here',
    date: 'August 20, 2021',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
