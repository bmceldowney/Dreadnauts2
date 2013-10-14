var csv = require('csv');
var request = require('request');
var converter = require('./converter');

getData();
setInterval(getData, (1000 * 60) * 5);

function getData(){
    request.get('http://db.chezalex.net/dbdatabase.csv', dataRetrieved);
}

function dataRetrieved(error, response, body) {
    if (!error && response.statusCode == 200) {
        csv().from.string(body).to.array(convert);
        
        console.log('data fetched at ' + Date(Date.now()).toString());
    }
}

function convert(data){
    exports.data = converter.buildDataArray(data);
}