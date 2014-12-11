/**
* Config JS Angular
*/
var app = angular.module('bootangularFrontEnd', [
  'ngRoute'
  ]);

/**
* Konfigurasi Routing dan View
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "HalCtrl"})
    // Halaman Link
    .when("/panel", {templateUrl: "partials/panel.html", controller: "HalCtrl"})
    .when("/tabel", {templateUrl: "partials/tabel.html", controller: "HalCtrl"})
    .when("/gmap", {templateUrl: "partials/gmap.html", controller: "HalCtrl"})
    // 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "HalCtrl"});
  }]);

/**
* Kontrol All Page
*/
app.controller('HalCtrl', function (/* $scope, $location, $http */) {
  console.log("Lapor Kontrol Halaman.");

  // // Activates the Carousel //silahkan di uncomment jika diperlukan
  // $('.carousel').carousel({
  //   interval: 5000
  // });

  // Activates Tooltips for Social Links 
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});