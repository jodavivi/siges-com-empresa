 
//url de servicios
exports.servicios   = function () { 
	const oUrl = {}; 
	 
	//Servicios de siges-usuario
	//var sHostUsuario      	= 'http://www.consulting-tic.com:3001';
	var sHostConsultarEmpresa   = 'http://localhost:3009';
	oUrl.sConsultarEmpresa	    = sHostConsultarEmpresa + '/siges-config-empresa/empresa/configuracion';
 
    return oUrl;
      
};