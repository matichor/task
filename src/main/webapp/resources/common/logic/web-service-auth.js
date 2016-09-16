'use strict'

commonMod.factory('WSAuth', ['$resource', function(resource) {
	
	
	return function makeAutorization(credentials){
		
		
		return 	resource('authorization/',{},{
			
			ldapAuthorization:{
				
				method:'GET',
				
				url:'authorization/authdata',
				
				headers:{
					
					authorization : "Basic " + btoa(credentials.data.username + ":" + credentials.data.password)
					
				}
	
			}
			
		});
		
	}
	
	
	

	
}])