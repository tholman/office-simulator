/**
 * Office Simulator Slack Bot!
 * - Don't forget to clean your forks after using them!
 */

const token = 'xoxb-175413980791-O6CtW4T30tUXmzuu713UYRE0';
const channel = 'test';
const name = 'Office Simulator';

var OfficeSimulator = require('./bot/office-simulator');
var officeSimulator = new OfficeSimulator({
    token: token,
    channel: channel,
    name: name
});
