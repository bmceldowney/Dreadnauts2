var records;
exports.buildDataArray = function (data){
    records = [];
    var header = data.shift(); // grab the header row
    data.forEach(buildDataItem(header));
    
    return records;
}

function buildDataItem(header){
    return function(item){
        var record = {};
        
        for(var i = 0, length = header.length; i < header.length; i++){
            record[header[i]] = item[i];
        }
        
        records.push(record);
    }
}
