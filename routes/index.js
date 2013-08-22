
/*
 * GET home page.
 */

exports.index = function (req, res) {
    var locals = {
        title: 'mjson web service'
    };
    res.render('index', locals);
};
