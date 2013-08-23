
/*
 * GET home page.
 */

var mjson = require('mjson');

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
        if (!json) {
            locals.error = 'unset json string.';
        }
        try {
            locals.output = JSON.stringify(JSON.parse(JSON.minify(json)), null, '    ');
            //console.log(locals.output);
            locals.success = 'validate [ OK ].';
        } catch (e) {
            locals.error = e.stack.split('\n')[0];
            locals.output = json;
            //locals.error = e.stack;
        }
        //console.log(locals);
        res.render('index', locals);
    }
}

exports.index = methods;
