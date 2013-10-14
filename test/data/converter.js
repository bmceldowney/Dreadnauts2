var converter = require('../../app/data/converter');
var should = require('should');

describe('Data Converter', function(){
    it("should convert an array of arrays into Javascript objects given a header array", function () {
        var arrays = [['id','name','age'],[0,'bert',40],[1,'ernie',34]];
        var value = converter.buildDataArray(arrays);
        
        value[0].should.have.property('name', 'bert');
        value[1].should.have.property('age', 34);
    });
})
