let Pins = require("pins");

/* Skins and Label Styles */
let whiteSkin = new Skin ({fill: 'white'});

/* Main Container Page */
let MainContainer = new Container({	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,	contents: [	]});

class AppBehavior extends Behavior {    onLaunch(application) {        Pins.configure({
            FoodOne: {              require: "Analog",              pins: {                 power: {pin: 58, voltage: 3.3, type: "Power"},                 ground: {pin: 61, type: "Ground"},                 analog: {pin: 55, direction: "input"},              }            },
            FoodTwo: {
            	require: "Analog",
            	pins: {
            		power: {pin: 58, voltage: 3.3, type: "Power"},                 	ground: {pin: 61, type: "Ground"},                 	analog: {pin: 54, direction: "input"},
            	}
            },            }, function(success) {           if (!success) trace("Failed to configure\n");           else {                application.add(MainContainer);
                Pins.share("ws", {zeroconf: true, name: "pins-share"});           }        });           }}


/* Application Definition */
application.behavior = new AppBehavior();
