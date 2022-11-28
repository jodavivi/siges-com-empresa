const request			= require('request-promise-native');
const utilshttp 		= require('../../utils/utilshttp');
const utils		 		= require('../../utils/utils');
const serviciosurl		= require('../../urlservicio/index');
 
/**
 * @description servicio para consultar informacion de la empresa
 * @creation David Villanueva 28/11/2022
 * @update 
 */
exports.consultarEmpresa= async function (oParam) { 
	 var oResponse			  = {};
	 oResponse.oData		  = {};
	 
     try {  
     	var oUrls			  = serviciosurl.servicios();  
     	var sUrlDestino		  = oUrls.sConsultarEmpresa + utils.geneararFiltro(oParam.oFiltro);
     		var options = {
			    method: 'GET'
			    ,uri: sUrlDestino 
			    ,headers: utilshttp.generaHeaders(oParam.oAuditRequest)
			    ,json: true 
			  } 
		  var consultarSedeResponse =	await request(options) ; 
     	 if(consultarSedeResponse.oAuditResponse.iCode === 1){
     	 	oResponse.iCode		= 1;
			oResponse.sMessage	= 'OK';
     		oResponse.oData		= consultarSedeResponse.oData;
     	 }else{
     	 	oResponse.iCode		=  consultarSedeResponse.oAuditResponse.iCode;
			oResponse.sMessage	=  consultarSedeResponse.oAuditResponse.sMessage;
		  }
		 
     } catch (e) { 
 
         	oResponse.iCode		=  -3;
			oResponse.sMessage	=  'Ocurrio un error en el servicio cliente, Url: ' +sUrlDestino + ', Error: ' + e.toString();
	 
     } 
     return oResponse;
};
