'use strict'

app.controller('UserCtrl', ['UserServiceData', 'TableHeaderLoader', 'TableHeaderIndicator','CrudManager', function(userServiceData, tableHeaderLoader, tableHeaderIndicator, crudManager){
	
	
	this.persistRecord = function(record){
		
		userServiceData.ServiceData.persistRecord(record).then( angular.bind(this,function(value) {
		
			
			if(value){
				
				this.refresh();
				
			}
			
		}), function(reason) {
			
		}, function(value) {
			
		})

		
	}
	
	
	this.refresh = function(){
		
		userServiceData.ServiceData.getData().then( angular.bind(this,function(value) {
		
			this.itemsTempData = value;
			
			tableHeaderLoader.Loader.loadHeaderData(tableHeaderIndicator.IdeaTableHeader).then(angular.bind(this, function(value) {
				
				/*this.itemsData = this.itemsTempData;*/
				
				this.headerData = value;
				
				
			}), function(reason) {
				
			}, function(value) {
				
			})
			
		}), function(reason) {
			
		}, function(value) {
			
		})
			
 	}
	
	
	
	this.removeRecord = function(record){
		
		
			
	}
	
	
	
	this.createNewRecord = function(){
		
		
		
		
	}
	
	
	this.cancelRecord = function(){
		
		
		this.refresh();
		
	}
	
	
	this.canBeModify = function(record){
		
		
		return crudManager.Manager.canBeModify(record);
		
	}
	
	this.canBeSave = function(record){
		
		return crudManager.Manager.canBeSave(record);
		
	}
	
	this.canBeCancel = function(record){
		
		return crudManager.Manager.canBeCancel(record);
		
	}
	
	
	this.canBeDeleted = function(record){
		
		return crudManager.Manager.canBeDeleted(record);
	}
	
	

	
	
	this.refresh();
	
	
	
}]);






