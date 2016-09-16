'use strict'

authMod.factory('AuthenticationUser',['$q', 
                                      '$location',
                                      '$window', 
                                       'AuthenticationService',
                          function(		$q,  
                            		 	location, 
                            		 	window,
                            		 	AuthenticationService
                          				){

	function Authentication(){
		
		
	}
	
	Authentication.prototype.checkLogin = function(dataAuthentication){
		
		var defer = $q.defer();
		
		var loginInfo = {};
		
		
		loginInfo.data = {};
		
		loginInfo.data.username = dataAuthentication.login;
		
		loginInfo.data.password = dataAuthentication.password;
		
		AuthenticationService.Service.makeAuthenticationRequest(loginInfo).then(function(data){
			
			if(data.authenticated){
				
				location.path('/Dashboard');
				
				defer.resolve({authentication:true});
				
			} else {
				
				defer.reject({authentication:false})
			}
			
					
		}, function(reject){
			
		}, function(error){
			
		});
		

		
		
		return defer.promise;
		
	}
	
	
	var authentication = new Authentication();
	
	return{
		
			Authentication:authentication
	}
	
	
	
}]);
