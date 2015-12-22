"use strict";

var agentApi = require("./agentapi");
var authenticated = false;



//agentApi.login("123")
//  .then(function(res) {
//    console.log(res);
//    authenticated = true;
//  });


//J5 code
var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({io: new Raspi()});

board.on("ready", function() {
  var led = new five.Led("P1-13");
  led.blink(500);
  
  var button = new five.Button("P1-15");

  button.on("down", function() {
    console.log("Button pressed");
  });

});