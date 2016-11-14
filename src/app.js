import angular from 'angular'

const editor = angular.module('editor', [])

editor.controller('userInfoController', [
    '$scope',
    function($scope) {
        console.log('[userInforController] init')
        $scope.name = 'Amp'
    }
])
