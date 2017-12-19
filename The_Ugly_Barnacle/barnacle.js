/*
    An Alexa Skill called The Ugly Barnacle
*/

"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Once there was an ugly barnacle. He was so ugly that everyone died. The end. Would you like me to read it again?").listen();
      
    this.emit(':responseReady');
  },
    
    'UglyIntent': function() {
        this.response.speak("Once there was an ugly barnacle. He was so ugly that everyone died. The end. Would you like me to read it again?").listen();
      
    this.emit(':responseReady');
    },
    
    // Yes
    'YesIntent': function() {
        this.response.speak("Ok, here it goes. Once there was an ugly barnacle. He was so ugly that everyone died. The end. That was fun! Would you like me to read it again?").listen();
        
        this.emit(":responseReady");
    },
    // Help
    'AMAZON.HelpIntent': function() {
        this.response.speak("No problem, just ask me to read you The Ugly Barnacle to you.").listen();
        this.emit(':responseReady');
    },
    
    // Stop
  'AMAZON.StopIntent': function() {
      this.response.speak("Ok, thank you for listening.");
      this.emit(':responseReady');
  },

  // Cancel
  'AMAZON.CancelIntent': function() {
      this.response.speak("Ok, thank you for listening.");
      this.emit(':responseReady');
  }
};
  
  exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
  };
