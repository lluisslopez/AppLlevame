angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('cart', {
    url: '/page2',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('taxiClub', {
    url: '/side-menu21',
    templateUrl: 'templates/taxiClub.html',
    controller: 'menuCtrl',
    abstract:true
  })

  .state('taxiClub.misLugares', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/misLugares.html',
        controller: 'misLugaresCtrl'
      }
    }
  })

  .state('taxiClub.ayuda', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ayuda.html',
        controller: 'ayudaCtrl'
      }
    }
  })

  .state('taxiClub.QuiNesSomos', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuiNesSomos.html',
        controller: 'QuiNesSomosCtrl'
      }
    }
  })

  .state('taxiClub.login', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('taxiClub.crearCuenta', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crearCuenta.html',
        controller: 'crearCuentaCtrl'
      }
    }
  })

  .state('taxiClub.CMoFuncionaTaxiClub', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/CMoFuncionaTaxiClub.html',
        controller: 'CMoFuncionaTaxiClubCtrl'
      }
    }
  })

  .state('taxiClub.CMoPidoUnTaxi', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/CMoPidoUnTaxi.html',
        controller: 'CMoPidoUnTaxiCtrl'
      }
    }
  })

  .state('taxiClub.PuedoReservarUnTaxi', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/PuedoReservarUnTaxi.html',
        controller: 'PuedoReservarUnTaxiCtrl'
      }
    }
  })

  .state('taxiClub.otra', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/otra.html',
        controller: 'otraCtrl'
      }
    }
  })

  .state('taxiClub.configuraciN', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuraciN.html',
        controller: 'configuraciNCtrl'
      }
    }
  })

  .state('taxiClub.mapa', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page10')

  

});