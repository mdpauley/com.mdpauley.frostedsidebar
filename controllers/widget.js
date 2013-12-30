var args = arguments[0] || {};
var animation = require('alloy/animation');
try {
    require("com.kosso.TiKBlurLive");
} catch(e) {
    alert("TiKBlurLive was not found.\nPlease download it from\nhttps://github.com/kosso/TiTranslucentView");
    Ti.API.log("TiKBlurLive was not found.");
    Ti.API.log("Please download it from https://github.com/kosso/TiTranslucentView");
    (function(){
    	return false;
    });
}

function toggleMenu() {
	var a = Titanium.UI.createAnimation({
		duration : 250,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN,
	});
	var newLeft = "0dp";

	if ($.menu.isShowing === false) {
		newLeft = "0dp";
		buttonStartPosition();
		showButtons();
		$.menu.isShowing = true;
	} else if ($.menu.isShowing === true) {
		newLeft = "-151dp";
		a.duration = 175,
		$.menu.isShowing = false;
	}

	var animationHandler = function() {
		$.menu.left = newLeft;
		a.removeEventListener('complete', animationHandler);
	};

	a.left = newLeft;
	$.menu.animate(a);
	a.addEventListener('complete', animationHandler);
}

function open() {
	$.menu.open();
}

function buttonStartPosition() {
	var a = Ti.UI.createAnimation({
		opacity : 1,
		transform : Ti.UI.create2DMatrix().scale(0.0, 0.0),
		duration : 1
	});
	$.button1.animate(a);
	$.button2.animate(a);
	$.button3.animate(a);
	$.button4.animate(a);
}

function showButtons() {
	var a = Ti.UI.createAnimation({
		opacity : 1,
		transform : Ti.UI.create2DMatrix().scale(1.0, 1.0),
		duration : 200
	});
	setTimeout(function(){
		$.button1.animate(a);	
	}, 150);
	setTimeout(function(){
		$.button2.animate(a);	
	}, 250);
	setTimeout(function(){
		$.button3.animate(a);	
	}, 350);
	setTimeout(function(){
		$.button4.animate(a);	
	}, 450);
}

function init() {
	$.menu.open();	
}

exports.toggleMenu = toggleMenu;
exports.init = init;