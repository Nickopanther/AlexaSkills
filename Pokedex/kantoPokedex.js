"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Hello, welcome to your very own Pokeydex. My name is Dexter and I gather information on Pokey-mohn from the canto region. You can learn about a Pokey-mohn by asking me its type, evolution, attacks, or all of them by asking me to lookup a name. What would you like to learn today?").listen();
      
    this.emit(':responseReady');
  },

  'PokemonIntent': function () {
        var myPokemon = this.event.request.intent.slots.pokemon.value;
      
        // Bulbasaur 
        if (myPokemon == "bulbasaur") {
            this.response.speak("Bulbusaur is a grass and poison type Pokey-mohn and it evolves into Ivysaur. Bulbusaur is one of the starter Pokey-mohn a trainer can get from Professor Oak in the games Red, Blue, Fire Red, and Leaf Green. Some of Bulbusaur's attacks are tackle, leech seed, and vine whip. Bulbusaur is the very first Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Ash Ketchum catches a Bulbusaur in the episode Bulbusaur and the Hidden Village where Bulbusaur guards and protects the abandoned Pokey-mohn in Melanie's hidden village. Eventually, Ash gives his Bulbusaur up to Professor Oak to be an ambassador in Bulbusaur the Ambassador. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ivysaur
        else if (myPokemon == "ivysaur") {
            this.response.speak("Ivysaur is a grass and poison type Pokey-mohn. Ivysaur is the evolved form of Bulbusaur and it evolves into Venusaur. Some of Ivysaur's attacks are razor leaf, sweet scent, and double edge. Ivysaur is the second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venusaur
        else if (myPokemon == "venusaur") {
            this.response.speak("Venusaur is a grass and poison type Pokey-mohn and it's the evolved form of Ivysaur. Some of Venusaur's attacks are worry seed, synthesis, and solar beam. Venusaur is the third Pokey-mohn listed in the Canto and National Pokeydex. It can Mega Evolve into Mega Venusaur using the Venusaurite. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmander
        else if (myPokemon == "charmander") {
            this.response.speak("Charmander is a fire type Pokey-mohn and it evolves into Charmeleon. Some of Charmander's attacks are scratch, ember, and smokescreen. Charmander is the fourth Pokey-mohn listed in the Canto and National Pokeydex. Charmander is one of the starter Pokey-mohn a trainer can get from Professor Oak in the games Red, Blue, Fire Red, and Leaf Green. In the anime, Ash Ketchum catches Charmander in the episode Charmander the stray Pokey-mohn, where Ash Brock and Misty discover a Charmander sitting on a rock where it was abandoned by its trainer Damian. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmeleon
        else if (myPokemon == "charmeleon") {
            this.response.speak("Charmeleon is a fire type Pokey-mohn. Charmeleon is the evolved form of Charmander and it evolves into Charizard. Some of Charmeleon's attacks are dragon rage, fire fang, and flame burst. Charmeleon is the fourth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Ash's Charmander evolves into Charmeleon in the episode March of the Eggs-EGG-you-tor Squad. From that point on, Charmeleon grew disobedient towards Ash. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charizard
        else if (myPokemon == "charizard") {
            this.response.speak("Charizard is a fire and flying type Pokey-mohn and it's the evolved form of Charmeleon. Some of Charizard's attacks are slash, flamethrower, and fire spin. Charizard is the sixth Pokey-mohn listed in the Canto and National Pokeydex. It can Mega Evolve into two forms: Mega Charizard X using Charizardite X and Mega Charizard Y using Charizardite Y. In the anime, Ash's Charmeleon evolves into Charizard in the episode Attack of the Prehistoric Pokey-mohn. Throughout the series, Charizard is still disobedient towards Ash but does obey him on occasions. He eventually releases Charizard in the episode Charizard's Burning Ambitions but eventually reunites with him in the episode The Fires of a Red Hot Reunion from Pokey-mohn Best Wishes series. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Squirtle
        else if (myPokemon == "squirtle") {
            this.response.speak("Squirtle is a water type Pokey-mohn and it evolves into Wartortle. Squirtle is one of the starter Pokey-mohn a trainer can get from Professor Oak in the games Red, Blue, Fire Red, and Leaf Green. Some of Squirtle's attacks are tackle, water gun, and bubble. Squirtle is the seventh Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Squirtle makes its debut in the episode Here Comes the Squirtle Squad. In the episode, Ash, Brock, and Misty come across a vicious gang called the Squirtle Squad where they cause trouble and terror throughout the town. After a chain of events, and an evil plot from Team Rocket, the leader joins Ash and the gang on their adventures. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wartortle
        else if (myPokemon == "wartortle") {
            this.response.speak("Wartortle is a water type Pokey-mohn. Wartortle is the evolved form of Squirtle and it evolves into Blastoise. Some of Wartortle's attacks are bite, water pulse, and aqua tail. Wartortle is the eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Blastoise 
        else if (myPokemon == "blastoise") {
            this.response.speak("Blastoys is a water type Pokey-mohn and it's the evolved form of Wartortle. Some of Blastoys' attacks are skull bash, iron defense, and hydro pump. Blastoys is the ninth Pokey-mohn listed in the Canto and National Pokeydex. It can Mega Evolve into Mega Blastoys using the Blastoisinite. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Caterpie
        else if (myPokemon == "caterpie") {
            this.response.speak("Caterpie is a bug type Pokey-mohn and it evolves into Metapod. Caterpie's attacks are tackle, string shot, and bug bite. Caterpie is the tenth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Caterpie is the very first Pokey-mohn Ash Ketchum successfully catches at the end of the episode, Pokey-mohn Emergency. The story continues with a followup story in the episode, Ash Catches a Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Metapod
        else if (myPokemon == "metapod") {
            this.response.speak("Metapod is a bug type Pokey-mohn. Metapod is the evolved form of Caterpie and it evolves into Butterfree. Metapod's only attack is harden. Metapod is the eleventh Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Ash's Caterpie evolves into a Metapod at the end of the episode, Ash Catches a Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Butterfree
        else if (myPokemon == "butterfree") {
            this.response.speak("Butterfree is a bug and flying type Pokey-mohn and it's the evolved form of Metapod. Some of Butterfree's attacks are gust, confusion, and poison powder. Butterfree is the twelfth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Ash's Metapod evolves into a Butterfree in the episode Challenge of the Samurai. He later releases his Butterfree to join the other Butterfrees in the episode, Bye Bye Butterfree. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weedle
        else if (myPokemon == "weedle") {
            this.response.speak("Weedle is a bug and poison type Pokey-mohn and it evolves into Kukuna. Weedle's attacks are poison sting, string shot, and bug bite. Weedle is the thirteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kakuna 
        else if (myPokemon == "kakuna") {
            this.response.speak("Kukuna is a bug and poison type Pokey-mohn. Kukuna is the evolved form of Weedle and it evolves into Beedrill. Kukuna's only attack is harden. Kukuna is the fourteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Beedrill
        else if (myPokemon == "beedrill") {
            this.response.speak("Beedrill is a bug and poison type Pokey-mohn and it's the evolved form of Kukuna. Some of Beedrill's attacks are twineedle, venoshock, and poison jab. Beedrill is the fifteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgey 
        else if (myPokemon == "pidgey") {
            this.response.speak("Pidgey is a normal and flying type Pokey-mohn and it evolves into Pidjyotoe. Some of Pidgey's attacks are tackle, gust, and quick attack. Pidgey is the sixteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgeotto 
        else if (myPokemon == "pidgeotto") {
            this.response.speak("Pidjyotoe is a normal and flying type Pokey-mohn. Pidjyotoe is the evolved form of Pidgey and it evolves into Pidgeeaught. Some of Pidjyotoe's attacks are twister, feather dance, and agility. Pidjyotoe is the seventeenth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Ash Ketchum successfully captures his second Pokey-mohn, Pidjyotoe, in the episode Ash Catches a Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgeot 
        else if (myPokemon == "pidgeeaught") {
            this.response.speak("Pidgeeaught is a normal and flying type Pokey-mohn and it's the evolved form of Pidjyotoe. Some of Pidgeeaught's attacks are wing attack, air slash, and hurricane. Pidgeeaught is the eighteenth Pokey-mohn listed in the Canto and National Pokeydex. It can Mega Evolve into Mega Pidgeeaught using the Pidgeeaughtite. In the anime, Ash's Pidjyotoe evolves into Pidgeeaught in the episode Pallet Party Panic, where the Fearow Ash attacked when it was a Spearow in the first episode, attacks the gang. Pidjyotoe evolves into Pidgeeaught to help his master and his friends. At the end of the episode, Ash told Pidgeeaught to stay to protect the Pidgeys and Pidgjyotoes. He promised to return for it but to this day, he has never returned to Pidgeeaught. What a jerk if you ask me. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rattata 
        else if (myPokemon == "rattata") {
            this.response.speak("Rattata is a normal type Pokey-mohn and it evolves into Raticate. Some of Rattata's attacks are tackle, quick attack, and hyper fang. Rattata is the ninteenth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Rattata has a regional variant that is Dark and Normal. It evolves into Alolan Raticate when leveled up at night. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raticate
        else if (myPokemon == "raticate") {
            this.response.speak("Raticate is a normal type Pokey-mohn and it's the evolved form of Rattata. Some of Raticate's attacks are Super Fang, Double Edge, and Endeavor. Raticate is the twentieth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Raticate has a regional variant that is Dark and crunch, sucker punch and double edge. It evolves from Alolan Rattata when leveled up at night. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Spearow
        else if (myPokemon == "spearow") {
            this.response.speak("Spearow is a normal and flying type Pokey-mohn and it evolves into Fearow. Some of Spearow's attacks are peck, fury attack, and aerial ace. Spearow is the twenty first Pokey-mohn listed in the Canto and National Pokeydex. In the pilot episode, Pokey-mohn I Choose You, Ash throws a rock at a Spearow mistaking it as a Pidgey. This angered the Spearow and cried out for help. Then a flock of Spearows chase and attack Ash and Pikachu. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Fearow
        else if (myPokemon == "fearow") {
            this.response.speak("Fearow is a normal and flying type Pokey-mohn and it's the evolved form of Spearow. Some of Fearow's attacks are agility, drill peck, and drill run. Fearow is the twenty second Pokey-mohn listed in the Canto and National Pokeydex. In the anime, the Spearow that Ash threw the rock at from the pilot episode, evolves into a Fearow in the episode Pallet Party Panic. It seeks out revenge to Ash Ketchum by attacking him and his friends. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ekans 
        else if (myPokemon == "eckens") {
            this.response.speak("Eckens is a poison type Pokey-mohn and it evolves into Arbok. Some of Eckens attacks are wrap, poison sting, and acid. Eckehns is the twenty third Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Eckens belongs to Jessie from Team Rocket. It makes its major debut, along with Team Rocket's, in the episode Pokey-mohn Emergency. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arbok
        else if (myPokemon == "arbok") {
            this.response.speak("Arbok is a poison type Pokey-mohn and it's the evolved form of Eckens. Some of Arbok's attacks are acid spray, belch, and gunk shot. Arbok is the twenty fourth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Jessie's Eckens evolves into Arbok in the episode Dig Those Diglett because it wanted to make Jessie happy. She eventually releases Arbok so it could protect a wild group of Eckens and Koffings in the episode A Poached Ego. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pikachu 
        else if (myPokemon == "pikachew") {
            this.response.speak("Pikachu is an electric type Pokey-mohn. Pikachu is the evolved form of Pichu and it evolves into Raichu by using a thunder stone. Some of Pikachu's attacks are thunder shock, iron tail, and electro ball. Pikachu is the twenty fifth Pokey-mohn listed in the Canto and National Pokeydex. In Pokey-mohn Yellow Version, it is the only Pokey-mohn you can have as a starter Pokey-mohn from Professor Oak. Pikachu is the mascot of the Pokey-mohn franchise and is Ash Ketchum's starter Pokey-mohn in the anime series. Pikachu makes its major debut in the pilot episode, Pokey-mohn I Choose You. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raichu 
        else if (myPokemon == "raichu") {
            this.response.speak("Raichu is an electric type Pokey-mohn and it's the evolved form of Pikachu from using a thunder stone. Some of Raichu's attacks are thunder shock, quick attack, and thunderbolt. Raichu is the twenty sixth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Raichu has a regional variant that is Electric and Psychic. It evolves from Pikachu when exposed to a Thunder Stone. In the anime, Ash's Pikachu faces a Raichu when he battles Lieutenant Surge to get a Thunder Badge in the episode Electric Shock Showdown. Pikachu also battles a Raichu again in the episode Pika and Goliath. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandshrew
        else if (myPokemon == "sandshrew") {
            this.response.speak("Sandshrew is a ground type Pokey-mohn and it evolves into Sandslash. Some of Sandshrew's attacks are scratch, rollout, and magnitude. Sandshrew is the twenty seventh Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Sandshrew has a regional variant that is Ice and Steel. It evolves into Alolan Sandslash when exposed to an Ice Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandslash
        else if (myPokemon == "sandslash") {
            this.response.speak("Sandslash is a ground type Pokey-mohn and it's the evolved form of Sandshrew. Some of Sandslash's attacks are sand tomb, dig, and earthquake. Sandslash is the twenty eighth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Sandslash has a regional variant that is Ice and Steel. It evolves from Alolan Sandshrew when exposed to an Ice Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoran female and male 
        else if (myPokemon == "nidoran") {
            this.response.speak("Needoorann is a poison type Pokey-mohn. The blue female Needoorann evolves into Needooreenuh and the purple male Needoorann evolves into Needooreeno. Some of the attacks for the blue female Needoorann are scratch, double kick, and poison sting. Some of the attacks for the purple male Needoorann are peck, double kick, and poison sting. The blue female Needoorann is the twenty ninth Pokey-mohn listed in the Canto and National Pokeydex and the purple male Needoorann is the thirty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorina 
        else if (myPokemon == "nidorina") {
            this.response.speak("Needooreenuh is a poison type Pokey-mohn. Needooreenuh is the evolved form of Needoorann and it evolves into Needoqueen if it exposed to a Moon Stone. Some of Needooreenuh's attacks are fury swipes, bite, and toxic spikes. Needooreenuh is the thirtieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoqueen
        else if (myPokemon == "nidoqueen") {
            this.response.speak("Needoqueen is a poison and ground type Pokey-mohn and it's the evolved form of Needooreenuh if it's exposed to a Moon Stone. Some of Needoqueen's attacks are body slam, earth power, and super power. Needoqueen is the thirty first Pokey-mohn listed in the Canto and National Pokeydex. In Mewtwo Returns, there is an error where a baby Needoqueen is seen instead of it being a Needoorann. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorino 
        else if (myPokemon == "nidorino") {
            this.response.speak("Needooreeno is a poison type Pokey-mohn. Needooreeno is the evolved form of Needoorann and it evolves into Needoking if it's exposed to a Moon Stone. Some of Needooreeno's attacks are fury attack, horn attack, and toxic spikes. Needooreeno is the thirty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoking // FIX NAME
        else if (myPokemon == "nidoking") {
            this.response.speak("Needoking is a poison and ground type Pokey-mohn and it's the evolved form of Needooreeno if it is exposed to a Moon Stone. Some of Needoking's attacks are thrash, earth power, and mega horn. Needoking is the thirty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Clefairy 
        else if (myPokemon == "clefairy") {
            this.response.speak("Cluhfairee is a normal type Pokey-mohn. Cluhfairee is the evolved form of Cleffa when leveledup with high friendship and it evolves into Cluhfaybull if it is exposed to a Moon Stone. Some of Cluhfairee's attacks are Disarming Voice, sing, and double slap. Cluhfairee is the thirty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
    
        // Clefable 
        else if (myPokemon == "cluhfaybull") {
            this.response.speak("Cluhfaybull is a normal type Pokey-mohn and it's the evolved form of Cluhfairee when exposed to a Moon Stone. Some of Cluhfaybull's attacks are metronome, body slam, and moon blast. Cluhfaybull is the thirty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vulpix
        else if (myPokemon == "vulpix") {
            this.response.speak("Vulpix is a fire type Pokey-mohn and it evolves into Ninetales when exposed to a fire stone. Some of Vulpix's attacks are ember, fire spin, and flame burst. Vulpix is the thirty seventh Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Vulpix has a regional variant that is Ice-type. It evolves into Alolan Ninetales when exposed to an Ice Stone. In the anime, Brock receives a Vulpix from Suzie in the episode Pokey-mohn Fashion Flash. Later, he returned it to her in the episode Beauty and the Breeder. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ninetales
        else if (myPokemon == "ninetales") {
            this.response.speak("Ninetales is a fire type Pokey-mohn and it's the evolved form of Vulpix when exposed to a fire stone. Some of Ninetales attacks are flamethrower, confuse ray, and safeguard. Ninetales is the thirty eighth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Blaine, the Cinnabar Island Gym Leader, used a Ninetales to battle Ash in the episode Riddle Me This. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jigglypuff
        else if (myPokemon == "jigglypuff") {
            this.response.speak("Jigglypuff is a normal type Pokey-mohn. Jigglypuff is the evolved form of Igglybuff when leveled up with high friendship and it evolves into Wigglytuff when exposed to a Moon Stone. Some of Jigglypuff's attacks are sing, pound, and rollout. Jigglypuff is the thirty ninth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Jigglypuff appears out of nowhere from time to time to sing its song. When it does, it puts people to sleep. Then Jigglypuff gets angry that they are asleep and draws on their faces. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wigglytuff
        else if (myPokemon == "wigglytuff") {
            this.response.speak("Wigglytuff is a normal type Pokey-mohn and it's the evolved form of Jigglypuff when exposed to a Moon Stone. Some of Wigglytuff's attacks are double edge, play rough, and double slap. Wigglytuff is the fortieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zubat
        else if (myPokemon == "zubat") {
            this.response.speak("Zubat is a poison and flying type Pokey-mohn and it evolves into Golbat. Some of Zubat's attacks are super sonic, wing attack, and air cutter. Zubat is the forty first Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Brock captures his own Zubat in the episode Cluhfairee and the Moon Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golbat
        else if (myPokemon == "golbat") {
            this.response.speak("Golbat is a poison and flying type Pokey-mohn. Goldbat is the evolved form of Zubat and it evolves into Crobat when leveled up with high friendship. Some of Goldbat's attacks are vpoison fang, venoshock, and air slash. Golbat is the forty second Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Brock's Zubat evolves into Golbat in the episode Hassle in the Castle. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Oddish
        else if (myPokemon == "oddish") {
            this.response.speak("Oddish is a grass and poison type Pokey-mohn and it evolves into Gloom. Some of Oddish's attacks are absorb, acid, and mega drain. Oddish is the forty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gloom
        else if (myPokemon == "gloom") {
            this.response.speak("Gloom is a grass and poison type Pokey-mohn. Gloom is the evolved form of Oddish and it can evolve into Vileplume when exposed to a Leaf Stone or a Belossom when exposed to a Sun Stone. Some of Gloom's attacks are Giga Drain, Toxic, and Natural Gift. Gloom is the forty fourth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Ash rescues Erika's Gloom from a fire inside the Celadon City Gym in the episode Pokey-mohn Scent-sation. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vileplume
        else if (myPokemon == "vileplume") {
            this.response.speak("Vileplume is a grass and poison type Pokey-mohn and it's the evolved form of Gloom when exposed to a Leaf Stone. Some of Vileplume's attacks are Petal Blizzard, Petal Dance, and Solar Beam. Vileplume is the forty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Paras
        else if (myPokemon == "paras") {
            this.response.speak("Paras is a bug and grass type Pokey-mohn and it evolves into Parasect. Some of Paras attacks are Stun Spore, Absorb, Poison Powder, and Absorb. Paras is the forty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Parasect
        else if (myPokemon == "parasect") {
            this.response.speak("Parasect is a bug and grass type Pokey-mohn and it's the evolved form of Paras. Some of Parasect's attacks are Growth, Giga Drain, and X Scissor. Parasect is the forty fifth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venonat
        else if (myPokemon == "venonat") {
            this.response.speak("VENN-oh-nat is a bug and poison type Pokey-mohn and it evolves into venn-oh-moth. Some of VENN-oh-nat's attacks are foresight, confusion, and signal beam. Venn-oh-nat is the forty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venomoth 
        else if (myPokemon == "venomoth") {
            this.response.speak("Venn-oh-moth is a bug and poison type Pokey-mohn and it's the evolved form of Venn-oh-nat. Some of Venn-oh-moth's attacks are leech life, poison fang, and bug buzz. Venn-oh-moth is the forty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Diglett
        else if (myPokemon == "diglett") {
            this.response.speak("Diglett is a ground type Pokey-mohn and it evolves into Dugtrio. Some of Diglett's attacks are mud slap, bulldoze, and mud bomb. Diglett is the fiftieth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Diglett has a regional variant that is Ground and Steel. It evolves into Alolan Dugtrio. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dugtrio
        else if (myPokemon == "dugtrio") {
            this.response.speak("Dugtrio is a ground type Pokey-mohn and it's the evolved form of Diglett. Some of Dugtrio's attacks are Earth Power, Dig and Earthquake. Dugtrio is the fifty first Pokey-mohn listed in the Canto and Natioanl Pokeydex. In Alola, Dugtrio has a regional variant that is Ground and Steel. It evolves from Alolan Diglett. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Meowth
        else if (myPokemon == "meowth") {
            this.response.speak("Meowth is a normal type Pokey-mohn and it evolves into Persian. Some of Meowth's attacks are scratch, fake out, and fury swipes. Meowth is the fifty second Pokey-mohn listed in the Canto and Natioanl Pokeydex. In Alola, Meowth has a regional variant that is Dark-type. It evolves into Alolan Persian when leveled up with high friendship. In the anime, Meowth is a member of Team Rocket and is one of the two main Pokey-mohn characters in the series. He makes his major debut in the episode Pokey-mohn Emergency. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Persian 
        else if (myPokemon == "purrshin") {
            this.response.speak("Persian is a normal type Pokey-mohn and it's the evolved form of Meowth. Some of Persian's attacks are Slash, Assurance, and Feint. Persian is the fifty third Pokey-mohn listed in the Canto and Natioanl Pokeydex. In Alola, Persian has a regional variant that is Dark-type. It evolves from Alolan Meowth when leveled up with high friendship. In the anime, Giovanni, Team Rocket's boss, owns a Persian and is usually seen every time Giovanni gets screen time in the anime. Persian makes its debut in the episode Battle Aboard the Saint Anne. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Psyduck
        else if (myPokemon == "psyduck") {
            this.response.speak("Psyduck is a water type Pokey-mohn and it evolves into Golduck. Some of Psyduck's attacks are Water Gun, Water Pulse, and Aqua Tail. Psyduck is the fifty fourth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Misty accidentally catches a Psyduck in the episode Hypno's Naptime. Throughout the series, it comes out of its Pokey ball from time to time without even being called for. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golduck
        else if (myPokemon == "golduck") {
            this.response.speak("Golduck is a water type Pokey-mohn and it's the evolved form of Psyduck. Some of Golduck's attacks are Psych Up, Hydro Pump, and Wonder Room. Golduck is the fifty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mankey
        else if (myPokemon == "mankey") {
            this.response.speak("Mank-ey is a fighting type Pokey-mohn and it evolves into Prime-ape. Some of Mank-ey's attacks are Low Kick, Karate Chop, and Cross Chop. Mank-ey is the fifty sixth Pokey-mohn listed in the Canto and National Pokeydex. In the episode, Prime-ape Goes Bananas from thee anime, Mank-ey steals Ash's hat and they fight to get it back. It eventually evolves into Prime-ape in the episode. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Primeape 
        else if (myPokemon == "primeape") {
            this.response.speak("Prime-ape is a fighting type Pokey-mohn and it's the evolved form of Mank-ey. Some of Prime-ape's attacks are Punishment, Close Combat, and Final Gambit. Prime-ape is the fifty seventh Pokey-mohn listed in the Canto and National Pokeydex. In the episode, Prime-ape Goes Bananas, the Mank-ey that steals Ash's hat evolves into Prime-ape. After chasing them for so long, Ash's Charmander battled it and then Ash captures Prime-ape. Later in the series, Ash gives his Prime-ape to Anthony for training in the episode The Punchy Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Growlithe 
        else if (myPokemon == "growlithe") {
            this.response.speak("Growl-ith is a fire type Pokey-mohn and it evolves into ar-kuh-NINE when exposed to a Fire Stone. Some of Growl-ith's attacks are Ember, Flame Wheel, and Flamethrower. Growl-ith is the fifty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arcanine 
        else if (myPokemon == "arcanine") {
            this.response.speak("ar-kuh-NINE is a fire type Pokey-mohn and it's the evolved form of Growl-ith when exposed to a Fire Stone. Some of ar-kuh-NINE's attacks are Odor Sleuth, Fire Fang, and Extreme Speed. Ar-kuh-nine is the fifty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwag 
        else if (myPokemon == "poliwag") {
            this.response.speak("Pol-ee-wag is a water type Pokey-mohn and it evolves into Pol-ee-wurl. Some of Pol-ee-wag's attacks are Water Gun, Bubble, and Rain Dance. Pol-ee-wag is the sixtieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwhirl 
        else if (myPokemon == "poliwhirl") {
            this.response.speak("Pol-ee-wurl is a water type Pokey-mohn. Pol-ee-wurl is the evolved form of Pol-ee-wag. Pol-ee-wurl evolves into Pol-ee-rath when exposed to a Water Stone or a Pol-ee-toed when exposed to a King's Rock. Some of Pol-ee-wurl's attacks are Body Slam, Bubble Beam, and Mud Shot. Pol-ee-wurl is the sixty first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwrath 
        else if (myPokemon == "poliwrath") {
            this.response.speak("Pol-ee-rath is a water and fighting type Pokey-mohn and it's the evolved form of Pol-ee-wurl when exposed to a Water Stone. Some of Pol-ee-rath's attacks are Submission, Dynamic Punch, and Circle Throw. Pol-ee-wrath is the sixty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Abra 
        else if (myPokemon == "abruh") {
            this.response.speak("Abra is a psychic type Pokey-mohn and it evolves into Kadabra. Abra's only attack is Teleport. Abra is the sixty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kadabra
        else if (myPokemon == "kadabra") {
            this.response.speak("Kadabra is a psychic type Pokey-mohn. Kadabra is the evolved form of Abra and it evolves into Alakazam when traded over. Some of Kadabra's attacks are Confusion, Psybeam, and Psycho Cut. Kadabra is the sixty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Alakazam
        else if (myPokemon == "alakazam") {
            this.response.speak("Alakazam is a psychic type Pokey-mohn and it's the evolved form of Kadabra when traded over. Some of Alakazam's attacks are Psychic, Calm Mind, and Future Sight. Alakazam is the sixty fifth Pokey-mohn listed in the Canto and National Pokeydex. It can Mega Evolve into Mega Alakazam using the Alakazite. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machop
        else if (myPokemon == "machop") {
            this.response.speak("Machop is a fighting type Pokey-mohn and it evolves into Machoke. Some of Machop's attacks are Low Kick, Karate Chop, and Revenge. Machop is the sixty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machoke
        else if (myPokemon == "machoke") {
            this.response.speak("Machoke is a fighting type Pokey-mohn. Machoke is the evolved form of Ma-chop and it evolves into Ma-champ when traded over. Some of Machoke's attacks are Submission, Cross Chop, and Scary Face. Machoke is the sixty seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machamp 
        else if (myPokemon == "machamp") {
            this.response.speak("Ma-champ is a fighting type Pokey-mohn and it's the evolved form of Machoke when traded over. Some of Ma-champ's attacks are Dual Chop, Bulk Up, and Dynamic Punch. Ma-champ is the sixty eighth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Bellsprout
        else if (myPokemon == "bellsprout") {
            this.response.speak("Bellsprout is a grass and poison type Pokey-mohn and it evolves into Weepinbell. Some of Bellsprout's attacks are Vine Whip, Sleep Powder, and Poison Powder. Bellsprout is the sixty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weepinbell
        else if (myPokemon == "weepinbell") {
            this.response.speak("Weepinbell is a grass and poison type Pokey-mohn. Weepinbell is the evolved form of Bellsprout and it evolves into VICK-tree-bell when exposed to a Leaf Stone. Some of Weepinbell's attacks are Razor Leaf, Poison Jab, and Wring Out. Weepinbell is the seventieth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, James owns a Weepinbell until it evolved when it was dropped off at a breeding center. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Victreebel 
        else if (myPokemon == "victreebel") {
            this.response.speak("VICK-tree-bell is a grass and poison type Pokey-mohn and it's the evolved form of Weepinbell. Some of VICK-tree-bell's attacks are Leaf Tornado, Leaf Storm, and Leaf Blade. Vick-tree-bell is the seventy first Pokey-mohn listed in the Canto and National Pokeydex. In the anime, James's Weepinbell evolves into a Vick-tree-bell when he dropped it off in a breeding center from the episode, The Breeding Center Secret. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacool
        else if (myPokemon == "tentacool") {
            this.response.speak("Tentacool is a water and poison type Pokey-mohn and it evolves into Tentacruel. Some of Tentacool's attacks are Poison Sting, Water Pulse, and Acid Spray. Tentacool is the seventy second Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Tentacool appears in the episode, Tentacool and Tentacruel. It was temporarily banned due to the events of nine eleven. Mostly because of the scene where Tentacruel knocks down a skyscraper and guns being fired at buildings. This episode is available on Pokey-mohn video tapes, dvd's, blu-ray, and online video streaming. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacruel
        else if (myPokemon == "tentacruel") {
            this.response.speak("Tentacruel is a water and poison type Pokey-mohn and it's the evolved form of Tentacool. Some of Tentacruel's attacks are Brine, Sludge Wave, and Hydro Pump. Tentacruel is the seventy third Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Tentacruel appears in the episode, Tentacool and Tentacruel. It was temporarily banned due to the events of nine eleven. Mostly because of the scene where Tentacruel knocks down a skyscraper and guns being fired at buildings. This episode is available on Pokey-mohn video tapes, dvd's, blu-rays, and online video streaming. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Geodude
        else if (myPokemon == "geodude") {
            this.response.speak("Geodude is a rock and ground type Pokey-mohn and it evolves into Graveler. Some of Geodude's attacks are Rollout, Rock Throw, and Smack Down. Geodude is the seventy fourth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Geodude has a regional variant that is Rock and Electric. It evolves into Alolan Graveler, which evolves into Alolan Golem when traded over. In the anime, Brock owns a Geodude until he gives it away to his brother, Forrest, on his departure to the Hoenn region. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Graveler
        else if (myPokemon == "graveler") {
            this.response.speak("Graveler is a rock and ground type Pokey-mohn. Graveler is the evolved form of Geodude and it evolves into Golem when traded over. Some of Graveler's attacks are Rock Blast, Earthquake, and Explosion. Graveler is the seventy fifth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Graveler has a regional variant that is Rock and Electric. It evolves from Alolan Geodude and evolves into Alolan Golem when traded over. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golem
        else if (myPokemon == "golem") {
            this.response.speak("Golem is a rock and ground type Pokey-mohn and it's the evolved form of Graveler when traded over. Some of Graveler's attacks are Double Edge, Stone Edge, and Heavy Slam. Golem is the seventy sixth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Golem has a regional variant that is Rock and Electric. It evolves from Alolan Graveler when traded over. It is the final form of Alolan Geodude. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ponyta
        else if (myPokemon == "ponyta") {
            this.response.speak("Ponyta is a fire type Pokey-mohn and it evolves into Rapidash. Some of Ponyta's attacks are Ember, Flame Charge, and Fire Spin. Ponyta is the seventy seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rapidash
        else if (myPokemon == "rapidash") {
            this.response.speak("Rapidash is a fire type Pokey-mohn and it's the evolved form of Ponyta. Some of Rapidash's attacks are Fire Blast, Bounce, and Flare Blitz. Rapidash is the seventy eighth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowpoke
        else if (myPokemon == "slowpoke") {
            this.response.speak("Slowpoke is a water and psychic type Pokey-mohn and it can evolve into Slowbro or Slowking if it's traded over while holding a King's Rock. Some of Slowpoke's attacks are Water Gun, Confusion, and Zen Headbutt. Slowpoke is the seventy ninth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, it is stated that Slowpoke will only evolve into Slowbro when a Shellder clamps on its tail. However, there is no way to do it in the video games. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowbro
        else if (myPokemon == "slowbro") {
            this.response.speak("Slowbro is a water and psychic type Pokey-mohn and it's the evolved form of Slowpoke. Some of Slowbro's attacks are Amnesia, Psychic, and Heal Pulse. Slowbro is the eightieth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, it is stated that Slowpoke will only evolve into Slowbro when a Shellder clamps on its tail. However, there is no way to do it in the video games. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magnemite 
        else if (myPokemon == "magnemite") {
            this.response.speak("MAG-nuh-mite is an electric and steel type Pokey-mohn and it evolves into Magneton. Some of MAG-nuh-mite's attacks are Thunder Shock, Magnet Bomb, and Spark. Mag-nuh-mite is the eighty first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magneton
        else if (myPokemon == "magneton") {
            this.response.speak("Magneton is an electric and steel type Pokey-mohn. Magneton is the evolved form of Mag-nuh-mite and it evolves into Magnezone when leveled up in a special magnetic field. Some of Magneton's attacks are Discharge, Gyro Ball, and Zap Cannon. Magneton is the eighty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Farfetchd
        else if (myPokemon == "farfetchd") {
            this.response.speak("Farfetchd is a normal and flying type Pokey-mohn. Some of Farfetchd attacks are Fury Attack, Air Cutter, and Brave Bird. Farfetchd is the eighty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Doduo
        else if (myPokemon == "doduo") {
            this.response.speak("Doduo is a normal and flying type Pokey-mohn and it evolves into Doe-dree-oh. Some of Doduo's attacks are Pluck, Double Hit, and Uproar. Doduo is the eighty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dodrio 
        else if (myPokemon == "dodrio") {
            this.response.speak("Doh-dree-oh is a normal and flying type Pokey-mohn and it's the evolved form of Doduo. Some of Doh-dree-oh's attacks are Jump Kick, Drill Peck, and Thrash. Doh-dree-oh is the eighty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seel
        else if (myPokemon == "seel") {
            this.response.speak("Seel is a water type Pokey-mohn and it evolves into Dewgong. Some of Seel's attacks are Icy Wind, Aqua Jet, and Brine. Seel is the eighty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dewgong
        else if (myPokemon == "dewgong") {
            this.response.speak("Dewgong is a water and ice type Pokey-mohn and it's the evolved form of Seel. Some of Dewgong's attacks are Dive, Aqua Tail, and Ice Beam. Dewgong is the eighty seventh Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Grimer
        else if (myPokemon == "grimer") {
            this.response.speak("Grimer is a poison type Pokey-mohn and it evolves into Muck. Some of Grimer's attacks are Sludge, Sludge Bomb, and Sludge Wave. Grimer is the eighty eighth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Grimer has a regional variant that is Poison and Dark. It evolves into Alolan Muck. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Muk 
        else if (myPokemon == "muk") {
            this.response.speak("Muck is a poison type Pokey-mohn and it's the evolved form of Grimer. Some of Muck's attacks are Gunk Shot, Acid Armor, and Belch. Muck is the eighty ninth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Muck has a regional variant that is Poison and Dark. It evolves from Alolan Grimer. In the anime, Ash captures a Muck at the end of the episode Sparks Fly for Magnemite. It was transferred to Professor Oak's lab and Ash finally uses Muck in battle in the episode The Fourth Round Rumble. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Shellder 
        else if (myPokemon == "shellder") {
            this.response.speak("Shellder is a water type Pokey-mohn and it evolves into Cloyster when exposed to a Water Stone. Some of Shelder's attacks are Water Gun, Clamp, and Razor Shell. Shelder is the nintieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cloyster
        else if (myPokemon == "cloyster") {
            this.response.speak("Cloyster is a water and ice type Pokey-mohn and it's the evolved form of Shelder when exposed to a Water Stone. Some of Cloyster's attacks are Hydro Pump, Aurora Beam, and Icicle Crash. Cloyster is the nintey first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gastly
        else if (myPokemon == "gastly") {
            this.response.speak("Gastly is a ghost and poison type Pokey-mohn and it evolves into Haunter. Some of Gastly's attacks are Lick, Curse, and Night Shade. Gastly is the ninety second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Haunter
        else if (myPokemon == "haunter") {
            this.response.speak("Haunter is a ghost and poison type Pokey-mohn. Haunter is the evolved form of Gastly and it evolves into Gengar when traded over. Some of Haunter's attacks are Shadow Ball, Dream Eater, and Dark Pulse. Haunter is the nintey third Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Ash catches a Haunter in the episode The Tower of Terror where Ash and Pikachu explore a tower in Lavander Town where pranks are being pulled inside by Gastly, Haunter and Genger. After the events of nine eleven, this episode has been removed from airing on TV due to the title of the episode is seen as being offensive. However, the episode is available on Pokey-mohn video tapes, dvd's, blurays, or online video streaming. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gengar
        else if (myPokemon == "gengar") {
            this.response.speak("Gengar is a ghost and poison type Pokey-mohn and it's the evolved form of Haunter when traded over. Some of Gengar's attacks are Destiny Bond, Hex, and Nightmare. Gengar is the ninety fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Onix
        else if (myPokemon == "onix") {
            this.response.speak("Onix is a rock and ground type Pokey-mohn. Onix evolves into Steelix when traded over while holding a Metal Coat. Some of Onix's attacks are Bind, Rock Throw, and Smack Down. Onix is the ninety fifth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Onix makes its major debut in the episode, Showdown in Pewter City, where Ash battles Brock's Onix to get his very first badge. Brock eventually gives his Onix to his little brother, Forrest, before his departure to the Hoenn region. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Drowzee
        else if (myPokemon == "drowzee") {
            this.response.speak("Drowzee is a psychic type Pokey-mohn and it evolves into Hypno. Some of Drowzee's attacks are Hypnosis, Confusion, and Psybeam. Drowzee is the ninety sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hypno
        else if (myPokemon == "hypno") {
            this.response.speak("Hypno is a psychic type Pokey-mohn and it's the evolved form of Drowzee. Some of Hypno's attacks are Synchronoise, Psyshock, and Future Sight. Hypno is the ninety seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Krabby 
        else if (myPokemon == "crabby") {
            this.response.speak("Crabby is a water type Pokey-mohn and it evolves into Kingler. Some of Crabby's attacks are Vice Grip, Bubble Beam, and Metal Claw. Crabby is the ninety eighth Pokey-mohn listed in the Canto and National Pokeydex. In the anime episode, Mystery at the Lighthouse, Ash catches a Crabby and it immeadiately gets sent to Professor Oak's laboratory since Ash had six Pokey-mohn in his party already. This episode marks the very first time it ever happens to him. He first uses his Crabby in a Pokey-mohn battle in the Pokey-mohn League from the episode Round One Begin. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kingler 
        else if (myPokemon == "kingler") {
            this.response.speak("Kingler is a water type Pokey-mohn and it's the evolved form of Crabby. Some of Kingler's attacks are Guillotine, Brine, and Crab hammer. Kingler is the ninety ninth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Ash's Crabby evolves into Kingler in the Pokey-mohn League in the episode Round One Begin. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Voltorb
        else if (myPokemon == "voltorb") {
            this.response.speak("Voltorb is an electric type Pokey-mohn and it evolves into Electrode. Some of Voltorb's attacks are Spark, Charge Beam, and Electro Ball. Voltorb is the one hundredth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electrode
        else if (myPokemon == "electrode") {
            this.response.speak("Electrode is an electric type Pokey-mohn and it's the evolved form of Voltorb. Some of Electrode's attacks are Light Screen, Discharge, and Explosion. Electrode is the one hundred first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggcute
        else if (myPokemon == "exeggcute") {
            this.response.speak("EGGS-egg-cute is a grass and psychic type Pokey-mohn and it evolves into Eggs-EGG-you-tor when exposed to a Leaf Stone. Some of EGGS-egg-cute's attacks are Leech Seed, Bullet Seed, and Stun Spore. Eggs-egg-cute is the one hundred second Pokey-mohn listed in the Canto and National Pokeydex. In Alola, EGGS-egg-cute will evolve into Alolan Eggs-EGG-you-tor when exposed to a Leaf Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggutor 
        else if (myPokemon == "eggseggyoutor") {
            this.response.speak("Eggs-EGG-you-tor  is a grass and psychic type Pokey-mohn and it's the evolved form of Exeggcute. Some of Eggs-EGG-you-tor 's attacks are Egg Bomb, Wood Hammer, and Leaf Storm. Eggs-egg-you-tor is the one hundred third Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Eggs-EGG-you-tor  has a regional variant that is Grass and Dragon. It evolves from EGGS-egg-cute when exposed to a Leaf Stone. All EGGS-egg-cute in Alola evolve into this form regardless of their origin. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cubone
        else if (myPokemon == "cubone") {
            this.response.speak("Cubone is a ground type Pokey-mohn and it evolves into MARe-ow-wack. Some of Cubone's attacks are Bone Club, Focus Energy, and Bonemerang. Cubone is the one hundred fourth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, Cubone will evolve into Alolan MARe-row-wack when leveled up at night. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Marowak 
        else if (myPokemon == "marowak") {
            this.response.speak("MARe-ow-wack is a ground type Pokey-mohn and it's the evolved form of Cubone. Some of MARe-ow-wack's attacks are Stomping Tantrum, Endeavor, and Bone Rush. Mare-ow-wack is the one hundred fifth Pokey-mohn listed in the Canto and National Pokeydex. In Alola, MARe-ow-wack has a regional variant that is Fire and Ghost. It evolves from Cubone when leveled up at night. All Cubones in Alola evolve into this form regardless of their origin. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonlee 
        else if (myPokemon == "hitmonlee") {
            this.response.speak("Hit-mon-lee is a fighting type Pokey-mohn. Hit-mon-lee evolves from TIE-rowg when TIE-rowg's Attack is higher than its Defense. Some of Hit-mon-lee's attacks are High Jump Kick, Close Combat, and Reversal. Hit-mon-lee is the one hundred sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonchan 
        else if (myPokemon == "hitmonchan") {
            this.response.speak("Hit-mon-chan is a fighting type Pokey-mohn. Hit-mon-chan evolves from TIE-rowg when TIE-rowg's Defense is higher than its Attack. Some of Hit-mon-chan's attacks are Vacuum Wave, Sky Uppercut, and Focus Punch. Hit-mon-chan is the one hundred seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lickitung
        else if (myPokemon == "lickitung") {
            this.response.speak("Lickitung is a normal type Pokey-mohn. Lickitung evolves into Licki licky when leveled up while knowing Rollout. Some of Lickitung's attacks are Wrap, Stomp, and Chip Away. Lickitung is the one hundred eighth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Jessie catches a Lickitung in the episode, Princess Versus Princess. She throws the Pokey ball at it after it ate her food and she later uses it against Misty in the Princess Festival Tournament. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Koffing
        else if (myPokemon == "koffing") {
            this.response.speak("Koffing is a poison type Pokey-mohn and it evolves into Weezing. Some of Koffing's attacks are Smog, Sludge, and Sludge Bomb. Koffing is the one hundred ninth Pokey-mohn listed in the Canto and National Pokeydex. Koffing makes its debut in the anime episode, Pokey-mohn Emergency. Koffing is owned by James and it is the very first time Koffing is appeared along with Team Rocket's major debut. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weezing
        else if (myPokemon == "weezing") {
            this.response.speak("Weezing is a poison type Pokey-mohn and it's the evolved form of Koffing. Some of Weezing's attacks are Destiny Bond, Belch, and Memento. Weezing is the one hundred tenth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, James's Koffing evolves into Weezing in the episode Dig Those Diglett. He eventually releases his Weezing so it could protect a wild group of Eckens and Koffings in the episode A Poached Ego. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhyhorn
        else if (myPokemon == "rhyhorn") {
            this.response.speak("Rhyhorn is a ground and rock type Pokey-mohn and it evolves into Rhydonn. Some of Rhyhorn's attacks are Rock Blast, Drill Run, and Stone Edge. Rhyhorn is the one hundred eleventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhydon 
        else if (myPokemon == "rhydon") {
            this.response.speak("Rhydonn is a ground and rock type Pokey-mohn. Rhydonn is the evolved form of Rhyhorn and it evolves into Rhyperior when traded over holding a Protector. Some of Rhydonn's attacks are Earthquake, Megahorn, and Horn Drill. Rhydonn is the one hundred twelfth Pokey-mohn listed in the Canto and National Pokeydex. Rhydonn is the very first Pokey-mohn created by the company before the franchise took off. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Chansey
        else if (myPokemon == "chansey") {
            this.response.speak("Chansey is a normal type Pokey-mohn. Chansey is the evolved form of Happiny when leveled up holding an Oval Stone during the day and evolves into Blissey when leveled up with high friendship. Some of Chansey's attacks are Double Slap, Take Down, and Egg Bomb. Chansey is the one hundred thirteenth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Chanseys are always seen working in a Pokey-mohn Center with Nurse Joy. Also, Brock's Happiny evolves into Chansey in the episode The Brockster Is In. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tangela 
        else if (myPokemon == "tangguhluh") {
            this.response.speak("TANG-gul-uh is a grass type Pokey-mohn. TANG-gul-uh evolves into Tangrowth when leveled up while knowing Ancient Power. Some of TANG-gul-uh's attacks are Vine Whip, Absorb, and Mega Drain. Tang-gul-uh is the one hundred fourteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kangaskhan
        else if (myPokemon == "kangaskhan") {
            this.response.speak("Kangaskhan is a normal type Pokey-mohn. Kangaskhan can Mega Evolve into Mega Kangaskhan using the Kangaskhanite. Some of Kangaskhan's attacks are Comet Punch, Fake Out, and Dizzy Punch. Kangaskhan is the one hundred fifteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Horsea
        else if (myPokemon == "horsea") {
            this.response.speak("HORSE-ee is a water type Pokey-mohn and it evolves into Seadra. Some of HORSE-ee's attacks are Water Gun, Bubble Beam, and Brine. Horse-ee is the one hundred sixteenth Pokey-mohn listed in the Canto and national Pokeydex. In the anime, Misty captures a Horse-ee in the episode Tentacool and Tentacruel. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Seadra
        else if (myPokemon == "seadra") {
            this.response.speak("Seadra is a water type Pokey-mohn. Seadra is the evolved form of HORSE-ee and it evolves into Kingdra when traded over while holding a Dragon Scale. Some of Seadra's attacks are Dragon Pulse, Dragon Dance, and Hydro Pump. Seadra is the one hundred seventeenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Goldeen
        else if (myPokemon == "goldeen") {
            this.response.speak("Goldeen is a water type Pokey-mohn and it evolves into Seaking. Some of Goldeen's attacks are Horn Attack, Water Pulse, and Waterfall. Goldeen is the one hundred eighteenth Pokey-mohn listed in the Canto and Natioanl Pokeydex. In the anime, Misty owns a Goldeen and it is first seen in the episode Pokey-mohn Emergency. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seaking
        else if (myPokemon == "seaking") {
            this.response.speak("Seaking is a water type Pokey-mohn and it's the evolved form of Goldeen. Some of Seaking's attacks are Horn Drill, Soak, and Megahorn. Seaking is the one hundred ninteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Staryu
        else if (myPokemon == "staryu") {
            this.response.speak("Staryu is a water type Pokey-mohn and it evolves into Starmie when exposed to a Water Stone. Some of Staryu's attacks are Water Gun, Bubble Beam, and Brine. Staryu is the one hundred twentieth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Misty owns a Staryu and it makes its debut in the episode Cluhfairee and the Moon Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Starmie 
        else if (myPokemon == "starmie") {
            this.response.speak("Starmie is a water and psychic type Pokey-mohn and it's the evolved form of Staryu when exposed to a Water Stone. Some of Starmie's attacks are Raid Spin, Recover and Hydro Pump. Starmie is the one hundred twenty first Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Misty owns a Starmie and it first appears in the episode The Water Flowers of Cerulean City. It is not her Staryu's evolved form. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mr. Mime
        else if (myPokemon == "mister mime") {
            this.response.speak("Mister Mime is a psychic type Pokey-mohn and it's the evolved form of Mime Jr when leveled up while knowing Mimic. Some of Mister Mime's attacks are Barrier, Psywave, and Psychic. Mister Mime is the one hundred twenty second Pokey-mohn listed in the Canto and National Pokeydex. Mister Mime makes its debut in the episode It's Mister Mime Time. In the episode, Ash and the gang go to a circus where the ringleader, Stella, owns and a Mister Mime and uses it for the show. It eventually leaves her, mostly from not wanting to work for her, and stays with Ash's mom to do house chores. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Scyther 
        else if (myPokemon == "scyther") {
            this.response.speak("Scyther is a bug and flying type Pokey-mohn and it evolves into See-zor when traded over while holding a Metal Coat. Some of Scyther's attacks are Wing Attack, Fury Cutter, and Air Slash. Scyther is the one hundred twenty third Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Tracey owns a Scyther when he joins Ash and Misty on their journey through the Orange Islands. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jynx
        else if (myPokemon == "jynx") {
            this.response.speak("Jynx is an ice and psychic type Pokey-mohn and it's the evolved form of Smoochum. Some of Jynx's attacks are Ice Punch, Heart Stamp, and Blizzard. Jynx is the one hundred twenty fourth Pokey-mohn listed in the Canto and National Pokeydex. Jynx makes its major debut in the very first Christmas special, Holiday Hijynx. After the episode's debut in the United States, a woman named Carole Weatherford wrote a letter to four kids entertianment claiming that Jynx is a racial stereotype to the African American people. Ever since then, the epiosde was never aired again, despite it being a Christmas special. After the incident, Jynx's face has been changed to purple for future releases in all Pokey-mohn merchandise. The banned episode can be found on Pokey-mohn video tapes and some DVD's. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electabuzz
        else if (myPokemon == "electabuzz") {
            this.response.speak("Electabuzz is an electric type Pokey-mohn. Electabuzz is the evolved form of Elekid and it evolves into Electivire when traded over while holding an Electirizer. Some of Electabuzz's attacks are Thunder Punch, Discharge, and Thunderbolt. Electabuzz is the one hundred twenty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magmar 
        else if (myPokemon == "magmar") {
            this.response.speak("Mag-mar is a fire type Pokey-mohn. Mag-mar is the evolved form of Magby and it evolves into Magmortar when traded over while holding a Magmarizer. Some of Mag-mar's attacks are Flame Burst, Fire Punch, and Lava Plume. Mag-mar is the one hundred twenty sixth Pokey-mohn listed in the Canto and National Pokeydex. Mag-mar makes its major debut in the anime episode, Riddle Me This, where Ash battles Blaine's Mag-mar in the Cinnabar Island Gym. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pinsir
        else if (myPokemon == "pinsir") {
            this.response.speak("Pinsir is a bug type Pokey-mohn and it can Mega Evolve into Mega Pinsir using the Pinsir-ite. Some of Pinsir's attacks are Seismic Toss, Harden, and X-Scissor. Pinsir is the one hundred twenty seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tauros 
        else if (myPokemon == "tauros") {
            this.response.speak("Taurose is a normal type Pokey-mohn. Even though Taurose does not evolve into another Pokey-mohn, it is believed its a counterpart of Miltank. Some of Taurose's attacks are Rage, Horn Attack, and Take Down. Taurose is the one hundred twenty eighth Pokey-mohn listed in the Canto and National Pokeydex. In the anime episode, The Legend of Drah-tee-nee, Ash and Brock catch a whole lot of Tauroses during their visit in the Safari Zone. They were all sent to Professor Oak's laboratory to run freely in his open field. However, this episode is banned in multiple countries, including the United States for guns being used to shoot and threaten Ash and Team Rocket. There is no English version of this episode. Tauros returns to Ash to battle Drake in the episode Hello Pummelo without any explanation to the people who have not seen Ash catch it in the first place. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magikarp
        else if (myPokemon == "magikarp") {
            this.response.speak("Magikarp is a water type Pokey-mohn and it evolves into Gyarados. Magikarp's attacks are Splash, Tackle and Flail. Magkikarp is the one hundred twenty ninth Pokey-mohn listed in the Canto and Natioanl Pokeydex. The color of a shiny Magikarp is gold and they are very rare to come by. In the anime, James buys a Magikarp from a salesman after he gets tricked in the episode Battle Aboard the Saint Anne. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gyarados
        else if (myPokemon == "gyarados") {
            this.response.speak("Gyarados is a water and flying type Pokey-mohn and it's the evolved form of Magikarp. Some of Gyarados's attacks are Twister, Aqua Tail, and Hurricane. Gyarados is the one hundred thirtieth Pokey-mohn listed in the Canto and National Pokeydex. The color of a shiny Gyarados is red and they are very rare to come by. Gyarados can Mega Evolve into Mega Gyarados using the Gyarados-ite. In the anime, following the events after the Saint Anne in the episode Pokey-mohn Shipwreck, James kicks his Magikarp and it evolves into Gyarados. In anger from this, Gyarados performs a Whirlpool attack and they are both separated forever. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lapras
        else if (myPokemon == "lapras") {
            this.response.speak("Lapras is a water and ice type Pokey-mohn. Some of Lapras's attacks are Ice Shard, Water Pulse, and Ice Beam. Lapras is the one hundred thirty first Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Lapras makes its major debut in the holiday special, Holiday Hijynx, where a talking Lapras helps Ash, Brock, Misty, and Jynx to find Santa Claus. Later on, Ash finally gets his own non-speaking Lapras in the episode The Lost Lapras. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ditto
        else if (myPokemon == "ditto") {
            this.response.speak("Ditto is a normal type Pokey-mohn. Ditto's only move is transform. Once it transforms into a Pokey-mohn it sees, it has the ability to mimic all the attacks from the Pokey-mohn it transformed into. Ditto is the one hundred thirty second Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Ditto makes its debut in the episode, Ditto's Mysterious Mansion, where Do-pleekca and her Ditto perform tricks for other people in their theater. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Eevee
        else if (myPokemon == "eevee") {
            this.response.speak("Eevee is a normal type Pokey-mohn. Eevee can evolve into one of eight different Pokey-mohn depending on the situation. Some of Eevee's attacks are Covet, Quick Attack, and Swift. Eevee is the one hundred thirty third Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Eevee makes its debut in the episode, The Battling Eevee Brothers where Mikey is pressured by his older brothers to evolve his Eevee. Gary's Eevee makes its debut in the episode The Rivalry Revival defeating Ash's Pikachu in a battle. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vaporeon
        else if (myPokemon == "vaporeon") {
            this.response.speak("Vaporeon is a water type Pokey-mohn and it's the evolved form of Eevee when exposed to a Water Stone. Some of Vaporeon's attacks are Water Gun, Water Pulse, and Muddy Water. Vaporeon is the one hundred thirty fourth Pokey-mohn listed in the Canto and Natioanl Pokeydex. In the anime episode, The Battling Eevee Brothers, Vaporeon is owned by one of the brothers named Ray-ner. Ray-ner is also the nickname you give your Eevee when you want it to evolve into Vaporeon in the game Pokey-mohn Go. This trick only works the first time. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jolteon
        else if (myPokemon == "jolteon") {
            this.response.speak("Jolteon is an electric type Pokey-mohn and it's the evolved form of Eevee when exposed to a Thunder Stone. Some of Jolteon's attacks are Thunder Shock, Thunder Fang, and Agility. Jolteon is the one hundred thirty fifth Pokey-mohn listed in the Canto and Natioanl Pokeydex. In the anime episode, The Battling Eevee Brothers, Jolteon is owned by one of the brothers named Sparky. Sparky is also the nickname you give your Eevee when you want it to evolve into Jolteon in the game Pokey-mohn Go. This trick only works the first time. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Flareon
        else if (myPokemon == "flareon") {
            this.response.speak("Flareon is a fire type Pokey-mohn and it's the evolved form of Eevee when exposed to a Fire Stone. Some of Flareon's attacks are Fire Spin, Lava Plume, and Flare Blitz. Flareon is the one hundred thirty sixth Pokey-mohn listed in the Canto and National Pokeydex. In the anime episode, The Battling Eevee Brothers, Flareon is owned by one of the brothers named Pyro. Pyro is also the nickname you give your Eevee when you want it to evolve into Flareon in the game Pokey-mohn Go. This trick only works the first time. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Porygon 
        else if (myPokemon == "porygon") {
            this.response.speak("Porygon is a normal type Pokey-mohn and it evolves into Porygon Two when traded over while holding an Up Grade. Some of Porygon's attacks are Tackle, Try Attack, and Zap Cannon. Porygon is the one hundred thirty seventh Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Porygon makes its major debut and last appearance in the episode Electric Soldier Porygon. In the episode, Ash, Brock, and Misty use Doctor Akihabara's Porygon to go inside the PC to stop Team Rocket from stealing other trainers Pokey-mohn. This episode was banned due to its sequences of rapid bright red blue flashes. After it aired in Japan, over six hundred children were to be transferred to the hospital by ambulances due to having epileptic seizures. This event put a hold on the Pokey-mohn series for about four months. After the incident, the episode has never appeared again in Japan or outside the country. Porygon also never made an appearance in the anime ever again nor do its evolutions ever appear. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Omanyte 
        else if (myPokemon == "omanyte") {
            this.response.speak("Omuh-nite is a rock and water type Pokey-mohn. Omuh-nite ressurrected from a Helix Fossil and it evolves into Omastar. Some of Omuh-nite's attacks are Water Gun, Rollout, and Ancient Power. Omuh-nite is the one hundred thirty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Omastar
        else if (myPokemon == "omastar") {
            this.response.speak("Omastar is a rock and water type Pokey-mohn and it's the evolved form of Omuh-nite. Some of Omastar's attacks are Rock Blast, Shell Smash, and Hydro Pump. Omastar is the one hundred thirty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabuto
        else if (myPokemon == "kabuto") {
            this.response.speak("Kabuto is a rock and water type Pokey-mohn. Kabuto is ressurrected from a Dome Fossil and it evolves into ka-BOO-tops. Some of Kabuto's attacks are Endure, Aqua Jet, and Mega Drain. Kabuto is the one hundred fortieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabutops 
        else if (myPokemon == "kabutops") {
            this.response.speak("ka-BOO-tops is a rock and water type Pokey-mohn and it's the evolved form of Kabuto. Some of ka-BOO-tops attacks are Metal Sound, Ancient Power, and Night Slash. Ka-boo-tops is the one hundred forty first Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Aerodactyl
        else if (myPokemon == "aerodactyl") {
            this.response.speak("Aerodactyl is a rock and flying type Pokey-mohn. Aerodactyl is resurected from an Old Amber and it can Mega Evolve into Mega Aerodactyl using the Aerodactylite. Some of Aerodactyl's attacks are Wing Attack, Ancient Power, and Sky Drop. Aerodactyl is the one hundred forty second Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Aerodactyl makes its debut in the episode Attack of the Prehistoric Pokey-mohn where Ash and Team Rocket get themselves trapped underground. The episode is refrenced in Pokey-mohn Paparazzi where Snap, the photographer says he took a picture of Aerodactyl where it carries Ash away. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Snorlax
        else if (myPokemon == "snorlax") {
            this.response.speak("Snorlax is a normal type Pokey-mohn and it's the evolved form of Munchlax. Snorlax can only wake up when someone plays it a Pokey Flute. Some of Snorlax's attacks are Snore, Sleep Talk, and Giga Impact. Snorlax is the one hundred forty third Pokey-mohn listed in the Canto and National Pokeydex. In the anime episode, Snack Attack, Ash captures a Snorlax after it eats the grapefruits of the Grapefruit Islands. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Articuno
        else if (myPokemon == "articuno") {
            this.response.speak("Articuno is the legendary ice and flying type Pokey-mohn. Some of Articuno's attacks are Power Snow, Freeze Dry, and Blizzard. Articuno is the one hundred forty fourth Pokey-mohn listed in the Canto and National Pokeydex. Articuno makes its major debut in Pokey-mohn The Movie two thousand. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zapdos
        else if (myPokemon == "zapdos") {
            this.response.speak("Zapdos is the legendary electric and flying type Pokey-mohn. Some of Zapdos attacks are Thunder Shock, Drill Peck and Zap Cannon. Zapdos is the one hundred forty fifth Pokey-mohn listed in the Canto and National Pokeydex. Zapdos makes its major debut in Pokey-mohn The Movie Two Thousand. Zapdos also appears again in the anime episode, As Clear as Crystal, where Team Rocket steal a crystal that gives a lake the ability to heal Electric-type Pokey-mohn. They get side-tracked when Zapdos showed up and they changed their objective to capture Zapdos instead. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Moltres
        else if (myPokemon == "moltres") {
            this.response.speak("Moltres is the legendary fire and flying type Pokey-mohn. Some of Moltres attacks are Flamethrower, Air Slash, and Sky Attack. Moltres is the one hundred forty sixth Pokey-mohn listed in the Canto and National Pokeydex. Moltres makes its debut in the anime episode All Fired Up where Ash and the gang head off to the Pokey-mohn League. Moltres later plays a bigger role in Pokey-mohn The Movie Two Thousand. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dratini 
        else if (myPokemon == "dratini") {
            this.response.speak("drah-TEE-nee is a dragon type Pokey-mohn and it evolves into Dragonair. Some of drah-TEE-nee's attacks are Thunder Wave, Twister, and Dragon Rage. Drah-tee-nee is the one hundred forty seventh Pokey-mohn listed in the Canto and National Pokeydex. Drah-tee-nee makes it's debut in the episode, The Legend of Drah-tee-nee. However, this episode is banned in multiple countries, including the United States for guns being used to shoot and threaten Ash and Team Rocket. There is no English version of this episode. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonair
        else if (myPokemon == "dragonair") {
            this.response.speak("Dragonair is a dragon type Pokey-mohn. Dragonair is the evolved form of drah-tee-nee and it evolves into Dragonite. Some of Dragonair's attacks are Dragon Tail, Dragon Rush, and Safeguard. Dragonair is the one hundred forty eighth Pokey-mohn listed in the Canto and National Pokeydex. Dragonair makes it's debut in the episode THe Legend of Drah-tee-nee. However, this episode is banned in multiple countries, including the United States for guns being used to shoot and threaten Ash and Team Rocket. There is no English version of this episode. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonite
        else if (myPokemon == "dragonite") {
            this.response.speak("Dragonite is a dragon and flying type Pokey-mohn and it's the evolved form of Dragonair. Some of Dragonite's attacks are Hyper Beam, Outrage, and Hurricane. Dragonite is the one hundred forty ninth Pokey-mohn listed in the Canto and National Pokeydex. In the anime, Dragonite makes its major debut in the episode Mystery at the Lighthouse, but only seen as silhouette without any of the characters knowing which Pokey-mohn it is. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mewtwo 
        else if (myPokemon == "mewtwo") {
            this.response.speak("Mewtwo is the legendary psychic type Pokey-mohn. Some of Mewtwo's attacks are Future Sight, Psychic Cut, and Psy strike. Mewtwo is the one hundred fiftieth Pokey-mohn listed in the Canto and National Pokeydex. Mewtwo makes its major debut in Pokey-mohn The First Movie and makes its second appearance in the title role Mewtwo Returns. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mew
        else if (myPokemon == "mew") {
            this.response.speak("Mew is the legendary psychic type Pokey-mohn. Some of Mew's attacks are pound, psychic, and ancient power. Mew is the one hundred fifty first Pokey-mohn listed in the Canto and National Pokeydex. It is actually the very last Pokey-mohn in the Canto Pokeydex. It is capable to learn any attack another Pokey-mohn can learn or do. Mew makes its major debut in Pokey-mohn The First Movie and reprises its role in the movie Lucario and the Mystery of Mew. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Missingno
        else if (myPokemon == "missingno") {
            this.response.speak("Missingno is a Pokey-mohn glitch in the games Red and Blue. According to the games, it is number zero listed in the Canto and National Pokeydex. Missingno is a normal and flying type Pokey-mohn and it only evolves into Kangaskhan when a Rare Candy is used on it in Blue Version. It is believed that Missingno represented an idea for kangaskhan's pre-evolution to be the baby inside the pouch since it only evolves into kangaskhan. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        else {
            this.response.speak("There is no data. There are still Pokey-mohn yet to be identified.");
        }
      
    this.emit(':responseReady');
  },
    
    'TypeIntent': function () {
        var myPokemon = this.event.request.intent.slots.pokemon.value;
      
        // Bulbasaur 
        if (myPokemon == "bulbasaur") {
            this.response.speak("Bulbusaur is a grass and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ivysaur
        else if (myPokemon == "ivysaur") {
            this.response.speak("Ivysaur is a grass and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venusaur
        else if (myPokemon == "venusaur") {
            this.response.speak("Venusaur is a grass and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmander
        else if (myPokemon == "charmander") {
            this.response.speak("Charmander is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmeleon
        else if (myPokemon == "charmeleon") {
            this.response.speak("Charmeleon is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charizard
        else if (myPokemon == "charizard") {
            this.response.speak("Charizard is a fire and flying type. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Squirtle
        else if (myPokemon == "squirtle") {
            this.response.speak("Squirtle is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wartortle
        else if (myPokemon == "wartortle") {
            this.response.speak("Wartortle is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Blastoise 
        else if (myPokemon == "blastoise") {
            this.response.speak("Blastoys is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Caterpie
        else if (myPokemon == "caterpie") {
            this.response.speak("Caterpie is a bug type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Metapod
        else if (myPokemon == "metapod") {
            this.response.speak("Metapod is a bug type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Butterfree
        else if (myPokemon == "butterfree") {
            this.response.speak("Butterfree is a bug and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weedle
        else if (myPokemon == "weedle") {
            this.response.speak("Weedle is a bug and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kakuna 
        else if (myPokemon == "kakuna") {
            this.response.speak("Kukuna is a bug and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Beedrill
        else if (myPokemon == "beedrill") {
            this.response.speak("Beedrill is a bug and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgey 
        else if (myPokemon == "pidgey") {
            this.response.speak("Pidgey is a normal and flying type Pokey-mohn.");
        }
      
        // Pidgeotto 
        else if (myPokemon == "pidgeotto") {
            this.response.speak("Pidjyotoe is a normal and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgeot 
        else if (myPokemon == "pidgeot") {
            this.response.speak("Pidgeeaught is a normal and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rattata 
        else if (myPokemon == "rattata") {
            this.response.speak("Rattata is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raticate
        else if (myPokemon == "raticate") {
            this.response.speak("Raticate is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Spearow
        else if (myPokemon == "spearow") {
            this.response.speak("Spearow is a normal and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Fearow
        else if (myPokemon == "fearow") {
            this.response.speak("Fearow is a normal and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ekans 
        else if (myPokemon == "eckens") {
            this.response.speak("Eckehns is a poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arbok
        else if (myPokemon == "arbok") {
            this.response.speak("Arbok is a poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pikachu 
        else if (myPokemon == "pikachew") {
            this.response.speak("Pikachu is an electric type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raichu 
        else if (myPokemon == "raichu") {
            this.response.speak("Raichu is an electric type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandshrew
        else if (myPokemon == "sandshrew") {
            this.response.speak("Sandshrew is a ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandslash
        else if (myPokemon == "sandslash") {
            this.response.speak("Sandslash is a ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoran female and male 
        else if (myPokemon == "nidoran") {
            this.response.speak("Needoorann is a poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorina 
        else if (myPokemon == "nidorina") {
            this.response.speak("Needooreenuh is a poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoqueen
        else if (myPokemon == "nidoqueen") {
            this.response.speak("Needoqueen is a poison and ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorino 
        else if (myPokemon == "nidorino") {
            this.response.speak("Needooreeno is a poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoking 
        else if (myPokemon == "nidoking") {
            this.response.speak("Needoking is a poison and ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Clefairy 
        else if (myPokemon == "clefairy") {
            this.response.speak("Cluhfairee is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
    
        // Clefable 
        else if (myPokemon == "cluhfaybull") {
            this.response.speak("Cluhfaybull is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vulpix
        else if (myPokemon == "vulpix") {
            this.response.speak("Vulpix is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ninetales
        else if (myPokemon == "ninetales") {
            this.response.speak("Ninetales is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jigglypuff
        else if (myPokemon == "jigglypuff") {
            this.response.speak("Jigglypuff is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wigglytuff
        else if (myPokemon == "wigglytuff") {
            this.response.speak("Wigglytuff is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zubat
        else if (myPokemon == "zubat") {
            this.response.speak("Zubat is a poison and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golbat
        else if (myPokemon == "golbat") {
            this.response.speak("Golbat is a poison and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Oddish
        else if (myPokemon == "oddish") {
            this.response.speak("Oddish is a grass and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gloom
        else if (myPokemon == "gloom") {
            this.response.speak("Gloom is a grass and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vileplume
        else if (myPokemon == "vileplume") {
            this.response.speak("Vileplume is a grass and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Paras
        else if (myPokemon == "paras") {
            this.response.speak("Paras is a bug and grass type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Parasect
        else if (myPokemon == "parasect") {
            this.response.speak("Parasect is a bug and grass type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venonat
        else if (myPokemon == "venonat") {
            this.response.speak("VENN-oh-nat is a bug and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venomoth 
        else if (myPokemon == "venomoth") {
            this.response.speak("Venn-oh-moth is a bug and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Diglett
        else if (myPokemon == "diglett") {
            this.response.speak("Diglett is a ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dugtrio
        else if (myPokemon == "dugtrio") {
            this.response.speak("Dugtrio is a ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Meowth
        else if (myPokemon == "meowth") {
            this.response.speak("Meowth is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Persian 
        else if (myPokemon == "purrshin") {
            this.response.speak("Purr-shin is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Psyduck
        else if (myPokemon == "psyduck") {
            this.response.speak("Psyduck is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golduck
        else if (myPokemon == "golduck") {
            this.response.speak("Golduck is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mankey
        else if (myPokemon == "mankey") {
            this.response.speak("Mank-ey is a fighting type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Primeape 
        else if (myPokemon == "primeape") {
            this.response.speak("Prime-ape is a fighting type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Growlithe 
        else if (myPokemon == "growlithe") {
            this.response.speak("Growl-ith is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arcanine 
        else if (myPokemon == "arcanine") {
            this.response.speak("ar-kuh-NINE is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwag 
        else if (myPokemon == "poliwag") {
            this.response.speak("Pol-ee-wag is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwhirl 
        else if (myPokemon == "poliwhirl") {
            this.response.speak("Pol-ee-wurl is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwrath 
        else if (myPokemon == "poliwrath") {
            this.response.speak("Pol-ee-rath is a water and fighting type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Abra 
        else if (myPokemon == "abruh") {
            this.response.speak("Abra is a psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kadabra
        else if (myPokemon == "kadabra") {
            this.response.speak("Kadabra is a psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Alakazam
        else if (myPokemon == "alakazam") {
            this.response.speak("Alakazam is a psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machop
        else if (myPokemon == "machop") {
            this.response.speak("Machop is a fighting type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machoke
        else if (myPokemon == "machoke") {
            this.response.speak("Machoke is a fighting type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machamp 
        else if (myPokemon == "machamp") {
            this.response.speak("Ma-champ is a fighting type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Bellsprout
        else if (myPokemon == "bellsprout") {
            this.response.speak("Bellsprout is a grass and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weepinbell
        else if (myPokemon == "weepinbell") {
            this.response.speak("Weepinbell is a grass and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Victreebel 
        else if (myPokemon == "victreebel") {
            this.response.speak("VICK-tree-bell is a grass and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacool
        else if (myPokemon == "tentacool") {
            this.response.speak("Tentacool is a water and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacruel
        else if (myPokemon == "tentacruel") {
            this.response.speak("Tentacruel is a water and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Geodude
        else if (myPokemon == "geodude") {
            this.response.speak("Geodude is a rock and ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Graveler
        else if (myPokemon == "graveler") {
            this.response.speak("Graveler is a rock and ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golem
        else if (myPokemon == "golem") {
            this.response.speak("Golem is a rock and ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ponyta
        else if (myPokemon == "ponyta") {
            this.response.speak("Ponyta is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rapidash
        else if (myPokemon == "rapidash") {
            this.response.speak("Rapidash is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowpoke
        else if (myPokemon == "slowpoke") {
            this.response.speak("Slowpoke is a water and psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowbro
        else if (myPokemon == "slowbro") {
            this.response.speak("Slowbro is a water and psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magnemite 
        else if (myPokemon == "magnemite") {
            this.response.speak("MAG-nuh-mite is an electric and steel type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magneton
        else if (myPokemon == "magneton") {
            this.response.speak("Magneton is an electric and steel type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Farfetchd
        else if (myPokemon == "farfetchd") {
            this.response.speak("Farfetchd is a normal and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Doduo
        else if (myPokemon == "doduo") {
            this.response.speak("Doduo is a normal and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dodrio 
        else if (myPokemon == "dodrio") {
            this.response.speak("Doh-dree-oh is a normal and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seel
        else if (myPokemon == "seel") {
            this.response.speak("Seel is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dewgong
        else if (myPokemon == "dewgong") {
            this.response.speak("Dewgong is a water and ice type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Grimer
        else if (myPokemon == "grimer") {
            this.response.speak("Grimer is a poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Muk 
        else if (myPokemon == "muk") {
            this.response.speak("Muck is a poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Shellder 
        else if (myPokemon == "shellder") {
            this.response.speak("Shellder is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cloyster
        else if (myPokemon == "cloyster") {
            this.response.speak("Cloyster is a water and ice type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gastly
        else if (myPokemon == "gastly") {
            this.response.speak("Gastly is a ghost and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Haunter
        else if (myPokemon == "haunter") {
            this.response.speak("Haunter is a ghost and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gengar
        else if (myPokemon == "gengar") {
            this.response.speak("Gengar is a ghost and poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Onix
        else if (myPokemon == "onix") {
            this.response.speak("Onix is a rock and ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Drowzee
        else if (myPokemon == "drowzee") {
            this.response.speak("Drowzee is a psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hypno
        else if (myPokemon == "hypno") {
            this.response.speak("Hypno is a psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Krabby
        else if (myPokemon == "crabby") {
            this.response.speak("Crabby is a water type Pokey-mohn and it evolves into Kingler. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kingler 
        else if (myPokemon == "kingler") {
            this.response.speak("Kingler is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Voltorb
        else if (myPokemon == "voltorb") {
            this.response.speak("Voltorb is an electric type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electrode
        else if (myPokemon == "electrode") {
            this.response.speak("Electrode is an electric type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggcute
        else if (myPokemon == "exeggcute") {
            this.response.speak("EGGS-egg-cute is a grass and psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggutor 
        else if (myPokemon == "eggseggyoutor") {
            this.response.speak("Eggs-EGG-you-tor  is a grass and psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cubone
        else if (myPokemon == "cubone") {
            this.response.speak("Cubone is a ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Marowak 
        else if (myPokemon == "marowak") {
            this.response.speak("MARe-ow-wack is a ground type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonlee 
        else if (myPokemon == "hitmonlee") {
            this.response.speak("Hit-mon-lee is a fighting type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonchan 
        else if (myPokemon == "hitmonchan") {
            this.response.speak("Hit-mon-chan is a fighting type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lickitung
        else if (myPokemon == "lickitung") {
            this.response.speak("Lickitung is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Koffing
        else if (myPokemon == "koffing") {
            this.response.speak("Koffing is a poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weezing
        else if (myPokemon == "weezing") {
            this.response.speak("Weezing is a poison type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhyhorn
        else if (myPokemon == "rhyhorn") {
            this.response.speak("Rhyhorn is a ground and rock type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhydon 
        else if (myPokemon == "rhydon") {
            this.response.speak("Rhydonn is a ground and rock type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Chansey
        else if (myPokemon == "chansey") {
            this.response.speak("Chansey is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tangela 
        else if (myPokemon == "tangguhluh") {
            this.response.speak("TANG-guh-luh is a grass type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kangaskhan
        else if (myPokemon == "kangaskhan") {
            this.response.speak("Kangaskhan is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Horsea 
        else if (myPokemon == "horsea") {
            this.response.speak("HORSE-ee is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        else if (myPokemon == "seadra") {
            this.response.speak("Seadra is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Goldeen
        else if (myPokemon == "goldeen") {
            this.response.speak("Goldeen is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seaking
        else if (myPokemon == "seaking") {
            this.response.speak("Seaking is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Staryu
        else if (myPokemon == "staryu") {
            this.response.speak("Staryu is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Starmie 
        else if (myPokemon == "starmie") {
            this.response.speak("Starmie is a water and psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mr. Mime
        else if (myPokemon == "mister mime") {
            this.response.speak("Mister Mime is a psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Scyther 
        else if (myPokemon == "scyther") {
            this.response.speak("Scyther is a bug and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jynx
        else if (myPokemon == "jynx") {
            this.response.speak("Jynx is an ice and psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electabuzz
        else if (myPokemon == "electabuzz") {
            this.response.speak("Electabuzz is an electric type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magmar 
        else if (myPokemon == "magmar") {
            this.response.speak("Mag-mar is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pinsir
        else if (myPokemon == "pinsir") {
            this.response.speak("Pinsir is a bug type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tauros 
        else if (myPokemon == "tauros") {
            this.response.speak("Taurose is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magikarp
        else if (myPokemon == "magikarp") {
            this.response.speak("Magikarp is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gyarados
        else if (myPokemon == "gyarados") {
            this.response.speak("Gyarados is a water and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lapras
        else if (myPokemon == "lapras") {
            this.response.speak("Lapras is a water and ice type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ditto
        else if (myPokemon == "ditto") {
            this.response.speak("Ditto is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Eevee
        else if (myPokemon == "eevee") {
            this.response.speak("Eevee is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vaporeon
        else if (myPokemon == "vaporeon") {
            this.response.speak("Vaporeon is a water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jolteon
        else if (myPokemon == "jolteon") {
            this.response.speak("Jolteon is an electric type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Flareon
        else if (myPokemon == "flareon") {
            this.response.speak("Flareon is a fire type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Porygon 
        else if (myPokemon == "porygon") {
            this.response.speak("Porygon is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Omanyte 
        else if (myPokemon == "omanyte") {
            this.response.speak("Omuh-nite is a rock and water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Omastar
        else if (myPokemon == "omastar") {
            this.response.speak("Omastar is a rock and water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabuto
        else if (myPokemon == "kabuto") {
            this.response.speak("Kabuto is a rock and water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabutops 
        else if (myPokemon == "kabutops") {
            this.response.speak("ka-BOO-tops is a rock and water type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Aerodactyl
        else if (myPokemon == "aerodactyl") {
            this.response.speak("Aerodactyl is a rock and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Snorlax
        else if (myPokemon == "snorlax") {
            this.response.speak("Snorlax is a normal type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Articuno
        else if (myPokemon == "articuno") {
            this.response.speak("Articuno is the legendary ice and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zapdos
        else if (myPokemon == "zapdos") {
            this.response.speak("Zapdos is the legendary electric and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Moltres
        else if (myPokemon == "moltres") {
            this.response.speak("Moltres is the legendary fire and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dratini // FIX NAME
        else if (myPokemon == "dratini") {
            this.response.speak("drah-TEE-nee is a dragon type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonair
        else if (myPokemon == "dragonair") {
            this.response.speak("Dragonair is a dragon type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonite
        else if (myPokemon == "dragonite") {
            this.response.speak("Dragonite is a dragon and flying type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mewtwo 
        else if (myPokemon == "mewtwo") {
            this.response.speak("Mewtwo is the legendary psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mew
        else if (myPokemon == "mew") {
            this.response.speak("Mew is the legendary psychic type Pokey-mohn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        else {
            this.response.speak("There is no data. There are still Pokey-mohn yet to be identified.");
        }
      
    this.emit(':responseReady');
  },
    'AttacksIntent': function () {
        var myPokemon = this.event.request.intent.slots.pokemon.value;
      
        // Bulbasaur 
        if (myPokemon == "bulbasaur") {
            this.response.speak("Some of Bulbusaur's attacks are tackle, leech seed, and vine whip. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ivysaur
        else if (myPokemon == "ivysaur") {
            this.response.speak("Some of Ivysaur's attacks are razor leaf, sweet scent, and double edge. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venusaur
        else if (myPokemon == "venusaur") {
            this.response.speak("Some of Venusaur's attacks are worry seed, synthesis, and solar beam. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmander
        else if (myPokemon == "charmander") {
            this.response.speak("Some of Charmander's attacks are scratch, ember, and smokescreen. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmeleon
        else if (myPokemon == "charmeleon") {
            this.response.speak("Some of Charmeleon's attacks are dragon rage, fire fang, and flame burst. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charizard
        else if (myPokemon == "charizard") {
            this.response.speak("Some of Charizard's attacks are slash, flamethrower, and fire spin. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Squirtle
        else if (myPokemon == "squirtle") {
            this.response.speak("Some of Squirtle's attacks are tackle, water gun, and bubble. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wartortle
        else if (myPokemon == "wartortle") {
            this.response.speak("Some of Wartortle's attacks are bite, water pulse, and aqua tail. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Blastoise 
        else if (myPokemon == "blastoise") {
            this.response.speak("Some of Blastoys' attacks are skull bash, iron defense, and hydro pump. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Caterpie
        else if (myPokemon == "caterpie") {
            this.response.speak("Caterpie's attacks are tackle, string shot, and bug bite. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Metapod
        else if (myPokemon == "metapod") {
            this.response.speak("Metapod's only attack is harden. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Butterfree
        else if (myPokemon == "butterfree") {
            this.response.speak("Some of Butterfree's attacks are gust, confusion, and poison powder. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weedle
        else if (myPokemon == "weedle") {
            this.response.speak("Weedle's attacks are poison sting, string shot, and bug bite. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kakuna 
        else if (myPokemon == "kakuna") {
            this.response.speak("Kukuna's only attack is harden. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Beedrill
        else if (myPokemon == "beedrill") {
            this.response.speak("Some of Beedrill's attacks are twineedle, venoshock, and poison jab. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgey 
        else if (myPokemon == "pidgey") {
            this.response.speak("Some of Pidgey's attacks are tackle, gust, and quick attack. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgeotto 
        else if (myPokemon == "pidgeotto") {
            this.response.speak("Some of Pidjyotoe's attacks are twister, feather dance, and agility. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgeot 
        else if (myPokemon == "pidgeot") {
            this.response.speak("Some of Pidgeeaught's attacks are wing attack, air slash, and hurricane. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rattata 
        else if (myPokemon == "rattata") {
            this.response.speak("Some of Rattata's attacks are tackle, quick attack, and hyper fang. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raticate
        else if (myPokemon == "raticate") {
            this.response.speak("Some of Raticate's attacks are Super Fang, Double Edge, and Endeavor. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Spearow
        else if (myPokemon == "spearow") {
            this.response.speak("Some of Spearow's attacks are peck, fury attack, and aerial ace. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Fearow
        else if (myPokemon == "fearow") {
            this.response.speak("Some of Fearow's attacks are agility, drill peck, and drill run. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ekans 
        else if (myPokemon == "eckens") {
            this.response.speak("Some of Eckehns attacks are wrap, poison sting, and acid. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arbok
        else if (myPokemon == "arbok") {
            this.response.speak("Some of Arbok's attacks are acid spray, belch, and gunk shot. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pikachu 
        else if (myPokemon == "pikachew") {
            this.response.speak("Some of Pikachu's attacks are thunder shock, iron tail, and electro ball. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raichu 
        else if (myPokemon == "raichu") {
            this.response.speak("Some of Raichu's attacks are thunder shock, quick attack, and thunderbolt. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandshrew
        else if (myPokemon == "sandshrew") {
            this.response.speak("Some of Sandshrew's attacks are scratch, rollout, and magnitude. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandslash
        else if (myPokemon == "sandslash") {
            this.response.speak("Some of Sandslash's attacks are sand tomb, dig, and earthquake. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoran female and male 
        else if (myPokemon == "nidoran") {
            this.response.speak("Some of the attacks for the blue female Needoorann are scratch, double kick, and poison sting. Some of the attacks for the purple male Needoorann are peck, double kick, and poison sting. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorina 
        else if (myPokemon == "nidorina") {
            this.response.speak("Some of Needooreenuh's attacks are fury swipes, bite, and toxic spikes. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoqueen
        else if (myPokemon == "nidoqueen") {
            this.response.speak("Some of Needoqueen's attacks are body slam, earth power, and super power. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorino 
        else if (myPokemon == "nidorino") {
            this.response.speak("Some of Needooreeno's attacks are fury attack, horn attack, and toxic spikes. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoking 
        else if (myPokemon == "nidoking") {
            this.response.speak("Some of Needoking's attacks are thrash, earth power, and mega horn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Clefairy 
        else if (myPokemon == "clefairy") {
            this.response.speak("Some of Cluhfairee's attacks are Disarming Voice, sing, and double slap. Would you like to learn about another Pokey-mohn?").listen();
        }
    
        // Clefable 
        else if (myPokemon == "cluhfaybull") {
            this.response.speak("Some of Cluhfaybull's attacks are metronome, body slam, and moon blast. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vulpix
        else if (myPokemon == "vulpix") {
            this.response.speak("Some of Vulpix's attacks are ember, fire spin, and flame burst. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ninetales
        else if (myPokemon == "ninetales") {
            this.response.speak("Some of Ninetales attacks are flamethrower, confuse ray, and safeguard. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jigglypuff
        else if (myPokemon == "jigglypuff") {
            this.response.speak("Some of Jigglypuff's attacks are sing, pound, and rollout. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wigglytuff
        else if (myPokemon == "wigglytuff") {
            this.response.speak("Some of Wigglytuff's attacks are double edge, play rough, and dobule slap. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zubat
        else if (myPokemon == "zubat") {
            this.response.speak("Some of Zubat's attacks are super sonic, wing attack, and air cutter. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golbat
        else if (myPokemon == "golbat") {
            this.response.speak("Some of Goldbat's attacks are vpoison fang, venoshock, and air slash. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Oddish
        else if (myPokemon == "oddish") {
            this.response.speak("Some of Oddish's attacks are absorb, acid, and mega drain. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gloom
        else if (myPokemon == "gloom") {
            this.response.speak("Some of Gloom's attacks are Giga Drain, Toxic, and Natural Gift. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vileplume
        else if (myPokemon == "vileplume") {
            this.response.speak("Some of Vileplume's attacks are Petal Blizzard, Petal Dance, and Solar Beam. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Paras
        else if (myPokemon == "paras") {
            this.response.speak("Some of Paras attacks are Stun Spore, Absorb, Poison Powder, and Absorb. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Parasect
        else if (myPokemon == "parasect") {
            this.response.speak("Some of Parasect's attacks are Growth, Giga Drain, and X Scissor. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venonat
        else if (myPokemon == "venonat") {
            this.response.speak("Some of VENN-oh-nat's attacks are foresight, confusion, and signal beam. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venomoth 
        else if (myPokemon == "venomoth") {
            this.response.speak("Some of Venn-oh-moth's attacks are leech life, poison fang, and bug buzz. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Diglett
        else if (myPokemon == "diglett") {
            this.response.speak("Some of Diglett's attacks are mud slap, bulldoze, and mud bomb. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dugtrio
        else if (myPokemon == "dugtrio") {
            this.response.speak("Some of Dugtrio's attacks are Earth Power, Dig and Earthquake. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Meowth
        else if (myPokemon == "meowth") {
            this.response.speak("Some of Meowth's attacks are scratch, fake out, and fury swipes. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Persian 
        else if (myPokemon == "purrshin") {
            this.response.speak("Some of Purr-shin's attacks are Slash, Assurance, and Feint. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Psyduck
        else if (myPokemon == "psyduck") {
            this.response.speak("Some of Psyduck's attacks are Water Gun, Water Pulse, and Aqua Tail. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golduck
        else if (myPokemon == "golduck") {
            this.response.speak("Some of Golduck's attacks are Psych Up, Hydro Pump, and Wonder Room. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mankey
        else if (myPokemon == "mankey") {
            this.response.speak("Some of Mank-ey's attacks are Low Kick, Karate Chop, and Cross Chop. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Primeape 
        else if (myPokemon == "primeape") {
            this.response.speak("Some of Prime-ape's attacks are Punishment, Close Combat, and Final Gambit. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Growlithe 
        else if (myPokemon == "growlithe") {
            this.response.speak("Some of Growl-ith's attacks are Ember, Flame Wheel, and Flamethrower. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arcanine 
        else if (myPokemon == "arcanine") {
            this.response.speak("Some of ar-kuh-NINE's attacks are Odor Sleuth, Fire Fang, and Extreme Speed. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwag 
        else if (myPokemon == "poliwag") {
            this.response.speak("Some of Pol-ee-wag's attacks are Water Gun, Bubble, and Rain Dance. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwhirl 
        else if (myPokemon == "poliwhirl") {
            this.response.speak("Some of Pol-ee-wurl's attacks are Body Slam, Bubble Beam, and Mud Shot. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwrath 
        else if (myPokemon == "poliwrath") {
            this.response.speak("Some of Pol-ee-rath's attacks are Submission, Dynamic Punch, and Circle Throw. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Abra 
        else if (myPokemon == "abruh") {
            this.response.speak("Abra's only attack is Teleport. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kadabra
        else if (myPokemon == "kadabra") {
            this.response.speak("Some of Kadabra's attacks are Confusion, Psybeam, and Psycho Cut. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Alakazam
        else if (myPokemon == "alakazam") {
            this.response.speak("Some of Alakazam's attacks are Psychic, Calm Mind, and Future Sight. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machop
        else if (myPokemon == "machop") {
            this.response.speak("Some of Machop's attacks are Low Kick, Karate Chop, and Revenge. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machoke
        else if (myPokemon == "machoke") {
            this.response.speak("Some of Machoke's attacks are Submission, Cross Chop, and Scary Face. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machamp 
        else if (myPokemon == "machamp") {
            this.response.speak("Some of Ma-champ's attacks are Dual Chop, Bulk Up, and Dynamic Punch. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Bellsprout
        else if (myPokemon == "bellsprout") {
            this.response.speak("Some of Bellsprout's attacks are Vine Whip, Sleep Powder, and Poison Powder. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weepinbell
        else if (myPokemon == "weepinbell") {
            this.response.speak("Some of Weepinbell's attacks are Razor Leaf, Poison Jab, and Wring Out. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Victreebel 
        else if (myPokemon == "victreebel") {
            this.response.speak("Some of VICK-tree-bell's attacks are Leaf Tornado, Leaf Storm, and Leaf Blade. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacool
        else if (myPokemon == "tentacool") {
            this.response.speak("Some of Tentacool's attacks are Poison Sting, Water Pulse, and Acid Spray. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacruel
        else if (myPokemon == "tentacruel") {
            this.response.speak("Some of Tentacruel's attacks are Brine, Sludge Wave, and Hydro Pump. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Geodude
        else if (myPokemon == "geodude") {
            this.response.speak("Some of Geodude's attacks are Rollout, Rock Throw, and Smack Down. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Graveler
        else if (myPokemon == "graveler") {
            this.response.speak("Some of Graveler's attacks are Rock Blast, Earthquake, and Explosion. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golem
        else if (myPokemon == "golem") {
            this.response.speak("Some of Graveler's attacks are Double Edge, Stone Edge, and Heavy Slam. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ponyta
        else if (myPokemon == "ponyta") {
            this.response.speak("Some of Ponyta's attacks are Ember, Flame Charge, and Fire Spin. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rapidash
        else if (myPokemon == "rapidash") {
            this.response.speak("Some of Rapidash's attacks are Fire Blast, Bounce, and Flare Blitz. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowpoke
        else if (myPokemon == "slowpoke") {
            this.response.speak("Some of Slowpoke's attacks are Water Gun, Confusion, and Zen Headbutt. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowbro
        else if (myPokemon == "slowbro") {
            this.response.speak("Some of Slowbro's attacks are Amnesia, Psychic, and Heal Pulse. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magnemite 
        else if (myPokemon == "magnemite") {
            this.response.speak("Some of MAG-nuh-mite's attacks are Thunder Shock, Magnet Bomb, and Spark. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magneton
        else if (myPokemon == "magneton") {
            this.response.speak("Some of Magneton's attacks are Discharge, Gyro Ball, and Zap Cannon. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Farfetchd
        else if (myPokemon == "farfetchd") {
            this.response.speak("Some of Farfetchd attacks are Fury Attack, Air Cutter, and Brave Bird. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Doduo
        else if (myPokemon == "doduo") {
            this.response.speak("Some of Doduo's attacks are Pluck, Double Hit, and Uproar. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dodrio 
        else if (myPokemon == "dodrio") {
            this.response.speak("Some of Doh-dree-oh's attacks are Jump Kick, Drill Peck, and Thrash. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seel
        else if (myPokemon == "seel") {
            this.response.speak("Some of Seel's attacks are Icy Wind, Aqua Jet, and Brine. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dewgong
        else if (myPokemon == "dewgong") {
            this.response.speak("Some of Dewgong's attacks are Dive, Aqua Tail, and Ice Beam. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Grimer
        else if (myPokemon == "grimer") {
            this.response.speak("Some of Grimer's attacks are Sludge, Sludge Bomb, and Sludge Wave. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Muk 
        else if (myPokemon == "muk") {
            this.response.speak("Some of Muck's attacks are Gunk Shot, Acid Armor, and Belch. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Shellder 
        else if (myPokemon == "shellder") {
            this.response.speak("Some of Shelder's attacks are Water Gun, Clamp, and Razor Shell. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cloyster
        else if (myPokemon == "cloyster") {
            this.response.speak("Some of Cloyster's attacks are Hydro Pump, Aurora Beam, and Icicle Crash. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gastly
        else if (myPokemon == "gastly") {
            this.response.speak("Some of Gastly's attacks are Lick, Curse, and Night Shade. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Haunter
        else if (myPokemon == "haunter") {
            this.response.speak("Some of Haunter's attacks are Shadow Ball, Dream Eater, and Dark Pulse. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gengar
        else if (myPokemon == "gengar") {
            this.response.speak("Some of Gengar's attacks are Destiny Bond, Hex, and Nightmare. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Onix
        else if (myPokemon == "onix") {
            this.response.speak("Some of Onix's attacks are Bind, Rock Throw, and Smack Down. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Drowzee
        else if (myPokemon == "drowzee") {
            this.response.speak("Some of Drowzee's attacks are Hypnosis, Confusion, and Psybeam. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hypno
        else if (myPokemon == "hypno") {
            this.response.speak("Some of Hypno's attacks are Synchronoise, Psyshock, and Future Sight. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Krabby 
        else if (myPokemon == "crabby") {
            this.response.speak("Some of Crabby's attacks are Vice Grip, Bubble Beam, and Metal Claw. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kingler 
        else if (myPokemon == "kingler") {
            this.response.speak("Some of Kingler's attacks are Guillotine, Brine, and Crab hammer. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Voltorb
        else if (myPokemon == "voltorb") {
            this.response.speak("Some of Voltorb's attacks are Spark, Charge Beam, and Electro Ball. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electrode
        else if (myPokemon == "electrode") {
            this.response.speak("Some of Electrode's attacks are Light Screen, Discharge, and Explosion. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggcute
        else if (myPokemon == "exeggcute") {
            this.response.speak("Some of EGGS-egg-cute's attacks are Leech Seed, Bullet Seed, and Stun Spore. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggutor 
        else if (myPokemon == "eggseggyoutor") {
            this.response.speak("Some of Eggs-EGG-you-tor 's attacks are Egg Bomb, Wood Hammer, and Leaf Storm. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cubone
        else if (myPokemon == "cubone") {
            this.response.speak("Some of Cubone's attacks are Bone Club, Focus Energy, and Bonemerang. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Marowak 
        else if (myPokemon == "marowak") {
            this.response.speak("Some of MARe-ow-wack's attacks are Stomping Tantrum, Endeavor, and Bone Rush. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonlee 
        else if (myPokemon == "hitmonlee") {
            this.response.speak("Some of Hit-mon-lee's attacks are High Jump Kick, Close Combat, and Reversal. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonchan 
        else if (myPokemon == "hitmonchan") {
            this.response.speak("Some of Hit-mon-chan's attacks are Vacuum Wave, Sky Uppercut, and Focus Punch. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lickitung
        else if (myPokemon == "lickitung") {
            this.response.speak("Some of Lickitung's attacks are Wrap, Stomp, and Chip Away. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Koffing
        else if (myPokemon == "koffing") {
            this.response.speak("Some of Koffing's attacks are Smog, Sludge, and Sludge Bomb. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weezing
        else if (myPokemon == "weezing") {
            this.response.speak("Some of Weezing's attacks are Destiny Bond, Belch, and Memento. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhyhorn
        else if (myPokemon == "rhyhorn") {
            this.response.speak("Some of Rhyhorn's attacks are Rock Blast, Drill Run, and Stone Edge. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhydon 
        else if (myPokemon == "rhydon") {
            this.response.speak("Some of Rhydonn's attacks are Earthquake, Megahorn, and Horn Drill. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Chansey
        else if (myPokemon == "chansey") {
            this.response.speak("Some of Chansey's attacks are Double Slap, Take Down, and Egg Bomb. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tangela 
        else if (myPokemon == "tangguhluh") {
            this.response.speak("Some of TANG-guh-luh's attacks are Vine Whip, Absorb, and Mega Drain. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kangaskhan
        else if (myPokemon == "kangaskhan") {
            this.response.speak("Some of Kangaskhan's attacks are Comet Punch, Fake Out, and Dizzy Punch. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Horsea 
        else if (myPokemon == "horsea") {
            this.response.speak("Some of HORSE-ee's attacks are Water Gun, Bubble Beam, and Brine. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        else if (myPokemon == "seadra") {
            this.response.speak("Some of Seadra's attacks are Dragon Pulse, Dragon Dance, and Hydro Pump. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Goldeen
        else if (myPokemon == "goldeen") {
            this.response.speak("Some of Goldeen's attacks are Horn Attack, Water Pulse, and Waterfall. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seaking
        else if (myPokemon == "seaking") {
            this.response.speak("Some of Seaking's attacks are Horn Drill, Soak, and Megahorn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Staryu
        else if (myPokemon == "staryu") {
            this.response.speak("Some of Staryu's attacks are Water Gun, Bubble Beam, and Brine. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Starmie 
        else if (myPokemon == "starmie") {
            this.response.speak("Some of Starmie's attacks are Raid Spin, Recover and Hydro Pump. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mr. Mime
        else if (myPokemon == "mister mime") {
            this.response.speak("Some of Mister Mime's attacks are Barrier, Psywave, and Psychic. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Scyther 
        else if (myPokemon == "scyther") {
            this.response.speak("Some of Scyther's attacks are Wing Attack, Fury Cutter, and Air Slash. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jynx
        else if (myPokemon == "jynx") {
            this.response.speak("Some of Jynx's attacks are Ice Punch, Heart Stamp, and Blizzard. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electabuzz
        else if (myPokemon == "electabuzz") {
            this.response.speak("Some of Electabuzz's attacks are Thunder Punch, Discharge, and Thunderbolt. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magmar 
        else if (myPokemon == "magmar") {
            this.response.speak("Some of Mag-mar's attacks are Flame Burst, Fire Punch, and Lava Plume. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pinsir
        else if (myPokemon == "pinsir") {
            this.response.speak("Some of Pinsir's attacks are Seismic Toss, Harden, and X-Scissor. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tauros 
        else if (myPokemon == "tauros") {
            this.response.speak("Some of Taurose attacks are Rage, Horn Attack, and Take Down. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magikarp
        else if (myPokemon == "magikarp") {
            this.response.speak("Magikarp's attacks are Splash, Tackle and Flail. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gyarados
        else if (myPokemon == "gyarados") {
            this.response.speak("Some of Gyarados attacks are Twister, Aqua Tail, and Hurricane. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lapras 
        else if (myPokemon == "lapras") {
            this.response.speak("Some of Lapras's attacks are Ice Shard, Water Pulse, and Ice Beam. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ditto
        else if (myPokemon == "ditto") {
            this.response.speak("Ditto's only move is transform. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Eevee
        else if (myPokemon == "eevee") {
            this.response.speak("Some of Eevee's attacks are Covet, Quick Attack, and Swift. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vaporeon
        else if (myPokemon == "vaporeon") {
            this.response.speak("Some of Vaporeon's attacks are Water Gun, Water Pulse, and Muddy Water. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jolteon
        else if (myPokemon == "jolteon") {
            this.response.speak("Some of Jolteon's attacks are Thunder Shock, Thunder Fang, and Agility. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Flareon
        else if (myPokemon == "flareon") {
            this.response.speak("Some of Flareon's attacks are Fire Spin, Lava Plume, and Flare Blitz. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Porygon 
        else if (myPokemon == "porygon") {
            this.response.speak("Some of Porygon's attacks are Tackle, Try Attack, and Zap Cannon. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Omanyte 
        else if (myPokemon == "omanyte") {
            this.response.speak("Some of Omuh-nite's attacks are Water Gun, Rollout, and Ancient Power. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Omastar
        else if (myPokemon == "omastar") {
            this.response.speak("Some of Omastar's attacks are Rock Blast, Shell Smash, and Hydro Pump. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabuto
        else if (myPokemon == "kabuto") {
            this.response.speak("Some of Kabuto's attacks are Endure, Aqua Jet, and Mega Drain. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabutops 
        else if (myPokemon == "kabutops") {
            this.response.speak("Some of ka-BOO-tops attacks are Metal Sound, Ancient Power, and Night Slash. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Aerodactyl
        else if (myPokemon == "aerodactyl") {
            this.response.speak("Some of Aerodactyl's attacks are Wing Attack, Ancient Power, and Sky Drop. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Snorlax
        else if (myPokemon == "snorlax") {
            this.response.speak("Some of Snorlax's attacks are Snore, Sleep Talk, and Giga Impact. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Articuno
        else if (myPokemon == "articuno") {
            this.response.speak("Some of Articuno's attacks are Power Snow, Freeze Dry, and Blizzard. Articuno makes its major debut in Pokey-mohn The Movie two thousand. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zapdos
        else if (myPokemon == "zapdos") {
            this.response.speak("Some of Zapdos attacks are Thunder Shock, Drill Peck and Zap Cannon. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Moltres
        else if (myPokemon == "moltres") {
            this.response.speak("Some of Moltres attacks are Flamethrower, Air Slash, and Sky Attack. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dratini 
        else if (myPokemon == "dratini") {
            this.response.speak("Some of drah-TEE-nee's attacks are Thunder Wave, Twister, and Dragon Rage. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonair
        else if (myPokemon == "dragonair") {
            this.response.speak("Some of Dragonair's attacks are Dragon Tail, Dragon Rush, and Safeguard. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonite
        else if (myPokemon == "dragonite") {
            this.response.speak("Some of Dragonite's attacks are Hyper Beam, Outrage, and Hurricane. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mewtwo 
        else if (myPokemon == "mewtwo") {
            this.response.speak("Some of Mewtwo's attacks are Future Sight, Psychic Cut, and Psy strike. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mew
        else if (myPokemon == "mew") {
            this.response.speak("Some of Mew's attacks are pound, psychic, and ancient power. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        else {
            this.response.speak("There is no data. There are still Pokey-mohn yet to be identified.");
        }
      
    this.emit(':responseReady');
  },
    
    'EvolveIntent': function () {
        var myPokemon = this.event.request.intent.slots.pokemon.value;
      
        // Bulbasaur 
        if (myPokemon == "bulbasaur") {
            this.response.speak("Bulbusaur evolves into Ivysaur. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ivysaur
        else if (myPokemon == "ivysaur") {
            this.response.speak("Ivysaur evolves into Venusaur. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venusaur
        else if (myPokemon == "venusaur") {
            this.response.speak("Venusaur does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmander
        else if (myPokemon == "charmander") {
            this.response.speak("Charmander evolves into Charmeleon. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmeleon
        else if (myPokemon == "charmeleon") {
            this.response.speak("Charmeleon evolves into Charizard. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charizard
        else if (myPokemon == "charizard") {
            this.response.speak("Charizard does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Squirtle
        else if (myPokemon == "squirtle") {
            this.response.speak("Squirtle evolves into Wartortle. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wartortle
        else if (myPokemon == "wartortle") {
            this.response.speak("Wartortle evolves into Blastoise. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Blastoise 
        else if (myPokemon == "blastoise") {
            this.response.speak("Blastoys does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Caterpie
        else if (myPokemon == "caterpie") {
            this.response.speak("Caterpie evolves into Metapod. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Metapod
        else if (myPokemon == "metapod") {
            this.response.speak("Metapod evolves into Butterfree. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Butterfree
        else if (myPokemon == "butterfree") {
            this.response.speak("Butterfree does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weedle
        else if (myPokemon == "weedle") {
            this.response.speak("Weedle evolves into Kukuna. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kakuna 
        else if (myPokemon == "kakuna") {
            this.response.speak("Kukuna evolves into Beedrill. Kukuna's only attack is harden. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Beedrill
        else if (myPokemon == "beedrill") {
            this.response.speak("Beedrill does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgey 
        else if (myPokemon == "pidgey") {
            this.response.speak("Pidgey evolves into Pidgeotto. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgeotto 
        else if (myPokemon == "pidgeotto") {
            this.response.speak("Pidjyotoe evolves into Pidgeeaught. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgeot 
        else if (myPokemon == "pidgeot") {
            this.response.speak("Pidgeeaught does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rattata 
        else if (myPokemon == "rattata") {
            this.response.speak("Rattata evolves into Raticate. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raticate
        else if (myPokemon == "raticate") {
            this.response.speak("Raticate does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Spearow
        else if (myPokemon == "spearow") {
            this.response.speak("Spearow evolves into Fearow. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Fearow
        else if (myPokemon == "fearow") {
            this.response.speak("Fearow does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ekans 
        else if (myPokemon == "eckens") {
            this.response.speak("Eckehns evolves into Arbok. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arbok
        else if (myPokemon == "arbok") {
            this.response.speak("Arbok does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pikachu 
        else if (myPokemon == "pikachew") {
            this.response.speak("Pikachu evolves into Raichu when it is exposed to a thunder stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raichu 
        else if (myPokemon == "raichu") {
            this.response.speak("Raichu does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandshrew
        else if (myPokemon == "sandshrew") {
            this.response.speak("Sandshrew evolves into Sandslash. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandslash
        else if (myPokemon == "sandslash") {
            this.response.speak("Sandslash does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoran female and male 
        else if (myPokemon == "nidoran") {
            this.response.speak("The blue female Needoorann evolves into Needooreenuh and the purple male Needoorann evolves into Needooreeno. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorina 
        else if (myPokemon == "nidorina") {
            this.response.speak("Needooreenuh evolves into Needoqueen if it exposed to a Moon Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoqueen
        else if (myPokemon == "nidoqueen") {
            this.response.speak("Needoqueen does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorino 
        else if (myPokemon == "nidorino") {
            this.response.speak("Needooreeno evolves into Needoking if it's exposed to a Moon Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoking 
        else if (myPokemon == "nidoking") {
            this.response.speak("Needoking does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Clefairy 
        else if (myPokemon == "clefairy") {
            this.response.speak("Cluhfairee evolves into Cluhfaybull if it is exposed to a Moon Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
    
        // Clefable 
        else if (myPokemon == "cluhfaybull") {
            this.response.speak("Cluhfaybull does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vulpix
        else if (myPokemon == "vulpix") {
            this.response.speak("Vulpix evovles into Ninetales when exposed to a fire stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ninetales
        else if (myPokemon == "ninetales") {
            this.response.speak("Ninetales does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jigglypuff
        else if (myPokemon == "jigglypuff") {
            this.response.speak("Jigglypuff evolves into Wigglytuff when exposed to a Moon Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wigglytuff
        else if (myPokemon == "wigglytuff") {
            this.response.speak("Wigglytuff does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zubat
        else if (myPokemon == "zubat") {
            this.response.speak("Zubat evolves into Golbat. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golbat
        else if (myPokemon == "golbat") {
            this.response.speak("Golbat evolves to Crobat when leveled up with high friendship. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Oddish
        else if (myPokemon == "oddish") {
            this.response.speak("Oddish evolves into Gloom. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gloom
        else if (myPokemon == "gloom") {
            this.response.speak("Gloom can evolve into Vileplume when exposed to a Leaf Stone or a Belossom when exposed to a Sun Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vileplume
        else if (myPokemon == "vileplume") {
            this.response.speak("Vileplume does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Paras
        else if (myPokemon == "paras") {
            this.response.speak("Paras evolves into Parasect. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Parasect
        else if (myPokemon == "parasect") {
            this.response.speak("Parasect does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venonat
        else if (myPokemon == "venonat") {
            this.response.speak("VENN-oh-nat evolves into venn-oh-moth. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venomoth 
        else if (myPokemon == "venomoth") {
            this.response.speak("Venn-oh-moth does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Diglett
        else if (myPokemon == "diglett") {
            this.response.speak("Diglett evolves into Dugtrio. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dugtrio
        else if (myPokemon == "dugtrio") {
            this.response.speak("Dugtrio does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Meowth
        else if (myPokemon == "meowth") {
            this.response.speak("Meowth evolves into Persian. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Persian 
        else if (myPokemon == "purrshin") {
            this.response.speak("Purr-shin does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Psyduck
        else if (myPokemon == "psyduck") {
            this.response.speak("Psyduck evolves into Golduck. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golduck
        else if (myPokemon == "golduck") {
            this.response.speak("Golduck does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mankey
        else if (myPokemon == "mankey") {
            this.response.speak("Mank-ey evolves into Prime-ape. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Primeape 
        else if (myPokemon == "primeape") {
            this.response.speak("Prime-ape does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Growlithe 
        else if (myPokemon == "growlithe") {
            this.response.speak("Growl-ith  evolves into ar-kuh-NINE when exposed to a Fire Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arcanine 
        else if (myPokemon == "arcanine") {
            this.response.speak("ar-kuh-NINE does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwag 
        else if (myPokemon == "poliwag") {
            this.response.speak("Pol-ee-wag evolves into Pol-ee-wurl. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwhirl 
        else if (myPokemon == "poliwhirl") {
            this.response.speak("Pol-ee-wurl evolves into Pol-ee-rath when exposed to a Water Stone or a Pol-ee-toed when exposed to a King's Rock. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwrath 
        else if (myPokemon == "poliwrath") {
            this.response.speak("Pol-ee-rath does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Abra 
        else if (myPokemon == "abruh") {
            this.response.speak("Abra evolves into Kadabra. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kadabra
        else if (myPokemon == "kadabra") {
            this.response.speak("Kadabra evolves into Alakazam when traded over. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Alakazam
        else if (myPokemon == "alakazam") {
            this.response.speak("Alakazam does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machop
        else if (myPokemon == "machop") {
            this.response.speak("Machop evolves into Machoke. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machoke
        else if (myPokemon == "machoke") {
            this.response.speak("Machoke evolves into Ma-champ when traded over. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machamp 
        else if (myPokemon == "machamp") {
            this.response.speak("Ma-champ does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Bellsprout
        else if (myPokemon == "bellsprout") {
            this.response.speak("Bellsprout evolves into Weepinbell. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weepinbell
        else if (myPokemon == "weepinbell") {
            this.response.speak("Weepinbell evolves into VICK-tree-bell when exposed to a Leaf Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Victreebel 
        else if (myPokemon == "victreebel") {
            this.response.speak("VICK-tree-bell does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacool
        else if (myPokemon == "tentacool") {
            this.response.speak("Tentacool  evolves into Tentacruel. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacruel
        else if (myPokemon == "tentacruel") {
            this.response.speak("Tentacruel does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Geodude
        else if (myPokemon == "geodude") {
            this.response.speak("Geodude evolves into Graveler. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Graveler
        else if (myPokemon == "graveler") {
            this.response.speak("Graveler is evolves into Golem when traded over. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golem
        else if (myPokemon == "golem") {
            this.response.speak("Golem does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ponyta
        else if (myPokemon == "ponyta") {
            this.response.speak("Ponyta evolves into Rapidash. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rapidash
        else if (myPokemon == "rapidash") {
            this.response.speak("Rapidash does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowpoke
        else if (myPokemon == "slowpoke") {
            this.response.speak("Slowpoke can evolve into Slowbro or Slowking if it's traded over while holding a King's Rock. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowbro
        else if (myPokemon == "slowbro") {
            this.response.speak("Slowbro does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magnemite 
        else if (myPokemon == "magnemite") {
            this.response.speak("MAG-nuh-mite evolves into Magneton. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magneton
        else if (myPokemon == "magneton") {
            this.response.speak("Magneton evolves into Magnezone when leveled up in a special magnetic field. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Farfetchd
        else if (myPokemon == "farfetchd") {
            this.response.speak("Farfetchd does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Doduo
        else if (myPokemon == "doduo") {
            this.response.speak("Doduo evolves into Doe-dree-oh. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dodrio 
        else if (myPokemon == "dodrio") {
            this.response.speak("Doh-dree-oh does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seel
        else if (myPokemon == "seel") {
            this.response.speak("Seel evolves into Dewgong. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dewgong
        else if (myPokemon == "dewgong") {
            this.response.speak("Dewgong does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Grimer
        else if (myPokemon == "grimer") {
            this.response.speak("Grimer evolves into Muck. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Muk 
        else if (myPokemon == "muk") {
            this.response.speak("Muck does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Shellder 
        else if (myPokemon == "shellder") {
            this.response.speak("Shellder evolves into Cloyster. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cloyster
        else if (myPokemon == "cloyster") {
            this.response.speak("Cloyster does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gastly
        else if (myPokemon == "gastly") {
            this.response.speak("Gastly evolves into Haunter. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Haunter
        else if (myPokemon == "haunter") {
            this.response.speak("Haunter evolves into Gengar when traded over. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gengar
        else if (myPokemon == "gengar") {
            this.response.speak("Gengar does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Onix
        else if (myPokemon == "onix") {
            this.response.speak("Onix evolves into Steelix when traded over while holding a Metal Coat. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Drowzee
        else if (myPokemon == "drowzee") {
            this.response.speak("Drowzee evovles into Hypno. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hypno
        else if (myPokemon == "hypno") {
            this.response.speak("Hypno does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Krabby 
        else if (myPokemon == "crabby") {
            this.response.speak("Crabby evolves into Kingler. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kingler 
        else if (myPokemon == "kingler") {
            this.response.speak("Kingler does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Voltorb
        else if (myPokemon == "voltorb") {
            this.response.speak("Voltorb evolves into Electrode. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electrode
        else if (myPokemon == "electrode") {
            this.response.speak("Electrode does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggcute
        else if (myPokemon == "exeggcute") {
            this.response.speak("EGGS-egg-cute evolves into Eggs-EGG-you-tor when exposed to a Leaf Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggutor 
        else if (myPokemon == "eggseggyoutor") {
            this.response.speak("Eggs-EGG-you-tor does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cubone
        else if (myPokemon == "cubone") {
            this.response.speak("Cubone evolves into MAR-row-wack. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Marowak 
        else if (myPokemon == "marowak") {
            this.response.speak("MARe-ow-wack does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonlee 
        else if (myPokemon == "hitmonlee") {
            this.response.speak("Hit-mon-lee does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonchan 
        else if (myPokemon == "hitmonchan") {
            this.response.speak("Hit-mon-chan does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lickitung
        else if (myPokemon == "lickitung") {
            this.response.speak("Lickitung evolves into Licki licky when leveled up while knowing Rollout. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Koffing
        else if (myPokemon == "koffing") {
            this.response.speak("Koffing evolves into Weezing. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weezing
        else if (myPokemon == "weezing") {
            this.response.speak("Weezing does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhyhorn
        else if (myPokemon == "rhyhorn") {
            this.response.speak("Rhyhorn evolves into Rhy-donn. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhydon 
        else if (myPokemon == "rhydon") {
            this.response.speak("Rhydonn does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Chansey
        else if (myPokemon == "chansey") {
            this.response.speak("Chansey evolves into Blissey when leveled up with high friendship. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tangela 
        else if (myPokemon == "tangguhluh") {
            this.response.speak("TANG-guh-luh does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kangaskhan
        else if (myPokemon == "kangaskhan") {
            this.response.speak("Kangaskhan does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Horsea 
        else if (myPokemon == "horsea") {
            this.response.speak("HORSE-ee evolves into Seadra. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Seadra
        else if (myPokemon == "seadra") {
            this.response.speak("Seadra evolves into Kingdra when traded holding a Dragon Scale. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Goldeen
        else if (myPokemon == "goldeen") {
            this.response.speak("Goldeen evolves into Seaking. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seaking
        else if (myPokemon == "seaking") {
            this.response.speak("Seaking does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Staryu
        else if (myPokemon == "staryu") {
            this.response.speak("Staryu evolves into Starmie when exposed to a Water Stone. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Starmie 
        else if (myPokemon == "starmie") {
            this.response.speak("Starmie does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mr. Mime
        else if (myPokemon == "mister mime") {
            this.response.speak("Mister Mime does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Scyther 
        else if (myPokemon == "scyther") {
            this.response.speak("Scyther evolves into See-zor when traded over while holding a Metal Coat. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jynx
        else if (myPokemon == "jynx") {
            this.response.speak("Jynx does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electabuzz
        else if (myPokemon == "electabuzz") {
            this.response.speak("Electabuzz evolves into Electivire when traded over while holding an Electirizer. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magmar 
        else if (myPokemon == "magmar") {
            this.response.speak("Mag-mar evolves into Magmortar when traded over while holding a Magmarizer. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pinsir
        else if (myPokemon == "pinsir") {
            this.response.speak("Pinsir does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tauros 
        else if (myPokemon == "tauros") {
            this.response.speak("Taurose does not have an evolution but it is believed its a counterpart of Miltank. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magikarp
        else if (myPokemon == "magikarp") {
            this.response.speak("Magikarp evolves into Gyarados. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gyarados
        else if (myPokemon == "gyarados") {
            this.response.speak("Gyarados does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lapras
        else if (myPokemon == "lapras") {
            this.response.speak("Lapras does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ditto
        else if (myPokemon == "ditto") {
            this.response.speak("Ditto does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Eevee  // WRITE DOWN THE EVOLUTIONS
        else if (myPokemon == "eevee") {
            this.response.speak("Eevee can evolve into one of eight different Pokey-mohn depending on the situation. It can evolve into a Vaporeon when exposed to a Water Stone, a Jolteon when exposed to a Thunder Stone, or a Flareon when exposed to a Fire Stone. It can evolve into an Espeon when leveled up with high friendship during the day or an Umbreon when leveled up with high friendship during the night. It can also evolve into Leafeon when leveled up near a Moss Rock, a Glaceon when leveled up near an Ice Rock, or a Sylveon when leveled up with a Fairy type move and two levels of Affection. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vaporeon
        else if (myPokemon == "vaporeon") {
            this.response.speak("Vaporeon does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jolteon
        else if (myPokemon == "jolteon") {
            this.response.speak("Jolteon does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();;
        }
      
        // Flareon
        else if (myPokemon == "flareon") {
            this.response.speak("Flareon does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Porygon 
        else if (myPokemon == "porygon") {
            this.response.speak("Porygon  evolves into Porygon Two when traded over while holding an Up Grade. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Omanyte 
        else if (myPokemon == "omanyte") {
            this.response.speak("Omuh-nite evolves into Omastar. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Omastar
        else if (myPokemon == "omastar") {
            this.response.speak("Omastar does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabuto
        else if (myPokemon == "kabuto") {
            this.response.speak("Kabuto evolves into ka-BOO-tops. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabutops 
        else if (myPokemon == "kabutops") {
            this.response.speak("ka-BOO-tops does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Aerodactyl
        else if (myPokemon == "aerodactyl") {
            this.response.speak("Aerodactyl does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Snorlax
        else if (myPokemon == "snorlax") {
            this.response.speak("Snorlax does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Articuno
        else if (myPokemon == "articuno") {
            this.response.speak("Articuno does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zapdos
        else if (myPokemon == "zapdos") {
            this.response.speak("Zapdos does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Moltres
        else if (myPokemon == "moltres") {
            this.response.speak("Moltres does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dratini // FIX NAME
        else if (myPokemon == "dratini") {
            this.response.speak("drah-TEE-nee evolves into Dragonair. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonair
        else if (myPokemon == "dragonair") {
            this.response.speak("Dragonair  evolves into Dragonite. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonite
        else if (myPokemon == "dragonite") {
            this.response.speak("Dragonite does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mewtwo 
        else if (myPokemon == "mewtwo") {
            this.response.speak("Mewtwo does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mew
        else if (myPokemon == "mew") {
            this.response.speak("Mew does not have an evolution. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        else {
            this.response.speak("There is no data. There are still Pokey-mohn yet to be identified. Would you like to try another one?").listen();
        }
      
    this.emit(':responseReady');
  },
    
    'NumberIntent': function () {
        var myPokemon = this.event.request.intent.slots.pokemon.value;
      
        // Bulbasaur 
        if (myPokemon == "bulbasaur") {
            this.response.speak("Bulbusaur is the very first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ivysaur
        else if (myPokemon == "ivysaur") {
            this.response.speak("Ivysaur is the second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venusaur
        else if (myPokemon == "venusaur") {
            this.response.speak("Venusaur is the third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmander
        else if (myPokemon == "charmander") {
            this.response.speak("Charmander is the fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charmeleon
        else if (myPokemon == "charmeleon") {
            this.response.speak("Charmeleon is the fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Charizard
        else if (myPokemon == "charizard") {
            this.response.speak("Charizard is the sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Squirtle
        else if (myPokemon == "squirtle") {
            this.response.speak("Squirtle is the seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wartortle
        else if (myPokemon == "wartortle") {
            this.response.speak("Wartortle is the eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Blastoise 
        else if (myPokemon == "blastoise") {
            this.response.speak("Blastoys is the ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Caterpie
        else if (myPokemon == "caterpie") {
            this.response.speak("Caterpie is the tenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Metapod
        else if (myPokemon == "metapod") {
            this.response.speak("Metapod is the eleventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Butterfree
        else if (myPokemon == "butterfree") {
            this.response.speak("Butterfree is the twelfth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weedle
        else if (myPokemon == "weedle") {
            this.response.speak("Weedle is the thirteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kakuna 
        else if (myPokemon == "kakuna") {
            this.response.speak("Kukuna is the fourteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Beedrill
        else if (myPokemon == "beedrill") {
            this.response.speak("Beedrill is the fifteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgey 
        else if (myPokemon == "pidgey") {
            this.response.speak("Pidgey is the sixteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgeotto 
        else if (myPokemon == "pidgeotto") {
            this.response.speak("Pidjyotoe is the seventeenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pidgeot 
        else if (myPokemon == "pidgeot") {
            this.response.speak("Pidgeeaught is the eighteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rattata 
        else if (myPokemon == "rattata") {
            this.response.speak("Rattata is the ninteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raticate
        else if (myPokemon == "raticate") {
            this.response.speak("Raticate is the twentieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Spearow
        else if (myPokemon == "spearow") {
            this.response.speak("Spearow is the twenty first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Fearow
        else if (myPokemon == "fearow") {
            this.response.speak("Fearow is the twenty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ekans 
        else if (myPokemon == "eckens") {
            this.response.speak("Eckehns is the twenty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arbok
        else if (myPokemon == "arbok") {
            this.response.speak("Arbok is the twenty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pikachu 
        else if (myPokemon == "pikachew") {
            this.response.speak("Pikachu is the twenty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Raichu 
        else if (myPokemon == "raichu") {
            this.response.speak("Raichu is the twenty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandshrew
        else if (myPokemon == "sandshrew") {
            this.response.speak("Sandshrew is the twenty seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Sandslash
        else if (myPokemon == "sandslash") {
            this.response.speak("Sandslash is the twenty eighth Pokemoon listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoran female and male 
        else if (myPokemon == "nidoran") {
            this.response.speak("The blue female Needoorann is the twenty ninth Pokey-mohn listed in the Canto and National Pokeydex and the purple male Needoorann is the thirty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorina 
        else if (myPokemon == "nidorina") {
            this.response.speak("Needooreenuh is the thirtieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoqueen
        else if (myPokemon == "nidoqueen") {
            this.response.speak("Needoqueen is the thirty first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidorino 
        else if (myPokemon == "nidorino") {
            this.response.speak("Needooreeno is the thirty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Nidoking // FIX NAME
        else if (myPokemon == "nidoking") {
            this.response.speak("Needoking is the thirty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Clefairy 
        else if (myPokemon == "clefairy") {
            this.response.speak("Cluhfairee is the thirty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
    
        // Clefable 
        else if (myPokemon == "cluhfaybull") {
            this.response.speak("Cluhfaybull is the thirty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vulpix
        else if (myPokemon == "vulpix") {
            this.response.speak("Vulpix is the thirty seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ninetales
        else if (myPokemon == "ninetales") {
            this.response.speak("Ninetales is the thirty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jigglypuff
        else if (myPokemon == "jigglypuff") {
            this.response.speak("Jigglypuff is the thirty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Wigglytuff
        else if (myPokemon == "wigglytuff") {
            this.response.speak("Wigglytuff is the fortieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zubat
        else if (myPokemon == "zubat") {
            this.response.speak("Zubat is the forty first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golbat
        else if (myPokemon == "golbat") {
            this.response.speak("Golbat is the forty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Oddish
        else if (myPokemon == "oddish") {
            this.response.speak("Oddish is the forty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gloom
        else if (myPokemon == "gloom") {
            this.response.speak("Gloom is the forty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vileplume
        else if (myPokemon == "vileplume") {
            this.response.speak("Vileplume is the forty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Paras
        else if (myPokemon == "paras") {
            this.response.speak("Paras is the forty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Parasect
        else if (myPokemon == "parasect") {
            this.response.speak("Parasect is the forty fifth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venonat
        else if (myPokemon == "venonat") {
            this.response.speak("Venn-oh-nat is the forty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Venomoth 
        else if (myPokemon == "venomoth") {
            this.response.speak("Venn-oh-moth is the forty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Diglett
        else if (myPokemon == "diglett") {
            this.response.speak("Diglett is the fiftieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dugtrio
        else if (myPokemon == "dugtrio") {
            this.response.speak("Dugtrio is the fifty first Pokey-mohn listeed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Meowth
        else if (myPokemon == "meowth") {
            this.response.speak("Meowth is the fifty second Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Persian 
        else if (myPokemon == "purrshin") {
            this.response.speak("Purr-shin is the fifty third Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Psyduck
        else if (myPokemon == "psyduck") {
            this.response.speak("Psyduck is the fifty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golduck
        else if (myPokemon == "golduck") {
            this.response.speak("Golduck is the fifty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mankey
        else if (myPokemon == "mankey") {
            this.response.speak("Mank-ey is the fifty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Primeape 
        else if (myPokemon == "primeape") {
            this.response.speak("Prime-ape is the fifty seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Growlithe 
        else if (myPokemon == "growlithe") {
            this.response.speak("Growl-ith is the fifty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Arcanine 
        else if (myPokemon == "arcanine") {
            this.response.speak("Ar-kuh-nine is the fifty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwag 
        else if (myPokemon == "poliwag") {
            this.response.speak("Pol-ee-wag is the sixtieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwhirl 
        else if (myPokemon == "poliwhirl") {
            this.response.speak("Pol-ee-wurl is the sixty first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Poliwrath 
        else if (myPokemon == "poliwrath") {
            this.response.speak("Pol-ee-wrath is the sixty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Abra 
        else if (myPokemon == "abruh") {
            this.response.speak("Abra is the sixty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kadabra
        else if (myPokemon == "kadabra") {
            this.response.speak("Kadabra is the sixty fourth Pokey-mohn listed in the Cnato and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Alakazam
        else if (myPokemon == "alakazam") {
            this.response.speak("Alakazam is the sixty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machop
        else if (myPokemon == "machop") {
            this.response.speak("Machop is the sixty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machoke
        else if (myPokemon == "machoke") {
            this.response.speak("Machoke is the sixty seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Machamp 
        else if (myPokemon == "machamp") {
            this.response.speak("Ma-champ is the sixty eighth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Bellsprout
        else if (myPokemon == "bellsprout") {
            this.response.speak("Bellsprout is the sixty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weepinbell
        else if (myPokemon == "weepinbell") {
            this.response.speak("Weepinbell is the seventieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Victreebel 
        else if (myPokemon == "victreebel") {
            this.response.speak("Vick-tree-bell is the seventy first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacool
        else if (myPokemon == "tentacool") {
            this.response.speak("Tentacool is the seventy second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tentacruel
        else if (myPokemon == "tentacruel") {
            this.response.speak("Tentacruel is the seventy third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Geodude
        else if (myPokemon == "geodude") {
            this.response.speak("Geodude is the seventy fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Graveler
        else if (myPokemon == "graveler") {
            this.response.speak("Graveler is the seventy fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Golem
        else if (myPokemon == "golem") {
            this.response.speak("Golem is the seventy sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ponyta
        else if (myPokemon == "ponyta") {
            this.response.speak("Ponyta is the seventy seventh Pokey-mohn listed in the Canto in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rapidash
        else if (myPokemon == "rapidash") {
            this.response.speak("Rapidash is the seventy eighth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowpoke
        else if (myPokemon == "slowpoke") {
            this.response.speak("Slowpoke is the seventy ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Slowbro
        else if (myPokemon == "slowbro") {
            this.response.speak("Slowbro is the eightieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magnemite 
        else if (myPokemon == "magnemite") {
            this.response.speak("Mag-nuh-mite is the eighty first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magneton
        else if (myPokemon == "magneton") {
            this.response.speak("Magneton is the eighty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Farfetchd
        else if (myPokemon == "farfetchd") {
            this.response.speak("Farfetchd is the eighty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Doduo
        else if (myPokemon == "doduo") {
            this.response.speak("Doduo is the eighty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dodrio 
        else if (myPokemon == "dodrio") {
            this.response.speak("Doh-dree-oh is the eighty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seel
        else if (myPokemon == "seel") {
            this.response.speak("Seel is the eighty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dewgong
        else if (myPokemon == "dewgong") {
            this.response.speak("Dewgong is the eighty seventh Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Grimer
        else if (myPokemon == "grimer") {
            this.response.speak("Grimer is the eighty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Muk 
        else if (myPokemon == "muk") {
            this.response.speak("Muck is the eighty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Shellder 
        else if (myPokemon == "shellder") {
            this.response.speak("Shelder is the nintieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cloyster
        else if (myPokemon == "cloyster") {
            this.response.speak("Cloyster is the nintey first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gastly
        else if (myPokemon == "gastly") {
            this.response.speak("Gastly is the ninety second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Haunter
        else if (myPokemon == "haunter") {
            this.response.speak("Haunter is the nintey third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gengar
        else if (myPokemon == "gengar") {
            this.response.speak("Gengar is the ninety fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Onix
        else if (myPokemon == "onix") {
            this.response.speak("Onix is the ninety fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Drowzee
        else if (myPokemon == "drowzee") {
            this.response.speak("Drowzee is the ninety sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hypno
        else if (myPokemon == "hypno") {
            this.response.speak("Hypno is the ninety seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Krabby 
        else if (myPokemon == "crabby") {
            this.response.speak("Crabby is the ninety eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kingler 
        else if (myPokemon == "kingler") {
            this.response.speak("Kingler is the ninety ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Voltorb
        else if (myPokemon == "voltorb") {
            this.response.speak("Voltorb is the one hundredth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electrode
        else if (myPokemon == "electrode") {
            this.response.speak("Electrode is the one hundred first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggcute
        else if (myPokemon == "exeggcute") {
            this.response.speak("Eggs-egg-cute is the one hundred second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Exeggutor 
        else if (myPokemon == "eggseggyoutor") {
            this.response.speak("Eggs-egg-you-tor is the one hundred third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Cubone
        else if (myPokemon == "cubone") {
            this.response.speak("Cubone is the one hundred fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Marowak 
        else if (myPokemon == "marowak") {
            this.response.speak("Mare-ow-wack is the one hundred fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonlee 
        else if (myPokemon == "hitmonlee") {
            this.response.speak("Hit-mon-lee is the one hundred sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Hitmonchan 
        else if (myPokemon == "hitmonchan") {
            this.response.speak("Hit-mon-chan is the one hundred seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lickitung
        else if (myPokemon == "lickitung") {
            this.response.speak("Lickitung is the one hundred eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Koffing
        else if (myPokemon == "koffing") {
            this.response.speak("Koffing is the one hundred ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Weezing
        else if (myPokemon == "weezing") {
            this.response.speak("Weezing is the one hundred tenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhyhorn
        else if (myPokemon == "rhyhorn") {
            this.response.speak("Rhyhorn is the one hundred eleventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Rhydon 
        else if (myPokemon == "rhydon") {
            this.response.speak("Rhydonn is the one hundred twelfth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Chansey
        else if (myPokemon == "chansey") {
            this.response.speak("Chansey is the one hundred thirteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tangela 
        else if (myPokemon == "tangguhluh") {
            this.response.speak("Tang-gul-uh is the one hundred fourteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kangaskhan
        else if (myPokemon == "kangaskhan") {
            this.response.speak("Kangaskhan is the one hundred fifteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Horsea
        else if (myPokemon == "horsea") {
            this.response.speak("Horse-ee is the one hundred sixteenth Pokey-mohn listed in the Canto and national Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        else if (myPokemon == "seadra") {
            this.response.speak("Seadra is the one hundred seventeenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Goldeen
        else if (myPokemon == "goldeen") {
            this.response.speak("Goldeen is the one hundred eighteenth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Seaking
        else if (myPokemon == "seaking") {
            this.response.speak("Seaking is the one hundred ninteenth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Staryu
        else if (myPokemon == "staryu") {
            this.response.speak("Staryu is the one hundred twentieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Starmie 
        else if (myPokemon == "starmie") {
            this.response.speak("Starmie is the one hundred twenty first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mr. Mime
        else if (myPokemon == "mister mime") {
            this.response.speak("Mister Mime is the one hundred twenty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Scyther 
        else if (myPokemon == "scyther") {
            this.response.speak("Scyther is the one hundred twenty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jynx
        else if (myPokemon == "jynx") {
            this.response.speak("Jynx is the one hundred twenty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Electabuzz
        else if (myPokemon == "electabuzz") {
            this.response.speak("Electabuzz is the one hundred twenty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magmar 
        else if (myPokemon == "magmar") {
            this.response.speak("Mag-mar is the one hundred twenty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Pinsir
        else if (myPokemon == "pinsir") {
            this.response.speak("Pinsir is the one hundred twenty seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Tauros 
        else if (myPokemon == "tauros") {
            this.response.speak("Taurose is the one hundred twenty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Magikarp
        else if (myPokemon == "magikarp") {
            this.response.speak("Magkikarp is the one hundred twenty ninth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Gyarados
        else if (myPokemon == "gyarados") {
            this.response.speak("Gyarados is the one hundred thirtieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Lapras
        else if (myPokemon == "lapras") {
            this.response.speak("Lapras is the one hundred thirty first Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Ditto
        else if (myPokemon == "ditto") {
            this.response.speak("Ditto is the one hundred thirty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Eevee
        else if (myPokemon == "eevee") {
            this.response.speak("Eevee is the one hundred thirty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Vaporeon
        else if (myPokemon == "vaporeon") {
            this.response.speak("Vaporeon is the one hundred thirty fourth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Jolteon
        else if (myPokemon == "jolteon") {
            this.response.speak("Jolteon is the one hundred thirty fifth Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Flareon
        else if (myPokemon == "flareon") {
            this.response.speak("Flareon is the one hundred thirty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Porygon 
        else if (myPokemon == "porygon") {
            this.response.speak("Porygon is the one hundred thirty seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Omanyte 
        else if (myPokemon == "omanyte") {
            this.response.speak("Omuh-nite is the one hundred thirty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
        
        // Omastar
        else if (myPokemon == "omastar") {
            this.response.speak("Omastar is the one hundred thirty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabuto
        else if (myPokemon == "kabuto") {
            this.response.speak("Kabuto is the one hundred fortieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Kabutops 
        else if (myPokemon == "kabutops") {
            this.response.speak("Ka-boo-tops is the one hundred forty first Pokey-mohn listed in the Canto and Natioanl Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Aerodactyl
        else if (myPokemon == "aerodactyl") {
            this.response.speak("Aerodactyl is the one hundred forty second Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Snorlax
        else if (myPokemon == "snorlax") {
            this.response.speak("Snorlax is the one hundred forty third Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Articuno
        else if (myPokemon == "articuno") {
            this.response.speak("Articuno is the one hundred forty fourth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Zapdos
        else if (myPokemon == "zapdos") {
            this.response.speak("Zapdos is the one hundred forty fifth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Moltres
        else if (myPokemon == "moltres") {
            this.response.speak("Moltres is the one hundred forty sixth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dratini 
        else if (myPokemon == "dratini") {
            this.response.speak("Drah-tee-nee is the one hundred forty seventh Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonair
        else if (myPokemon == "dragonair") {
            this.response.speak("Dragonair is the one hundred forty eighth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Dragonite
        else if (myPokemon == "dragonite") {
            this.response.speak("Dragonite is the one hundred forty ninth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mewtwo 
        else if (myPokemon == "mewtwo") {
            this.response.speak("Mewtwo is the one hundred fiftieth Pokey-mohn listed in the Canto and National Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        // Mew
        else if (myPokemon == "mew") {
            this.response.speak("Mew is the one hundred fifty first Pokey-mohn listed in the Canto and National Pokeydex. It is actually the very last Pokey-mohn in the Canto Pokeydex. Would you like to learn about another Pokey-mohn?").listen();
        }
      
        else {
            this.response.speak("There is no data. There are still Pokey-mohn yet to be identified.");
        }
      
    this.emit(':responseReady');
        
  },
    
    // Yes
    'YesIntent': function() {
        this.response.speak("Ok, what would you like me to lookup next?").listen();
        this.emit(":responseReady");
    },
    
    // Help
    'AMAZON.HelpIntent': function() {
        this.response.speak("No problem, I will repeat the instructions to you. You can learn about a Pokey-mohn by asking me its type, evolution, attacks, or all of them by asking me to lookup a name. What would you like to learn today?").listen();
        this.emit(':responseReady');
    },
    
    // Stop
  'AMAZON.StopIntent': function() {
      this.response.speak("Ok, see you next time. And remember, gotta catch 'em all.");
      this.emit(':responseReady');
  },

  // Cancel
  'AMAZON.CancelIntent': function() {
      this.response.speak("Ok, see you next time. And remember, gotta catch 'em all.");
      this.emit(':responseReady');
  }
}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};