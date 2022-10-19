const { User } = require('../models');

const userdata = [
  {
    username: 'Tha_CSS_Kingpin',
    email: 'cssDon@mysite.com',
    password: 'topsecret',
  },
  {
    username: 'SQL_stan_23',
    email: 'REALsqlHead@mysite.com',
    password: 'topsecret',
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
