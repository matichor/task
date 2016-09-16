'use strict'

authMod.controller('LoginController', ['AuthenticationUser', function(authenticationUser){
	
	var self = this;
	
	
	self.tryLogin = function(){
		
		self.loadingAppIndicator = true;
		
		var authenticationData = {
				
				login: self.login,
				
				password: self.password
				
		}
		
		
		authenticationUser.Authentication.checkLogin(authenticationData).then(function(value) {
			
		  	  if(value.authentication)
		  		  		self.loadingAppIndicator = false;
		  	  
		  	   
			
		}, function(reason) {
			
			self.loadingAppIndicator = false;
			
	  		self.showLoginErrorMessage = true;
	  		
	  		self.loginErrorMessageContent = 'Nieprawidłowy login lub hasło';
			
		}, function(value) {
		

		})
		
		
	}
	
	
}]);