//import modules for the bot
require('dotenv').config
const Twit = require('twit');
const BlaguesAPI = require('blagues-api');
const axios = require('axios');

//Login to the bot

var client = new Twit(require('./login.js'))

//Create the message and send it
async function getBlagues() {
  const blagues = new BlaguesAPI('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODc5MTQyMDMwMjIyMTkyNzEwIiwibGltaXQiOjEwMCwia2V5IjoiSm9zODJrRUlIakxHaXNJU3ZCaTFWczdqTzVpMFRCaFZkdWx4cWFOUUhGemEyblBrcDYiLCJjcmVhdGVkX2F0IjoiMjAyMS0xMC0yN1QyMDo0NTo1OSswMDowMCIsImlhdCI6MTYzNTM2NzU1OX0.ZlQW9X7oWLUkVXTFsQqKz3wo0fihQtQyNYEj34XYsG4')
  const json = await blagues.random()
  const blague = `Type:\n${json.type}\n\nBlague:\n${json.joke}\n\nRéponse:\n${json.answer}`;
  client.post('statuses/update', {status: blague}, function (err, data, response) {
    console.log(data)
  })
}
getBlagues();
