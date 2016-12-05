/************************************************************************//************************** PLAY VIDEO CONTENTS *************************/import CONTROL from 'mobile/control';import MODEL from'mobile/model';/************************************************************************//************************************************************************//************************** ORIGINAL WORKS ******************************/import Pins from "pins";import {    Button,    ButtonBehavior} from "buttons";/************************************************************************//************************************************************************//************************** SKINS AND STYLES ****************************//************************************************************************/    /************ COLOR SKINS ************/        let headerSkin = new Skin ({fill: '#45ADA8' });        let whiteSkin = new Skin ({fill: 'white' });        let lightGreenSkin = new Skin ({fill: '#E5F7E9' });        let borderLineSkin = new Skin ({fill: '#979797' });        let greySkin = new Skin ({fill: '#E4E4E4' });        let darkerGreySkin = new Skin ({fill: '#D8D8D8' });        let redSkin = new Skin ({fill: '#F87E7B' });        let yellowSkin = new Skin ({fill: '#F0F89E' });        let expireGreenSkin = new Skin ({fill: '#B8E986' });        let lightBlueSkin = new Skin ({fill: '#40E0D0' });
        let blackSkin = new Skin ({fill: 'black' });    /************ STYLES (1) ************/        let titleHeaderStyle = new Style({ font: "bold 24px Copperplate Gothic Bold", color: "white" });        let foodNameStyle = new Style({ font: "bold 20px Didot", color: "#000022" });        let expireStyle = new Style({ font: "12px Lato", color: "#000022" });        let ownerStyle = new Style({ font: "italic 12px Lato", color: "#000022" });    /************ STYLES (2) ************/        let messageStyle = new Style({ font: "20px", color: "white" });        let messageSentStyle = new Style({ font: "20px", color: "black" });        let askStyle = new Style({ font: "18px", color: "black" });        /* Item Detail Style */        let itemStyle = new Style({ font: "20px", color: "white" });        let itemTitleStyle = new Style({ font: "20px", color: "black" });        let itemDetailStyle = new Style({ font: "20px", color: "black" });        let itemExpireStyle = new Style({ font: "14px", color: "black" });    /******* STRING TEMPLATE ********/        var StringTemplate = Label.template($ => ({            left: $.left, right: $.right, top: $.top, bottom: $.bottom,            style: $.style,            string: $.string        }));/************************************************************************//************************** BUTTON TEMPLATES ****************************//************************************************************************/    /* Button Templates */    let messageButtonTemplate = Button.template($ => ({        left: 30, right: 30, height: 40, width: 60,        contents: [            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})        ],        Behavior: class extends ButtonBehavior {            onTap(button) {                application.invoke(new Message("/send"));            }        }    }));    let messageSentButtonTemplate = Button.template($ => ({        left: 30, right: 30, height: 40, width: 60,        contents: [            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})        ],    }));    let messageButtonTemplate2 = Button.template($ => ({        left: 30, right: 30, height: 40, width: 60,        contents: [            Label($, {left:0, right:0, height:40, string: $.text, style: messageStyle})        ],        Behavior: class extends ButtonBehavior {            onTap(button) {                application.invoke(new Message("/send2"));            }        }    }));/************************************************************************//******************************* BUTTON *********************************//************************************************************************/    /* Buttons */    var throwButton = new messageButtonTemplate({text: "Can I throw out 'Milk'?"});    var throwSentButton = new messageSentButtonTemplate({text: "Message Sent"});    var useButton = new messageButtonTemplate2({text: "Can I use 'Milk'?"});    var messagingButton = new messageButtonTemplate({text: "Message Sent"});    var messageSent = new Label({string: "Message Sent", style: messageSentStyle});/************************************************************************//****************************** HANDLER *********************************//************************************************************************/    /* Handlers */    Handler.bind("/send", Behavior({        onInvoke: function(handler, message) {            throwContainer.remove(throwButton);            throwContainer.add(throwSentButton);            handler.wait(1500);        },        onComplete: function(handler, message) {            throwContainer.remove(throwSentButton);            throwContainer.add(throwButton);        },    }));    Handler.bind("/send2", Behavior({        onInvoke: function(handler, message) {            useContainer.remove(useButton);            useContainer.add(messageSent);            handler.wait(1500);        },        onComplete: function(handler, message) {            useContainer.remove(messageSent);            useContainer.add(useButton);        },    }));    class MediaBehavior extends Behavior {    	onCreate(media, data) {    		this.data = data;    	}    	onDisplaying(media) {    		media.url = "https://joshuajeon89.github.io/music27/video.mp4";    	}    	onLoaded(media) {    		media.volume = 0.8;    		media.start();    	}    	onFinished(media) {    		media.stop();    	}    }/************************************************************************//************************** GENERAL COMPONENTS **************************//************************************************************************/
    /* Status Page Boarder Line Template */
    var statusPageBorderLineTemplate = Container.template($ => ({
    	left: 0, right: 0, top: 70, height: 1, skin: borderLineSkin,
    	contents: [
    	]
    }));
    /* Boarder Line */    let foodPCOneBorderLine = new Container({        left: 0, right: 0, top: 131, height: 1, skin: borderLineSkin,        contents: [        ]    });    /* Boarder Line */    let foodPCTwoBorderLine = new Container({        left: 0, right: 0, top: 200, height: 1, skin: borderLineSkin,        contents: [        ]    });    /* Boarder Line */    let foodThreeBorderLine = new Container({        left: 0, right: 0, top: 270, height: 1, skin: borderLineSkin,        contents: [        ]    });    /* Boarder Line */    let foodFourBorderLine = new Container({        left: 0, right: 0, top: 340, height: 1, skin: borderLineSkin,        contents: [        ]    });    /* Boarder Line */    let foodFiveBorderLine = new Container({        left: 0, right: 0, top: 410, height: 1, skin: borderLineSkin,        contents: [        ]    });    /* Buttons Implementation */        /******************* HOME BUTTON (2) *******************/        let statusPageHomeButton = new Picture({            left: 140, url: "home.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                }            })        });        let statusPostCameraPageHomeButton = new Picture({            left: 140, url: "home.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                }            })        });        /******************* CAMERA CONFIRM BUTTON (3) *******************/        let cameraConfirmButton = new Picture({            left: 140, url: "camera_confirm_button.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                }            })        });        let cameraOneConfirmButton = new Picture({            left: 140, url: "camera_confirm_button.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                }            })        });        let cameraTwoConfirmButton = new Picture({            left: 140, url: "camera_confirm_button.png",            active: true,            behavior: Behavior({            onTouchEnded(container, id, x, y, ticks) {                MainContainer.empty();                MainContainer.add(postCameraConfirmContainer);            }           })        });        /******************* CAMERA BUTTON (2) *******************/        let statusPageCameraButton = new Picture({            left: 50, url: "camera.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(cameraPageContainer);                }            })        });        /******************* PROFILE BUTTON (2) *******************/        let statusPageProfileButton = new Picture({            right: 50, url: "profile.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                }            })        });        /******************* ITEM BACK BUTTON *******************/        let itemBackButton = new Picture({            left: 5, url: "back.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(FoodStatusPageContainer);                    application.distribute("onUpdateFridgeStatus");                }            })        });        /******************* FLASH BUTTON (3) *******************/        let cameraFlashButton = new Picture({            left: 50, url: "no_flash.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                }            })        });        let cameraOneFlashButton = new Picture({            left: 50, url: "no_flash.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                }            })        });        let cameraTwoFlashButton = new Picture({            left: 50, url: "no_flash.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                }            })        });        /******************* CANCEL BUTTON (3) *******************/        let cameraCancelButton = new Picture({            right: 50, url: "x.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(FoodStatusPageContainer);                    application.distribute("onUpdateFridgeStatus");                }            })        });        let cameraOneCancelButton = new Picture({            right: 50, url: "x.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(FoodStatusPageContainer);                    application.distribute("onUpdateFridgeStatus");                }            })        });        let cameraTwoCancelButton = new Picture({            right: 50, url: "x.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(FoodStatusPageContainer);                    application.distribute("onUpdateFridgeStatus");                }            })        });    /******************* BUTTON CONTAINER *******************/    let statusPageButtonContainer = new Container({        left: 0, right: 0, bottom: 0, height: 60, skin: greySkin,        contents: [            statusPageHomeButton,            statusPageCameraButton,            statusPageProfileButton        ]    });    let statusPostCameraPageButtonContainer = new Container({        left: 0, right: 0, bottom: 0, height: 70, skin: greySkin,        contents: [            statusPostCameraPageHomeButton,        ]    });    /******************* CAMERA BUTTON CONTAINER (3) *******************/    let cameraButtonContainer = new Container({        left: 0, right: 0, bottom: 0, height: 50, skin: greySkin,        contents: cameraConfirmButton    });    let cameraOneButtonContainer = new Container({        left: 0, right: 0, bottom: 0, height: 50, skin: greySkin,        contents: cameraOneConfirmButton    });    let cameraTwoButtonContainer = new Container({        left: 0, right: 0, bottom: 0, height: 50, skin: greySkin,        contents: cameraTwoConfirmButton    });    /******************* CAMERA STATUS BUTTON CONTAINER (3) *******************/    let cameraStatusButtonContainer = new Container({        left: 0, right: 0, bottom: 0, height: 50, skin: headerSkin,        contents: [cameraFlashButton, cameraCancelButton]    });    let itemDetailButtonContainer = new Container({        left: 0, right: 0, bottom: 0, height: 40, skin: headerSkin,        contents: [itemBackButton, new Label({string: "Milk", style: messageSentStyle})]    });    let cameraStatusOneButtonContainer = new Container({        left: 0, right: 0, bottom: 0, height: 50, skin: headerSkin,        contents: [cameraOneFlashButton, cameraOneCancelButton]    });    let cameraStatusTwoButtonContainer = new Container({        left: 0, right: 0, bottom: 0, height: 50, skin: headerSkin,        contents: [cameraTwoFlashButton, cameraTwoCancelButton]    });/************************************************************************//******************* LOADING PAGE IMPLEMENTATION ************************//************************************************************************/    /******* LOADING PIC ********/    let loadingPic = new Picture({        height: 568, url: "loading.png",        active: true,        behavior: Behavior({            onTouchEnded(container, id, x, y, ticks) {                MainContainer.empty();                MainContainer.add(FoodStatusPageContainer);                application.distribute("onUpdateFridgeStatus");            }        })    });    /******* LOADING PAGE CONTAINER ********/    let LoadingPageContainer = new Container({        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,        contents: [            loadingPic        ]    });/************************************************************************//****************** FRIDGE STATUS PAGE IMPLEMENTATION *******************//************************************************************************/    /************ STATUS AND TITLE CONTAINER ************/    // PRE-CAMERA    let statusPageTitle = new Label({height: 38, top: 11, style: titleHeaderStyle, string: "Home"})    let statusPageTitleContainer = new Container({        left: 0, right: 0, top: 0, height: 60, skin: headerSkin,        contents: [            statusPageTitle        ]    });    // DETAIL    let itemDetailTitle = new Label({height: 38, top: 11, style: titleHeaderStyle, string: "Item Detail"})    var statusItemDetailContainer = new Container({        left: 0, right: 0, top: 0, height: 60, skin: headerSkin,        contents: [            itemDetailTitle        ]    });

    let titleBorderLine = new Container({        left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,        contents: [        ]    });    /******************************************/    /************ FIRST FOOD ENTRY ************/    var foodExpireLengthTemplate = Container.template($ => ({        left: 0, right: $.right, top: 0, bottom: 0, skin: $.skin,    }));    /*****************************************************/    /************ STATUS PAGE MILK FOOD ENTRY ************/    let milkPicture = new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"});    let milkName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Milk"});    let milkLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let milkExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });    /* Container for the Milk Item */    var statusPageMilkTemplate = Container.template($ => ({        left: 0, right: 0, top: 0, height: 70, skin: $.skin,        contents: [            milkPicture,            milkName,            milkLengthContainer,            milkExpireLabel,            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),        ],        active: true,        behavior: Behavior({            onTouchEnded(container, id, x, y, ticks) {                MainContainer.empty();                MainContainer.add(itemScreenContainer);            }        })    }));    let statusPageMilkContainer = new statusPageMilkTemplate({        skin: lightGreenSkin, owner: "Communal"    });    var statusPageFoodOneTemplate = Container.template($ => ({        left: 0, right: 0, top: 61, bottom: 436, height: 71, skin: $.skin,        contents: $.contents    }));    let statusPageFoodOneContainer = new statusPageFoodOneTemplate({        skin: whiteSkin,        contents: [            statusPageMilkContainer,            new statusPageBorderLineTemplate()        ]    });///////////////////////////////////    // post-camera    let milkPCPicture = new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"});    let milkPCName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Milk"});    let foodPCOneLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let FoodPCOneExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });    /* Container for the First Entry Post Camera */    let statusPostCameraPageFoodOneContainer = new Container({        left: 0, right: 0, top: 61, height: 70, skin: whiteSkin,        contents: [            milkPCPicture,            milkPCName,            foodPCOneLengthContainer,            FoodPCOneExpireLabel        ]    });    /********************************************************/    /************ STATUS PAGE AVOCADO FODD ENTRY ************/    let avocadoPicture = new Picture({left: 3, right: 257, height: 64, url: "avocado.jpg"});    let avocadoName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Avocado"});    let avocadoLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let avocadoExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });
    var statusPageAvocadoTemplate = Container.template($ => ({        left: 0, right: 0, top: 0, height: 70, skin: $.skin,        contents: [            avocadoPicture,            avocadoName,            avocadoLengthContainer,            avocadoExpireLabel,            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),        ],        active: true,        behavior: Behavior({            onTouchEnded(container, id, x, y, ticks) {                MainContainer.empty();                //MainContainer.add();            }        })    }));    let statusPageAvocadoContainer = new statusPageAvocadoTemplate({        skin: whiteSkin, owner: "Hannah"    });    var statusPageFoodTwoTemplate = Container.template($ => ({        left: 0, right: 0, top: 132, height: 71, skin: $.skin,        contents: $.contents    }));    let statusPageFoodTwoContainer = new statusPageFoodTwoTemplate({        skin: whiteSkin,        contents: [            statusPageAvocadoContainer,
            new statusPageBorderLineTemplate()        ]    });
    //////////////////////////////////
    // post-camera    let avocadoPCPicture = new Picture({left: 3, right: 257, height: 64, url: "avocado.jpg"});    let avocadoPCName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Avocado"});    let foodPCTwoLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let FoodPCTwoExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });    /* Container for the Second Entry */    let statusPostCameraPageFoodTwoContainer = new Container({        left: 0, right: 0, top: 132, height: 70, skin: whiteSkin,        contents:[            avocadoPCPicture,            avocadoPCName,            foodPCTwoLengthContainer,            FoodPCTwoExpireLabel        ]    });    /******************************************/    /************ THIRD FOOD ENTRY ************/    let ketchupPicture = new Picture({left: 3, right: 257, height: 64, url: "ketchup.jpg"});    let ketchupName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Ketchup"});    let foodThreeLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let FoodThreeExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });    /* Container for the Second Entry */    let statusPageFoodThreeContainer = new Container({        left: 0, right: 0, top: 201, height: 70, skin: whiteSkin,        contents:[            ketchupPicture,            ketchupName,            foodThreeLengthContainer,            FoodThreeExpireLabel        ]    });    /******************************************/    /************ FOURTH FOOD ENTRY ************/    let jerkyPicture = new Picture({left: 3, right: 257, height: 64, url: "jerky.jpg"});    let jerkyName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Jerky"});    let foodFourLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let FoodFourExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });    /* Container for the Second Entry */    let statusPageFoodFourContainer = new Container({        left: 0, right: 0, top: 272, height: 70, skin: whiteSkin,        contents:[            jerkyPicture,            jerkyName,            foodFourLengthContainer,            FoodFourExpireLabel        ]    });    /******************************************/    /************ FIFTH FOOD ENTRY ************/    let cerealPicture = new Picture({left: 3, right: 257, height: 64, url: "cereal.jpg"});    let cerealName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Cereal"});    let foodFiveLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let FoodFiveExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });    /* Container for the Second Entry */    let statusPageFoodFiveContainer = new Container({        left: 0, right: 0, top: 342, height: 70, skin: whiteSkin,        contents:[            cerealPicture,            cerealName,            foodFiveLengthContainer,            FoodFiveExpireLabel        ]    });    /****************************************************/    /************ FOOD STATUS PAGE CONTAINER ************/    let FoodStatusPageContainer = new Container({        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,        contents: [            statusPageTitleContainer,            titleBorderLine,            statusPageFoodOneContainer,            statusPageFoodTwoContainer,            statusPageButtonContainer        ]    });    /*****************************************************************/    /************ FOOD STATUS PAGE CONTAINER AFTER CAMERA ************/    let FoodStatusPostContainer = new Container({        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,        contents: [            statusPostCameraPageFoodOneContainer,            foodPCOneBorderLine,            statusPostCameraPageFoodTwoContainer,            foodPCTwoBorderLine,            statusPageFoodThreeContainer,            foodThreeBorderLine,            statusPageFoodFourContainer,            foodFourBorderLine,            statusPageFoodFiveContainer,            foodFiveBorderLine,            statusPostCameraPageButtonContainer        ]    });/************************************************************************//************************ ITEM IMPLEMENTATION ***************************//************************************************************************/    /* Item Detail Top Bar Container */    var itemTitleContainer = new Container({        left: 0, right: 0, top: 0, height: 60, skin: lightBlueSkin,        contents: [            new Label({height: 38, top: 11, left: 17, style: itemStyle, string: "<"}),            new Label({height: 38, top: 11, style: itemStyle, string: "Milk"}),        ]    });    /* Item Detail Container */    let milkPictureTwo = new Picture({top:50, left: 50, right: 50, height: 100, url: "cow.jpg"});    let milkColum = new Column({top: 0, bottom: 0, right: 15, contents: [                    new Label({left: 25, string: "Milk", style: itemTitleStyle}),                    new Label({left: 25, string: "Communal Food", style: itemDetailStyle}),                    new Label({left: 25, string: "Expires in 1 day", style: itemExpireStyle}),                ]});    let milkLine =  new Line({                left: 0, right: 0,                contents: [ milkColum ] });    let itemDetailContainer = new Container({        left: 0, right: 0, top: 20, bottom: 0, height: 80,        contents: milkLine    });    var throwContainer = new Container({        left: 0, right: 0, skin: whiteSkin,        contents: [            throwButton        ]    });    var useContainer = new Container({        left: 0, right: 0, skin: whiteSkin,        contents: [            useButton        ]    });    /* "Ask your Roommates" Container */    var messageContainer = new Column({        left: 0, right: 0,  bottom: 100, height: 100, skin: whiteSkin,        contents: [            new Label({left: 15, top: 15, height: 40, string: "Ask your Roommates:", style: askStyle}),            throwContainer,            new Container({height: 15}),            useContainer        ]    });        let itemStatusContainer = new Container({            left: 0, right: 0, top: 0, height: 40, skin: headerSkin,            contents: itemDetailButtonContainer        });    let itemScreenContainer = new Container({        left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,        contents: [            messageContainer,            itemStatusContainer,            itemDetailContainer,            milkPictureTwo        ]    });/************************************************************************//******************** CAMERA PAGE IMPLEMENTATION ************************//************************************************************************/        /******* LOADING CAMERA STATUS CONTAINER (3) ********/        let cameraStatusContainer = new Container({            left: 0, right: 0, top: 0, height: 40, skin: headerSkin,            contents: cameraStatusButtonContainer        });        let cameraStatusOneContainer = new Container({            left: 0, right: 0, top: 0, height: 40, skin: headerSkin,            contents: cameraStatusOneButtonContainer        });        let cameraStatusTwoContainer = new Container({            left: 0, right: 0, top: 0, height: 40, skin: headerSkin,            contents: cameraStatusTwoButtonContainer        });    /******* LOADING CAMERA -- FIRST STEP ********/        let loadingCamera = new Picture({            height: 500, url: "camera_preview.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(RotatingCameraContainer);                    // application.distribute("onUpdateFridgeStatus");                }            })        });        /******* LOADING CAMERA CONTAINER ********/        let LoadingCameraContainer = new Container({            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,            contents: [                loadingCamera,                cameraStatusContainer,                cameraButtonContainer            ]        });    /******* ROTATING CAMERA -- SECOND STEP ********/        /******* ROTATING CAMERA ********/        let rotatingCamera = new Picture({            height: 500, url: "camera_preview_two.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(ConfirmingCameraContainer);                    // application.distribute("onUpdateFridgeStatus");                }            })        });        /******* ROTATING CAMERA CONTAINER ********/        let RotatingCameraContainer = new Container({            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,            contents: [                rotatingCamera,                cameraStatusOneContainer,                cameraOneButtonContainer            ]        });    /******* CONFIRMING CAMERA -- THIRD STEP ********/        /******* CONFIRMING CAMERA ********/        let confirmingCamera = new Picture({            height: 500, url: "camera_confirm.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    // MainContainer.empty();                    // MainContainer.add(FoodStatusPageContainer);                    // application.distribute("onUpdateFridgeStatus");                }            })        });        /******* CONFIRMING CAMERA CONTAINER ********/        let ConfirmingCameraContainer = new Container({            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,            contents: [                confirmingCamera,                cameraStatusTwoContainer,                cameraTwoButtonContainer            ]        });/********************************************************************************//******************** CAMERA CONFIRM PAGE IMPLEMENTATION ************************//********************************************************************************/    /******************** CONFIRMATION PAGE ONE ************************/        let postCameraConfirm = new Picture({            height: 500, url: "post_camera_confirm_one.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(postCameraConfirmOneContainer);                    // application.distribute("onUpdateFridgeStatus");                }            })        });        let postCameraConfirmContainer = new Container({            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,            contents: [                postCameraConfirm                // cameraStatusContainer,                // cameraButtonContainer            ]        });    /******************** CONFIRMATION PAGE TWO ************************/        let postCameraConfirmOne = new Picture({            height: 500, url: "post_camera_confirm_two.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(postCameraConfirmTwoContainer);                    // application.distribute("onUpdateFridgeStatus");                }            })        });        let postCameraConfirmOneContainer = new Container({            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,            contents: [                postCameraConfirmOne                // cameraStatusContainer,                // cameraButtonContainer            ]        });    /******************** CONFIRMATION PAGE THREE ************************/        let postCameraConfirmTwo = new Picture({            height: 500, url: "post_camera_confirm_three.png",            active: true,            behavior: Behavior({                onTouchEnded(container, id, x, y, ticks) {                    MainContainer.empty();                    MainContainer.add(FoodStatusPostContainer);                    application.distribute("onUpdateFridgeStatus");                }            })        });        let postCameraConfirmTwoContainer = new Container({            left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,            contents: [                postCameraConfirmTwo                // cameraStatusContainer,                // cameraButtonContainer            ]        });
/***************************************************************************************************//****************************** PERSONAL ITEMS PAGE IMPLEMENTATION *********************************//***************************************************************************************************/

	/* Personal Items Page Header Container & Border Line */
    let personalPageTitle = new Label({height: 38, top: 11, style: titleHeaderStyle, string: "Your Items"})    let personalPageTitleContainer = new Container({        left: 0, right: 0, top: 0, height: 60, skin: headerSkin,        contents: [            personalPageTitle        ]    });
    let personalPageTitleBorderLine = new Container({        left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,        contents: [        ]    });

    /* Personal Items Page Buttons Implementation */
    let personalPageHomeButton = new Picture({
    	left: 140, url: "home.png",
    	active: true,
    	behavior: Behavior({
    		onTouchEnded(container, id, x, y, ticks) {
    			MainContainer.empty();
    			MainContainer.add(FoodStatusPageContainer);
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



	let personalPageContainer = new Container({
		left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,
		contents: [
			personalPageTitleContainer,
			personalPageTitleBorderLine,
			personalPageButtonContainer
		]
	});



/*******************************************************************************************//****************************** CAMERA PAGE IMPLEMENTATION *********************************//*******************************************************************************************/

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
		left: 0, right: 0, top: 60, bottom: 60, width: 320, height: 448,
    contents: [
  		new Media( { left: 0, right: 0, top: 0, bottom: 0, width: 320, height: 448, anchor: 'MEDIA',  url: "https://joshuajeon89.github.io/music27/video.mp4", aspect: "fill", Behavior: MediaBehavior }),
  	],

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


/*******************************************************************************************//******************** AFTER CAMERA CONFIRM ITEM PAGE IMPLEMENTATION ************************//*******************************************************************************************/

		var newFood = ["apple", "banana", "onion"];
		var newFoodOwner = {"apple": "Joyce", "banana": "Joyce", "onion": "Joyce"};

        /* Confirm Items Page Title & Border Line After Title Container */        let confirmPageTitle = new Label({height: 38, top: 11, style:titleHeaderStyle, string: "Confirm Items"});
        let confirmPageTitleBorderLine = new Container({        	left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,        	contents: [        	]    	});
    	let crossButton = new Picture ({
    		right: 15, url: "x_blue.png",
    		active: true,
    		behavior: Behavior({
    			onTouchEnded(container, id, x, y, ticks) {
    				MainContainer.empty();
    				// MainContainer.add();
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
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({        							skin: whiteSkin,        							contents: [        								newStatusPageAppleContainer,        								new statusPageBorderLineTemplate()        							]        						});
        					}
        				}
        			} else {
        				if (newFood.includes("banana")) {
        					if (newFood.includes("onion")) {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({        							skin: whiteSkin,        							contents: [        								newStatusPageBananaContainer,        								new statusPageBorderLineTemplate()        							]        						});        						newStatusPageFoodFourContainer = new statusPageFoodFourTemplate({        							skin: whiteSkin,        							contents: [        								newStatusPageOnionContainer,        								new statusPageBorderLineTemplate()        							]        						});
        					} else {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({        							skin: whiteSkin,        							contents: [        								newStatusPageBananaContainer,        								new statusPageBorderLineTemplate()        							]        						});
        					}
        				} else {
        					if (newFood.includes("onion")) {
        						newStatusPageFoodThreeContainer = new statusPageFoodThreeTemplate({        							skin: whiteSkin,        							contents: [        								newStatusPageOnionContainer,        								new statusPageBorderLineTemplate()        							]        						});
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


/*******************************************************************************************//*********************** AFTER CAMERA STATUS PAGE IMPLEMENTATION ***************************//*******************************************************************************************/

    /* After Camera Status Page Header Container & Border Line */
    let newStatusPageTitle = new Label({height: 38, top: 11, style: titleHeaderStyle, string: "Home"})    let newStatusPageTitleContainer = new Container({        left: 0, right: 0, top: 0, height: 60, skin: headerSkin,        contents: [            newStatusPageTitle        ]    });
    let newStatusPageTitleBorderLine = new Container({        left: 0, right: 0, top: 60, height: 1, skin: borderLineSkin,        contents: [        ]    });

    /*********************************************************/    /************ NEW STATUS PAGE MILK FOOD ENTRY ************/    let newStatusPageMilkPicture = new Picture({left: 3, right: 257, height: 64, url: "milk.jpeg"});    let newStatusPageMilkName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Milk"});    let newStatusPageMilkLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let newStatusPageMilkExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });    /* Container for the Milk Item */    var newStatusPageMilkTemplate = Container.template($ => ({        left: 0, right: 0, top: 0, height: 70, skin: $.skin,        contents: [            newStatusPageMilkPicture,            newStatusPageMilkName,            newStatusPageMilkLengthContainer,            newStatusPageMilkExpireLabel,            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),        ],        active: true,        behavior: Behavior({            onTouchEnded(container, id, x, y, ticks) {                MainContainer.empty();                //MainContainer.add(itemScreenContainer);            }        })    }));    let newStatusPageMilkContainer = new newStatusPageMilkTemplate({        skin: lightGreenSkin, owner: "Communal"    });    let newStatusPageFoodOneContainer = new statusPageFoodOneTemplate({        skin: whiteSkin,        contents: [            newStatusPageMilkContainer,            new statusPageBorderLineTemplate()        ]    });


	/********************************************************/    /************ STATUS PAGE AVOCADO FODD ENTRY ************/    let newStatusPageAvocadoPicture = new Picture({left: 3, right: 257, height: 64, url: "avocado.jpg"});    let newStatusPageAvocadoName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Avocado"});    let newStatusPageAvocadoLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let newStatusPageAvocadoExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });
    var newStatusPageAvocadoTemplate = Container.template($ => ({        left: 0, right: 0, top: 0, height: 70, skin: $.skin,        contents: [            newStatusPageAvocadoPicture,            newStatusPageAvocadoName,            newStatusPageAvocadoLengthContainer,            newStatusPageAvocadoExpireLabel,            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),        ],        active: true,        behavior: Behavior({            onTouchEnded(container, id, x, y, ticks) {                MainContainer.empty();                //MainContainer.add();            }        })    }));    let newStatusPageAvocadoContainer = new newStatusPageAvocadoTemplate({        skin: whiteSkin, owner: "Hannah"    });    let newStatusPageFoodTwoContainer = new statusPageFoodTwoTemplate({        skin: whiteSkin,        contents: [            newStatusPageAvocadoContainer,
            new statusPageBorderLineTemplate()        ]    });

    /******************************************************/    /************ STATUS PAGE APPLE FODD ENTRY ************/    let newStatusPageApplePicture = new Picture({left: 3, right: 257, height: 64, url: "apple.jpg"});    let newStatusPageAppleName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Apple"});    let newStatusPageAppleLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let newStatusPageAppleExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });
    var newStatusPageAppleTemplate = Container.template($ => ({        left: 0, right: 0, top: 0, height: 70, skin: $.skin,        contents: [            newStatusPageApplePicture,            newStatusPageAppleName,            newStatusPageAppleLengthContainer,            newStatusPageAppleExpireLabel,            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),        ],        active: true,        behavior: Behavior({            onTouchEnded(container, id, x, y, ticks) {                MainContainer.empty();                //MainContainer.add();            }        })    }));    var statusPageFoodThreeTemplate = Container.template($ => ({        left: 0, right: 0, top: 203, height: 71, skin: $.skin,        contents: $.contents    }));


	/*******************************************************/    /************ STATUS PAGE BANANA FODD ENTRY ************/    let newStatusPageBananaPicture = new Picture({left: 3, right: 257, height: 64, url: "banana.jpg"});    let newStatusPageBananaName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Banana"});    let newStatusPageBananaLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let newStatusPageBananaExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });
    var newStatusPageBananaTemplate = Container.template($ => ({        left: 0, right: 0, top: 0, height: 70, skin: $.skin,        contents: [            newStatusPageBananaPicture,            newStatusPageBananaName,            newStatusPageBananaLengthContainer,            newStatusPageBananaExpireLabel,            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),        ],        active: true,        behavior: Behavior({            onTouchEnded(container, id, x, y, ticks) {                MainContainer.empty();                //MainContainer.add();            }        })    }));    var statusPageFoodFourTemplate = Container.template($ => ({        left: 0, right: 0, top: 274, height: 71, skin: $.skin,        contents: $.contents    }));


	/******************************************************/    /************ STATUS PAGE ONION FODD ENTRY ************/    let newStatusPageOnionPicture = new Picture({left: 3, right: 257, height: 64, url: "onion.jpg"});    let newStatusPageOnionName = new Label({left: 65, right: 180, style: foodNameStyle, string: "Onion"});    let newStatusPageOnionLengthContainer = new Container({        left: 145, right: 5, top: 25, bottom: 25, skin: darkerGreySkin,        contents: [        ]    });    let newStatusPageOnionExpireLabel = new StringTemplate ({ left: 145, top: 55, bottom: 10, style: expireStyle, string: "Expires in N/A days" });    var newStatusPageOnionTemplate = Container.template($ => ({        left: 0, right: 0, top: 0, height: 70, skin: $.skin,        contents: [            newStatusPageOnionPicture,            newStatusPageOnionName,            newStatusPageOnionLengthContainer,            newStatusPageOnionExpireLabel,            new StringTemplate ({left: 65, right: 180, top: 48, style: ownerStyle, string: $.owner}),        ],        active: true,        behavior: Behavior({            onTouchEnded(container, id, x, y, ticks) {                MainContainer.empty();                //MainContainer.add();            }        })    }));    var statusPageFoodFiveTemplate = Container.template($ => ({        left: 0, right: 0, top: 345, height: 71, skin: $.skin,        contents: $.contents    }));


    /* After Camera Status Page Buttons */
    let newStatusPageHomeButton = new Picture({
    	left: 140, url: "home.png",
    	active: true,
    	behavior: Behavior({
    		onTouchEnded(container, id, x, y, ticks) {
    			MainContainer.empty();
    			MainContainer.add(FoodStatusPageContainer);
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
    			MainContainer.empty();
    			// MainContainer.add();
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

let MainContainer = new Container({    left: 0, right: 0, top: 0, bottom: 0, skin: whiteSkin,    contents: [
    	//FoodStatusPageContainer        //ConfirmPageContainer
        //newStatusPageContainer
        cameraPageContainer
        //personalPageContainer    ]});
application.add(MainContainer);
