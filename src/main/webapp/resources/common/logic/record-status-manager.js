app.factory('RecordManager',['RecordStatus', function(RecordStatus){
	
	function Manager(){}
	
	
	/*Manager.prototype.newRecord = function(params){
		
		
	var emptyRecord = {
				
				id:params.plan,
				recordStatus:RecordStatus.NEW
				
				
	}
		
		return DedicateDataSource.DataSource.addEmptyRecord(emptyRecord);
		
	}*/
	
	Manager.prototype.isInActiveModifyAction = function(recordStatus){
		
		return recordStatus !=undefined || recordStatus !=null ? true : false;
		
	}
	
	
	Manager.prototype.isInActiveSaveAction = function(recordStatus){
		
		return recordStatus === undefined || recordStatus ===null ? true : false;
	}
	
	
	Manager.prototype.isReadable = function(recordStatus){
		
		var result = recordStatus !== RecordStatus.NEW && recordStatus !== RecordStatus.IN_PROGRESS;
		
		return result;
	}
	
	Manager.prototype.isEditable = function(recordStatus){
		
		var result = recordStatus === RecordStatus.NEW || recordStatus === RecordStatus.IN_PROGRESS;
		
		return result
		
	}
	
	
	Manager.prototype.processCancel = function(record){
		
		var m = record
		
	}
	
	
	
	var manager = new Manager();
	
	
	return {
		
		Manager:manager
	}


	
}]);
