
/*
 * GET home page.
 */

var mjson = require('mjson');
var jsonlint = require('jsonlint');
var sh = require('node-syntaxhighlighter');
var lang = sh.getLanguage('json');

var methods =  {
    get: function (req, res) {
        var locals = {
            title: 'mjson web service'
        };
        res.render('index', locals);
    },
    post: function (req, res) {
        var locals = {
            title: 'mjson web service'
        };

        var json = req.body.json;
        var errorMessage;

        if (!json) {
            locals.error = 'unset json string.';
        } else {
            try {
                locals.output = JSON.stringify(JSON.parse(JSON.minify(json)), null, '    ');
                //console.log(locals.output);
                locals.success = 'validate [ OK ].';
            } catch (e) {
                try {
                    jsonlint.parse(json);
                } catch (err) {
                    locals.output = json;
                    errorMessage = err.stack.split('\n');
                    locals.error = errorMessage.slice(0, 4).join('<br />');
                    locals.error += sh.highlight(locals.output, lang);
                    //locals.error = e.stack;
                }
            }
        }
        // console.log(locals);
        res.render('index', locals);
    }
};

exports.index = methods;
