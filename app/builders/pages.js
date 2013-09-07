var Page = require('../models/page');

module.exports = exports = {

    build: function(key, html) {
        var result = new Page({ key: parseInt(key), html: html });
        return result;
    }
}
