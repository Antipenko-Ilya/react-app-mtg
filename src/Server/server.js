const express = require('express');
const app = express();
const port = 3366;
const getFile = require('./routes/getFile');
const helmet = require('helmet');


app.use(helmet());
app.use('/getFile',getFile);

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
})