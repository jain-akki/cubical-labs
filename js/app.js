(function () {

  'use strict';

  angular.module('project', [])
  
  .controller('artistCtrl', function ($scope, $http) {

    var baseUrl = "https://itunes.apple.com/";
    $scope.data = {};
    $scope.searchBtn = true;
    $scope.tabs = false;

    $scope.openModal = function () {
      $('#modal1').modal('open');
    }
    
    $scope.addClass = function (id) {
      if (id != 0) {
        $('#test1').addClass('display-none');
      } else {
        $('#test1').removeClass('display-none');
      }
    }

    $scope.getArtist = function (art) {
      if (art !== undefined) {
        console.log(art);
        if (art.name.toLowerCase() === "jack" && art.limit === 4) {
          $http({
            method: 'GET',
            contentType: 'application/jsonp',
            url: baseUrl + "search?term=" + art.name + "&limit=" + art.limit
          }).then(function (res) {
            console.log('----', res.data.results);
            $scope.data = res.data.results;
          });
          $('#modal1').modal('close');
          $scope.searchBtn = false;
          $scope.tabs = true;
        } else {
          alert('Track Name : Jack\nNo. of Tracks : 4');
        }
        art = {};
      } else {
        alert('Type something!!')
      }
    }
      
  });
})();