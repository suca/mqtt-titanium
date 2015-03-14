function Login() {

  var self = Ti.UI.createWindow({
    //backgroundColor : '#000000',
    navBarHidden : true,
    statusBarStyle : Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
  });

  var navWin = Ti.UI.iOS.createNavigationWindow({
    window : self
  });

  var anchoPantalla = Ti.Platform.displayCaps.platformWidth;
  var altoPantalla = Ti.Platform.displayCaps.platformHeight;

  var topBarview = Ti.UI.createView({
    backgroundColor : '#454c4e',
    top : 0,
    //width : 320,
    width : anchoPantalla,
    height : 20
  });
  self.add(topBarview);

  var loginView = Ti.UI.createView({
    backgroundImage : '/images/android/login.png',
    top : 20,
    backgroundColor:'#91BBF0',
    //width : 320,
    //height : 548
    width : anchoPantalla,
    height : altoPantalla
  });
  self.add(loginView);

  var anchoPantalla = Ti.Platform.displayCaps.platformWidth;
  var anchoImagen = (anchoPantalla - 260) / 2;
  

  var viewBackgroundLogin = Ti.UI.createView({
    backgroundColor : '#454c4e',
    borderRadius : 5,
    borderWidth : 1,
    borderColor : '#454c4e',
    opacity : 0.7,
    right : 15,
    left : 15,
    //height : 166,
    height : 181,
    top : 240
  });

  self.add(viewBackgroundLogin);
  
  var usernameInput = Ti.UI.createTextField({
    height : 44,
    right : 26,
    left : 26,
    //top : 200,
    top : 251,
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : "username",
    paddingLeft : 10,
    autocapitalization : false,
    autocorrect : false
  });
  self.add(usernameInput);

  usernameInput.addEventListener('focus', function(e) {
    usernameInput.keyboardType = Ti.UI.KEYBOARD_EMAIL;
  });
  usernameInput.addEventListener('return', function(e) {
    passwordInput.focus();
  });

  var passwordInput = Ti.UI.createTextField({
    height : 44,
    right : 26,
    left : 26,
    //top : 250,
    top : 301,
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'password',
    paddingLeft : 10,
    passwordMask : true
  });

  self.add(passwordInput);

  var appLoginActivity = Titanium.UI.createActivityIndicator({
    right : 15
  });

  var bntLogin = Ti.UI.createButton({
    color : '#FFFFFF',
    title : 'Enter',
    height : 44,
    //width : 270,
    right : 26,
    left : 26,
    //top : 300,
    top : 353,
    //backgroundImage : '/images/iphone/boton_entrar.png',
    backgroundImage : '/images/iphone/boton_verde.png',
    activity : appLoginActivity
  });
  self.add(bntLogin);
  bntLogin.add(appLoginActivity);
  

  bntLogin.addEventListener('click', function(e) {

    if (usernameInput.value === "") {
      Ti.UI.createAlertDialog({
        title : 'IIOT Mobile',
        message : 'The username is required',
        buttonNames : ["OK"]
      }).show();

    } else if (passwordInput.value === "") {
      Ti.UI.createAlertDialog({
        title : 'IIOT Mobile',
        message : 'The password is required',
        buttonNames : ["OK"]
      }).show();

    } else {
		appLoginActivity.show();
		var tabGroup = require('/ui/ios/iphone/tabGroup');
		var instance = new tabGroup().open();
    }

  });

  var signUpBt = Ti.UI.createButton({
    height : 20,
    //top : 360,
    top : 393,
    right : 26,
    color : '#FFFFFF',
    font : {
      fontSize : 13
    },
    textAlign : Titanium.UI.TEXT_ALIGNMENT_RIGHT,
    title : "Register"
  });
  self.add(signUpBt);

  signUpBt.addEventListener('click', function(e) {
  	Ti.API.info('Register');
  });

  var viewBackgroundFacebook = Ti.UI.createView({
    backgroundColor : '#454c4e',
    borderRadius : 5,
    borderWidth : 1,
    borderColor : '#454c4e',
    opacity : 0.7,
    right : 15,
    left : 15,
    height : 67,
    //bottom : 14
    bottom : 9
  });

  self.add(viewBackgroundFacebook);
    
  var activityIndicator = Ti.UI.createActivityIndicator({
    right : 0
  });
  activityIndicator.style = Ti.UI.iPhone.ActivityIndicatorStyle.PLAIN;

  //self.add(loginViewBackground);
  
  return self;
}

module.exports = Login;