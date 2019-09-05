/*!
 * name: next-ec-legend-height
 * url: https://github.com/afeiship/next-ec-legend-height
 * version: 1.0.0
 * date: 2019-09-05T08:19:13.981Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_OPTIONS = { callback: nx.noop, canvas: null, legends: [] };
  var nxMeasureText = nx.measureText || require('next-measure-text');
  var nxGroupByLimit = nx.groupByLimit || require('next-group-by-limit');

  nx.ecLegendHeight = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var legends = options.legends;
    var legendItems = legends.map(function(item) {
      var mt = nxMeasureText({
        canvas: options.canvas,
        callback: options.callback,
        text: item.name
      });
      return options.itemWidth + mt.width;
    });
    var groups = nxGroupByLimit(legendItems, options.limit);
    var len = groups.length;
    return options.lineHeight * len + 10 * (len - 1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.ecLegendHeight;
  }
})();

//# sourceMappingURL=next-ec-legend-height.js.map
