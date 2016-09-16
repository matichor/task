'use strict'


app.config(['$routeProvider',function(routeProvider) {
	
	routeProvider.when('/',{
		
				templateUrl: 'authorization/login.html',
				
				controller: 'LoginController',
				
				controllerAs: 'logCtrl'
		
		}
		
	).when('/Dashboard',{
		
			templateUrl: 'dashboard/dashboard.html',
			
			controller:'DashboardController',
			
			controllerAs: 'dashboardCtrl'
		
	})
	
}]);