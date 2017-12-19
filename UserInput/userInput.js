"use strict";

/* Alexa Skill that will ask you five things and will
  save it for the future */

var Alexa = require("alexa-sdk");

var handlers = {
  'HelloIntent': function() {
    this.response.speak("Hello, its very nice to meet you. Tell me something, what is your name?").listen(questionOne).
    ("What is your age?").listen(questionTwo).("What is your favorite food?").listen(questionThree).
    ("What is your favorite color?").listen(questionFour).
    ("What is your quest?").listen(questionFive);
    this.emit(":responseReady");
  },

  var questionOne = "";
  var questionTwo = "";
  var questionThree = "";
  var questionThree = "";
  var questionFour = "";
  var questionFive = "";
  var answer = questionOne + questionTwo + questionThree + questionFour +
               questionFive;

if(answer = true) {
  this.response.speak("Your name is " + questionOne + ". Your " + questionTwo +
  "years old. Your favorite food is " + questionThree + ". Your favorite food is "
  + questionFour + ", and your quest is " + questionFive + ".");
  this.emit(":responseReady");
}


'AMAZON.HelpIntent': function() {
    this.response.speak("No problemm. All you have to do is ask me to say a prayer under your choice. Which prayer would you like me to do?").listen();
    this.emit(':responseReady');
},

// Stop
'AMAZON.StopIntent': function() {
  this.response.speak("Ok, see you next time. Have a wonderful day and God bless you.");
  this.emit(':responseReady');
},

// Cancel
'AMAZON.CancelIntent': function() {
  this.response.speak("Ok, see you next time. Have a wonderful day and God bless you.");
  this.emit(':responseReady');
}

};

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
}
