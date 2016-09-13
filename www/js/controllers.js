var API = 'http://tekoapp.com/taxiapp/api';

angular.module('starter.controllers', ['pubnub.angular.service','ngCordova'])
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
.controller('locationCtrl', function($scope, Pubnub, $cordovaGeolocation, $ionicPlatform){
  
  $ionicPlatform.ready(function(){
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat,long);
      }, function(err) {
        console.log('getCurrentPosition error:' + angular.toJson(err));
    });  
  });


  Pubnub.init({
    publish_key: 'pub-c-4ee461dc-28c5-42cd-b548-2a3484b36daa',
    subscribe_key: 'sub-c-c86ca5e6-7068-11e6-a723-0619f8945a4f'
  }); 

  $scope.writedir = function(){
    //$scope.coords = [];
    var watchOptions = {timeout : 30000,enableHighAccuracy: false};
    var watch = $cordovaGeolocation.watchPosition(watchOptions);
    watch.then(null,
    function(err){
      console.log('watchPosition error:' + angular.toJson(err));
    },
    function(position) {
      $scope.coords = [];
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
      console.log(lat,long);
      //$scope.coords.push({latz:parseInt(lat, 10),lngz:parseInt(long, 10)});
      //$scope.pnCall({latz:parseInt(lat, 10),lngz:parseInt(long, 10)});
      $scope.pnCall({latz:lat,lngz:long});
    });

    
  }  
  $scope.pnCall = function(coords) {
    console.log('in function');
    //coords.forEach(function(value, i) {
      //setTimeout(function (){
        Pubnub.publish({channel: "mymaps",message: coords});
      //}, 3000 * i);
    //});
  }

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
