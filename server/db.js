'use strict'
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = function() {
  let data = {
    user: [],
    book: []
  }

  let sex = ['male','female'];

  for(let i=0;i<100;i++) {
    data.user.push({
      id: Random.increment(),
      name: Random.cname(),
      certNo: Random.id(),
      age: Random.natural(0,150),
      gender: sex[Random.natural(0,1)]
    });

    data.book.push({
      id: Random.integer(1000,5000),
      name: Random.cword(5,15),
      price: Random.integer(10,1000),
      owner_id: Random.integer(0,150)
    })
  }

  return data;
}