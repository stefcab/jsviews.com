﻿/*! Sample JsViews tag control: {{tabs}} control v0.9.84 (Beta)
see: http://www.jsviews.com/#download/sample-tagcontrols */
/*
 * Copyright 2017, Boris Moore
 * Released under the MIT License.
 */

(function($) {
"use strict";

$.views.tags({
  tabs: {
    init: function(tagCtx) {
      this.selectedIndex = tagCtx.props.selectedIndex || 0;
      this.tabCount = this.tagCtxs.length;
    },
    render: function() {
      var tagCtx = this.tagCtx;
      return this.selectedIndex === tagCtx.index ? tagCtx.render() : "";
    },
    onBind: function() {
      var self = this;
      self.contents(true, ".tabstrip").first()
        .on("click", ".header_false", function() {
          self.setTab($.view(this).index);
        });
    },
    template: '<table class="tabsview"><tbody>' +
      '<tr class="tabstrip">' +
      '{{for ~tag.tagCtxs}}' +
        '<th data-link="class{:\'header_\' + (#index === ~tag.selectedIndex)}">' +
          '{{>props.tabCaption}}' +
        '</th>' +
      '{{/for}}' +
    '</tr>' +
    '<tr class="tabscontent">' +
      '<td colspan="{{:~tag.tagCtxs.length}}">' +
        '<div style="width:{{attr:~tag.tagCtxs[0].props.width}};' +
                    'height:{{attr:~tag.tagCtxs[0].props.height}}">' +
          '{^{for ^tmpl=~tag.tagCtxs[~tag.selectedIndex].tmpl /}}' +
        '</div>' +
        '</td>' +
      '</tr>' +
    '</tbody></table>',

    //METHODS
    setTab: function(index) {
      $.observable(this).setProperty("selectedIndex", index);
      if (this.onSelectionChange) {
        this.onSelectionChange(index, this);
      }
    },
    dataBoundOnly: true
  }
});

})(this.jQuery);

