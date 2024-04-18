
const express = require('express');
const router = express.Router();
const dal= require("./../db");



router.get('/', async(req, res) => {
 try{
        
        
        const dealerShipId= req.query.id;
        const listofEmployees= await dal.getEmployeesByDealershipId(dealerShipId);
         res.status(200).send(listofEmployees);
    }
    catch(error){
          console.log(error.message);
          res.status(500).send(error.message);
    }
   
});

module.exports = router;
