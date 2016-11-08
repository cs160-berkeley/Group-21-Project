import Pins from "pins";

/* Skins and Label Styles */
let lightBlueSkin = new Skin ({fill: '#40E0D0' });
let whiteSkin = new Skin ({fill: 'white' });
let whiteSmokeSkin = new Skin ({fill: '#F5F5F5' });
let darkGreySkin = new Skin ({fill: '#808080' });

let titleHeaderStyle = new Style({ font: "bold 24px Copperplate Gothic Bold", color: "white" });
let foodNameStyle = new Style({ font: "20px Didot", color: "black" });
let expireStyle = new Style({ font: "14px Didot", color: "black" });

/* String Template Definition */
var StringTemplate = Label.template($ => ({    left: $.left, right: $.right, top: $.top, bottom: $.bottom,    style: $.style,    string: $.string}));


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




/* Main Container Page */let MainContainer = new Container({	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,	contents: [
		FoodStatusPageContainer	]});
application.add(MainContainer);