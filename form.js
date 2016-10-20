var userInfoModule = angular.module('userInfoModule', []);
userInfoModule.controller('userInfoCtrl', ['$scope', function($scope) {
	$scope.userInfo = {
		email: '123456@gmail.com',
		password: '123456',
		autoLogin: true
	};

	$scope.getFormInfo = function() {
		console.log($scope.userInfo.email);
	}

	$scope.setFormInfo = function() {
		$scope.userInfo = {
			email: '87654321@gmail.com',
			password: '87654321',
			autoLogin: false
		};
	}

	$scope.resetForm = function() {
		$scope.userInfo = {
			email: '',
			password: '',
			autoLogin: false
		};
	}
}])