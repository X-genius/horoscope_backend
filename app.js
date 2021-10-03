require('dotenv').config();
const express = require('express');


const homeRouter = require('./router/homeRouter');
const astrologerRouter = require('./router/astrologerRouter');

const app = express();

app.use(express.json());

app.use('/api/home' , homeRouter);
app.use('/api/astrologer' , astrologerRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT , () => {
    console.log("Nodejs listening on port " + PORT);
});
