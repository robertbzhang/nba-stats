(function() {
'use strict';

angular.module('ArticleListApp', [])
.controller('ArticleListController', ArticleListController);

ArticleListController.$inject = ['$http'];
function ArticleListController($http) {
  var list = this;
  list.getData = function () {
    return $http({
      method: "GET",
      url: "https://api.sportradar.us/nba-t3/league/2013/12/21/changes.xml?api_key=7f74f6zvbkzpvathqjwjbne6"
    }).then(function (response) {
      console.log(response.data);
    })
  }

}
})();
