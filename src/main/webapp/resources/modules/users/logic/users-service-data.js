'use strict'

app.factory('UserServiceData', [
                                  '$q',
                                  'RecordStatus',
                                  '$http',
                                 
                                  function($q,RecordStatus,httpService){

	
	function ServiceData(){
			
		this.items = [];
		
	}
	
	
	ServiceData.prototype.getData = function(){
		
		var self = this;
		
		var defer = $q.defer();
		
		
		var requestInfo = {
				 method: 'GET',
				 url: 'users/all',																						
			     headers: {
			            'Content-Type': 'application/json;'
			     }
				}
	
		httpService(requestInfo).
		then(angular.bind(self, function(respond) {
			
					defer.resolve(respond.data);
					
			
			
			
		}));

		
		
		return defer.promise;
		
	}
	
	ServiceData.prototype.persistRecord = function(record){
		
		var defer = $q.defer();
		
		
		httpService.post('users/update', record).success(function(respond) {
	            
				defer.resolve(respond.data);
			
			
	        }).error(function() {
	            $scope.setError('Could not add a new train');
	        });

		
		 return defer.promise;
	}
	
	
	
	
	ServiceData.prototype.createNew = function(){
		
		var isNoMoreNewRecord = false;
		
		for(var index in this.items){
			
			var instance = this.items[index];
			
			if(instance.recordStatus === RecordStatus.NEW){
				
				isNoMoreNewRecord = true;
				
				break;
			}
				
			
		}
		
		if(isNoMoreNewRecord)
			return this.items;
		

		
		
		var emptyRecord = {
				
				ideaDescription: null,
				
				count: 0,
				
				recordStatus:RecordStatus.NEW

		}
		
		this.items.unshift(emptyRecord);
		
		return this.items;
		
	}
	
		
	
	
	var serviceData = new ServiceData();
	
	
	return{
		
		ServiceData : serviceData
		
	}
	
	
}]);

