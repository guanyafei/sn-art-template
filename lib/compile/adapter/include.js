'use strict';

/**
 * 载入子模板
 * @param   {string}    filename
 * @param   {Object}    data
 * @param   {Object}    blocks
 * @param   {Object}    options
 * @return  {string}
 */

const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

var include = function include(filename, data, blocks, options) {
    if (data.ispage){
        var filename = options.resolveFilename(filename, options);
        //TODO: 判断文件存在， 判断handlebars的入参
        var tpl = fs.readFileSync(filename, 'utf8');
        return tpl;
    }
    var ext = path.extname(filename).toLocaleLowerCase();
    if (ext === ".hbs") {

        var filename = options.resolveFilename(filename, options);
        //TODO: 判断文件存在， 判断handlebars的入参
        var tpl = fs.readFileSync(filename, 'utf8');

        let localHelpers = options.hbsHelper;
        if (localHelpers && typeof(localHelpers)=='object'){
          for (const key of Object.keys(localHelpers)) {
            handlebars.registerHelper(key, localHelpers[key]);
          }
        }
        return handlebars.compile(tpl)(data);
    } else {
        var compile = require('../index');
        options = options.$extend({
            filename: options.resolveFilename(filename, options),
            bail: true,
            source: null
        });
        return compile(options)(data, blocks);
    }
};

module.exports = include;