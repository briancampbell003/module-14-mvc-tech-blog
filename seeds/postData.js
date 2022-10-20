const { Post } = require('../models');

const postdata = [
  {
    title: 'The Bootstrap Disaster And Its Consequences For Humanity',
    content: 'The "Bootstrap" CSS framework has been an unmitigated for the human spirit, and its mass implementation indicates cultural decline. I refuse to explain.',
    date: 'May 15, 2021',
    user_id: 1,
  },
  {
    title: 'Three Reasons You Should Ditch VSCode Right Now',
    content: '1. Real programmers know how to write code without visual aids like color-coding, and 2. Notepad already exists, so delete VSCode, write programs in Notepad, and 3. Save space on your machine for cool mp3 files',
    date: 'August 20, 2021',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
