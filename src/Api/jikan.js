const { json } = require('express');
const jikanjs  = require('jikanjs');

const jikan = async () => {
  const { top } = await jikanjs.loadTop('anime')
  return top
}

module.exports = jikan