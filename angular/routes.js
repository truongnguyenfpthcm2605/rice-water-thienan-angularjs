app.config(function ($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "./component/main.html"
      })
      .otherwise({
        redirectTo: "/main",
      });
  });
  app.run(function ($rootScope) {
    $rootScope.$on("$routeChangeStart", function () {
      $rootScope.loading = true;
    });
    $rootScope.$on("$routeChangeSuccess", function () {
      $rootScope.loading = false;
    });
    $rootScope.$on("$routeChangeError", function () {
      $rootScope.loading = false;
      alert("loading Templet Errors");
    });
  });