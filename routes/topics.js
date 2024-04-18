const express = require('express');
const router = express.Router();
const dal= require("./../db");

//URL /topics?campaign_id=
router.get('/', async(req, res) => {
    try{
        
        console.log("HII");
        const compaign_id= req.query.id;
        const topicUnderCampaign= await dal.getTopicsByCompaign(compaign_id);
         res.status(200).send(topicUnderCampaign);
    }
    catch(error){
          console.log(error.message);
          res.status(500).send(error.message);
    }
   
});

module.exports = router;
