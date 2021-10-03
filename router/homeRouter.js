const express = require('express');
const router = express.Router();
const banner_offer_json = require('../json_dataFiles/banner_offer_json.json');
const horoscope_json = require('../json_dataFiles/horoscope_json.json');
const question_category = require('../json_dataFiles/question_category.json');
const reports = require('../json_dataFiles/reports.json');
const astrologer = require('../json_dataFiles/astro.json');
const customerFeedback = require('../json_dataFiles/testimonial.json');

/**
 * Dummy api for check Home router is running or not
 */
router.get('/' , async (req , res) => {
     res.send("Home Router is Running");
});

/**
 * Get image detail from banner_offer.json
 */
router.get('/getImageDetails' , (req , res) => {
     const imageDetailId = banner_offer_json.data[0].images.medium.id;
     const imageDetailURL = banner_offer_json.data[0].images.medium.imageUrl;
     res.send('Image Id : ' +  imageDetailId + '\n' + 'Image URL : ' + imageDetailURL);
});

/**
 * Get all horoscope list
 */
router.get('/getHoroscopeList' , (req , res) => {
    let data = horoscope_json.data;
    res.send(data);
});

/**
 * List of all astrologer
 */
router.get('/listOfAstrologer' , (req , res) => {
    const listOfAstrologer = astrologer;
    res.send(listOfAstrologer);
});

/**
 * List of all reports
 */
router.get('/listOfReports' , (req , res) => {
    const listOfData = reports.data;
    res.send(listOfData);
});

/**
 * Get Question's in all category which you choose
 */
router.get('/getQuestion' , (req , res) => {
    for(let i = 0; i < question_category.data.length; i++)
    {
     const questionTypeSearch = question_category.data[i].name;

     if(questionTypeSearch === req.query.name)
     {
          const questions = question_category.data[i].suggestions;
          res.send(questions);
     }
    }
});

/**
 * get customer feedback
 */
router.get('/getCustomerFeedback' , (req , res) => {
     const feedback = customerFeedback;
     res.send(feedback);
});

module.exports = router;