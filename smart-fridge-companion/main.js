import Pins from "pins";
import {
	Button,
	ButtonBehavior
} from "buttons";

/* Skins and Label Styles */
let lightBlueSkin = new Skin ({fill: '#40E0D0' });
let whiteSkin = new Skin ({fill: 'white' });
let whiteSmokeSkin = new Skin ({fill: '#F5F5F5' });
let darkGreySkin = new Skin ({fill: '#808080' });
let lightGreySkin = new Skin ({fill: '#D8D8D8' });

let titleHeaderStyle = new Style({ font: "bold 24px Copperplate Gothic Bold", color: "white" });
let foodNameStyle = new Style({ font: "20px Didot", color: "black" });
let expireStyle = new Style({ font: "14px Didot", color: "black" });
let messageStyle = new Style({ font: "20px", color: "white" });
let messageSentStyle = new Style({ font: "20px", color: "black" });
let askStyle = new Style({ font: "18px", color: "black" });

/* Item Detail Style */
let itemStyle = new Style({ font: "30px", color: "white" });
let itemTitleStyle = new Style({ font: "40px", color: "black" });
let itemDetailStyle = new Style({ font: "20px", color: "black" });
let itemExpireStyle = new Style({ font: "14px", color: "black" });

/* String Template Definition */
var StringTemplate = Label.template($ => ({    left: $.left, right: $.right, top: $.top, bottom: $.bottom,    style: $.style,    string: $.string}));

/* Button Templates */
let messageButtonTemplate = Button.template($ => ({    left: 30, right: 30, height: 40, width: 60,    contents: [        Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})    ],    Behavior: class extends ButtonBehavior {        onTap(button) {            application.invoke(new Message("/send"));        }
    }}));

let messageSentButtonTemplate = Button.template($ => ({
	left: 30, right: 30, height: 40, width: 60,
	contents: [
		Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})    ],
}));

let messageButtonTemplate2 = Button.template($ => ({    left: 30, right: 30, height: 40, width: 60,    contents: [        Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})    ],    Behavior: class extends ButtonBehavior {        onTap(button) {            application.invoke(new Message("/send2"));        }
    }}));

/* Buttons */
var throwButton = new messageButtonTemplate({text: "Can I throw out 'Milk'?"});
var throwSentButton = new messageSentButtonTemplate({text: "Message Sent"});
var useButton = new messageButtonTemplate2({text: "Can I use 'Milk'?"});
var messagingButton = new messageButtonTemplate({text: "Message Sent"});
var messageSent = new Label({string: "Message Sent", style: messageSentStyle});

/* Handlers */
Handler.bind("/send", Behavior({
	onInvoke: function(handler, message) {
		throwContainer.remove(throwButton);
		throwContainer.add(throwSentButton);
		handler.wait(1500);
	},
	onComplete: function(handler, message) {
		throwContainer.remove(throwSentButton);
		throwContainer.add(throwButton);
	},
}));

Handler.bind("/send2", Behavior({
	onInvoke: function(handler, message) {
		useContainer.remove(useButton);
		useContainer.add(messageSent);
		handler.wait(1500);
	},
	onComplete: function(handler, message) {
		useContainer.remove(messageSent);
		useContainer.add(useButton);
	},
}));

/* Food Status Page Title Container */
let statusPageTitle = new Label({height: 38, top: 11, style: titleHeaderStyle, string: "Current Fridge Status"})
let statusPageTitleContainer = new Container({
	left: 0, right: 0, top: 0, height: 60, skin: lightBlueSkin,
	contents: [
		statusPageTitle
	]
});
let titleBorderLine = new Container({
	left: 0, right: 0, top: 60, height: 1, skin: darkGreySkin,
	contents: [
	]
});



let milkPicture = new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"});
let milkName = new Label({left: 65, right: 200, style: foodNameStyle, string: "Milk"});

let FoodOneExpireLabel = new StringTemplate ({ left: 130, right: 40, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });
let statusPageFoodOneContainer = new Container({
	left: 0, right: 0, top: 61, height: 70, skin: whiteSmokeSkin,
	contents: [
		milkPicture,
		milkName,
		FoodOneExpireLabel
	]
});
let foodOneBorderLine = new Container({
	left: 0, right: 0, top: 131, height: 1, skin: darkGreySkin,
	contents: [
	]
});


let statusPageButtonContainer = new Container({
	left: 0, right: 0, bottom: 0, height: 70, skin: darkGreySkin,
	contents: [
	]
});




/* Food Status Page Container*/
let FoodStatusPageContainer = new Container({
	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
	contents: [
		statusPageTitleContainer,
		titleBorderLine,
		statusPageFoodOneContainer,
		foodOneBorderLine,
		statusPageButtonContainer
	]	
});


/* Item Detail Top Bar Container */
let itemTitleContainer = new Container({
	left: 0, right: 0, top: 0, height: 60, skin: lightBlueSkin,
	contents: [
		new Label({height: 38, top: 11, left: 17, style: itemStyle, string: "<"}),
		new Label({height: 38, top: 11, style: itemStyle, string: "Milk"}),
	]
});


/* Item Detail Container */
var itemDetailContainer = new Container({	left: 0, right: 0, top: 0, bottom: 0, height: 100, skin: lightGreySkin,	contents: [
		new Line({left: 0, right: 0, contents: [
			new Picture({left: 15, right: 10, height: 170, url: "milk.jpeg"}),
			new Column({top: 0, bottom: 0, right: 15, contents: [
				new Label({left: 5, string: "Milk", style: itemTitleStyle}),
				new Label({left: 5, string: "Communal Food", style: itemDetailStyle}),
				new Container({height: 15}),
				new Label({left: 5, string: "Expires in 1 day", style: itemExpireStyle}),
			]})
		]}),	]});

var throwContainer = new Container({	left: 0, right: 0, skin: whiteSkin,	contents: [
		throwButton	]});

var useContainer = new Container({	left: 0, right: 0, skin: whiteSkin,	contents: [
		useButton	]});


/* "Ask your Roommates" Container */
var messageContainer = new Column({	left: 0, right: 0, top: 0, bottom: 0, height: 100, skin: whiteSkin,	contents: [
		new Label({left: 15, top: 15, height: 40, string: "Ask your Roommates:", style: askStyle}),
		throwContainer,
		new Container({height: 15}),
		useContainer,	]});


/* Main Container Page */
/* Screens *//*let MainContainer = new Container({	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,	contents: [
		FoodStatusPageContainer	]});*/

var itemScreenTemplate = Column.template($ => ({
	left: 0, right: 0, top: 0, bottom: 0, skin: lightGreySkin,
	contents: [
		itemTitleContainer,
		itemDetailContainer,
		messageContainer,
		new Container({left: 0, right: 0, bottom: 0, height: 70, skin: darkGreySkin}),
	]
}));

var itemScreen = new itemScreenTemplate();

application.add(itemScreen);