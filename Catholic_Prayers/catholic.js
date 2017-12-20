/*
    An Alexa Skill called Catholic Prayers
*/

"use strict";

var Alexa = require("alexa-sdk");

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const prayerStrings = {
    'en': {
        translation: {
            prayers: [
                // Hail Mary
               "Ok, I will do Hail Mary. Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb Jesus; Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",

                // Glory Be
               "Ok, I will do Glory Be. Glory be to the Father, and to the Son, and to the Holy Spirit; as it was in the beginning, is now, and ever shall be, world without end. Amen.",

                // Our Father aka The Lord's Prayer
                "Ok, I will do Our Father, also known as The Lord's Prayer. Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses; as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",

                // The Apostle's Creed
                "Ok, I will do the Apostle's Creed. I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son, Our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into Hell. The third day He arose again from the dead; He ascended into Heaven, sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.",

                // Hail Holy Queen
                "Ok, I will do Hail Holy Queen. Hail, Holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve: to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb Jesus. O clement, O loving, O sweet Virgin Mary! Amen.",

                // Anima Christi
                "Ok, I will do Anima Christi. Soul of Christ, make me holy Body of Christ, be my salvation. Blood of Christ, let me drink your wine Water flowing from the side of Christ, wash me clean Passion of Christ, strengthen me Kind Jesus, hear my prayer Hide me within your wounds And keep me close to you Defend me from the evil enemy And call me at the hour of my death To the fellowship of your saints That I might sing your praise with them for all eternity. Amen.",

                // Memorare
                "Ok, I will do Memorare. Remember, O most gracious Virgin Mary, that never was it known that any one who fled to thy protection, implored thy help or sought thy intercession, was left unaided. Inspired by this confidence, We fly unto thee, O Virgin of virgins my Mother; to thee do we come, before thee we stand, sinful and sorrowful; O Mother of the Word Incarnate, despise not our petitions, but in thy mercy hear and answer them. Amen.",

                // The Angelus
                "Ok, I will do The Angelus. V. The Angel of the Lord declared unto Mary. R.  And she conceived by the Holy Spirit. (Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb Jesus; Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.) V. Behold the handmaid of the Lord. R. Be it done unto me according to thy word. (Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb Jesus; Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.) V. And the Word was made Flesh. R. And dwelt among us. (Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb Jesus; Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.) V. Pray for us, O Holy Mother of God. R. That we may be made worthy of the promises of Christ. LET US PRAY: Pour forth, we beseech Thee, O Lord, Thy grace into our hearts; that, we to whom the Incarnation of Christ, Thy Son, was made known by the message of an Angel, may by His Passion and Cross, be brought to the glory of His Resurrection through the same Christ our Lord. Amen.",

                // Saint Michael Prayer
                "Ok, I will do the Saint Michael Prayer. Saint Michael, the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly host, by the power of God cast into hell Satan and all the evil spirits who prowl throughout the world seeking the ruin of souls. Amen.",

                // Act of Contrition
                "Ok, I will do the Act of Contrition. O my God, I am heartfully sorry for having offended thee, and I detest all my sins because of Thy just punishment, but most of all because I have offended Thee my God, Who is all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more, and to avoid the near occasion of sin. Amen.",

                // Miraculous Medal Prayer
                "Ok, I will do the Miraculous Medal Prayer. O Mary, conceived without sin, pray for us who have recourse to thee, and for those who do not have recourse to thee, especially the enemies of the Church and those recommended to thee. Amen.",

                // Morning Offering
                "Ok, I will do the Morning Offering. Dear Lord, I do not know what will happen to me today. I only know that nothing will happen that was not foreseen by You, and directed to my greater good from all eternity. I adore Your holy and unfathomable plans, and submit to them with all my heart for love of You, the Pope, and the Immaculate Heart of Mary. Amen.",

                // Guardian Angel Prayer
                "Ok, I will do the Guardian Angel Prayer. Angel of God, my Guardian dear, to whom God's love commits me here, ever this day (or night) be at my side, to light and guard, to rule and guide. Amen.",

                // Grace Before Meals
                "Ok, I will do Grace Before Meals. Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen.",

                // Grace After Meals
                "Ok, I will do Grace After Meals. We give Thee thanks for all Thy benefits, O Almighty God, who livest and reignest world without end. Amen. May the souls of the faithful departed, through the mercy of God, rest in peace. Amen.",

                // The Nicene Creed
                "Ok, I will do The Nicene Creed. We believe in one God, the Father, the Almighty, maker of heaven and earth, of all that is seen and unseen. We believe in one Lord, Jesus Christ, the only Son of God, eternally begotten of the Father, God from God, Light from Light, true God from true God, begotten not made, one in being with the Father. Through him all things were made. For us and for our salvation he came down from heaven; by the power of the Holy Spirit  he was born of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate, he suffered, died, and was buried. On the third day he rose again in fulfillment of the Scriptures; he ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead, and his kingdom will have no end. We believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son. With the Father and the Son he is worshipped and glorified. He has spoken through the prophets. We believe in one, holy, catholic, and apostolic Church. We acknowledge one baptism for the forgiveness of sins. We look for the resurrection of the dead,  and the life of the world to come. Amen.",

                // Pray to Saint Joseph
                "Ok, I will do Pray to Saint Joseph. Oh, Saint Joseph, whose protection is so great, so strong, so prompt before the throne of God, I place in you all my interests and desires. Oh, Saint Joseph, do assist me by your powerful intercession, and obtain for me from your Divine Son all spiritual blessings, through Jesus Christ, our Lord, So that, having engaged here below your heavenly power, I may offer my thanksgiving and homage to the most Loving of Fathers. Oh, Saint Joseph, I never weary contemplating you and Jesus asleep in your arms; I dare not approach while He reposes near your heart. Press Him in my name and kiss his fine head for me and ask him to return the Kiss when I draw my dying breath. Saint Joseph, Patron of departed souls – pray for me. Amen.",

                // Serenity Prayer
                "Ok, I will do the Serenity Prayer. God, give me grace to accept with serenity the things that cannot be changed, Courage to change the things which should be changed, and the Wisdom to distinguish the one from the other. Living one day at a time, Enjoying one moment at a time, Accepting hardship as a pathway to peace, Taking, as Jesus did, This sinful world as it is, Not as I would have it, Trusting that You will make all things right, If I surrender to Your will, So that I may be reasonably happy in this life, And supremely happy with You forever in the next. Amen.",

                // Act of Faith
                "Ok, I will do the Act of Faith. O my God, I firmly believe that you are one God in three divine persons, Father, Son and Holy Spirit. I believe that your divine Son became man and died for our sins, and that he will come to judge the living and the dead. I believe these and all the truths which the holy catholic Church teaches, because in revealing them you can neither deceive nor be deceived.",

                // Act of Love
                "Ok, I will do the Act of Love. O my God, I love you above all things, with my whole heart and soul, because you are all good and worthy of all my love. I love my neighbor as myself for the love of you. I forgive all who have injured me and I ask pardon of all whom I have injured.",

                // Act of Hope
                "Ok, I will do the Act of Love. O my God, relying on Your almighty power and infinite mercy and promises, I hope to obtain pardon of my sins, the help of Your grace and life everlasting, through the merits of Jesus Christ, my Lord and Redeemer. Amen.",

                // Litany of the Blessed Virgin Mary
                "Ok, I will do the Litany of the Blessed Virgin Mary. Lord, have mercy on us. Christ, have mercy on us. Lord, have mercy on us. Christ, hear us. Christ, graciously hear us. God the Father of Heaven, Have mercy on us. God the Son, Redeemer of the world, Have mercy on us. God the Holy Ghost, Have mercy on us. Holy Trinity, one God, Have mercy on us. Holy Mary, pray for us. Holy Mother of God, pray for us. Holy Virgin of virgins, pray for us. Mother of Christ, pray for us. Mother of divine grace, pray for us. Mother most pure, pray for us. Mother most chaste, pray for us. Mother inviolate, pray for us. Mother undefiled, pray for us. Mother most amiable, pray for us. Mother most admirable, pray for us. Mother of good counsel, pray for us. Mother of our Creator, pray for us. Mother of our Savior, pray for us. Virgin most prudent, pray for us. Virgin most venerable, pray for us. Virgin most renowned, pray for us. Virgin most powerful, pray for us. Virgin most merciful, pray for us. Virgin most faithful, pray for us. Mirror of justice, pray for us. Seat of wisdom, pray for us. Cause of our joy, pray for us. Spiritual vessel, pray for us. Vessel of honor, pray for us. Singular vessel of devotion, pray for us. Mystical rose, pray for us. Tower of David, pray for us. Tower of ivory, pray for us. House of gold, pray for us. Ark of the Covenant, pray for us. Gate of Heaven, pray for us. Morning star, pray for us. Health of the sick, pray for us. Refuge of sinners, pray for us. Comforter of the afflicted, pray for us. Help of Christians, pray for us. Queen of angels, pray for us. Queen of patriarchs, pray for us. Queen of prophets, pray for us. Queen of apostles, pray for us. Queen of martyrs, pray for us. Queen of confessors, pray for us. Queen of virgins, pray for us. Queen of all saints, pray for us. Queen conceived without Original Sin, pray for us. Queen assumed into Heaven, pray for us. Queen of the most holy Rosary, pray for us. Queen of peace, pray for us. Lamb of God, who takes away the sins of the world, Spare us, O Lord. Lamb of God, who takes away the sins of the world, Graciously hear us, O Lord. Lamb of God, who takes away the sins of the world, Have mercy on us. Pray for us, O Holy Mother of God, That we may be made worthy of the promises of Christ. Grant, we beseech Thee, O Lord God, that we Thy Servants may enjoy perpetual health of mind and body and by the glorious intercession of the Blessed Mary, ever Virgin, be delivered from present sorrow and enjoy eternal happiness. Through Christ Our Lord. Amen.",

                // Prayer Before Meals
                "Ok, I will do Prayer Before Meals. Bless us Oh Lord, and these thy gifts, which we are about to receive, from thy bounty, through Christ, Our Lord. Amen.",

                // Prayer After Meals
                "Ok, I will do Prayer After Meals. We give Thee thanks for all Thy benefits, O Almighty God, who livest and reignest world without end. Amen. May the souls of the faithful departed, through the mercy of God, rest in peace. Amen."
            ],

        },
    },

};

var handlers = {
  'LaunchRequest': function() {
    this.response.speak("Welcome to Catholic Prayers. You can tell me a prayer for me to say for you, or if you are not sure which one you would like, just say pick a prayer. Which prayer would you like me to do?").listen();

    this.emit(':responseReady');
  },

  'PrayersIntent': function () {
      var myPrayer = this.event.request.intent.slots.prayer.value;


      // Our Father
      if(myPrayer == "our father" || myPrayer == "the lords prayer") {
          this.response.speak("Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses; as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Hail Mary
      else if(myPrayer == "hail Mary") {
          this.response.speak("Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb Jesus; Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Glory Be
      else if(myPrayer == "glory be") {
          this.response.speak("Glory be to the Father, and to the Son, and to the Holy Spirit; as it was in the beginning, is now, and ever shall be, world without end. Amen. Would you like me to say another prayer for you?").listen();
      }

      // The Apostle's Creed
      else if(myPrayer == "the apostles creed") {
          this.response.speak("I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son, Our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into Hell. The third day He arose again from the dead; He ascended into Heaven, sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Hail Holy Queen
      else if(myPrayer == "hail holy queen") {
          this.response.speak("Hail, Holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve: to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious Advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb Jesus. O clement, O loving, O sweet Virgin Mary! Amen. Would you like me to say another prayer for you?").listen();
      }

      // Anima Christi
      else if(myPrayer == "anima Kristy") {
          this.response.speak("Soul of Christ, make me holy Body of Christ, be my salvation. Blood of Christ, let me drink your wine Water flowing from the side of Christ, wash me clean Passion of Christ, strengthen me Kind Jesus, hear my prayer Hide me within your wounds And keep me close to you Defend me from the evil enemy And call me at the hour of my death To the fellowship of your saints That I might sing your praise with them for all eternity. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Memorare
      else if(myPrayer == "memorare") {
          this.response.speak("Remember, O most gracious Virgin Mary, that never was it known that any one who fled to thy protection, implored thy help or sought thy intercession, was left unaided. Inspired by this confidence, We fly unto thee, O Virgin of virgins my Mother; to thee do we come, before thee we stand, sinful and sorrowful; O Mother of the Word Incarnate, despise not our petitions, but in thy mercy hear and answer them. Amen. Would you like me to say another prayer for you?").listen();
      }

      // The Angelus
      else if(myPrayer == "the angelus") {
          this.response.speak("V. The Angel of the Lord declared unto Mary. R.  And she conceived by the Holy Spirit. (Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb Jesus; Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.) V. Behold the handmaid of the Lord. R. Be it done unto me according to thy word. (Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb Jesus; Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.) V. And the Word was made Flesh. R. And dwelt among us. (Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb Jesus; Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.) V. Pray for us, O Holy Mother of God. R. That we may be made worthy of the promises of Christ. LET US PRAY: Pour forth, we beseech Thee, O Lord, Thy grace into our hearts; that, we to whom the Incarnation of Christ, Thy Son, was made known by the message of an Angel, may by His Passion and Cross, be brought to the glory of His Resurrection through the same Christ our Lord. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Saint Michael Prayer
      else if(myPrayer == "saint Michael prayer") {
          this.response.speak("Saint Michael, the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly host, by the power of God cast into hell Satan and all the evil spirits who prowl throughout the world seeking the ruin of souls. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Act of Contrition
      else if(myPrayer == "act of contrition") {
          this.response.speak("O my God, I am heartfully sorry for having offended thee, and I detest all my sins because of Thy just punishment, but most of all because I have offended Thee my God, Who is all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more, and to avoid the near occasion of sin. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Miraculous Medal Prayer
      else if(myPrayer == "miraculous medal prayer") {
          this.response.speak("O Mary, conceived without sin, pray for us who have recourse to thee, and for those who do not have recourse to thee, especially the enemies of the Church and those recommended to thee. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Morning Offering
      else if(myPrayer == "morning offering") {
          this.response.speak("Dear Lord, I do not know what will happen to me today. I only know that nothing will happen that was not foreseen by You, and directed to my greater good from all eternity. I adore Your holy and unfathomable plans, and submit to them with all my heart for love of You, the Pope, and the Immaculate Heart of Mary. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Guardian Angel Prayer
      else if(myPrayer == "guardian angel prayer") {
          this.response.speak("Angel of God, my Guardian dear, to whom God's love commits me here, ever this day (or night) be at my side, to light and guard, to rule and guide. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Grace Before Meals
      else if(myPrayer == "grace before meals") {
          this.response.speak("Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Grace After Meals
      else if(myPrayer == "grace after meals") {
          this.response.speak("We give Thee thanks for all Thy benefits, O Almighty God, who livest and reignest world without end. Amen. May the souls of the faithful departed, through the mercy of God, rest in peace. Amen. Would you like me to say another prayer for you?").listen();
      }

      // The Nicene Creed
      else if(myPrayer == "the nicene creed") {
          this.response.speak("We believe in one God, the Father, the Almighty, maker of heaven and earth, of all that is seen and unseen. We believe in one Lord, Jesus Christ, the only Son of God, eternally begotten of the Father, God from God, Light from Light, true God from true God, begotten not made, one in being with the Father. Through him all things were made. For us and for our salvation he came down from heaven; by the power of the Holy Spirit  he was born of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate, he suffered, died, and was buried. On the third day he rose again in fulfillment of the Scriptures; he ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead, and his kingdom will have no end. We believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son. With the Father and the Son he is worshipped and glorified. He has spoken through the prophets. We believe in one, holy, catholic, and apostolic Church. We acknowledge one baptism for the forgiveness of sins. We look for the resurrection of the dead,  and the life of the world to come. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Pray to Saint Joseph
      else if(myPrayer == "pray to saint Joseph") {
          this.response.speak("Oh, Saint Joseph, whose protection is so great, so strong, so prompt before the throne of God, I place in you all my interests and desires. Oh, Saint Joseph, do assist me by your powerful intercession, and obtain for me from your Divine Son all spiritual blessings, through Jesus Christ, our Lord, So that, having engaged here below your heavenly power, I may offer my thanksgiving and homage to the most Loving of Fathers. Oh, Saint Joseph, I never weary contemplating you and Jesus asleep in your arms; I dare not approach while He reposes near your heart. Press Him in my name and kiss his fine head for me and ask him to return the Kiss when I draw my dying breath. Saint Joseph, Patron of departed souls – pray for me. Amen. Would you like me to say another prayer for you?").listen();
      }


      // Serenity Prayer
      else if(myPrayer == "serenity prayer") {
          this.response.speak("God, give me grace to accept with serenity the things that cannot be changed, Courage to change the things which should be changed, and the Wisdom to distinguish the one from the other. Living one day at a time, Enjoying one moment at a time, Accepting hardship as a pathway to peace, Taking, as Jesus did, This sinful world as it is, Not as I would have it, Trusting that You will make all things right, If I surrender to Your will, So that I may be reasonably happy in this life, And supremely happy with You forever in the next. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Act of Faith
      else if (myPrayer == "act of faith") {
          this.response.speak("O my God, I firmly believe that you are one God in three divine persons, Father, Son and Holy Spirit. I believe that your divine Son became man and died for our sins, and that he will come to judge the living and the dead. I believe these and all the truths which the holy catholic Church teaches, because in revealing them you can neither deceive nor be deceived. Would you like me to say another prayer for you?").listen();
      }

      // Act of Love
      else if (myPrayer == "act of love") {
          this.response.speak("O my God, I love you above all things, with my whole heart and soul, because you are all good and worthy of all my love. I love my neighbor as myself for the love of you. I forgive all who have injured me and I ask pardon of all whom I have injured. Would you like me to say another prayer for you?").listen();
      }

      // Act of Hope
      else if(myPrayer ==  "act of hope") {
          this.response.speak("O my God, relying on Your almighty power and infinite mercy and promises, I hope to obtain pardon of my sins, the help of Your grace and life everlasting, through the merits of Jesus Christ, my Lord and Redeemer. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Litany of the Blessed Virgin Mary
      else if(myPrayer == "litany of the blessed virgin Mary") {
          this.response.speak("Lord, have mercy on us. Christ, have mercy on us. Lord, have mercy on us. Christ, hear us. Christ, graciously hear us. God the Father of Heaven, Have mercy on us. God the Son, Redeemer of the world, Have mercy on us. God the Holy Ghost, Have mercy on us. Holy Trinity, one God, Have mercy on us. Holy Mary, pray for us. Holy Mother of God, pray for us. Holy Virgin of virgins, pray for us. Mother of Christ, pray for us. Mother of divine grace, pray for us. Mother most pure, pray for us. Mother most chaste, pray for us. Mother inviolate, pray for us. Mother undefiled, pray for us. Mother most amiable, pray for us. Mother most admirable, pray for us. Mother of good counsel, pray for us. Mother of our Creator, pray for us. Mother of our Savior, pray for us. Virgin most prudent, pray for us. Virgin most venerable, pray for us. Virgin most renowned, pray for us. Virgin most powerful, pray for us. Virgin most merciful, pray for us. Virgin most faithful, pray for us. Mirror of justice, pray for us. Seat of wisdom, pray for us. Cause of our joy, pray for us. Spiritual vessel, pray for us. Vessel of honor, pray for us. Singular vessel of devotion, pray for us. Mystical rose, pray for us. Tower of David, pray for us. Tower of ivory, pray for us. House of gold, pray for us. Ark of the Covenant, pray for us. Gate of Heaven, pray for us. Morning star, pray for us. Health of the sick, pray for us. Refuge of sinners, pray for us. Comforter of the afflicted, pray for us. Help of Christians, pray for us. Queen of angels, pray for us. Queen of patriarchs, pray for us. Queen of prophets, pray for us. Queen of apostles, pray for us. Queen of martyrs, pray for us. Queen of confessors, pray for us. Queen of virgins, pray for us. Queen of all saints, pray for us. Queen conceived without Original Sin, pray for us. Queen assumed into Heaven, pray for us. Queen of the most holy Rosary, pray for us. Queen of peace, pray for us. Lamb of God, who takes away the sins of the world, Spare us, O Lord. Lamb of God, who takes away the sins of the world, Graciously hear us, O Lord. Lamb of God, who takes away the sins of the world, Have mercy on us. Pray for us, O Holy Mother of God, That we may be made worthy of the promises of Christ. Grant, we beseech Thee, O Lord God, that we Thy Servants may enjoy perpetual health of mind and body and by the glorious intercession of the Blessed Mary, ever Virgin, be delivered from present sorrow and enjoy eternal happiness. Through Christ Our Lord. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Prayer Before Meals
      else if(myPrayer == "prayer before meals") {
          this.response.speak("Bless us Oh Lord, and these thy gifts, which we are about to receive, from thy bounty, through Christ, Our Lord. Amen. Would you like me to say another prayer for you?").listen();
      }

      // Prayer After Meals
      else if (myPrayer == "prayer after meals") {
          this.response.speak("We give Thee thanks for all Thy benefits, O Almighty God, who livest and reignest world without end. Amen. May the souls of the faithful departed, through the mercy of God, rest in peace. Amen. Would you like me to say another prayer for you?").listen();
      }
      else {
          this.response.speak("There is no prayer for that one.");
      }
      this.emit(':responseReady');

  },

   'GetNewFactIntent': function () {
        this.emit('PickPrayerIntent');

    },
    'PickPrayerIntent': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const prayersArr = this.t('prayers');
        const prayersIndex = Math.floor(Math.random() * prayersArr.length);
        const randomPrayer = prayersArr[prayersIndex];

        // Create speech output
        const speechOutput =  randomPrayer;
        this.emit(':tellWithCard', speechOutput, randomPrayer);

    },
    // Yes
    'YesIntent': function() {
        this.response.speak("Ok, what prayer would you like me to do next?").listen();
        this.emit(":responseReady");
    },

    // Help
    'AMAZON.HelpIntent': function() {
        this.response.speak("No problem. All you have to do is ask me to say a prayer for you, or if you are not sure which one you would like, just say pick a prayer. Which prayer would you like me to do?").listen();
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

exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = prayerStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
