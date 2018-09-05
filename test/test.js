var template = require('../index');

var html = template(__dirname + '/sn_test/index/index.art', {
    title:'123',
    hbshead1:"23"
});

console.log(html);