﻿/*
 * Sample JsViews tag control: {{range}} control
 * http://www.jsviews.com/download/sample-tag-controls/range/range.js
 * Used in samples:
 * http://www.jsviews.com/#samples/tag-controls/range
 * http://www.jsviews.com/#samples/jsr/tags/extend-for
 * Copyright 2016, Boris Moore
 * Released under the MIT License.
 */

(function($) {
"use strict";

// An extended {{for}} tag: {{range}} inherits from {{for}}, and adds
// support for iterating over a range (start to end) of items within an array,
// or for iterating directly over integers from start integer to end integer

$.views.tags({
  range: {
    // Inherit from {{for}} tag
    baseTag: "for",

    // Override the render method of {{for}}
    render: function(val) {
      var array = val,
        tagCtx = this.tagCtx,
        start = tagCtx.props.start || 0,
        end = tagCtx.props.end,
        props = tagCtx.params.props;

      if (start || end) {
        if (!tagCtx.args.length) { // No array argument passed from tag, so create
                                        // a computed array of integers from start to end

          array = [];
          end = end || 0;
          for (var i = start; i <= end; i++) {
            array.push(i);
          }
        } else if ($.isArray(array)) { // There is an array argument and start and end
                 // properties,so render using the array truncated to the chosen range
          array = array.slice(start, end);
        }
      }

      // Call the {{for}} baseTag render method
      return arguments.length || props && (props.start || props.end)
        ? this.base(array)
        : this.base(); // Final {{else}} tag, so call base() without arguments, for
                       // final {{else}} of base {{for}} tag
    },

    // override onArrayChange of the {{for}} tag implementation
    onArrayChange: function(ev, eventArgs) {
      this.refresh();
    }
  }
});

})(this.jQuery);
