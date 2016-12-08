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
let headerStyle = new Style({ font: "17px", color: "white" });
let blackStyle = new Style({font: "15px", color: "black"});
let messageStyle = new Style({ font: "20px", color: "white" });
let foodNameStyle = new Style({font: "15px", color: "black" });
let ownerStyle = new Style({ font: "italic 15px", color: "black" });

var noItemsThrow = true;
var noItemsUse = true;

/* Handlers */
Handler.bind("/askThrow", {
  onInvoke: function(handler, message) {
    var query = parseQuery(message.query);
    var itemName = String(query['text'])
    notifContainer.empty();
    notifContainer.add(new headerContainer({text: "Notifications:"}));
    notifContainer.add(new messageContainer({item: itemName}));
    //new Message("/askThrow" + query['text']).invoke();
  }
});

Handler.bind("/askUse", {
  onInvoke: function(handler, message) {
    //MainContainer.remove(defaultContainer);
    //MainContainer.add(new messageContainerUse({item: "Milk"}));
    var query = parseQuery(message.query);
    var itemName = String(query['text'])
    notifContainer.empty();
    notifContainer.add(new headerContainer({text: "Notifications:"}));
    notifContainer.add(new messageContainerUse({item: itemName}));
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
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
   	  if (noItemsThrow) {
   	  	defaultThrowOkayContainer.empty();
   	  }
   	  defaultThrowOkayContainer.add(new profilePageFoodOneContainer());
   	  noItemsThrow = false;
    }
});

Handler.bind("/sendNotifyThrowAvocado", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyThrow").invoke();
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
   	  if (noItemsThrow) {
   	  	defaultThrowOkayContainer.empty();
   	  }
   	  defaultThrowOkayContainer.add(new profilePageFoodTwoContainer());
   	  noItemsThrow = false;
    }
});

Handler.bind("/sendNotifyThrowApple", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyThrow").invoke();
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
   	  if (noItemsThrow) {
   	  	defaultThrowOkayContainer.empty();
   	  }
   	  defaultThrowOkayContainer.add(new profilePageFoodThreeContainer());
   	  noItemsThrow = false;
    }
});

Handler.bind("/sendNotifyThrowBanana", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyThrow").invoke();
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
   	  if (noItemsThrow) {
   	  	defaultThrowOkayContainer.empty();
   	  }
   	  defaultThrowOkayContainer.add(new profilePageFoodFourContainer());
   	  noItemsThrow = false;
    }
});

Handler.bind("/sendNotifyThrowOnion", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyThrow").invoke();
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
   	  if (noItemsThrow) {
   	  	defaultThrowOkayContainer.empty();
   	  }
   	  defaultThrowOkayContainer.add(new profilePageFoodFiveContainer());
   	  noItemsThrow = false;
    }
});

Handler.bind("/sendNotifyUseMilk", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyUse").invoke();
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
    	if (noItemsUse) {
    		defaultConsumeOkayContainer.empty();
    	}
    	defaultConsumeOkayContainer.add(new profilePageFoodOneContainer());
    	noItemsUse = false;
    }
});

Handler.bind("/sendNotifyUseAvocado", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyUse").invoke();
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
    	if (noItemsUse) {
    		defaultConsumeOkayContainer.empty();
    	}
    	defaultConsumeOkayContainer.add(new profilePageFoodTwoContainer());
    	noItemsUse = false;
    }
});

Handler.bind("/sendNotifyUseApple", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyUse").invoke();
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
    	if (noItemsUse) {
    		defaultConsumeOkayContainer.empty();
    	}
    	defaultConsumeOkayContainer.add(new profilePageFoodThreeContainer());
    	noItemsUse = false;
    }
});

Handler.bind("/sendNotifyUseBanana", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyUse").invoke();
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
    	if (noItemsUse) {
    		defaultConsumeOkayContainer.empty();
    	}
    	defaultConsumeOkayContainer.add(new profilePageFoodFourContainer());
    	noItemsUse = false;
    }
});

Handler.bind("/sendNotifyUseOnion", {
    onInvoke: function(handler, message){
        //if (companionURL != "") new Message(companionURL + "notifyUse").invoke();
        handler.wait(1000);
    },
    onComplete: function(handler, message) {
      notifContainer.empty();
      notifContainer.add(new headerContainer({text: "Notifications:"}));
      notifContainer.add(new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: blackStyle})]}));
    	if (noItemsUse) {
    		defaultConsumeOkayContainer.empty();
    	}
    	defaultConsumeOkayContainer.add(new profilePageFoodFiveContainer());
    	noItemsUse = false;
    }
});

Handler.bind("/clearNotify", {
    onInvoke: function(handler, message){
        handler.wait(1000);
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
        left: 10, height: 22, width: 60, skin: messageGreenSkin,
        contents: [
            Label($, {left:0, right:0, height:22, string: "Yes", style: messageStyle})
        ]
    }));

    let yesDarkenButtonTemplate = Container.template($ => ({
        left: 10, height: 22, width: 60, skin: messageSentGreenSkin,
        contents: [
            Label($, {left:0, right:0, height:22, string: "Yes", style: messageStyle})
        ]
    }));


    let noButtonTemplate = Container.template($ => ({
        right: 10, height: 22, width: 60, skin: messageRedSkin,
        contents: [
            Label($, {left:0, right:0, height:22, string: "No", style: messageStyle})
        ],
    }));

    let noDarkenButtonTemplate = Container.template($ => ({
        right: 10, height: 22, width: 60, skin: messageSentRedSkin,
        contents: [
            Label($, {left:0, right:0, height:22, string: "No", style: messageStyle})
        ]
    }));

var yesContainer = Container.template($ => ({
        top: 0, left: 0, right: 0, skin: mintSkin,
        contents: [
            new yesButtonTemplate()
        ],
        active: true,
        behavior: Behavior({
          onTouchBegan(container, id, x, y, ticks) {
            container.add(new yesDarkenButtonTemplate());
          },
          onTouchEnded(container, id, x, y, ticks) {
            new Message("/sendNotify" + $.verb + $.item).invoke();
            
            //application.invoke(new Message("/askThrow" + $.verb + "?" + serializeQuery({text: String($.item)})), Message.JSON);
          }
        })
    }));

    var noContainer = Container.template($ => ({
        top:0, left: 0, right: 0, skin: mintSkin,
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
let headerContainer = Container.template($ => ({left: 0, right: 0, top: 0, height: 23, skin: headerSkin, contents: [new Label({left: 0, right: 0, string: $.text, style: headerStyle})]}));
let defaultContainer = new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents: [new Label({left: 0, right: 0, top: 30, string: "No Notifications", style: blackStyle})]});
let messageContainer = Column.template($ => ({
              left: 0, right: 0, top:0, bottom: 0, skin: mintSkin,
              contents:[
                new Label({left: 0, right: 0, top: 5, string: 'Roommate Asks: "Can I throw out "' + $.item + '"?', style: blackStyle}),
                new Line({left: 0, right: 0, top: 0, bottom: 3, contents: [new noContainer(), new yesContainer({verb: "Throw", item: $.item})]}),
              ]
            }));
let messageContainerUse = Column.template($ => ({
              left: 0, right: 0, top:0, bottom: 0, skin: mintSkin,
              contents:[
                new Label({left: 0, right: 0, top: 5, string: 'Roommate Asks: "Can I use your ' + $.item + '"?', style: blackStyle}),
                new Line({left: 0, right: 0, top: 0, bottom: 3, contents: [new noContainer(), new yesContainer({verb: "Use", item: $.item})]}),
              ]
            }));

    let borderLine = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 1, skin: borderLineSkin,
        contents: [
        ]
    }));

    /* Container for the First Entry */
    let ownerLabel = Label.template($ => ({ left: 0, right: 0, top: 0/*top: 55*/, bottom: 10, style: ownerStyle, string: "Hannah" }));

    var defaultConsumeOkayContainer = new Line({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, top: 10, string: "No Items", style: blackStyle})]});
    var consumeOkayContainer = new Column({
    left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
    contents: [
      new headerContainer({text: "Okay to Consume:"}),
      defaultConsumeOkayContainer,
    ]
  });


    let profilePageFoodOneContainer = Column.template($=>({ //Container
      left: 0, top: 0, width: 65, height: 65, skin: whiteSkin,
      contents: [
        new Picture({left: 0, width: 50, height: 50, url: "milk.jpeg"}),
        new Label({left: 0, right: 10, style: foodNameStyle, string: "Milk"})
        //new Column({top: 25, bottom: 0, left: 65, right: 0, contents: [new Label({left: 0, right: 0, style: foodNameStyle, string: "Milk"})]})
      ],
    }));
    
    let profilePageFoodTwoContainer = Column.template($=>({
      left: 0, top: 0, width: 65, height: 65, skin: whiteSkin,
      contents: [
        new Picture({left: 0, width: 50, height: 50, url: "avocado.jpg"}),
        new Label({left: 0, style: foodNameStyle, string: "Avocado"})
        //new Column({top: 25, bottom: 0, left: 65, right: 0, contents: [new Label({left: 0, right: 0, style: foodNameStyle, string: "Avocado"}), new ownerLabel()]})
      ],
    }));
    
    let profilePageFoodThreeContainer = Column.template($=>({
      left: 0, top: 0, width: 65, height: 65, skin: whiteSkin,
      contents: [
        new Picture({left: 0, width: 50, height: 50, url: "apple.jpg"}),
        new Label({left: 0, style: foodNameStyle, string: "Apple"})
        //new Column({top: 25, bottom: 0, left: 65, right: 0, contents: [new Label({left: 0, right: 0, style: foodNameStyle, string: "Avocado"}), new ownerLabel()]})
      ],
    }));
    
    
    let profilePageFoodFourContainer = Column.template($=>({
      left: 0, top: 0, width: 65, height: 65, skin: whiteSkin,
      contents: [
        new Picture({left: 0, width: 50, height: 50, url: "banana.jpg"}),
        new Label({left: 0, style: foodNameStyle, string: "Banana"})
        //new Column({top: 25, bottom: 0, left: 65, right: 0, contents: [new Label({left: 0, right: 0, style: foodNameStyle, string: "Avocado"}), new ownerLabel()]})
      ],
    }));
    
    let profilePageFoodFiveContainer = Column.template($=>({
      left: 0, top: 0, width: 65, height: 65, skin: whiteSkin,
      contents: [
        new Picture({left: 0, width: 50, height: 50, url: "onion.jpg"}),
        new Label({left: 0, style: foodNameStyle, string: "Onion"})
        //new Column({top: 25, bottom: 0, left: 65, right: 0, contents: [new Label({left: 0, right: 0, style: foodNameStyle, string: "Avocado"}), new ownerLabel()]})
      ],
    }));
    /*
    let profilePageFoodTwoContainer = new Line({
      left: 0, right: 0, top: 0, height: 70, skin: whiteSkin,
      contents: [
        new Picture({left: 5, height: 64, url: "avocado.jpg"}),
        new Column({left: 5, contents: [new Label({left: 100, right: 0, style: foodNameStyle, string: "Avocado"}), new ownerLabel()]})
      ],
    });
    */
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
    trace("Initalized\n");
    }
    onLaunch(application) {
    //application.discover("smart-fridge-companion.project.kinoma.marvell.com");//
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