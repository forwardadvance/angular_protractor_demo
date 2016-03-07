angular.module('app', [])
  .constant('flickrBase', 'http://api.flickr.com/services/feeds/photos_public.gne')
  .controller('flickrController', function($scope, flickrService) {
    $scope.tag = "";
    $scope.get = function() {
      if ($scope.tag) {
        flickrService.getByTag($scope.tag).success(function(data) {
          $scope.feed = data;
        });
      }
    }
  })
  .service("flickrService", function($http, flickrBase) {
    this.getByTag = function(tag) {
      var url = [
        flickrBase,
        '?tags=',
        tag,
        '&tagmode=any&format=json',
        '&jsoncallback=JSON_CALLBACK'
      ].join('');
      return $http.jsonp(url);
    };
  });
