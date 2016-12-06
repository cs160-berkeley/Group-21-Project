let Pins = require("pins");

/* Skins and Label Styles */
let whiteSkin = new Skin ({fill: 'white'});
let mintSkin = new Skin ({fill:'#E6F7EA'});
let messageGreenSkin = new Skin ({fill: '#88DF9D' });
let messageRedSkin = new Skin ({fill: '#F87E7B' });
let messageSentGreenSkin = new Skin ({fill: '#CAE7D1' });
let messageSentRedSkin = new Skin ({fill: '#F0C2C1' });
let headerSkin = new Skin ({fill: '#45ADA8' });
let headerStyle = new Style({ font: "25px", color: "white" });
let blackStyle = new Style({font: "18px", color: "black"});
let messageStyle = new Style({ font: "20px", color: "white" });

/* Buttons */
    let yesButtonTemplate = Container.template($ => ({
        left: 10, height: 40, width: 100, skin: messageGreenSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: "Yes", style: messageStyle})
        ]
    }));
    
    let yesDarkenButtonTemplate = Container.template($ => ({
        left: 10, height: 40, width: 100, skin: messageSentGreenSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: "Yes", style: messageStyle})
        ]
    }));
    
    
    let noButtonTemplate = Container.template($ => ({
        right: 10, height: 40, width: 100, skin: messageRedSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: "No", style: messageStyle})
        ],
    }));
    
    let noDarkenButtonTemplate = Container.template($ => ({
        right: 10, height: 40, width: 100, skin: messageSentRedSkin,
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
        		container.wait(1000);
        	},
        	//onTouchEnded(container, id, x, y, ticks) {
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
        })
    }));
    
/* Containers */
let headerContainer = new Container({left: 0, right: 0, top: 0, height: 40, skin: headerSkin, contents: [new Label({left: 0, right: 0, string: "Notifications", style: headerStyle})]});
let defaultContainer = new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents: [new Label({left: 0, right: 0, top: 30, string: "No Notifications", style: blackStyle})]});
let messageContainer = Column.template($ => ({
							left: 0, right: 0, top:0, bottom: 0, skin: mintSkin, 
							contents:[
								new Label({left: 0, right: 0, top: 30, string: 'Roommate Asks: "Can I throw out ' + $.item + '"?', style: blackStyle}),
								new Line({left: 0, right: 0, top: 25, contents: [new noContainer(), new yesContainer()]}),
							]
						}));
						
/* Handlers */
Handler.bind("/askThrow", {
	onInvoke: function(handler, message) {
		MainContainer.remove(defaultContainer);
		MainContainer.add(new messageContainer({item: "Milk"}));
	}
});
    
/* Main Container Page */
let MainContainer = new Column({	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,	contents: [
		headerContainer,
		defaultContainer	]});

class AppBehavior extends Behavior {    onLaunch(application) {
    	application.shared = true; //added        Pins.configure({
            FoodOne: {              require: "Analog",              pins: {                 power: {pin: 58, voltage: 3.3, type: "Power"},                 ground: {pin: 61, type: "Ground"},                 analog: {pin: 55, direction: "input"},              }            },
            FoodTwo: {
            	require: "Analog",
            	pins: {
            		power: {pin: 58, voltage: 3.3, type: "Power"},                 	ground: {pin: 61, type: "Ground"},                 	analog: {pin: 54, direction: "input"},
            	}
            },            }, function(success) {           if (!success) trace("Failed to configure\n");           else {                application.add(MainContainer);
                Pins.share("ws", {zeroconf: true, name: "pins-share"});           }        });           }
    onQuit(application) {
    	application.shared = false; //added
    }}


/* Application Definition */
application.behavior = new AppBehavior();
