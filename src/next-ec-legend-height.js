(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxMeasureText = nx.measureText || require('next-measure-text');
  var nxGroupByLimit = nx.groupByLimit || require('next-group-by-limit');
  var DEFAULT_OPTIONS = {
    callback: nx.noop,
    canvas: null,
    legends: [],
    lineHeight: 20,
    limitWidth: 500,
    itemWidth: 25,
    itemGap: 0
  };

  nx.ecLegendHeight = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var legends = options.legends;
    var legendItems = legends.map(function(item) {
      var mt = nxMeasureText({
        canvas: options.canvas,
        callback: options.callback,
        text: item.name
      });
      return options.itemWidth + options.itemGap + mt.width;
    });
    var groups = nxGroupByLimit(legendItems, options.limitWidth);
    var len = groups.length;
    return options.lineHeight * len + 10 * (len - 1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.ecLegendHeight;
  }
})();
