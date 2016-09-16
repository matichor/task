app.directive('dynTableView', [ function(){
	
	
	function linkFn(scope, element, att, ctrl){
		
		
		scope.persistRecord = function(record){
			
			ctrl.persistRecord(record);
		}
		
		scope.voteUp = function(voteData){
			
				ctrl.voteUp(voteData);
			
		}
		
		scope.createNew = function(){
				
			ctrl.createNewRecord();
					
		}

		scope.removeRecord = function(record){
			
			ctrl.removeRecord(record);
			
		}
		
		scope.cancelRecord = function(){
			
			ctrl.cancelRecord();
			
		}
		
		scope.canBeModify = function(record){
			
			return ctrl.canBeModify(record);
			
		}
		
		scope.canBeSave = function(record){
			
			
			return ctrl.canBeSave(record);
			
		}
		
		scope.canBeCancel = function(record){
			
			return ctrl.canBeCancel(record);
		}
		
		scope.canBeDeleted = function(record){
			
			return ctrl.canBeDeleted(record);
			
		}
		
		
		
		scope.$watch('vm.datasRow',function(value){
		
			if(value){
			
				scope.expose(value);
			
			}
		})
		
		scope.$watch('vm.datasRowNew',function(value){
		
			if(value){
			
				scope.expose(value);
			
			}
		})
		
		
		

		
		
		
	}
	
	
	return{
		
		restrict: 'E',
		
		require: '?^ngController' ,
		
		templateUrl: 'common/dynamic-table-view.html',
		
		scope:{
			
			headerRow:'=',
			
			datasRow:'=',
			
			datasRowNew:'=',
			
			dynTableHeaderStyle:'=',
			
			remove:'&',
			
			modify:'&'
			
		},
	
		
		compile:function(att, element){
			
			
			return {
				
				pre: function(scope, element, att){},
				
				post: linkFn
			
				
			}
			
			
		},
		
		bindToController: true,
		
		
		controllerAs: 'vm',
		
		controller: ['$scope', function(scope){
			
			scope.$watch('vm.datasRow',function(value){
				
				if(value)
				scope.expose(value);
				
			})
			
			scope.expose = function(value){
				
				scope.exposeList = value;
				
			}
			
			/*controller jest wywoływany po kompilacji ale przed pre-linkie*/
				
			this.saveRecord = function(record){
				
				scope.persistRecord(record);
				
			}
			
			
			this.voteUp = function(voteData){
				
				scope.voteUp(voteData);
				
			}
			
			this.createNewRecord = function(){
				
				scope.createNew();
					
			}
			
			this.removeRecord = function(record){
				
				scope.removeRecord(record);
				
			}
			
			
			this.cancelRecord = function(){
				
				scope.cancelRecord();
				
			}
			
			this.canBeModify = function(record){
				
				
				return scope.canBeModify(record);
				
			}
			
			this.canBeSave = function(record){
				
				
				return scope.canBeSave(record);
				
			}
			
			this.canBeCancel = function(record){
				
				return scope.canBeCancel(record);
			}
			
			
			this.canBeDeleted = function(record){
				
				return scope.canBeDeleted(record);
				
			}



			
		}]
	
	
	}
	
}]);