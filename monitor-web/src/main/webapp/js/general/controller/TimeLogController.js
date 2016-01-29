angular.module('app.controllers')
.controller('timeLogController',
	['$scope', '$http', '$state', 'timeLogTexto', 'queryRuta',
		function($scope,  $http, $state, timeLogTexto, $queryRuta){
	// establece el texto en la applicacion
			$scope.timeLogTexto = timeLogTexto;
			//variables de inicio
			$scope.listTimeLog = [ 
										{"servicio":"BMV","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"AAA","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"BBB","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"CCC","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"DDD","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"EEE","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"FFF","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"GGG","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"HHH","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"III","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"JJJ","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"HHH","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"},
										{"servicio":"KKK","transaccion":"TXN","origen":"SWITCH","destino":"Destination","tiempo":"20160126231507095","insertTime":"20160126111508","dataFmt":"001","dataMsg":"001","estado":"0"}
									]
			$scope.selectTimeLog = {}; //es parte No dependeiente de la data general, 
									 		//es usado para mostrar la data y ser enviado paraguardar
			
			$scope.responseRest = ""; //Mensaje de la respuesta generada por las consultas y validaciones
			$scope.responseRestTag = ""; //Estilo de la respuesta generada por las consultas y validaciones
			$scope.hideAlert = true; //Visualización de la alerta de respuesta(true: se muestra, false: se oculta)


//***********Inicio de proceso por default
			readData();
//***********Fin de proceso por default

//***********Inicio Consulta servicio rest
			function readData() {
				/*
				console.log("Procesando SELECT...");
				$http.get($queryRuta.urlTimeLog)
					.success(function(data){
						console.log("N° registros de formatos:", data.messageFormats.length);
						$scope.listTimeLog = data.messageFormats;
					})
					.error(function(data, status) {
						console.log(status);
						responseData(data);
					});
				*/
			}
//***********Inicio Consulta servicio rest

//***********Inicio de metodos Fijos para mantener actualizado la informacion
			function refreshData (){
				console.log("Refrescando la data...");
				readData();	
				limpiarCampos();			
			}

			function responseData(parData){
				if(parData.codigo == "00"){
					console.log("OK...:", parData);
					$scope.responseRestTag = "success";
				}else if(parData.codigo == "99"){
					console.log("ERROR...:", parData);
					$scope.responseRestTag = "danger";
				}
				$scope.responseRest = parData.descripcion;
				showAlert();
			}

			function showAlert() {
				$scope.hideAlert = false;
			}

			function closeAlert() {
				$scope.hideAlert = true;
			}

			function limpiarCampos(){
				$scope.selectTimeLog.messageFormatId = "";
			}
//***********Inicio de metodos Fijos para mantener actualizado la informacion			
			
//***********Inicio de Botones de proceso, controles
			$scope.refrescar = function(){
				readData();
			};

			$scope.editar = function(valRow){
				console.log("mostrar datos:", valRow);
				closeAlert();
				$scope.selectTimeLog = angular.copy(valRow);
			};
//***********Fin de Botones de proceso, controles

		}
	]);



