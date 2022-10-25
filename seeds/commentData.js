const { Comment } = require('../models');

const commentdata = [
  {
    content: 'Unfortunately, you make some very good points...',
    date: 'June 16, 2021',
    user_id: 2,
    post_id: 1,
  },
  {
    content: 'Outrageously well-written, but you are obviously wrong about everything.',
    date: 'October 3, 2021',
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
