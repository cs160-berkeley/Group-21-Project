import Pins from "pins";

/************************************************************************/
/************************** SKINS AND STYLES ****************************/
/************************************************************************/

    /************ SKINS ************/
        let headerSkin = new Skin ({fill: '#45ADA8' });
        let whiteSkin = new Skin ({fill: 'white' });
        let lightGreenSkin = new Skin ({fill: '#E5F7E9' });
        let borderLineSkin = new Skin ({fill: '#979797' });
        let greySkin = new Skin ({fill: '#E4E4E4' });
        let darkerGreySkin = new Skin ({fill: '#D8D8D8' });
        let redSkin = new Skin ({fill: '#F87E7B' });
        let yellowSkin = new Skin ({fill: '#F0F89E' });
        let expireGreenSkin = new Skin ({fill: '#B8E986' });

    /************ STYLES ************/
    let titleHeaderStyle = new Style({ font: "bold 24px Copperplate Gothic Bold", color: "white" });
    let foodNameStyle = new Style({ font: "20px Didot", color: "black" });
    let expireStyle = new Style({ font: "14px Didot", color: "black" });

    /******* STRING TEMPLATE ********/
    var StringTemplate = Label.template($ => ({
        left: $.left, right: $.right, top: $.top, bottom: $.bottom,
        style: $.style,
        string: $.string
    }));

/************************************************************************/
/******************* LOADING PAGE IMPLEMENTATION ************************/
/************************************************************************/

    /******* LOADING PIC ********/
    let loadingPic = new Picture({
    	height: 568, url: "loading.png",
    	active: true,
    	behavior: Behavior({
    		onTouchEnded(container, id, x, y, ticks) {
    			MainContainer.empty();
    			MainContainer.add(FoodStatusPageContainer);
    			application.distribute("onUpdateFridgeStatus");
    		}
    	})
    });

    /******* LOADING PPAGE CONTAINER ********/
    let LoadingPageContainer = new Container({
    	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
    	contents: [
    		loadingPic
    	]	
    });


/************************************************************************/
/****************** FRIDGE STATUS PAGE IMPLEMENTATION *******************/
/************************************************************************/

    /************ STATUS AND TITLE CONTAINER ************/
    let statusPageTitle = new Label({height: 38, top: 11, style: titleHeaderStyle, string: "Fridge Status"})
    let statusPageTitleContainer = new Container({
    	left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
    	contents: [
    		statusPageTitle
    	]
    });
    let titleBorderLine = new Container({
    	left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,
    	contents: [
    	]
    });

    /************ FIRST FOOD ENTRY ************/
    let milkPicture = new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"});
    let milkName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Milk"});
    let foodOneLengthContainer = new Container({
    	left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
    	contents: [
    	]
    });
    var foodExpireLengthTemplate = Container.template($ => ({
    	left: 0, right: $.right, top: 0, bottom: 0, skin: $.skin,
    }));

    let FoodOneExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });
    let statusPageFoodOneContainer = new Container({
    	left: 0, right: 0, top: 61, height: 70, skin: whiteSkin,
    	contents: [
    		milkPicture,
    		milkName,
    		foodOneLengthContainer,
    		FoodOneExpireLabel
    	]
    });
    let foodOneBorderLine = new Container({
    	left: 0, right: 0, top: 131, height: 1, skin: borderLineSkin,
    	contents: [
    	]
    });

    /************ SECOND FOOD ENTRY ************/
    let avocadoPicture = new Picture({left: 3, right: 257, height: 64, url: "avocado.jpg"});
    let avocadoName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Avocado"});
    let foodTwoLengthContainer = new Container({
    	left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
    	contents: [
    	]
    });
    let FoodTwoExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    /* Container for the Second Entry */
    let statusPageFoodTwoContainer = new Container({
    	left: 0, right: 0, top: 132, height: 70, skin: whiteSkin,
    	contents:[
    		avocadoPicture,
    		avocadoName,
    		foodTwoLengthContainer,
    		FoodTwoExpireLabel
    	]
    });

    /********************************************/
    /************ GENERAL COMPONENTS ************/

    /* Boarder Line */
    let foodTwoBorderLine = new Container({
    	left: 0, right: 0, top: 202, height: 1, skin: borderLineSkin,
    	contents: [
    	]
    });

    /* Buttons Implementation */

        let statusPageHomeButton = new Picture({
        	left: 140, url: "home.png",
        	active: true,
        	behavior: Behavior({
        		onTouchEnded(container, id, x, y, ticks) {
        		}
        	})
        });
        let statusPageCameraButton = new Picture({
        	left: 50, url: "camera.png",
        	active: true,
        	behavior: Behavior({
        		onTouchEnded(container, id, x, y, ticks) {
        		}
        	})
        });
        let statusPageProfileButton = new Picture({
        	right: 50, url: "profile.png",
        	active: true,
        	behavior: Behavior({
        		onTouchEnded(container, id, x, y, ticks) {
        		}
        	})
        });

    let statusPageButtonContainer = new Container({
    	left: 0, right: 0, bottom: 0, height: 70, skin: greySkin,
    	contents: [
    		statusPageHomeButton,
    		statusPageCameraButton,
    		statusPageProfileButton
    	]
    });

    /****************************************************/
    /************ FOOD STATUS PAGE CONTAINER ************/

    let FoodStatusPageContainer = new Container({
    	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
    	contents: [
    		statusPageTitleContainer,
    		titleBorderLine,
    		statusPageFoodOneContainer,
    		foodOneBorderLine,
    		statusPageFoodTwoContainer,
    		foodTwoBorderLine,
    		statusPageButtonContainer
    	]	
    });

/*****************************************************************************/
/****************** Main Container and Application Behavior ******************/
/*****************************************************************************/

    /**** MAIN CONTAINER PAGE ****/
    let MainContainer = new Container({
    	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
    	contents: [
    		LoadingPageContainer
    	]
    });

    let remotePins;
    class AppBehavior extends Behavior {
        onLaunch(application) {
            application.add(MainContainer);
            let discoveryInstance = Pins.discover(
            	connectionDesc => {
                    if (connectionDesc.name == "pins-share") {
                        trace("Connecting to remote pins\n");
                        remotePins = Pins.connect(connectionDesc);
                    }
                }, 
                connectionDesc => {
                    if (connectionDesc.name == "pins-share") {
                        trace("Disconnected from remote pins\n");
                        remotePins = undefined;
                    }
                }
            );
        }
        onUpdateFridgeStatus(application) {
        	if (remotePins) {
        		remotePins.repeat("/FoodOne/read", 10, function(result) {
        			FoodOneExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
        			foodOneLengthContainer.empty();
        			if (result >= 0.67) {
        				foodOneLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
        			} else if (result >= 0.33 && result < 0.67) {
        				foodOneLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
        			} else {
        				foodOneLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
        			}
        		})
        		remotePins.repeat("/FoodTwo/read", 10, function(result) {
        			FoodTwoExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
        			foodTwoLengthContainer.empty();
        			if (result >= 0.67) {
        				foodTwoLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
        			} else if (result >= 0.33 && result < 0.67) {
        				foodTwoLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
        			} else {
        				foodTwoLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
        			}
        		})
        	}
        }
    }


/*****************************************************************************/

    /* Application Definition */
    application.behavior = new AppBehavior();

/*****************************************************************************/



