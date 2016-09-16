'use strict'

app.factory('TableHeaderLoader', ['$q','TableHeaderIndicator', '$http', function($q, tableHeaderIndicator, httpService){
	
	function Loader(){
		
		this.fileName = 'user-col.json';
		
	}
	
	
	Loader.prototype.loadHeaderData = function(tableHeaderid){
		
		var self = this;
		
		var defer = $q.defer();
		
		switch(tableHeaderid){
		
			case tableHeaderIndicator.IdeaTableHeader:{
				
				
			var requestInfo = {
						 method: 'GET',
						 url: 'resources/json/user-col.json',																						
					     headers: {
					            'Content-Type': 'application/json;'
					     }
						}
			
		 httpService(requestInfo).
				then(angular.bind(self, function(respond) {
					
							defer.resolve(respond.data);
							
					
					
					
				}));

				break;
			}
		
		}
		
		
		return defer.promise;
		
		
	}
	
	
	var loader = new Loader();
	
	
	return{
		
		Loader:loader
		
	}
	
	
}])