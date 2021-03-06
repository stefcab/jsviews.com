﻿var content = $.views.documentation.content;

content.jsoapi = content.useStorage && $.parseJSON(localStorage.getItem("JsViewsDocTopics/jsoapi")) ||
{
  "jsoapi": {
    "title": "Observing data changes: JsObservable",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "For an introductory overview see the [*Making observable changes*](#jsv-quickstart@observe-chg) and [*Responding to changes*](#jsv-quickstart@observe) sections in [*JsViews Quickstart*](#jsv-quickstart@observe)."
      },
      {
        "_type": "links",
        "title": "Modifying data:",
        "links": [],
        "topics": [
          {
            "hash": "$observable",
            "label": "Observable objects and arrays"
          },
          {
            "hash": "propchange",
            "label": "Modify an object observably"
          },
          {
            "hash": "arrchange",
            "label": "Modify an array observably"
          }
        ]
      },
      {
        "_type": "links",
        "title": "Responding to changes in data:",
        "links": [],
        "topics": [
          {
            "hash": "observeobjectsarrays",
            "label": "Respond to data changes"
          }
        ]
      },
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "computed",
            "label": "Computed observables"
          }
        ]
      }
    ]
  },
  "propchange": {
    "title": "Modify an object observably",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Use `$.observable(myObject)` to obtain an *observable object* -- which provides a *setProperty* method and a *removeProperty* method for making *observable changes* to the object:\n\n"
      },
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "setprop",
            "label": "$.observable(object).setProperty()"
          },
          {
            "hash": "removeprop",
            "label": "$.observable(obj).removeProperty()"
          }
        ]
      },
      {
        "_type": "para",
        "title": "",
        "text": "(See also: *[Observable objects and arrays](#$observable)*)"
      }
    ]
  },
  "setprop": {
    "title": "Making observable changes: $.observable(object).setProperty()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Modifying properties of an object, observably:",
        "text": "If you pass an object to <a href=\"#$observable\">`$.observable()`</a>, you obtain an <em>observable</em> object (a very lightweight wrapper around your object) which provides a `setProperty()` method.\n\nCall the `setProperty()` method to make one or more observable changes to properties on your object (or on the nested objects in the 'object graph' below it...):\n\n```js\n$.observable(person).setProperty(\"address.street\", \"Main St\");\n```"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observable(myObject).setProperty(path, value)",
        "name": "setProperty",
        "object": "$.observable(object)",
        "method": true,
        "returns": "this",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "path",
                "type": "string",
                "optional": false,
                "description": "Path (e.g. \"address.street\") or name (e.g. \"firstName\") for the property"
              },
              {
                "_type": "param",
                "name": "value",
                "type": "any",
                "optional": false,
                "description": "Modified value"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observable(book).setProperty(\"title\", \"Hope\");",
            "description": "Modify the value of an object property"
          }
        ],
        "description": "Make an observable change to an object property",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Sample: Observable property change, with data-bound template:",
        "text": "Here is a sample, using a <a href=\"#linked-tag-syntax\">data-linked template</a> to respond to the observable property changes."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "Street: {^{:address.street}}\")"
          },
          {
            "_type": "code",
            "title": "Modify the value of a property on a chosen path:",
            "code": "$.observable(person).setProperty(\"address.street\", \"Main St\");\n"
          }
        ],
        "code": "var person = {\n  address: {\n    street: \"1st Ave\"\n  }\n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty(\"address.street\", \"Main St\");\n});\n\n$(\"#revert\").on(\"click\", function() {\n  $.observable(person).setProperty(\"address.street\", \"1st Ave\");\n});\n\nvar tmpl = $.templates(\"Street: {^{:address.street}}\");\n\ntmpl.link(\"#result\", person);\n",
        "html": "<button id=\"modify\">set to new value</button>\n<button id=\"revert\">set back to original value</button>\n\n<p id=\"result\"><p>",
        "height": "90",
        "title": ""
      },
      {
        "_type": "para",
        "title": "Sample: Observable property change, with onPropertyChange handler",
        "text": "And here is a sample, using an event handler for <a href=\"#onpropchange\">propertyChange</a> to respond to the observable property changes."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$(person.address).on(\"propertyChange\", changeHandler); "
          },
          {
            "_type": "code",
            "title": "Modify the value of a property on a chosen path:",
            "code": "$.observable(person).setProperty(\"address.street\", \"1st Ave\");\n"
          }
        ],
        "code": "var person = {\n  address: {\n    street: \"1st Ave\"\n  }\n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty(\"address.street\", \"Main St\");\n});\n\n$(\"#revert\").on(\"click\", function() {\n  $.observable(person).setProperty(\"address.street\", \"1st Ave\");\n});\n\n$(person.address).on(\"propertyChange\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"The '\" + eventArgs.path + \"' is '\" + eventArgs.value + \"'.\";\n  $(\"#messages\").append(message + \"<br/>\");\n}",
        "html": "<button id=\"modify\">set to new value</button>\n<button id=\"revert\">set back to original value</button>\n\n<p id=\"messages\"><p>",
        "title": "",
        "height": "110"
      },
      {
        "_type": "para",
        "title": "Sample: Observable property change, with $.observe(...)",
        "text": "This sample uses <a href=\"#observe\">$.observe()</a> to listen to the observable property changes."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.observe(person, \"address.street\", changeHandler);"
          },
          {
            "_type": "code",
            "title": "Modify the value of a property on a chosen path:",
            "code": "$.observable(person).setProperty(\"address.street\", \"Main St\");"
          }
        ],
        "code": "var person = {\n  address: {\n    street: \"1st Ave\"\n  }\n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty(\"address.street\", \"Main St\");\n});\n\n$(\"#revert\").on(\"click\", function() {\n  $.observable(person).setProperty(\"address.street\", \"1st Ave\");\n});\n\n$.observe(person, \"address.street\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"The '\" + eventArgs.path + \"' is '\" + eventArgs.value + \"'.\";\n  if (ev.data) {\n    message += \"\\n\\nThe full path is '\" + ev.data.fullPath + \"'.\";\n  }\n  $(\"#messages\").append(message + \"<br/>\");\n}",
        "html": "<button id=\"modify\">set to new value</button>\n<button id=\"revert\">set back to original value</button>\n\n<p id=\"messages\"><p>",
        "height": "110",
        "title": ""
      },
      {
        "_type": "para",
        "title": "",
        "text": "<hr/>"
      },
      {
        "_type": "para",
        "title": "API: Changing multiple properties in one call:",
        "text": "You can make observable changes to one or more properties in one call to `setProperty()` as follows:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observable(myObject).setProperty({prop1: ..., prop2: ..., ...})",
        "name": "setProperty",
        "object": "$.observable(object)",
        "method": true,
        "returns": "this",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "newValues",
                "type": "object",
                "optional": false,
                "description": "Path-value pairs for modified properties, e.g. {name: \"newName\", \"address.street\": \"newStreet\"}"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observable(person).setProperty(newValues);",
            "description": "Modify the values of  one or more object properties"
          }
        ],
        "description": "",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Sample: Changing multiple properties in one call:",
        "text": "In this sample we make changes to properties on two different objects, with a single call to `setProperty()`.\n\nWe register a single listener for the observable property changes on both objects -- with one call to <a href=\"#observe\">`$.observe()`</a>."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "Modify two properties, on different paths:",
            "code": "$.observable(person).setProperty(\n  {\n    name: \"Hermione\",\n    \"address.street\": \"Main St\"\n  }\n);"
          },
          {
            "_type": "code",
            "title": "Observe both changes with a single $.observe() handler:",
            "code": "$.observe(person, \"name\", \"address.street\", changeHandler); "
          }
        ],
        "code": "var person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\"\n  }\n};\n\n$(\"#modify\").on(\"click\", function() {\n\n  $.observable(person).setProperty(\n    {\n      name: \"Hermione\",\n      \"address.street\": \"Main St\"\n    }\n  );\n\n});\n\n$(\"#revert\").on(\"click\", function() {\n\n  $.observable(person).setProperty(\n    {\n      name: \"Pete\",\n      \"address.street\": \"1st Ave.\"\n    }\n  );\n\n});\n\n$.observe(person, \"name\", \"address.street\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"The '\" + eventArgs.path + \"' is '\" + eventArgs.value + \"'.\";\n  if (ev.data) {\n    message += \"\\n\\nThe full path is '\" + ev.data.fullPath + \"'.\";\n  }\n  $(\"#messages\").append(message + \"<br/>\");\n}",
        "html": "<button id=\"modify\">Set new values</button>\n<button id=\"revert\">Return to original values</button>\n\n<p id=\"messages\"><p>",
        "title": "",
        "height": "150"
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "removeprop",
            "label": "$.observable(object).removeProperty()"
          }
        ]
      }
    ]
  },
  "arrchange": {
    "title": "Modify an array observably",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Use `$.observable(myArray)` to obtain an <em>observable array</em> -- which provides methods for making <em>observable changes</em> to the array:"
      },
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "insert",
            "label": "$.observable(array).insert()"
          },
          {
            "hash": "remove",
            "label": "$.observable(array).remove()"
          },
          {
            "hash": "move",
            "label": "$.observable(array).move()"
          },
          {
            "hash": "refresh",
            "label": "$.observable(array).refresh()"
          }
        ]
      },
      {
        "_type": "para",
        "title": "",
        "text": "(See also: *[Observable objects and arrays](#$observable)*)\n"
      }
    ]
  },
  "insert": {
    "title": "Making observable changes: $.observable(array).insert()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Changing an array observably: inserting items",
        "text": "If you pass an array to <a href=\"#$observable\">`$.observable()`</a>, you obtain an <em>observable</em> array (a very lightweight wrapper around your array) which provides methods for modifying the array <em>observably</em>, including an <b>`insert()`</b> method:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observable(myArray).insert(index, insertedItems)",
        "name": "insert",
        "object": "$.observable(array)",
        "method": true,
        "returns": "this",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "index",
                "type": "integer",
                "optional": true,
                "description": "Optional index at which insertion will begin. If not specified, items are appended."
              },
              {
                "_type": "param",
                "name": "insertedItems",
                "type": "any",
                "optional": false,
                "description": "item, or array of items, to be inserted"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observable(people).insert(3, insertedItems);",
            "description": "Observably append or insert an item, or set of items"
          }
        ],
        "description": "Insert or append one or more items to an array",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Sample: Appending to an array:",
        "text": "Here is a sample using `insert()` to append an item to an array.\n\nA <a href=\"#linked-tag-syntax\">data-linked template</a> responds to the observable array changes."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "var tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);"
          },
          {
            "_type": "code",
            "title": "Append an item:",
            "code": "$.observable(things).insert(\n  {id: \"item\" + count++}\n);"
          }
        ],
        "code": "var things = [{id: \"item1\"}, {id: \"item2\"}],\n  count = 3;\n\n$(\"#append\").on(\"click\", function() {\n  $.observable(things).insert(\n    {id: \"item\" + count++}\n  );\n});\n\n$(\"#insert2\").on(\"click\", function() {\n  $.observable(things).insert(\n    [\n      {id: \"item\" + count++},\n      {id: \"item\" + count++}\n    ]\n  );\n});\n\nvar tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);",
        "html": "<div class=\"left\">\n  <button id=\"append\">Append an item</button>\n  <div id=\"result\"></div>\n</div>",
        "height": "150",
        "title": ""
      },
      {
        "_type": "para",
        "title": "Sample: Append one or more items",
        "text": "Here we'll add an event handler for <a href=\"#onarrchange\">arrayChange</a> to respond to the observable array changes, in addition to the template:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$([things]).on(\"arrayChange\", changeHandler);"
          },
          {
            "_type": "code",
            "title": "Append two items:",
            "code": "$.observable(things).insert(\n  [\n    {id: \"item\" + count++},\n    {id: \"item\" + count++}\n  ]\n);"
          }
        ],
        "code": "var things = [{id: \"item1\"}, {id: \"item2\"}],\n  count = 3;\n\n$(\"#append1\").on(\"click\", function() {\n  $.observable(things).insert(\n    {id: \"item\" + count++}\n  );\n});\n\n$(\"#append2\").on(\"click\", function() {\n  $.observable(things).insert(\n    [\n      {id: \"item\" + count++},\n      {id: \"item\" + count++}\n    ]\n  );\n});\n\nvar tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);\n\n$([things]).on(\"arrayChange\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = eventArgs.items.length + \" item(s) added at index: \" + eventArgs.index;\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"append1\">Append an item</button>\n  <button id=\"append2\">Append two items</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Changes:</label>\n  <div class=\"messages\"></div>\n</div>",
        "height": "150",
        "title": ""
      },
      {
        "_type": "para",
        "title": "Sample: Inserting items at a chosen index",
        "text": "Here we modify the sample above, by specifying the index where we want to insert, rather than simply appending. We'll also show the alternative <a href=\"#observe\">`$.observe()`</a> API for attaching our handler:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.observe(things, changeHandler);"
          },
          {
            "_type": "code",
            "title": "Insert a set of items at a chosen index:",
            "code": "$.observable(things).insert(\n  index,\n  items\n);"
          }
        ],
        "code": "var things = [{id: \"item1\"}, {id: \"item2\"}],\n  count = 3;\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(things).insert(\n    1,\n    {id: \"item\" + count++}\n  );\n});\n\n$(\"#prepend\").on(\"click\", function() {\n  $.observable(things).insert(\n    0,\n    [\n      {id: \"item\" + count++},\n      {id: \"item\" + count++}\n    ]\n  );\n});\n\nvar tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);\n\n$.observe(things, changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = eventArgs.items.length + \" item(s) added at index: \" + eventArgs.index;\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"insert\">Insert item at index 1</button>\n  <button id=\"prepend\">Prepend 2 items</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Changes:</label>\n  <div class=\"messages\"></div>\n</div>",
        "height": "150",
        "title": ""
      }
    ]
  },
  "remove": {
    "title": "Making observable changes: $.observable(array).remove()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Changing an array observably: removing items",
        "text": "If you pass an array to <a href=\"#$observable\">`$.observable()`</a>, you obtain an <em>observable</em> array (a very lightweight wrapper around your array) which provides methods for modifying the array <em>observably</em>, including a <b>`remove()`</b> method:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observable(myArray).remove(index, numToRemove)",
        "name": "remove",
        "object": "$.observable(array)",
        "method": true,
        "returns": "this",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "index",
                "type": "integer",
                "optional": true,
                "description": "Optional index at which removal will begin. If not specified, items are removed from the end of the array."
              },
              {
                "_type": "param",
                "name": "numToRemove",
                "type": "integer",
                "optional": true,
                "description": "Number of items to be removed. If not specified, one item is removed."
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observable(people).remove(3, 2);",
            "description": "Observably remove one or more items from an array"
          }
        ],
        "description": "Remove one or more items from an array",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Sample: Removing the last item in the array",
        "text": "Here is a sample using `remove()` to remove the last item to an array.\n\nA <a href=\"#linked-tag-syntax\">data-linked template</a> responds to the observable array changes."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "var tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);"
          },
          {
            "_type": "code",
            "title": "Remove the last item:",
            "code": "$.observable(things).remove();"
          }
        ],
        "code": "var things = [\n  {id: \"item1\"},\n  {id: \"item2\"},\n  {id: \"item3\"}\n];\n\n$(\"#remove\").on(\"click\", function() {\n  $.observable(things).remove();\n});\n\nvar tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);",
        "html": "<div class=\"left\">\n  <button id=\"remove\">Remove last item</button>\n  <div id=\"result\"></div>\n</div>",
        "height": "135",
        "title": ""
      },
      {
        "_type": "para",
        "title": "Sample: Removing an item at a specified index:",
        "text": "Here we'll add an event handler for <a href=\"#onarrchange\">arrayChange</a> to respond to the observable array changes, in addition to the template:\n\nAnd we'll remove an item at a specified index."
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$([things]).on(\"arrayChange\", changeHandler);"
          },
          {
            "_type": "code",
            "title": "Remove item at index 0 or index 1:",
            "code": "$.observable(things).remove(0);\n...\n$.observable(things).remove(1);\n"
          }
        ],
        "code": "var things = [\n  {id: \"item1\"},\n  {id: \"item2\"},\n  {id: \"item3\"}\n];\n\n$(\"#remove0\").on(\"click\", function() {\n  $.observable(things).remove(0);\n});\n\n$(\"#remove1\").on(\"click\", function() {\n  $.observable(things).remove(1);\n});\n\nvar tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);\n\n$([things]).on(\"arrayChange\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = eventArgs.items.length + \" item(s) removed at index: \" + eventArgs.index;\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"remove0\">Remove item 0</button>\n  <button id=\"remove1\">Remove item 1</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Changes:</label>\n  <div class=\"messages\"></div>\n</div>",
        "height": "135",
        "title": "Observable array change &ndash; remove item at chosen index"
      },
      {
        "_type": "para",
        "title": "Sample: Removing one or more items at a chosen index",
        "text": "Here we modify the sample above, by specifying the number of items to remove. We'll also show the alternative <a href=\"#observe\">`$.observe()`</a> API for attaching our handler:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$.observe(things, changeHandler);"
          },
          {
            "_type": "code",
            "title": "Remove two items at index 0:",
            "code": "$.observable(things).remove(0, 2);\n"
          }
        ],
        "code": "var things = [\n  {id: \"item1\"},\n  {id: \"item2\"},\n  {id: \"item3\"},\n  {id: \"item4\"}\n];\n\n$(\"#remove0\").on(\"click\", function() {\n  $.observable(things).remove(0, 2);\n});\n\n$(\"#remove1\").on(\"click\", function() {\n  $.observable(things).remove(1);\n});\n\nvar tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);\n\n$.observe(things, changeHandler);\n\nfunction changeHandler(ev, eventArgs) {\n  var message = eventArgs.items.length + \" item(s) removed at index: \" + eventArgs.index;\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"remove0\">Remove 2 items at 0</button>\n  <button id=\"remove1\">Remove item 1</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Changes:</label>\n  <div class=\"messages\"></div>\n</div>",
        "height": "150",
        "title": ""
      }
    ]
  },
  "refresh": {
    "title": "Making observable changes: $.observable(array).refresh()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Changing an array observably: replacing all the items",
        "text": "If you pass an array to <a href=\"#$observable\">`$.observable()`</a>, you obtain an <em>observable</em> array (a very lightweight wrapper around your array) which provides methods for modifying the array <em>observably</em>, including a <b>`refresh()`</b> method:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observable(myArray).refresh(newItems)",
        "name": "refresh",
        "object": "$.observable(array)",
        "method": true,
        "returns": "this",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "index",
                "type": "array",
                "optional": false,
                "description": "Array containing the new set of items"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observable(people).refresh(newItems);",
            "description": "Observably refresh the contents of an array"
          }
        ],
        "description": "Refresh an array with a modified or sorted set of items",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Sample: Refreshing items in an array (replace or sort)",
        "text": "Here is a sample using `refresh()` to replace items within an array.\n\nA <a href=\"#linked-tag-syntax\">data-linked template</a> responds to the observable array changes. And we'll also add an event handler for <a href=\"#onarrchange\">arrayChange</a> to respond to the observable array changes:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$([things]).on(\"arrayChange\", changeHandler); "
          },
          {
            "_type": "code",
            "title": "Replacing with the same items in different order:",
            "code": "$.observable(things).refresh(\n  things.slice().reverse() // copy array and reverse it\n);"
          },
          {
            "_type": "code",
            "title": "Replacing with a different set of items",
            "code": "$.observable(things).refresh(\n  (things.length === 5 ? otherItems : items)\n);\n"
          }
        ],
        "code": "var items = [\n    {id: \"item0\"},\n    {id: \"item1\"},\n    {id: \"item2\"},\n    {id: \"item3\"},\n    {id: \"item4\"}\n  ],\n  otherItems = [\n    {id: \"otherItem0\"},\n    {id: \"otherItem1\"},\n    {id: \"otherItem2\"}\n  ],\n  things = [\n    items[0],\n    items[1],\n    items[2],\n    items[3],\n    items[4]\n  ];\n\n$(\"#sort\").on(\"click\", function() {\n  $.observable(things).refresh(\n    things.slice().reverse() // copy array and reverse it\n  );\n});\n\n$(\"#replace\").on(\"click\", function() {\n  $.observable(things).refresh(\n    (things.length === 5 ? otherItems : items)\n  );\n});\n\nvar tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);\n\n$([things]).on(\"arrayChange\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  if (eventArgs.change === \"refresh\") {\n    var message = \"Previous length: \" + eventArgs.oldItems.length\n      + \". New length: \" + ev.target.length;\n\n    $(\".messages\").append(\"<div>\" + message + \"</div>\");\n  }\n}\n",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"sort\">Reverse sort the items</button><br/>\n  <button id=\"replace\">Replace the items</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Changes:</label>\n  <div class=\"messages\"></div>\n</div>",
        "height": "200",
        "title": ""
      }
    ]
  },
  "move": {
    "title": "Making observable changes: $.observable(array).move()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "Changing an array observably: moving items",
        "text": "If you pass an array to <a href=\"#$observable\">`$.observable()`</a>, you obtain an <em>observable</em> array (a very lightweight wrapper around your array) which provides methods for modifying the array <em>observably</em>, including a <b>`move()`</b> method:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observable(myArray).move(oldIndex, newIndex, numToMove)",
        "name": "move",
        "object": "$.observable(array)",
        "method": true,
        "returns": "this",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "oldIndex",
                "type": "integer",
                "optional": false,
                "description": "Optional index at which insertion will begin. If not specified, items are appended."
              },
              {
                "_type": "param",
                "name": "newIndex",
                "type": "integer",
                "optional": false,
                "description": "item, or array of items, to be inserted"
              },
              {
                "_type": "param",
                "name": "numToMove",
                "type": "integer",
                "optional": true,
                "description": ""
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observable(people).move(3, 5, 2);",
            "description": "Observably move an item, or sequence of items, in an array."
          }
        ],
        "description": "Move one or more items in an array",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Sample: Moving items in an array",
        "text": "Here is a sample using `move()` to move items within an array.\n\nA <a href=\"#linked-tag-syntax\">data-linked template</a> responds to the observable array changes. And we'll also add an event handler for <a href=\"#onarrchange\">arrayChange</a> to respond to the observable array changes:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "",
            "code": "$([things]).on(\"arrayChange\", changeHandler); "
          },
          {
            "_type": "code",
            "title": "Moving one item from index 2 to index 0:",
            "code": "$.observable(things).move(2, 0);"
          },
          {
            "_type": "code",
            "title": "Moving two items from index 0 to index 1:",
            "code": "$.observable(things).move(0, 1, 2);"
          }
        ],
        "code": "var things = [\n  {id: \"item0\"},\n  {id: \"item1\"},\n  {id: \"item2\"},\n  {id: \"item3\"},\n  {id: \"item4\"}\n];\n\n$(\"#move1\").on(\"click\", function() {\n  $.observable(things).move(2, 0);\n});\n\n$(\"#move2\").on(\"click\", function() {\n  $.observable(things).move(0, 3, 2);\n});\n\nvar tmpl = $.templates(\"id: {{:id}}<br/>\");\n\ntmpl.link(\"#result\", things);\n\n$([things]).on(\"arrayChange\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = eventArgs.items.length + \" item(s) moved from index: \"\n  + eventArgs.oldIndex + \" to index: \" + eventArgs.index;\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"move1\">Move 1 item from index 2 to 0</button><br/>\n  <button id=\"move2\">Move 2 items from index 0 to 3</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Changes:</label>\n  <div class=\"messages\"></div>\n</div>",
        "height": "200",
        "title": ""
      }
    ]
  },
  "observeobjectsarrays": {
    "title": "Respond to data changes",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The following API topics provide ways of attaching/removing event handlers to respond to observable data changes:"
      },
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "onpropchange",
            "label": "onPropertyChange"
          },
          {
            "hash": "onarrchange",
            "label": "onArrayChange"
          },
          {
            "hash": "observe",
            "label": "$.observe()"
          },
          {
            "hash": "unobserve",
            "label": "$.unobserve()"
          },
          {
            "hash": "observeAll",
            "label": "$.observable().observeAll()"
          },
          {
            "hash": "unobserveAll",
            "label": "$.observable().unobserveAll()"
          },
          {
            "hash": "namespaces",
            "label": "namespaces (advanced)"
          }
        ]
      }
    ]
  },
  "onpropchange": {
    "title": "Event Handler: onPropertyChange",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews and JsObservable raise a jQuery event: <em>\"propertyChange\"</em>, whenever an object changes observably.\n\nTo handle the *propertyChange* changes you have two alternatives:\n- use jQuery `.on()` to attach an event handler to the object\n- use [`$.observe()`](#observe) or  [`.observeAll()`](#observeAll) to associate a handler with the object, or with a *[path](#paths)* including the object"
      },
      {
        "_type": "code",
        "title": "Using jQuery .on()",
        "code": "$(myObject).on(\"propertyChange\", myHandler);"
      },
      {
        "_type": "para",
        "title": "Using <a href=\"#observe\">$.observe()</a> or <a href=\"#observeAll\">.observeAll()</a>",
        "text": "```js\n$.observe(myObject, \"*\" , myHandler); \n// Choose path \"*\" to listen to changes on all properties of myObject \n```\n\nThis approach also brings some advantages if you want to listen to changes on more than one object or array, or if you want to listen to \"deep changes\" on a [path](#paths) -- i.e. changes not only on the leaf, but on objects higher up the path... \n\nAlternatively you can use:\n\n```js\n$.observable(myObject).observeAll(myHandler);\n// Listen to changes on all properties and nested properties of myObject at any depth\n```\n"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "function myHandler(ev, eventArgs) { ... }",
        "name": "myHandler",
        "object": "",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "ev",
                "type": "object",
                "optional": false,
                "description": "jQuery event object &ndash; see <a href=\"#onpropchange@args\">below</a>"
              },
              {
                "_type": "param",
                "name": "eventArgs",
                "type": "object",
                "optional": false,
                "description": "JsViews propertyChange event object &ndash; see <a href=\"#onpropchange@args\">below</a>"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$(person).on(\"propertyChange\", myHandler); ",
            "description": "Handler for JsViews observable property change events"
          }
        ],
        "description": "An event handler for propertyChange events",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Arguments of the propertyChange event handler",
        "text": "```js\nfunction changeHandler(ev, eventArgs) { ... }\n```\n\n**The first argument (`ev`) is the _jQuery event object_**\n\nThe properties include:\n\n- *target*: the object which changed\n- *namespace*: The `setProperty()` [namespace](#namespaces@handler)\n- *data*: *JsViews metadata*:\n\n-- where *`ev.data` JsViews metadata* corresponds to the `observe()` or `observeCall()` call, with properties that include:\n\n- *ns*: The handler [namespace](#namespaces@handler)\n- *fullPath*: the full path –- such as `\"team.manager.address.street\"`\n- *prop*: the property being changed -– such as `\"manager\"`\n- *paths*: array of 'ongoing' paths -- when doing 'deep' binding<br/>(So if this property is part of a deep path such as `\"team.manager^address.street\"`, and `manager` is being changed, the `paths` will include `[\"address^street\"]`)\n- *observeAll*: *access to additional metadata*\n\n-- where *`ev.data.observeAll`*, for `observeAll()` calls, provides methods:\n\n- _ev.data.observeAll.**path()**_: returns path to object being changed, e.g. `\"root.team\"` \n- _ev.data.observeAll.**parents()**_: returns 'parent objects' to object being changed, e.g. `[team, model]`\n\n**The second argument (`eventArgs`) is the _JsViews event object for property changes_**\n\nThe properties are:\n\n- *change*: the string `\"set\"`\n- *path*: e.g. '\"manager\"'\n- *value*: new value of property being set\n- *oldValue*: previous value of property",
        "anchor": "args"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "Add a handler for <b>propertyChange</b> events on the <b>person</b> object:",
            "text": "```js\n$(person).on(\"propertyChange\", changeHandler); \n```\n\n```js\nfunction changeHandler(ev, eventArgs) {\n  var message = \"The new '\" + eventArgs.path + \"' is '\" + eventArgs.value + \"'.\";\n  ...\n}\n```"
          }
        ],
        "code": "var person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\"\n  }\n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty(\n    {\n      name: \"Hermione\",\n      \"address.street\": \"Main St\"\n    }\n  );\n});\n\n$(\"#revert\").on(\"click\", function() {\n  $.observable(person).setProperty(\n    {\n      name: \"Pete\",\n      \"address.street\": \"1st Ave.\"\n    }\n  );\n});\n\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\nvar tmpl = $.templates(\n   \"Name: <input data-link=\\\"name\\\" /><br/>\"\n + \"Street: <input data-link=\\\"address.street\\\" />\"\n);\n\ntmpl.link(\"#result\", person);\n\n$(person).on(\"propertyChange\", changeHandler); \n\n$(person.address).on(\"propertyChange\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"The new '\" + eventArgs.path + \"' is '\"\n                  + eventArgs.value + \"'.\";\n\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"modify\">set to new values</button><br/>\n  <button id=\"revert\">set back to original values</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Change Log:</label>\n  <button class=\"clear\">Clear</button>\n  <div class=\"messages\"></div>\n</div>",
        "height": "200",
        "title": "Handling property change events"
      }
    ]
  },
  "onarrchange": {
    "title": "Event Handler: onArrayChange",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews and JsObservable raise a jQuery event: *\"arrayChange\"*, whenever an array changes observably.\n\nTo handle the *arrayChange* changes you have two alternatives:\n\n- use jQuery `.on()` to attach an event handler to the array\n- use [`$.observe()`](#observe) to associate a handler with the array, or with a *path* including the array\n"
      },
      {
        "_type": "para",
        "title": "Using jQuery .on()",
        "text": "```js\n$([myArray]).on(\"arrayChange\", myHandler);\n```\n\n(Note the syntax with the wrapped array: `$([myArray]).on();`. If you write `$(myArray).on();` you will be listening to each item in the array, not to the array itself)."
      },
      {
        "_type": "para",
        "title": "Using <a href=\"#observe\">$.observe()</a>",
        "text": "```js\n$.observe(myArray, myHandler); \n```\n\nThis approach also brings some advantages if you want to listen to changes on more than one object or array, or if you want to listen to \"deep changes\" on a path -- i.e. changes not only on the leaf, but on objects higher up the path..."
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "function myHandler(ev, eventArgs) { ... }",
        "name": "myHandler",
        "object": "",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "ev",
                "type": "object",
                "optional": false,
                "description": "jQuery event object &ndash; see <a href=\"#onarrchange@args\">below</a>"
              },
              {
                "_type": "param",
                "name": "eventArgs",
                "type": "object",
                "optional": false,
                "description": "JsViews arrayChange event object &ndash; see <a href=\"#onarrchange@args\">below</a>"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$([myArray]).on(\"arrayChange\", myHandler); ",
            "description": "Handler for JsViews observable array change events"
          }
        ],
        "description": "An event handler for arrayChange events",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Arguments of the arrayChange event handler",
        "text": "```js\nfunction changeHandler(ev, eventArgs) { ... }\n```\n\n**The first argument (`ev`) is the _jQuery event object_**\n\nThe properties include:\n\n- *target*: the object which changed\n- *namespace*: The `insert()`/`remove()`/`move()`/`refresh()` [namespace](#namespaces@handler)\n- *data*: *JsViews metadata*:\n\n-- where *`ev.data` JsViews metadata* corresponds to the `observe()` or `observeCall()` call, with properties that include:\n\n- *ns*: The handler [namespace](#namespaces@handler)\n- *observeAll*: *access to additional metadata*\n\n-- where *`ev.data.observeAll`*, for `observeAll()` calls, provides methods:\n\n- _ev.data.observeAll.path()_: returns path to object being changed - e.g. `\"root.team\"` \n- _ev.data.observeAll.parents()_: returns 'parent objects' to object being changed, e.g. `[team, model]`\n\n**The second argument (`eventArgs`) is the _JsViews event object for array changes_**\n\nThe properties are specific to the *'change'* type:\n\n- For insert(): *index* and *items*. (With *change*=`\"insert\"`)\n- For remove(): *index* and *numToRemove*. (With *change*=`\"remove\"`)\n- For move(): *oldIndex*, *index* and *items*. (With *change*=`\"move\"`)\n- For refresh(): *oldItem*. (With *change*=`\"refresh\"`)",
        "anchor": "args"
      },
      {
        "_type": "para",
        "title": "Samples for the <b>handling array change events</b>:",
        "text": "Each of the following API topics includes samples showing the *arrayChange* event handler for the corresponding type of array change:\n\n- [$.observable(array).insert()](#insert)\n- [$.observable(array).remove()](#remove)\n- [$.observable(array).move()](#move)\n- [$.observable(array).refresh()](#refresh)\n"
      }
    ]
  },
  "observe": {
    "title": "Observing data: $.observe()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Whenever objects or arrays are changed observably, JsViews raises the corresponding [propertyChange](#onpropchange) or [arrayChange](#onarrchange) jQuery event.\n\nData-linked templates respond to those events automatically, but if you want to run code in response to data-change events you have two alternatives:\n\n- use jQuery `.on()` to attach the [propertyChange](#onpropchange) or [arrayChange](#onarrchange) event handler to any object or array you want to 'listen to'\n- use `$.observe()` to associate a handler with one or more objects, arrays, or *paths*\n"
      },
      {
        "_type": "para",
        "title": "Using $.observe()",
        "text": "```js\n$.observe(myObjectOrArray, ..., myHandler);\n```\n\nThis approach allows you to register a single handler to listen to changes on multiple targets, which can include both objects and arrays."
      },
      {
        "_type": "para",
        "title": "Examples:",
        "text": "1\\. Observe changes to a specific property:\n\n```js\n$.observe(person, \"firstName\", myHandler);\n```\n\n2\\. Observe changes to a specific property <em>of type array</em>:\n\n```js\n$.observe(person, \"phones\", myHandler);\n```\n\nHere <em>myHandler</em> will handle both:\n<ul>\n<li>array changes, and</li> \n<li>setting a new value to the property (switching to a new array, or setting to null or undefined)</li>\n</ul>\n\n3\\. Observe changes to <em>any</em> property on an object:\n\n```js\n$.observe(person, \"*\", myHandler);\n```\n\n(For properties of type array, such as `person.phones`, this will observe both setting/removing the array property, *and* array changes on that property)\n\n4\\. Observe changes on an array:\n\n```js\n$.observe(person.phones, myHandler); \n```\n\n5\\. Observe multiple objects/properties/arrays:\n\n```js\n$.observe(person, \"lastName\", \"phones\", \"address.street\", myHandler);\n```\n\nHere <em>myHandler</em> will handle both:\n<ul>\n<li>changes to <code>lastName</code></li> \n<li>array changes to the current <code>phones</code> (array), or changes if a new array is assigned to the <code>phones</code> property</li>\n<li>changes to the <code>street</code> property of the <code>address</code> property of <code>person</code></li>\n</ul>\n\n6\\. Observe paths under more than object:\n\n```js\n$.observe(person1, \"lastName\", \"address.*\", person2, \"firstName\", person3, \"*\", \"address.*\", myHandler);\n```\n\nHere <em>myHandler</em> handles:\n<ul>\n<li>for <code>person1</code>: changes to <code>lastName</code> and any <code>address</code> property</li> \n<li>for <code>person2</code>: changes to <code>firstName</code></li>\n<li>for <code>person3</code>: changes to any property of the <code>person3</code> object itself, and to any property of the <code>person3.address</code> object</li>\n</ul>\n",
        "anchor": "paths"
      },
      {
        "_type": "para",
        "title": "Chained paths: leaf changes or deep changes",
        "text": "By default you listen to the leaf of a path, but you can specify if you want to listen also to changes on objects higher up the path...\n\nFor example, here:\n\n```js\n$.observe(team, \"manager.address.street\", myHandler);\n```\n\n<em>myHandler</em> will be called if the value of the `street` property of the `team.manager.address` object changes. So it is listening to leaf changes on the path <em>\"manager.address.street\"</em>.\n\nIt will not be called if the `team.manager` property is swapped to a different `manager` object, or if the `team.manager.address` property is swapped to a different `address` object.\n\nBut by a simple syntax change, the path can be made to listen to changes not only on the leaf property, but also changes on objects higher up the path. These are <em>deep changes</em> on the path: \n\nFor example, this path:\n\n```js\n$.observe(team, \"manager.address^street\", myHandler);\n```\n\nwill listen to changes to the `street` property of `address`, or the `address` property of `manager`.\n\nAnd the following:\n\n```js\n$.observe(team, \"manager^address.street\", myHandler);\n```\n\nwill listen to changes to the `street` property of `address`, the `address` property of `manager`, <em><b>and</b></em> the `manager` property of `team`.\n\nSimply replace a `.` with a `^` at the level up to which you want to listen to changes.\n\n(If you know that in your app the objects higher up the path will never change dynamically, then stick with the default <em>leaf</em> binding, since that will provide better perf optimization...)\n\nSee [samples](#observe@samples) below.\n\nSee also the related discussion and examples on [data-linking to deep changes, within data-linked templates](#linked-paths@deep).",
        "anchor": "deep"
      },
      {
        "_type": "para",
        "title": "Observing <b>all</b> changes under an object",
        "text": "The `*` (*any* wild card symbol) let's you observe changes to ***any*** property (e.g. `\"manager.*\"` for changes to any property of `manager`).\n\nSimilarly the `**` (*all* wild card symbol) let's you observe ***all*** observable changes under a chosen object or array -- *at any depth*.\n\nYou can write paths such as `\"**\"`, `\"some.objectOrArray.**\"`, `\"some^objectOrArray.**\"`, or even `\"some.objectOrArray^**\"`.\n\nFor example, this:\n\n```js\n$.observe(team, \"**\", myHandler);\n```\n\nwill listen to ***all*** changes (to any depth) under the `team` object (for example, changes to the `team.manager`, `team.manager.address` or `team.manager.address.street` properties), and also changes to the `team.members` property (swapping to another array) -- and even to array changes to `team.members` (adding or removing a member...).\n\nAnd this:\n\n```js\n$.observe(team, \"manager.address.**\", \"manager.members.**\", myHandler);\n```\n\nwill listen to ***all*** changes (to any depth) under `manager.address`, and also to all array changes to the `manager.members` array, and to any changes to objects or arrays *under* the `manager.members` array.\n\nIncluding the '^' alongside the '**' allows you to specify *deep paths* along with *observeAll* behavior, such as:\n\n```js\n\"manager.address^**\"\n```\n\nwhich will listen to changing the `manager.address` to another `address` object, as well as to ***all*** changes (at any depth) *under* `manager.address`.\n\nSee [third sample](#observe@all-phones) below.",
        "anchor": "all"
      },
      {
        "_type": "para",
        "title": "Two ways to 'observeAll': the ** wild card and the $.observeAll() API",
        "text": "Internally, using `**` actually calls the [`observeAll()`](#observeAll) API.\n\nIn fact:\n\n```js\n$.observe(team, \"**\", myHandler);\n```\nis actually equivalent to:\n\n```js\n$.observable(team).observeAll(myHandler);\n```\n\nThe first approach can be convenient for combining multiple paths (with or without `**`) using the same handler."
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observe(objectOrArray, ..., myHandler)",
        "name": "observe",
        "object": "$",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "objectOrArray",
                "type": "object",
                "optional": false,
                "description": "objectOrArray to be 'observed'"
              },
              {
                "_type": "param",
                "name": "path",
                "type": "string",
                "optional": true,
                "description": "One or more paths specifying properties to be 'observed'"
              },
              {
                "_type": "param",
                "name": "...",
                "type": "string",
                "optional": true,
                "description": "Additional paths"
              },
              {
                "_type": "param",
                "name": "myHandler",
                "type": "function",
                "optional": false,
                "description": "Event handler being registered (See <b>API: function myHandler</b> below for details)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observe(person, \"address.street\", myHandler); ",
            "description": "Handle observable property or array change events"
          },
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "object",
                "type": "object",
                "optional": false,
                "description": "object to be 'observed'"
              },
              {
                "_type": "param",
                "name": "\"*\"",
                "type": "string",
                "optional": false,
                "description": "wild card path - for <em>all</em> properties"
              },
              {
                "_type": "param",
                "name": "myHandler",
                "type": "function",
                "optional": false,
                "description": "Event handler being registered (See <b>API: function myHandler</b> below for details)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observe(person, \"*\", myHandler); ",
            "description": "Handle all property change events on an object"
          },
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "array",
                "type": "array",
                "optional": false,
                "description": "array to be 'observed'"
              },
              {
                "_type": "param",
                "name": "myHandler",
                "type": "function",
                "optional": false,
                "description": "Event handler being registered (See <b>API: function myHandler</b> below for details)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observe(phones, myHandler); ",
            "description": "Handle array change events on an array"
          }
        ],
        "description": "Register a handler for observable changes on one or more objects or data paths",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "function myHandler(ev, eventArgs) { ... }",
        "name": "myHandler",
        "object": "",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "ev",
                "type": "object",
                "optional": false,
                "description": "jQuery event object, with properties which include: <ul class=\"textbefore\"><li><code>target</code>: the object which changed</li><li><code>data</code>: JsViews metadata, including: <code>fullPath</code> (the data-linking path such as \"address.street\")</li></ul>"
              },
              {
                "_type": "param",
                "name": "eventArgs",
                "type": "object",
                "optional": false,
                "description": "JsViews event object for property or array changes, with properties <code>change</code> and additional properties specific to the 'change' type:<ul style='font-style:normal'><li>For <em>setProperty()</em>: <code>path</code>, <code>value</code> and <code>oldValue</code>. (With <code>change</code>=<em>\"set\"</em>)</li><li>For <em>insert()</em>: <code>index</code> and <code>items</code>. (With <code>change</code>=<em>\"insert\"</em>)</li><li>For <em>remove()</em>: <code>index</code> and <code>numToRemove</code>. (With <code>change</code>=<em>\"remove\"</em>)</li><li>For <em>move()</em>: <code>oldIndex</code>, <code>index</code> and <code>items</code>. (With <code>change</code>=<em>\"move\"</em>)</li><li>For <em>refresh()</em>: <code>oldItem</code>. (With <code>change</code>=<em>\"refresh\"</em>)</li></ul>"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observe(person, \"address.street\", myHandler); ",
            "description": "Handler for observable property or array change events"
          }
        ],
        "description": "An event handler for observable data changes &ndash; registered using <code>$.observe(...)</code> or <code>$.observable(object).observeAll(...)</code>",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Samples:",
        "text": "Here is a sample showing `$.observe(person, \"name\", \"address^*\", changeHandler);`",
        "anchor": "samples"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "Register a handler for changes: ",
            "text": "We handle changes in the `name`  and `address` properties of the `person`, and <em>any property</em> of the `address`:\n\n```js\n$.observe(person, \"name\", \"address^*\", changeHandler);\n```"
          },
          {
            "_type": "code",
            "title": "Define the handler:",
            "code": "function changeHandler(ev, eventArgs) {\n  var message = ... + eventArgs.path + ... + eventArgs.value ...;\n  ...\n}"
          },
          {
            "_type": "template",
            "title": "Template also binds to 'deep paths'",
            "markup": "<input data-link=\"address^street\" />"
          },
          {
            "_type": "code",
            "title": "Modify values through template binding or buttons:",
            "code": "$(\"#changeAddress\").on(\"click\", function() {\n  $.observable(person).setProperty(\n    \"address\", \n    {\n      street: \"New Street\",\n      ZIP: \"99999\"\n    }\n..."
          }
        ],
        "code": "var person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\",\n    ZIP: \"34009\"\n  }\n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    name: \"Hermione\",\n    \"address.street\": \"Main St\",\n    \"address.ZIP\": \"45008\"\n  });\n});\n\n$(\"#changeAddress\").on(\"click\", function() {\n  $.observable(person).setProperty(\n    \"address\", \n    {\n      street: \"New Street\",\n      ZIP: \"99999\"\n    }\n  );\n});\n\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\n$.observe(person, \"name\", \"address^*\", changeHandler);\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"The new <b>\" + eventArgs.path + \"</b> is <em>\"\n                + JSON.stringify(eventArgs.value) + \"</em>.\";\n\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"modify\">Change leaf values</button>\n  <button id=\"changeAddress\">New address</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Change Log:</label>\n  <button class=\"clear\">Clear</button>\n  <div class=\"messages\"></div>\n</div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address^street\" /></td></tr>\n    <tr><td>ZIP:</td><td><input data-link=\"address^ZIP\" /></td></tr>\n  </tbody></table>\n</script>",
        "height": "230",
        "title": "Handling change events using $.observe()"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Now we modify the above sample to show `$.observe(person, ...)` also handling <em>array</em> properties: a `phones` property of `person`"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "Register a handler for changes: ",
            "text": "We handle changes in the `name`, `address` and `phones` properties of the `person`, and the `street` property of the `address`.\n\nBecause the `phones` property is itself an array, we also handle array changes on the `phones` array:\n\n```js\n$.observe(person, \"name\", \"address^street\", \"phones\", changeHandler);\n```"
          },
          {
            "_type": "para",
            "title": "Define our handler:",
            "text": "(Note that it outputs <em>all</em> the fields of `eventArgs`)\n\n```js\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  for (var key in eventArgs) {\n    message += ... key ... eventArgs[key]...\n  }\n  ...\n}\n```"
          }
        ],
        "code": "var person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\"\n  },\n  phones: [{number: \"111 111 1111\"}, {number:\"222 222 2222\"}] \n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    name: \"Hermione\",\n    \"address.street\": \"Main St\"\n  });\n});\n\n$(\"#changeObjects\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    address: {street: \"New Street\"},\n    phones: [{number:\"123 123 1234\"}]\n  });\n});\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(person.phones).insert({\n    number:\"456 456 4567\"\n  });\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones).remove(\n    $.view(this).index\n  )\n});\n\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\n$.observe(person, \"name\", \"address^street\", \"phones\", changeHandler);\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  for (var key in eventArgs) {\n    message += \"<div><em>\" + key + \":</em> \" + JSON.stringify(eventArgs[key]) + \"</div>\";\n  }\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"modify\">Change leaf values</button><br/>\n  <button id=\"changeObjects\">New address and phones</button><br/>\n  <button id=\"insert\">Add phone</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Change Log:</label>\n  <button class=\"clear\">Clear</button>\n  <div class=\"messages\"></div>\n</div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address^street\" /></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones}}\n          <tr><td>\n            <input class=\"floatleft\" data-link=\"number\" />\n            <span class=\"remove\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n</script>\n",
        "height": "350",
        "title": "Handling both property change and array change events, using $.observe()"
      },
      {
        "_type": "para",
        "title": "",
        "text": "But notice that if you change the value of a phone number, our handler does not 'listen' to that change.\n\nIn the next sample we solve that by listening to *all* changes under `phones`, thanks to the [`**`](#observe@all) wild card.\n\n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "We modify the previous sample by replacing the `\"phones\"` path with `\"phones^**\"`:\n\n```js\n$.observe(person, \"name\", \"address^street\", \"phones^**\", changeHandler);\n```\n\nSo now we observe not only replacing the `phones` array and making *array changes* to the `phones` array -- but also *any* change ***under*** `phones`, such as changing a `phones[n].name` property.\n\n\n"
          }
        ],
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"modify\">Change leaf values</button><br/>\n  <button id=\"changeObjects\">New address and phones</button><br/>\n  <button id=\"insert\">Add phone</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Change Log:</label>\n  <button class=\"clear\">Clear</button>\n  <div class=\"messages\"></div>\n</div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address^street\" /></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones}}\n          <tr><td>\n            <input class=\"floatleft\" data-link=\"number\" />\n            <span class=\"remove\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n</script>",
        "code": "var person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\"\n  },\n  phones: [{number: \"111 111 1111\"}, {number:\"222 222 2222\"}] \n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    name: \"Hermione\",\n    \"address.street\": \"Main St\"\n  });\n  $.observable(person.phones[0]).setProperty({\n    number: \"999 999 9999\"\n  });\n});\n\n$(\"#changeObjects\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    address: {street: \"New Street\"},\n    phones: [{number:\"123 123 1234\"}]\n  });\n});\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(person.phones).insert({\n    number:\"456 456 4567\"\n  });\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones).remove(\n    $.view(this).index\n  )\n});\n\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\n$.observe(person, \"name\", \"address^street\", \"phones^**\", changeHandler);\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  for (var key in eventArgs) {\n    message += \"<div><em>\" + key + \":</em> \" + JSON.stringify(eventArgs[key]) + \"</div>\";\n  }\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "anchor": "all-phones",
        "height": "350",
        "title": "Observing <b>all</b> changes under a path: $.observe() with **"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Note that instead of using the `**` wild card, we could have used the `observeAll()` API directly -- as shown in the [last sample](#observeAll@phones) of the [`observeAll()`](#observeAll) API topic."
      },
      {
        "_type": "para",
        "title": "$.observe() with computed observables",
        "text": "Next, we'll modify the last sample to show only a [computed observable](#computed) `fullName(reverse)` depending on `firstName` and `lastName`.\n\nWe'll observe changes to `fullName()`:\n\n```js\n$.observe(person, \"fullName\", changeHandler);\n```\n\n(*Note:* The path for observing a computed observable has no parens -- so `\"fullName\"` rather than `\"fullName()\"`.)",
        "anchor": "computed"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "Observe changes to `fullName()` computed observable:\n\n```js\n$.observe(person, \"fullName\", changeHandler);\n```\n\n-- which will trigger whenever `firstName` or `lastName` change, since `fullName()` has them as dependencies:\n\n```js\nfullName.depends = [\"firstName\", \"lastName\"]; \n```"
          }
        ],
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\" id=\"result\"></div>\n\n<div class=\"logBox\">\n  <label>Change Log:</label>\n  <button class=\"clear\">Clear</button>\n  <div class=\"messages\"></div>\n</div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <table class=\"nowidth\"><tbody>\n    <tr><td>First name:</td><td><input data-link=\"firstName\" /></td></tr>\n    <tr><td>Last name:</td><td><input data-link=\"lastName\" /></td></tr>\n    <tr><td>Full name:</td><td><input data-link=\"fullName()\" /></td></tr>\n    <tr><td>Full name<br/>(reversed)</td><td data-link=\"fullName(true)\"></td></tr>\n  </tbody></table>\n</script>",
        "code": "var person = {\n  firstName: \"Jeff\",\n  lastName: \"Friedman\",\n  fullName: fullName\n};\n\n// Parameterized computed observable\nfunction fullName(reversed) {\n  // We will declare dependencies (below) for any values that\n  // may change observably, and are not passed in as parameters\n  return reversed\n    ? this.lastName + \" \" + this.firstName\n    : this.firstName + \" \" + this.lastName;\n}\n\n// Declare dependencies, except for any values passed in as parameters\nfullName.depends = [\"firstName\", \"lastName\"]; \n\n// For two-way binding of computed observables, provide a setter\nfullName.set = function(val) {\n  val = val.split(\" \");\n  // Make observable change to dependent properties\n  $.observable(this).setProperty({\n    lastName: val.pop(),\n    firstName: val.join(\" \")\n  });\n};\n\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\n// Observe changes to fullName() computed observable\n$.observe(person, \"fullName\", changeHandler);\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"The new <b>\" + eventArgs.path + \"</b> is <em>\"\n                + JSON.stringify(eventArgs.value) + \"</em>.\";\n\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "height": "250",
        "title": "Observing a computed observable"
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "observeAll",
            "label": "observeAll()"
          },
          {
            "_type": "topic",
            "hash": "unobserve",
            "label": "unobserve()"
          },
          {
            "_type": "topic",
            "hash": "namespaces",
            "label": "Namespaces"
          }
        ]
      }
    ]
  },
  "unobserve": {
    "title": "Removing 'observe' handlers: $.unobserve()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "A single call to <a href=\"#observe\">`$.observe(... myHandler)`</a> will attach the handler to one or more objects and arrays -- to listen to corresponding propertyChange or arrayChange events.\n\nThe same call (same parameters) but with `$.unobserve(...)` instead of `$.observe(...)` will remove the handler from each of those objects."
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.unobserve(objectOrArray, ..., myHandler)",
        "name": "unobserve",
        "object": "$",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "objectOrArray",
                "type": "object",
                "optional": false,
                "description": "objectOrArray to be 'observed'"
              },
              {
                "_type": "param",
                "name": "path",
                "type": "string",
                "optional": true,
                "description": "One or more paths specifying properties to be 'observed'"
              },
              {
                "_type": "param",
                "name": "...",
                "type": "string",
                "optional": true,
                "description": "Additional paths"
              },
              {
                "_type": "param",
                "name": "myHandler",
                "type": "function",
                "optional": true,
                "description": "Event handler being registered (See <b>API: function myHandler</b> below for details)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.unobserve(person, \"address.street\", myHandler); ",
            "description": "Remove handler for observable  changes on specific paths"
          },
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "objectOrArray",
                "type": "object",
                "optional": false,
                "description": "objectOrArray to be 'observed'"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.unobserve(person); ",
            "description": "Remove all handlers for all observable changes to target object/array"
          },
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "objectOrArray",
                "type": "object",
                "optional": false,
                "description": "objectOrArray to be 'observed'"
              },
              {
                "_type": "param",
                "name": "path",
                "type": "string",
                "optional": true,
                "description": "One or more paths specifying properties to be 'observed'"
              },
              {
                "_type": "param",
                "name": "...",
                "type": "string",
                "optional": true,
                "description": "Additional paths"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.unobserve(person, \"address.street\");",
            "description": "Remove any handlers targetting specific properties or paths"
          }
        ],
        "description": "Unregister a handler for observable changes on one or more objects or data paths",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Samples:",
        "text": "Here is a copy of a sample from the <a href=\"#observe\">`$.observe()`</a> topic, on which we have used `observe/unobserve` to provide an <em>enable/disable checkbox</em> on the <em>Change Log</em>:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "```jsr\n<input type=\"checkbox\" checked id=\"attach\"/>\n```\n\n```js\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n```"
          },
          {
            "_type": "code",
            "title": "Call unobserve() with the same paths and handler, to stop 'listening'...",
            "code": "function logChanges(enable) {\n  if (enable) {\n    $.observe(person, \"name\", \"address^*\", changeHandler);\n  } else {\n    $.unobserve(person, \"name\", \"address^*\", changeHandler);\n  }\n}"
          }
        ],
        "code": "var person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\",\n    ZIP: \"34009\"\n  }\n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    name: \"Hermione\",\n    \"address.street\": \"Main St\",\n    \"address.ZIP\": \"45008\"\n  });\n});\n\n$(\"#changeAddress\").on(\"click\", function() {\n  $.observable(person).setProperty(\n    \"address\", \n    {\n      street: \"New Street\",\n      ZIP: \"99999\"\n    }\n  );\n});\n\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\nlogChanges(true);\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observe(person, \"name\", \"address^*\", changeHandler);\n  } else {\n    $.unobserve(person, \"name\", \"address^*\", changeHandler);\n  }\n}\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"The new <b>\" + eventArgs.path + \"</b> is <em>\"\n                + JSON.stringify(eventArgs.value) + \"</em>.\";\n\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"modify\">Change leaf values</button>\n  <button id=\"changeAddress\">New address</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label><input type=\"checkbox\" checked id=\"attach\"/> Change Log</label>\n  <button class=\"clear\">Clear</button>\n  <div class=\"messages\"></div>\n</div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address^street\" /></td></tr>\n    <tr><td>ZIP:</td><td><input data-link=\"address^ZIP\" /></td></tr>\n  </tbody></table><br/>\n\n  {^{:name}}: {^{:address^street}} - {^{:address^ZIP}}\n\n</script>",
        "height": "230",
        "title": "Using $.unobserve() to remove handlers"
      },
      {
        "_type": "para",
        "title": "$.unobserve() variants",
        "text": "$.unobserve() calls do not have to include object, path or handler. Each can be omitted, and the effect will then be to remove 'observable change' handler bindings for ***all*** handlers, ***all*** paths or ***all*** objects...\n\n***Details:***\n\n*Removing all 'observe' handlers from all objects*\n\n```js\n$.unobserve();\n```\n\nThe above call will remove *all* 'observable change' handlers from all objects -- whether created by calls to `$.observe(...)` or `$.observable(...).observeAll()`, by JsViews data-link binding in templates or as top-level data-linking. For example, if you choose *Try it* in the sample above, and replace the `unobserve` call by `$.unobserve();` you'll see that unchecking has the effect of removing all JsViews data-link binding in the template too. \n\n`$.unobserve()` can be used on exiting JsViews or JsObservable code as a way of ensuring complete disposal of all handler bindings. (But note that JsViews data-linking in templates does already automatically dispose its own 'observe' bindings when the corresponding HTML elements are removed from the DOM.)\n\n*Removing all 'observe' handlers an object*\n\n```js\n$.unobserve(objectOrArray);\n```\n\nThe above call will remove *all* change handlers from the object (or array). For example, if you choose *Try it* in the sample above, and replace the `unobserve` call by `$.unobserve(person);` you'll see that unchecking has the effect of removing both the log listener and the JsViews data-link binding in the template too (for the `person` but not for the `address`).\n\n(Note that `$unobserve(objectA, objectB);` will do nothing. To unobserve multiple objects, make a separate `$unobserve(object);` call for each object.)\n\n*Removing 'observe' handler bindings for a given handler:*\n\n```js\n$.unobserve(myHandler);\n```\n\nThe above call will remove change handler bindings for `myHandler` from all objects. For example, you can choose *Try it* in the sample above, and replace the `unobserve` call by `$.unobserve(myHandler);`. You'll see that unchecking works correctly (and does not remove JsViews data-link binding in the template).\n\n*Removing bindings for specific paths, but for any handlers:*\n\n```js\n$.unobserve(person, \"name\", \"address\"...);\n```\n\nThe above call will remove all bindings of `person.name` and `person.address`, so choosing *Try it* and making that change will stop the `name` and `address` bindings for both template and message log, but both will continue to respond to changes in `address.ZIP` and `address.street`.\n\n*Removing 'observe' handlers from an object (or array), for a given handler*\n\n```js\n$.unobserve(objectOrArray, myHandler);\n```\n\nThe above call will remove bindings for `myHandler` from the object (or array) specified. For example, if you choose *Try it* in the sample above, and replace the `unobserve` call by `$.unobserve(person, myHandler);` you'll see that unchecking has the effect of removing logging for the person, but does not affect the data-link binding in the template.\n\n***Additional examples:***\n\n_unobserve using `\"*\"`_:\n\n```js\n$.unobserve(person, \"*\", myHandler);\n```\n\nThe above call will remove myHandler bindings for *all properties* of `person`, so is similar to `$.unobserve(person, myHandler)`. However, for array properties it will also remove the `arrayChange` `myHandler` binding (on `person.phones` for example).\n\n_unobserve using `\"**\"`_:\n\n```js\n$.unobserve(person, \"**\", myHandler);\n```\n\nThe above call will remove all `myHandler` bindings on `person` and on its child objects at any depth. So it is equivalent to `$.observable(person).unobserveAll(myHandler)`. (See *[unobserveAll](#unobserveAll)*.)\n\n*Array properties:*\n\n```js\n$.unobserve(person, \"name\", person.phones, myHandler);\n```\n\nThe above call will stop handing changes to `person.name`, and will stop listening to array change events on the `person.phones` array. You can test it by choosing *Try it* on the sample below, (based on the last sample in the [`$.observe()`](#observe\") topic):\n\nAnd this variant is almost the same:\n\n```js\n$.unobserve(person, \"name\", \"phones\", myHandler);\n```\n\n-- but in addition it will stop listening to *setting* the `phones` property of `person`"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "code",
            "title": "Call unobserve with the same paths and handler, to stop 'listening'..",
            "code": "function logChanges(enable) {\n  if (enable) {\n    $.observe(person, \"name\", \"address^street\", \"phones\", changeHandler);\n  } else {\n    $.unobserve(person, \"name\", \"address^street\", \"phones\", changeHandler);\n  }\n}"
          }
        ],
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"modify\">Change leaf values</button><br/>\n  <button id=\"changeObjects\">New address and phones</button><br/>\n  <button id=\"insert\">Add phone</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Change Log:</label>\n  <input type=\"checkbox\" checked id=\"attach\"/></b>\n  <button class=\"clear\">Clear</button>\n  <div class=\"messages\"></div>\n</div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address^street\" /></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones}}\n          <tr><td>\n            <span class=\"floatleft\">{{:number}}</span>\n            <span class=\"remove\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n</script>",
        "code": "var person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\"\n  },\n  phones: [{number: \"111 111 1111\"}, {number:\"222 222 2222\"}] \n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    name: \"Hermione\",\n    \"address.street\": \"Main St\"\n  });\n});\n\n$(\"#changeObjects\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    address: {street: \"New Street\"},\n    phones: [{number:\"123 123 1234\"}]\n  });\n});\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(person.phones).insert({\n    number:\"456 456 4567\"\n  });\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones).remove(\n    $.view(this).index\n  )\n});\n\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\nlogChanges(true);\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observe(person, \"name\", \"address^street\", \"phones\", changeHandler);\n  } else {\n    $.unobserve(person, \"name\", \"address^street\", \"phones\", changeHandler);\n  }\n}\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  for (var key in eventArgs) {\n    message += \"<div><em>\" + key + \":</em> \" + JSON.stringify(eventArgs[key]) + \"</div>\";\n  }\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "height": "350",
        "title": "Modified sample showing also unobserve() for arrays:"
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "unobserveAll",
            "label": "unobserveAll()"
          },
          {
            "_type": "topic",
            "hash": "observe",
            "label": "observe()"
          },
          {
            "_type": "topic",
            "hash": "namespaces",
            "label": "Namespaces"
          }
        ]
      }
    ]
  },
  "$observable": {
    "title": "Making \"observable\" changes to objects and arrays",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In current JavaScript implementations, modifying objects or arrays does not raise any event, so there is no way for the change to be detected elsewhere.\n\nJsViews dynamic data-bound UI solves this through <em>data-linking</em>, using the <em>JsObservable observer pattern</em>.\n\n`$.observable()` provides a way for you to change objects or arrays <em>observably</em>. Each change will raise a *[property change](#onpropchange)* or *[array change](#onarrchange)* event. \n\nJsViews uses those events to make any <a href=\"#linked-template-syntax\">data-linked tags or elements</a> in your templates update automatically in response to each change in your underlying data.\n\nIn addition, it ensures that those events are raised when the user interacts with a data-linked template, and causes changes to the underlying data.\n\nJsViews also lets you register <a href=\"#observeobjectsarrays\">event handlers or listeners</a>, so your code can listen to the observable changes made to your data objects or view models."
      },
      {
        "_type": "para",
        "title": "$.observable(myObject) and $.observable(myArray)",
        "text": "If you pass an <em>object</em> to `$.observable()` then you obtain an <b><em>observable</em> object</b> (a very lightweight wrapper around your object), which provides a method for modifying object properties observably:\n<ul class=\"textbefore\">\n<li><a href=\"#setprop\">setProperty</a></li>\n</ul>\n\nSimilarly, if you pass an <em>array</em> to `$.observable()` then you obtain an <b><em>observable</em> array</b> (a lightweight wrapper around your array) which provides a different set of methods, specific to modifying arrays: \n<ul class=\"textbefore\">\n<li><a href=\"#insert\">insert</a></li>\n<li><a href=\"#remove\">remove</a></li>\n<li><a href=\"#move\">move</a></li>\n<li><a href=\"#refresh\">refresh</a></li>\n</ul>\n\nNote that you don't need hold on to the <em>observable</em> wrapped object for reuse. It is so lightweight you can just call `$.observable(...)` again every time you need to make further changes to your object or array."
      }
    ]
  },
  "observeAll": {
    "title": "Observing all objects in an object hierarchy: $.observable().observeAll()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The `.observeAll()` API allows you to register a single handler to listen to <b><em>all</em></b> the changes under a chosen object or array.\n\nThis means that no matter how complex the hierarchy of objects under the targeted object or array, and no matter how complex the structural changes made to that object hierarchy, the handler will continue to listen to any change on any object or array in the tree.\n\n```js\n$.observable(myObjectOrArray).observeAll(myHandler)\n```"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observable(objectOrArray).observeAll(myHandler)",
        "name": "observeAll",
        "object": "$.observable(objectOrArray)",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "myHandler",
                "type": "function",
                "optional": false,
                "description": "Event handler being registered (See <b>API: function myHandler</b> below for details)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observable(person).observeAll(myHandler)",
            "description": "Observe all changes under an object or array"
          }
        ],
        "description": "Register an event handler to observe all changes in an object and on any nested object or array in the 'object graph'  under it",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "",
        "text": "The `myHandler` function registered using the `.observeAll()` is identical to the handler used with <a href=\"#observe\">`$.observe()`</a>:"
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "function myHandler(ev, eventArgs) { ... }",
        "name": "myHandler",
        "object": "",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "ev",
                "type": "object",
                "optional": false,
                "description": "jQuery event object, with properties which include: <ul class=\"textbefore\"><li><code>target</code>: the object which changed</li><li><code>data</code>: JsViews metadata, including: <code>fullPath</code> (the data-linking path such as \"address.street\")</li></ul>"
              },
              {
                "_type": "param",
                "name": "eventArgs",
                "type": "object",
                "optional": false,
                "description": "JsViews event object for property or array changes, with properties <code>change</code> and additional properties specific to the 'change' type:<ul style='font-style:normal'><li>For <em>setProperty()</em>: <code>path</code>, <code>value</code> and <code>oldValue</code>. (With <code>change</code>=<em>\"set\"</em>)</li><li>For <em>insert()</em>: <code>index</code> and <code>items</code>. (With <code>change</code>=<em>\"insert\"</em>)</li><li>For <em>remove()</em>: <code>index</code> and <code>numToRemove</code>. (With <code>change</code>=<em>\"remove\"</em>)</li><li>For <em>move()</em>: <code>oldIndex</code>, <code>index</code> and <code>items</code>. (With <code>change</code>=<em>\"move\"</em>)</li><li>For <em>refresh()</em>: <code>oldItem</code>. (With <code>change</code>=<em>\"refresh\"</em>)</li></ul>"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observe(person, \"address.street\", myHandler); ",
            "description": "Handler for observable property or array change events"
          }
        ],
        "description": "An event handler for observable data changes - registered using <code>$.observe(...)</code> or <code>$.observable(object).observeAll(...)</code>",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Sample:",
        "text": "We'll use the `observeAll()` API to provide an alternative version of our [last sample](#observe@all-phones) in the [`$.observe()`](#observe) topic.\n\nThis allows us to include listening to newly added items in the phone array. \n\n(But in this version we use `$observeAll()` directly, rather than using the `**` wild card as we did in that sample.)",
        "anchor": "phones"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "A single observeAll() call for observing all the objects",
            "text": "Even `phone` objects added to the `phones` array will automatically be 'listened' to by our handler, without us needing to write any additional code.\n\n```js\n$.observable(person).observeAll(changeHandler);\n```"
          },
          {
            "_type": "code",
            "title": "Define our handler:",
            "code": "function changeHandler(ev, eventArgs) {\n  var message = \"\";\n  if (ev.data.observeAll) {\n    message += \"<div><em>observeAll path:</em> \" + ev.data.observeAll.path() + \"</div>\"\n  }\n  for (var key in eventArgs) {\n    message += ... key ... eventArgs[key]...\n  }\n  ...\n}"
          }
        ],
        "code": "var person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\"\n  },\n  phones: [{number: \"111 111 1111\"}, {number:\"222 222 2222\"}] \n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    name: \"Hermione\",\n    \"address.street\": \"Main St\"\n  });\n});\n\n$(\"#changeObjects\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    address: {street: \"New Street\"},\n    phones: [{number:\"123 123 1234\"}]\n  });\n});\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(person.phones).insert({\n    number:\"456 456 4567\"\n  });\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones).remove(\n    $.view(this).index\n  )\n});\n\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\n$.observable(person).observeAll(changeHandler);\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  if (ev.data.observeAll) {\n    message += \"<div><em>observeAll path:</em> \" + ev.data.observeAll.path() + \"</div>\"\n  }\n  for (var key in eventArgs) {\n    message += \"<div><em>\" + key + \":</em> \" + JSON.stringify(eventArgs[key]) + \"</div>\";\n  }\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"modify\">Change leaf values</button><br/>\n  <button id=\"changeObjects\">New address and phones</button><br/>\n  <button id=\"insert\">Add phone</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Change Log:</label>\n  <button class=\"clear\">Clear</button>\n  <div class=\"messages\"></div>\n</div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address^street\" /></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones}}\n          <tr><td>\n            <input class=\"floatleft\" data-link=\"number\" />\n            <span class=\"remove\" style=\"margin:3px\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n</script>",
        "height": "350",
        "title": "Handling both property change and array change events, using .observeAll()",
        "anchor": ""
      },
      {
        "_type": "para",
        "title": "observeAll() with View Model object hierarchies",
        "text": "The `observeAll()` API works equally well with View Model objects or plain objects. See *[Plain objects or View Model](#explore/objectsorvm)*. At the end of that topic we [show](#explore/objectsorvm@linkvm) our `observeAll()` sample above, using View Model objects."
      },
      {
        "_type": "para",
        "title": "observeAll() and \"**\" paths",
        "text": "As an alternative to using the `observeAll()` API, it is sometimes simpler to use the `**` ***all*** *wild card* path in association with `$.observe()`, or with computed observables, as shown [here](#observe@all) and [here](#computed@depends-all). "
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "unobserveAll",
            "label": "unobserveAll()"
          },
          {
            "_type": "topic",
            "hash": "observe",
            "label": "observe()"
          },
          {
            "_type": "topic",
            "hash": "namespaces",
            "label": "Namespaces"
          }
        ]
      }
    ]
  },
  "unobserveAll": {
    "title": "$.observable().unobserveAll()",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Just as <a href=\"#observeAll\">`$.observable(objectOrArray).observeAll(myHandler)`</a> will traverse the whole hierarchy of objects or arrays under the root `objectOrArray` and attach the handler to each object, similarly `$.observable(objectOrArray).unobserveAll(myHandler)` will traverse the whole hierarchy and remove the handler from any object to which it has been attached."
      },
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observable(objectOrArray).unobserveAll(myHandler)",
        "name": "unobserveAll",
        "object": "$.observable(obOrArray)",
        "method": true,
        "returns": "",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "myHandler",
                "type": "function",
                "optional": true,
                "description": "Event handler being registered (See <b>API: function myHandler</b> below for details)"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observable(person).unobserveAll(myHandler); ",
            "description": "Remove handler from object/array and from all nested objects"
          },
          {
            "_type": "signature",
            "title": "",
            "params": [],
            "args": [],
            "sections": [],
            "example": "$.observable(person).unobserveAll(); ",
            "description": "Remove <b>all</b> handlers for observable changes, from  an object/array and from all nested objects"
          }
        ],
        "description": "Remove a handler for observable changes, from an object or array, and from any nested objects or arrays under it",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "Samples:",
        "text": "Here is a copy of a sample from the <a href=\"#observeAll\">`.observeAll()`</a> topic, on which we have used `observeAll`/`unobserveAll` to provide an <em>enable/disable checkbox</em> on the <em>Change Log</em>:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "```jsr\n<input type=\"checkbox\" checked id=\"attach\"/>\n```\n\n```js\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n```"
          },
          {
            "_type": "code",
            "title": "Call unobserveAll() on the root, to stop 'listening'...",
            "code": "function logChanges(enable) {\n  if (enable) {\n    $.observable(person).observeAll(changeHandler);\n  } else {\n    $.observable(person).unobserveAll(changeHandler);\n  }\n}"
          }
        ],
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"modify\">Change leaf values</button><br/>\n  <button id=\"changeObjects\">New address and phones</button><br/>\n  <button id=\"insert\">Add phone</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label><input type=\"checkbox\" checked id=\"attach\"/> Change Log</label>\n  <button class=\"clear\">Clear</button>\n  <div class=\"messages\"></div>\n</div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address^street\" /></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones}}\n          <tr><td>\n            <input class=\"floatleft\" data-link=\"number\" />\n            <span class=\"remove\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n</script>",
        "code": "var person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\"\n  },\n  phones: [{number: \"111 111 1111\"}, {number:\"222 222 2222\"}] \n};\n\n$(\"#modify\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    name: \"Hermione\",\n    \"address.street\": \"Main St\"\n  });\n});\n\n$(\"#changeObjects\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    address: {street: \"New Street\"},\n    phones: [{number:\"123 123 1234\"}]\n  });\n});\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(person.phones).insert({\n    number:\"456 456 4567\"\n  });\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones).remove(\n    $.view(this).index\n  )\n});\n\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\nlogChanges(true);\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observable(person).observeAll(changeHandler);\n  } else {\n    $.observable(person).unobserveAll(changeHandler);\n  }\n}\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  if (ev.data.observeAll) {\n    message += \"<div><em>observeAll path:</em> \" + ev.data.observeAll.path() + \"</div>\"\n  }\n  for (var key in eventArgs) {\n    message += \"<div><em>\" + key + \":</em> \" + JSON.stringify(eventArgs[key]) + \"</div>\";\n  }\n  $(\".messages\").append(\"<div>\" + message + \"</div>\");\n}",
        "height": "350",
        "title": "unobserveAll()"
      },
      {
        "_type": "para",
        "title": "$.unobserveAll() variant",
        "text": "<em>Omitting the handler:</em>\n\n```js\n$.observable(objectOrArray).unobserveAll()\n```\n\nThe above call will remove <em>all</em> change handlers from the object, and any nested objects.\n\nTo test it, you can choose <em>Try it</em> in the sample above, and replace the `unobserveAll` call by `$.observable(person).unobserveAll();`\n\nYou'll see that unchecking will then have the effect of removing not only the logging handler, but also the JsViews data-link binding handler used in the template. Now, changes will trigger neither log messages, nor template updates."
      },
      {
        "_type": "para",
        "title": "unobserveAll() with View Model object hierarchies",
        "text": "The `unobserveAll()` API works equally well with View Model objects or plain objects. See *[Plain objects or View Model](#explore/objectsorvm)*. At the end of that topic we [show](#explore/objectsorvm@linkvm) our `unobserveAll()` sample above, using View Model objects."
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "observeAll",
            "label": "observeAll()"
          },
          {
            "_type": "topic",
            "hash": "unobserve",
            "label": "unobserve()"
          },
          {
            "_type": "topic",
            "hash": "namespaces",
            "label": "Namespaces"
          }
        ]
      }
    ]
  },
  "computed": {
    "title": "Computed properties and computed observables",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsRender templates can include [computed properties](#paths@computed), such as:\n\n- `person.firstName()`: a computed 'getter' property which returns a private `_firstName`\n- `person.fullName()`: a computed property which concatenates (and perhaps formats) first and last name.\n- `expenses.total()`: a computed property which gives the total for a property/column of an array of items.\n\nSee the samples *[Getter properties with plain objects](#paths@getter-plain-sample)* and *[Getter properties on View Model](#paths@getter-vm-sample)*.\n\nJsObservable and JsViews provide support for making computed properties ***observable***, so that in a data-linked template you can bind directly to computed properties, provide two-way data-binding, etc.\n\n"
      },
      {
        "_type": "para",
        "title": "Computed observable: get / set",
        "text": "To make `person.firstName()` into a ***computed observable***, with two-way data-binding, specify an associated 'setter' function:\n\n```js\nfunction firstName() {\n  return this._firstName; // Get the firstName\n}\n\nfirstName.set = function(val) {\n  this._firstName = val; // Set the firstName\n}\n```\n\nThe `firstName()` *computed observable* can be modified observably, either by calling `setProperty`:\n\n```js\n$.observable(person).setProperty(\"firstName\", \"updatedFirstName\");\n``` \n\nor by two-way binding in a template:\n\n```jsr\n<input data-link=\"firstName()\" />\n```\n\nand if used in a tag expression in a data-linked templates it will update automatically in response to observable changes: \n\n```jsr\nFirst name: {^{:firstName()}}\n\n<span data-link=\"firstName()\"></span>\n```\n\n`$.observe()` can be used to listen to observable changes in a computed observable:\n\nThe following sample shows all of these scenarios:\n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "*Code:*\n\n```js\nfunction firstName() { return this._firstName; } // Getter (with _firstName as private property)\n\nfirstName.set = function(val) { this._firstName = val; }; // Provide a setter\n\n$.observable(person).setProperty(\"firstName\", person.firstName() + \"+\"); // Modify firstName() observably\n\n$.observe(data.person, \"firstName\", function(ev, evArgs) {\n  ... // Listen to observable changes in firstName()\n});\n```\n\n*Template:*\n\n```jsr\n<input data-link=\"person.firstName()\" />\n{^{:person.firstName()}}\n<em data-link=\"person.firstName()\"></em>\n```\n"
          }
        ],
        "code": "function firstName() {\n  return this._firstName;\n}\n\nfirstName.set = function(val) {\n  this._firstName = val;\n};\n\nvar data = {\n  person: {\n    _firstName: \"Jo\",\n    firstName: firstName\n  }\n};\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", data, {\n  changeFirstName: function(person) {\n    $.observable(person).setProperty(\n      \"firstName\",\n      person.firstName() + \"+\"\n    );\n  }\n});\n\n$.observe(data.person, \"firstName\", function(ev, evArgs) {\n  alert(\"New firstName: \" + evArgs.value);\n});",
        "html": "<div id=\"result\"></div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <button data-link=\"{on ~changeFirstName person}\">\n    Change firstName\n  </button> <br/>\n\n  First name: <input data-link=\"person.firstName()\" /> -\n  {^{:person.firstName()}} -\n  <em data-link=\"person.firstName()\"></em>\n</script>",
        "height": "70",
        "title": "get/set"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Note that when data-linking computed observables to multiple targets, the full data-linking syntax is used. The following example shows two-way data-linking to `name()` and data-linking of the placeholder target to `namePlaceholder()`):\n\n```jsr\n<input data-link=\"{:name():} placeholder{:namePlaceholder()}\" />\n```\n\n"
      },
      {
        "_type": "para",
        "title": "Get/set properties on a View Model",
        "text": "Rather than using plain JavaScript objects with getter functions, as above, a more common pattern (providing better encapsulation) would be to define a *'View Model'* class, and to instantiate that class to provide data instances.\n\nSee *[Plain objects or View Model](#explore/objectsorvm)* for a full discussion of using View Models with JsRender and JsViews.\n\nHere is a modified version of the above sample, using a View Model `Person` class, rather than plain objects:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "*Code:*\n\n```js\nfunction firstName() { return this._firstName; } // Getter (with _firstName as private property)\n\nfirstName.set = function(val) { this._firstName = val; }; // Provide a setter\n\n// Person class\nfunction Person(firstName) {\n  this._firstName = firstName;\n}\n\nPerson.prototype = {\n  firstName: firstName\n};\n\nvar data = {\n  person: new Person(\"Jo\")\n};\n```\n\n*Template:*\n\n```jsr\n<input data-link=\"person.firstName()\" />\n{^{:person.firstName()}}\n<em data-link=\"person.firstName()\"></em>\n```\n"
          }
        ],
        "height": "70",
        "html": "<div id=\"result\"></div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <button data-link=\"{on ~changeFirstName person}\">\n    Change firstName\n  </button> <br/>\n\n  First name: <input data-link=\"person.firstName()\" /> -\n  {^{:person.firstName()}} -\n  <em data-link=\"person.firstName()\"></em>\n</script>",
        "code": "function firstName() {\n    return this._firstName;\n}\n\nfirstName.set = function(val) {\n  this._firstName = val;\n};\n\n// Person class\nfunction Person(firstName) {\n  this._firstName = firstName;\n}\n\nPerson.prototype = {\n  firstName: firstName\n};\n\nvar data = {\n  person: new Person(\"Jo\")\n};\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", data, {\n  changeFirstName: function(person) {\n    $.observable(person).setProperty(\n      \"firstName\",\n      person.firstName() + \"+\"\n    );\n  }\n});\n\n$.observe(data.person, \"firstName\", function(ev, evArgs) {\n  alert(\"New firstName: \" + evArgs.value);\n});",
        "title": "get/set &ndash; View Model"
      },
      {
        "_type": "para",
        "title": "Computed observable: get &ndash; depends",
        "text": "The `firstName()` example above is probably the most common type of *computed observable*: a get/set property depending on a corresponding 'private' property.\n\nAnother very common use of *computed observables* is for read-only computed properties that may depend on more than one other property.\n\nThe  following sample illustrates that, with a `person.fullName()` computed property which concatenates the computed `firstName()` and a regular (non-computed) `lastName` property.\n\nThis type of computed observable consists simply of a getter function, and a specification of the dependencies -- i.e. the other observable properties which the getter function depends on:\n\n```js\nfunction fullName() { return this.firstName() + \" \" + this.lastName; }\n\nfullName.depends = [\"firstName\", \"lastName\"];\n```\n\nThe `depends` specification above means that whenever `firstName()` or `lastName` change, an observable change event for `fullName()` will also be triggered, and `fullName()` will be recalculated. \n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "*Code:*\n\n```js\nfunction fullName() { return this.firstName() + \" \" + this.lastName; } // getter\n\nfullName.depends = [\"firstName\", \"lastName\"]; // Dependencies\n\n$.observe(data.person, \"fullName\", function(ev, evArgs) {\n  ... // listen to changes in fullName()\n});\n```\n\n*Template:*\n\n```jsr\n{^{:person.fullName()}}\n<em data-link=\"person.fullName()\"></em>\n```"
          }
        ],
        "code": "function firstName() { return this._firstName; }\n\nfirstName.set = function(val) {\n  this._firstName = val;\n};\n\nfunction fullName() { return this.firstName() + \" \" + this.lastName; }\n\nfullName.depends = [\"firstName\", \"lastName\"];\n\nvar data = {\n  person: {\n    _firstName: \"Jo\",\n    lastName: \"Blow\",\n    firstName: firstName,\n    fullName: fullName\n  }\n};\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", data);\n\n$.observe(data.person, \"fullName\", function(ev, evArgs) {\n  alert('New fullName: \"' + data.person.fullName() + '\"');\n});\n",
        "html": "<div id=\"result\"></div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  First name: <input data-link=\"person.firstName()\" /> -\n  {^{:person.firstName()}} -\n  <em data-link=\"person.firstName()\"></em> <br/>\n\n  Last name: <input data-link=\"person.lastName\" /> -\n  {^{:person.lastName}} -\n  <em data-link=\"person.lastName\"></em> <br/>\n\n  Full name: {^{:person.fullName()}} -\n  <em data-link=\"person.fullName()\"></em>\n</script>",
        "height": "90",
        "title": "get &ndash; depends"
      },
      {
        "_type": "para",
        "title": "Computed observable: get / set &ndash; depends",
        "text": "Sometimes a computed observable may depend on other observables, and also have a setter defined.\n\nFor example we may want to allow two-way binding to `fullName()` -- with a setter which looks for white-space in the provided string and reassigns the preceding and following text to `firstName` and `lastName` -- so an observable change to fullName automatically triggers appropriate observable changes to `firstName` and `lastName`:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "*Code:*\n\n```js\nfunction fullName() { return this.firstName() + \" \" + this.lastName; }\n\nfullName.set = function(val) { \n  val = val.split(\" \");\n  // Make observable change to dependent properties\n  $.observable(this).setProperty({\n    lastName: val.pop(),\n    firstName: val.join(\" \")\n  });\n};\n\nfullName.depends = [\"firstName\", \"lastName\"];\n```\n\n*Template:*\n\n```jsr\n<input data-link=\"person.fullName()\" />\n{^{:person.fullName()}}\n<em data-link=\"person.fullName()\" ></em>\n```"
          }
        ],
        "code": "function firstName() { return this._firstName; }\n\nfirstName.set = function(val) {\n  this._firstName = val;\n};\n\nfunction fullName() { return this.firstName() + \" \" + this.lastName; }\n\nfullName.set = function(val) {\n  val = val.split(\" \");\n  // Make observable change to dependent properties\n  $.observable(this).setProperty({\n    lastName: val.pop(),\n    firstName: val.join(\" \")\n  });\n};\n\nfullName.depends = [\"firstName\", \"lastName\"];\n\nvar data = {\n  person: {\n    _firstName: \"Jo\",\n    lastName: \"Blow\",\n    firstName: firstName,\n    fullName: fullName\n  }\n};\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", data);",
        "html": "<div id=\"result\"></div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  First name: <input data-link=\"person.firstName()\" /> -\n  {^{:person.firstName()}} -\n  <em data-link=\"person.firstName()\"></em> <br/>\n\n  Last name: <input data-link=\"person.lastName\" /> -\n  {^{:person.lastName}} -\n  <em data-link=\"person.lastName\"></em> <br/>\n\n  Full name: <input data-link=\"person.fullName()\" /> -\n  {^{:person.fullName()}} -\n  <em data-link=\"person.fullName()\"></em>\n</script>",
        "height": "100",
        "title": "get/set &ndash; depends"
      },
      {
        "_type": "para",
        "title": "Computed observable with parameters",
        "text": "A computed observable function `myComputed(a, b, c)` may take parameters. For example:\n\n```js\nfunction fullName(reverse) {\n return reverse\n   ? this.lastName() + \" \" + this.firstName\n   : this.firstName + \" \" + this.lastName();\n}\n\nfullName.depends = [\"firstName\", \"lastName\"];\n```\n\nThe computed value might be used in a data-linked expression in a template, with a specific value passed in as parameter:\n\n```jsr\n{^{:person.fullName(true)}}\n```\n\n(You can see an example of this in the [samples/computed/fullName](#samples/computed/fullname) samples.)\n\nPassed-in parameters may be observable values -- in which case whenever they change observably, the computed observable will update automatically. For example:\n \n```jsr\n{^{:person.fullName(~settings.reverseName)}}\n```\n\nThe value of a computed observable (`person.fullName(...)` above) will update whenever either an observable parameter (in this case: `~setting.reverseName`) or a dependency (`firstName` or `lastName`) change.\n\nHere is a working example:\n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "*Code:*\n\n```js\nfunction fullName(reverse) {\n  return reverse\n    ? this.lastName + \" \" + this.firstName()\n    : this.firstName() + \" \" + this.lastName;\n}\n```\n\n*Template:*\n\n```jsr\n{^{:person.fullName(~settings.reverseName)}}\n\n<em data-link=\"person.fullName(~settings.reverseName)\" ></em>\n```"
          }
        ],
        "html": "<div id=\"result\"></div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <label><input type=\"checkbox\" data-link=\"~settings.reverseName\" /> Reverse name:</label>\n  {^{:~settings.reverseName}} <br/>\n\n  First name: <input data-link=\"person.firstName()\" /> -\n  {^{:person.firstName()}} -\n  <em data-link=\"person.firstName()\"></em> <br/>\n\n  Last name: <input data-link=\"person.lastName\" /> -\n  {^{:person.lastName}} -\n  <em data-link=\"person.lastName\"></em> <br/>\n\n  Full name: <input data-link=\"person.fullName()\" /> -\n  {^{:person.fullName(~settings.reverseName)}} -\n  <em data-link=\"person.fullName(~settings.reverseName)\"></em>\n</script>",
        "code": "function firstName() { return this._firstName; }\n\nfirstName.set = function(val) {\n  this._firstName = val;\n};\n\nfunction fullName(reverse) {\n  return reverse\n    ? this.lastName + \" \" + this.firstName()\n    : this.firstName() + \" \" + this.lastName;\n}\n\nfullName.set = function(val) {\n  val = val.split(\" \");\n  // Make observable change to dependent properties\n  $.observable(this).setProperty({\n    lastName: val.pop(),\n    firstName: val.join(\" \")\n  });\n};\n\nfullName.depends = [\"firstName\", \"lastName\"];\n\nvar data = {\n  person: {\n    _firstName: \"Jo\",\n    lastName: \"Blow\",\n    firstName: firstName,\n    fullName: fullName\n  }\n};\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", data, {\n  settings: {reverseName: false}\n});",
        "height": "110",
        "title": "get/set &ndash; depends, with parameters"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The computed `fullName(reverse)` above takes a parameter, `reverse`, but note that for read-write computed properties (*get/set*), you cannot pass additional parameters to the setter. (So in the example above is the setter is still `fullName.set = function(val) {...}`.) Indeed, clicking on the *Reverse name* checkbox does not reverse the name in the *Full name* text box.\n\nTo achieve that functionality, we need to include `\"~settings.reverseName\"` as a path in the `fullName.depends` declaration, rather than passing it in as a parameter:"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "```js\nfunction fullName() {\n  return settings.reverseName ? ... : ...;\n}\n\nfullName.set = function(val) {\n  ...\n  $.observable(this).setProperty({\n    lastName: settings.reverseName ? ... : ...,\n    firstName: settings.reverseName ? ... : ...\n  });\n};\n\nfullName.depends = [\"firstName\", \"lastName\", \"~settings.reverseName\" ];\n\nvar settings = {reverseName: false};\n\ntmpl.link(\"#result\", data, {settings: settings});\n```"
          }
        ],
        "html": "<div id=\"result\"></div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <label><input type=\"checkbox\" data-link=\"~settings.reverseName\" /> Reverse name:</label>\n  {^{:~settings.reverseName}} <br/>\n\n  First name: <input data-link=\"person.firstName()\" /> -\n  {^{:person.firstName()}} -\n  <em data-link=\"person.firstName()\"></em> <br/>\n\n  Last name: <input data-link=\"person.lastName\" /> -\n  {^{:person.lastName}} -\n  <em data-link=\"person.lastName\"></em> <br/>\n\n  Full name: <input data-link=\"person.fullName()\" /> -\n  {^{:person.fullName()}} -\n  <em data-link=\"person.fullName()\"></em>\n</script>",
        "code": "function firstName() { return this._firstName; }\n\nfirstName.set = function(val) {\n  this._firstName = val;\n};\n\nfunction fullName() {\n  return settings.reverseName\n    ? this.lastName + \" \" + this.firstName()\n    : this.firstName() + \" \" + this.lastName;\n}\n\nfullName.set = function(val) {\n  val = val.split(\" \");\n  var afterSpace = val.pop();\n  var beforeSpace = val.join(\" \");\n  // Make observable change to dependent properties\n  $.observable(this).setProperty({\n    lastName: settings.reverseName ? beforeSpace : afterSpace,\n    firstName: settings.reverseName ? afterSpace : beforeSpace\n  });\n};\n\nfullName.depends = [\"firstName\", \"lastName\", \"~settings.reverseName\" ];\n\nvar settings = {\n reverseName: false\n};\n\nvar data = {\n  person: {\n    _firstName: \"Jo\",\n    lastName: \"Blow\",\n    firstName: firstName,\n    fullName: fullName\n  }\n};\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", data, {\n  settings: settings\n});",
        "title": "get/set &ndash; depends (with ~settings.reverseName in depends)",
        "height": "110"
      },
      {
        "_type": "para",
        "title": "Declaring dependencies for a computed observable",
        "text": "When setting\n\n```js\nmyObservableFunction.depends = dependencyExpression;\n```\n\nfor a computed observable, the `dependencyExpression` can be a string, such as:\n- `\"firstName\"`, or<br/>\n- `\"manager^address*\"`\n\nor an array of strings (or objects and strings), such as:\n- `[\"firstName\", \"lastName\", \"~settings.reverseName\"]` or<br/>\n- `[\"firstName\", \"lastName\", settings, \"reverseName\"]`\n\n(The last two are equivalent, assuming the `settings` object is the helper object referenced declaratively using `\"~settings\"`.)\n\nIn fact setting `depends` to an array is equivalent to providing the corresponding arguments to `$.observe()`. So all the examples of [$.observe()](#observe@paths) (including with [deep paths](#observe@deep)) can also be used in equivalent `depends` expressions. For example you might have:\n\n```js\nmyObservableFn.depends = [person1, \"lastName\", \"address^*\", person2, \"firstName\", person3, \"*\", \"address.*\"];\n```\n\n-- which is similar to the example #6 in the [$.observe() examples](#observe@paths) -- and includes a deep path `\"address^*\"` (listening to changes in the `address` property of the `person1` object and changes to any properties of the `person1.address` object).\n\nIn addition, `depends` expressions can be functions. \n\nA *depends* function can return strings or arrays. It is called during initial binding of the link expression, and the `this` pointer (and `data` argument) is the object instance (e.g. `person` object in the case of a computed `person.fullName()`):\n\n```js\nmyObservableFn.depends = function(data) {\n  return [data.person1, \"lastName\", \"address.*\", data.person2, \"firstName\"];\n}\n```\n\n-- and/or can use a callback:\n\n```js\nmyObservableFn.depends = function(data, callback) {\n  $.observable(data.person).observeAll(callback);\n  // (In addition to calling the callback, can optionally also return a string or array)\n}\n```\n\nNote that this last example, (using `observeAll` to call the callback) is a *programmatic* approach which is actually equivalent to the following *declarative* version with the `**` wild card:\n```js\nmyObservableFn.depends = \"person.**\";\n```\n\n(See the [next sample](#computed@depends-all))\n\n",
        "anchor": "depends"
      },
      {
        "_type": "para",
        "title": "Sample: Using the <b>**</b> wild card in <b>depends</b>",
        "text": "In the next sample we'll use the `**` wild card in a `depends` declaration for a computed observable that tracks the running total of some items in a shopping cart.\n\nThis sample also illustrates [top-level data-linking](#jsv.toplink-true), and declarative events.\n\n(For more information see the same sample here: [samples/computed/shopping-cart](#samples/computed/shopping-cart))",
        "anchor": "depends-all"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "Here we define a `totalAmount()` computed observable for calculating the total amount for an array of `items` in a shopping cart.\n\n```js\nfunction totalAmount() {\n  ...\n  while (...) {\n    amount += this.items[l].price * this.items[l].quantity;\n  }\n  return amount;\n}\n\nvar cart = {\n  total: totalAmount,\n  ...\n  items: [...]\n}\n```\n\nThe total is rendered using:\n\n```jsr\n<span colspan=\"2\" data-link=\"total()\"></span>\n```\n\n(In this example we are using [top-level data-linking](#top).)\n"
          },
          {
            "_type": "para",
            "title": "<b>depends</b> with <b>**</b>",
            "text": "`totalAmount()` needs to update when the `items` array changes, and also when the `quantity` or `price` property of an `item` in the array changes.\n\nWe can achieve that very easily by declaring the `items.**` path as a dependency:\n\n```js\ntotalAmount.depends = \"items.**\";\n```"
          }
        ],
        "html": "",
        "code": "",
        "url": "samples/computed/shopping-cart/top-level",
        "height": "250",
        "title": "Shopping cart"
      },
      {
        "_type": "para",
        "title": "Observing computed observables",
        "text": "`depends` declarations and `$.observe()` calls both use paths such as `\"manager.name\"` for listening to changes in the `manager.name`, as in:\n\n```js\ngetNamesList.depends = [\"manager.name\", ...]; // Dependency declaration for team.getNamesList()\n```\n\n```js\n$.observe(team, \"manager.name\", myHandler); // Observe changes in manager.name\n```\n\nIf `manager.fullName()` is a *computed observable* then the corresponding path (for listening to changes in the `manager.fullName()`) is `\"manager.fullName\"` (*without parens*) -- as in:\n\n```js\ngetNamesList.depends = [\"manager.fullName\", ...]; // Dependency declaration for team.getNamesList()\n```\n\n```js\n$.observe(team, \"manager.fullName\", myHandler); // Observe changes in manager.fullName()\n```\n\nSee [`$.observe()` with computed observables](#observe@computed)."
      }
    ]
  },
  "namespaces": {
    "title": "Event binding namespaces (advanced)",
    "path": "",
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "**Note:** This feature will not be needed for simple applications -- but can be useful for certain large scale or complex apps.\n\n`$.observe()`, `$.unobserve()`, `.observeAll()`, `.unobserveAll()`, *observable object* (`.setProperty()`) and *observable array* (`.insert()` etc.),  are all implemented using jQuery event framework, and they support the use of *namespaces* in the same way that jQuery [`.on()`](http://api.jquery.com/on/), [`.off()`](http://api.jquery.com/on/) and [`.trigger()`](http://api.jquery.com/trigger/) support namespaces.\n\nAs with the jQuery API, a namespace is a string -- generally one or more dot-separated tokens, such as `\"module1.module2\"`. More than one namespace can be provided, with white-space separation -- as in `\"case1.outer case2\"` -- in order to create more than one event binding with different namespaces."
      },
      {
        "_type": "para",
        "title": "$.observe() handler bindings &ndash; with namespaces",
        "text": "An optional `namespace` parameter can be included, before all the other parameters in the [`$.observe(...)`](#observe) call:\n\n```js\n$.observe(namespace, myObjectOrArray, ..., myHandler);\n```\n\nThis will associate the chosen namespace with the propertyChange/arrayChange event binding.\n\nExamples:\n\n```js\n$.observe(\"case1\", person, \"name\", myHandler); \n// binds a propertyChange.case1 event on person, for myHandler\n\n$.observe(\"scenario1\", person, \"address\", myHandler);\n// binds a propertyChange.scenario1 event on person, for myHandler\n\n$.observe(\"case1.scenario2\", myArray, myHandler);\n// binds an arrayChange.case1.scenario2 event on myArray, for myHandler\n\n$.observe(\"case1.scenario2\", myArray, team, \"manager.name\", myHandler);\n// binds an arrayChange.case1.scenario2 event on myArray, for myHandler\n// binds a propertyChange.case1.scenario2 event on team, for myHandler\n```\n\n*White-space-separated namespaces:*\n\nA `observe()` call associated with multiple namespaces such as `\"case1.scenario2 scenario1\"` will add event bindings for each namespace:\n\n```js\n$.observe(\"case1.scenario2 scenario1\", myArray, team, \"manager.name\", myHandler);\n// binds an arrayChange.case1.scenario2 event on myArray, for myHandler\n// binds an arrayChange.scenario1 event on myArray, for myHandler\n// binds a propertyChange.case1.scenario2 event on person.manager, for myHandler\n// binds a propertyChange.scenario1 event on person.manager, for myHandler\n```"
      },
      {
        "_type": "para",
        "title": ".observeAll() handler bindings &ndash; with namespaces",
        "text": "An optional `namespace` parameter can be included before the `objectOrArray` parameter in the `$.observable(objectOrArray).observeAll(handler)` call:\n\n```js\n$.observable(namespace, myObjectOrArray).observeAll(myHandler);\n```\n\nThis will associate the chosen namespace with all the propertyChange/arrayChange event bindings that are created by `observeAll()`.\n\nExample:\n\n```js\n$.observable(\"case1.scenario2\", team).observeAll(myHandler);\n// binds propertyChange.case1.scenario2/arrayChange.case1.scenario2 events\n// on objects/arrays under team, for myHandler\n\n$.observable(\"case1 case2\", team).observeAll(myHandler); // (multiple bindings)\n// binds propertyChange.case1/arrayChange.case1 events on objects/arrays under team, for myHandler\n// and propertyChange.case2/arrayChange.case2 events on objects/arrays under team, for myHandler\n```\n\nAs with `observe()`, an `observeAll()` call associated with multiple (white-space separated) namespaces such as `\"case1.scenario2 scenario1\"` will add event bindings for each namespace."
      },
      {
        "_type": "para",
        "title": "$.observable(...).setProperty(...) with namespaces",
        "text": "An optional `namespace` parameter can be included before the `object` parameter in the `$.observable(object).setProperty(...)` call:\n\n```js\n$.observable(namespace, myObject).setProperty(...);\n```\n\nThis will only trigger *observable change* handlers that are ***associated with the same namespace***.\n\nExample:\n\n```js\n$.observable(\"case1.scenario2\", person).setProperty(\"name\", \"newName\");\n// triggers only handlers that are associated with the `\"case1.scenario2\"` namespace tokens.\n```\n\nThe above namespaced `setProperty` call will trigger the `myHandler1`, `myHandler2` and `myHandler3` bindings below, but not the `myHandler5`, `myHandler5` or `myHandler6` bindings:\n\n```js \n$.observe(\"case1.scenario2\", person, \"name\", myHandler1);       // Triggered\n$.observe(\"scenario2.foo.case1\", person, \"name\", myHandler2);   // Triggered\n$.observable(\"scenario2.case1\", person).observeAll(myHandler3); // Triggered \n\n$.observe(person, \"name\", myHandler4);                          // Not triggered \n$.observe(\"scenario2\", person, \"name\", myHandler5);             // Not triggered\n$.observable(person).observeAll(myHandler6);                    // Not triggered\n```"
      },
      {
        "_type": "para",
        "title": "$.observable(...).insert(...) etc. &ndash; with namespaces",
        "text": "Just as with `propertyChange` operations on *observable objects *(above), *observable array* operations: `insert()`, `remove()`, `move()` and `refresh()`can also be scoped to namespaces.\n\nAn optional `namespace` parameter can be included before the `array` parameter in the `$.observable(array).insert(...)` call:\n\n```js\n$.observable(namespace, myObject).insert(...);\n```\n\nand similarly for the other operations, such as `remove()`.\n\nThis will only trigger *observable change* handlers that are ***associated with the same namespace***.\n\nExample:\n\n```js\n$.observable(\"case1.scenario2\", phones).insert(newPhone);\n// triggers only handlers that are associated with the `\"case1.scenario2\"` namespace tokens.\n```\n\nThe above namespaced `insert` call will trigger the `myHandler1`, `myHandler2` and `myHandler3` bindings below, but not the `myHandler5`, `myHandler5` or `myHandler6` bindings:\n\n```js \n$.observe(\"case1.scenario2\", phones, myHandler1);               // Triggered\n$.observe(\"scenario2.foo.case1\", phones, myHandler2);           // Triggered\n$.observable(\"scenario2.case1\", person).observeAll(myHandler3); // Triggered - for person.phones \n\n$.observe(phones, myHandler4);                                  // Not triggered \n$.observe(\"scenario2\", phones, myHandler5);                     // Not triggered\n$.observable(person).observeAll(myHandler6);                    // Not triggered\n```"
      },
      {
        "_type": "para",
        "title": "Accessing namespaces in the 'observable change' handler",
        "text": "\nWhen the *observable change* handler is triggered, the associated namespace can be accessed as:\n\n```js\nfunction myHandler(ev, eventArgs) {\n  // ev.data.ns - the namespace used in the handler binding\n  // ev.namespace - the namespace used in the `$.observable(...).setProperty/insert/remove/move/refresh` call\n}\n```",
        "anchor": "handler"
      },
      {
        "_type": "para",
        "title": "Using namespaces for selective removal of bindings",
        "text": "Namespaces can be very useful for removing a specific collection of bindings in a single call, filtering by namespace tokens.\n\n```js\n$.unobserve(namespace, ...);\n```\n\nThis will only remove handler bindings that are ***associated with the same namespace***.\n\nFor example any of the following calls:\n\n```js\n$.unobserve(\"case1.scenario2\", person, \"name\", myHandler);\n$.unobserve(\"case1.scenario2\", person, \"name\");\n$.unobserve(\"case1.scenario2\", person);\n$.unobserve(\"case1.scenario2\");\n$.observable(\"case1.scenario2\", person).unobserveAll(myHandler);\n$.observable(\"case1.scenario2\", person).unobserveAll();\n```\n\nwill remove all of the following bindings:\n\n```js \n$.observe(\"case1.scenario2\", person, \"name\", myHandler);       // Removed\n$.observe(\"scenario2.foo.case1\", person, \"name\", myHandler);   // Removed\n$.observable(\"scenario2.case1\", person).observeAll(myHandler); // Removed \n```\n\nbut will not remove the following bindings:\n\n```js \n$.observe(person, \"name\", myHandler);                          // Not removed \n$.observe(\"scenario2\", person, \"name\", myHandler);             // Not removed\n$.observable(person).observeAll(myHandler);                    // Not removed\n```\n\n*White-space-separated namespaces:*\n\nAn `unobserve()` or `unobserveAll()` call associated with multiple namespaces such as:\n\n```js\n$.unobserve(\"case1.scenario2 scenario1\", ...);\n```\n\nwill remove both `\"case1.scenario2\"` handler bindings and `\"scenario1\"` handler bindings.  "
      }
    ]
  },
  "jsoadvanced": {
    "title": "JsObservable &ndash; advanced topics",
    "path": "",
    "sections": [
      {
        "_type": "links",
        "title": "",
        "links": [],
        "topics": [
          {
            "hash": "namespaces",
            "label": "Namespaces"
          }
        ]
      }
    ]
  },
  "removeprop": {
    "title": "Making observable changes: $.observable(object).removeProperty()",
    "path": "",
    "sections": [
      {
        "_type": "api",
        "typeLabel": "API:",
        "title": "$.observable(myObject).removeProperty(path)",
        "name": "removeProperty",
        "object": "$.observable(object)",
        "method": true,
        "returns": "this",
        "signatures": [
          {
            "_type": "signature",
            "title": "",
            "params": [
              {
                "_type": "param",
                "name": "path",
                "type": "string",
                "optional": false,
                "description": "Path (e.g. \"address.street\") or name (e.g. \"firstName\") for the property"
              }
            ],
            "args": [],
            "sections": [],
            "example": "$.observable(book).removeProperty(\"title\");",
            "description": "Remove an object property"
          }
        ],
        "description": "Remove an object property (as an observable change)",
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "sample": "sample",
          "links": "links"
        }
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is a sample where we remove a `ZIP` property from `person.address`. We use both a <a href=\"#linked-tag-syntax\">data-linked template</a> and an event handler for <a href=\"#onpropchange\">propertyChange</a> to respond to the observable property changes:\n\n"
      },
      {
        "_type": "sample",
        "typeLabel": "Sample:",
        "codetabs": [],
        "sectionTypes": {
          "para": "para",
          "data": "data",
          "template": "template",
          "code": "code",
          "links": "links"
        },
        "sections": [
          {
            "_type": "template",
            "title": "",
            "markup": "<input data-link=\"address.ZIP\" /><br/><br/>\n{^{if address.ZIP === undefined}}\n  <b>ZIP is undefined</b>\n{{else}}\n  <b>ZIP:</b> {^{:address.ZIP}}\n{{/if}} "
          },
          {
            "_type": "code",
            "title": "Remove property",
            "code": "$.observable(person).removeProperty(\"address.ZIP\");\n\n"
          },
          {
            "_type": "code",
            "title": "Listen to changes",
            "code": "$(person.address).on(\"propertyChange\", changeHandler);\n\n// Alternatively we could have used: $.observe(person, \"address.ZIP\", changeHandler);"
          }
        ],
        "html": "<link href=\"change-log.css\" rel=\"stylesheet\"/>\n\n<div class=\"left\">\n  <button id=\"set\">Set ZIP</button>\n  <button id=\"remove\">Remove ZIP</button>\n  <div id=\"result\"></div>\n</div>\n\n<div class=\"logBox\">\n  <label>Changes:</label>\n  <div id=\"messages\"></div>\n</div>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <input data-link=\"address.ZIP\" /><br/><br/>\n  {^{if address.ZIP === undefined}}\n    <b>ZIP is undefined</b>\n  {{else}}\n    <b>ZIP:</b> {^{:address.ZIP}}\n  {{/if}}  \n</script>",
        "code": "var person = {\n  address: {\n    street: \"1st Ave\",\n    ZIP: \"00000\"\n  }\n};\n\n$(\"#set\").on(\"click\", function() {\n  $.observable(person).setProperty(\"address.ZIP\", \"33444\");\n});\n\n$(\"#remove\").on(\"click\", function() {\n  $.observable(person).removeProperty(\"address.ZIP\");\n});\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\n$(person.address).on(\"propertyChange\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = '' + eventArgs.path + ': ' + (eventArgs.value === undefined ? 'undefined' : '\"' + eventArgs.value + '\"');\n  $(\"#messages\").append(message + \"<br/>\");\n}",
        "title": "Removing a property",
        "height": "130"
      },
      {
        "_type": "links",
        "title": "See also:",
        "links": [],
        "topics": [
          {
            "_type": "topic",
            "hash": "setprop",
            "label": "$.observable(object).setProperty()"
          }
        ]
      }
    ]
  }
};