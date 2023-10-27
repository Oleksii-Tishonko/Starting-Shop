const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const express = require('express');
const { debug } = require("console");

const app = express();

app.use(bodyParser.json()); // Parse JSON request body
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });
// app.options("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://example.com");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.sendStatus(204);
// });

app.post('/counter', async (req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type", "Origin", "Authorization");
    const receivedData = req.body; // This will contain the JSON data sent from the client
    const counters = receivedData.counters;
    
    console.log("got a POST request, got data: " + counters);
    
    writeData({counters: JSON.stringify(counters)});

    res.status(201).json({
    status: 'success',
    data:{
        counters: req.body,
    },
  })
})

app.get('/counter', (req, res) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    // res.setHeader("Access-Control-Allow-Headers", "Content-Type", "Origin", "Authorization");


    const counters = readData();

    console.log("got a GET request, sent data: " + JSON.stringify(counters));
    res.status(200).json({
    status: 'success',
    data:{
        counters,
    }
  })
});

app.all('*', (req, res) =>{
    res.status(404).json({
        status: 'failed',
        message: "Can't route this request.",
    })
})

// res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       results: tours.length,
//       data: {
//         tours,
//       },
//     });

// app.post('/counter', (req, res) => {
//   res.send('POST request to the homepage');
// });



app.listen(3005, () =>{
    console.log('Database connected!');
});

// http.createServer(function(req, res){
//     console.log(req);
//     res.write("Hi, there!");
//     res.end();
// }).listen(3005);

function readData(){
    return JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));
}

function writeData(data){
    console.log(data);

    fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(data));
}