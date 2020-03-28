/**
 * Office Simulator Slack Bot!
 * - Don't forget to clean your forks after using them!
 */

const name = "Office Simulator";
const token = "SLACK_API_TOKEN";
const channel = "general";

var OfficeSimulator = require("./bot/office-simulator");
var officeSimulator = new OfficeSimulator({
  token: token,
  channel: channel,
  name: name
});
