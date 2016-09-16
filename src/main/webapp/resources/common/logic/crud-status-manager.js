'use strict'

app.factory('CrudManager', ['$window', 'RecordStatus', function($window,RecordStatus) {
	
	
	function Manager(){
		
		
		
	}
	
	Manager.prototype.canBeModify = function(record){
		
		if(record.recordStatus === RecordStatus.NEW || record.recordStatus === RecordStatus.IN_PROGRESS)
			return false;
		
		if(record.author)
			return false;
		
		
		return true;
		
		
	}
	
	
	Manager.prototype.canBeSave = function(record){
		
		if((typeof record.recordStatus === 'undefined') && record.recordStatus !== RecordStatus.NEW)
			return false;
		
		
		return true;
		
	}
	
	
	Manager.prototype.canBeCancel = function(record){
		
		
		if((typeof record.recordStatus === 'undefined') && record.recordStatus !== RecordStatus.NEW)
			return false;
		
		
		return true;
		
	}
	
	
	Manager.prototype.canBeDeleted = function(record){
		
		if((typeof record.recordStatus !== 'undefined') && record.recordStatus === RecordStatus.NEW)
			return false;
		
		if((typeof record.recordStatus === 'undefined'))
			return false;
		
		
		return true;
		
	}
	
	
	
	var manager = new Manager();
	
	return{
		
		Manager: manager
	}
	
}])