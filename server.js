console.log("May Node be with you");

const express = require('express');
const app = express();

app.listen(3000,function() {
    console.log('listening on 3000')
})

// We normally abbreviate `request` to `req` and `response` to `res`.
app.get('/', (req, res) => {
    // do something here, eg. simply res.send('Hello World')
    //below you send the html file found in the directory listed
    res.sendFile('/Users/lilyclark/desktop/portfolio/CRUD-Express-MongoDB-practice-app' + "/index.html")
  })