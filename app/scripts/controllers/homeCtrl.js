'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
var task = angular.module('task',[]);

task.controller('dim', ['$scope', function($scope) {

  $scope.texttyping = ["Cheers everyone!",
  	"My name is Yu Lei ^2000",
    "I am a Front End Developer ^2000",
    "I love coding and I have a kitten ^4000"
  ];
  $scope.about = "About Me";
  $scope.detail = "My name is Yu Lei. You can call me Alex. I graduated from The George Washington University with a master degree in Information System Technology. My specialities are in Front End Developer, Database Design. I am a fast learner, a good listener and also a team player. I am detail oriented, who can perform better than asked and meet the deadline. I am now seeking Full time position on Front End Developer";
  $scope.homecss = "homecss";
  $scope.skills = "Skills";
  $scope.percent = 70;
  $scope.person = [
  {
  	percent:70,
  	tech:"JavaScrpit"
  },
  {
  	percent:90,
  	tech:"HTML"
  },
  {
  	percent:90,
  	tech:"CSS"
  }
  ];
  $scope.options = {
  	animated:{
  		duration:0,
  		enabled:false
  	},
  	barColor:'red',
  	scaleColor:false,
  	lineWidth:10,
  	lineCap:'round'
  };
}]);
