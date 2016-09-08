var API = 'http://tekoapp.com/taxiapp/api';

angular.module('starter.controllers', [])
.controller('cartCtrl', function($scope) {

})
   
.controller('cloudCtrl', function($scope) {

})
      
.controller('misLugaresCtrl', function($scope) {

})
   
.controller('menuCtrl', function($scope, $state, $ionicPopup) {
  $scope.cerrarSesion = function(){
    localStorage.removeItem('usuario');
    $state.go('taxiClub.login');
  };

  $scope.showSShare = function(){
    var myPopup = $ionicPopup.show({
      //template: '<div style="width:100%;height:200px"> Ejemplo</div>',
      title:        'Comparte nuestra aplicación',
      subTitle:     'Porfavor selecciona el medio a compartir',
      templateUrl:  'templates/socialShare.html',
      scope: $scope,
      buttons: [{text:'Cerrar',type:'button-positive'}]
    });
  };

  $scope.showEntra = function(){
    console.log('Ejemplo');
  }; 

  $scope.share = function(t, msg, img, link){  
    if(t == 'w')
      window.plugins.socialsharing.
      shareViaWhatsApp(msg, '', link);
    else if(t == 'f')
      window.plugins.socialsharing.
      shareViaFacebook(msg, img, link);    
    else if(t == 't')
      window.plugins.socialsharing.
      shareViaTwitter(msg, img, link);    
    else if(t == 'sms')
      window.plugins.socialsharing.
      shareViaSMS(msg+' '+img+' '+link);    
    else
    {
        var sub = 'Beautiful images inside ..';
        window.plugins.socialsharing
        .shareViaEmail(msg, sub, '');        
    }    
  }; 

})
   
.controller('ayudaCtrl', function($scope) {

})

.controller('socialShare', function($scope) {
  
})
   
.controller('QuiNesSomosCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope, $http, $state) {
  //document.getElementById('test').value = "";
  //console.log($scope);
  //$scope.correo = "";
  //$scope.pass   = "";
  $scope.$on('$ionicView.enter', function() {
     // Code you want executed every time view is opened
     $scope.correo = "";
     $scope.pass   = "";
  });

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
