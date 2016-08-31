var API = 'http://tekoapp.com/taxiapp/api';

angular.module('starter.controllers', [])
.controller('cartCtrl', function($scope) {

})
   
.controller('cloudCtrl', function($scope) {

})
      
.controller('misLugaresCtrl', function($scope) {

})
   
.controller('menuCtrl', function($scope, $state) {
  $scope.cerrarSesion = function(){
    localStorage.removeItem('usuario');
    $state.go('taxiClub.login');
  };
})
   
.controller('ayudaCtrl', function($scope) {

})
   
.controller('QuiNesSomosCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope, $http, $state) {
  

  if(localStorage.getItem('usuario') && localStorage.getItem('usuario').length>0){
    $state.go('taxiClub.mapa');
  }
  $scope.usuario = {};
  $scope.login = function(usuario){
    $http({
			url : API+'/login',
			method : "POST",
			data : usuario,
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(res){
      if(res.error==false){
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
        $state.go('taxiClub.mapa');
      } else {
        alert(res.mensaje);
      }
    }).error(function(err){
      alert("Ocurrió un error al conectarse");
    });
  };
})
   
.controller('crearCuentaCtrl', function($scope, $http, $state) {
  $scope.usuario = {};
  $scope.registro = function(usuario){
    $http({
			url : API+'/registro',
			method : "POST",
			data : usuario,
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).success(function(res){
      if(res.error==false){
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
        $state.go('taxiClub.mapa');
      } else {
        alert(res.mensaje);
      }
    }).error(function(err){
      alert("Ocurrió un error al conectarse");
    });
  };
})
   
.controller('CMoFuncionaTaxiClubCtrl', function($scope) {

})
   
.controller('CMoPidoUnTaxiCtrl', function($scope) {

})
   
.controller('PuedoReservarUnTaxiCtrl', function($scope) {

})
   
.controller('otraCtrl', function($scope) {

})
   
.controller('configuraciNCtrl', function($scope) {

})
   
.controller('mapaCtrl', function($scope) {

})
.controller('MapCtrl', function($scope, $ionicLoading, $http) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

   $scope.alerta = function () {  
    alert('Recuerda que al final de tu viaje se te cobrara 10.00 pesos extra');
 
  success(function(data) { console.log(data.name); 
 }).
    error(function (data) { 
     
  });

  error(function (data) {
    alert("Request failed");
  });
  
  }

   $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Obteniendo posición actual',
      showBackdrop: true
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));

      posicion = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      map = $scope.map;

      var maker = new google.maps.Marker({
        position : posicion,
        map: map,
        tittle:'Hello World'
      });

      map.setZoom(18);

      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
  
});
