
import Pins from "pins";
import {
    Button,
    ButtonBehavior
} from "buttons";

/************************************************************************/
/************************** SKINS AND STYLES ****************************/
/************************************************************************/

    /************ SKINS (1) ************/
        let headerSkin = new Skin ({fill: '#45ADA8' });
        let whiteSkin = new Skin ({fill: 'white' });
        let lightGreenSkin = new Skin ({fill: '#E5F7E9' });
        let borderLineSkin = new Skin ({fill: '#979797' });
        let greySkin = new Skin ({fill: '#E4E4E4' });
        let darkerGreySkin = new Skin ({fill: '#D8D8D8' });
        let redSkin = new Skin ({fill: '#F87E7B' });
        let yellowSkin = new Skin ({fill: '#F0F89E' });
        let expireGreenSkin = new Skin ({fill: '#B8E986' });

    /************ SKINS (2) ************/
        let lightBlueSkin = new Skin ({fill: '#40E0D0' });
        let whiteSmokeSkin = new Skin ({fill: '#F5F5F5' });
        let darkGreySkin = new Skin ({fill: '#808080' });
        let lightGreySkin = new Skin ({fill: '#D8D8D8' });

    /************ STYLES (1) ************/
        let titleHeaderStyle = new Style({ font: "bold 24px Copperplate Gothic Bold", color: "white" });
        let foodNameStyle = new Style({ font: "20px Didot", color: "black" });
        let expireStyle = new Style({ font: "14px Didot", color: "black" });

    /************ STYLES (2) ************/
        let messageStyle = new Style({ font: "20px", color: "white" });
        let messageSentStyle = new Style({ font: "20px", color: "black" });
        let askStyle = new Style({ font: "18px", color: "black" });

        /* Item Detail Style */
        let itemStyle = new Style({ font: "20px", color: "white" });
        let itemTitleStyle = new Style({ font: "20px", color: "black" });
        let itemDetailStyle = new Style({ font: "20px", color: "black" });
        let itemExpireStyle = new Style({ font: "14px", color: "black" });


    /******* STRING TEMPLATE ********/
        var StringTemplate = Label.template($ => ({
            left: $.left, right: $.right, top: $.top, bottom: $.bottom,
            style: $.style,
            string: $.string
        }));



/************************************************************************/
/************************** BUTTON TEMPLATES ****************************/
/************************************************************************/

    /* Button Templates */
    let messageButtonTemplate = Button.template($ => ({
        left: 30, right: 30, height: 40, width: 60,
        contents: [
            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})
        ],
        Behavior: class extends ButtonBehavior {
            onTap(button) {
                application.invoke(new Message("/send"));
            }
        }
    }));

    let messageSentButtonTemplate = Button.template($ => ({
        left: 30, right: 30, height: 40, width: 60,
        contents: [
            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})
        ],
    }));

    let messageButtonTemplate2 = Button.template($ => ({
        left: 30, right: 30, height: 40, width: 60,
        contents: [
            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})
        ],
        Behavior: class extends ButtonBehavior {
            onTap(button) {
                application.invoke(new Message("/send2"));
            }
        }
    }));

/************************************************************************/
/******************************* BUTTON *********************************/
/************************************************************************/

    /* Buttons */
    var throwButton = new messageButtonTemplate({text: "Can I throw out 'Milk'?"});
    var throwSentButton = new messageSentButtonTemplate({text: "Message Sent"});
    var useButton = new messageButtonTemplate2({text: "Can I use 'Milk'?"});
    var messagingButton = new messageButtonTemplate({text: "Message Sent"});
    var messageSent = new Label({string: "Message Sent", style: messageSentStyle});

/************************************************************************/
/****************************** HANDLER *********************************/
/************************************************************************/

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


/************************************************************************/
/************************** GENERAL COMPONENTS **************************/
/************************************************************************/
    /* Boarder Line */
    let foodOneBorderLine = new Container({
        left: 0, right: 0, top: 131, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });

    /* Boarder Line */
    let foodPCOneBorderLine = new Container({
        left: 0, right: 0, top: 131, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });

    /* Boarder Line */
    let foodTwoBorderLine = new Container({
        left: 0, right: 0, top: 200, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });

    /* Boarder Line */
    let foodPCTwoBorderLine = new Container({
        left: 0, right: 0, top: 200, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });


    /* Boarder Line */
    let foodThreeBorderLine = new Container({
        left: 0, right: 0, top: 270, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });

    /* Boarder Line */
    let foodFourBorderLine = new Container({
        left: 0, right: 0, top: 340, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });

    /* Boarder Line */
    let foodFiveBorderLine = new Container({
        left: 0, right: 0, top: 410, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });


    /* Buttons Implementation */
        /******************* HOME BUTTON (2) *******************/
        let statusPageHomeButton = new Picture({
            left: 140, url: "home.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        });

        let statusPostCameraPageHomeButton = new Picture({
            left: 140, url: "home.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        });
        /******************* CAMERA CONFIRM BUTTON (3) *******************/
        let cameraConfirmButton = new Picture({
            left: 140, url: "camera_confirm_button.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        });

        let cameraOneConfirmButton = new Picture({
            left: 140, url: "camera_confirm_button.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        });

        let cameraTwoConfirmButton = new Picture({
            left: 140, url: "camera_confirm_button.png",
            active: true,
            behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                MainContainer.add(postCameraConfirmContainer);
            }
           })
        });

        /******************* CAMERA BUTTON (2) *******************/
        let statusPageCameraButton = new Picture({
            left: 50, url: "camera.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(LoadingCameraContainer);
                    // application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        let statusPostCameraPageCameraButton = new Picture({
            left: 50, url: "camera.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(LoadingCameraContainer);
                    // application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        /******************* PROFILE BUTTON (2) *******************/
        let statusPageProfileButton = new Picture({
            right: 50, url: "profile.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        });

        let statusPostCameraPageProfileButton = new Picture({
            right: 50, url: "profile.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        });
        /******************* ITEM BACK BUTTON *******************/


        let itemBackButton = new Picture({
            left: 5, url: "back.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(FoodStatusPageContainer);
                    application.distribute("onUpdateFridgeStatus");
                }
            })


        });

        /******************* FLASH BUTTON (3) *******************/
        let cameraFlashButton = new Picture({
            left: 50, url: "no_flash.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        });

        let cameraOneFlashButton = new Picture({
            left: 50, url: "no_flash.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        });

        let cameraTwoFlashButton = new Picture({
            left: 50, url: "no_flash.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        });


        /******************* CANCEL BUTTON (3) *******************/
        let cameraCancelButton = new Picture({
            right: 50, url: "x.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(FoodStatusPageContainer);
                    application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        let cameraOneCancelButton = new Picture({
            right: 50, url: "x.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(FoodStatusPageContainer);
                    application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        let cameraTwoCancelButton = new Picture({
            right: 50, url: "x.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(FoodStatusPageContainer);
                    application.distribute("onUpdateFridgeStatus");
                }
            })
        });


    /******************* BUTTON CONTAINER *******************/
    let statusPageButtonContainer = new Container({
        left: 0, right: 0, bottom: 0, height: 70, skin: greySkin,
        contents: [
            statusPageHomeButton,
            statusPageCameraButton,
            statusPageProfileButton
        ]
    });


    let statusPostCameraPageButtonContainer = new Container({
        left: 0, right: 0, bottom: 0, height: 70, skin: greySkin,
        contents: [
            statusPostCameraPageHomeButton,
            statusPostCameraPageCameraButton,
            statusPostCameraPageProfileButton
        ]
    });


    /******************* CAMERA BUTTON CONTAINER (3) *******************/
    let cameraButtonContainer = new Container({
        left: 0, right: 0, bottom: 0, height: 50, skin: greySkin,
        contents: cameraConfirmButton
        
    });

    let cameraOneButtonContainer = new Container({
        left: 0, right: 0, bottom: 0, height: 50, skin: greySkin,
        contents: cameraOneConfirmButton
        
    });

    let cameraTwoButtonContainer = new Container({
        left: 0, right: 0, bottom: 0, height: 50, skin: greySkin,
        contents: cameraTwoConfirmButton
    });


    /******************* CAMERA STATUS BUTTON CONTAINER (3) *******************/
    let cameraStatusButtonContainer = new Container({
        left: 0, right: 0, bottom: 0, height: 50, skin: headerSkin,
        contents: [cameraFlashButton, cameraCancelButton]
        
    });

    let itemDetailButtonContainer = new Container({
        left: 0, right: 0, bottom: 0, height: 40, skin: headerSkin,
        contents: [itemBackButton, new Label({string: "Milk", style: messageSentStyle})]
        
    });

    let cameraStatusOneButtonContainer = new Container({
        left: 0, right: 0, bottom: 0, height: 50, skin: headerSkin,
        contents: [cameraOneFlashButton, cameraOneCancelButton]
        
    });
    let cameraStatusTwoButtonContainer = new Container({
        left: 0, right: 0, bottom: 0, height: 50, skin: headerSkin,
        contents: [cameraTwoFlashButton, cameraTwoCancelButton]
        
    });



/************************************************************************/
/******************* LOADING PAGE IMPLEMENTATION ************************/
/************************************************************************/

    /******* LOADING PIC ********/
    let loadingPic = new Picture({
    	height: 500, url: "loading.png",
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
    // PRE-CAMERA
    let statusPageTitle = new Label({height: 38, top: 11, style: titleHeaderStyle, string: "Fridge Status"})
    let statusPageTitleContainer = new Container({
    	left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
    	contents: [
    		statusPageTitle
    	]
    });

    // DETAIL 
    let itemDetailTitle = new Label({height: 38, top: 11, style: titleHeaderStyle, string: "Item Detail"})
    var statusItemDetailContainer = new Container({
        left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
        contents: [
            itemDetailTitle
        ]
    });

    // POST-CAMERA
    let statusPagePostCameraTitle = new Label({height: 38, top: 11, style: titleHeaderStyle, string: "Fridge Status"})
    let statusPagePostCameraTitleContainer = new Container({
        left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
        contents: [
            statusPagePostCameraTitle
        ]
    });

    let titleBorderLine = new Container({
    	left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,
    	contents: [
    	]
    });

    let titlePostCameraBorderLine = new Container({
        left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });


    /******************************************/
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

    let FoodOneExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in 3 days" });

    /* Container for the First Entry */
    let statusPageFoodOneContainer = new Container({
    	left: 0, right: 0, top: 61, height: 70, skin: whiteSkin,
    	contents: [
    		milkPicture,
    		milkName,
    		foodOneLengthContainer,
    		FoodOneExpireLabel
    	],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                MainContainer.add(itemScreenContainer);
                // application.distribute("onUpdateFridgeStatus");
            }
        })

    });

    // post-camera
    let milkPCPicture = new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"});
    let milkPCName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Milk"});
    let foodPCOneLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });

    let FoodPCOneExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in 3 days" });



    /* Container for the First Entry Post Camera */
    let statusPostCameraPageFoodOneContainer = new Container({
        left: 0, right: 0, top: 61, height: 70, skin: whiteSkin,
        contents: [
            milkPCPicture,
            milkPCName,
            foodPCOneLengthContainer,
            FoodPCOneExpireLabel
        ]
    });

    /******************************************/
    /************ SECOND FOOD ENTRY ************/

    let avocadoPicture = new Picture({left: 3, right: 257, height: 64, url: "avocado.jpg"});
    let avocadoName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Avocado"});
    let foodTwoLengthContainer = new Container({
    	left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
    	contents: [
    	]
    });
    let FoodTwoExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in 12 days" });

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

    // post-camera
    let avocadoPCPicture = new Picture({left: 3, right: 257, height: 64, url: "avocado.jpg"});
    let avocadoPCName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Avocado"});
    let foodPCTwoLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let FoodPCTwoExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in 12 days" });



    /* Container for the Second Entry */
    let statusPostCameraPageFoodTwoContainer = new Container({
        left: 0, right: 0, top: 132, height: 70, skin: whiteSkin,
        contents:[
            avocadoPCPicture,
            avocadoPCName,
            foodPCTwoLengthContainer,
            FoodPCTwoExpireLabel
        ]
    });


    /******************************************/
    /************ THIRD FOOD ENTRY ************/

    let ketchupPicture = new Picture({left: 3, right: 257, height: 64, url: "ketchup.jpg"});
    let ketchupName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Ketchup"});
    let foodThreeLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let FoodThreeExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in 17 days" });

    /* Container for the Second Entry */
    let statusPageFoodThreeContainer = new Container({
        left: 0, right: 0, top: 201, height: 70, skin: whiteSkin,
        contents:[
            ketchupPicture,
            ketchupName,
            foodThreeLengthContainer,
            FoodThreeExpireLabel
        ]
    });


    /******************************************/
    /************ FOURTH FOOD ENTRY ************/

    let jerkyPicture = new Picture({left: 3, right: 257, height: 64, url: "jerky.jpg"});
    let jerkyName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Jerky"});
    let foodFourLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let FoodFourExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in 23 days" });

    /* Container for the Second Entry */
    let statusPageFoodFourContainer = new Container({
        left: 0, right: 0, top: 272, height: 70, skin: whiteSkin,
        contents:[
            jerkyPicture,
            jerkyName,
            foodFourLengthContainer,
            FoodFourExpireLabel
        ]
    });


    /******************************************/
    /************ FIFTH FOOD ENTRY ************/

    let cerealPicture = new Picture({left: 3, right: 257, height: 64, url: "cereal.jpg"});
    let cerealName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Cereal"});
    let foodFiveLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let FoodFiveExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in 4 years" });

    /* Container for the Second Entry */
    let statusPageFoodFiveContainer = new Container({
        left: 0, right: 0, top: 342, height: 70, skin: whiteSkin,
        contents:[
            cerealPicture,
            cerealName,
            foodFiveLengthContainer,
            FoodFiveExpireLabel
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

    /*****************************************************************/
    /************ FOOD STATUS PAGE CONTAINER AFTER CAMERA ************/

    let FoodStatusPostContainer = new Container({
        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
        contents: [
            statusPagePostCameraTitleContainer,
            titlePostCameraBorderLine,

            statusPostCameraPageFoodOneContainer,
            foodPCOneBorderLine,

            statusPostCameraPageFoodTwoContainer,
            foodPCTwoBorderLine, 

            statusPageFoodThreeContainer,
            foodThreeBorderLine,

            statusPageFoodFourContainer,
            foodFourBorderLine,

            statusPageFoodFiveContainer,
            foodFiveBorderLine,

            statusPostCameraPageButtonContainer
        ]   
    });


/************************************************************************/
/************************ ITEM IMPLEMENTATION ***************************/
/************************************************************************/



    /* Item Detail Top Bar Container */
    var itemTitleContainer = new Container({
        left: 0, right: 0, top: 0, height: 60, skin: lightBlueSkin,
        contents: [
            new Label({height: 38, top: 11, left: 17, style: itemStyle, string: "<"}),
            new Label({height: 38, top: 11, style: itemStyle, string: "Milk"}),
        ]
    });


    /* Item Detail Container */
    let milkPictureTwo = new Picture({top:50, left: 50, right: 50, height: 100, url: "cow.jpg"});

    let milkColum = new Column({top: 0, bottom: 0, right: 15, contents: [
                    new Label({left: 25, string: "Milk", style: itemTitleStyle}),
                    new Label({left: 25, string: "Communal Food", style: itemDetailStyle}),
                    new Label({left: 25, string: "Expires in 1 day", style: itemExpireStyle}),
                ]});

    let milkLine =  new Line({
                left: 0, right: 0, 
                contents: [ milkColum ] });

    let itemDetailContainer = new Container({
        left: 0, right: 0, top: 20, bottom: 0, height: 80,
        contents: milkLine
    });

    var throwContainer = new Container({
        left: 0, right: 0, skin: whiteSkin,
        contents: [
            throwButton
        ]
    });

    var useContainer = new Container({
        left: 0, right: 0, skin: whiteSkin,
        contents: [
            useButton
        ]
    });


    /* "Ask your Roommates" Container */
    var messageContainer = new Column({
        left: 0, right: 0,  bottom: 100, height: 100, skin: whiteSkin,
        contents: [
            new Label({left: 15, top: 15, height: 40, string: "Ask your Roommates:", style: askStyle}),
            throwContainer,
            new Container({height: 15}),
            useContainer
        ]
    });

        let itemStatusContainer = new Container({
            left: 0, right: 0, top: 0, height: 40, skin: headerSkin,
            contents: itemDetailButtonContainer
        });


    let itemScreenContainer = new Container({
        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
        contents: [        
            messageContainer,
            itemStatusContainer,
            itemDetailContainer,
            milkPictureTwo
            
        ]   
    });


/************************************************************************/
/******************** CAMERA PAGE IMPLEMENTATION ************************/
/************************************************************************/


        /******* LOADING CAMERA STATUS CONTAINER (3) ********/
        let cameraStatusContainer = new Container({
            left: 0, right: 0, top: 0, height: 40, skin: headerSkin,
            contents: cameraStatusButtonContainer
        });

        let cameraStatusOneContainer = new Container({
            left: 0, right: 0, top: 0, height: 40, skin: headerSkin,
            contents: cameraStatusOneButtonContainer
        });

        let cameraStatusTwoContainer = new Container({
            left: 0, right: 0, top: 0, height: 40, skin: headerSkin,
            contents: cameraStatusTwoButtonContainer
        });


    /******* LOADING CAMERA -- FIRST STEP ********/
        let loadingCamera = new Picture({
            height: 500, url: "camera_preview.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(RotatingCameraContainer);
                    // application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        /******* LOADING CAMERA CONTAINER ********/
        let LoadingCameraContainer = new Container({
            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
            contents: [
                loadingCamera,
                cameraStatusContainer,
                cameraButtonContainer
            ]   
        });


    /******* ROTATING CAMERA -- SECOND STEP ********/
        /******* ROTATING CAMERA ********/
        let rotatingCamera = new Picture({
            height: 500, url: "camera_preview_two.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(ConfirmingCameraContainer);
                    // application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        /******* ROTATING CAMERA CONTAINER ********/
        let RotatingCameraContainer = new Container({
            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
            contents: [
                rotatingCamera,
                cameraStatusOneContainer,
                cameraOneButtonContainer
            ]   
        });


    /******* CONFIRMING CAMERA -- THIRD STEP ********/
        /******* CONFIRMING CAMERA ********/
        let confirmingCamera = new Picture({
            height: 500, url: "camera_confirm.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    // MainContainer.empty();
                    // MainContainer.add(FoodStatusPageContainer);
                    // application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        /******* CONFIRMING CAMERA CONTAINER ********/
        let ConfirmingCameraContainer = new Container({
            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
            contents: [
                confirmingCamera,
                cameraStatusTwoContainer,
                cameraTwoButtonContainer
            ]   
        });




/********************************************************************************/
/******************** CAMERA CONFIRM PAGE IMPLEMENTATION ************************/
/********************************************************************************/


    /******************** CONFIRMATION PAGE ONE ************************/
        let postCameraConfirm = new Picture({
            height: 500, url: "post_camera_confirm_one.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(postCameraConfirmOneContainer);
                    // application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        let postCameraConfirmContainer = new Container({
            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
            contents: [
                postCameraConfirm
                // cameraStatusContainer,
                // cameraButtonContainer
            ]   
        });

    /******************** CONFIRMATION PAGE TWO ************************/
        let postCameraConfirmOne = new Picture({
            height: 500, url: "post_camera_confirm_two.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(postCameraConfirmTwoContainer);
                    // application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        let postCameraConfirmOneContainer = new Container({
            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
            contents: [
                postCameraConfirmOne
                // cameraStatusContainer,
                // cameraButtonContainer
            ]   
        });

    /******************** CONFIRMATION PAGE THREE ************************/
        let postCameraConfirmTwo = new Picture({
            height: 500, url: "post_camera_confirm_three.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(FoodStatusPostContainer);
                    application.distribute("onUpdateFridgeStatus");
                }
            })
        });

        let postCameraConfirmTwoContainer = new Container({
            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
            contents: [
                postCameraConfirmTwo
                // cameraStatusContainer,
                // cameraButtonContainer
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



