'use strict'

authMod.factory('AuthenticationService',['$q','WSAuth', function($q,WSAuth){
	
	function Service(){
		
		
		
	}
	
	Service.prototype.makeAuthenticationRequest = function(credentials){
		
		var defer = $q.defer();
		
		
		WSAuth(credentials).ldapAuthorization({},function(value){
		
			defer.resolve(value);
			
		});
		
		
		
		return defer.promise;
		
	}
	
	var service = new Service();
	
	return{
		
		Service:service
		
	}
	
}]);