const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    id: 1,
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    id: 2,
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    id: 3,
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    id: 4,
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    id: 5,
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
