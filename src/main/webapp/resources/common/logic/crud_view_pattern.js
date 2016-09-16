app.directive('crudView', function(){

	return {

		restrict:'AE',

		templateUrl:'common/html/crud_view_pattern.html',

		scope:{

			add:'&'

		},

		transclude: true

	}


})