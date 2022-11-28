const express = require('express');
const router = express.Router(); 
 
const empresaRxBusiness       = require('../business/EmpresaRxBusiness'); 

module.exports = function(){  
    router.get('/empresa' , empresaRxBusiness.consultarEmpresa);  
    return router;
}

