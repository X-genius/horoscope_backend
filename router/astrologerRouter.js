const express = require('express');
const router = express.Router();
const astrologer = require('../json_dataFiles/astro.json');

/**
 * Dummy api for check Astrologer router is running or not
 */
router.get('/' , async (req , res) => {
     res.send("Astrologer Router is Running");
});

/**
 * Search astrologer by name, skills as well language
 */
router.get('/astrologerDetails' , async (req , res) => {
    for(let i = 0; i < astrologer.length; i++)
    {
         const astrologerName = astrologer[i].firstName + " " + astrologer[i].lastName;
         const astrologerSkill = astrologer[i].skills;
         const astrologerLanguage = astrologer[i].languages;

         if(astrologerName === req.query.name && astrologerSkill === req.query.skill && astrologerLanguage === req.query.language)
         {
              res.send(astrologer[i]);
         }
    }
});

/**
 * Filter astrologer based upon skills and language
 */
router.get('/astrologerFilter' , async (req , res) => {
          const filters = req.query;
          const filteredAstrologer = astrologer.filter(user => {
            let isValid = true;
            for (key in filters) 
            {
              isValid = isValid && user[key] == filters[key];
            }
            return isValid;
          });
          res.send(filteredAstrologer);
});

/**
 * Sort Astrologer based upon experience and pricing
 */
router.get('/sortAstrologer' , async (req , res) => {
          const sortResult = astrologer.sort( (a , b) => {
               return a.experience - b.experience && a.price - b.price;
          });
          res.send(sortResult);
});

module.exports = router;