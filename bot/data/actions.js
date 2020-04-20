/**
 * Actions
 * - Json object of what the bot can say, and proceeding actions
 */

var variants = {
  days: ["today", "tomorrow", "on Monday", "on Tuesday", "on Wednesday", "on Thursday", "on Friday"],
  eatingItems: ["forks", "spoons", "mugs", "cups"],
  rooms: ["kitchen", "bathroom", "phone booth"],
  stationary: ["stapler", "hole punch", "glue pot"],
  websites: ["Facebook", "YouTube", "Reddit"],
  foodItems: ["yogurt", "raisins", "tomatoes", "eggs"],
  passiveAggressiveOpeners: [""],
  passiveAggresiveClosers: ["", "", "", "", "I'll be keeping my eye out.", "We're all on the same team here.", "I'm not your mother.", "Creatives! This is about you!"], // Seeded with more "ignores";
  printerCodes: ["030f", "030g", "b-01", "b-03", "6830_1", "6830_2", "6830_3"]
}

// Not all actions have an equal or opposite reaction
var actions = [
  
  {
    message: "Remember, we have clients in the office %days% so everyone be quiet near the meeting rooms."
  },

  {
    message: "Whoever made the mess in the %rooms%, learn to clean up after yourself!"
  },

  {
    message: "Hey all, don't forget to wash your %eatingItems% after you eat!"
  },

  {
    message: "Just a little reminder, all food left in the fridge without a name on it will be thrown away at the end of the day."
  },

  {
    message: "Everyone will recieve a lunch survey in their inbox today, please fill it out %days%! Feel free to suggest options as well.",
    reaction: "lunch-survey"
  },

  {
    message: "Remember! I don't want to name names but if you're borrowing the office %stationary%, please RETURN it to its correct position."
  },

  {
    message: "%websites% is NOT allowed in the office, we don't want to have to block it, but we will if it continues being a problem."
  },

  {
    message: "I'll be going to the stationary store later, if anyone needs anything?"
  },

  {
    message: "Everyone, remember to fill out your timesheets before the end of the month.",
    reaction: "timesheets"
  },

  {
    message: "Whoever left the open yogurt in the fridge, please remove it.",
    reaction: "yogurt"
  },

  {
    message: "Someone's been overwatering the plants again, please leave it to facilities to water them."
  },

  {
    message: "Please make sure you keep your workspace clean and professional, remember we have clients visiting soon!"
  },

  {
    message: "You do NOT need to turn the toaster off at the wall, this is the third time this week! %passiveAggresiveClosers%"
  },

  {
    message: "The %printerCodes% printer on the first floor is out of ink, we've ordered some more, but don't expect it in until next Wednesday."
  },

  {
    message: "Reminder: We have no problem with listening to music while you work, BUT, you must use headphones... otherwise the noise is distracting to others trying to work."
  },

  {
    message: "This is the third time this year we've had to buy new %eatingItems% for the office... please don't take these home, they're for everyone."
  },

  {
    message: "Remember, (@)channeling everyone is against our corporate policy, no matter how dire."
  },

  {
    message: "Don't forget, it's casual day tomorrow... this doesn't mean jeans and a t shirt, please still dress smart."
  },

  {
    message: "Don't forget to log your sick days into the system, tracking these IS important."
  },

  {
    message: "Yes, we are aware of the current paper shortage, and have ordered more. Please do your photocopies on the first floor, until new supplies arrive.",
    reaction: "paper-shortage"
  },

  {
    message: "Seems like it's time everyone read over our office email policy again, especially regarding personal emails."
  },

  {
    message: "Don't forget the ergonomics lunch and learn later today!"
  },

  {
    message: "Everyone, please remember to pick up your packages from the package room, it's beginning to look like a pig sty in there."
  },
  {
    message: "Don't forget to check all recipients on an email BEFORE hitting send on a reply/reply all! If you need cold medicine or scissors, check the supply room first." 
  },
  {
    message: "Please DO NOT use the staple feature on the %printerCodes% printer. This breaks it. A manual stapler has been provided.",
    reaction: "printer-stapler"
  }
]

var reactions = {
  "lunch-survey": {
    message: "Well, it looks like only a few of you filled out that lunch survey, so, for better or for worse, it will be the same lunch this week as last."
  },
  "yogurt": {
    message: "Well, looks like no one removed the yogurt, and now we are growing all sorts of moulds in the fridge. Great."
  },
  "paper-shortage": {
    message: "Ok, we have new paper again. This should get us through the month."
  },
  "timesheets": {
    message: "Seriously, no one has put in a single timesheet. Come on people!"
  },
  "printer-stapler": {
    message: "Was a warning not posted? The printer is no longer working due to someone trying to use the staple feature. Expect it to be fixed %days%"
  },
};

module.exports = {variants: variants, actions: actions, reactions: reactions};
