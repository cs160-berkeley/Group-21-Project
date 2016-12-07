import CONTROL from 'mobile/control';
import MODEL from'mobile/model';
import Pins from "pins";
import {
    Button,
    ButtonBehavior
} from "buttons";

/************************************************************************/
/************************** SKINS AND STYLES ****************************/
/************************************************************************/

    /************ COLOR SKINS ************/
        let headerSkin = new Skin ({fill: '#45ADA8' });
        let whiteSkin = new Skin ({fill: 'white' });
        let lightGreenSkin = new Skin ({fill: '#E5F7E9' });
        let borderLineSkin = new Skin ({fill: '#979797' });
        let greySkin = new Skin ({fill: '#E4E4E4' });
        let darkerGreySkin = new Skin ({fill: '#D8D8D8' });
        let redSkin = new Skin ({fill: '#F87E7B' });
        let yellowSkin = new Skin ({fill: '#F0F89E' });
        let expireGreenSkin = new Skin ({fill: '#B8E986' });
        let lightBlueSkin = new Skin ({fill: '#40E0D0' });
        let blackSkin = new Skin ({fill: 'black' });
        let messageGreenSkin = new Skin ({fill: '#88DF9D' });
		let messageRedSkin = new Skin ({fill: '#F87E7B' });
		let messageSentGreenSkin = new Skin ({fill: '#CAE7D1' });
		let messageSentRedSkin = new Skin ({fill: '#F0C2C1' });


    /************ STYLES (1) ************/
        let titleHeaderStyle = new Style({ font: "bold 27px Copperplate Gothic Bold", color: "white" });
        let foodNameStyle = new Style({ font: "bold 20px Didot", color: "#000022" });
        let expireStyle = new Style({ font: "12px Lato", color: "#000022" });
        let ownerStyle = new Style({ font: "italic 12px Lato", color: "#000022" });

    /************ STYLES (2) ************/
        let messageStyle = new Style({ font: "20px", color: "white" });
        let messageSentStyle = new Style({ font: "20px", color: "black" });
        let askStyle = new Style({ font: "18px", color: "black" });

        /* Item Detail Style */
        let itemStyle = new Style({ font: "bold 27px Copperplate Gothic Bold", color: "white" });
        let itemTitleStyle = new Style({ font: "bold 50px Didot", color: "black" });
        let itemDetailStyle = new Style({ font: "20px", color: "black" });
        let itemExpireStyle = new Style({ font: "italic 14px", color: "black" });


    /******* STRING TEMPLATE ********/
        var StringTemplate = Label.template($ => ({
            left: $.left, right: $.right, top: $.top, bottom: $.bottom,
            style: $.style,
            string: $.string
        }));

    /******** TEMPLATE for fill in the color of expiration bar ********/
        var foodExpireLengthTemplate = Container.template($ => ({
        	left: 0, right: $.right, top: 0, bottom: 0, skin: $.skin,
    	}));
    	
    var pictureTaken = false;
    var fromPersonalPage = false;
    
    

/************************************************************************/
/************************** BUTTON TEMPLATES ****************************/
/************************************************************************/

    /* Button Templates */
    let throwButtonTemplate = Container.template($ => ({
        left: 30, right: 30, height: 40, width: 60, skin: messageGreenSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})
        ]
    }));

    let throwDarkenButtonTemplate = Container.template($ => ({
        left: 30, right: 30, height: 40, width: 60, skin: messageSentGreenSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})
        ]
    }));


    let useButtonTemplate = Container.template($ => ({
        left: 30, right: 30, height: 40, width: 60, skin: messageRedSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})
        ],
    }));

    let useDarkenButtonTemplate = Container.template($ => ({
        left: 30, right: 30, height: 40, width: 60, skin: messageSentRedSkin,
        contents: [
            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})
        ]
    }));

/************************************************************************/
/******************************* BUTTON *********************************/
/************************************************************************/

    /* Buttons */
    var milkThrowButton = new throwButtonTemplate({text: "Can I throw out 'Milk'?"});
    var milkThrowDarkenButton = new throwDarkenButtonTemplate({text: "Can I throw out 'Milk'?"});
    //var throwSentButton = new messageSentButtonTemplate({text: "Message Sent"});
    var milkUseButton = new useButtonTemplate({text: "Can I use 'Milk'?"});
    var milkUseDarkenButton = new useDarkenButtonTemplate({text: "Can I use 'Milk'?"});
    //var messagingButton = new messageButtonTemplate({text: "Message Sent"});
    var messageSent = new Label({string: "Message Sent", style: messageSentStyle});

/************************************************************************/
/****************************** HANDLER *********************************/
/************************************************************************/

    var deviceURL = "";
    Handler.bind("/discover", Behavior({
	    onInvoke: function(handler, message){
	        deviceURL = JSON.parse(message.requestText).url;
	    }
	}));

	Handler.bind("/forget", Behavior({
	    onInvoke: function(handler, message){
	        deviceURL = "";
	    }
	}));

    Handler.bind("/notifyThrow", {
        onInvoke: function(handler, message) {
            throwOkayContainer.remove(defaultThrowOkayContainer);
            throwOkayContainer.add(profilePageFoodOneContainer);
            throwOkayContainer.add(new borderLine()),
        }
    });

    Handler.bind("/notifyUse", {
        onInvoke: function(handler, message) {
            consumeOkayContainer.remove(defaultConsumeOkayContainer);
            consumeOkayContainer.add(profilePageFoodOneContainer);
            consumeOkayContainer.add(new borderLine()),
        }
    });

    class MediaBehavior extends Behavior {
    	onCreate(media, data) {
    		this.data = data;
    	}
    	onDisplaying(media) {
    		media.url = "final_safeway.mp4";
    	}
    	onLoaded(media) {
    		media.volume = 0.8;
    		media.start();
    	}
    	onFinished(media) {
    		media.stop();
    	}
    }


/************************************************************************/
/************************** GENERAL COMPONENTS **************************/
/************************************************************************/

    /* Status Page Boarder Line Template */
    var statusPageBorderLineTemplate = Container.template($ => ({
    	left: 0, right: 0, top: 70, height: 1, skin: borderLineSkin,
    	contents: [
    	]
    }));

        /******************* ITEM BACK BUTTON *******************/
        let itemBackButton = Picture.template($ => ({
            left: 10, url: "back.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    if (pictureTaken == false) {
                    	if (fromPersonalPage == false) {
                    		MainContainer.add(FoodStatusPageContainer);
                    	} else {
                    		MainContainer.add(personalPageContainer);
                    	}
                    } else {
                    	if (fromPersonalPage == false) {
                    		MainContainer.add(newStatusPageContainer);
                    	} else {
                    		MainContainer.add(personalPageContainer);
                    	}
                    }
                    /**MainContainer.add(FoodStatusPageContainer);**/
                    /**application.distribute("onUpdateFridgeStatus");**/
                }
            })
        }));

    let itemDetailButtonContainer = Container.template($ => ({
        left: 0, right: 0, bottom: 0, height: 60, skin: headerSkin,
        contents: [new itemBackButton(), new Label({string: $.item, style: itemStyle})]

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

    /******* LOADING PAGE CONTAINER ********/
    let LoadingPageContainer = new Container({
        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
        contents: [
            loadingPic
        ]
    });


/************************************************************************/
/****************** FRIDGE STATUS PAGE IMPLEMENTATION *******************/
/************************************************************************/


	/* Status Page Title Container Implementation */
    let statusPageTitle = new Label({height: 38, style: titleHeaderStyle, string: "Home"})
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


    // DETAIL
    let itemDetailTitle = new Label({height: 38, style: titleHeaderStyle, string: "Item Detail"})
    var statusItemDetailContainer = new Container({
        left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
        contents: [
            itemDetailTitle
        ]
    });

    /*****************************************************/
    /************ STATUS PAGE MILK FOOD ENTRY ************/
    let milkPicture = new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"});
    let milkName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Milk"});
    let milkLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let milkExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    /* Container for the Milk Item */
    var statusPageMilkTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            milkPicture,
            milkName,
            milkLengthContainer,
            milkExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                MainContainer.add(itemScreenContainer);
            }
        })
    }));
    let statusPageMilkContainer = new statusPageMilkTemplate({
        skin: lightGreenSkin, owner: "Communal"
    });

    var statusPageFoodOneTemplate = Container.template($ => ({
        left: 0, right: 0, top: 61, bottom: 436, height: 71, skin: $.skin,
        contents: $.contents
    }));
    let statusPageFoodOneContainer = new statusPageFoodOneTemplate({
        skin: whiteSkin,
        contents: [
            statusPageMilkContainer,
            new statusPageBorderLineTemplate()
        ]
    });


    /********************************************************/
    /************ STATUS PAGE AVOCADO FODD ENTRY ************/

    let avocadoPicture = new Picture({left: 3, right: 257, height: 64, url: "avocado.jpg"});
    let avocadoName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Avocado"});
    let avocadoLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let avocadoExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    var statusPageAvocadoTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            avocadoPicture,
            avocadoName,
            avocadoLengthContainer,
            avocadoExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                MainContainer.add(itemScreenContainer2);
            }
        })
    }));
    let statusPageAvocadoContainer = new statusPageAvocadoTemplate({
        skin: whiteSkin, owner: "Hannah"
    });

    var statusPageFoodTwoTemplate = Container.template($ => ({
        left: 0, right: 0, top: 132, height: 71, skin: $.skin,
        contents: $.contents
    }));
    let statusPageFoodTwoContainer = new statusPageFoodTwoTemplate({
        skin: whiteSkin,
        contents: [
            statusPageAvocadoContainer,
            new statusPageBorderLineTemplate()
        ]
    });

		/* Status Page Buttons Implementation */
        /** let statusPageHomeButton = new Picture({
            left: 140, url: "home.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })
        }); **/
        var statusPageHomeButton = Picture.template($ => ({
            left: 140, url: "home.png",
            active: true,
            /**behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                }
            })**/
            behavior: $.behavior
        }));

        /**let statusPageCameraButton = new Picture({
            left: 50, url: "camera.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(cameraPageContainer);
                }
            })
        }); **/

        var statusPageCameraButton = Picture.template($ => ({
            left: 50, url: "camera.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                    MainContainer.empty();
                    MainContainer.add(cameraPageContainer);
                }
            })
        }));

        /**let statusPageProfileButton = new Picture({
            right: 50, url: "profile.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                	MainContainer.empty();
                	MainContainer.add(personalPageContainer);
                }
            })
        }); **/

        var statusPageProfileButton = Picture.template($ => ({
            right: 50, url: "profile.png",
            active: true,
            behavior: Behavior({
                onTouchEnded(container, id, x, y, ticks) {
                	fromPersonalPage = true;
                	MainContainer.empty();
                	MainContainer.add(personalPageContainer);
                }
            })
        }));
        /** let statusPageButtonContainer = new Container({
        	left: 0, right: 0, bottom: 0, height: 60, skin: greySkin,
        	contents: [
            	statusPageHomeButton,
            	statusPageCameraButton,
            	statusPageProfileButton
        	]
    	}); **/
    	var FoodStatusPageButtonContainer = Container.template($ => ({
        	left: 0, right: 0, bottom: 0, height: 60, skin: greySkin,
        	contents: [
            	new statusPageHomeButton({
            		behavior: Behavior({
            			onTouchEnded(container, id, x, y, ticks) {
            			}
            		})
            	}),
            	new statusPageCameraButton(),
            	new statusPageProfileButton()
        	]
    	}));
    	
    	var statusPageButtonContainer = Container.template($ => ({
	    	left: 0, right: 0, bottom: 0, height: 60, skin: greySkin,
	        	contents: [
	            	new statusPageHomeButton({
	            		behavior: Behavior({
	            			onTouchEnded(container, id, x, y, ticks) {
	            				fromPersonalPage = false;
	            				MainContainer.empty();
	            				if (pictureTaken == false) {
	            					MainContainer.add(FoodStatusPageContainer);
	            				} else {
	            					MainContainer.add(newStatusPageContainer);
	            				}
	            			}
	            		})
	            	}),
	            	new statusPageCameraButton(),
	            	new statusPageProfileButton()
	        ]
    	}));
    	
    	


    


    /****************************************************/
    /************ FOOD STATUS PAGE CONTAINER ************/

    let FoodStatusPageContainer = new Container({
        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
        contents: [
            statusPageTitleContainer,
            titleBorderLine,
            statusPageFoodOneContainer,
            statusPageFoodTwoContainer,
            new FoodStatusPageButtonContainer()
        ]
    });

/************************************************************************/
/************************ ITEM IMPLEMENTATION ***************************/
/************************************************************************/
    /* Item Detail Top Bar Container */
    /*var itemTitleContainer = new Container({
        left: 0, right: 0, top: 0, height: 60, skin: lightBlueSkin,
        contents: [
            new Label({height: 38, top: 11, left: 17, style: itemStyle, string: "<"}),
            new Label({height: 38, top: 11, style: itemStyle, string: "Milk"}),
        ]
    });*/


    /* Item Detail Container */
    //let milkPictureTwo = new Picture({top:50, left: 50, right: 50, height: 100, url: "cow.jpg"});

    /**let milkColum = new Column({top: 0, bottom: 0, right: 15, contents: [
                    new Label({left: 25, string: "Milk", style: itemTitleStyle}),
                    new Label({left: 25, string: "Communal Food", style: itemDetailStyle}),
                    new Label({left: 25, string: "Expires in 1 day", style: itemExpireStyle}),
                ]});**/

    /**let milkLine =  new Line({
                left: 0, right: 0,
                contents: [ milkColum ] });**/

    /* Item Top Bar */
    let itemStatusContainer = Container.template($ => ({
            left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
            contents: new itemDetailButtonContainer({item: $.item})
        }));

    let foodExpireMeter = Container.template($=> ({
    	left: 5, right: 0, bottom: 0, top: 10, skin: greySkin,
    	contents: [
    	]
    }));

    let foodOneLengthContainer2 = new foodExpireMeter();

    let itemDetailContainer = Container.template($ => ({
        left: 0, right: 0, top: 0, bottom: 0, height: 100, darkerGreySkin,
        contents: [
			new Line({left: 0, right: 0, contents: [
				new Picture({left: 10, width: 120, height: 150, url: $.url}),
				new Column({top: 0, bottom: 0, left: 15, right: 15, contents: [
					new Label({left: 5, string: $.itemName, style: itemTitleStyle}),
					$.itemDetailOwner,
					/**new Label({left: 5, string: "Communal Food", style: itemDetailStyle}),**/
					new Container({height: 15}),
					/**new Label({left: 5, string: $.itemExpireTime, style: itemExpireStyle}),**/
					/**new Label({left: 5, string: "Expires in 1 day", style: itemExpireStyle}),**/
					$.itemExpireTime,
					$.itemExpireMeter
				]})
			]}),
		]
	}));

	/** Message Container **/
    var throwMessageSentTemplate = Container.template($ => ({ left: 30, right: 30, height: 40, width: 60, skin: messageSentGreenSkin, contents: [new Label ({ left:0, right:0, height:40, string: 'Message Sent', style: messageStyle})] }));
    var useMessageSentTemplate = Container.template($ => ({ left: 30, right: 30, height: 40, width: 60, skin: messageSentRedSkin, contents: [new Label ({ left:0, right:0, height:40, string: 'Message Sent', style: messageStyle})] }));


    var milkClick = 0;
    var throwContainer = Container.template($ => ({
        left: 0, right: 0, skin: whiteSkin,
        contents: [
            new throwButtonTemplate({text: $.text})
        ],
        active: true,
        behavior: Behavior({
        	onTouchBegan(container, id, x, y, ticks) {
        		//throwContainer.remove(milkThrowButton);
        		//throwContainer.empty();
        		//if (milkClick < 1) {
        		container.add(new throwDarkenButtonTemplate({text: $.text}));
        		//}
        	},
            onTouchEnded(container, id, x, y, ticks) {
            	//throwContainer.empty();
                //throwContainer.remove(milkThrowDarkenButton);
                //if (milkClick < 1) {
                container.add(new throwMessageSentTemplate());
                if (deviceURL != "") new MessageWithObject(deviceURL + "askThrow", "Test2").invoke();//.invoke(Message.JSON).then(json => { $.text });
                //}
                milkClick++;
            }
        })
    }));

	var milkClick2 = 0;
    var useContainer = Container.template($ => ({
        left: 0, right: 0, skin: whiteSkin,
        contents: [
            new useButtonTemplate({text: $.text})
        ],
        active: true,
        behavior: Behavior({
        	onTouchBegan(container, id, x, y, ticks) {
        		//useContainer.remove(milkUseButton);
        		//if (milkClick2 < 1) {
	        		container.add(new useDarkenButtonTemplate({text: $.text}));
	        	//}
        	},
            onTouchEnded(container, id, x, y, ticks) {
                //useContainer.remove(milkUseDarkenButton);
                //if (milkClick2 < 1) {
	                container.add(new useMessageSentTemplate());
                    if (deviceURL != "") new MessageWithObject(deviceURL + "askUse", "Test2").invoke();
	            //}
	            milkClick2++;
            }
        })
    }));

	var avoClick = 0;
    var throwContainer2 = Container.template($ => ({
        left: 0, right: 0, skin: whiteSkin,
        contents: [
            new throwButtonTemplate({text: $.text})
        ],
        active: true,
        behavior: Behavior({
        	onTouchBegan(container, id, x, y, ticks) {
        		//throwContainer.remove(milkThrowButton);
        		//throwContainer.empty();
        		if (avoClick < 1) {
        		container.add(new throwDarkenButtonTemplate({text: $.text}));
        		}
        	},
            onTouchEnded(container, id, x, y, ticks) {
            	//throwContainer.empty();
                //throwContainer.remove(milkThrowDarkenButton);
                if (avoClick < 1) {
                container.add(new throwMessageSentTemplate());
                }
                avoClick++;
            }
        })
    }));

    var avoClick2 = 0;
    var useContainer2 = Container.template($ => ({
        left: 0, right: 0, skin: whiteSkin,
        contents: [
            new useButtonTemplate({text: $.text})
        ],
        active: true,
        behavior: Behavior({
        	onTouchBegan(container, id, x, y, ticks) {
        		//useContainer.remove(milkUseButton);
        		if (avoClick2 < 1) {
	        		container.add(new useDarkenButtonTemplate({text: $.text}));
	        	}
        	},
            onTouchEnded(container, id, x, y, ticks) {
                //useContainer.remove(milkUseDarkenButton);
                if (avoClick2 < 1) {
	                container.add(new useMessageSentTemplate());
	            }
	            avoClick2++;
            }
        })
    }));


    /* "Ask your Roommates" Container */
    var messageContainer = Column.template($ => ({
        left: 0, right: 0, top: 0, bottom: 0, height: 100, skin: whiteSkin,
        contents: [
            new Label({left: 15, top: 15, height: 40, string: "Ask your Roommates:", style: askStyle}),
            new throwContainer({text: "Can I throw out '" + $.item + "'?"}),
            new Container({height: 15}),
            new useContainer({text: "Can I use '" + $.item + "'?"})
        ]
    }));

	let itemExpireTimeMilk = new StringTemplate({left: 5, string: "Expires in N/A days.", style: itemExpireStyle});
	let itemDetailOwnerMilk = new StringTemplate({left: 5, string: "Communal Food", style: itemDetailStyle});
    let itemScreenContainer = new Column({
        left: 0, right: 0, top: 0, bottom: 0, skin: darkerGreySkin,
        contents: [
        	new itemStatusContainer({item: "Milk"}),
            new itemDetailContainer({url: "milk.jpeg", itemName: "Milk", itemDetailOwner: itemDetailOwnerMilk, itemExpireTime: itemExpireTimeMilk, itemExpireMeter: foodOneLengthContainer2}),
            new messageContainer({item: "Milk"}),
            new statusPageButtonContainer(),
            /**messageContainer,
            itemStatusContainer,
            itemDetailContainer,
            milkPictureTwo**/
        ]
    });

	let itemExpireTimeAvocado = new StringTemplate({left: 5, string: "Expires in N/A days.", style: itemExpireStyle});
	let itemDetailOwnerAvocado = new StringTemplate({left: 5, string: "Hannah's Food", style: itemDetailStyle});
    let foodTwoLengthContainer2 = new foodExpireMeter();

    let itemScreenContainer2 = new Column({
    	left: 0, right: 0, top: 0, bottom: 0, skin: darkerGreySkin,
        contents: [
        	new itemStatusContainer({item: "Avocado"}),
            new itemDetailContainer({url: "avocado.jpg", itemName: "Avocado", itemDetailOwner: itemDetailOwnerAvocado, itemExpireTime: itemExpireTimeAvocado, itemExpireMeter: foodTwoLengthContainer2}),
            new messageContainer({item: "Avocado"}),
            new statusPageButtonContainer(),
        ]
    });

/************************************************************************/
/************************* PROFILE PAGE ********************************/
/************************************************************************/
    let headerContainer = Container.template($ => ({left: 0, right: 0, top: 0, height: 40, skin: headerSkin, contents: [new Label({left: 0, right: 0, string: $.text, style: itemStyle})]}));
    let borderLine = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 1, skin: borderLineSkin,
        contents: [
        ]
    }));
    /* Container for the First Entry */
    let FoodOneExpireLabel2 = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    var defaultConsumeOkayContainer = new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Items", style: itemDetailStyle})]});
    var consumeOkayContainer = new Column({
        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
        contents: [
            new headerContainer({text: "Okay to Consume:"}),
            defaultConsumeOkayContainer,
        ]
    })

    let foodOneLengthContainer3 = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });

    let profilePageFoodOneContainer = new Container({
        left: 0, right: 0, /*top: 61,*/ height: 70, skin: whiteSkin,
        contents: [
            new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"}),
            new Label({left: 65, right: 180, style: foodNameStyle, string: "Milk"}),
            foodOneLengthContainer3,
            FoodOneExpireLabel2,
        ],
    });
    /*****************/

    var notifContainer = new Column({
        left: 0, right: 0, top: 0, height: 120, skin: whiteSkin,
        contents: [
            new itemStatusContainer({item: "Notifications:"}),
            new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Notifications", style: itemDetailStyle})]}),
        ]
    });
    var defaultThrowOkayContainer = new Container({left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin, contents:[new Label({left: 0, right: 0, string: "No Items", style: itemDetailStyle})]})
    var throwOkayContainer = new Column({
        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
        contents: [
            new headerContainer({text: "Okay to Throw Out:"}),
            defaultThrowOkayContainer,
        ]
    });

    let profileScreenContainer = new Column({
        left: 0, right: 0, top: 0, bottom:0, skin: whiteSkin,
        contents: [
            notifContainer,
            throwOkayContainer,
            consumeOkayContainer,
        ]
    });



/***************************************************************************************************/
/****************************** PERSONAL ITEMS PAGE IMPLEMENTATION *********************************/
/***************************************************************************************************/

	/* Personal Items Page Header Container & Border Line */
    let personalPageTitle = new Label({height: 38, style: titleHeaderStyle, string: "Your Items"})
    let personalPageTitleContainer = new Container({
        left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
        contents: [
            personalPageTitle
        ]
    });
    let personalPageTitleBorderLine = new Container({
        left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });

    /* Personal Items Page Buttons Implementation */
    let personalPageHomeButton = new Picture({
    	left: 140, url: "home.png",
    	active: true,
    	behavior: Behavior({
    		onTouchEnded(container, id, x, y, ticks) {
    			fromPersonalPage = false;
    			MainContainer.empty();
    			MainContainer.add(newStatusPageContainer);
    		}
    	})
    });
    let personalPageCameraButton = new Picture({
    	left: 50, url: "camera.png",
    	active: true,
    	behavior: Behavior({
    		onTouchEnded(container, id, x, y, ticks) {
    			MainContainer.empty();
    			MainContainer.add(cameraPageContainer);
    		}
    	})
    });
    let personalPageProfileButton = new Picture({
    	right: 50, url: "profile.png"
    });

    let personalPageButtonContainer = new Container({
    	left: 0, right: 0, top: 508, height: 60, skin: greySkin,
    	contents: [
    		personalPageCameraButton,
    		personalPageHomeButton,
    		personalPageProfileButton
    	]
    });

    /*************************************************************/
    /************ PERSONAL ITEMS PAGE MILK FOOD ENTRY ************/

    let personalPageMilkPicture = new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"});
    let personalPageMilkName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Milk"});
    let personalPageMilkLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let personalPageMilkExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    /* Container for the Milk Item */
    var personalPageMilkTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            personalPageMilkPicture,
            personalPageMilkName,
            personalPageMilkLengthContainer,
            personalPageMilkExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                MainContainer.add(itemScreenContainer);
            }
        })
    }));
    let personalPageMilkContainer = new personalPageMilkTemplate({
        skin: lightGreenSkin, owner: "Communal"
    });

    let personalPageFoodOneContainer = new statusPageFoodOneTemplate({
        skin: whiteSkin,
        contents: [
            personalPageMilkContainer,
            new statusPageBorderLineTemplate()
        ]
    });

    /**************************************************************/
    /************ PERSONAL ITEMS PAGE APPLE FODD ENTRY ************/

    let personalPageApplePicture = new Picture({left: 3, right: 257, height: 64, url: "apple.jpg"});
    let personalPageAppleName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Apple"});
    let personalPageAppleLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let personalPageAppleExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    var personalPageAppleTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            personalPageApplePicture,
            personalPageAppleName,
            personalPageAppleLengthContainer,
            personalPageAppleExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                //MainContainer.add();
            }
        })
    }));

    var personalPageFoodThreeTemplate = Container.template($ => ({
        left: 0, right: 0, top: 132, height: 71, skin: $.skin,
        contents: $.contents
    }));

    /***************************************************************/
    /************ PERSONAL ITEMS PAGE BANANA FODD ENTRY ************/

    let personalPageBananaPicture = new Picture({left: 3, right: 257, height: 64, url: "banana.jpg"});
    let personalPageBananaName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Banana"});
    let personalPageBananaLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let personalPageBananaExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    var personalPageBananaTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            personalPageBananaPicture,
            personalPageBananaName,
            personalPageBananaLengthContainer,
            personalPageBananaExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                //MainContainer.add();
            }
        })
    }));

    var personalPageFoodFourTemplate = Container.template($ => ({
        left: 0, right: 0, top: 203, height: 71, skin: $.skin,
        contents: $.contents
    }));


	/******************************************************/
    /************ STATUS PAGE ONION FODD ENTRY ************/

    let personalPageOnionPicture = new Picture({left: 3, right: 257, height: 64, url: "onion.jpg"});
    let personalPageOnionName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Onion"});
    let personalPageOnionLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let personalPageOnionExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });


    var personalPageOnionTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            personalPageOnionPicture,
            personalPageOnionName,
            personalPageOnionLengthContainer,
            personalPageOnionExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                //MainContainer.add();
            }
        })
    }));
    var personalPageFoodFiveTemplate = Container.template($ => ({
        left: 0, right: 0, top: 274, height: 71, skin: $.skin,
        contents: $.contents
    }));



	let personalPageContainer = new Container({
		left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
		contents: [
			personalPageTitleContainer,
			personalPageTitleBorderLine,
			personalPageButtonContainer,
			personalPageFoodOneContainer
		]
	});



/*******************************************************************************************/
/****************************** CAMERA PAGE IMPLEMENTATION *********************************/
/*******************************************************************************************/

	/* Header on Camera Page */
    let cameraPageFlashButton = new Picture({
    	left: 14, top: 16, url: "no_flash.png"
    });
    let cameraPageCrossButton = new Picture({
    	right: 18, top: 22, url: "x_blue.png",
    	active: true,
    	behavior: Behavior({
    		onTouchEnded(container, id, x, y, ticks){
    			MainContainer.empty();
    			MainContainer.add(FoodStatusPageContainer);
    		}
    	})
    });
	let cameraPageTitleContainer = new Container({
		left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
		contents: [
			cameraPageFlashButton,
			cameraPageCrossButton
		]
	});

	/* Button on Camera Page */
	let cameraPageCameraButton = new Picture({
		left: 140, height: 100, url: "d_camera.png",
		active: true,
		behavior: Behavior({
			onTouchEnded(container, id, x, y, ticks) {
				MainContainer.empty();
				MainContainer.add(ConfirmPageContainer);
			}
		})
	});
	let cameraPageButtonContainer = new Container({
		left: 0, right: 0, top: 508, height: 60, skin: greySkin,
		contents: [
			cameraPageCameraButton
		]
	});

	let cameraPageVideoContainer = new Container({
		left: 0, right: 0, top: 60, bottom: 60, width: 320, skin: blackSkin,
		contents: [
			new Media({
				left: 0, right: 0, top: 0, bottom: 0, height: 447,
				anchor: 'MEDIA', url: "final_safeway.mp4",
				Behavior: MediaBehavior
			})
		]
	});


	let cameraPageContainer = new Container({
		left: 0, right: 0, top: 0, buttom: 0,
		skin: whiteSkin,
		contents: [
			cameraPageTitleContainer,
			cameraPageVideoContainer,
			cameraPageButtonContainer
		]
	});


/*******************************************************************************************/
/******************** AFTER CAMERA CONFIRM ITEM PAGE IMPLEMENTATION ************************/
/*******************************************************************************************/

		var newFood = ["apple", "banana", "onion"];
		var newFoodOwner = {"apple": "Joyce", "banana": "Joyce", "onion": "Joyce"};

        /* Confirm Items Page Title & Border Line After Title Container */
        let confirmPageTitle = new Label({height: 38, style:titleHeaderStyle, string: "Confirm Items"});
        let confirmPageTitleBorderLine = new Container({
        	left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,
        	contents: [
        	]
    	});
    	let crossButton = new Picture ({
    		right: 15, url: "x_blue.png",
    		active: true,
    		behavior: Behavior({
    			onTouchEnded(container, id, x, y, ticks) {
    				MainContainer.empty();
    				MainContainer.add(FoodStatusPageContainer);
    			}
    		})
    	});
        let confirmPageTitleContainer = new Container({
        	left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
        	contents: [
        		confirmPageTitle,
        		crossButton
        	]
        });

        /******************* Confirm Page Apple Container *******************/
        let confirmPageAppleBorderLine = new Container({
        	left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,
        	contents: [
        	]
        });
        let confirmPageAppleLabel = new StringTemplate({
        	left: 20, top: 25, bottom: 25, style: foodNameStyle,
        	string: "Apple"
        });

        	/********* Confirm Page Apple Checkboxes *********/
        	/********************* JOYCE *********************/
	        let confirmPageAppleJoyceGreyBox = new Picture({
	        	left: 6, top: 2, height: 12, url: "grey_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks){
	        			newFoodOwner["apple"] = "Joyce";
	        			confirmPageAppleHannahBoxContainer.empty();
	        			confirmPageAppleHannahBoxContainer.add(confirmPageAppleHannahGreyBox);
	        			confirmPageAppleJoyceBoxContainer.empty();
	        			confirmPageAppleJoyceBoxContainer.add(confirmPageAppleJoyceBlueBox);
	        			confirmPageAppleCommunalBoxContainer.empty();
	        			confirmPageAppleCommunalBoxContainer.add(confirmPageAppleCommunalGreyBox);
	        		}
	        	})
	        });
	        let confirmPageAppleJoyceBlueBox = new Picture({
	        	left: 0, top: 0, height: 15, url: "blue_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks) {
	        			newFoodOwner["apple"] = "Joyce";
	        			confirmPageAppleJoyceBoxContainer.empty();
	        			confirmPageAppleJoyceBoxContainer.add(confirmPageAppleJoyceGreyBox);
	        		}
	        	})
	        });
	        let confirmPageAppleJoyceBoxContainer = new Container({
	        	left: 58, right: 229, top: 24, height: 20,
	        	contents: [
	        		confirmPageAppleJoyceGreyBox
	        	]
	        });
	        let confirmPageAppleJoyceLabel = new StringTemplate({
	        	left: 100, top: 30, bottom: 25, style: ownerStyle,
	        	string: "Joyce"
	        });

	        /********************* HANNAH *********************/
	        let confirmPageAppleHannahGreyBox = new Picture({
	        	left: 6, top: 2, height: 12, url: "grey_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks){
	        			newFoodOwner["apple"] = "Hannah";
	        			confirmPageAppleHannahBoxContainer.empty();
	        			confirmPageAppleHannahBoxContainer.add(confirmPageAppleHannahBlueBox);
	        			confirmPageAppleJoyceBoxContainer.empty();
	        			confirmPageAppleJoyceBoxContainer.add(confirmPageAppleJoyceGreyBox);
	        			confirmPageAppleCommunalBoxContainer.empty();
	        			confirmPageAppleCommunalBoxContainer.add(confirmPageAppleCommunalGreyBox);
	        		}
	        	})
	        });
	        let confirmPageAppleHannahBlueBox = new Picture({
	        	left: 0, top: 0, height: 15, url: "blue_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks) {
	        			newFoodOwner["apple"] = "Joyce";
	        			confirmPageAppleHannahBoxContainer.empty();
	        			confirmPageAppleHannahBoxContainer.add(confirmPageAppleHannahGreyBox);
	        		}
	        	})
	        });
	        let confirmPageAppleHannahBoxContainer = new Container({
	        	left: 116, right: 229, top: 24, height: 20, skin: whiteSkin,
	        	contents: [
	        		confirmPageAppleHannahGreyBox
	        	]
	        });
	        let confirmPageAppleHannahLabel = new StringTemplate({
	        	left: 158, top: 30, bottom: 25, style: ownerStyle,
	        	string: "Hannah"
	        });

	        /********************* COMMUNAL *********************/
	        let confirmPageAppleCommunalGreyBox = new Picture({
	        	left: 6, top: 2, height: 12, url: "grey_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks){
	        			newFoodOwner["apple"] = "Communal";
	        			confirmPageAppleHannahBoxContainer.empty();
	        			confirmPageAppleHannahBoxContainer.add(confirmPageAppleHannahGreyBox);
	        			confirmPageAppleJoyceBoxContainer.empty();
	        			confirmPageAppleJoyceBoxContainer.add(confirmPageAppleJoyceGreyBox);
	        			confirmPageAppleCommunalBoxContainer.empty();
	        			confirmPageAppleCommunalBoxContainer.add(confirmPageAppleCommunalBlueBox);
	        		}
	        	})
	        });
	        let confirmPageAppleCommunalBlueBox = new Picture({
	        	left: 0, top: 0, height: 15, url: "blue_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks) {
	        			newFoodOwner["apple"] = "Joyce";
	        			confirmPageAppleCommunalBoxContainer.empty();
	        			confirmPageAppleCommunalBoxContainer.add(confirmPageAppleCommunalGreyBox);
	        		}
	        	})
	        });
	        let confirmPageAppleCommunalBoxContainer = new Container({
	        	left: 188, right: 229, top: 24, height: 20, skin: whiteSkin,
	        	contents: [
	        		confirmPageAppleCommunalGreyBox
	        	]
	        });

	        let confirmPageAppleCommunalLabel = new StringTemplate({
	        	left: 230, top: 30, bottom: 25, style: ownerStyle,
	        	string: "Communal"
	        });

        let confirmPageAppleCross = new Picture ({
        	right: 15, url: "x_gray.png",
        	active: true,
        	behavior: Behavior({
        		onTouchEnded(container, id, x, y, ticks){
        			newFood.splice(newFood.indexOf("apple"), 1);
        			delete newFoodOwner["apple"];
        			if (newFood.includes("banana")) {
        				if (newFood.includes("onion")) {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        					confirmPageOneContainer.add(confirmPageBananaContainer);
        					confirmPageTwoContainer.add(confirmPageOnionContainer);
        				} else {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        					confirmPageOneContainer.add(confirmPageBananaContainer);
        				}
        			} else {
        				if (newFood.includes("onion")) {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageOneContainer.add(confirmPageOnionContainer);
        				} else {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        				}
        			}
        		}
        	})
        });
        let confirmPageAppleContainer = new Container({
        	left: 0, right: 0, top: 0, height: 61, skin: whiteSkin,
        	contents: [
        		confirmPageAppleLabel,
        		confirmPageAppleCross,
        		confirmPageAppleBorderLine,
        		confirmPageAppleJoyceLabel,
        		confirmPageAppleJoyceBoxContainer,
        		confirmPageAppleHannahLabel,
        		confirmPageAppleHannahBoxContainer,
        		confirmPageAppleCommunalLabel,
        		confirmPageAppleCommunalBoxContainer
        	]
        });



        /******************* Confirm Page Banana Container *******************/
        let confirmPageBananaBorderLine = new Container({
        	left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,
        	contents: [
        	]
        });
        let confirmPageBananaLabel = new StringTemplate({
        	left: 20, top: 25, bottom: 25, style: foodNameStyle,
        	string: "Banana"
        });
        let confirmPageBananaCross = new Picture({
        	right: 15, url: "x_gray.png",
        	active: true,
        	behavior: Behavior({
        		onTouchEnded(container, id, x, y, ticks){
        			newFood.splice(newFood.indexOf("banana"), 1);
        			delete newFoodOwner["banana"];
        			if (newFood.includes("apple")) {
        				if (newFood.includes("onion")) {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        					confirmPageOneContainer.add(confirmPageAppleContainer);
        					confirmPageTwoContainer.add(confirmPageOnionContainer);
        				} else {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        					confirmPageOneContainer.add(confirmPageAppleContainer);
        				}
        			} else {
        				if (newFood.includes("onion")) {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        					confirmPageOneContainer.add(confirmPageOnionContainer);
        				} else {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        				}
        			}
        		}
        	})
        });
        	/********* Confirm Page Banana Checkboxes *********/
        	/********************* JOYCE *********************/
	        let confirmPageBananaJoyceGreyBox = new Picture({
	        	left: 6, top: 2, height: 12, url: "grey_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks){
	        			newFoodOwner["banana"] = "Joyce";
	        			confirmPageBananaHannahBoxContainer.empty();
	        			confirmPageBananaHannahBoxContainer.add(confirmPageBananaHannahGreyBox);
	        			confirmPageBananaJoyceBoxContainer.empty();
	        			confirmPageBananaJoyceBoxContainer.add(confirmPageBananaJoyceBlueBox);
	        			confirmPageBananaCommunalBoxContainer.empty();
	        			confirmPageBananaCommunalBoxContainer.add(confirmPageBananaCommunalGreyBox);
	        		}
	        	})
	        });
	        let confirmPageBananaJoyceBlueBox = new Picture({
	        	left: 0, top: 0, height: 15, url: "blue_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks) {
	        			newFoodOwner["banana"] = "Joyce";
	        			confirmPageBananaJoyceBoxContainer.empty();
	        			confirmPageBananaJoyceBoxContainer.add(confirmPageBananaJoyceGreyBox);
	        		}
	        	})
	        });
	        let confirmPageBananaJoyceBoxContainer = new Container({
	        	left: 58, right: 229, top: 24, height: 20,
	        	contents: [
	        		confirmPageBananaJoyceGreyBox
	        	]
	        });
	        let confirmPageBananaJoyceLabel = new StringTemplate({
	        	left: 100, top: 30, bottom: 25, style: ownerStyle,
	        	string: "Joyce"
	        });

	        /********************* HANNAH *********************/
	        let confirmPageBananaHannahGreyBox = new Picture({
	        	left: 6, top: 2, height: 12, url: "grey_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks){
	        			newFoodOwner["banana"] = "Hannah";
	        			confirmPageBananaHannahBoxContainer.empty();
	        			confirmPageBananaHannahBoxContainer.add(confirmPageBananaHannahBlueBox);
	        			confirmPageBananaJoyceBoxContainer.empty();
	        			confirmPageBananaJoyceBoxContainer.add(confirmPageBananaJoyceGreyBox);
	        			confirmPageBananaCommunalBoxContainer.empty();
	        			confirmPageBananaCommunalBoxContainer.add(confirmPageBananaCommunalGreyBox);
	        		}
	        	})
	        });
	        let confirmPageBananaHannahBlueBox = new Picture({
	        	left: 0, top: 0, height: 15, url: "blue_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks) {
	        			newFoodOwner["banana"] = "Joyce";
	        			confirmPageBananaHannahBoxContainer.empty();
	        			confirmPageBananaHannahBoxContainer.add(confirmPageBananaHannahGreyBox);
	        		}
	        	})
	        });
	        let confirmPageBananaHannahBoxContainer = new Container({
	        	left: 116, right: 229, top: 24, height: 20, skin: whiteSkin,
	        	contents: [
	        		confirmPageBananaHannahGreyBox
	        	]
	        });
	        let confirmPageBananaHannahLabel = new StringTemplate({
	        	left: 158, top: 30, bottom: 25, style: ownerStyle,
	        	string: "Hannah"
	        });

	        /********************* COMMUNAL *********************/
	        let confirmPageBananaCommunalGreyBox = new Picture({
	        	left: 6, top: 2, height: 12, url: "grey_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks){
	        			newFoodOwner["banana"] = "Communal";
	        			confirmPageBananaHannahBoxContainer.empty();
	        			confirmPageBananaHannahBoxContainer.add(confirmPageBananaHannahGreyBox);
	        			confirmPageBananaJoyceBoxContainer.empty();
	        			confirmPageBananaJoyceBoxContainer.add(confirmPageBananaJoyceGreyBox);
	        			confirmPageBananaCommunalBoxContainer.empty();
	        			confirmPageBananaCommunalBoxContainer.add(confirmPageBananaCommunalBlueBox);
	        		}
	        	})
	        });
	        let confirmPageBananaCommunalBlueBox = new Picture({
	        	left: 0, top: 0, height: 15, url: "blue_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks) {
	        			newFoodOwner["banana"] = "Joyce";
	        			confirmPageBananaCommunalBoxContainer.empty();
	        			confirmPageBananaCommunalBoxContainer.add(confirmPageBananaCommunalGreyBox);
	        		}
	        	})
	        });
	        let confirmPageBananaCommunalBoxContainer = new Container({
	        	left: 188, right: 229, top: 24, height: 20, skin: whiteSkin,
	        	contents: [
	        		confirmPageBananaCommunalGreyBox
	        	]
	        });

	        let confirmPageBananaCommunalLabel = new StringTemplate({
	        	left: 230, top: 30, bottom: 25, style: ownerStyle,
	        	string: "Communal"
	        });

        let confirmPageBananaContainer = new Container({
        	left: 0, right: 0, top: 0, height: 61, skin: whiteSkin,
        	contents: [
        		confirmPageBananaLabel,
        		confirmPageBananaCross,
        		confirmPageBananaBorderLine,
        		confirmPageBananaJoyceLabel,
        		confirmPageBananaJoyceBoxContainer,
        		confirmPageBananaHannahLabel,
        		confirmPageBananaHannahBoxContainer,
        		confirmPageBananaCommunalLabel,
        		confirmPageBananaCommunalBoxContainer
        	]
        });



        /******************* Confirm Page Onion Container *******************/
        let confirmPageOnionBorderLine = new Container({
        	left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,
        	contents: [
        	]
        });
        let confirmPageOnionLabel = new StringTemplate({
        	left: 20, top: 25, bottom: 25, style: foodNameStyle,
        	string: "Onion"
        });
        let confirmPageOnionCross = new Picture({
        	right: 15, url: "x_gray.png",
        	active: true,
        	behavior: Behavior({
        		onTouchEnded(container, id, x, y, ticks){
        			newFood.splice(newFood.indexOf("onion"), 1);
        			delete newFoodOwner["onion"];
        			if (newFood.includes("apple")) {
        				if (newFood.includes("banana")) {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        					confirmPageOneContainer.add(confirmPageAppleContainer);
        					confirmPageTwoContainer.add(confirmPageBananaContainer);
        				} else {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        					confirmPageOneContainer.add(confirmPageAppleContainer);
        				}
        			} else {
        				if (newFood.includes("banana")) {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        					confirmPageOneContainer.add(confirmPageBananaContainer);
        				} else {
        					confirmPageOneContainer.empty();
        					confirmPageTwoContainer.empty();
        					confirmPageThreeContainer.empty();
        				}
        			}
        		}
        	})
        });
        	/********* Confirm Page Onion Checkboxes *********/
        	/********************* JOYCE *********************/
	        let confirmPageOnionJoyceGreyBox = new Picture({
	        	left: 6, top: 2, height: 12, url: "grey_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks){
	        			newFoodOwner["onion"] = "Joyce";
	        			confirmPageOnionHannahBoxContainer.empty();
	        			confirmPageOnionHannahBoxContainer.add(confirmPageOnionHannahGreyBox);
	        			confirmPageOnionJoyceBoxContainer.empty();
	        			confirmPageOnionJoyceBoxContainer.add(confirmPageOnionJoyceBlueBox);
	        			confirmPageOnionCommunalBoxContainer.empty();
	        			confirmPageOnionCommunalBoxContainer.add(confirmPageOnionCommunalGreyBox);
	        		}
	        	})
	        });
	        let confirmPageOnionJoyceBlueBox = new Picture({
	        	left: 0, top: 0, height: 15, url: "blue_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks) {
	        			newFoodOwner["onion"] = "Joyce";
	        			confirmPageOnionJoyceBoxContainer.empty();
	        			confirmPageOnionJoyceBoxContainer.add(confirmPageOnionJoyceGreyBox);
	        		}
	        	})
	        });
	        let confirmPageOnionJoyceBoxContainer = new Container({
	        	left: 58, right: 229, top: 24, height: 20,
	        	contents: [
	        		confirmPageOnionJoyceGreyBox
	        	]
	        });
	        let confirmPageOnionJoyceLabel = new StringTemplate({
	        	left: 100, top: 30, bottom: 25, style: ownerStyle,
	        	string: "Joyce"
	        });

	        /********************* HANNAH *********************/
	        let confirmPageOnionHannahGreyBox = new Picture({
	        	left: 6, top: 2, height: 12, url: "grey_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks){
	        			newFoodOwner["onion"] = "Hannah";
	        			confirmPageOnionHannahBoxContainer.empty();
	        			confirmPageOnionHannahBoxContainer.add(confirmPageOnionHannahBlueBox);
	        			confirmPageOnionJoyceBoxContainer.empty();
	        			confirmPageOnionJoyceBoxContainer.add(confirmPageOnionJoyceGreyBox);
	        			confirmPageOnionCommunalBoxContainer.empty();
	        			confirmPageOnionCommunalBoxContainer.add(confirmPageOnionCommunalGreyBox);
	        		}
	        	})
	        });
	        let confirmPageOnionHannahBlueBox = new Picture({
	        	left: 0, top: 0, height: 15, url: "blue_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks) {
	        			newFoodOwner["onion"] = "Joyce";
	        			confirmPageOnionHannahBoxContainer.empty();
	        			confirmPageOnionHannahBoxContainer.add(confirmPageOnionHannahGreyBox);
	        		}
	        	})
	        });
	        let confirmPageOnionHannahBoxContainer = new Container({
	        	left: 116, right: 229, top: 24, height: 20, skin: whiteSkin,
	        	contents: [
	        		confirmPageOnionHannahGreyBox
	        	]
	        });
	        let confirmPageOnionHannahLabel = new StringTemplate({
	        	left: 158, top: 30, bottom: 25, style: ownerStyle,
	        	string: "Hannah"
	        });

	        /********************* COMMUNAL *********************/
	        let confirmPageOnionCommunalGreyBox = new Picture({
	        	left: 6, top: 2, height: 12, url: "grey_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks){
	        			newFoodOwner["onion"] = "Communal";
	        			confirmPageOnionHannahBoxContainer.empty();
	        			confirmPageOnionHannahBoxContainer.add(confirmPageOnionHannahGreyBox);
	        			confirmPageOnionJoyceBoxContainer.empty();
	        			confirmPageOnionJoyceBoxContainer.add(confirmPageOnionJoyceGreyBox);
	        			confirmPageOnionCommunalBoxContainer.empty();
	        			confirmPageOnionCommunalBoxContainer.add(confirmPageOnionCommunalBlueBox);
	        		}
	        	})
	        });
	        let confirmPageOnionCommunalBlueBox = new Picture({
	        	left: 0, top: 0, height: 15, url: "blue_checkbox.jpeg",
	        	active: true,
	        	behavior: Behavior({
	        		onTouchEnded(container, id, x, y, ticks) {
	        			newFoodOwner["onion"] = "Joyce";
	        			confirmPageOnionCommunalBoxContainer.empty();
	        			confirmPageOnionCommunalBoxContainer.add(confirmPageOnionCommunalGreyBox);
	        		}
	        	})
	        });
	        let confirmPageOnionCommunalBoxContainer = new Container({
	        	left: 188, right: 229, top: 24, height: 20, skin: whiteSkin,
	        	contents: [
	        		confirmPageOnionCommunalGreyBox
	        	]
	        });

	        let confirmPageOnionCommunalLabel = new StringTemplate({
	        	left: 230, top: 30, bottom: 25, style: ownerStyle,
	        	string: "Communal"
	        });

        let confirmPageOnionContainer = new Container({
        	left: 0, right: 0, top: 0, height: 61, skin: whiteSkin,
        	contents: [
        		confirmPageOnionLabel,
        		confirmPageOnionCross,
        		confirmPageOnionBorderLine,
        		confirmPageOnionJoyceLabel,
        		confirmPageOnionJoyceBoxContainer,
        		confirmPageOnionHannahLabel,
        		confirmPageOnionHannahBoxContainer,
        		confirmPageOnionCommunalLabel,
        		confirmPageOnionCommunalBoxContainer
        	]
        });


        let confirmPageOneContainer = new Container({
        	left: 0, right: 0, top: 61, height: 61, skin: whiteSkin,
        	contents: [
        		confirmPageAppleContainer
        	]
        });
        let confirmPageTwoContainer = new Container({
        	left: 0, right: 0, top: 122, height: 62, skin: whiteSkin,
        	contents: [
        		confirmPageBananaContainer
        	]
        });
        let confirmPageThreeContainer = new Container({
        	left: 0, right: 0, top: 184, height: 62, skin: whiteSkin,
        	contents: [
        		confirmPageOnionContainer
        	]
        });

        /* Confirm Items Page Buttons Implementation */
        let confirmPageCheckButton = new Picture({
        	left: 140, url: "check_button.png",
        	active: true,
        	behavior: Behavior({
        		onTouchEnded(container, id, x, y, ticks) {
        			pictureTaken = true;
        			let personalPageAppleContainer = new personalPageAppleTemplate({
        				owner: newFoodOwner["apple"], skin: (newFoodOwner["apple"] == "Communal") ? lightGreenSkin : whiteSkin
        			});
        			let personalPageBananaContainer = new personalPageBananaTemplate({
        				owner: newFoodOwner["banana"], skin: (newFoodOwner["banana"] == "Communal") ? lightGreenSkin : whiteSkin
        			});
        			let personalPageOnionContainer = new personalPageOnionTemplate({
        				owner: newFoodOwner["onion"], skin: (newFoodOwner["onion"] == "Communal") ? lightGreenSkin: whiteSkin
        			});
        			let personalPageFoodThreeContainer = new personalPageFoodThreeTemplate({
        				skin: whiteSkin,
        				contents: [
        				]
        			});
        			let personalPageFoodFourContainer = new personalPageFoodFourTemplate({
        				skin: whiteSkin,
        				contents: [
        				]
        			});
        			let personalPageFoodFiveContainer = new personalPageFoodFiveTemplate({
        				skin: whiteSkin,
        				contents: [
        				]
        			});

        			if ('apple' in newFoodOwner && newFoodOwner["apple"] != "Hannah") {
        				if ('banana' in newFoodOwner && newFoodOwner["banana"] != "Hannah") {
        					if ('onion' in newFoodOwner && newFoodOwner["onion"] != "Hannah") {
        						personalPageFoodThreeContainer = new personalPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageAppleContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						personalPageFoodFourContainer = new personalPageFoodFourTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageBananaContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						personalPageFoodFiveContainer = new personalPageFoodFiveTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageOnionContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					} else {
        						personalPageFoodThreeContainer = new personalPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageAppleContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						personalPageFoodFourContainer = new personalPageFoodFourTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageBananaContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					}
        				} else {
        					if ('onion' in newFoodOwner && newFoodOwner["onion"] != "Hannah") {
        						personalPageFoodThreeContainer = new personalPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageAppleContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						personalPageFoodFourContainer = new personalPageFoodFourTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageOnionContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					} else {
        						personalPageFoodThreeContainer = new personalPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageAppleContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					}
        				}
        			} else {
        				if ('banana' in newFoodOwner && newFoodOwner["banana"] != "Hannah") {
        					if ('onion' in newFoodOwner && newFoodOwner["onion"] != "Hannah") {
        						personalPageFoodThreeContainer = new personalPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageBananaContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						personalPageFoodFourContainer = new personalPageFoodFourTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageOnionContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					} else {
        						personalPageFoodThreeContainer = new personalPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageBananaContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					}
        				} else {
        					if ('onion' in newFoodOwner && newFoodOwner["onion"] != "Hannah") {
        						personalPageFoodThreeContainer = new personalPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								personalPageOnionContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					}
        				}
        			}
        			personalPageContainer.add(personalPageFoodThreeContainer);
        			personalPageContainer.add(personalPageFoodFourContainer);
        			personalPageContainer.add(personalPageFoodFiveContainer);


        			let newStatusPageAppleContainer = new newStatusPageAppleTemplate({
        				owner: newFoodOwner["apple"], skin: (newFoodOwner["apple"] == "Communal") ? lightGreenSkin : whiteSkin
        			});
        			let newStatusPageBananaContainer = new newStatusPageBananaTemplate({
        				owner: newFoodOwner["banana"], skin: (newFoodOwner["banana"] == "Communal") ? lightGreenSkin : whiteSkin
        			});
        			let newStatusPageOnionContainer = new newStatusPageOnionTemplate({
        				owner: newFoodOwner["onion"], skin: (newFoodOwner["onion"] == "Communal") ? lightGreenSkin: whiteSkin
        			});
        			let newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({
        				skin: whiteSkin,
        				contents: [
        				]
        			});
        			let newStatusPageFoodFourContainer = new statusPageFoodFourTemplate({
        				skin: whiteSkin,
        				contents: [
        				]
        			});
        			let newStatusPageFoodFiveContainer = new statusPageFoodFiveTemplate({
        				skin: whiteSkin,
        				contents: [
        				]
        			});
        			if (newFood.includes("apple")) {
        				if (newFood.includes("banana")) {
        					if (newFood.includes("onion")) {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageAppleContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						newStatusPageFoodFourContainer = new statusPageFoodFourTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageBananaContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						newStatusPageFoodFiveContainer = new statusPageFoodFiveTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageOnionContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					} else {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageAppleContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						newStatusPageFoodFourContainer = new statusPageFoodFourTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageBananaContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					}
        				} else {
        					if (newFood.includes("onion")) {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageAppleContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						newStatusPageFoodFourContainer = new statusPageFoodFourTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageOnionContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					} else {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageAppleContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					}
        				}
        			} else {
        				if (newFood.includes("banana")) {
        					if (newFood.includes("onion")) {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageBananaContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        						newStatusPageFoodFourContainer = new statusPageFoodFourTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageOnionContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					} else {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageBananaContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					}
        				} else {
        					if (newFood.includes("onion")) {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({
        							skin: whiteSkin,
        							contents: [
        								newStatusPageOnionContainer,
        								new statusPageBorderLineTemplate()
        							]
        						});
        					}
        				}

        			}

        			newStatusPageContainer.add(newStatusPageFoodThreeContainer);
        			newStatusPageContainer.add(newStatusPageFoodFourContainer);
        			newStatusPageContainer.add(newStatusPageFoodFiveContainer);

					MainContainer.empty();
        			MainContainer.add(newStatusPageContainer);

        		}
        	})
        });

        let confirmPageButtonContainer = new Container({
        	left: 0, right: 0, bottom: 0, height: 60, skin: greySkin,
        	contents: [
        		confirmPageCheckButton
        	]
        });

        /* Confirm Items Page Container */
        let ConfirmPageContainer = new Container({
        	left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
        	contents: [
        		confirmPageTitleContainer,
        		confirmPageTitleBorderLine,
        		confirmPageOneContainer,
        		confirmPageTwoContainer,
        		confirmPageThreeContainer,
        		confirmPageButtonContainer
        	]
        });


/*******************************************************************************************/
/*********************** AFTER CAMERA STATUS PAGE IMPLEMENTATION ***************************/
/*******************************************************************************************/

    /* After Camera Status Page Header Container & Border Line */
    let newStatusPageTitle = new Label({height: 38, style: titleHeaderStyle, string: "Home"})
    let newStatusPageTitleContainer = new Container({
        left: 0, right: 0, top: 0, height: 60, skin: headerSkin,
        contents: [
            newStatusPageTitle
        ]
    });
    let newStatusPageTitleBorderLine = new Container({
        left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,
        contents: [
        ]
    });

    /*********************************************************/
    /************ NEW STATUS PAGE MILK FOOD ENTRY ************/

    let newStatusPageMilkPicture = new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"});
    let newStatusPageMilkName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Milk"});
    let newStatusPageMilkLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let newStatusPageMilkExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    /* Container for the Milk Item */
    var newStatusPageMilkTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            newStatusPageMilkPicture,
            newStatusPageMilkName,
            newStatusPageMilkLengthContainer,
            newStatusPageMilkExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                MainContainer.add(itemScreenContainer);
            }
        })
    }));
    let newStatusPageMilkContainer = new newStatusPageMilkTemplate({
        skin: lightGreenSkin, owner: "Communal"
    });

    let newStatusPageFoodOneContainer = new statusPageFoodOneTemplate({
        skin: whiteSkin,
        contents: [
            newStatusPageMilkContainer,
            new statusPageBorderLineTemplate()
        ]
    });


	/********************************************************/
    /************ STATUS PAGE AVOCADO FODD ENTRY ************/

    let newStatusPageAvocadoPicture = new Picture({left: 3, right: 257, height: 64, url: "avocado.jpg"});
    let newStatusPageAvocadoName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Avocado"});
    let newStatusPageAvocadoLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let newStatusPageAvocadoExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    var newStatusPageAvocadoTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            newStatusPageAvocadoPicture,
            newStatusPageAvocadoName,
            newStatusPageAvocadoLengthContainer,
            newStatusPageAvocadoExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                MainContainer.empty();
                MainContainer.add(itemScreenContainer2);
            }
        })
    }));
    let newStatusPageAvocadoContainer = new newStatusPageAvocadoTemplate({
        skin: whiteSkin, owner: "Hannah"
    });

    let newStatusPageFoodTwoContainer = new statusPageFoodTwoTemplate({
        skin: whiteSkin,
        contents: [
            newStatusPageAvocadoContainer,
            new statusPageBorderLineTemplate()
        ]
    });

    /******************************************************/
    /************ STATUS PAGE APPLE FODD ENTRY ************/

    let newStatusPageApplePicture = new Picture({left: 3, right: 257, height: 64, url: "apple.jpg"});
    let newStatusPageAppleName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Apple"});
    let newStatusPageAppleLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let newStatusPageAppleExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    var newStatusPageAppleTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            newStatusPageApplePicture,
            newStatusPageAppleName,
            newStatusPageAppleLengthContainer,
            newStatusPageAppleExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                //MainContainer.empty();
                //MainContainer.add();
            }
        })
    }));

    var statusPageFoodThreeTemplate = Container.template($ => ({
        left: 0, right: 0, top: 203, height: 71, skin: $.skin,
        contents: $.contents
    }));


	/*******************************************************/
    /************ STATUS PAGE BANANA FODD ENTRY ************/

    let newStatusPageBananaPicture = new Picture({left: 3, right: 257, height: 64, url: "banana.jpg"});
    let newStatusPageBananaName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Banana"});
    let newStatusPageBananaLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let newStatusPageBananaExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });

    var newStatusPageBananaTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            newStatusPageBananaPicture,
            newStatusPageBananaName,
            newStatusPageBananaLengthContainer,
            newStatusPageBananaExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                //MainContainer.empty();
                //MainContainer.add();
            }
        })
    }));

    var statusPageFoodFourTemplate = Container.template($ => ({
        left: 0, right: 0, top: 274, height: 71, skin: $.skin,
        contents: $.contents
    }));


	/******************************************************/
    /************ STATUS PAGE ONION FODD ENTRY ************/

    let newStatusPageOnionPicture = new Picture({left: 3, right: 257, height: 64, url: "onion.jpg"});
    let newStatusPageOnionName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Onion"});
    let newStatusPageOnionLengthContainer = new Container({
        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,
        contents: [
        ]
    });
    let newStatusPageOnionExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });


    var newStatusPageOnionTemplate = Container.template($ => ({
        left: 0, right: 0, top: 0, height: 70, skin: $.skin,
        contents: [
            newStatusPageOnionPicture,
            newStatusPageOnionName,
            newStatusPageOnionLengthContainer,
            newStatusPageOnionExpireLabel,
            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),
        ],
        active: true,
        behavior: Behavior({
            onTouchEnded(container, id, x, y, ticks) {
                //MainContainer.empty();
                //MainContainer.add();
            }
        })
    }));

    var statusPageFoodFiveTemplate = Container.template($ => ({
        left: 0, right: 0, top: 345, height: 71, skin: $.skin,
        contents: $.contents
    }));


    /* After Camera Status Page Buttons */
    let newStatusPageHomeButton = new Picture({
    	left: 140, url: "home.png",
    	active: true,
    	behavior: Behavior({
    		onTouchEnded(container, id, x, y, ticks) {
    			MainContainer.empty();
    			MainContainer.add(newStatusPageContainer);
    		}
    	})
    });
    let newStatusPageCameraButton = new Picture({
    	left: 50, url: "camera.png",
    	active: true,
    	behavior: Behavior({
    		onTouchEnded(container, id, x, y, ticks) {
    			MainContainer.empty();
    			MainContainer.add(cameraPageContainer);
    		}
    	})
    });
    let newStatuePageProfileButton = new Picture({
    	right: 50, url: "profile.png",
    	active: true,
    	behavior: Behavior({
    		onTouchEnded(container, id, x, y, ticks) {
    			fromPersonalPage = true;
    			MainContainer.empty();
    			MainContainer.add(personalPageContainer);
    		}
    	})
    });

    let newStatusPageButtonContainer = new Container({
    	left: 0, right: 0, bottom: 0, height: 60, skin: greySkin,
    	contents: [
    		newStatusPageHomeButton,
    		newStatusPageCameraButton,
    		newStatuePageProfileButton
    	]
    });



	/* After Camera Status Page Container */
	let newStatusPageContainer = new Container({
		left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
		contents: [
			newStatusPageTitleContainer,
			newStatusPageTitleBorderLine,
			newStatusPageFoodOneContainer,
			newStatusPageFoodTwoContainer,
			newStatusPageButtonContainer
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
        onDisplayed(application) {
            application.discover("smart-fridge-device.project.kinoma.marvell.com");
        }
        onQuit(application) {
            application.forget("smart-fridge-device.project.kinoma.marvell.com");
            application.shared = false;
        }
        onLaunch(application) {
            application.shared = true;
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
                remotePins.repeat("/Milk/read", 10, function(result) {
                    milkExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    itemExpireTimeMilk.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    personalPageMilkExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    newStatusPageMilkExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    milkLengthContainer.empty();
                    personalPageMilkLengthContainer.empty();
                    newStatusPageMilkLengthContainer.empty();
                    foodOneLengthContainer2.empty();
                    if (result >= 0.67) {
                        milkLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                        personalPageMilkLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                        newStatusPageMilkLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                        foodOneLengthContainer2.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                    } else if (result >= 0.33 && result < 0.67) {
                        milkLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                        personalPageMilkLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                        newStatusPageMilkLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                        foodOneLengthContainer2.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                    } else {
                        milkLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                        personalPageMilkLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                        newStatusPageMilkLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                        foodOneLengthContainer2.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                    }
                })
                remotePins.repeat("/Avocado/read", 10, function(result) {
                    avocadoExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    itemExpireTimeAvocado.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    newStatusPageAvocadoExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    avocadoLengthContainer.empty();
                    newStatusPageAvocadoLengthContainer.empty();
                    foodTwoLengthContainer2.empty();
                    if (result >= 0.67) {
                        avocadoLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                        newStatusPageAvocadoLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                        foodTwoLengthContainer2.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                    } else if (result >= 0.33 && result < 0.67) {
                        avocadoLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                        newStatusPageAvocadoLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                        foodTwoLengthContainer2.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                    } else {
                        avocadoLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                        newStatusPageAvocadoLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                        foodTwoLengthContainer2.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                    }
                })
                remotePins.repeat("/Apple/read", 10, function(result) {
                    personalPageAppleExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    newStatusPageAppleExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    personalPageAppleLengthContainer.empty();
                    newStatusPageAppleLengthContainer.empty();
                    if (result >= 0.67) {
                        personalPageAppleLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                        newStatusPageAppleLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                    } else if (result >= 0.33 && result < 0.67) {
                        personalPageAppleLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                        newStatusPageAppleLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                    } else {
                        personalPageAppleLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                        newStatusPageAppleLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                    }
                })
                remotePins.repeat("/Banana/read", 10, function(result) {
                    personalPageBananaExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    newStatusPageBananaExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    personalPageBananaLengthContainer.empty();
                    newStatusPageBananaLengthContainer.empty();
                    if (result >= 0.67) {
                        personalPageBananaLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                        newStatusPageBananaLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                    } else if (result >= 0.33 && result < 0.67) {
                        personalPageBananaLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                        newStatusPageBananaLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                    } else {
                        personalPageBananaLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                        newStatusPageBananaLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                    }
                })
                remotePins.repeat("/Onion/read", 10, function(result) {
                    personalPageOnionExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    newStatusPageOnionExpireLabel.string = "Expires in " + ((1 - result) * 30).toFixed(1) + " days.";
                    personalPageOnionLengthContainer.empty();
                    newStatusPageOnionLengthContainer.empty();
                    if (result >= 0.67) {
                        personalPageOnionLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                        newStatusPageOnionLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: redSkin}));
                    } else if (result >= 0.33 && result < 0.67) {
                        personalPageOnionLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                        newStatusPageOnionLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: yellowSkin}));
                    } else {
                        personalPageOnionLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                        newStatusPageOnionLengthContainer.add(new foodExpireLengthTemplate({ right: 170 * parseFloat(1 - result), skin: expireGreenSkin}));
                    }
                })
            }
        }
    }


/*****************************************************************************/

    /* Application Definition */
    application.behavior = new AppBehavior();

/*****************************************************************************/