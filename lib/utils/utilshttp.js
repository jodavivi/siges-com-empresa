 const config		= require ('../config/config.json');
exports.generaHeaders = function (oHeader) { 
	var oResponse = {};
	oResponse.sIdTransaccion	 = oHeader.sidtransaccion;
	oResponse.sAplicacion		 = oHeader.saplicacion;
	oResponse.sUsuario      	 = oHeader.susuario;
	oResponse.oInfoUsuario		 = oHeader.oinfousuario;
	oResponse.oEmpresa		 	= oHeader.oempresa;
	oResponse.sSociedad		 	= oHeader.ssociedad;
	oResponse.dFecha			 = oHeader.dfecha;
	oResponse.sTerminal			= (oHeader.sterminal) ? oHeader.sterminal : oHeader['x-forwarded-for'];
	oResponse['Content-Type']	= 'application/json;charset=UTF-8';
	oResponse['Accept'] 		= 'application/json;charset=UTF-8'; 
	oResponse.Authorization  = oHeader.authorization; 
	return oResponse;
}