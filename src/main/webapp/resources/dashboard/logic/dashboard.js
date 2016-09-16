'use strict'


dashMod.controller('DashboardController',['MenuData',function(menuData){

	this.getVaildatePositions = function(){
		
		return menuData.BasicData;
		
	}
	
	
	this.isActiveInfoIcon = function(item){
		
		return item.sequence == menuData.MenuSequence.INFO || item.parentId == menuData.MenuSequence.INFO ? true : false; 
		
	}
	
	
	this.isActiveAdvertIcon = function(item){
		
		return item.sequence == menuData.MenuSequence.ADVERT ? true : false; 
		
	}
	
	this.isActiveManagerIcon =  function(item){
		
		return item.sequence == menuData.MenuSequence.EST_MAN_OPINION ? true : false; 
		
	}

	this.isActiveMenuItem = function(item){
		
		return item.sequence == this.activeId ? true : false;
		
	}
	
	
	this.pressMenuItem = function(item){
		
		this.activeId = item.sequence;
		
		this.contentUrl = item.url;
		
	}
	
	
	
	
	
	
	
}]).directive('headerInfo',['$location' , function(location){
	
	return {
		
		restrict: 'EA',
		
		templateUrl: 'dashboard/header.html',
		
		scope:{},
		
		link:linkUp
		
		
	}
	
	function linkUp(scope, element, att){

		
		scope.logOff = function(){
			
			location.path('/');
			
		}
		
		scope.timed = new Date();
		

	}
	
	
	
	
}]);
