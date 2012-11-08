angular.module('project', []).
    config(function($routeProvider) {
      $routeProvider.
          when('/',        {controller: IndexCtrl, templateUrl: 'views/top.html'}).
          when('/summary', {controller: IndexCtrl, templateUrl: 'views/summary.html'}).
          when('/entry',   {controller: IndexCtrl, templateUrl: 'views/entry.html'}).
          when('/inquiry', {controller: IndexCtrl, templateUrl: 'views/inquiry.html'});
    }).
    directive('navigation', function() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function($scope, $element) {
          var links = $scope.links = [];

          $scope.select = function(link) {
            angular.forEach(links, function(link) {
              link.selected = false;
            });
            link.selected = true;
          };

          this.addLink = function(link) {
            if (links.length == 0) $scope.select(link);
            links.push(link);
          };
        },
        templateUrl: 'views/navigation.html',
        replace: true
      };
    }).
    directive('navlink', function() {
      return {
        require: '^navigation',
        restrict: 'E',
        transclude: true,
        scope: { title: '@', href: '@' },
        link: function(scope, element, attrs, ctrl) {
          scope.select = function() {
            this.$parent.select(this);
          };
          ctrl.addLink(scope);
        },
        template: '<li ng-class="{active: selected}" ng-trasclude>' +
            '<a href="{{href}}" ng-click="select()" >{{title}}</a>' +
            '</li>',
        replace: true
      };
    });

function IndexCtrl($scope) {
  $scope.moveInedx = function () {
    $location.path('/');
  };
  $scope.moveSummary = function () {
    $location.path('/summary.html');
  };
}