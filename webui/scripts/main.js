"use strict";angular.module("edmApp",["ngMaterial","ngAnimate","ui.router","pascalprecht.translate","ui.ace"]),angular.module("edmApp").config(["$mdThemingProvider","$locationProvider","$urlRouterProvider","$stateProvider",function(e,r,t,o){t.otherwise("/"),r.html5Mode({enabled:!0,requireBase:!0}),o.state("app",{controllerAs:"vm",url:"/",controller:"AppController",templateUrl:"views/app.html"})}]),angular.module("edmApp").controller("AppController",["$mdSidenav",function(e){var r=this;r.locs=0,r.toggleMenu=function(){e("left").toggle()},r.editorChanged=function(e){r.locs=e[1].env.document.getLength()}}]);