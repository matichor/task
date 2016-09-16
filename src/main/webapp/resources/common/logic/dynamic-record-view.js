'use strict'

app.directive('dynRecordView',	[ 'MappingPhrase','RecordManager','RecordStatus', function(mappingPhrase,recordManager,RecordStatus){
	
	
	function linkFn(scope, el, att,ctrl){
	
		scope.isActionColumn = function(mapping){
			
			return mappingPhrase.Action === mapping ? true : false;
		}
		
		
		scope.isExtensionActionColumn = function(mapping){
	
			return mappingPhrase.Vote === mapping ? true : false;
			
		}
		
		scope.isEditable = function(column){
			
			if(column.isEditable===0)
						return false;
			
			if(mappingPhrase.Action === column.mapping || mappingPhrase.Vote === column.mapping)
				return false;
			
			
			return recordManager.Manager.isEditable(ctrl.itemRecord.recordStatus);
			
		}
	
		
		scope.isReadable = function(column){
			
			if(column.isEditable===0)
				return true;
			
			return /*column.isEditable===0?true:false;*/ recordManager.Manager.isReadable(ctrl.itemRecord.recordStatus);
		}
		
		scope.modify = function(){
			
			ctrl.itemRecord.recordStatus = RecordStatus.IN_PROGRESS;
			
		}
		
		scope.save = function(){
			
				ctrl.itemRecord.recordStatus = undefined;
			
				ctrl.saveRecord();
			
		}
		
		
		scope.setEvaluationUp = function(){
			
			ctrl.voteUp(ctrl.itemRecord);
			
		}
		
		scope.cancel = function(){
			
			ctrl.cancelRecord();
			
		}
		
		scope.removeItem = function(){
			
			ctrl.removeRecord(ctrl.itemRecord);
			
		}
		
		scope.canBeModify = function(){
			
			return ctrl.canBeModify(ctrl.itemRecord);
			
		}
		
		scope.canBeSave = function(){
			
			return ctrl.canBeSave(ctrl.itemRecord);
		}
		
		
		scope.canBeCancel = function(){
			
			return ctrl.canBeCancel(ctrl.itemRecord);
			
		}
		
		scope.canBeDeleted = function(){
			
			console.log(ctrl.canBeDeleted(ctrl.itemRecord));
			
			return ctrl.canBeDeleted(ctrl.itemRecord);
		}
		
		
	}

	
	return {
		
		restrict:'E',
		
		
		templateUrl: 'common/dynamic-record-view.html',
		
		scope:{
			
			itemRecord: '=',
			
			columnData: '=',
			
			saveRecord:'&',
			
			modifyRecord:'&',
			
			cancelRecord:'&',
			
			removeRecord:'&',
			
			canBeModify:'&',
			
			canBeSave:'&',
			
			canBeCancel:'&',
			
			canBeDeleted:'&'
			
		},
		
		compile: function(element, att){
			
			return{
				
				pre: function(scope, el, attribute){},
				
				post: 	linkFn
				
			}
			
			
		}
		
		,
		
		
		
		
		/*link:linkFn,*/
		
		bindToController: true,
		
		controllerAs: 'vm',
		
		controller: [function(){/*controller jest wywoływany po kompilacji ale przed pre-linkie*/}]
		
		
	}
	
}])

