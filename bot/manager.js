/**
 * Bot Manager
 */

var SlackBot = require('slackbots');

var Ticker = require('./helpers/ticker');
var bindMethods = require('./helpers/bindMethods');

class manager {

  // New Manager
  constructor(params) {

    this.token = params.token;
    this.bot = new SlackBot({
      token: this.token,
      name: 'Office Simulator'
    });

    bindMethods(this, ['init', 'testTicker']);

    this.bot.on('start', this.init);
  }

  // Initial Announcement
  // Set up memory and timings
  init() {
    
    // this.announce('hi, this is a test');
    this.ticker = new Ticker({
      interval: 10000, // ms
      callback: this.testTicker
    });

  }

  testTicker(date) {
    this.announce("The minutes are: " + date.getMinutes());
  }

  // Speak!
  announce(announcement) {
    this.bot.postMessageToChannel('test', announcement, {});
  }

}

module.exports = manager;