angular.module('gststar', ['ui.router'])
    .config(['$stateProvider','$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider,ngMetaProvider ) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');
            // $stateProvider
            //     .state('home', {
            //         url: '/',
            //         templateUrl: '/templates/home.html',
            //         data: {
            //             meta: {
            //                 'title': 'GST Registration and GST Return Filing Online - GST Star',
            //                 'description': 'GST Star provides GST registration and GST return filing and ' +
            //                 'gives GST solutions to enterprises, SMEs and tax professionals. '
            //             }
            //         }
            //     })
            //     .state('solutions', {
            //         url: '/solutions',
            //         templateUrl: '/templates/solutions.html',
            //         controller: 'solutionsCtrl'
            //     })
               


        }])