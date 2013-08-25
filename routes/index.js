
/*
 * GET home page.
 */

var mjson = require('mjson');
var jsonlint = require('jsonlint');

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
                    errorMessage = err.stack.split('\n');
                    locals.error = errorMessage.slice(0, 4).join('<br />');
                    locals.output = json;
                    //locals.error = e.stack;
                }
            }
        }
        //console.log(locals);
        res.render('index', locals);
    }
};

exports.index = methods;
