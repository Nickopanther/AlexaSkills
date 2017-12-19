/*
    An Alexa Skill called Titanc vs Futility
*/

"use strict";

var Alexa = require("alexa-sdk");

const APP_ID = undefined; // TODO replace with your app ID (OPTIONAL).

const factStrings = {
    'en': {
        translation: {
            facts: [
          "On the Titanic, the length of the ship was eight hundred eighty two in a half feet. On the Titan, the length of the ship was eight hundred feet.",
          "On the Titanic and the Titan, the number of propellers the ship had were three.",
          "On the Titanic, there were sixteen watertight compartments. On the Titan, there were ninteen ninteen watertight compartments.",
          "On the Titanic, there were twelve watertight doors. On the Titan, there were ninety two watertight doors.",
          "On the Titanic and the Titan, the capacity for the number of pasangers were three thousand.",
          "On the Titanic, the number of passangers onboard were more than two thousand. On the Titan, the number of passangers onboard were three thousand.",
          "On the Titanic, the number of displacement in tons were fifty two thousand three hundred ten. In the  eighteen ninety eight edition of the novella, Fuitility, the the number of displacement in tons were forty five thousand. In the ninteen twelve edition of the book, the number increased to seventy five thousand.",
          "On the Titanic, the Gross tonnage was forty six thousand three hundred twenty eight. On the Titan, the Gross tonnage was forty five thousand.",
          "On the Titanic, the Horsepower was forty six thousand. In the  eighteen ninety eight edition of the novella, the Horsepower was forty thousand. In the ninteen twelve edition of the book, the horsepower was seventy five thousand.", "On the Titanic, the number of lifeboats were twenty. On the Titan, the number of lifeboats were twenty four.", "On the Titanic, the speed at the time of the collision was twenty two in a half knots. On the Titanic, the speed at the time of the collision was twenty five knots", "On the Titanic and the Titan, the month of the maiden voyage was in April.", "On the Titanic and the Titan, the side of the ship that struck the iceberg was the Starboard.",
          "On the Titanic, the iceberg was struck at eleven forty p.m. On the Titan, the iceberg was struck near midnight with no specific time.", "On the Titanic, the destination was from England to New York. On the Titan, the destination was from New York to England.", "On the Titanic and the Titan, the location of the collision was at the North Atlantic, a few hundred miles off the U.S. Coast.", "On the Titanic, the warning was Iceberg right ahead. On the Titan, the warning was Ice, ice ahead. Iceberg, right under the bows.", "On the Titanic, the ship's headquarters was the British registry but it was owned by the U.S. On the Titan, the ship's headquarters was a British Company in Liverpool.", "On the Titanic and the Titan, the ship's owners U.S. location was in New York", "On the Titanic, the number of deaths were more than one thousand five hundred. On the Titan, the number of deaths were two thousand nine hundred eighty seven."
      ],

        }
    }
}

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Welcome to The Titanic vs The Titan. By telling me to pick a fact, you will receive a comparison between the real 1912 Titanic and the fictional ship, the Titan from an 1898 novella published by Morgan. Let's get started. Just say, pick a fact.").listen();
      
    this.emit(':responseReady');
  },

'GetNewFactIntent': function () {
    this.emit('GetFact');
},
'GetFact': function () {
    // Get a random space fact from the space facts list
    // Use this.t() to get corresponding language data
    const factsArr = this.t('facts');
    const factsIndex = Math.floor(Math.random() * factsArr.length);
    const randomFact = factsArr[factsIndex];

    // Create speech output
    const speechOutput = randomFact;
    this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);


},

// Yes
'YesIntent': function () {
    this.response.speak("Ok, what would you like me to lookup next?").listen();
    this.emit(":responseReady");
},

// Help
'AMAZON.HelpIntent': function () {
    this.response.speak("No problem, I will repeat the instructions to you. You can learn about a Pokey-mohn by asking me its type, evolution, attacks, or all of them by asking me to lookup a name. What would you like to learn today?").listen();
    this.emit(':responseReady');
},

// Stop
'AMAZON.StopIntent': function () {
    this.response.speak("Ok, see you next time. And remember, gotta catch 'em all.");
    this.emit(':responseReady');
},

// Cancel
'AMAZON.CancelIntent': function () {
    this.response.speak("Ok, see you next time. And remember, gotta catch 'em all.");
    this.emit(':responseReady');
}
}

exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = factStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};