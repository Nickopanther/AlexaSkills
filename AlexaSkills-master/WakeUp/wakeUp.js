/*
    An Alexa Skill called The Ugly Barnacle
*/

"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up").listen();
      
    this.emit(':responseReady');
  },
    
    'WakeUpIntent': function() {
        
       this.response.speak("wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up wake up");
      
    this.emit(':responseReady');
    },
    
    // Help
    'AMAZON.HelpIntent': function() {
        this.response.speak("No problem, just ask me to read you The Ugly Barnacle to you.").listen();
        this.emit(':responseReady');
    },
    
    // Stop
  'AMAZON.StopIntent': function() {
      this.response.speak("Good, you're awake! Have a nice day.");
      this.emit(':responseReady');
  },

  // Cancel
  'AMAZON.CancelIntent': function() {
      this.response.speak("Good, you're awake! Have a nice day.");
      this.emit(':responseReady');
  }
};
  
  exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
  };
