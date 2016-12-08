let Pins = require("pins");
var companionURL = "";

/* Skins and Label Styles */
let whiteSkin = new Skin ({fill: 'white'});
let mintSkin = new Skin ({fill:'#E6F7EA'});
let messageGreenSkin = new Skin ({fill: '#88DF9D' });
let messageRedSkin = new Skin ({fill: '#F87E7B' });
let messageSentGreenSkin = new Skin ({fill: '#CAE7D1' });
let messageSentRedSkin = new Skin ({fill: '#F0C2C1' });
let headerSkin = new Skin ({fill: '#45ADA8' });
let headerStyle = new Style({ font: "20px", color: "white" });
let blackStyle = new Style({font: "18px", color: "black"});
let messageStyle = new Style({ font: "20px", color: "white" });
let foodNameStyle = new Style({font: "20px", color: "black" });
let ownerStyle = new Style({ font: "italic 15px", color: "black" });

var noItems = true;

/* Handlers */
Handler.bind("/askThrow", {
  onInvoke: function(handler, message) {
    var query = parseQuery(message.query);
    notifContainer.empty();
    notifContainer.add(new headerContainer({text: "Notifications:"}));
    //notifContainer.add(new messageContainer({item: query['text']}));
    //new Message("/askThrow" + query['text']).invoke();
  }
});

Handler.bind("/askUse", {
  onInvoke: function(handler, message) {
    //MainContainer.remove(defaultContainer);
    //MainContainer.add(new messageContainerUse({item: "Milk"}));
    notifContainer.empty();
    notifContainer.add(new headerContainer({text: "Notifications:"}));
    notifContainer.add(new messageContainerUse({item: "Milk"}));
  }
});

/*Handler.bind("/askThrow", {
  onInvoke: function(handler, message) {
    //MainContainer.remove(defaultContainer);
    //MainContainer.add(new messageContainer({item: "Milk"}));
    notifContainer.empty();
    notifContainer.add(new headerContainer({text: "Notifications:"}));
    notifContainer.add(new messageContainer({item: "Milk"}));
  }
});*/

Handler.bind("/sendNotifyThrowMilk", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyThrow").invoke();
        handler.wait(1500);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
   	  if (noItems) {
   	  	defaultThrowOkayContainer.empty();
   	  }
   	  defaultThrowOkayContainer.add(profilePageFoodOneContainer);
   	  noItems = false;
    }
});

Handler.bind("/sendNotifyThrowAvocado", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyThrow").invoke();
        handler.wait(1500);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
   	  if (noItems) {
   	  	defaultThrowOkayContainer.empty();
   	  }
   	  	defaultThrowOkayContainer.add(profilePageFoodTwoContainer);
   	  noItems = false;
    }
});

Handler.bind("/sendNotifyUse", {
    onInvoke: function(handler, message){
        if (companionURL != "") new Message(companionURL + "notifyUse").invoke();
        handler.wait(1500);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
    consumeOkayContainer.remove(defaultConsumeOkayContainer);
    consumeOkayContainer.add(profilePageFoodOneContainer);
    }
});

Handler.bind("/clearNotify", {
    onInvoke: function(handler, message){
        handler.wait(1500);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
    }
});

  Handler.bind("/discover", Behavior({
      onInvoke: function(handler, message){
          companionURL = JSON.parse(message.requestText).url;
      }
  }));

  Handler.bind("/forget", Behavior({
      onInvoke: function(handler, message){
          companionURL = "";
      }
  }));

/* Buttons */
    let yesButtonTemplate = Container.template($ => ({
        left: 10, height: 30, width: 80, skin: messageGreenSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: "Yes", style: messageStyle})
        ]
    }));

    let yesDarkenButtonTemplate = Container.template($ => ({
        left: 10, height: 30, width: 80, skin: messageSentGreenSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: "Yes", style: messageStyle})
        ]
    }));


    let noButtonTemplate = Container.template($ => ({
        right: 10, height: 30, width: 80, skin: messageRedSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: "No", style: messageStyle})
        ],
    }));

    let noDarkenButtonTemplate = Container.template($ => ({
        right: 10, height: 30, width: 80, skin: messageSentRedSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: "No", style: messageStyle})
        ]
    }));

var yesContainer = Container.template($ => ({
        top: 10, left: 0, right: 0, skin: mintSkin,
        contents: [
            new yesButtonTemplate()
        ],
        active: true,
        behavior: Behavior({
          onTouchBegan(container, id, x, y, ticks) {
            container.add(new yesDarkenButtonTemplate());
          },
          onTouchEnded(container, id, x, y, ticks) {
            new Message("/sendNotifyThrow" + $.item).invoke();
            
            //application.invoke(new Message("/askThrow" + $.verb + "?" + serializeQuery({text: String($.item)})), Message.JSON);
          }
        })
    }));

    var noContainer = Container.template($ => ({
        top:10, left: 0, right: 0, skin: mintSkin,
        contents: [
            new noButtonTemplate()
        ],
        active: true,
        behavior: Behavior({
          onTouchBegan(container, id, x, y, ticks) {
            container.add(new noDarkenButtonTemplate());
          },
          onTouchEnded(container, id, x, y, ticks) {
            new Message("/clearNotify").invoke();
          }
        })
    }));

/* Containers */
let headerContainer = Container.template($ => ({left: 0, right: 0, top: 0, height: 30, skin: headerSkin, contents: [new Label({left: 0, right: 0, string: $.text, style: headerStyle})]}));
let defaultContainer = new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents: [new Label({left: 0, right: 0, top: 30, string: "No Notifications", style: blackStyle})]});
let messageContainer = Column.template($ => ({
              left: 0, right: 0, top:0, bottom: 0, skin: mintSkin,
              contents:[
                new Label({left: 0, right: 0, top: 10, string: 'Roommate Asks: "Can I throw out ' + $.item + '"?', style: blackStyle}),
                new Line({left: 0, right: 0, top: 5, contents: [new noContainer(), new yesContainer({item: $.item})]}),
              ]
            }));
let messageContainerUse = Column.template($ => ({
              left: 0, right: 0, top:0, bottom: 0, skin: mintSkin,
              contents:[
                new Label({left: 0, right: 0, top: 10, string: 'Roommate Asks: "Can I use your ' + $.item + '"?', style: blackStyle}),
                new Line({left: 0, right: 0, top: 5, contents: [new noContainer(), new yesContainer({verb: "Use"})]}),
              ]
            }));

    let borderLine = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 1, skin: borderLineSkin,
        contents: [
        ]
    }));

    /* Container for the First Entry */
    let ownerLabel = Label.template($ => ({ left: 100, right: 0, top: 55, bottom: 10, style: ownerStyle, string: "Hannah" }));
    /*let foodOneLengthContainer3 = new Container({
      left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
      contents: [
      ]
    });*/

    var defaultConsumeOkayContainer = new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Items", style: blackStyle})]});
    var consumeOkayContainer = new Column({
    left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
    contents: [
      new headerContainer({text: "Okay to Consume:"}),
      defaultConsumeOkayContainer,
    ]
  });


    let profilePageFoodOneContainer = new Container({
      left: 0, right: 0, top: 0, height: 70, skin: whiteSkin,
      contents: [
        new Picture({left: 0, right: 55, height: 64, url: "milk.jpeg"}),
        new Label({left: 100, right: 0, style: foodNameStyle, string: "Milk"}),
        new ownerLabel()
      ],
    });
    
    let profilePageFoodTwoContainer = new Container({
      left: 0, right: 0, top: 0, height: 70, skin: whiteSkin,
      contents: [
        new Picture({left: 0, right: 55, height: 64, url: "avocado.jpg"}),
        new Label({left: 100, right: 0, style: foodNameStyle, string: "Avocado"}),
        new ownerLabel()
      ],
    });
    /*****************/


  /* Basic Containers */
  var defaultNotifContainer = new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]});
  var notifContainer = new Column({
    left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
    contents: [
      new headerContainer({text: "Notifications:"}),
      defaultNotifContainer,
    ]
  });

  var defaultThrowOkayContainer = new Line({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Items", style: blackStyle})]})

  var throwOkayContainer = new Column({
    left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
    contents: [
      new headerContainer({text: "Okay to Throw Out:"}),
      defaultThrowOkayContainer,
    ]
  });

/* Main Container Page */
let MainContainer = new Column({
  left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
  contents: [
    //headerContainer,
    //defaultContainer
    notifContainer,
    throwOkayContainer,
    consumeOkayContainer
  ]
});

class AppBehavior extends Behavior {
  onDisplayed(application) {
    //application.discover("smart-fridge-companion.project.kinoma.marvell.com");
    trace("Initalized");
    }
    onLaunch(application) {
    application.discover("smart-fridge-companion.project.kinoma.marvell.com");//
      application.shared = true; //added
        Pins.configure({
            Milk: {
              require: "Analog",
              pins: {
                 power: {pin: 66, voltage: 3.3, type: "Power"},
                 ground: {pin: 65, type: "Ground"},
                 analog: {pin: 55, direction: "input"},
              }
            },
            Avocado: {
              require: "Analog",
              pins: {
                power: {pin: 66, voltage: 3.3, type: "Power"},
                  ground: {pin: 65, type: "Ground"},
                  analog: {pin: 54, direction: "input"},
              }
            },
            Apple: {
              require: "Analog",
              pins: {
                power: {pin: 66, voltage: 3.3, type: "Power"},
                ground: {pin: 65, type: "Ground"},
                analog: {pin: 53, direction: "input"},
              }
            },
            Banana: {
              require: "Analog",
              pins: {
                power: {pin: 66, voltage: 3.3, type: "Power"},
                ground: {pin: 65, type: "Ground"},
                analog: {pin: 52, direction: "input"},
              }
            },
            Onion: {
              require: "Analog",
              pins: {
                power: {pin: 66, voltage: 3.3, type: "Power"},
                ground: {pin: 65, type: "Ground"},
                analog: {pin: 51, direction: "input"},
              }
            },
            }, function(success) {
           if (!success) trace("Failed to configure\n");
           else {
                application.add(MainContainer);
                Pins.share("ws", {zeroconf: true, name: "pins-share"});
           }
        });
        }
}


/* Application Definition */
application.behavior = new AppBehavior();