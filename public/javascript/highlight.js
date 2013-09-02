(function () {
    var getErrorLine = function getErrorLine($line) {
        var reg = /[0-9]+/;

        return reg.exec($line.text().split('\n')[0]);
    };

    var addHighlight = function addHighlight(errorLine) {
        var $targetGutter = $('.line.number' + errorLine);

        $targetGutter.each(function (i) {
            $(this).attr('id', 'highlight' + i);
        });
    };

    this.mjson = this.mjson || {};
    this.mjson = {
        getErrorLine: getErrorLine,
        addHighlight: addHighlight,
    };

}).call(this);

$(function () {
    var mjson = window.mjson;

    if ($('p:nth-child(3)')) {
        mjson.addHighlight(
            mjson.getErrorLine($('p:nth-child(3)'))
        );
    }
});

