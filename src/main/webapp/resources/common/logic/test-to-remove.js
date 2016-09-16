'use strict'

commonMod.controller('TestCtrl',['WSAuth', function(AuthWS){
	
	var self = this;
	
	
	self.press = function(){
	
		self.authorization = new AuthWS( {
	
			repositoryId:1,
			
			data:{
			
			"entityElementId":45,
			
			"attributeId":1,
			
			"value":1,
			
			"modificatorName":'mkarwacki',
			
			"attributeEntryId":1
			
			}
		});
		
		self.authorization.$save(function(doc,element){
			
			console.log(doc);
			
			console.log(element);
			
		});
	
	}
	
	
}]);

