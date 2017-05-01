/**
 * Actions
 * - Json object of what the bot can say, and proceeding actions
 */

// Not all actions have an equal or opposite reaction
var actions = [
  
  {
    message: "Remember, we have clients in the office today, so everyone be quiet near the meeting rooms."
  },

  {
    message: "Whoever made the mess in the bathroom, learn to clean up after yourself!"
  },

  {
    message: "Hey all, don't forget to wash your forks after you eat!"
  },

  {
    message: "Just a little reminder, all food left in the fridge without a name on it will be thrown away at the end of the day."
  },

  {
    message: "Everyone will recieve a lunch survey in their inbox today, please fill it out by Friday! Feel free to suggest options as well."
  },

  {
    message: "Remember! I don't want to name names but if you're borrowing the office stapler, please RETURN it to its correct position."
  },

  {
    message: "Facebook is NOT allowed in the office, we don't want to have to block it, but we will if it continues being a problem."
  },

  {
    message: "I'll be going to the stationary store later, if anyone needs anything?"
  },

  {
    message: "Everyone, remember to fill out your timesheets before the end of the month."
  },

  {
    message: "Whoever left the open yogurt in the fridge, please remove it."
  },

  {
    message: "Someone's been overwatering the plants again, please leave it to facilities to water them."
  },

  {
    message: "Please make sure you keep your workspace clean and professional, remember we have clients visiting soon!"
  },

  {
    message: "You do NOT need to turn the toaster off at the wall, this is the third time this week!"
  },

  {
    message: "The printer on the first floor is out of ink, we've ordered some more, but don't expect it in until next Wednesday."
  },

  {
    message: "Reminder: We have no problem with listening to music while you work, BUT, you must use headphones... otherwise the noise is distracting to others trying to work."
  },

  {
    message: "This is the third time this year we've had to buy new spoons for the office... please don't take these home, they're for everyone."
  },

  {
    message: "Remember, (@)channeling everyone is against our corporate policy, no matter how dire."
  },

  {
    message: "Don't forget, its casual day tomorrow... this doesn't mean jeans and a t shirt, please still dress smart."
  },

  {
    message: "Don't forget to log your sick days into the system, tracking these IS important."
  },

  {
    message: "Yes, we are aware of the current paper shortage, and have ordered more. Please do your photocopies on the first floor, until new supplies arrive."
  },
]

var reactions = {};



module.exports = {actions: actions, reactions: reactions};