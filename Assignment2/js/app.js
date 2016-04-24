var app = angular.module('app', ["ui.router"])
app.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/modules")

  $stateProvider
    .state('modules', {
        url: "/modules",
        templateUrl: "templates/modules.html"
    })
    .state('homeworks', {
        url: "/homeworks",
        templateUrl: "templates/homeworks.html"
    })
    .state('groups', {
        url: "/groups",
        templateUrl: "templates/groups.html"
    })
    .state('quizzes', {
        url: "/quizzes",
        templateUrl: "templates/quizzes.html"
    })
})
