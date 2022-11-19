console.log("May Node be with you");

const express = require('express');
const app = express();
const PORT = 8000

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})

// We normally abbreviate `request` to `req` and `response` to `res`.
app.get('/', (req, res) => {
    // do something here, eg. simply res.send('Hello World')
    //below you send the html file found in the directory listed
    res.sendFile(__dirname + "/index.html")
  })

//use the url to obtain the quote. Will change to input. Will need to consider spaces
app.get('/api/:quote', (req, res)=> {
    const quote = req.params.quote
    console.log(quote)
})