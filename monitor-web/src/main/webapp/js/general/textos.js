angular.module('app.textos', [])
.constant('loginTextos', {
	titulo: 'CONTROL DE ACCESO',
	usuario: 'Usuario : ',
	contrasenia: 'Contrase\u00f1a :',
	ingresarUsuario: 'Ingrese el usuario',
	ingresarContrasenia: 'Ingrese la contrase\u00f1a',
	olvido: '\u00bfOlvid\u00f3 su contrase\u00f1a?',
	ingresar: 'INGRESAR'
})
.constant('timeLogTexto', {
	//Descripcion de las controles individuales
	titulo: 'MONITOREO DE DAS',
	//******Descripcion de los Tag
	servicio: 'Servicio:',
	transaccion: 'Evento:',
	origen: 'Aplicacion:',
	destino: 'Destino:',
	tiempo: 'Fecha:',
	insertTime: 'Hora:',
	dataFmt: 'Tipo mensaje:',
	dataMsg: 'Mensaje:',
	estado: 'Estado:',
	//Para tablas
	servicioTbl: 'Servicio',
	transaccionTbl: 'Evento',
	origenTbl: 'Aplicacion',
	destinoTbl: 'Destino',
	tiempoTbl: 'Fecha',
	insertTimeTbl: 'Hora',
	dataFmtTbl: 'Mensaje',
	dataMsgTbl: 'Mensaje',
	estadoTbl: 'Estado',
	opcionTbl: 'Visor'
})

.constant('botonTexto', {
	//Indice de menu general
	monitorDas: 'Monitor Das'
})
.constant('queryRuta', {
	urlTimeLog: 'http://localhost:8080/ResDAS/MessageFormat'
});