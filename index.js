/**
 * Office Simulator Slack Bot!
 * - Don't forget to clean your forks after using them!
 */

const name = process.env.BOT_NAME || "Office Simulator";
const token = process.env.SLACK_TOKEN || "THIS-NEEDS-CHANGING";
const channel = process.env.CHANNEL || "general";

var OfficeSimulator = require("./bot/office-simulator");
var officeSimulator = new OfficeSimulator({
  token: token,
  channel: channel,
  name: name
});
