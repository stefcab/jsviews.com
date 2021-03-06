﻿var content = $.views.documentation.content;

content.find.jsvapi = content.useStorage && $.parseJSON(localStorage.getItem("JsViewsDocTopics/find/jsvapi")) ||
{
  "jsvapi": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "See JsViews Quickstart for an introductory overview.\n"
      },
      {
        "_type": "links",
        "title": "Topics:",
        "text": "Topics:\n"
      }
    ]
  },
  "jsvtags": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Any JsRender template can be used with JsViews. But in JsViews, templates are “data-linked” (think data-bound). Data-binding is optionally turned on within a data-linked template by data-linking individual tags and elements:\n"
      },
      {
        "_type": "para",
        "title": "JsViews: Using data-linked tags and elements",
        "text": "JsViews: Using data-linked tags and elements\nCalling the render() method works just the same within JsViews as it does if only JsRender is loaded. But alternatively you can use the link() method – which will first render and then add data binding (data-link the template).\nIf you have data-linked your template by calling the link() method, then you can continue to use the same JsRender template tags as before. But now you optionally make any tag in the template data-linked, by replacing the {{... of the opening tag by {^{..., as in:\n{^{for people}}\n  {^{:name}}\n{{/for}}\n\nIn addition, you can data-link the HTML elements in your template, as in:\n<input data-link=\"name\" />\n<div data-link=\"css-color{:color} {:name}\"></div>\n\nSee Data-linked template syntax for details…\n"
      },
      {
        "_type": "para",
        "title": "JsRender tags (with data-linking)",
        "text": "JsRender tags (with data-linking)\nThe following topics give examples and details for data-linking each of the built-in JsRender template tags:\nTags without content:\n\n{^{: ...}} (Evaluate)\n{^{> ...}} (HTML encode)\n\nBlock tags:\n\n{^{include ...}} (Template composition – partials)\n{^{for ...}} (Template composition, with iteration over arrays)\n{^{props ...}} (Iteration over properties of an object)\n{^{if ...}} (Conditional inclusion)\n{^{mytag ...}} (Custom tag controls)\n\nBlock tags (JsViews only):\n\n{^{radiogroup ...}} (Radio button group)\n{^{on ...}} (Button, or event binding)\n\nAlternative content blocks:\n\n{{else ...}} (Content block separator)\n\nCreating your own tags (custom tag controls):\n\nCustom tags\n\n"
      },
      {
        "_type": "para",
        "title": "In JsViews your template must be well-formed:",
        "text": "In JsViews your template must be well-formed:\nJsViews imposes some ‘well-formed’ constraints on templates which do not apply if you are only using JsRender. This is because JsRender is string-based, and is not ‘aware’ of the HTML structure, whereas JsViews is ‘HTML-aware’ in order to provide element-based data-binding’\nIn JsRender you have a lot of freedom. You can even do this:\n"
      },
      {
        "_type": "sample",
        "title": "Badly-formed template &ndash; but OK in JsRender!",
        "text": "Badly-formed template – but OK in JsRender!\n\n\n\n  <tr>\n    <td \n      {{if lastName}}\n        >{{:firstName}}</td><td>{{:lastName}}\n      {{else}}\n        colspan=\"2\">{{:firstName}}\n      {{/if}}\n    </td>\n  </tr>\n\nvar myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n  {\n    firstName: \"Jeff\"\n  },\n  {\n    firstName: \"Xavier\",\n    lastName: \"Prieto\"\n  }\n];\n\nvar html = myTemplate.render(people);\n\n$(\"#peopleList\").html(html);\n\n{{if}} tag blocks wrap part of an HTML <td> tag\n\n{{:firstName}}{{:lastName}}\n  {{else}}\n    colspan=\"2\">{{:firstName}}\n  {{/if}}\n\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "That works because JsRender (using pure string-based rendering) doesn’t mind how you mix your JsRender tag hierarchy with the HTML tag markup.\n"
      },
      {
        "_type": "para",
        "title": "Rules for a well-formed template in JsViews:",
        "text": "Rules for a well-formed template in JsViews:\nWith JsViews, it is different. Here are the rules of what is valid, or invalid, within a JsViews template:\n\nJsRender template tags which are outside HTML elements, or fully within the element content of an HTML element can remain unchanged in a JsViews template. They will work correctly. They can optionally be data-linked by simply adding a ^ character (so that for example a {{for}} tag becomes a data-linked {^{for}} tag) – and in that case the rendered content will change dynamically whenever the bound data changes ‘observably’.\nBut tags which are within the markup of the actual HTML opening tag itself, whether placed between attributes, or spanning attributes, or within the attribute content (the text value of the attribute), will not be valid in a JsViews template.\nSimilarly, tags which wrap opening or closing tag in such a way as to produce ‘mal-formed HTML’ will not be valid.\nIn fact a valid JsViews template will have the tree hierarchy of nested HTML tags and nested template tags combining together, as it were, as a single well-formed tree.\nIn each of the invalid scenarios mentioned above, the JsRender tags needs to be replaced by corresponding data-linked element syntax. See Data-linked template syntax for details.\n\n"
      }
    ]
  },
  "jsvlinktmpl": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The link(container, data, helpersOrContext) method is similar to the render(data, helpersOrContext) method, but in addition to rendering the template, it also inserts the rendered output as content of the target HTML container element, and then data-links (data-binds to observable data) the HTML content to the underlying data.\nThe link(container, data, helpersOrContext) method takes as parameters the target HTML container element (or jQuery selector), the data (used as the ‘data context’ during the rendering and linking), and optionally additional metadata or contextual helpers. It returns a jQuery object corresponding to the container element.\nThere are two ways of calling the link() method:\n\nIf you have a reference to the template object – myTmpl, call myTmpl.link(…)\nIf you have registered the template by name – \"myTmpl\", call $.link.myTmpl(…)\n\n"
      },
      {
        "_type": "links",
        "title": "Links:",
        "text": "Links:\n"
      }
    ]
  },
  "jsvtmpllink": {
    "sections": [
      {
        "_type": "para",
        "title": "myTmpl.link()",
        "text": "myTmpl.link()\nIf myTmpl is the compiled template object for your template, you can render and data-link it (data-bind to underlying observable data) using the myTmpl.link() method – which takes a container element (or jQuery selector) and a data object or array (as well as an optional helpersOrContext object).\nTo get a template object from a template string, a template declared in a script block, or a previously registered named template, see $.templates().\n"
      },
      {
        "_type": "api",
        "title": "template.link(container, data)",
        "text": "template.link(container, data)\nRender and link template against data, under a container element\nRender and link template against data, as content of container element\n\nmyTmpl.link(\"#container\", myData);\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Passing an object to the link() method.\n— The template is rendered once, with the object as data context:\n"
      },
      {
        "_type": "sample",
        "title": "template.link(object):",
        "text": "template.link(object):\n\n\n\n  <tr>\n    <td>{^{:name}}</td>\n    <td><input data-link=\"name\" /></td>\n  </tr>\n\nvar myTmpl = $.templates(\"#personTmpl\");\n\nvar person = {\n    name: \"Adriana\"\n  };\n\nvar html = myTmpl.link(\"#person\", person);\n\n<td>{^{:name}}</td>\n<td><input data-link=\"name\" /></td>\n\nvar myTmpl = $.templates(\"#personTmpl\");\n\nmyTmpl.link(\"#person\", person);\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Passing an array to the link() method.\n— The template is rendered once for each item in the array:\n"
      },
      {
        "_type": "sample",
        "title": "template.link(array):",
        "text": "template.link(array):\nAdd person\n\n\n\n\n  <tr>\n    <td>{^{:name}}</td>\n    <td><input data-link=\"name\" /></td>\n  </tr>\n\nvar myTmpl = $.templates(\"#personTmpl\");\n\nvar people = [\n  {\n    name: \"Adriana\"\n  },\n  {\n    name: \"Robert\"\n  }\n];\n\nmyTmpl.link(\"#peopleList\", people);\n\n$(\"#add\").on(\"click\", function() {\n  $.observable(people).insert({\n    name: \"name\"\n  });\n});\n\nmyTmpl.link(\"#peopleList\", people);\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Passing helpers to the link() method.\n"
      },
      {
        "_type": "api",
        "title": "template.link(container, data, helpersOrContext)",
        "text": "template.link(container, data, helpersOrContext)\nRender and link template against data, under a container element, along with helper objects or context\nRender and link template against data (as content of container element) and pass in helpers\n\nmyTmpl.link(\"#container\", myData, myHelpers);\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "You can pass in any JavaScript type (object, string, number, function…) as helpers on the helpersOrContext object, and use them as metadata, or as helper functions for formatting etc.\nNote: By passing in helpers in this way, you are making them specific to this render call. Alternatively, you can declare helpers globally, – and you can also declare helpers that are private to a specific template. See Registering helpers: $.views.helpers() for details…\nWithin the template, helpers (whether global, or passed in to the render() method) are accessed by helper paths: ~keyName....\nFor example you might pass in an object with some utility functions:\nvar myHelpers = {\n  util: {\n    split: function(val, part) {...},\n    ...\n  },\n  ...\n};\n\nvar html = myTmpl.render(myData, myHelpers);\n\n– and access them in the template using a helper path such as:\n{{:~util.split(fullName, 0)}}\n\nSee Registering helpers\n"
      },
      {
        "_type": "sample",
        "title": "template.link(object, myHelpers):",
        "text": "template.link(object, myHelpers):\n\n\n\n  <tr>\n    <td data-link=\"css-color{:~color} {:~format(name)}\"></td>\n    <td><input data-link=\"name\" /></td>\n  </tr>\n\nfunction toUpper(val) { return val.toUpperCase(); }\n\nvar myTmpl = $.templates(\"#personTmpl\");\n\nvar person = {\n    name: \"Adriana\"\n  };\n\nvar myHelpers = {color: \"red\", format: toUpper};\n\nmyTmpl.link(\"#person\", person, myHelpers);\nfunction toUpper(val) {...}\n\nvar myHelpers = {color: \"red\", format: toUpper};\n\nmyTmpl.link(\"#person\", person, myHelpers);\n\n<td data-link=\"css-color{:~color} {:~format(name)}\"></td>\n\nClick Try it and change the color to \"green\"…\n\n"
      },
      {
        "_type": "para",
        "title": "Passing an array to link(), but without iteration.",
        "text": "Passing an array to link(), but without iteration.\nWhen rendering and linking an array, an additional optional boolean parameter, true, can be passed to the link() method, in order to prevent iteration.\n"
      },
      {
        "_type": "api",
        "title": "template.link(container, data, helpersOrContext, noIteration)",
        "text": "template.link(container, data, helpersOrContext, noIteration)\nRender and link template against data, under a container element, along with helpers/context. Determine iteration behavior for arrays\nRender and link template against data (as content of container element) and pass in helpers. Determine iteration behavior for arrays\n\nmyTmpl.link(\"#container\", data, helpers, true);\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "By passing in true as the fourth ‘noIteration’ parameter, the template renders just once, with the array itself as current data, rather than rendering once for each item in the array.\nWithin the template, {^{for}} (or equivalently {^{for #data}}) can be used to iterate over the array, as in the following example:\n"
      },
      {
        "_type": "sample",
        "title": "template.link(container, array, helpers, noIteration):",
        "text": "template.link(container, array, helpers, noIteration):\nAdd person\n\n\n\n\n  <table>\n    <thead><tr><th colspan=\"2\">\n      {^{:#data.length}} people\n    </th></tr></thead>\n    <tbody>\n      {^{for}}\n        <tr>\n          <td>{^{:name}}</td><td><input data-link=\"name\" /></td>\n        </tr>\n      {{/for}}\n    </tbody>\n  </table>\n\nvar myTmpl = $.templates(\"#personTmpl\");\n\nvar people = [\n  {\n    name: \"Adriana\"\n  },\n  {\n    name: \"Robert\"\n  }\n];\n\nmyTmpl.link(\"#peopleList\", people, null, true);\n\n$(\"#add\").on(\"click\", function() {\n  $.observable(people).insert({\n    name: \"name\"\n  });\n});\n\nCode:\nmyTmpl.link(\"#peopleList\", people, null, true);\n\nTemplate:\n<table>\n  <thead><tr><th colspan=\"2\">\n    {^{:#data.length}} people\n  </th></tr></thead>\n  <tbody>\n    {^{for}}\n      <tr>\n        <td>{^{:name}}</td><td><input data-link=\"name\" /></td>\n      </tr>\n    {{/for}}\n  </tbody>\n</table>\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "d.render": {
    "sections": [
      {
        "_type": "para",
        "title": "$.render.myTmpl()",
        "text": "$.render.myTmpl()\nIf a template has been registered as a named template:\n$.templates(\"myTmpl\", \"#personTmpl\");\n\nor\n$.templates(\"myTmpl\", \"some markup string\");\n\n…then you can call the render() method of the template without needing to hold on to the compiled template object returned from $.templates(...).\nJust call $.render.myTmpl(...), or $.render[\"myTmpl\"](...)\n(Note: there is also an alternative syntax for rendering a named template: $.templates.myTmpl(...);)\n"
      },
      {
        "_type": "api",
        "title": "$.render.myTmpl(data, helpersOrContext)",
        "text": "$.render.myTmpl(data, helpersOrContext)\nRender a named template against data, along with helper objects or context, and return a string\nRender template against data, and pass in helpers\n\nvar html = $.render.myTmpl(myData, myHelpers);\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:\n"
      },
      {
        "_type": "sample",
        "title": "$.render.personTmpl(...):",
        "text": "$.render.personTmpl(...):\n\n\n\n  <tr>\n    <td style=\"color:{{:~color}};\">\n      {{:~format(name)}}\n    </td>\n  </tr>\n\nfunction toUpper(val) { return val.toUpperCase(); }\n\n$.templates(\"personTmpl\", \"#personTemplate\");\n\nvar person = {\n    name: \"Adriana\"\n  };\n\nvar myHelpers = {color: \"red\", format: toUpper};\n\nvar html = $.render.personTmpl(person, myHelpers);\n\n$(\"#person\").html(html);\n\n$.templates(\"personTmpl\", \"#personTemplate\");\n\nvar html = $.render.personTmpl(person);\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsv.d.link": {
    "sections": [
      {
        "_type": "para",
        "title": "$.link.myTmpl()",
        "text": "$.link.myTmpl()\nIf a template has been registered as a named template:\n$.templates(\"myTmpl\", \"#personTmpl\");\n\n…then you can call the link() method of the template without needing to hold on to the compiled template object returned from $.templates(...).\nJust call $.link.myTmpl(...), or $.link[\"myTmpl\"](...)\n"
      },
      {
        "_type": "api",
        "title": "$.link.myTmpl(container, data, helpersOrContext)",
        "text": "$.link.myTmpl(container, data, helpersOrContext)\nRender and link a named template against data, along with helper objects or context\nRender and link template against data (as content of a container element) and pass in helpers\n\n$.link.myTmpl(\"#container\", myData, myHelpers);\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:\n"
      },
      {
        "_type": "sample",
        "title": "$.link.personTmpl(...):",
        "text": "$.link.personTmpl(...):\n\n\n\n  <tr>\n    <td data-link=\"css-color{:~color} {:~format(name)}\"></td>\n    <td><input data-link=\"name\" /></td>\n  </tr>\n\nvar person = {\n    name: \"Adriana\"\n  };\n\nfunction toUpper(val) { return val.toUpperCase(); }\n\n$.templates(\"personTmpl\", \"#personTemplate\");\n\nvar myHelpers = {color: \"red\", format: toUpper};\n\n$.link.personTmpl(\"#person\", person, myHelpers);\n$.templates(\"personTmpl\", \"#personTemplate\");\n\nvar myHelpers = {color: \"red\", format: toUpper};\n\n$.link.personTmpl(\"#person\", person, myHelpers);\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsvunlink": {
    "sections": [
      {
        "_type": "links",
        "title": "",
        "text": ""
      }
    ]
  },
  "jsvtmplunlink": {
    "sections": []
  },
  "jsv.d.unlink": {
    "sections": []
  },
  "jsv.db.unlink": {
    "sections": []
  },
  "$view": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Each instance of a rendered template or a template block tag is associated with a JsViews “view” object.\nUse $.view() to get from the rendered HTML back to the data.\n"
      },
      {
        "_type": "links",
        "title": "",
        "text": ""
      }
    ]
  },
  "jsv.d.view": {
    "sections": [
      {
        "_type": "para",
        "title": "var view = $.view(elem);",
        "text": "var view = $.view(elem);\nEach instance of a rendered template or a template block tag is associated with a JsViews \"view\" object.\nViews provide information on how the underlying data objects map to the rendered UI.\nFrom UI back to data:\nUse $.view(elemOrSelector) to get from a DOM element to the corresponding view object for that part of the rendered content.\nFrom the view you can get to the underlying data, the index, etc.\n"
      },
      {
        "_type": "sample",
        "title": "Getting to the data: $.view(elem)",
        "text": "Getting to the data: $.view(elem)\n\n\n\n  {^{for people}}\n    <tr>\n      <td>{^{:name}}</td>\n      <td>\n        <button class=\"changeBtn\">Change</button>\n      </td>\n    </tr>\n  {{/for}}\n\nvar myTemplate = $.templates(\"#peopleTmpl\");\n\nvar app = {\n    people: [{name: \"Adriana\"}, {name: \"Robert\"}]\n  };\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\".changeBtn\").on(\"click\", function() {\n  // From the clicked HTML element ('this'), get the view object\n  var view = $.view(this);\n\n  // The 'person' data object for clicked button\n  var person = view.data;\n\n  // The index of this 'item view'. (Equals index of person in people array)\n  var index = view.index;\n\n  // Change the person.name\n  $.observable(person).setProperty(\"name\", person.name + \" \" + index);\n});\n{^{for people}}\n  ...\n  <button class=\"changeBtn\">Change</button>\n  ...\n{{/for}}\n\nClick-handler code for Change button:\n$(\".changeBtn\").on(\"click\", function() {\n  var view = $.view(this); // From the clicked HTML element ('this'), get the view object\n  var person = view.data;  // The 'person' data object for clicked button\n  var index = view.index;  // The index of this 'item view'. (Equals index of person in people array)\n  $.observable(person).setProperty(\"name\", person.name + \" \" + index); // Change the person.name\n});\n\n\n"
      },
      {
        "_type": "para",
        "title": "Normal syntax:",
        "text": "Normal syntax:\n"
      },
      {
        "_type": "api",
        "title": "$.view(elementOrSelector)",
        "text": "$.view(elementOrSelector)\nFrom an HTML element or a jQuery selector, get the corresponding contextual view object within the view hierarchy  \nGet the contextual view object for an HTML element, or selector\n\nvar view = $.view(\"#myElement\");\n\n"
      },
      {
        "_type": "para",
        "title": "Alternative syntax:",
        "text": "Alternative syntax:\nIf you already have a jQuery object $(elementOrSelector), then it can be convenient to use the following alternative syntax:\nvar view = $(elementOrSelector).view();\n\nThis can be convenient in some scenarios, for example if you want to call another jQuery method on the same target element or selector, before getting the view. You can even chain the calls as in: var view = $(elementOrSelector).doSomething().view();\n"
      },
      {
        "_type": "api",
        "title": "$(elementOrSelector).view()",
        "text": "$(elementOrSelector).view()\nFrom an HTML element or a jQuery selector, get the corresponding contextual view object within the view hierarchy  \nGet the contextual view object for an HTML element, or selector\n\nvar view = $(\"#myElement\").view();\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsv.db.view": {
    "sections": []
  },
  "jsvcompiletmpl": {
    "sections": []
  },
  "jsvregister": {
    "sections": [
      {
        "_type": "links",
        "title": "",
        "text": ""
      }
    ]
  },
  "jsvconverters": {
    "sections": []
  },
  "jsvtemplatetags": {
    "sections": []
  },
  "jsvhelpers": {
    "sections": []
  },
  "jsvobjects": {
    "sections": [
      {
        "_type": "links",
        "title": "",
        "text": ""
      }
    ]
  },
  "jsvviewsobject": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The $.views object provides access to APIs for creating templates, tags, helpers etc.\n\n$.views.templates(...) – available also as $.templates(...)\nUsed for defining templates – see: Registering templates\n$.views.tags(...)\nUsed for defining custom tags – see: Registering custom tags and JsViews: Custom Tags - Tag Controls\n$.views.converters(...)\nUsed for defining converters – see: Registering converters and JsViews: Helpers and converters\n$.views.helpers(...)\nUsed for defining helpers – see: Registering helpers and JsViews: Helpers and converters\n$.views.viewModels(...)\nUsed for defining View Models – see: Compiled View Models and  JsViews: Compiled View Models\n\nIt also provides access to:\n\n$.views.settings\nUsed for modifying JsViews settings and options – see: Settings\n$.views.map(...)\nUsed for defining custom maps (advanced)\n$.views.jsviews\nProvides the version number of the currently loaded JsViews or JsRender library\n\n"
      }
    ]
  },
  "jsvtemplateobject": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The $.templates() API can be used to obtain a compiled template object:\nvar myTmpl = $.templates(\"#personTmpl\");\n\nThe compiled template object (myTmpl, in the example) provides a number of properties and methods, in particular:\n"
      },
      {
        "_type": "para",
        "title": "The render() method",
        "text": "The render() method\nvar html = myTmpl.render(person);\n\nSee Render a template against data objects or arrays\n"
      },
      {
        "_type": "para",
        "title": "The link() method",
        "text": "The link() method\nmyTmpl.link(\"#peopleList\", people);\n\nSee Render and data-link a template against data objects or arrays\n"
      },
      {
        "_type": "para",
        "title": "The markup property",
        "text": "The markup property\nThe declarative markup string for the template (available whether the template was registered by providing a markup string, or by a script block reference).\nvar test = myTmpl.markup; // \"...{^{:name}} ... <input data-link='name'/>...\"\n\n"
      }
    ]
  },
  "jsvviewobject": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "When using JsViews (i.e. with the .link() method rather than JsRender’s .render() method) the view hierarchy is the same.\n"
      },
      {
        "_type": "para",
        "title": "A <b>view object</b> has the following properties and methods:",
        "text": "A view object has the following properties and methods:\nJsViews – programmatic access only\nThe following methods are available only for programmatic access when using JsViews:\n\nrefresh() method\ncontents() method\nchildTags() method\nnodes() method\nctxPrm() get/set method\n\nBoth JsRender and JsViews (see JsRender view object)\nThe following properties and methods are available when using either JsRender or JsViews:\n\ntype property\ndata property\nparent property\nindex property\ngetIndex() method\nget(type) method\ncontent property\nroot property\nother properties (tmpl, views, ctx, tag)\n\n"
      },
      {
        "_type": "para",
        "title": "Accessing view objects",
        "text": "Accessing view objects\nThe view object can be accessed programmatically in many contexts, such as:\n\nin a click handler (with JsViews) – using $.view(this) to return the view for a given HTML element (this)\nin a helper function, ~myHelper() – where the this pointer is the current view\nin any method of a custom tag – using this.tagCtx.view\n\nIn addition, properties and methods that are available to both JsRender and JsViews (second list above) can also be accessed declaratively in a template using view paths – such as #parent for the view.parent property.\n\nProperties and methods:\n"
      },
      {
        "_type": "para",
        "title": "The refresh() method",
        "text": "The refresh() method\nview.refresh(): refreshes the view, by re-rendering its content.\nThis can be used to update content using modified data or updated helpers.\nIt can be useful for refreshing a view (template block) which renders data without data-linking: {{:model.year}} (or even with data-linking, {^{:model.year}} – if the data has been modified ‘non-observably’, as in: model.year++;).\nview.refresh(); // Refresh the view, using current data values and helpers\n\n"
      },
      {
        "_type": "sample",
        "title": "view.refresh()",
        "text": "view.refresh()\ntable td {padding: 5px;} table {margin-top: 6px;} #incrBtn {margin-bottom: 10px;}\n\n\n\n\n  <button id=\"incrBtn\">Increment year</button>\n  <button id=\"incrObsBtn\">Increment observably</button>\n  <button id=\"incrRefreshBtn\">Increment and refresh</button>\n  <button class=\"refreshBtn\">Refresh All</button><br/>\n  Year: {^{:year}}<br/>\n\n  <table><tbody>\n    {{for people}}\n      <tr>\n        <td><input data-link=\"name\" /></td>\n        <td>Name: {{:name}}</td>  {{!-- no data-linking --}}\n        <td>Age in {{:~root.year}}: {{:age + ~root.year - 2016}} </td>\n        <td><button class=\"refreshBtn\">Refresh</button></td>\n      </tr>\n    {{/for}}\n  </tbody></table>\n\nvar tmpl = $.templates(\"#peopleTmpl\");\n\nvar model = {\n  year: 2016,\n  people: [{name: \"Adriana\", age: 4}, {name: \"Robert\", age: 34}]\n};\n\ntmpl.link(\"#peopleList\", model)\n  .on(\"click\", \"#incrBtn\", function() {\n    model.year++; // non-observable change\n  })\n  .on(\"click\", \"#incrObsBtn\", function() {\n    $.observable(model).setProperty(\"year\", model.year + 1);\n  })\n  .on(\"click\", \"#incrRefreshBtn\", function() {\n    model.year++; // non-observable change\n    $.view(this).refresh();\n  })\n  .on(\"click\", \".refreshBtn\", function() {\n    $.view(this).refresh();\n  });\nTemplate: (No data-linking except <input data-link=\"name\" />)\n{{for people}}\n  ...\n  <input data-link=\"name\" />\n  ...\n  {{:name}} ... {{:~root.year}} ... {{:age + ~root.year - 2016}}\n  ...\n  <button class=\"refreshBtn\">Refresh</button>\n{{/for}}\n\nCode:\n.on(\"click\", \"#incrBtn\", function() {\n  model.year++; // non-observable change\n})\n.on(\"click\", \".refreshBtn\", function() {\n  $.view(this).refresh(); // Refresh view, with updated values...\n});\n\n\n"
      },
      {
        "_type": "para",
        "title": "The contents() method",
        "text": "The contents() method\nview.contents(…): returns a jQuery object of view content nodes – optionally filtered by a jQuery selector.\nvar jqMyClassElem = view.contents(true, \".myClass\"); // jQuery object for element with 'myClass'at any depth within view\n\n"
      },
      {
        "_type": "api",
        "title": "view.contents(...)",
        "text": "view.contents(...)\nGet a jQuery object for the contents of the view (top-level child nodes – including text nodes)\n\nvar jqContents = view.contents();\njqContents.css(\"color\", \"red\");\n\nGet a jQuery object for the top-level contents of the view, filtered by the jQuery selector\n\nvar jqContents = view.contents(\".toRed\");\njqContents.css(\"color\", \"red\");\n\nGet a jQuery object for the contents of the view: child and descendant nodes, filtered by the selector\n\nvar jqContents = view.contents(true, \".toRed\");\njqContents.css(\"color\", \"red\");\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The following example uses view.contents() to find the \".nameId\" within the view, and set its background color:\n"
      },
      {
        "_type": "sample",
        "title": "view.contents()",
        "text": "view.contents()\n.nameTd {width: 60px; padding: 0 6px;} table {width: 230px;} button {margin: 4px;}\n\n\n\n\n  <button id=\"addBtn\">Add</button>\n  <table><tbody>\n    {^{for people}}\n      <tr>\n        <td class=\"nameTd\">{^{:name}}</td>\n        <td>\n          <button class=\"orange\">orange</button>\n          <button class=\"yellow\">yellow</button>\n        </td>\n      </tr>\n    {{/for}}\n  </tbody></table>\n\nvar tmpl = $.templates(\"#peopleTmpl\");\n\nvar model = {\n  people: [{name: \"Adriana\"}, {name: \"Robert\"}]\n};\n\ntmpl.link(\"#peopleList\", model)\n  .on(\"click\", \"#addBtn\", function() {\n    var view = $.view(this);           // \"data\" view\n    var data = view.data;              // model\n    $.observable(data.people).insert({name: \"name\"});\n  })\n  .on(\"click\", \".orange, .yellow\", function() {\n    var view = $.view(this);           // \"item\" view\n\n    // Get jQuery object for \".nameTd\" in this view:\n    var jqNameTd = view.contents(true, \".nameTd\");\n\n    // Set background color\n    jqNameTd.css(\"backgroundColor\", this.className);\n  });\n// Get jQuery object for \".nameTd\" in this view:\nvar jqNameTd = view.contents(true, \".nameTd\");\n\n// Set background color\njqNameTd.css(\"backgroundColor\", this.className);\n\n\n"
      },
      {
        "_type": "para",
        "title": "The childTags() method",
        "text": "The childTags() method\nview.childTags(…): returns an array of custom tag instances within the view – optionally filtered by tag name.\nvar mytagsArray = view.childTags(true, \"mytag\"); // {{mytag}} instances within view (at any depth)\n\n"
      },
      {
        "_type": "api",
        "title": "view.childTags(...)",
        "text": "view.childTags(...)\nGet top-level custom tag instances within the view\n\nvar tagsArray = view.childTags();\nvar firstTagName = tagsArray[0].tagName;\n\nGet instances of {{tagName}} in view (not nested in other custom tags)\n\nvar sliders = view.childTags(\"slider\");\nsliders[0].updateValue(25);\n\nGet instances of {{tagName}} in view (including those nested in other custom tags)\n\nvar jqContents = view.childTags(true, \".toRed\");\njqContents.css(\"color\", \"red\");\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Note that view.childTags() looks only for custom tags. (In fact it searches for tags which do not have the flow property set to true. All built-in tags such as {{for}} and {{if}} have the setting flow: true, so are ignored by childTags(). However even ‘flow tags’ will be returned if searched for my name, as in: view.childTags(\"if\").)\nThe following sample looks for {{textbox}} tags (in the case data-link=\"{textbox ...}\") and calls a method on each.\n"
      },
      {
        "_type": "sample",
        "title": "view.childTags()",
        "text": "view.childTags()\n#toggleBtn {margin-bottom: 14px;} .person {line-height: 26px;}\n\n\n\n  <button id=\"toggleBtn\">Toggle Edit</button>\n\n  {^{for people}}\n    {{!--data-link to {{textbox}} tag --}}\n    <div class=\"person\" data-link=\"{textbox path=name/}\"></div> \n  {{/for}}\n\n// Define a {{textbox}} tag - which allows editing, and has a toggleEdit() method\n$.views.tags({\n  textbox: {\n    init: function() {\n      var path = this.tagCtx.params.props.path;\n\n      this.template = \" \"   // Checkbox to toggle edit\n      + \"\"       //  for editing\n      + \"\"; //  for rendering\n    },\n    toggleEdit: function() {\n      $.observable(this).setProperty(\"edit\", !this.edit);\n    }\n  }\n});\n\nvar tmpl = $.templates(\"#peopleTmpl\");\nvar model = {\n    people: [{name: \"Adriana\"}, {name: \"Robert\"}]\n  };\n\ntmpl.link(\"#peopleList\", model)\n  .on(\"click\", \"#toggleBtn\", function() {\n    var textBoxes = $.view(this).childTags(\"textbox\"); // Find all the {{textbox}} tags in the view\n    for (var i=0; i{^{for people}}\n  {{!--data-link to {{textbox}} tag --}}\n  <div class=\"person\" data-link=\"{textbox path=name/}\"></div> \n{{/for}}\n\n.on(\"click\", \"#toggleBtn\", function() {\n  var textBoxes = $.view(this).childTags(\"textbox\"); // Find all the {{textbox}} tags in the view\n  for (var i=0; i<textBoxes.length; i++) {\n    textBoxes[i].toggleEdit();                       // Toggle the edit mode for each of them\n  }\n});\n\n\n"
      },
      {
        "_type": "para",
        "title": "The nodes() method",
        "text": "The nodes() method\nview.nodes(): returns an array of top-level nodes within the view (including text nodes).\nvar nodesArray = view.nodes();\n\n"
      },
      {
        "_type": "sample",
        "title": "view.nodes()",
        "text": "view.nodes()\n.nameTd {width: 60px; padding: 0 6px;} table {width: 156px;} button {margin: 4px;}\n\n\n\n\n  <button id=\"addBtn\">Add</button>\n  <table><tbody>\n    {^{for people}}\n      <tr>\n        <td class=\"nameTd\">{^{:name}}</td>\n      </tr>\n      <tr>\n        <td>\n          <button class=\"orange\">orange</button>\n          <button class=\"yellow\">yellow</button>\n        </td>\n      </tr>\n    {{/for}}\n  </tbody></table>\n\nvar tmpl = $.templates(\"#peopleTmpl\");\n\nvar model = {\n  people: [{name: \"Adriana\"}, {name: \"Robert\"}]\n};\n\ntmpl.link(\"#peopleList\", model)\n  .on(\"click\", \"#addBtn\", function() {\n    var view = $.view(this);           // \"data\" view\n    var data = view.data;              // model\n    $.observable(data.people).insert({name: \"name\"});\n  })\n  .on(\"click\", \".orange, .yellow\", function() {\n    var view = $.view(this);           // \"item\" view\n\n    // Get top-level nodes in this view - two  nodes:\n    var nodes = view.nodes();\n\n    // Set colors\n    nodes[0].style.color = this.className;\n    nodes[0].style.backgroundColor = \"darkblue\";\n    nodes[1].style.backgroundColor = this.className;\n  });\n.on(\"click\", \".orange, .yellow\", function() {\n  var view = $.view(this);           // \"item\" view\n\n  // Get top-level nodes in this view - two <tr> nodes:\n  var nodes = view.nodes();\n\n  // Set colors\n  nodes[0].style.color = this.className;\n  nodes[0].style.backgroundColor = \"darkblue\";\n  nodes[1].style.backgroundColor = this.className;\n});\n\n\n"
      },
      {
        "_type": "para",
        "title": "The ctxPrm() get/set method:",
        "text": "The ctxPrm() get/set method:\nview.ctxPrm(name): returns the value of the named contextual parameter, within the context of that view.\nvar value = view.ctxPrm(\"color\"));\n// Get value of current contextual parameter \"color\"\n\nview.ctxPrm(name, newValue): observably modifies the value of the named contextual parameter, within the context of that view.\nview.ctxPrm(\"color\", \"green\"));\n// Set value of current contextual parameter \"color\" to \"green\"\n\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n  {^{on ~set \"green\"}}set ~color to green{{/on}}\n  {^{on ~set \"red\"}}set ~color to red{{/on}}\n  {^{on ~get}}get ~color{{/on}}\n  <span data-link=\"css-color{:~color} {:~color}\"></span>\n  <input data-link=\"~color\" />\n  ({^{:~color}})\n\n\nvar tmpl = $.templates(\"#tmpl\"),\n\n  model = {},\n\n  helpers = {\n    color: \"blue\",\n    set: function(newColor, ev, eventArgs) {\n      eventArgs.view.ctxPrm(\"color\", newColor); // Set contextual parameter: \"color\" to newColor\n    },\n    get: function(ev, eventArgs) {\n      alert(eventArgs.view.ctxPrm(\"color\")); // Get current contextual parameter \"color\"\n    }\n  };\n\ntmpl.link(\"#result\", model, helpers);\nTemplate:\n<span data-link=\"css-color{:~color}\">TEXT</span>\n<input data-link=\"~color\" />\n({^{:~color}})\n\nCode:\nset: function(newColor, ev, eventArgs) {\n  eventArgs.view.ctxPrm(\"color\", newColor); // Set contextual parameter: \"color\" to newColor \n},\nget: function(ev, eventArgs) {\n  alert(eventArgs.view.ctxPrm(\"color\")); // Get current contextual parameter \"color\"\n}\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "view.ctxPrm() can be used to modify any contextual parameter or helper (~foo). In the above example, ~color is initialized as helper passed in the with the link() call.\nIn the case of a contextual parameter defined by a path expression, such as ~color=clr, using the setter view.ctxPrm(\"color\", \"newValue\") will update not only the contextual parameter but also the data value clr that it is bound to. (The path expression ~color=expr constitutes a two-way binding).\nThis is illustrated by the following sample:\n"
      },
      {
        "_type": "sample",
        "text": "div {margin: 10px 0;}\n\n\n\n\n  <label>clr:</label>\n  <div>\n    <span data-link=\"css-color{:clr} {:clr}\"></span>\n    <input data-link=\"clr\" />\n  </div>\n\n  {{for person ~color=clr}}\n    <label>~color:</label>\n    <div>\n      {^{on ~set \"green\"}}set ~color to green{{/on}}\n      {^{on ~set \"red\"}}set ~color to red{{/on}}\n      {^{on ~get}}get ~color{{/on}}\n      <span data-link=\"css-color{:~color} {:~color}\"></span>\n      <input data-link=\"~color\" />\n    </div>\n  {{/for}}\n\n\nvar tmpl = $.templates(\"#tmpl\"),\n\n  model = {clr: \"orange\", person: {name: \"Jo\"}},\n\n  helpers = {\n    set: function(newColor, ev, eventArgs) {\n      eventArgs.view.ctxPrm(\"color\", newColor); // Set contextual parameter: \"color\" to newColor\n    },\n    get: function(ev, eventArgs) {\n      alert(eventArgs.view.ctxPrm(\"color\")); // Get current contextual parameter \"color\"\n    }\n  };\n\ntmpl.link(\"#result\", model, helpers);\nmodel = {clr: \"orange\", person: {name: \"Jo\"}};\n\n...\n<input data-link=\"clr\" />\n\n...\n{{for person ~color=clr}}\n  ...\n  {^{on ~set \"red\"}}set ~color to red{{/on}}...\n  <input data-link=\"~color\" />...\n{{/for}}\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsvtagobject": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsRender\nDeclare\n\ntag.template\ntag.flow\ntag.baseTag\ntag.contentCtx\ntag.argDefault\ntag.bindTo\n\nEvent handlers\n\ntag.init()\ntag.render()\ntag.convert()\n\nProps/Methods\n\ntag.ctxPrm()\ntag.cvt()\ntag.cvtArgs()\ntag.bndArgs()\ntag.ctx\ntag.parent\ntag.parents\ntag.tagCtx\ntag.tagCtxs\ntag.tagName\ntag.base\ntag.baseApply\nrendering\n\nJsViews\nDeclare\n\ntag.boundProps\ntag.linkedCtxParam\ntag.mainElement\ntag.linkedElement\ntag.displayElement\ntag.setSize\ntag.attr (e.g. {show ...}\ntag.dataBoundOnly\ndateMap\nlateRender (feature)\n\nEvent handlers\n\ntag.convertBack()\ntag.domChange()\ntag.depends()\ntag.onBeforeBind()\ntag.onBind()\ntag.BeforeLink()\ntag.onAfterLink()\ntag.onUpdate()\ntag.onBeforeUpdateVal()\ntag.onDispose()\ntag.onBeforeChange()\ntag.onAfterChange()\n\nProps/Methods\n\ntag.refresh()\ntag.contents()\ntag.childTags()\ntag.nodes()\ntag.setValue()\ntag.setValues()\ntag.updateValue()\ntag.updateValues()\ntag.linkCtx\ntag.parentElem\ntag._.inline\ntag.linkedElem\ntag.displayElem\ntag.linkedElems\ntag.mainElem\n\n"
      },
      {
        "_type": "para",
        "title": "A <b>view object</b> has the following properties and methods:",
        "text": "A view object has the following properties and methods:\nJsViews – programmatic access only\nThe following methods are available only for programmatic access when using JsViews:\n\nrefresh() method\ncontents() method\nchildTags() method\nnodes() method\nctxPrm() get/set method\n\nBoth JsRender and JsViews (see JsRender view object)\nThe following properties and methods are available when using either JsRender or JsViews:\n\ntype property\ndata property\nparent property\nindex property\ngetIndex() method\nget(type) method\ncontent property\nroot property\nother properties (tmpl, views, ctx, tag)\n\n"
      },
      {
        "_type": "para",
        "title": "Accessing view objects",
        "text": "Accessing view objects\nThe view object can be accessed programmatically in many contexts, such as:\n\nin a click handler (with JsViews) – using $.view(this) to return the view for a given HTML element (this)\nin a helper function, ~myHelper() – where the this pointer is the current view\nin any method of a custom tag – using this.tagCtx.view\n\nIn addition, properties and methods that are available to both JsRender and JsViews (second list above) can also be accessed declaratively in a template using view paths – such as #parent for the view.parent property.\n\nProperties and methods:\n"
      },
      {
        "_type": "para",
        "title": "The refresh() method",
        "text": "The refresh() method\ntag.refresh(): refreshes the tag, by re-rendering its content.\nThis can be used to update a tag using modified data, helpers or tag parameters. See also the similar view.refresh() method.\ntag.refresh(); // Refresh the tag, using current data values, helpers and tag parameters.\n\nThe following example has a custom tag that uses a template rendering data without data-linking. (Even it had data-linking, it will also allow picking up data changes which were modified ‘non-observably’, as in: model.year++;).\nThe sample is similar to the sample provided with the view.refresh()  documentation.\n"
      },
      {
        "_type": "sample",
        "title": "tag.refresh()",
        "text": "tag.refresh()\ntable td {padding: 5px;} table {margin-top: 6px;} #incrBtn {margin-bottom: 10px;}\n\n\n\n\n  <tr>\n    <td><input data-link=\"name\" /></td>\n    <td>Name: {{dbg:name}}</td>  {{!-- no data-linking --}}\n    <td>Age in {{:~root.year}}: {{:age + ~root.year - 2016}} </td>\n    <td>{^{on ~tag.callRefresh}}Refresh{{/on}}</td>\n  </tr>\n\n\n\n  <button id=\"incrBtn\">Increment year</button>\n  <button id=\"incrObsBtn\">Increment observably</button>\n  <button id=\"incrRefreshBtn\">Increment and refresh</button>\n  <button class=\"refreshBtn\">Refresh All</button><br/>\n  Year: {^{:year}}<br/>\n\n  <table><tbody>\n    {{for people}}\n      {^{personRow/}}\n    {{/for}}\n  </tbody></table>\n\n$.views.tags(\"personRow\", {\n  template: \"#personRowTmpl\",\n  callRefresh: function() {\n    // tag.refresh() will re-render tag, and take in to account modified data\n    this.refresh();\n  }\n}\n);\nvar tmpl = $.templates(\"#peopleTmpl\");\n\nvar model = {\n  year: 2016,\n  people: [{name: \"Adriana\", age: 4}, {name: \"Robert\", age: 34}]\n};\n\ntmpl.link(\"#peopleList\", model)\n  .on(\"click\", \"#incrBtn\", function() {\n    model.year++; // non-observable change\n  })\n  .on(\"click\", \"#incrObsBtn\", function() {\n    $.observable(model).setProperty(\"year\", model.year + 1);\n  })\n  .on(\"click\", \"#incrRefreshBtn\", function() {\n    model.year++; // non-observable change\n    $.view(this).refresh();\n  });\nTag template: (No data-linking except <input data-link=\"name\" />)\n...\n<input data-link=\"name\" />\n...\n{{:name}} ... {{:~root.year}} ... {{:age + ~root.year - 2016}}\n...\n{^{on ~tag.callRefresh}}Refresh{{/on}}\n\nTag code:\n$.views.tags(\"personRow\", {\n  template: \"#personRowTmpl\",\n  callRefresh: function() {\n    // tag.refresh() will re-render tag, and take in to account modified data\n    this.refresh();\n  }\n});\n\nTemplate:\n<button id=\"incrBtn\">Increment year</button>\n...\n{{for people}}\n  {^{personRow/}}\n{{/for}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "The contents() method",
        "text": "The contents() method\nview.contents(…): returns a jQuery object of view content nodes – optionally filtered by a jQuery selector.\nvar jqMyClassElem = view.contents(true, \".myClass\"); // jQuery object for element with 'myClass'at any depth within view\n\n"
      },
      {
        "_type": "api",
        "title": "view.contents(...)",
        "text": "view.contents(...)\nGet a jQuery object for the contents of the view (top-level child nodes – including text nodes)\n\nvar jqContents = view.contents();\njqContents.css(\"color\", \"red\");\n\nGet a jQuery object for the top-level contents of the view, filtered by the jQuery selector\n\nvar jqContents = view.contents(\".toRed\");\njqContents.css(\"color\", \"red\");\n\nGet a jQuery object for the contents of the view: child and descendant nodes, filtered by the selector\n\nvar jqContents = view.contents(true, \".toRed\");\njqContents.css(\"color\", \"red\");\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The following example uses view.contents() to find the \".nameId\" within the view, and set its background color:\n"
      },
      {
        "_type": "sample",
        "title": "view.contents()",
        "text": "view.contents()\n.nameTd {width: 60px; padding: 0 6px;} table {width: 230px;} button {margin: 4px;}\n\n\n\n\n  <button id=\"addBtn\">Add</button>\n  <table><tbody>\n    {^{for people}}\n      <tr>\n        <td class=\"nameTd\">{^{:name}}</td>\n        <td>\n          <button class=\"orange\">orange</button>\n          <button class=\"yellow\">yellow</button>\n        </td>\n      </tr>\n    {{/for}}\n  </tbody></table>\n\nvar tmpl = $.templates(\"#peopleTmpl\");\n\nvar model = {\n  people: [{name: \"Adriana\"}, {name: \"Robert\"}]\n};\n\ntmpl.link(\"#peopleList\", model)\n  .on(\"click\", \"#addBtn\", function() {\n    var view = $.view(this);           // \"data\" view\n    var data = view.data;              // model\n    $.observable(data.people).insert({name: \"name\"});\n  })\n  .on(\"click\", \".orange, .yellow\", function() {\n    var view = $.view(this);           // \"item\" view\n\n    // Get jQuery object for \".nameTd\" in this view:\n    var jqNameTd = view.contents(true, \".nameTd\");\n\n    // Set background color\n    jqNameTd.css(\"backgroundColor\", this.className);\n  });\n// Get jQuery object for \".nameTd\" in this view:\nvar jqNameTd = view.contents(true, \".nameTd\");\n\n// Set background color\njqNameTd.css(\"backgroundColor\", this.className);\n\n\n"
      },
      {
        "_type": "para",
        "title": "The childTags() method",
        "text": "The childTags() method\nview.childTags(…): returns an array of custom tag instances within the view – optionally filtered by tag name.\nvar mytagsArray = view.childTags(true, \"mytag\"); // {{mytag}} instances within view (at any depth)\n\n"
      },
      {
        "_type": "api",
        "title": "view.childTags(...)",
        "text": "view.childTags(...)\nGet top-level custom tag instances within the view\n\nvar tagsArray = view.childTags();\nvar firstTagName = tagsArray[0].tagName;\n\nGet instances of {{tagName}} in view (not nested in other custom tags)\n\nvar sliders = view.childTags(\"slider\");\nsliders[0].updateValue(25);\n\nGet instances of {{tagName}} in view (including those nested in other custom tags)\n\nvar jqContents = view.childTags(true, \".toRed\");\njqContents.css(\"color\", \"red\");\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Note that view.childTags() looks only for custom tags. (In fact it searches for tags which do not have the flow property set to true. All built-in tags such as {{for}} and {{if}} have the setting flow: true, so are ignored by childTags(). However even ‘flow tags’ will be returned if searched for my name, as in: view.childTags(\"if\").)\nThe following sample looks for {{textbox}} tags (in the case data-link=\"{textbox ...}\") and calls a method on each.\n"
      },
      {
        "_type": "sample",
        "title": "view.childTags()",
        "text": "view.childTags()\n#toggleBtn {margin-bottom: 14px;} .person {line-height: 26px;}\n\n\n\n  <button id=\"toggleBtn\">Toggle Edit</button>\n\n  {^{for people}}\n    {{!--data-link to {{textbox}} tag --}}\n    <div class=\"person\" data-link=\"{textbox path=name/}\"></div> \n  {{/for}}\n\n// Define a {{textbox}} tag - which allows editing, and has a toggleEdit() method\n$.views.tags({\n  textbox: {\n    init: function() {\n      var path = this.tagCtx.params.props.path;\n\n      this.template = \" \"   // Checkbox to toggle edit\n      + \"\"       //  for editing\n      + \"\"; //  for rendering\n    },\n    toggleEdit: function() {\n      $.observable(this).setProperty(\"edit\", !this.edit);\n    }\n  }\n});\n\nvar tmpl = $.templates(\"#peopleTmpl\");\nvar model = {\n    people: [{name: \"Adriana\"}, {name: \"Robert\"}]\n  };\n\ntmpl.link(\"#peopleList\", model)\n  .on(\"click\", \"#toggleBtn\", function() {\n    var textBoxes = $.view(this).childTags(\"textbox\"); // Find all the {{textbox}} tags in the view\n    for (var i=0; i{^{for people}}\n  {{!--data-link to {{textbox}} tag --}}\n  <div class=\"person\" data-link=\"{textbox path=name/}\"></div> \n{{/for}}\n\n.on(\"click\", \"#toggleBtn\", function() {\n  var textBoxes = $.view(this).childTags(\"textbox\"); // Find all the {{textbox}} tags in the view\n  for (var i=0; i<textBoxes.length; i++) {\n    textBoxes[i].toggleEdit();                       // Toggle the edit mode for each of them\n  }\n});\n\n\n"
      },
      {
        "_type": "para",
        "title": "The nodes() method",
        "text": "The nodes() method\nview.nodes(): returns an array of top-level nodes within the view (including text nodes).\nvar nodesArray = view.nodes();\n\n"
      },
      {
        "_type": "sample",
        "title": "view.nodes()",
        "text": "view.nodes()\n.nameTd {width: 60px; padding: 0 6px;} table {width: 156px;} button {margin: 4px;}\n\n\n\n\n  <button id=\"addBtn\">Add</button>\n  <table><tbody>\n    {^{for people}}\n      <tr>\n        <td class=\"nameTd\">{^{:name}}</td>\n      </tr>\n      <tr>\n        <td>\n          <button class=\"orange\">orange</button>\n          <button class=\"yellow\">yellow</button>\n        </td>\n      </tr>\n    {{/for}}\n  </tbody></table>\n\nvar tmpl = $.templates(\"#peopleTmpl\");\n\nvar model = {\n  people: [{name: \"Adriana\"}, {name: \"Robert\"}]\n};\n\ntmpl.link(\"#peopleList\", model)\n  .on(\"click\", \"#addBtn\", function() {\n    var view = $.view(this);           // \"data\" view\n    var data = view.data;              // model\n    $.observable(data.people).insert({name: \"name\"});\n  })\n  .on(\"click\", \".orange, .yellow\", function() {\n    var view = $.view(this);           // \"item\" view\n\n    // Get top-level nodes in this view - two  nodes:\n    var nodes = view.nodes();\n\n    // Set colors\n    nodes[0].style.color = this.className;\n    nodes[0].style.backgroundColor = \"darkblue\";\n    nodes[1].style.backgroundColor = this.className;\n  });\n.on(\"click\", \".orange, .yellow\", function() {\n  var view = $.view(this);           // \"item\" view\n\n  // Get top-level nodes in this view - two <tr> nodes:\n  var nodes = view.nodes();\n\n  // Set colors\n  nodes[0].style.color = this.className;\n  nodes[0].style.backgroundColor = \"darkblue\";\n  nodes[1].style.backgroundColor = this.className;\n});\n\n\n"
      },
      {
        "_type": "para",
        "title": "The ctxPrm() get/set method:",
        "text": "The ctxPrm() get/set method:\nview.ctxPrm(name): returns the value of the named contextual parameter, within the context of that view.\nvar value = view.ctxPrm(\"color\"));\n// Get value of current contextual parameter \"color\"\n\nview.ctxPrm(name, newValue): observably modifies the value of the named contextual parameter, within the context of that view.\nview.ctxPrm(\"color\", \"green\"));\n// Set value of current contextual parameter \"color\" to \"green\"\n\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n  {^{on ~set \"green\"}}set ~color to green{{/on}}\n  {^{on ~set \"red\"}}set ~color to red{{/on}}\n  {^{on ~get}}get ~color{{/on}}\n  <span data-link=\"css-color{:~color} {:~color}\"></span>\n  <input data-link=\"~color\" />\n  ({^{:~color}})\n\n\nvar tmpl = $.templates(\"#tmpl\"),\n\n  model = {},\n\n  helpers = {\n    color: \"blue\",\n    set: function(newColor, ev, eventArgs) {\n      eventArgs.view.ctxPrm(\"color\", newColor); // Set contextual parameter: \"color\" to newColor\n    },\n    get: function(ev, eventArgs) {\n      alert(eventArgs.view.ctxPrm(\"color\")); // Get current contextual parameter \"color\"\n    }\n  };\n\ntmpl.link(\"#result\", model, helpers);\nTemplate:\n<span data-link=\"css-color{:~color}\">TEXT</span>\n<input data-link=\"~color\" />\n({^{:~color}})\n\nCode:\nset: function(newColor, ev, eventArgs) {\n  eventArgs.view.ctxPrm(\"color\", newColor); // Set contextual parameter: \"color\" to newColor \n},\nget: function(ev, eventArgs) {\n  alert(eventArgs.view.ctxPrm(\"color\")); // Get current contextual parameter \"color\"\n}\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "view.ctxPrm() can be used to modify any contextual parameter or helper (~foo). In the above example, ~color is initialized as helper passed in the with the link() call.\nIn the case of a contextual parameter defined by a path expression, such as ~color=clr, using the setter view.ctxPrm(\"color\", \"newValue\") will update not only the contextual parameter but also the data value clr that it is bound to. (The path expression ~color=expr constitutes a two-way binding).\nThis is illustrated by the following sample:\n"
      },
      {
        "_type": "sample",
        "text": "div {margin: 10px 0;}\n\n\n\n\n  <label>clr:</label>\n  <div>\n    <span data-link=\"css-color{:clr} {:clr}\"></span>\n    <input data-link=\"clr\" />\n  </div>\n\n  {{for person ~color=clr}}\n    <label>~color:</label>\n    <div>\n      {^{on ~set \"green\"}}set ~color to green{{/on}}\n      {^{on ~set \"red\"}}set ~color to red{{/on}}\n      {^{on ~get}}get ~color{{/on}}\n      <span data-link=\"css-color{:~color} {:~color}\"></span>\n      <input data-link=\"~color\" />\n    </div>\n  {{/for}}\n\n\nvar tmpl = $.templates(\"#tmpl\"),\n\n  model = {clr: \"orange\", person: {name: \"Jo\"}},\n\n  helpers = {\n    set: function(newColor, ev, eventArgs) {\n      eventArgs.view.ctxPrm(\"color\", newColor); // Set contextual parameter: \"color\" to newColor\n    },\n    get: function(ev, eventArgs) {\n      alert(eventArgs.view.ctxPrm(\"color\")); // Get current contextual parameter \"color\"\n    }\n  };\n\ntmpl.link(\"#result\", model, helpers);\nmodel = {clr: \"orange\", person: {name: \"Jo\"}};\n\n...\n<input data-link=\"clr\" />\n\n...\n{{for person ~color=clr}}\n  ...\n  {^{on ~set \"red\"}}set ~color to red{{/on}}...\n  <input data-link=\"~color\" />...\n{{/for}}\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsvviewcontextobject": {
    "sections": []
  },
  "jsvtagcontextobject": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "\ntagCtx.contentView\ntagCtx.contents()\ntagCtx.nodes()\ntagCtx.childTags()\ntagCtx.cvtArgs()\ntagCtx.bndArgs()\ntagCtx.setValues()\ntagCtx.render()\ntagCtx.args\ntagCtx.props\ntagCtx.params\ntagCtx.tag\ntagCtx.ctx\ntagCtx.tmpl\ntagCtx.view\ntagCtx.contentView\ntagCtx.index\n\n"
      }
    ]
  },
  "jsvlinkcontextobject": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "paragraph\n"
      }
    ]
  },
  "linked-template-syntax": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews data-link syntax takes two forms:\n\nData-linked tags\nData-linked elements\n\nBoth forms use:\n\nData-linked paths\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "linked-tag-syntax": {
    "sections": [
      {
        "_type": "para",
        "title": "JsViews data-linked tags",
        "text": "JsViews data-linked tags\nA data-linked tag is like a regular JsRender tag (whether a built-in tag, or a custom tag) but has an additional ^ character to show that is data-linked. Let’s illustrate that by an example based on the Extending the {{for}} tag sample:\n<ul>\n  {{for members}}\n    <li>\n      {{:name}}\n    </li>\n  {{/for}}\n</ul>\n\n<ul>\n  {{range members start=1 end=3}}\n    <li>\n      {{:name}}\n    </li>\n  {{/range}}\n</ul>\n\nWe can data-link to the members – whether on the built-in {{for}}, or the custom {{range}} tag – like this:\n<ul>\n  {^{for members}}\n    <li>\n      {^{:name}}\n    </li>\n  {{/for}}\n</ul>\n\n<ul>\n  {^{range members start=1 end=3}}\n    <li>\n      {^{:name}}\n    </li>\n  {{/range}}\n</ul>\n\nNow if the members array changes, our rendered template content will automatically update to show the additional inserted (or removed) members in the list.\nHere is a live sample of the data-linked {^{for}} tag:\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n  <button id=\"add\">Add</button>\n  <ol>\n    {^{for members}}\n      <li>\n        {^{:name}} \n        <span class=\"remove\"></span>\n      </li>\n    {{/for}}\n  </ol>\n\n\nvar team = {\n  members: [\n    {name: \"Robert\"},\n    {name: \"Sarah\"}\n  ]\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team)\n  .on(\"click\", \".remove\", function() {\n    var view = $.view(this);\n    $.observable(team.members).remove(view.index);\n  })\n  .on(\"click\", \"#add\", function() {\n    $.observable(team.members).insert(0, {name: \"new\" + cnt++})\n  });\nTemplate:\n...\n{^{for members}}\n  <li>\n    {^{:name}} ...\n  </li>\n{{/for}}\n...\n\nCode:\n...\n$.templates(\"#teamTemplate\").link(\"#team\", team) ...\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Notice that we also added a ^ to the {^{:name}} tag. That means that if the value of the name field is changed (‘observably’) then the value will update automatically within the rendered template.\nAnd here is a link to a complete sample showing a data-linked {^{range}} tag. It lets you modify both the members list and the name properties, and see how they automatically trigger updates in other parts of the page which bind to the same data.\nJsViews is smart about how it updates the HTML. Generally it does so incrementally – only modifying the affected part of the HTML by inserting or removing elements, or replacing values.\n"
      },
      {
        "_type": "para",
        "title": "Binding to named properties of tags",
        "text": "Binding to named properties of tags\nIn the sample we went one step further than shown above. We added data-linking to the start and end named properties of the {{range}} tag:\n{^{range members ^start=start-1 ^end=end}}\n\nThe prefixed ^ on the name: ^start=... is used to specify that the start ‘named property’ is to be data-linked (so the whole tag will render if the start value changes). Change the value (using the drop-down in the sample) and you see that the displayed range updates automatically.\nBy default named properties are not data-linked. (This is made ‘opt-in’ for perf optimization reasons.)\n"
      },
      {
        "_type": "para",
        "title": "See also:",
        "text": "See also:\n\nJsViews API topic: Data-linked elements\nTutorial sequence of samples: Data-linking tags and elements\n\n"
      }
    ]
  },
  "linked-elem-syntax": {
    "sections": [
      {
        "_type": "para",
        "title": "JsViews data-link expressions, and syntax",
        "text": "JsViews data-link expressions, and syntax\nData-linked elements are regular HTML elements which have been data-bound in the template by adding a data-link attribute.\nThey can be used within templated content, as in the following sample – and they can also be used on top-level non-templated content in your page – see Top-level data-linking.\n"
      },
      {
        "_type": "sample",
        "title": "Data-linked elements in templates",
        "text": "Data-linked elements in templates\nA data-linked input element (two-way data-binding, update triggered on keydown)\n\n\n\nTwo-way data-binding (no update on keydown, only on blur)\n\n\n\nA data-linked span element (data binding to innerText – default target)\n\n\n\nA data-linked tag (renders as a text node, not an element...)\n\n{^{:name}}\n\nCode:\n\n...\nvar template = $.templates(\"#theTmpl\");\ntemplate.link(\"#result\", data);\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Notice that the <input data-link=\"name\"> tag automatically has two-way data-binding.\n"
      },
      {
        "_type": "para",
        "title": "Abbreviated syntax and full syntax for data-linked elements",
        "text": "Abbreviated syntax and full syntax for data-linked elements\nIn fact the examples of data-linked elements above correspond to simple cases, where you can use abbreviated syntax. For more powerful or complex data-linking to elements, you can use the full syntax.\n"
      },
      {
        "_type": "para",
        "title": "Abbreviated syntax is just a data-path or expression that you are binding to:",
        "text": "Abbreviated syntax is just a data-path or expression that you are binding to:\n<span data-link=\"pathOrExpression\"></span>\n\nFor example:\n<span data-link=\"name\"></span>\n<span data-link=\"address.street\"></span>\n<span data-link=\"~someHelper.computed() > 1\"></span>\n\n"
      },
      {
        "_type": "para",
        "title": "The corresponding full syntax is a data-linked <code>{{: ...}}</code> tag",
        "text": "The corresponding full syntax is a data-linked {{: ...}} tag\nIn fact it is short for this full syntax:\n<span data-link=\"{:pathOrExpression}\"></span>\n\n– which is a data-linked version of the familiar JsRender tag: {{:pathOrExpression}}.\nExamples:\n<span data-link=\"{:name}\"></span>\n<span data-link=\"{:address.street}\"></span>\n<span data-link=\"{:~someHelper.computed() > 1}\"></span>\n\n<input data-link=\"{:name:}\"/>\n<input data-link=\"{:name trigger=false:}\"/>\n\n"
      },
      {
        "_type": "para",
        "title": "Optional two-way data-binding",
        "text": "Optional two-way data-binding\nNotice the full syntax for the <input> has an additional : before the } at the end. It corresponds to the two-way data binding. (The same applies to other ‘user input elements’ such as select, textarea etc. (and also contenteditable elements).\nYou can provide both convert and convertBack converters if you want. (See the Two-way binding and converters sample):\n<input data-link=\"{myConverter:some.data.path:myConvertBack}\"/>\n\n<select data-link=\"{myConverter:some.data.path:myConvertBack}\">...</select>\n\nIf you want only one-way binding (from the data to the <input>) you simply eliminate the : at the end:\n<input data-link=\"{:some.data.path}\"/>\n\nSee the Two-way binding topic for additional details.\n"
      },
      {
        "_type": "para",
        "title": "Full syntax &ndash; multiple targets, multiple tags, multiple bindings...",
        "text": "Full syntax – multiple targets, multiple tags, multiple bindings...\nThe full syntax allows you to bind multiple expressions each to a different target, and is written like this: data-link=\"target1{linkExpression1} target2{linkExpression2} ...\".\nPossible targets include the following:\n\nan HTML attribute (such as title{...}, class{...}, id{...}, disabled{...} or data-foo{...}\n)\nan HTML element property (such as prop-muted{...} for a <video> element)\na CSS property (such as css-background-color{...})\ninnerHTML (as in html{...})\ninnerText (as in text{...})\nspecial targets like visible{...}\nor can be missing altogether (as in {...}) in which case it stands for the default target for the element.\n\nThe default target for most elements is innerText, but for input and select elements it is value.\nThe linkExpression {...} is actually a template tag, such as {^{:a.b.c}} or {^{myCustomTag .../}}. The difference from regular JsRender tag syntax is that with data-link expressions, you only put a single curly brace to delimit, and you don’t put the self-closing /, which is assumed.\nIn fact as long as the tag is self-closing, you can use any JsRender tag you want – including custom tags.\nFor example, if you have a JsRender tag as content of an element:\n<div>{{for some.path tmpl='myForTmpl'}}</div>\n\n– then you can make it into a data-linked tag, using:\n<div>{^{for some.path tmpl='myForTmpl'}}</div>\n\n– or into a data-linked element, using:\n<div data-link=\"{for some.path tmpl='myForTmpl'}\" ></div>\n\nSo examples would be:\n\n<div data-link=\"{:name}\"></div> (one-way binding to innerText – default target attrib – so automatically HTML encodes)– equivalent to abbreviated syntax: <input data-link=\"name\" />\n<div data-link=\"html{:name}\"></div> (one-way binding to innerHTML)\n<div data-link=\"text{:name}\"></div> (one-way binding to innerText – equivalent to default above)\n<div data-link=\"html{>name}\"></div> (one-way binding to innerHTML but with HTML encoding)\n<input data-link=\"{:name}\" > (one-way binding to value – default target attrib)\n<input data-link=\"value{:name}\" /> (one-way binding to value)\n<input data-link=\"title{upr:name}\" /> (one-way binding to the title attribute, using a registered converter: upr)\n<input data-link=\"{:name trigger=false:}\" /> (two-way binding to value, trigger only on blur) – equivalent to abbreviated syntax: <input data-link=\"name trigger=false\" />\n<input data-link=\"{cvt:name:cvtBack}\" /> (two-way binding to value, with converters)\n<input data-link=\"{cvt:name trigger=false:cvtBack}\" /> (two-way binding to value, with converters, and trigger only on blur)\n<input data-link=\"{cvt:name:cvtBack} title{:info.description}\" /> (two-way binding to value, with converters and one-way binding to title)\n<img data-link=\"src{:'/myImagesFolder/' + fileName + '.png'}\" /> (one-way binding to src – using an expression to build full path)\n<div data-link=\"{myCustomTag name}\"></div> (data-linking – and instantiating – a JsViews custom tag control. Renders as innerHTML – default target attrib for tags other than {: …} – so the control can insert HTML markup)\n<div data-link=\"text{myCustomTag name}\"></div> (data-linking a JsViews custom tag control – rendering as innerText – so automatically HTML encodes)\n<svg><ellipse data-link=\"cx{:x} fill{:color}\"></ellipse> (data-linking to attributes of an SVG element)\n<input data-link=\"{:name():} placeholder{:namePlaceholder()}\" /> (two-way data-linking to name() plus data-linking the placeholder target to namePlaceholder())\n\nSee: Targets for data-linking for additional details and samples.\n"
      },
      {
        "_type": "para",
        "title": "When do you use the abbreviated syntax?",
        "text": "When do you use the abbreviated syntax?\nThe abbreviated syntax is an alternative syntax when you only have a single expression of the form {:someExpression}, or in the case of inputs {:someExpression:} (two-way binding). So it is using the default target attrib, and is targeting innerText, and automatically doing HTML encoding. In that case you can remove the {} delimiters and colons and just write the someExpression. JsViews will expand your expression to the full syntax. Example: data-link=\"name\".\nSo if you need any of the following, you need to switch to the full format:\n\ninsertion of HTML markup as innerHTML: (switch to html{:someExpression})\nconverters\ndifferent target ‘attribs’\nmultiple bindings\nusing tags other than {{: ...}}\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linking expressions using block tags, such as {{for}} &ndash; including {{else}} blocks.",
        "text": "Data-linking expressions using block tags, such as {{for}} – including {{else}} blocks.\nAs mentioned above, you can data-link to block tags, as long as you register the block content as a separate template, referenced using tmpl=...:\n<div data-link=\"{for employees tmpl='nameTmpl'}\">\n\nYou can also data-link to block tags that include {{else}} blocks, such as:\n<div data-link=\"{if someExpression tmpl='isTrueTmpl'}{else tmpl='isFalseTmpl'}\" ></div>\n\nExample:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": " Show\n\n\n$.link(true, \"body\", {show: true});\n\n\nTop-level data-linking to {if ...}{else ...}\n<input data-link=\"show\" type=\"checkbox\"/>Show\n<div data-link=\"{if show tmpl='show this'}{else tmpl='no show'}\"></div>\n\n$.link(true, \"body\", {show: true});\n\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linking expressions using tag controls",
        "text": "Data-linking expressions using tag controls\nAn important case of data-linking is binding and instantiating of custom tag controls, such as:\n<div data-link=\"{slider size _range='min' ...}\"></div>\n\nSee the tag control samples. Note that this works not only within data-linked templates, but also  when linking to top-level content – as shown in the second variant of the slider sample.\nAnother example might be a tabs control where the {{else}} blocks are the contents of the different tabs:\n<div data-link=\"{tabs ... tmpl='tab1'}{else ... tmpl='tab2'}{else ... tmpl='tab3'}\"></div>\n\nExample:\n"
      },
      {
        "_type": "sample",
        "title": "A top-level data-linked tabs control",
        "text": "A top-level data-linked tabs control\n\n\n\n\n$.templates({\n  tab1: \"365 days per year\",\n  tab2: \"12 months per year\",\n  tab3: \"Name: {{:name}}\"\n});\n\n$(\"#tabsView\").link(true, {name: \"Jeff\"});\n\nUsing data-linking to instantiate a tabs control on a top-level page element:\n<div id=\"tabsView\" data-link=\"\n  {tabs tabCaption='days' tmpl='tab1' selectedIndex=2}\n  {else tabCaption='months' tmpl='tab2'}\n  {else tabCaption='name' tmpl='tab3'}\n\"></div>\n\n$.templates({\n  tab1: \"365 days per year\",\n  ...\n  tab3: \"Name: {{:name}}\"\n});\n\n$(\"#tabsView\").link(true, {name: \"Jeff\"});\n\n\n/*! Sample JsViews tag control: {{tabs}} control v0.9.84 (Beta)\nsee: http://www.jsviews.com/#download/sample-tagcontrols */\n/*\n * Copyright 2017, Boris Moore\n * Released under the MIT License.\n */\n\n(function($) {\n\"use strict\";\n\n$.views.tags({\n  tabs: {\n    init: function(tagCtx) {\n      this.selectedIndex = tagCtx.props.selectedIndex || 0;\n      this.tabCount = this.tagCtxs.length;\n    },\n    render: function() {\n      var tagCtx = this.tagCtx;\n      return this.selectedIndex === tagCtx.index ? tagCtx.render() : \"\";\n    },\n    onBind: function() {\n      var self = this;\n      self.contents(true, \".tabstrip\").first()\n        .on(\"click\", \".header_false\", function() {\n          self.setTab($.view(this).index);\n        });\n    },\n    template: '<table class=\"tabsview\"><tbody>' +\n      '<tr class=\"tabstrip\">' +\n      '{{for ~tag.tagCtxs}}' +\n        '<th data-link=\"class{:\\'header_\\' + (#index === ~tag.selectedIndex)}\">' +\n          '{{>props.tabCaption}}' +\n        '</th>' +\n      '{{/for}}' +\n    '</tr>' +\n    '<tr class=\"tabscontent\">' +\n      '<td colspan=\"{{:~tag.tagCtxs.length}}\">' +\n        '<div style=\"width:{{attr:~tag.tagCtxs[0].props.width}};' +\n                    'height:{{attr:~tag.tagCtxs[0].props.height}}\">' +\n          '{^{for ^tmpl=~tag.tagCtxs[~tag.selectedIndex].tmpl /}}' +\n        '</div>' +\n        '</td>' +\n      '</tr>' +\n    '</tbody></table>',\n\n    //METHODS\n    setTab: function(index) {\n      $.observable(this).setProperty(\"selectedIndex\", index);\n      if (this.onSelectionChange) {\n        this.onSelectionChange(index, this);\n      }\n    },\n    dataBoundOnly: true\n  }\n});\n\n})(this.jQuery);\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "See also Tag bindings.\n"
      },
      {
        "_type": "para",
        "title": "Samples of data-linking:",
        "text": "Samples of data-linking:\n\nThere are many samples showing data-linking under JsViews Samples.\nSee in particular this tutorial sequence on data-linking\n\n"
      },
      {
        "_type": "para",
        "title": "See also:",
        "text": "See also:\n\nData-linked tags\nTargets for data-linking\n\n"
      }
    ]
  },
  "toplink": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "You can use data-linking not only for templated content, but also to data-bind to top-level HTML content in your page. Data-link expressions can be applied to top-level elements either declaratively, or programmatically:\n"
      },
      {
        "_type": "para",
        "title": "Top-level declarative data-linking",
        "text": "Top-level declarative data-linking\nUse:\n$.link(true, target, data);\n//or alternative syntax:\n$(target).link(true, data);\n\n… to activate any declarative data-link bindings (data-link=\"...\" expressions) on the target element, or on elements within its content.\nSee: Top-level declarative data-linking.\n"
      },
      {
        "_type": "para",
        "title": "Top-level programmatic data-linking",
        "text": "Top-level programmatic data-linking\nUse:\n$.link(expression, target, data);\n//or alternative syntax:\n$(target).link(expression, data);\n\n… to bind a data-link expression on a target element.\nSee Top-level programmatic data-linking.\n"
      }
    ]
  },
  "jsv.toplink-true": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "You can use data-linking not only for templated content, but also to data-bind to top-level HTML content in your page…\nThe $.link(true, ...) method is used to activate top-level declarative data-binding, which can provide dynamic data-driven UI even on non-templated content.\nSimply add declarative data-binding expressions to top-level elements, using data-link=\"...\", then call:\n$.link(true, target, data, helpers);\n\n– where target is a top-level HTML element or jQuery selector, such as \"#target\". This will activate data-binding on the target element and on any elements within its content.\nYou can also use the alternative syntax (jQuery instance method):\n$(target).link(true, data, helpers);\n\n"
      },
      {
        "_type": "para",
        "title": "Declarative data-link expressions",
        "text": "Declarative data-link expressions\nData-link expressions can be quite rich, such as the following examples taken from the sample below:\n<div data-link=\"css-color{:isCEO ? 'green' : 'black'}\">\n<div data-link=\"{for employees tmpl='nameTmpl'}\"></div>\n\nData-link expressions can also be used to instantiate and data-bind custom tag controls, such as the slider, in the second sample below:\n<div data-link=\"{slider size _range='min' _min=1 _max=200 width=400}\"></div>\n\n"
      },
      {
        "_type": "api",
        "title": "$.link(true, target, data, helpers)",
        "text": "$.link(true, target, data, helpers)\nActivate any data-link bindings on target element or its content elements, using data as context, and optionally passing in helpers\nActivate data-linking on target element and its content, using data as context, and passing in helpers\n\n$.link(true, \"#target\", myData, myHelpers);\n\n"
      },
      {
        "_type": "api",
        "title": "$(target).link(true, data, helpers) <span style=\"font-weight:normal;font-family:sans-serif\">(alternative syntax)</span>",
        "text": "$(target).link(true, data, helpers) (alternative syntax)\nActivate any data-link bindings on target element or its content elements, using data as context, and optionally passing in helpers\nActivate data-linking on target element and its content, using data as context, and passing in helpers\n\n$(\"#target\").link(true, myData, myHelpers);\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:\n"
      },
      {
        "_type": "sample",
        "title": "Top-level declarative data-linking",
        "text": "Top-level declarative data-linking\ninput {margin-bottom:10px;}\n\n\n  \n  \n   CEO\n\n  \n  and I am CEO!\n\n  \n    Employees:\n     \n  \n\n\n$.templates(\"nameTmpl\", \"Name: {{:first}} {{:last}}\");\n\nvar person = {\n  first: \"Jim\",\n  last: \"Rudd\",\n  employees: [\n    {first: \"Mary\", last: \"A\"},\n    {first: \"Hank\", last: \"B\"}\n  ]};\n\nvar helpers = {nameLabel: \"My name is \"};\n\n$.link(true, \"#group\", person, helpers);\nTop-level content:\n<div id=\"group\">\n  <input type=\"checkbox\" />\n  ...\n\nAdd two-way data-linking to <input>s\n<input data-link=\"isCEO\" type=\"checkbox\" />...\n<input data-link=\"first\" />...\n\nAdd data-linking to <div>s and <span>s etc.\n<div id=\"group\" data-link=\"css-color{:isCEO ? 'red' : 'blue'}\">...\n<div data-link=\"{for employees tmpl='nameTmpl'}\">...\n\nActivate, using $.link(true, ...)\n$.link(true, \"#group\", person, helpers);\n\n(Could have used alternative syntax: $(\"#group\").link(true, person, helpers);)\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "And here is another example, taken from the slider control in the tag control samples, which uses top-level data-linking with data-link=\"{slider ...}\" to instantiate and data-bind a JsViews {{slider}} control.\n"
      },
      {
        "_type": "sample",
        "title": "Top-level data-link=\"{slider ...}\"",
        "url": "samples/tag-controls/jqui/slider/simple-toplevel/sample",
        "text": "Top-level data-link=\"{slider ...}\"\nSlider with initialized properties (top-level data-linking)\n<div data-link=\"{slider size _range='min' _min=1 max=200 _orientation='vertical' width=400}\"></div>\n\n\nData-linking to SVG content\n\n\n  \n  ...\n\n\nActivate data-linking \n\n$.link(true, \"body\", model);\n\n\"use strict\";\n$.views.converters({\n  tonum: function(val) {\n    return +val; // Convert string to number\n  }\n});\n\nvar model = {\n    size: 150\n  };\n\n$.link(true, \"body\", model);\n/*! JsViews jQueryUI widget integration v0.9.87 (Beta)\nsee: http://www.jsviews.com/#download/jqueryui-tagcontrols */\n/*\n* https://www.jsviews.com/download/sample-tag-controls/jsviews-jqueryui-widgets.js\n* Copyright 2017, Boris Moore\n * Released under the MIT License.\n */\n\n/* Wrap behavior (wrapping HTML content) and default element, for each widget: */\n\n/*       autocomplete button   buttonset droppable   menu        progressbar  resizable\n * wrap: -            wrap     -         wrap        wrap        wrap         wrap     \n * elem: input        button   -         -           ul          div          div      \n */\n\n/*       selectable   slider   spinner   timespinner  tabs       sortable     draggable\n * wrap: wrap         -        -         -            wrap       wrap         wrap     \n * elem: -            div      input     input        -          -            -      \n */\n\n/*       accordion    checkbox radio     controlgroup selectmenu datepicker\n * wrap: wrap         -        -         wrap         wrap       wrap\n * elem: -            div      input     span         selectv    input\n */\n\n(function(global, $, undefined) {\n\"use strict\";\n\nif (!$ || !$.fn || !$.ui || !$.views) {\n  // jQuery is not loaded.\n  throw \"jsviews-jqueryui-widgets.js requires jQuery, jQuery UI and JsViews\";\n}\n\nfunction getConverter(tag, cvt) {\n  return cvt + \"\" === cvt ? tag.tagCtx.contentView.getRsc(\"converters\", cvt) : cvt;\n}\n\nfunction checkboxRadioBeforeBind(tagCtx, linkCtx) {\n  var tag = this,\n    props = tagCtx.props,\n    elem = tag.mainElem[0],\n    val = tag.bndArgs()[0];\n  // Set the value to arg[0] (after applying converter, if there is one)\n\n  if (props.name) {\n    elem.name = props.name;\n  }\n  if (props.value) {\n    elem.value = props.value;\n  }\n\n  tag.baseApply(arguments);\n  tag.displayElem = tag.widget.label;\n\n  if (props.label) {\n    tag.widget.option(\"label\", props.label);\n  }\n}\n\nfunction tabsAccordionOnBind(tagCtx, linkCtx) {\n  var tag = this;\n  tag.baseApply(arguments);\n\n  tag.mainElem.on(\"jsv-domchange\", function(ev, tagCtx, linkCtx, eventArgs) {\n    var newSelected,\n      selected = tag.widget.option(\"active\");\n\n    tag.widget.refresh();\n    newSelected = tag.widget.option(\"active\")\n\n    if (selected !== newSelected) {\n      tag.updateValue(newSelected);\n    }\n  });\n}\n\nfunction tabsAccordionOptions() {\n  var tag = this;\n  return {\n    activate: function(evt, ui) {\n      // Raise elemChangeHandler event when selected tab changes - for two-way binding to arg(0)\n\t\t\ttag.updateValue(tag.widget.option(\"active\"));\n    }\n  };\n}\n\nfunction initFormatter(tag, tagCtx) { // Used by datepicker and spinner\n  var dataFormatter,\n    dataFormat = tagCtx.props.dataFormat;\n  if (dataFormat === undefined) {\n    dataFormat = tag.dataFormat;\n  }\n  dataFormatter = dataFormat && dataFormat.parse\n    ? dataFormat\n    : tag.dataFormatter;\n\n  // Formatter can be provided as tag.dataFormat or tagCtx.props.dataFormat\n  tag.parseData = function(value) {\n    return dataFormatter.parse.call(tag, value, tag.tagCtx.props);\n  };\n  tag.formatData = function(value) {\n    return dataFormatter.format.call(tag, value, tag.tagCtx.props);\n  };\n  return dataFormat;\n}\n\nvar tagDefs = {\n// ============================= WIDGET =============================\nwidget: {\n  argDefault: false, // Do not default missing arg to #data\n  mainElement: \"*\",\n  init: function(tagCtx) {\n    var content, elemType,\n      tag = this;\n\n    if (tag.inline) {\n      content = tagCtx.tmpl.markup;\n      if (!tag.template && (elemType = tagCtx.props.elem || tag.elem)) {\n        if (content) {\n          if (tag.wrap) {\n            tag.template = \"<\"+elemType+\">\" + $.trim(content) + \"</\"+elemType+\">\";\n          }\n        } else {\n          tag.template = (elemType === \"input\") ? \"<input/>\" : \"<\"+elemType+\"></\"+elemType+\">\";\n        }\n      }\n      tag.attr = \"html\";\n    }\n  },\n  onBeforeBind: function(tagCtx) {\n    var mainElem, prop, i, optionKey,\n      tag = this,\n      presets = tag.initOptions, // initOptions: array of option names that when set declaratively\n                                 // as tag options will be set on creation, not on afterLink\n      widgetName = tag.widgetName,\n      options = tag.options,     // hash (or function returning hash) of option settings\n      widgetFullName = widgetName;\n\n    widgetName = widgetName.split(\"-\").pop();\n\n    if (i = presets && presets.length) {\n      presets = {};\n      while (i--) {\n        optionKey = tag.initOptions[i];\n        if (prop = tagCtx.props[\"_\" + optionKey]) {\n          presets[optionKey] = prop;\n        }\n      }\n    }\n    if (widgetFullName === widgetName) {\n      widgetFullName = \"ui-\" + widgetName;\n    }\n\n    mainElem = tag.mainElem;\n    if (!mainElem || !mainElem[0]) {\n      // This may be due to using {{myWidget}} No element found here {{/myWidget}} \n      throw \"No element found for tag '\" + tag.tagName +\"'\";\n    }\n\n    if (tagCtx.props.id && !mainElem[0].id) {\n      mainElem[0].id = tagCtx.props.id;\n    }\n\n    // Instantiate widget\n    mainElem[widgetName](presets);\n\n    // Store widget instance\n    tag.widget = mainElem.data(widgetFullName) || mainElem.data(widgetName);\n\n    if (!tag.widget) {\n      // Widget failed to load, or is not a valid widget factory type\n      throw \"widget '\" + widgetName + \"' failed\";\n    }\n\n    if (options) {\n      if ($.isFunction(options)) {\n        options = tag.options();\n      }\n      mainElem[widgetName](\"option\", options); // initialize options\n    }\n  },\n  onAfterLink: function(tagCtx) {\n    var mainElem,\n      tag = this,\n      options = tag.options, // hash (or function returning hash) of option settings\n      props = tagCtx.props,\n      widgetName = tag.widgetName.split(\"-\").pop();\n    if ($.isFunction(options)) {\n      options = tag.options();\n    }\n    mainElem = tag.mainElem;\n    $.each(props, function(key, prop) {\n      var option;\n      if (key.charAt(0) === \"_\") {\n        key = key.slice(1);\n        option = options && options[key];\n        mainElem[widgetName](\"option\", key,\n          option && $.isFunction(option) && prop && $.isFunction(prop)\n            ? function() {\n              // If the same event function option is overridden on the tagDef options\n              // (or in a _create override) and the tagCtx.props, call first the one on\n              // the tagDef options, and then the one declared on the tag properties.\n              option.apply(mainElem[0], arguments);\n              return prop.apply(mainElem[0], arguments);\n            }\n            : prop\n          );\n      }\n    });\n  },\n  onUpdate: false, // Don't rerender whole tag on update\n  dataBoundOnly: true,\n  attr: \"none\"\n},\n// ============================= BUTTON =============================\nbutton: {\n  baseTag: \"widget\",\n  widgetName: \"button\",\n  elem: \"button\",\n  wrap: true,\n  setSize: true,\n  contentCtx: true,\n  onBind: function(tagCtx, linkCtx) {\n    var elem = this.mainElem[0];\n      elem.innerHTML = elem.innerHTML || \"&nbsp;\"; // Fixes jQuery UI button issue if no label text\n    this.baseApply(arguments);\n  },\n  onAfterLink: function(tagCtx, linkCtx, ctx, event) {\n    this.baseApply(arguments);\n    if (event) {\n      this.widget.refresh();\n    }\n  }\n},\n// ============================= AUTOCOMPLETE =============================\nautocomplete: {\n  baseTag: \"widget\",\n  widgetName: \"autocomplete\",\n  linkedElement: \"*\",\n  elem: \"input\",\n  setSize: true,\n  options: function() {\n    var tag = this;\n    return {\n      change: function(evt, ui) {\n        if (ui.item) {\n          tag.updateValue(ui.item.value);\n          // If there is a selected item, update bound value on keydown.\n          // (Alternatively can set trigger=false to update on change)\n        }\n      },\n      select: function(evt, ui) {\n        if (ui.item) {\n          tag.updateValue(ui.item.value);\n        }\n      },\n      focus: function(evt, ui) {\n        return false;\n      }\n    };\n  }\n},\n// ============================= CHECKBOX =============================\ncheckbox: {\n  baseTag: \"widget\",\n  widgetName: \"checkboxradio\",\n  template: \"<label><input type='checkbox'/></label>\",\n  mainElement: \"input\",\n  linkedElement: \"input\",\n  setSize: true,\n  onBeforeBind: checkboxRadioBeforeBind,\n  setValue: function(val) {\n    if (val !== undefined) {\n      var elem = this.mainElem[0];\n      elem.checked = val && val !== \"false\";\n    }\n  }\n},\n// ============================= RADIO =============================\nradio: {\n  baseTag: \"widget\",\n  widgetName: \"checkboxradio\",\n  template: \"<label><input type='radio'/></label>\",\n  mainElement: \"input\",\n  linkedElement: \"input\",\n  setSize: true,\n  onBeforeBind: checkboxRadioBeforeBind,\n  onBind: function() {\n    var tag = this,\n      radiogroup = tag.parents.radiogroup;\n    tag.baseApply(arguments);\n    if (radiogroup && !radiogroup.onAfterLink) {\n      // If {{radio}} is child of {{radiogroup}}, make radiogroup\n      // notify radio buttons of selection changes\n      radiogroup.onAfterLink = function(tagCtx) {\n        var val = this.bndArgs()[0],\n          radios = this.childTags(\"radio\"),\n          l = radios.length;\n        while (l--) {\n          radios[l].setValue(val);\n        }\n      }\n    }\n  },\n  setValue: function(val) {\n    if (val !== undefined) {\n      var elem = this.mainElem[0];\n      elem.checked = val === elem.value;\n    }\n    this.widget.refresh();\n  }\n},\n// ============================= CONTROLGROUP =============================\ncontrolgroup: {\n  baseTag: \"widget\",\n  widgetName: \"controlgroup\",\n  elem: \"span\",\n  wrap: true,\n  contentCtx: true,\n  onBind: function() {\n    var tag = this;\n    tag.baseApply(arguments);\n    tag.mainElem.on(\"jsv-domchange\", function() {\n      tag.widget.refresh();\n    });\n  }\n},\n// ============================= DATEPICKER =============================\ndatepicker: {\n  baseTag: \"widget\",\n  widgetName: \"datepicker\",\n  linkedElement: \"*\",\n  elem: \"input\",\n  setSize: true,\n  dataFormat: true,\n  dataFormatter: {\n    // Default data formatter uses built-in datepicker formatter as used in display.\n    // Override as tag.dataFormat in tagDef or as tagCtxprops.dataFormat\n    parse: function(value, props) {\n      return $.datepicker.parseDate(this.dataFormat, value);\n    },\n    format: function(value, props) {\n      return $.datepicker.formatDate(this.dataFormat, value);\n    }\n  },\n  init: function(tagCtx) {\n    var tag = this,\n      dateFormat = tag.dateFormat = tagCtx.props.dateFormat\n        || tagCtx.props._dateFormat // Can set as _dateFormat=... or as dateFormat=...\n        || tag.dateFormat // or set as property in tagDef\n        || $.datepicker._defaults.dateFormat, // or use internal date-picker default\n      cvt = getConverter(tag, tag.convert),\n      cvtBk = getConverter(tag, tag.convertBack),\n      dataFormat = initFormatter(tag, tagCtx);\n      tag.dataFormat = dataFormat === true ? tag.dateFormat : dataFormat;\n\n    tag.convert = function(val) {\n      // Wrapped converter calls converter then does widget format\n      val = cvt ? cvt.call(tag, val) : val;\n      if (tag.dataFormat && (\"\" + val === val)) {\n        val = tag.parseData(val);\n      }\n      return $.datepicker.formatDate(dateFormat, dataFormat === 0 ? new Date(val) : val);\n    };\n    tag.convertBack = function(val) {\n      // Wrapped converter, does widget parse then calls converter\n      val = $.datepicker.parseDate(dateFormat, val);\n      val = dataFormat ? tag.formatData(val) : dataFormat === 0 ? +val : val;\n      return cvtBk ? cvtBk.call(tag, val) : val;\n    };\n    // Prevent onAfterLink replacing wrapped converters with unwrapped ones\n    tag.convert.fix = tag.convertBack.fix = true;\n    tag.baseApply(arguments);\n  },\n  options: function() {\n    var tag = this;\n    return {\n      onSelect: function(dateText) {\n        tag.value = dateText;\n        tag.updateValue(dateText);\n      }\n    };\n  },\n  onBind: function(tagCtx) {\n    var tag = this;\n    tag.baseApply(arguments);\n    tag.mainElem.datepicker(\"option\", \"dateFormat\", tag.dateFormat);\n    if (tag.mainElem[0].tagName !== \"INPUT\") {\n      // This datepicker is not using an input (e.g. using a div) - so set to inline-\n      tag.mainElem.css(\"display\", \"inline-block\");\n    } else {\n      tag.tagCtx.props.trigger = false;\n    }\n  },\n  setValue: function(value) {\n    var tag = this;\n    if (value !== undefined && value !== tag.value) {\n      tag.value = value;\n      tag.mainElem.datepicker(\"setDate\", value);\n    }\n  },\n  getValue: function() {\n    return this.value;\n  }\n},\n//dialog: { // Currently not supported. (Support would require overriding _createWrapper code.)\n//  baseTag: \"widget\",\n//  widgetName: \"dialog\",\n//  wrap: true,\n//  elem: \"div\"\n//},\n// ============================= DROPPABLE =============================\ndroppable: {\n  baseTag: \"widget\",\n  widgetName: \"droppable\",\n  elem: \"div\",\n  wrap: true,\n  setSize: true,\n  contentCtx: true,\n  setValue: function(value) {\n    if ($.isFunction(value)) {\n      this.widget.option(\"drop\", value); // Set the handler function for the drop action\n    }\n  }\n},\n// ============================= MENU =============================\nmenu: {\n  baseTag: \"widget\",\n  widgetName: \"menu\",\n  elem: \"ul\",\n  wrap: true,\n  setSize: true,\n  contentCtx: true,\n  initOptions: [\"menus\", \"items\", \"role\"], // Options which need to be set on creation, not later\n  setValue: function(value) {\n    if ($.isFunction(value)) {\n      this.widget.option(\"select\", value); // Set the menu select handler\n    }\n  }\n},\n// ============================= PROGRESSBAR =============================\nprogressbar: {\n  baseTag: \"widget\",\n  widgetName: \"progressbar\",\n  boundProps: [\"busy\"],\n  bindTo: 0,\n  elem: \"div\",\n  wrap: true,\n  setSize: true,\n  contentCtx: true,\n  setValue: function(value) {\n    if (!this.tagCtx.props.busy) {\n      this.widget.value(parseFloat(value) || 0);\n    }\n  },\n  getValue: function() {\n    return this.widget.value();\n  },\n  onAfterLink: function(tagCtx) {\n    var tag = this;\n    tag.baseApply(arguments);\n    if (tagCtx.props.busy) {\n      tag.widget.value(false);\n    }\n  }\n},\n// ============================= RESIZABLE =============================\nresizable: {\n  baseTag: \"widget\",\n  widgetName: \"resizable\",\n  bindTo: [\"width\", \"height\"],\n  linkedCtxParam: [\"width\", \"height\"],\n  elem: \"div\",\n  wrap: true,\n  contentCtx: true,\n  options: function() {\n    var tag = this;\n    return {\n      resize: function(evt, ui) {\n        setTimeout(function() {\n          tag.updateValues(ui.size.width, ui.size.height);\n        },0);\n      }\n    };\n  },\n  setValue: function(value, index) {\n    var mainElem = this.mainElem;\n    mainElem[index ? \"height\" : \"width\"](value || 0);\n  },\n  getValue: function() {\n    var mainElem = this.mainElem;\n    return [mainElem.width(), mainElem.height()];\n  }\n},\n// ============================= SELECTMENU =============================\nselectmenu: {\n  baseTag: \"widget\",\n  widgetName: \"selectmenu\",\n  linkedElement: \"select\",\n  elem: \"select\",\n  wrap: true,\n  setSize: true,\n  contentCtx: true,\n  options: function() {\n    var tag = this;\n    return {\n      change: function(evt, ui) {\n        tag.updateValue(ui.item.value);\n      }\n    };\n  },\n  onBeforeBind: function() {\n    var tag = this;\n    tag.baseApply(arguments);\n    tag.displayElem = tag.widget.button;\n  },\n  onBind: function() {\n    var tag = this;\n    tag.baseApply(arguments);\n    tag.mainElem.on(\"jsv-domchange\", function() {\n      tag.widget.refresh();\n    });\n  },\n  setValue: function(value) {\n    this.mainElem[0].value = value;\n    this.widget.refresh();\n  },\n  getValue: function() { \n    return this.mainElem[0].value;\n  }\n},\n// ============================= SLIDER =============================\nslider: {\n  baseTag: \"widget\",\n  widgetName: \"slider\",\n  bindTo: [0, 1],\n  linkedElement: [\"*\", \"~foo\"],\n  elem: \"div\",\n  setSize: true,\n  options: function() {\n    var tag = this;\n    return {\n      slide: function(evt, ui) {\n        setTimeout(function() {\n          tag.updateValue(ui.value);\n        }, 0);\n      }\n    };\n  },\n  onAfterLink: function(tagCtx) {\n    var tag = this;\n    if (!tag.linkCtx.elem._jsvChg) {\n      // If change not triggered by a the slider itself changing value\n      tag.baseApply(arguments);\n    }\n  },\n  setValue: function(value) {\n    this.widget.value(value || 0);\n  },\n  getValue: function() {\n    return this.widget.value();\n  }\n},\n// ============================= SPINNER =============================\nspinner: {\n  baseTag: \"widget\",\n  widgetName: \"spinner\",\n  mainElement: \"input\",\n  linkedElement: \"input\",\n  elem: \"input\",\n  setSize: true,\n  // Default display formatter uses Globalize 0.1.1.\n  // Override as tag.displayFormat in tagDef or as tagCtx.props.displayFormat\n  displayFormat: {\n    parse: function(value, props) {\n      return window.Globalize\n        ? Globalize.parseFloat(value, 10, props._culture)\n        : value;\n    },\n    format: function(value, props) {\n      return window.Globalize\n        ? Globalize.format(value, this.widget.options.numberFormat, props._culture)\n        : value;\n    }\n  },\n  options: function() {\n    var tag = this;\n    return {\n      spin: function(evt, ui) {\n        tag.updateValue(tag.widget._format(ui.value));\n      }\n    };\n  },\n  init: function(tagCtx) {\n    var dataFormat,\n      tag = this,\n      displayFormat = tagCtx.props.displayFormat;\n    tag.parse = function(value) {\n      return displayFormat.parse.call(tag, value, tag.tagCtx.props);\n    };\n    tag.format = function(value, props) {\n      return displayFormat.format.call(tag, value, tag.tagCtx.props);\n    };\n    if (displayFormat === undefined) {\n      displayFormat = tag.displayFormat;\n    }\n    tag.dataFormat = dataFormat = initFormatter(tag, tagCtx);\n    tag.baseApply(arguments);\n  },\n  onBeforeBind: function(tagCtx) {\n    var tag = this;\n    if (!tag.linkCtx.elem._jsvChg) {\n      // If change not triggered by the spinner itself changing value\n      tag.baseApply(arguments);\n      tag.displayElem = tag.mainElem.parent(); // jQuery UI wraps the input in a span\n      if (tagCtx.props.width) {\n        // In addition to generic setting of width on the\n        // displayElem, need also to set width on the input.\n        tag.mainElem.width(tagCtx.props.width - tag.displayElem.find(\".ui-spinner-up\").width()-9);\n      }\n    }\n  },\n  onBind: function(tagCtx) {\n    var tag = this,\n      cvt = getConverter(tag, tag.convert),\n      cvtBk = getConverter(tag, tag.convertBack);\n\n    tag.baseApply(arguments);\n\n    tag.convert = function(val) {\n      // Wrapped converter calls converter then does widget format\n      val = cvt ? cvt.call(tag, val) : val\n      val = tag.dataFormat ? +tag.parseData(val) : val;\n      return tag.widget._format(val);\n    };\n    tag.convertBack = function(val) {\n      // Wrapped converter, does widget parse then calls converter\n      val = tag.widget._parse(val);\n      val = tag.dataFormat ? tag.formatData(val) : val;\n      return cvtBk ? cvtBk.call(tag, val) : val;\n    };\n    // Prevent onAfterLink replacing wrapped converters with unwrapped ones\n    tag.convert.fix = tag.convertBack.fix = true;\n\n    tag.widget._parse = function(value) {\n      return value + \"\" === value && value\n        ? +tag.parse(value, tagCtx.props)\n        : value;\n    };\n    tag.widget._format = function(value) {\n      return value !== \"\"\n        ? tag.format(value, tagCtx.props)\n        : value;\n    };\n  }\n},\n// ============================= TIMESPINNER =============================\ntimespinner: {\n  baseTag: \"spinner\",\n  dataFormat: {\n    parse: function(value, props) {\n      return +value;\n    },\n    format: function(value, props) {\n      return new Date(value);\n    }\n  },\n  displayFormat: {\n    parse: function(value, props) {\n      var date;\n      if (value) {\n        return window.Globalize\n          ? Globalize.parseDate(value, \"t\", props._culture)\n          : ((date = new Date()).setHours(value.slice(0, 2), value.slice(3)), date);\n      }\n    },\n    format: function(value, props) {\n      if (value.getDay) {\n        return window.Globalize\n          ? Globalize.format(value, \"t\", props._culture)\n          : (100 + value.getHours() + \"\").slice(1) + \":\" + (100 + value.getMinutes() + \"\").slice(1);\n      }\n    }\n  },\n  options: function() {\n    return $.extend(\n      this.baseApply(), // Get options object from base class and extend it\n      {step: 60000, page: 60}\n    );\n  },\n  init: function(tagCtx) {\n    this.baseApply(arguments);\n    this.tagCtx.props.width = this.tagCtx.props.width || 80;\n  },\n  onBind: function(tagCtx) {\n    var tag = this;\n    tag.baseApply(arguments);\n    tagCtx.props.trigger = false;\n\n    tag.widget._parse = function(value) {\n      if (\"\" + value === value && value) {\n        value = tag.parse(value, tagCtx.props);\n        if (value && !tag.keepDay) {\n          // Make return dateNumber (ticks) change the hours and minutes but keep current date (day/month)\n          var returnDate = new Date(tag.value);\n          returnDate.setHours(value.getHours());\n          returnDate.setMinutes(value.getMinutes());\n          value = returnDate;\n        }\n      }\n      return +value;\n    };\n    tag.widget._format = function(value) {\n      if (+value === value) {\n        tag.value = value;\n        return tag.format(new Date(value), tagCtx.props);\n      }\n    };\n  },\n  onAfterLink: function(tagCtx) {\n    var keepDay = tagCtx.props.keepDay;\n\n    if (keepDay !== undefined) {\n      this.keepDay = keepDay;\n    }\n    this.baseApply(arguments);\n  }\n},\n// ============================= TABS =============================\ntabs: {\n  baseTag: \"widget\",\n  widgetName: \"tabs\",\n  bindTo: 0,\n  elem: \"div\",\n  wrap: true,\n  setSize: true,\n  contentCtx: true,\n  options: tabsAccordionOptions,\n  onBind: tabsAccordionOnBind,\n  setValue: function(value) {\n    // Select the tab whose index is the currently selected one\n    this.widget.option(\"active\", parseInt(value));\n  },\n  onBeforeBind: function(value) {\n    var anchor,\n      base = window.location.href.replace(/#.*$/, '');\n    $('ul>li>a[href^=\"#\"]', this.mainElem).each(function () {\n      anchor = $(this);\n      anchor.attr('href', base + anchor.attr('href'));\n    });\n    this.baseApply(arguments);\n  },\n  getValue: function() { // Helper: get the index of the currently selected tab\n    return this.widget.option(\"active\");\n  }\n}\n\n};\n\n\n\n$.views.tags(tagDefs);\n\n// ============================= BUTTON AND BUTTONSET =============================\nif ($.ui.version.slice(0, 4) === \"1.11\") {\n  // Add backward compatibility for {{buttonset}} and {{button}}\n  tagDefs.button = {\n    baseTag: \"widget\",\n    widgetName: \"button\",\n    elem: \"button\",\n    setSize: true,\n    contentCtx: true,\n    init: function(tagCtx, linkCtx) {\n      var template,\n        tag = this,\n        content = tagCtx.tmpl,\n        props = tagCtx.props,\n        id = props.id,\n        parent = tag.parent;\n\n      if (tag._.radio = parent && parent.tagName === \"buttonset\") {\n        tagCtx = parent.tagCtx;\n      } else {\n        tag._.chkBx = (tag.inline ? props : linkCtx.elem).type === \"checkbox\";\n      }\n\n      var  params = tagCtx.params,\n        paramprops = params.props || {};\n\n      tag.baseApply(arguments);\n\n      if (tag.inline) {\n        content = content && content.markup || \"&nbsp;\";\n        // (&nbsp; fixes a jQueryUI button rendering issue)\n        if (tag._.radio || tag._.chkBx) {\n          id = id || \"jsv\" + Math.random();\n          template = '<input id=\"' + id + '\" data-link=\"' + params.args[0] \n            + (paramprops.convert ? \" convert=\" + paramprops.convert : \"\")\n            + (paramprops.convertBack ? \" convertBack=\" + paramprops.convertBack : \"\")\n            + (tag._.radio\n              ? '\" name=\"' + parent.id + '\" type=\"radio\" value=\"' + props.value + \n                '\"/><label for=\"' + id + '\">' + content + '</label>'\n              : '\" type=\"checkbox\"/><label for=\"' + id + '\">' + content + '</label>');\n        } else {\n          template = \"<button>\" + content + \"</button>\";\n        }\n        tag.template = template;\n      }\n    },\n    onAfterLink: function(tagCtx, linkCtx) {\n      var tag = this,\n        elem = linkCtx.elem,\n        val = tag.bndArgs()[0];\n\n      if (tag._.radio || tag._.chkBx) {\n        if (!tag.inline) {\n          if (tag._.unlinked && !elem.id) {\n            elem.id = \"jsv\" + Math.random();\n            $(elem).after('<label for=\"' + elem.id + '\">&nbsp;</label>');\n          }\n          elem.checked = tag._.radio\n            ? (elem.name = tag.parent.id, val === elem.value)\n            : val && val !== \"false\";\n        }\n\n        tag.baseApply(arguments);\n\n        elem = tag.mainElem[0];\n\n        if (tag._.radio) {\n          // Use {^{button value=\"xxx\"}}Label{{/button}}\n          if (elem.value === \"undefined\") {\n            // Default, for {^{button}}xxx{{/button}} or {^{button _label=\"xxx\"/}}\n            elem.value = tag.widget.option(\"label\"); \n          }\n          elem.checked = val === elem.value;\n        } else {\n          elem.checked = val && val !== \"false\";\n        }\n\n        if (tag._.chkBx) {\n          tag.widget.refresh();\n        }\n      } else {\n        if (!tag.inline) {\n          elem.innerHTML = elem.innerHTML || \"&nbsp;\"; // Fixes jQuery UI button issue if no label text\n        }\n        tag.baseApply(arguments);\n      }\n    }\n  };\n\n  tagDefs.buttonset = {\n    baseTag: \"widget\",\n    widgetName: \"buttonset\",\n    setSize: true,\n    contentCtx: true,\n    init: function(tagCtx) {\n      var id,\n        tag = this;\n\n      tag.baseApply(arguments);\n\n      if (tag.inline) {\n        tag.id = tagCtx.props.id || \"jsv\" + Math.random();\n        tag.template = '<span id=\"' + tag.id + '\">' + tagCtx.tmpl.markup + \"</span>\";\n      }\n    },\n    onAfterLink: function(tagCtx, linkCtx) {\n      var tag = this,\n        elem = linkCtx.elem,\n        val = tag.bndArgs()[0];\n      tag.baseApply(arguments);\n      tag.widget.buttons.each(function(i, elem) {\n        elem.checked = val === elem.value;\n        $(elem).button(\"refresh\");\n      });\n    }\n  };\n}\n\n// Compile tags\n$.views.tags(tagDefs);\n\nfunction unlinkedClone() {\n  // Ensure that cloned element (and its contents) created by jQuery UI to show dragging\n  // element does not have any data-jsv tokens (since deleting the element would then\n  // remove those views associated with the original element)\n  var clone = $(this).clone();\n  clone.find(\"*\").addBack().removeAttr( \"id data-link data-jsv data-jsv-df\" );\n  clone.find(\"script\").remove();\n  return clone;\n}\n\n// ============================= DRAGGABLE =============================\nif ($.ui.draggable) {\n  // Create derived draggable widget\n  $.widget(\"jsv.draggable\", $.ui.draggable, {\n    _createHelper: function() {\n      if (this.options.helper === \"clone\") {\n        this.options.helper = unlinkedClone;\n      }\n      return this._super();\n    }\n  });\n\n  $.views.tags(\"draggable\", {\n    baseTag: \"widget\",\n    widgetName: \"jsv-draggable\",\n    bindTo: [\"left\", \"top\"],\n    linkedCtxParam: [\"left\", \"top\"],\n    elem: \"div\",\n    wrap: true,\n    setSize: true,\n    contentCtx: true,\n    options: function() {\n      var tag = this;\n      return {\n        drag: function(evt, ui) {\n          setTimeout(function() {\n            tag.updateValues(ui.offset.left, ui.offset.top);\n          },0);\n        }\n      };\n    },\n    setValue: function(value, index) {\n      this.mainElem.offset(index ? {top: value} : {left: value});\n    },\n    getValue: function(left, top) {\n      var offset = this.mainElem.offset();\n      return [offset.left, offset.top];\n    }\n  });\n}\n\n// ============================= ACCORDION =============================\nif ($.ui.accordion) {\n  // Create derived accordion widget\n  $.widget(\"jsv.accordion\", $.ui.accordion, {\n    _create: function() {\n      var widget = this;\n      widget.options.header = widget.options.header.replace(\":not(li):even\", \":not(li,script):even\");\n      widget._super();\n    }\n  });\n\n  $.views.tags(\"accordion\", {\n    baseTag: \"widget\",\n    widgetName: \"jsv-accordion\",\n    bindTo: 0,\n    wrap: true,\n    setSize: true,\n    contentCtx: true,\n    options: tabsAccordionOptions,\n    initOptions: [\"header\"], // Options which need to be set on creation, not later\n    onBind: tabsAccordionOnBind,\n    setValue: function(value) {\n      // Select the panel whose index is the currently selected one\n      this.widget.option(\"active\", parseInt(value));\n    },\n    getValue: function() { // Helper: get the index of the currently selected panel\n      return this.widget.option(\"active\");\n    }\n  });\n}\n\n// ============================= SORTABLE =============================\nif ($.ui.sortable) {\n  $.widget(\"jsv.sortable\", $.ui.sortable, {\n    _create: function() {\n      var innerView, moveFrom,\n        widget = this,\n        startOption = widget.options.start,\n        stopOption = widget.options.stop;\n\n      widget.option({\n        start: function(event, ui) {\n          startOption && startOption.apply(this, arguments);\n\n          if (widget.option(\"bindArray\") !== false) {\n            innerView = ui.item.view(); // The view of the item that is being dragged\n            if (innerView.type === \"item\") {\n              // The sortable items are within a {{for}} loop, so this is a data-linked sortable list\n              moveFrom = innerView.index + 1; // 1-based starting index of dragged item\n            }\n          }\n        },\n        stop: function(event, ui) {\n          var moveTo;\n\n          if (moveFrom) {\n            // This is a data-linked sortable list\n            moveTo = ui.item.prevAll(ui.item[0].tagName).length; // The new index after\n            // being dragged (count of previous siblings of same tagName)\n            widget.cancel(); // Now cancel the DOM changes, since we are data-driven,\n            // and should use JsViews data-linking to move the sorted items\n            $.observable(innerView.parent.data).move(moveFrom-1, moveTo); // Make the equivalent\n            // observable change to the underlying data\n            moveFrom = undefined;\n            // Remove the starting index, ready for new sorting actions on this sortable list\n          }\n          stopOption && stopOption.apply(this, arguments);\n        }\n      });\n      widget._super();\n    }\n  });\n\n  $.views.tags(\"sortable\", {\n    baseTag: \"widget\",\n    widgetName: \"jsv-sortable\",\n    wrap: true,\n    contentCtx: true,\n  });\n}\n\n// ============================= SELECTABLE =============================\nif ($.ui.selectable) {\n  $.widget(\"jsv.selectable\", $.ui.selectable, {\n    _create: function() {\n      var widget = this;\n\n      widget.options.filter += \":not(script)\";\n      widget._super();\n    }\n  });\n\n  $.views.tags(\"selectable\", {\n    baseTag: \"widget\",\n    widgetName: \"jsv-selectable\",\n    bindTo: 0,\n    wrap: true,\n    setSize: true,\n    contentCtx: true,\n    options: function() {\n      var tag = this;\n      return {\n        stop: function(evt, ui) {\n          tag.setSelectedItems();\n        }\n      };\n    },\n    initOptions: [\"filter\"], // Options which need to be set on creation, not later\n    onBind: function() {\n      var tag = this;\n      tag.selected = []; // Value of first arg (after applying converter, if there is one)\n\n      function selObs(ev, eventArgs) {\n        if (!eventArgs.refresh) {\n          tag.setSelection();\n        }\n      }\n\n      tag.selObs = selObs; // Store function instance, for disposing of just this binding, in onDispose\n      tag.baseApply(arguments);\n      tag.mainElem.on(\"jsv-domchange.sel\", function() {\n        tag.widget.refresh();\n        tag.selected._domChg = 2;\n        tag.setSelectedItems();\n        tag.selected._domChg = undefined;\n      });\n    },\n    onDispose: function() {\n      $.unobserve(this.selected, this.selObs);  // Remove just this binding to selected array\n    },\n    setValue: function(selected) { // Set the new observed array of selected indices\n      var tag = this;\n      if ($.isArray(selected) && tag.selected !== selected) {\n        $.unobserve(tag.selected, tag.selObs);\n        tag.selected = selected;\n        if (selected !== tag.bndArgs[0]) {\n          tag.updateValue(selected);\n        }\n        $.observe(selected, tag.selObs);\n        tag.setSelection();\n      }\n    },\n    getValue: function() {\n      return this.selected;\n    },\n    setSelection: function() {\n      // Set the class on the new selected elements (based on tag.selected array of indices)\n      var tag = this,\n        l = tag.selected.length;\n      if (!tag.selected._domChg) {\n        // No need to update if during a domchange event - only if a selectable change event\n        // Remove selected class from all selectable elements\n        tag.widget.selectees.removeClass(\"ui-selected\");\n        while (l--) {\n          // Set selected class on elements at indices in tag.selected array\n          tag.widget.selectees.eq(tag.selected[l]).addClass(\"ui-selected\");\n        }\n      }\n    },\n    setSelectedItems: function() {\n      // Set observable selectedItems array based on selected elements managed by widget\n      var tag = this,\n        selected = [];\n      if (tag.selected && tag.selected._domChg !== 1) {\n        if (tag.selected._domChg) {\n          // Avoid race conditions when multiple selectables bind to same selected array\n          tag.selected._domChg--;\n        }\n        tag.widget.selectees.each(function(index, elem) {\n          if ((' ' + elem.className + ' ').indexOf(' ui-selected ') > -1) {\n            selected.push(index); // This is the index of a selected element\n          }\n        });\n        tag.setValue(tag.selected); // Update the tag to bind to the new selected array\n        $.observable(tag.selected).refresh(selected); // Refresh to the new selected indices\n      }\n    }\n  });\n}\n})(this, this.jQuery);\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Other interesting top-level data-linking samples are\n\nthis version of the editable data samples\nthe shopping cart sample (top-level data-linking version)\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsv.toplink-expr": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "You can use data-linking not only for templated content, but also to data-bind to top-level HTML content in your page…\nThe $.link(expression, ...) method is used to programmatically add a data-link expression binding to a target element:\n$.link(dataLinkExpression, target, data, helpers);\n\nwhere dataLinkExpression can be any data-link expression that you might have used declaratively with data-link=\"myExpression...\", and target is the HTML element (or jQuery selector, such as \"#target\") that you want to data-bind.\nYou can also use the alternative syntax (jQuery instance method):\n$(target).link(dataLinkExpression, data, helpers);\n\n"
      },
      {
        "_type": "api",
        "title": "$.link(expression, target, data, helpers)",
        "text": "$.link(expression, target, data, helpers)\nApply data-link binding expression to target element, using data as context, and optionally passing in helpers\nActivate data-linking on target element, using provided expression, with data as context, and passing in helpers\n\n$.link(myExpression, \"#target\", myData, myHelpers);\n\n"
      },
      {
        "_type": "api",
        "title": "$(target).link(expression, data, helpers) <span style=\"font-weight:normal;font-family:sans-serif\">(alternative syntax)</span>",
        "text": "$(target).link(expression, data, helpers) (alternative syntax)\nApply data-link binding expression to target element, using data as context, and optionally passing in helpers\nActivate data-linking on target element, using provided expression, with data as context, and passing in helpers\n\n$(\"#target\").link(myExpression, myData, myHelpers);\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is an example:\n"
      },
      {
        "_type": "sample",
        "title": "Top-level programmatic data-linking",
        "text": "Top-level programmatic data-linking\n \n   CEO\n  \n\n  Employees: \n\n   \n\n\n$.templates(\"nameTmpl\", \"Name: {{:first}} {{:last}}\");\n\nvar person = {\n  isCEO: true,\n  employees: [\n    {first: \"Mary\", last: \"A\"},\n    {first: \"Hank\", last: \"B\"}\n  ]};\n\n$.link(\n  \"css-color{:isCEO ? 'green' : 'blue'}\", // expression\n  \"#group\", // target\n  person // data\n);\n\n$.link(\n  \"isCEO\", // expression\n  \"input.ceo\", // target\n  person // data\n);\n\n$.link(\n  \"{for employees tmpl='nameTmpl'} visible{:isCEO}\", // expression\n  \"#employees\", // target\n  person // data\n);\n\n$.link(\n  \"visible{:!isCEO} {:~message}\", // expression\n \"#notCeo\", // target\n  person, // data \n  {message: \"(Not CEO!)\"} // helpers\n);\n\nApply data-link expression to <input>, for two-way binding to isCEO data property:\n$.link(\n  \"isCEO\", // expression\n  \"input.ceo\", // target\n  person // data\n);\n\nApply {for...} and visible:{:...} data-link binding expressions to #employees <div>:\n$.link(\n  \"{for employees tmpl='nameTmpl'} visible{:isCEO}\", // expression\n  \"#employees\", // target\n  person // data\n);\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "And here is the same example, using the alternative syntax: $(target).link(expression, data, helpers);\n"
      },
      {
        "_type": "sample",
        "title": "Top-level programmatic data-linking <span style=\"font-style:normal;\">(alternative syntax)</span>",
        "text": "Top-level programmatic data-linking (alternative syntax)\n \n   CEO\n  \n\n  Employees: \n\n   \n\n\n$.templates(\"nameTmpl\", \"Name: {{:first}} {{:last}}\");\n\nvar person = {\n  isCEO: true,\n  employees: [\n    {first: \"Mary\", last: \"A\"},\n    {first: \"Hank\", last: \"B\"}\n  ]};\n\n$(\"#group\").link(\n  \"css-color{:isCEO ? 'green' : 'blue'}\", // expression\n  person // data\n);\n\n$(\"input.ceo\").link(\n  \"isCEO\", // expression\n  person // data\n);\n\n$(\"#employees\").link(\n  \"{for employees tmpl='nameTmpl'} visible{:isCEO}\", // expression\n  person // data\n);\n\n$(\"#notCeo\").link(\n  \"visible{:!isCEO} {:~message}\", // expression\n  person, // data \n  {message: \"(Not CEO!)\"} // helpers\n);\n\nApply data-link expression to <input>, for two-way binding to isCEO data property:\n$(\"input.ceo\").link(\n  \"isCEO\", // expression\n  person // data\n);\n\nApply {for...} and visible:{:...} data-link binding expressions to #employees <div>:\n$(\"#employees\").link(\n  \"{for employees tmpl='nameTmpl'} visible{:isCEO}\", // expression\n  person // data\n);\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "link2way": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews provides two-way binding on:\n\ntextboxes (<input/> type: ‘text’)\ncheckboxes (<input/> type: ‘checkbox’)\nradio buttons  (<input/> type: ‘radio’)\nselect elements\ntextareas\ncontenteditable elements\nIn addition, custom tags can support two-way binding\n\nTwo-way binding consists of:\n\na from binding: – whenever the underlying data changes (observably) the displayed value will update\na to binding: – when the user modifies the value, this will trigger an observable change in the underlying data\n\nOn two-way binding you can also specify:\n\nconvert and convert back converters\ntrigger on change or on keydown\nusing a different linkTo target\n\n"
      },
      {
        "_type": "sample",
        "title": "Two way binding",
        "text": "Two way binding\n\n  [contenteditable] {border:1px solid green; padding:5px;}\n  .block {display: block; margin-bottom: 10px} .green {color: green;}\n\n\n\n\n\n  <input data-link=\"name\" class=\"block\"/>\n\n  <label class=\"block\"><input data-link=\"{toBool:gender:toString}\" type=\"checkbox\" /> Male</label>\n\n  <div class=\"block\" data-link=\"{radiogroup gender}\">\n    <label><input value=\"male\" type=\"radio\" /> Male</label><br/>\n    <label><input data-link=\"gender\" value=\"female\" type=\"radio\" /> Female</label>\n  </div>\n\n  <select data-link=\"gender\" class=\"block\">\n    <option value=\"male\">Male</option>\n    <option value=\"female\">Female</option>\n  </select>\n\n  <textarea data-link=\"name\" class=\"block\"></textarea>\n\n  <div class=\"block\">\n    <span data-link=\"name\" contenteditable=\"true\"></span>\n  </div>\n\n  <div class=\"block\">\n    {^{textbox name label=\"Name:\"/}}\n  </div>\n\n  <hr/>\n\n  <div class=\"green\"><b>person:</b> {^{>name}} {^{>gender}}</div>\n\n$.views.converters({\n  toString: function(val) {\n   return val ? 'male' : 'female';\n  },\n  toBool: function(val) {\n    return val === 'male';\n }\n});\n\n$.views.tags({\n  textbox: {\n    onBind: function() {\n      // Find input in contents\n      this.linkedElem = this.contents(\"input\");\n    },\n    onUpdate: false, // No need to re-render whole tag, when content updates.\n    template: \"{{:~tag.tagCtx.props.label}} \"\n  }\n});\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {name: \"Jo\", gender: \"male\"};\n\ntmpl.link(\"#result\", person);\n\n<input data-link=\"name\"/>\n\n<label><input data-link=\"{toBool:gender:toString}\" type=\"checkbox\" /> Male</label>\n\n<div data-link=\"{radiogroup gender}\">\n  <label><input value=\"male\" type=\"radio\" /> Male</label>\n  <label><input value=\"female\" type=\"radio\" /> Female</label>\n</div>\n\n<select data-link=\"gender\">\n  <option value=\"male\">Male</option>\n  <option value=\"female\">Female</option>\n</select>\n\n<textarea data-link=\"name\"></textarea>\n\n<span data-link=\"name\" contenteditable=\"true\"></span>\n\n{^{textbox name/}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "Abbreviated syntax and full syntax for data-link",
        "text": "Abbreviated syntax and full syntax for data-link\nNotice that on the above elements, the data-link=\"name\" syntax automatically has two-way data-binding.\nThe full syntax for two-way binding is data-link=\"{:name:}\". See Data-linked elements for syntax details.\nNote: To specify one-way binding only, use the full syntax, but without the final colon: data-link=\"{:name}.\n"
      },
      {
        "_type": "para",
        "title": "Converters: convert and convert back ",
        "text": "Converters: convert and convert back \nWith two way bindings, you can use a converter for each direction (from/to) of the binding: convert for converting from data to the rendered value, and convert back for converting from the user input back to the data.\nIn the sample above the checkbox example is using converters. Without converters the checkbox binds to a Boolean data value. Here, converters allow it to bind instead to gender which is a string with values \"male\"/\"female\":\n<input data-link=\"{toBool:gender:toString}\" type=\"checkbox\" />\n\nThe alternative syntax for using converters on other tags also extends to convert back – so you can write:\ndata-link=\"... convert=... convertBack=...\n\nYou can set convert and convertBack to a converter name, or a function such as a helper or data method. Here is a modified version of the previous sample, using the convertBack-=... syntax, in this case set to helper functions:\n"
      },
      {
        "_type": "sample",
        "title": "Two-way binding &ndash; using helpers as converters",
        "text": "Two-way binding – using helpers as converters\n.block {display: block; margin-bottom: 10px} .green {color: green;}\n\n\n\n\n  <label class=\"block\">\n  <input data-link=\"gender convert=~toBool convertBack=~toString\" type=\"checkbox\" />\n  Male</label>\n\n  <div class=\"block\" data-link=\"{radiogroup gender}\">\n    <label><input value=\"male\" type=\"radio\" /> Male</label><br/>\n    <label><input value=\"female\" type=\"radio\" /> Female</label>\n  </div>\n\n  <hr/>\n\n  <div class=\"green\">{^{>gender}}</div>\n\nvar helpers = {\n  toString: function(val) {\n   return val ? 'male' : 'female';\n  },\n  toBool: function(val) {\n    return val === 'male';\n }\n};\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {gender: \"male\"};\n\ntmpl.link(\"#result\", person, helpers);\n\n<input data-link=\"gender convert=~toBool convertBack=~toString\" type=\"checkbox\" />\n\n\n"
      },
      {
        "_type": "para",
        "title": "<b>Additional advanced two-way  binding scenarios:</b>",
        "text": "Additional advanced two-way  binding scenarios:\n"
      },
      {
        "_type": "para",
        "title": "Triggering the two-way binding on <b>blur</b>, rather than on <b>keydown</b>",
        "text": "Triggering the two-way binding on blur, rather than on keydown\nIn the case of text boxes (or any other two-way data-linked element that takes character entry such as the textarea, contenteditable and some custom tags like as the {^{textbox}} example above), you can choose when the to binding updates the underlying data:\n\nWith trigger=true (default setting), changes to the underlying data are triggered as you type (on character entry – the keydown event, or for compatible browsers, the input event)\nWith trigger=false, changes to the underlying data are made on leaving the text box (the change or blur event)\n\nThe trigger setting can be modified:\n\nglobally, by using: $.views.settings.trigger(…):\n$.views.settings.trigger(false); \n\non each tag or element by writing:\n<input data-link=\"name trigger=false\"/> \n{^{textbox name trigger=false}}\n\n\nIn fact you can also set trigger to a string with one or more white-space separated event names, such as:\n<input data-link=\"name trigger='keyup mouseup'\"/>`\n\n– but generally only the values true (actually equivalent to trigger='keydown') and false are useful.\n"
      },
      {
        "_type": "para",
        "title": "linkTo: Linking from/to different underlying data",
        "text": "linkTo: Linking from/to different underlying data\nIt can sometimes be useful to be able to choose different targets for the from and to bindings of a two-way bound element such as a textbox. This is possible by setting the linkTo attribute to the desired target data for the to binding.\nIn the following sample an <input/> and a <select> are bound to settings.current (from binding) and to settings.modified (to binding, using linkTo):\n<input data-link=\"current.title linkTo=modified.title\" />\n\nThe user can choose the Apply button (or hit Enter, for the submit action of the form) to copy values over from modified to current. Cancel reverts the input/select back to the current data:\n"
      },
      {
        "_type": "sample",
        "title": "linkTo",
        "text": "linkTo\n\n\n\n.title {display: inline-block; border:1px solid; padding:5px; margin-bottom: 15px}\nform {border: 1px solid gray; display: inline-block; padding: 5px; margin-bottom: 15px;}\ninput, button, select {margin: 5px;} \n\n\n\n\n\n<b>Current settings:</b>\n<span class=\"title\" data-link=\"\n  css-border-color{:current.color}\n  css-color{:current.color}\n  {:current.title}\n\"></span><br/>\n\n<form data-link=\"{on 'submit' apply}\">\n  <em>Modify settings:</em><br/><br/>\n  Color:\n  <select data-link=\"current.color linkTo=modified.color\">\n    <option>red</option>\n    <option>green</option>\n  </select><br/>\n  Name:\n  <input data-link=\"current.title linkTo=modified.title\" />\n  <hr />\n  Modified settings:\n  <span class=\"title\" data-link=\"\n    css-border-color{:modified.color}\n    css-color{:modified.color}\n    {:modified.title}\n  \"></span><br/>\n  <button type=\"submit\">Apply</button>\n  <button data-link=\"{on cancel}\">Cancel</button><br/>\n</form><br/>\n\n<em>Underlying data:</em><br/>{^{jsonview/}}\n\n\nvar settings = {\n  current: {title: \"My title\", color:\"green\"},\n  modified: {title: \"My title\", color:\"green\"},\n  apply: function() {\n    $.observable(this.current).setProperty(this.modified);\n    return false;\n  },\n  cancel: function() {\n    $.observable(this.modified).setProperty(this.current);\n\n    $.observable(this.current).setProperty({name: \"\", color: \"\"});\n    $.observable(this.current).setProperty(this.modified);\n  }\n}\n\nvar myTmpl = $.templates(\"#myTmpl\");\n\nmyTmpl.link(\"#result\", settings);\nColor: \n<select data-link=\"current.color linkTo=modified.color\">\n  ...\n</select>\n\nName:\n<input data-link=\"current.title linkTo=modified.title\" />\n\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linking to/from multiple arguments, using convert and convertBack",
        "text": "Data-linking to/from multiple arguments, using convert and convertBack\nWhen data-linking binds from more than one argument (using a convert converter to combine values), then two-way binding can be made to bind back not just to the first argument, but to all of the arguments. This is achieved by providing a convert back converter which returns an array of values, one for each argument, and is shown in the following example:\n"
      },
      {
        "_type": "sample",
        "text": "\n  <input data-link=\"{toFull:first last:fromFull}\"/><br/><br/>\n\n  First: <em>{^{:first}}</em><br/>\n  Last: <b>{^{:last}}</b>\n\n\n\nvar myTmpl = $.templates(\"#myTmpl\"),\n  data = { first: \"Jo\", last: \"Blow\" };\n\n$.views.converters({\n  toFull: function(first, last) {\n    return first + \" \" + last;\n  },\n  fromFull: function(fullname) {\n    var names = fullname.split(\" \");\n    var last = names.pop();\n    var first = names.join(\" \"); \n    return [first, last]; // Return array for binding back to the two arguments\n  }\n});\n\nmyTmpl.link(\"#page\", data);\nData-link to two arguments, first and last:\n<input data-link=\"{toFull:first last:fromFull}\"/>\n\nConvert back converter fromFull returns an array:\n$.views.converters({\n  toFull: function(first, last) {\n    return first + \" \" + last;\n  },\n  fromFull: function(fullname) {\n    ...\n    return [first, last]; // Return array for binding back to the two arguments\n  }\n});\n\n\n"
      }
    ]
  },
  "linked-paths": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "A data-linked template may include chained paths such as manager.address.ZIP which step through chained object properties:\n<input data-link=\"manager.address.ZIP\" />\n\n{^{if manager.address.ZIP}}\n  ZIP: {^{:manager.address.ZIP}}\n{{/if}}  \n\n"
      },
      {
        "_type": "para",
        "title": "Data-linking to deep changes in the path ('deep linking')",
        "text": "Data-linking to deep changes in the path ('deep linking')\nThe chained paths can be in the data-link=\"...\" expression of data-linked elements or in data-linked tags: {^{...}}. Either way, the template data-binding will automatically ‘listen’ to observable changes in the leaf property (ZIP in this case).\nBut sometimes you may want your template to respond dynamically to changes on objects higher up in the path (deep changes on the path). You can specify this by a simple syntax change: replace a . with a ^ at the level up to which you want to listen to changes.\nFor example, write manager.address^ZIP in order to respond not only to leaf changes (to ZIP) but also to observable changes in the address property of the manager. And write manager^address.ZIP in order to data-bind also to changes where the manager property of the top-level team object is swapped observably to another manager object.\n(If you know that in your app the objects higher up the path will never change dynamically, then stick with the default leaf binding, since that will provide better perf optimization…)\nSee also the related discussion and examples on using $.observe() with deep changes.\nHere it is in a sample, with leaf binding only. Editing the ZIP or clicking “Change leaf values” triggers template updates. But clicking “Change manager” does not work.\nClick on Try it and change paths to manager^address.ZIP – and see how “Change manager” now works.\n"
      },
      {
        "_type": "sample",
        "title": "Leaf binding only",
        "text": "Leaf binding only\n\n  Change leaf values\n  Change manager\n  \n\n\n\n\n<input data-link=\"manager.address.ZIP\" />\n\n{^{if manager.address.ZIP}}\n  ZIP: {^{:manager.address.ZIP}}\n{{/if}}\n\n<hr/>\n\nManager: {^{if manager === person1}}person1{{else}}person2{{/if}}\n\n\nvar team = {\n  person1: {\n    address: {\n      City: \"New York\",\n      ZIP: \"10035\"\n    }\n  },\n  person2: {\n    address: {\n      City: \"London\"\n    }\n  }\n};\n\nteam.manager = team.person1;\n\n\n$(\"#modifyLeaf\").on(\"click\", function() {\n  $.observable(team.manager.address).setProperty({\n    \"ZIP\": team.manager.address.ZIP === \"45008\" ? \"\" : \"45008\"\n  });\n});\n\n$(\"#changeManager\").on(\"click\", function() {\n  $.observable(team).setProperty({\n    manager: team.manager === team.person1 ? team.person2 : team.person1\n  });\n});\n\nvar tmpl = $.templates(\"#managerTmpl\");\n\ntmpl.link(\"#result\", team);\n<input data-link=\"manager.address.ZIP\" />\n\n{^{if manager.address.ZIP}}\n  ZIP: {^{:manager.address.ZIP}}\n{{/if}}\n\nModify leaf: template values update in response:\n$.observable(team.manager.address).setProperty({\n  \"ZIP\": team.manager.address.ZIP === \"45008\" ? \"\" : \"45008\"\n});\n\nChange manager: template values do not update:\n$.observable(team).setProperty({\n  manager: team.manager === person1 ? person2 : person1\n});\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is the same sample but with the deep path binding to manager: manager^address.ZIP\n"
      },
      {
        "_type": "sample",
        "title": "Data-linking to deep changes",
        "text": "Data-linking to deep changes\n\n  Change leaf values\n  Change manager\n  \n\n\n\n\n<input data-link=\"manager^address.ZIP\" />\n\n{^{if manager^address.ZIP}}\n  ZIP: {^{:manager^address.ZIP}}\n{{/if}}\n\n<hr/>\n\nManager: {^{if manager === person1}}person1{{else}}person2{{/if}}\n\n\nvar team = {\n  person1: {\n    address: {\n      City: \"New York\",\n      ZIP: \"10035\"\n    }\n  },\n  person2: {\n    address: {\n      City: \"London\"\n    }\n  }\n};\n\nteam.manager = team.person1;\n\n\n$(\"#modifyLeaf\").on(\"click\", function() {\n  $.observable(team.manager.address).setProperty({\n    \"ZIP\": team.manager.address.ZIP === \"45008\" ? \"\" : \"45008\"\n  });\n});\n\n$(\"#changeManager\").on(\"click\", function() {\n  $.observable(team).setProperty({\n    manager: team.manager === team.person1 ? team.person2 : team.person1\n  });\n});\n\nvar tmpl = $.templates(\"#managerTmpl\");\n\ntmpl.link(\"#result\", team);\n<input data-link=\"manager^address.ZIP\" />\n\n{^{if manager^address.ZIP}}\n  ZIP: {^{:manager^address.ZIP}}\n{{/if}}\n\nModify leaf (ZIP) or manager: template values all update correctly in response\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "And here is a variant of the same demo, showing changes to all three levels of manager^address.ZIP: ZIP, address and manager.\n"
      },
      {
        "_type": "sample",
        "title": "Data-linking to deep changes (three levels)",
        "text": "Data-linking to deep changes (three levels)\n\n  Change leaf values\n  New address\n  UK address\n  Change manager\n  \n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"manager^name\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"manager^address.street\" /></td></tr>\n    <tr>\n      {^{if manager^address.ZIP}}\n        <td>ZIP:</td><td><input data-link=\"manager^address.ZIP\" /></td>\n       {{else}}\n      <td colspan=\"2\">UK address - No ZIP</td>\n      {{/if}}\n    </tr>\n  </tbody></table>\n\nvar person1 = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\",\n    ZIP: \"34009\"\n  }\n};\n\nvar person2 = {\n  name: \"Henry\",\n  address: {\n    street: \"Trinity St\"\n  }\n};\n\nvar data = {\n  manager: person1\n};\n\n$(\"#modifyLeaf\").on(\"click\", function() {\n  $.observable(data.manager).setProperty({\n    name: \"Hermione\",\n    \"address.street\": \"Main St\",\n    \"address.ZIP\": \"45008\"\n  });\n});\n\n$(\"#changeAddress\").on(\"click\", function() {\n  $.observable(data.manager).setProperty(\n    \"address\", \n    {\n      street: \"New Street\",\n      ZIP: \"99999\"\n    }\n  );\n});\n\n$(\"#UKAddress\").on(\"click\", function() {\n  $.observable(data.manager).setProperty(\n    \"address\", \n    {\n      street: \"St James St\"\n    }\n  );\n});\n\n$(\"#changeManager\").on(\"click\", function() {\n  $.observable(data).setProperty({\n    manager: data.manager === person1 ? person2 : person1\n  });\n});\n\nvar tmpl = $.templates(\"#managerTmpl\");\n\ntmpl.link(\"#result\", data);\n{^{if manager^address.ZIP}}\n  <td>...<input data-link=\"manager^address.ZIP\" /></td>\n{{else}}\n  <td>...UK address - No ZIP</td>\n{{/if}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "(See also this sample, showing similar deep linking but with computed get/set properties: data-link=\"manager()^address().ZIP()\")\n"
      },
      {
        "_type": "links",
        "title": "See also",
        "text": "See also\n"
      }
    ]
  },
  "link-computed": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Data-linking to computed observables can include:\n\ndata-linking to a computed value (as in this sample):\n<span data-link=\"person.fullName()\"></span>\n\ntwo-way data-linking to a get/set property (as in this sample):\n<input data-link=\"person.firstName()\" />\n\ndata-linking to a deep path that includes one or more computed values (as in this sample – where the displayed ZIP updates correctly when team.manager() changes):\n<span data-link=\"manager()^address().ZIP()\"></span>\n\ndata-linking to multiple targets as in:\n<input data-link=\"{:name():} placeholder{:namePlaceholder()}\" />\n\n– which has two-way data-linking to name() and data-linking of the placeholder target to namePlaceholder()\n\nSee:\n\nData / View Model\nComputed properties and computed observables\nSamples: fullName() – variants\nSamples: Shopping cart - totalAmount()\nCompiled VMs - Team manager sample\n\n"
      }
    ]
  },
  "link-targets": {
    "sections": [
      {
        "_type": "links",
        "title": "",
        "text": ""
      }
    ]
  },
  "link-input": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "This section shows data-linking to:\n\ntextboxes (<input/>)\ncheckboxes (<input type=\"checkbox\"/>)\nradio buttons  (<input type=\"radio\"/>)\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linked textboxes",
        "text": "Data-linked textboxes\nThe following sample shows data-linked textboxes, with examples of two-way binding, one-way binding, and use of converters (convert and convert back).\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <input data-link=\"name\"/>\n  <em>Two-way</em><br/>\n\n  <input data-link=\"{upper:name:lower}\"/>\n  <em>Two-way with 'upper' and 'lower' converters (convert/convert back)</em><br/>\n\n  <input data-link=\"{:name}\"/>\n  <em>One-way</em><br/>\n\n  <input data-link=\"{upper:name}\"/>\n  <em>One-way with 'upper' converter</em><br/>\n\n  <input data-link=\"{upper:name trigger=false:lower}\"/>\n  <em>Two-way with convert/convert back (no trigger on keydown, only on blur)</em><br/>\n\n  <span class=\"spanbox\" data-link=\"name\"></span>\n  <em>Data-linked span</em>\n\n$.views.converters({\n  upper: function(val) {\n    return val.toUpperCase();\n  },\n  lower: function(val) {\n    return val.toLowerCase();\n  }\n});\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {name: \"Jo\"};\n\ntmpl.link(\"#result\", person);\nTwo-way:\n<input data-link=\"name\"/>\n\nTwo-way with ‘upper’ and ‘lower’ converters (convert/convert back):\n<input data-link=\"{upper:name:lower}\"/>\n\nOne-way:\n<input data-link=\"{:name}\"/>\n\nOne-way with ‘upper’ converter:\n<input data-link=\"{upper:name}\"/>\n\nTwo-way with convert/convert back – trigger=false (no trigger on keydown, only on blur):\n<input data-link=\"{upper:name trigger=false:lower}\"/>\n\nData-linked span:\n<span data-link=\"name\"></span>\n\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linked checkboxes",
        "text": "Data-linked checkboxes\nThe following sample shows data-linked checkboxes, with examples of two-way binding, one-way binding, and use of converters (convert and convert back).\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <label><input type=\"checkbox\" data-link=\"member\"/> Member</label>\n  <em>Two-way</em><br/>\n\n  <label><input type=\"checkbox\" data-link=\"{not:member:not}\"/> Non-member</label>\n  <em>Two-way with 'not' converters (convert/convert back)</em><br/>\n\n  <label><input type=\"checkbox\" data-link=\"{:member}\"/> Member</label>\n  <em>One-way</em><br/>\n\n  <label><input type=\"checkbox\" data-link=\"{not:member}\"/> Non-member</label>\n  <em>One-way with 'not' converter</em><br/>\n\n  <span class=\"spanbox\" data-link=\"member\"></span>\n  <em>Data-linked span</em><br/>\n\n  <span class=\"spanbox\" data-link=\"{if member tmpl='Member'}{else tmpl='Non-member'}\"></span>\n  <em>Data-linked span with if-binding</em><br/>\n\n  <span class=\"spanbox\">{^{if member}}Member{{else}}Non-member{{/if}}</span>\n  <em>Data-linked if/else tags</em><br/>\n\n$.views.converters({\n  not: function(val) {\n    return !val;\n  }\n});\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {member: true};\n\ntmpl.link(\"#result\", person);\nTwo-way:\n<input type=\"checkbox\" data-link=\"member\"/>\n\nTwo-way with ‘not’ converters (convert/convert back):\n<input type=\"checkbox\" data-link=\"{not:member:not}\"/>\n\nOne-way:\n<input type=\"checkbox\" data-link=\"{:member}\"/>\n\nOne-way with ‘not’ converter:\n<input type=\"checkbox\" data-link=\"{not:member}\"/>\n\nData-linked span:\n<span class=\"spanbox\" data-link=\"member\"></span>\n\nData-linked span with if-binding:\n<span class=\"spanbox\" data-link=\"{if member tmpl='Member'}{else tmpl='Non-member'}\"></span>\n\nData-linked if/else tags:\n{^{if member}}Member{{else}}Non-member{{/if}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linked radio buttons",
        "text": "Data-linked radio buttons\nThe simplest way to provide two-way data-linking to a group of radio buttons is by wrapping with the <input>s with a {^{radiogroup ...}} tag.\nAlternatively, it is also possible to data-link directly to the <input> elements.\n"
      },
      {
        "_type": "para",
        "title": "Samples in this section",
        "text": "Samples in this section\nThis topic includes the following radio-button samples showing data-linked radio buttons:\n\nTwo-way data-binding, with {radiogroup}\nTwo-way data-binding, linking directly to the input elements\nTop-level linking directly to the input elements\nTop-level with {radiogroup} binding\nData-driven by array data (in a {{for}} loop)\nData-driven by an editable array (in a {^{for}} loop)\nData-driven by an editable array – including id\nUsing converters\n\n"
      },
      {
        "_type": "para",
        "title": "Radio buttons &ndash; two-way data-binding &ndash; using {^{radiogroup}}  ",
        "text": "Radio buttons – two-way data-binding – using {^{radiogroup}}  \nA radio button group will generally consist of a group of <input> elements of type \"radio\", each associated with a <label> (which either wraps the <input>, or references it by id, through the for=\"inputId\" attribute).\nTo data-link the radio buttons, wrap the <input> (and <label>) elements with a {^{radiogroup ...}} tag, linking to the appropriate data path such as the selectedCar property on the current data object:\n{^{radiogroup selectedCar}}\n\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  {^{radiogroup selectedCar}}\n    <label><input type=\"radio\" value=\"\"/>\n      None</label><br/>\n    <label><input type=\"radio\" value=\"vlv\"/>\n      Volvo</label><br/>\n    <label><input type=\"radio\" value=\"frd\"/>\n      Ford</label><br/>\n  {{/radiogroup}}\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {selectedCar: \"frd\"};\n\ntmpl.link(\"#result\", data);\nData:\nvar data = {\n  selectedCar: \"frd\",\n  ...\n};\n\nHTML:\n{^{radiogroup selectedCar}}\n  <label><input type=\"radio\" value=\"\"/> None</label>\n  <label><input type=\"radio\" value=\"vlv\"/> Volvo</label>\n  <label><input type=\"radio\" value=\"frd\"/> Ford</label>\n{{/radiogroup}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "Radio buttons &ndash; data-binding directly to the &lt;inputs>",
        "text": "Radio buttons – data-binding directly to the <inputs>\nIt is also possible to data-link directly to <input> elements, without using a {{radiogroup}} tag, by:\n\ndata-linking each <input> directly (each to the same data path, such as data-link=\"selectedCar\")\nincluding a name attribute on each <input> of the group (such as name=\"cars\")\n\n<label><input name=\"cars\" type=\"radio\" value=\"vlv\" data-link=\"selectedCar\"/> ...\n\nNote that setting the name attribute was not necessary when using {{radiogroup}} – since the {{radiogroup}} tag will automatically add a generated name property to each <input>, if none has been specified).\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n  <label><input name=\"cars\" type=\"radio\" value=\"\" data-link=\"selectedCar\"/>\n    None</label><br/>\n  <label><input name=\"cars\" type=\"radio\" value=\"vlv\" data-link=\"selectedCar\"/>\n    Volvo</label><br/>\n  <label><input name=\"cars\" type=\"radio\" value=\"frd\" data-link=\"selectedCar\"/>\n    Ford</label><br/>\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {selectedCar: \"frd\"};\n\ntmpl.link(\"#result\", data);\nData:\nvar data = {\n  selectedCar: \"frd\",\n  ...\n};\n\nHTML:\n<label><input name=\"cars\" type=\"radio\" value=\"\" data-link=\"selectedCar\"/> None ...\n<label><input name=\"cars\" type=\"radio\" value=\"vlv\" data-link=\"selectedCar\"/> Volvo ...\n<label><input name=\"cars\" type=\"radio\" value=\"frd\" data-link=\"selectedCar\"/> Ford ...\n\n\n"
      },
      {
        "_type": "para",
        "title": "Top-level data-linking of radio buttons",
        "text": "Top-level data-linking of radio buttons\nFor top-level data-linking, there are two alternatives:\n\nTop-level data-linked <input> elements (using direct data-linking as in the previous example)\nTop-level {radiogroup} binding (shown also here)\n\nThe following two samples show those two approaches:\n"
      },
      {
        "_type": "sample",
        "title": "Top-level data-linked &lt;input> elements",
        "text": "Top-level data-linked <input> elements\n\n  \n    None\n  \n    Volvo\n  \n    Ford\n\n  \n\nvar data = {selectedCar: \"frd\"};\n\n$.link(true, \"#top-level-linked\", data);\n<div id=\"top-level-linked\">\n  <label><input name=\"cars\" type=\"radio\" value=\"\" data-link=\"selectedCar\"/> None...\n  ...\n\nvar data = {selectedCar: \"frd\"};\n$.link(true, \"#top-level-linked\", data);\n\n\n"
      },
      {
        "_type": "sample",
        "title": "Top-level {radiogroup ...} binding",
        "text": "Top-level {radiogroup ...} binding\n\n  \n    \n      None\n    \n      Volvo\n   \n      Ford\n  \n\n  \n\nvar data = {selectedCar: \"frd\"};\n\n$.link(true, \"#top-level-linked\", data);\n\n<div id=\"top-level-linked\">\n  <div data-link=\"{radiogroup selectedCar}\">\n    <label><input type=\"radio\" value=\"\"/> None...\n    ...\n\nvar data = {selectedCar: \"frd\"};\n$.link(true, \"#top-level-linked\", data);\n\n\n"
      },
      {
        "_type": "para",
        "title": "Radio buttons &ndash; in {{for}} loop with array",
        "text": "Radio buttons – in {{for}} loop with array\nIn this example, a cars array has values for the displayed name and for the corresponding id (used as key, and data-linked to the selectedCar property).\nWe provide a first radio button for the ‘unselected’ case, and then loop through the array using {{for cars}} to provide a radio button for each item.\nWe wrap both the initial static radio button and the buttons rendered by {{for}} in a {{radiogroup}} tag providing two-way data-link binding.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  {^{radiogroup selectedCar}}\n    <label><input type=\"radio\" value=\"\"/> None</label><br/>\n    {{for cars}}\n      <label><input type=\"radio\" value=\"{{:id}}\"/> {{:name}}</label><br/>\n    {{/for}}\n  {{/radiogroup}}\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  selectedCar: \"frd\",\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"},\n    {id: \"hnd\", name: \"Honda\"}\n  ]\n};\n\ntmpl.link(\"#result\", data);\nData includes cars array:\nvar data = {\n  selectedCar: \"frd\",\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    ...\n  ]\n};\n\nFirst radio button – ‘unselected’ value: \"\":\n  <label><input type=\"radio\" value=\"\"/> None</label><br/>\n\n{{radiogroup}} wrapping first ‘unselected’ radio button and additional data-driven array of radio buttons:\n{^{radiogroup selectedCar}}\n  <label><input type=\"radio\" value=\"\"/> None</label><br/>\n  {{for cars}}\n    <label><input type=\"radio\" value=\"{{:id}}\"/> {{:name}}</label><br/>\n  {{/for}}\n{{/radiogroup}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "Radio buttons &ndash; in {^{for}} loop with dynamic array",
        "text": "Radio buttons – in {^{for}} loop with dynamic array\nIn this example we allow the user to add and remove items from the array, and to change values such as name. The id value (used as key) is not editable.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <button data-link=\"{on add}\">Add car</button>\n  <table>\n    <tbody>\n      {^{for cars}}\n        <tr>\n          <td><input data-link=\"name\"/></td>\n          <td>{{:id}}</td>\n          <td><span class=\"remove\" data-link=\"{on ~root.remove #index}\"></span></td>\n        </tr>\n      {{/for}}\n    </tbody>\n  </table><br/>\n\n  {^{radiogroup selectedCar}}\n    <label><input type=\"radio\" value=\"\"/> None</label><br/>\n    {^{for cars}}\n      <label><input type=\"radio\" value=\"{{:id}}\"/> {^{:name}}</label><br/>\n    {{/for}}\n  {{/radiogroup}}<br/>\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span>\n\nvar idCount = 0;\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  add: function() {\n    idCount++;\n    var id = \"car\" + idCount;\n    $.observable(this.cars).insert({id: id, name: \"name\" + idCount});\n    $.observable(this).setProperty(\"selectedCar\", id);\n  },\n  remove: function(index) {\n    $.observable(this.cars).remove(index);\n  },\n  selectedCar: \"frd\",\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"},\n    {id: \"hnd\", name: \"Honda\"}\n  ]\n};\n\ntmpl.link(\"#result\", data);\nThe cars array (but not the id properties) is editable. We use the data-linked {^{for ...}} tag:\n{^{radiogroup selectedCar}}\n  <label><input type=\"radio\" value=\"\"/> None</label>\n  {^{for cars}}\n    <label><input type=\"radio\" value=\"{{:id}}\"/> {^{:name}}</label>\n  {{/for}}\n{{/radiogroup}}<\n\n\n"
      },
      {
        "_type": "para",
        "title": "Radio buttons &ndash; dynamic array including id (value)",
        "text": "Radio buttons – dynamic array including id (value)\nHere we allow the user also to change the id value (used as key) – which requires more advanced data-link syntax: value^{:id} to update the value of the <input>s when the id changes.\nWe provide two radio button groups – showing the alternative syntax styles – data-linking through a {{radiogroup}} wrapper tag, or data-linking directly to the <input>s. Since both groups data-link to the same selectedCar property, the two-way binding keeps them in sync.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <button data-link=\"{on add}\">Add car</button>\n  <table>\n    <tbody>\n      {^{for cars}}\n        <tr>\n          <td><input data-link=\"name\"/></td>\n          <td><input data-link=\"id\"/></td>\n          <td><span class=\"remove\" data-link=\"{on ~root.remove #index}\"></span></td>\n        </tr>\n      {{/for}}\n    </tbody>\n  </table><br/>\n\n  {^{radiogroup selectedCar}}\n    <label><input type=\"radio\" value=\"\"/> None</label><br/>\n    {^{for cars}}\n      <label><input type=\"radio\" data-link=\"value{:id}\"/> {^{:name}}</label><br/>\n    {{/for}}\n  {{/radiogroup}}<br/>\n \n  <label><input name=\"cars\" type=\"radio\" value=\"\" data-link=\"selectedCar\"/> None</label><br/>\n  {^{for cars}}\n    <label><input name=\"cars\" type=\"radio\"\n      value=\"{{:id}}\" data-link=\"{:~root.selectedCar:} value^{:id}\"\n    /> {^{:name}}</label><br/>\n  {{/for}}\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span>\n\nvar idCount = 0;\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  add: function() {\n    idCount++;\n    var id = \"car\" + idCount;\n    $.observable(this.cars).insert({id: id, name: \"name\" + idCount});\n    $.observable(this).setProperty(\"selectedCar\", id);\n  },\n  remove: function(index) {\n    $.observable(this.cars).remove(index);\n  },\n  selectedCar: \"frd\",\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"},\n    {id: \"hnd\", name: \"Honda\"}\n  ]\n};\n\ntmpl.link(\"#result\", data);\nTwo radio button groups:– with {{radiogroup}}:\n{^{radiogroup selectedCar}}\n  <label><input type=\"radio\" value=\"\"/> None</label>\n  {^{for cars}}\n    <label><input type=\"radio\" data-link=\"value{:id}\"/> {^{:name}}</label>\n  {{/for}}\n{{/radiogroup}}\n\n– and with direct data-linking to the <input>s:\n<label><input name=\"cars\" type=\"radio\" value=\"\" data-link=\"selectedCar\"/> None</label>\n{^{for cars}}\n  <label><input name=\"cars\" type=\"radio\"\n    value=\"{{:id}}\" data-link=\"{:~root.selectedCar:} value^{:id}\"\n  /> {^{:name}}</label>\n{{/for}}\n\nSince the id is also editable, we are data-linking to id: data-link=\"value{:id}\".\nFor the second style (data-linking directly to the <input>) we need to ensure that the value is initialized during rendering, using value=\"{{:id}}\" (to ensure correct initial selection of the Ford radio button – based on the initial value \"frd\" of selectedCar) – in addition to binding to subsequent changes in id using value^{:id}.\n\n"
      },
      {
        "_type": "para",
        "title": "Radio buttons &ndash; with converters",
        "text": "Radio buttons – with converters\nIn this last example we use convert and convert back converters to convert from the selIndex, the index of the selected radio button, to the value of the id key, and back.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <label>\n    <input name=\"cars\" type=\"radio\" value=\"\" data-link=\"{toId:selIndex:fromId}\"/>\n    None\n  </label><br/>\n  {^{radiogroup selIndex convert=\"toId\" convertBack=\"fromId\"}}\n    {^{for cars}}\n      <label><input type=\"radio\" value=\"{{:id}}\"/> {^{:name}}</label><br/>\n    {{/for}}\n  {{/radiogroup}}\n\n  <span class=\"spanbox\" data-link=\"selIndex\"></span> <em>Selected index</em><br/>\n  <span class=\"spanbox\"\n  data-link=\"selIndex === -1 ? 'None' : cars[selIndex].name\"></span>\n  <em>Selected car name</em>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  selIndex: 1,\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"},\n    {id: \"hnd\", name: \"Honda\"}\n  ]\n};\n\n$.views.converters({\n  fromId: function(val) { // convert from id to index\n    var index = -1;\n    this.tagCtx.view.data.cars.forEach(function(car, ind) {\n      if (val === car.id) {\n        index = ind;\n      }\n    });\n    return index;\n  },\n  toId: function(val) {  // convert back from index to id\n    return val === -1 ? \"\" : this.tagCtx.view.data.cars[val].id;\n}});\n\ntmpl.link(\"#result\", data);\nDefine converters:\n$.views.converters({\n  fromId: function(val) { // convert from id to index\n    var index = -1;\n    this.tagCtx.view.data.cars.forEach(function(car, ind) {\n      if (val === car.id) {\n        index = ind;\n      }\n    });\n    return index;\n  },\n  toId: function(val) {  // convert back from index to id\n    return val === -1 ? \"\" : this.tagCtx.view.data.cars[val].id;\n}});\n\nInitialize the data\nvar data = {\n  selIndex: 1,\n  cars: [...]\n}\n\nData-link to selIndex, using the converters:\n{^{radiogroup selIndex convert=\"toId\" convertBack=\"fromId\"}}\n\nIf we had used the direct linking to <input>s, we would have used:\n<input name=\"cars\" type=\"radio\" \n  value=\"{{:id}}\" data-link=\"{toId:~root.selIndex:fromId} value^{:id}\"\n/>\n\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "link-select": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "This section shows data-linking to <select> elements:\n\nTwo-way data-binding\nData-driven by array data (in a {{for}} loop)\nData-driven by an editable array (in a {^{for}} loop)\nUsing converters\n\n"
      },
      {
        "_type": "para",
        "title": "&lt;select&gt;: two-way data-binding",
        "text": "<select>: two-way data-binding\nThe <selects>s are data-linked to the selectedCar property (one a drop-down and the other a listbox: size=\"3\").\nChanging selection on one <select> triggers the corresponding selection change on the other, thanks to two-way binding to the selectedCar property:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <select data-link=\"selectedCar\">\n    <option value=\"\">Choose a car</option>\n    <option value=\"vlv\">Volvo</option>\n    <option value=\"frd\">Ford</option>\n  </select><br/><br/>\n\n  <select data-link=\"selectedCar\" size=\"3\">\n    <option value=\"\">Choose a car</option>\n    <option value=\"vlv\">Volvo</option>\n    <option value=\"frd\">Ford</option>\n  </select><br/>\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {selectedCar: \"frd\"};\n\ntmpl.link(\"#result\", data);\nData:\nvar data = {\n  selectedCar: \"frd\",\n  ...\n};\n\nHTML:\n<select data-link=\"selectedCar\">\n  <option value=\"\">Choose a car</option>\n  <option value=\"vlv\">Volvo</option>\n  <option value=\"frd\">Ford</option>\n</select>\n\n<select data-link=\"selectedCar\" size=\"3\">\n  <option value=\"\">Choose a car</option>\n  <option value=\"vlv\">Volvo</option>\n  <option value=\"frd\">Ford</option>\n</select>\n\n\n"
      },
      {
        "_type": "para",
        "title": "&lt;select&gt;: &lt;option&gt;s in {{for}} loop with array",
        "text": "<select>: <option>s in {{for}} loop with array\nA cars array has values for the displayed name and the corresponding id (used as key, and data-linked to the selectedCar property). We loop through the array using {{for cars}}, to create an <option> for each car.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <select data-link=\"selectedCar\" size=\"4\">\n    <option value=\"\">Choose a car</option>\n    {^{for cars}}\n      <option value=\"{{:id}}\">{{:name}}</option>\n    {{/for}}\n  </select><br/>\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span><br/>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  selectedCar: \"frd\",\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"},\n    {id: \"hnd\", name: \"Honda\"}\n  ]\n};\n\ntmpl.link(\"#result\", data);\nData includes cars array:\nvar data = {\n  selectedCar: \"frd\",\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    ...\n  ]\n};\n\nThe first <option> has the ‘unselected’ value: \"\". The following <option>s are in a {{for}} loop:\n<select data-link=\"selectedCar\" size=\"4\">\n  <option value=\"\">Choose a car</option>\n  {^{for cars}}\n    <option value=\"{{:id}}\">{{:name}}</option>\n  {{/for}}\n</select>\n\n\n"
      },
      {
        "_type": "para",
        "title": "&lt;select&gt;: &lt;option&gt;s in {^{for}} loop with dynamic array",
        "text": "<select>: <option>s in {^{for}} loop with dynamic array\nIn this example we allow the user to add and remove items from the array, and to change values such as name and id (the key).\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <button data-link=\"{on add}\">Add car</button>\n  <table>\n    <tbody>\n      {^{for cars}}\n        <tr>\n          <td><input data-link=\"name\"/></td>\n          <td><input data-link=\"id\"/></td>\n          <td><span class=\"remove\" data-link=\"{on ~root.remove #index}\"></span></td>\n        </tr>\n      {{/for}}\n    </tbody>\n  </table><br/>\n\n  <select data-link=\"{:selectedCar:} size{:cars.length + 1}\">\n    <option value=\"\">Choose a car</option>\n    {^{for cars}}\n      <option data-link=\"value{:id} {:name}\"></option>\n    {{/for}}\n  </select><br/>\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span><br/>\n\nvar idCount = 0;\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  add: function() {\n    idCount++;\n    var id = \"car\" + idCount;\n    $.observable(this.cars).insert({id: id, name:\"name\"});\n    $.observable(this).setProperty(\"selectedCar\", id);\n  },\n  remove: function(index) {\n    $.observable(this.cars).remove(index);\n  },\n  selectedCar: \"frd\",\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"},\n    {id: \"hnd\", name: \"Honda\"}\n  ]\n};\n\ntmpl.link(\"#result\", data);\nThe cars array is editable. Using data-linked tags: {^{...}}:\n<select data-link=\"{:selectedCar:} size{:cars.length + 1}\">\n  <option value=\"\">Choose a car</option>\n  {^{for cars}}\n    <option data-link=\"value{:id} {:name}\"></option>\n  {{/for}}\n</select>\n\nNote that <option data-link=\"value{:id} {:name}\"></option> data-links the value to id and innerText to name. We could alternatively have written <option data-link=\"value{:id}\">{^{>name}}</option>.\n\n"
      },
      {
        "_type": "para",
        "title": "&lt;select&gt;: with converters",
        "text": "<select>: with converters\nIn this last example we use convert and convert back converters to convert from the selIndex, the index of the selected radio button, to the value of the id key, and back.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <select data-link=\"{toId:selIndex:fromId}\" size=\"4\">\n    <option value=\"\">Choose a car</option>\n    {^{for cars}}\n      <option data-link=\" value{:id} {:name}\"></option>\n    {{/for}}\n  </select><br/>\n\n  <span class=\"spanbox\" data-link=\"selIndex\"></span><br/>\n  <span class=\"spanbox\" data-link=\"selIndex === -1 ? 'None' : cars[selIndex].name\"></span>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  selIndex: 1,\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"},\n    {id: \"hnd\", name: \"Honda\"}\n  ]\n};\n\n$.views.converters({\n  fromId: function(val) {\n    var index = 1;\n    this.ctx.root.cars.forEach(function(car, ind) {\n      if (val === car.id) {\n        index = ind;\n      }\n    });\n    return index;\n  },\n  toId: function(val) {\n    return val === -1 ? \"\" : this.ctx.root.cars[val].id;\n  }\n});\n\ntmpl.link(\"#result\", data);\nDefine converters:\n$.views.converters({\n  fromId: function(val) { // convert from id to index\n    var index = -1;\n    this.ctx.root.cars.forEach(function(car, ind) {\n      if (val === car.id) {\n        index = ind;\n      }\n    });\n    return index;\n  },\n  toId: function(val) {  // convert back from index to id\n    return val === -1 ? \"\" : this.ctx.root.cars[val].id;\n  }\n});\n\nInitialize the data\nvar data = {\n  selIndex: 1,\n  cars: [...]\n}\n\nData-link to selIndex, using the converters:\n<input name=\"cars\" type=\"radio\" value=\"{{:id}}\" data-link=\"{toId:~root.selIndex:fromId} value^{:id}\"/>\n\n\n"
      },
      {
        "_type": "para",
        "title": "&lt;select&gt;: with multiple selection",
        "text": "<select>: with multiple selection\nIf the multiple attribute is set, data-linking is to an array of strings (option values).\nConverters could be used to convert to other data formats, such as an array of indices, or an array of objects.\n"
      },
      {
        "_type": "sample",
        "text": "select {margin: 10px 0;}\n\n\n\n\n  <em>Choose one or more cars:</em><br/>\n\n  <select data-link=\"selectedCar\" size=\"5\" multiple>\n    {^{for cars}}\n      <option data-link=\" value{:id} {:name}\"></option>\n    {{/for}}\n  </select><br/>\n\n  <span class=\"spanbox\">\n    {^{for selectedCar}}{{:}} {{else}}<em>None</em>{{/for}}\n  </span>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  selectedCar: [\"rnl\", \"frr\"],\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"},\n    {id: \"rnl\", name: \"Renault\"},\n    {id: \"frr\", name: \"Ferrari\"},\n    {id: \"hnd\", name: \"Honda\"}\n  ]\n};\n\ntmpl.link(\"#result\", data);\nInitialize the data (with selectedCar property as an array of strings):\nvar data = {\n  selectedCar: [\"rnl\", \"frr\"],\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    ...\n  ]\n}\n\nData-link to selectedCar array):\n<select data-link=\"selectedCar\" multiple ...>\n  {^{for cars}}\n    <option data-link=\" value{:id} {:name}\"></option>\n  {{/for}}\n</select>\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "link-textarea": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The following sample shows data-linked text boxes, with two-way binding, one-way binding, and use of converters (convert and convert back).\n"
      },
      {
        "_type": "sample",
        "title": "Two-way binding with &lt;textarea&gt;",
        "text": "Two-way binding with <textarea>\ntextarea {margin-bottom: 5px;} .pre {white-space: pre;}\n\n\n\n\n  <textarea rows=\"3\" cols=\"20\"\n    data-link=\"name\"\n  ></textarea>\n  <em>Two-way</em><br/>\n\n  <textarea rows=\"3\" cols=\"20\"\n    data-link=\"{upper:name:lower}\"\n  ></textarea>\n  <em>Two-way with 'upper' and 'lower' converters (convert/convert back)</em><br/>\n\n  <textarea rows=\"3\" cols=\"20\"\n    data-link=\"{:name}\"\n  ></textarea>\n  <em>One-way</em><br/>\n\n  <textarea rows=\"3\" cols=\"20\"\n    data-link=\"{upper:name}\"\n  ></textarea>\n  <em>One-way with 'upper' converter</em><br/>\n\n  <textarea rows=\"3\" cols=\"20\"\n    data-link=\"{upper:name trigger=false:lower}\"\n  ></textarea>\n  <em>Two-way with convert/convert back (no trigger on keydown - only on blur)</em><br/>\n\n  <span class=\"spanbox pre\" data-link=\"name\"></span>\n  <em>Data-linked span</em><br/>\n\n\n$.views.converters({\n  upper: function(val) {\n    return val.toUpperCase();\n  },\n  lower: function(val) {\n    return val.toLowerCase();\n  }\n});\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {name: \"Jo\\nBlow\"};\n\ntmpl.link(\"#result\", person);\nTwo-way:\n<textarea ... data-link=\"name\"></textarea>\n\nTwo-way with ‘upper’ and ‘lower’ converters (convert/convert back):\n<textarea ... data-link=\"{upper:name:lower}\"></textarea>\n\nOne-way:\n<textarea ... data-link=\"{:name}\"></textarea>\n\nOne-way with ‘upper’ converter:\n<textarea ... data-link=\"{upper:name}\"></textarea>\n\nTwo-way, with convert/convert back – trigger=false (no trigger on keydown - only on blur):\n<textarea ... data-link=\"{upper:name trigger=false:lower}\"></textarea>\n\nData-linked span:\n<span data-link=\"name\"></span>\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "link-contenteditable": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The following sample shows data-linked contenteditable elements, with two-way binding, one-way binding, and use of converters (convert and convert back).\n"
      },
      {
        "_type": "sample",
        "title": "Two-way binding with contenteditable elements",
        "text": "Two-way binding with contenteditable elements\n*[contenteditable] {display: inline-block; border: 1px solid green; margin-bottom:8px; padding: 5px;}\n\n\n\n  <span contenteditable=\"true\" data-link=\"name\"></span>\n  <em>Two-way</em><br/>\n\n  <span contenteditable=\"true\" data-link=\"{upper:name:lower}\"></span>\n  <em>Two-way with 'upper' and 'lower' converters (convert/convert back)</em><br/>\n\n  <span contenteditable=\"true\" data-link=\"{:name}\"></span>\n  <em>One-way</em><br/>\n\n  <span contenteditable=\"true\" data-link=\"{upper:name}\"></span>\n  <em>One-way with 'upper' converter</em><br/>\n\n  <span contenteditable=\"true\" data-link=\"{upper:name trigger=false:lower}\"></span>\n  <em>Two-way with convert/convert back (no trigger on keydown, only on blur)</em><br/>\n\n  <span class=\"spanbox pre\" data-link=\"name\"></span>\n  <em>Data-linked span</em>\n\n$.views.converters({\n  upper: function(val) {\n    return val.toUpperCase();\n  },\n  lower: function(val) {\n    return val.toLowerCase();\n  }\n});\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {name: \"Jo\\nBlow\"};\n\ntmpl.link(\"#result\", person);\nTwo-way:\n<span contenteditable=\"true\" data-link=\"name\"></span>\n\nOne-way:\n<span contenteditable=\"true\" data-link=\"{:name}\"></span>\n\nOne-way with ‘upper’ converter:\n<span contenteditable=\"true\" data-link=\"{upper:name}\"></span>\n\nTwo-way with ‘upper’ and ‘lower’ converters (convert/convert back):\n<span contenteditable=\"true\" data-link=\"{upper:name:lower}\"></span>\n\nTwo-way with convert/convert back – trigger=false (no trigger on keydown, only on blur):\n<span contenteditable=\"true\" data-link=\"{upper:name trigger=false:lower}\"></span>\n\nData-linked span:\n<span data-link=\"name\"></span>\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "link-widgets": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "paragraph\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n  {^{on ~changeName}}Change name{{/on}}\n  <input data-link=\"name\" /><br/><br/>\n\n  <div data-link=\"name\"></div>\n  <div data-link=\"text{:name}\"></div>\n  <div data-link=\"html{:name}\"></div>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {name: \"Jo Blow\"};\nvar swapped = false;\n\ntmpl.link(\"#result\", person, {changeName: function() {\n  swapped = !swapped;\n  $.observable(person).setProperty(\"name\", swapped ? \"Jethro Tull\" : \"Jo Blow\");\n}});\n"
      }
    ]
  },
  "link-tags": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The most common data-link expression for a data-linked element is a data path, such as:\n<div data-link=\"address.street\"></div>...\n\n– which is actually abbreviated syntax, and is equivalent to the full syntax:\n<div data-link=\"{:address.street}\"></div>...\n\nIn fact this example is using the default target of innerText, and is equivalent to the even more explicit syntax:\n<div data-link=\"text{:address.street}\"></div>...\n\nFor explanation and examples of the full syntax see the Data-linked elements (full syntax) topic.\nOur example, data-link=\"{:address.street}\" corresponds to the JsViews tag {^{:address.street}}.\nSimilarly we can data-link to any tag, such as:\n{^{:...}}, {^{>...}}, {^{for...}}, {^{if}}, {^{on}}, {^{slider}}, {^{mytag}} etc.\n\nFor example to use {^{mytag .../}} as an element binding, you simply remove the initial {^ and the last }, and optionally specify a target, such as title (or use the default innerText target):\ndata-link=\"title{mytag ...}\"\n\nA data-linked element can use multiple bindings, each of which has a target and a link expression, and where the link expression corresponds to a data-linked JsViews/JsRender tag:\ndata-link=\"target1{linkExpression1} target2{linkExpression2}\" ...\n\nExamples of tags are:\n{^{:age}}\n{^{>name}}\n{^{slider age/}}\n{^{if age < 15}}Child{{else age > 65}}Senior{{else}}Adult{{/if}}\n{^{for phones}}...{{/for}}\n{^{on increaseAge}}Increase Age{{/on}}\n{^{mytag person.name/}} \n\nThe following examples show the same tags used as link expressions for data-linking elements (using in each case the default element data-linking target innerText):\n<div data-link=\"age\"></div>\n<div data-link=\"name\"></div>\n<div data-link=\"{slider age}\"></div>\n<span data-link=\"{if age < 15 tmpl='Child'}{else age > 65 tmpl='Senior'}{else tmpl='Adult'}\"></span>\n<div data-link=\"{for phones tmpl='#phonesTmpl'}\"></div>\n<button data-link=\"{on increaseAge}\">Increase Age</button>\n<div data-link=\"{mytag person.name}\"></div>\n\nAnd the following example shows two bindings, one using the default target, and binding to a {^{slider}} tag and the other targeting the CSS background property of the div, and binding to an {^{if ...}}}{{else ...}}{{else}} tag:\n<div data-link=\"{slider age}\n css-background{if ... tmpl='green'}{else ... tmpl='red'}{else tmpl='blue'}\"></div>\n\n"
      },
      {
        "_type": "sample",
        "text": "\n\n  \n\n  \n\n  \n\n  Age:\n  \n\n\n\nvar person = {age: 23};\n\n$.views.converters(\"ageCat\", function(val) {\n  var category;\n  if (val < 15) {\n     category = \"Child\";\n  } else if (val > 65) {\n     category = \"Senior\";\n  } else {\n     category = \"Adult\";\n  }\n  return val + \" (\" + category + \")\";\n})\n\n$.link(true, \"#topLevel\", person);\nA top-level <div> is data-linked to a slider (two-way binding to age).\nIn addition, its background color is also data-linked to age, using an {if}{else} binding:\n<div data-link=\"\n  {slider age ...}\n\n  css-background{if age < 15 tmpl='green'}\n  {else age > 65 tmpl='red'}\n  {else tmpl='blue'}\n\"></div>\n\nA top-level <span> is also data-linked to age – but here instead of using an {if}{else} binding, we use the alternative approach of a {:} binding with a converter:\n<span data-link=\"{ageCat:age}\"></span>\n\nwhere the converter allows us to provide equivalent if/else semantics, in code:\n$.views.converters(\"ageCat\", function(val) {\n  var category;\n  if (val < 15) {\n     category = \"Child\";\n  } else if (val > 65) {\n     category = \"Senior\";\n  } else {\n     category = \"Adult\";\n  }\n  return val + \" (\" + category + \")\";\n})\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The following sample illustrates how any tags can be used within a template with either tag syntax or data-linked element syntax (tag bindings).\nThe identical data-linked element syntax can also be used for binding top-level data-linking elements.\nIn all three situations, the resulting rendering and interactivity are the same.\n"
      },
      {
        "_type": "sample",
        "text": "\n  button {margin-bottom: 12px;}\n  .ui-slider {margin: 16px 0;}\n  .summary {margin: 8px 0 18px 0}\n\n\n\n  <div>\n    <span data-link=\"\n      {if cell tmpl='Home'}\n      {else tmpl='Cell'}\n    \"></span>:\n    <span data-link=\"number\"></span>\n  </div>\n\n\n\n\n<h3>(Tags in template)</h3>\n\n{^{on increaseAge}}Increase Age{{/on}}\n{^{for phones}}<div>\n  {^{if cell}}Home{{else}}Cell{{/if}}: {{:number}}</div>\n{{/for}}\n{^{slider age _max=99 width=\"50%\"/}}\n<label>Age:</label>\n{^{>age}}\n({^{if 15>age}}Child{{else age>65}}Senior{{else}}Adult{{/if}})\n{^{summary/}}\n\n<hr/>\n<h3>(Data-linked elements in template)</h3>\n\n<div>\n  <button data-link=\"{on increaseAge}\">Increase Age</button>\n  <div data-link=\"{for phones tmpl='#phonesTmpl'}\"></div>\n  <div data-link=\"{slider age _max=99 width='50%'}\"></div>\n  <label>Age:</label>\n  <span data-link=\"age\"></span>\n  (<span data-link=\"\n    {if 15>age tmpl='Child'}\n    {else age>65 tmpl='Senior'}\n    {else tmpl='Adult'}\n  \"></span>)\n  <div data-link=\"{summary}\"></div>\n</div>\n\n\n(Top-level data-linked elements)\n\n\n  Increase Age\n  \n  \n  Age:\n  \n ()\n  \n\n \n\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\"\n  },\n  phones: [\n    {number: \"111 111 1111\"},\n    {number:\"222 222 2222\", cell: true}\n  ],\n  age: 23,\n  increaseAge: function() {\n    $.observable(this).setProperty(\n      \"age\",\n      this.age + 10\n    );\n  }\n};\n\n$.views.tags(\n  \"summary\",\n  \"My name is {{>name}}.\"\n  + \"I am {^{:age}} years old.\"\n);\n\ntmpl.link(\"#result\", person);\n$.link(true, \"#topLevel\", person);\nTag syntax within a template:\n{^{on increaseAge}}Increase Age{{/on}}\n{^{for phones}}\n  <div>{^{if cell}}Home{{else}}Cell{{/if}}...</div>\n{{/for}}\n{^{slider age/}}\n...\n({^{if ...}}...{{else ...}}...{{else}}...{{/if}})\n{^{summary/}}\n\nData-linked element syntax (tag bindings) either within a template or on top-level elements:\n<button data-link=\"{on increaseAge}\">Increase Age</button>\n<div data-link=\"{for phones tmpl='#phonesTmpl'}\"></div>\n<div data-link=\"{slider age}\"></div>\n...\n<span data-link=\"{if ...}{else ...}{else ...}\"></span>\n<div data-link=\"{summary}\"></div>\n\nCode to set up data-linking:\ntmpl.link(\"#result\", person); // Data-linked template\n\n$.link(true, \"#topLevel\", person); // Data-linked top-level elements\n\n\n"
      }
    ]
  },
  "link-svg": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Data-linking to SVG element attributes works exactly the same as with data-linking to HTML element attributes. Simply use the attribute name as data-link target.\nFor example to data-link to the cx attribute of an SVG element, use:\ndata-link=\"cx{:dataPathOrExpression}\"\n\n"
      },
      {
        "_type": "sample",
        "text": "\n  .svg {\n    height: 280px;\n    width: 100%;\n    border: 1px solid #bbb;\n    margin: 2px 0 -2px -4px;\n  }\n\n\n\n\n\n  <p>\n    x: <input data-link=\"x\" /><br/>\n    Rotate: <input data-link=\"angle\" />\n  </p>\n\n  <svg class=\"svg\">\n    <ellipse stroke-width=\"2\" rx=\"140\" ry=\"70\" cy=\"140\" fill=\"yellow\" stroke=\"blue\"\n      data-link=\"\n        cx{:x}\n        transform{:'rotate(' + angle + ' ' + x + ' 140)'}\n      \"\n    ></ellipse>\n  </svg>\n\n\nvar data = {x: 300, angle: 30};\n\nvar svgTmpl = $.templates(\"#svgTemplate\");\n\nsvgTmpl.link(\"#result\", data);\n<svg class=\"svg\">\n  <ellipse ... data-link=\"\n    cx{:x}\n    transform{:'rotate(' + angle + ...)'}\n  \">...\n</svg>\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "link-css": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "To data link to CSS attributes, use css-attribute-name as data-link target.\nFor example to data-link to the CSS background-color use css-background-color:\ndata-link=\"css-background-color{:dataPathOrExpression}\"\n\n"
      },
      {
        "_type": "sample",
        "text": "div div {border: 2px solid gray;}\n\n\n\n  {^{on ~changeData}}Change CSS and text{{/on}}<br/><br/>\n\n  Text: <input data-link=\"text\" /><br/>\n  Color: <input data-link=\"color\" /><br/>\n  Background: <input data-link=\"backcolor\" /><br/>\n  Width: <input data-link=\"divWidth\" /><br/><br/>\n\n  <div data-link=\"css-color{:color} css-background-color{:backcolor} css-width{:divWidth} {:text}\"></div>\n\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar divData = {\n        text: \"Some text\",  \n        color: \"red\",\n        backcolor: \"yellow\",\n        divWidth: 155\n    };\nvar swapped = false;\n\nfunction changeData() {\n  swapped = !swapped;\n  $.observable(divData).setProperty(\n    swapped\n    ? {\n        text: \"Other content\",  \n        color: \"#f0f\",\n        backcolor: \"#0ff\",\n        divWidth: \"17em\"\n      }\n    : {\n        text: \"Some text\",  \n        color: \"red\",\n        backcolor: \"yellow\",\n        divWidth: 155\n    });\n}\n\ntmpl.link(\"#result\", divData, {changeData: changeData});\n<div data-link=\"\n  css-color{:color}\n  css-background-color{:backcolor}\n  css-width{:divWidth}\n  {:text}\n\"></div>\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "link-text-html": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The default data-linking target for a data-linked element is innerText – so the following two examples are equivalent:\n<div data-link=\"name\"></div>\n\n<div data-link=\"text{:name}\"></div>\n\nTo data-link to innerHTML, use the html{} binding:\n<div data-link=\"html{:name}\"></div>\n\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n  {^{on ~changeName}}Change name{{/on}}\n  <input data-link=\"name\" /><br/><br/>\n\n  <div data-link=\"name\"></div>\n  <div data-link=\"text{:name}\"></div>\n  <div data-link=\"html{:name}\"></div>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {name: \"Jo Blow\"};\nvar swapped = false;\n\ntmpl.link(\"#result\", person, {changeName: function() {\n  swapped = !swapped;\n  $.observable(person).setProperty(\"name\", swapped ? \"Jethro Tull\" : \"Jo Blow\");\n}});\n<div data-link=\"name\"></div>\n<div data-link=\"text{:name}\"></div>\n<div data-link=\"html{:name}\"></div>\n\n\n"
      },
      {
        "_type": "para",
        "title": "HTML encoding of data-linked text",
        "text": "HTML encoding of data-linked text\nThe following approaches all guarantee HTML encoding – and therefore protect against HTML injection from data containing untrusted markup:\n<div data-link=\"name\"></div>\n<div data-link=\"text{:name}\"></div>\n<div data-link=\"html{>name}\"></div>\n{^{>name}}\n\nTo insert HTML markup without encoding (for example, from trusted markup in data), either of the following styles can be used:\n<div data-link=\"html{:name}\"></div>\n{^{:name}}<br/>\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "See also: Data-linked elements.\n"
      }
    ]
  },
  "link-class": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The value of the class attribute of an HTML element (corresponding to the className property of the HTMLElement object) is generally a white-space-separated list of class names.\nThere are two possible approaches to data-linking to class.\n\nData-link a string expression to the class as a whole, simply by setting the target to class{:...} (just as with data-linking to any other HTML attribute)\nData-link a boolean expression to class using the merge converter, in order to toggle a single class name in the white-space-separated list (adding the class when the boolean is true, and removing it when false)\n\nThe following example uses the two approaches to set the class of a div to 'redColor greenBorder yellowBackground' if a boolean isFoo is true, and otherwise to 'blueColor greenBorder'.\n"
      },
      {
        "_type": "sample",
        "text": "\n  .redColor {color:red;}\n  .blueColor {color:blue;}\n  .greenBorder {border:1px solid green;}\n  .yellowBackground {background-color:yellow;}\n\n\n\n\n\n\n  <em>Data-link class to string:</em><br/><br/>\n\n  {^{on ~setClassString}}Set class{{/on}} <br/><br/>\n\n  <div data-link=\"class{:classString}\">\n    Data-link class to string\n  </div><br/>\n\n  <em>Toggle individual class names:</em><br/><br/>\n\n  <label><input type=\"checkbox\" data-link=\"isFoo\" /> isFoo</label> <br/><br/>\n\n  <div class=\"greenBorder\" data-link=\"\n    class{merge:isFoo toggle='redColor'}\n    class{merge:isFoo toggle='yellowBackground'}\n    class{merge:!isFoo toggle='blueColor'}\n  \">Toggle individual class names</div>\n\n\nfunction setClassString() {\n  swapped = !swapped;\n  $.observable(data).setProperty(\n    \"classString\",\n    swapped\n      ? \"redColor greenBorder yellowBackground\"\n      : \"blueColor greenBorder\"\n  );\n}\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  isFoo: false,\n  classString: \"blueColor greenBorder\"\n};\nvar swapped = false;\n\ntmpl.link(\"#result\", data, {setClassString: setClassString});\n\nData-link class to string:\n<div data-link=\"\n  class{:classString}\n\">...\n\nToggle individual class names:\n<div class=\"greenBorder\" data-link=\"\n  class{merge:isFoo toggle='redColor'}\n  class{merge:isFoo toggle='yellowBackground'}\n  class{merge:!isFoo toggle='blueColor'}\n\">...\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "For further details, see the tutorial topics Data-linking class and Toggling class.\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "link-visibility": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The visible data-link target is a special built-in target in JsViews, which works through the CSS display property. It works by data-linking directly to a boolean property:\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n\n  <label><input type=\"checkbox\" data-link=\"isFoo\" /> isFoo</label> <br/><br/>\n\n  <div data-link=\"visible{:isFoo}\">\n    Show this if <em>isFoo</em> is true...\n  </div>\n\n  <div data-link=\"visible{:!isFoo}\">\n    If <em>isFoo</em> is not true, show this...\n  </div>\n\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {isFoo: false};\n\ntmpl.link(\"#result\", data);\n\n<div data-link=\"visible{:isFoo}\">...</div>\n\n<div data-link=\"visible{:!isFoo}\">...</div>\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "link-props": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "paragraph\n"
      }
    ]
  },
  "link-events": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews provides alternative ways of attaching handlers for events such as the click event:\n\nUsing jQuery event binding to attach a handler function to elements (either at top level or rendered by templates):\n$(selector).on(\"click\", handlerFn);\n\nUsing the {on} data-link binding (either on top-level data-linked elements or on elements rendered by\ntemplates):\n<button data-link=\"{on handlerFn}\">...</button>\n\nUsing the {^{on}} tag, within templates:\n{^{on handlerFn/}}\n\n\nHere are working examples of each approach:\n"
      },
      {
        "_type": "para",
        "title": "Using jQuery event binding",
        "text": "Using jQuery event binding\n$(selector).on(\"click\", handler);\n\njQuery event binding can be used to attach a handler to elements either at top level or rendered by templates.\nHere is an example showing both a top-level button element and an element within a template:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "top level\n\n\n\n  <button class=\"myButton\">in template</button>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {};\n\nvar helpers = {\n  doSomething: function() {\n    alert(\"do something\");\n  }\n}\n\ntmpl.link(\"#result\", person); // Render and link the template\n\n// Attach handler to buttons (class 'myButton'), whether in top-level or rendered content.\n$(\".myButton\").on(\"click\", helpers.doSomething);\n\n<button class=\"myButton\">top level</button>\n<span id=\"result\"></span>\n\n<script id=\"tmpl\" type=\"text/x-jsrender\">\n  <button class=\"myButton\">in template</button>\n</script>\n\n...\ntmpl.link(\"#result\", person); // Render and link the template\n\n// Attach handler to buttons (class 'myButton'), whether in top-level or rendered content. \n$(\".myButton\").on(\"click\", helpers.doSomething);\n\n\n"
      },
      {
        "_type": "para",
        "title": "Using the {on} data-link binding",
        "text": "Using the {on} data-link binding\n<button data-link=\"{on ~doSomething}\">...</button>\n\nThe {on} data-link binding provides a declarative approach to attaching handlers to elements. The handlerFn argument is passed along with other optional arguments and properties (details below): {on ... handlerFn ...}. (The first argument of type ‘function’ will be treated as handler argument).\nIt can be used either on top-level elements (provided they are data-linked – see top-level data linking), or on elements rendered by templates. Here is an example of each:\n"
      },
      {
        "_type": "sample",
        "text": "\n  top level\n\n\n\n\n\n  <button data-link=\"{on ~doSomething}\">in template</button>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {};\n\nvar helpers = {\n  doSomething: function() {\n    alert(\"do something\");\n  }\n}\n\ntmpl.link(\"#result\", person, helpers); // Render and link the template\n\n$.link(true, \"#topLinked\", person, helpers); // Data-link top-level content\n\n\n<span id=\"topLinked\">\n  <button data-link=\"{on ~doSomething}\">top level</button>\n</span>\n\n<script id=\"tmpl\" type=\"text/x-jsrender\">\n  <button data-link=\"{on ~doSomething}\">in template</button>\n</script>\n\n...\nvar helpers = {doSomething: function(){...} }\n\ntmpl.link(\"#result\", person, helpers); // Render and link the template\n\n$.link(true, \"#topLinked\", person, helpers); // Data-link top-level content\n\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "See the Editable data: hash/dictionary sample for an example of use of the {on} data-link binding, both in a template and at top-level\n"
      },
      {
        "_type": "para",
        "title": "Using the {^{on}} tag, within templates",
        "text": "Using the {^{on}} tag, within templates\nWithin templates, the tag form {^{on ...}} of the JsViews ‘on’ event binding can be convenient, as an alternative to data-link={on ...}:\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n  {^{on ~doSomething/}}\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {};\n\nvar helpers = {\n  doSomething: function() {\n    alert(\"do something\");\n  }\n}\n\ntmpl.link(\"#result\", person, helpers); // Render and link the template\n\n<script id=\"tmpl\" type=\"text/x-jsrender\">\n  {^{on ~doSomething/}}\n</script>\n\n...\ntmpl.link(\"#result\", person, helpers); // Render and link the template\n\n\n"
      },
      {
        "_type": "para",
        "title": "Calling a View Model method in the click event",
        "text": "Calling a View Model method in the click event\nThe most common usage scenario for the {on} event binding is to have the click event invoke a View Model method – for example, to provide a button to invoke the add() method, as in this sample.\n"
      },
      {
        "_type": "para",
        "title": "<b style=\"font-style: normal\">Features of the <b style=\"font-style: italic\">data-link=\"{on ...}\"</b> binding and the <b style=\"font-style: italic\">{^{on ...}}</b> tag</b>",
        "text": "Features of the data-link=\"{on ...}\" binding and the {^{on ...}} tag\n"
      },
      {
        "_type": "para",
        "title": "Determining the target element",
        "text": "Determining the target element\nThe data-link=\"{on ...}\" binding and the {^{on ...}} tag provide alternative (and generally equivalent) ways of attaching handler actions to HTML elements – differing only in how they determine which element is used:\n\nWith data-link, the element is the data-linked element\n<button data-link=\"{on ~doSomething}\">\n  Click me\n</button>\n\nWith {^{on ...}} the element is the element (or elements) wrapped by the tag\n{^{on ~doSomething}}\n  <button>\n    Click me\n  </button>\n{{/on}}\n\n\nThe HTML element above can of course be any HTML element – not necessarily <button>. But in the particular case of an {^{on}} tag wrapping a <button>, a simpler format is available – since the {^{on}} tag wrapping only text will automatically render itself as a <button>:\n"
      },
      {
        "_type": "para",
        "title": "The {^{on}} tag as button",
        "text": "The {^{on}} tag as button\nIn the case of an {^{on ...}} which wraps only text, the tag generates a <button> element with the text as label – and attaches to that element.\n{^{on ~doSomething}}\n  Click me\n{{/on}}\n\nSimilarly, {^{on ...}} with a tmpl='sometext' property generates a <button> with the text as label.\n{^{on ~doSomething tmpl=\"Click me\" /}}\n\nFinally, {^{on ...}} with no content at all will generate a <button>, and use the handler name as label.\n{^{on ~doSomething /}}\n\nHere is a working sample with six examples showing alternative styles for creating a clickable button.\nThe last example also shows that a simple {^{on ...}}test{{/on}} – for which the <button> is generated – still lets you set the button id, width, height and class (by setting those properties directly on the tag).\n"
      },
      {
        "_type": "sample",
        "text": "\n  .red {color: red;}\n\n\n\n\n\n  <button data-link=\"{on ~doSomething}\" id=\"btn0\">Click me</button>\n\n  {^{on ~doSomething}}<button id=\"btn1\">Click me</button>{{/on}}\n\n  {^{on ~doSomething}}Click me{{/on}}\n\n  {^{on ~doSomething tmpl=\"Click me\" /}}\n\n  {^{on ~doSomething /}}\n\n  {^{on ~doSomething height=13 width=75 class=\"red\" id=\"btn5\"}}Click me{{/on}}\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {};\n\nvar helpers = {\n  doSomething: function(ev) {\n    alert(\"do something. id: \" + ev.target.id);\n  }\n}\n\ntmpl.link(\"#result\", person, helpers); // Render and link the template\n\n<button data-link=\"{on ~doSomething}\" id=\"btn0\">Click me</button>\n\n{^{on ~doSomething}}<button id=\"btn1\">Click me</button>{{/on}}\n\n{^{on ~doSomething}}Click me{{/on}}\n\n{^{on ~doSomething tmpl=\"Click me\" /}}\n\n{^{on ~doSomething /}}\n\n{^{on ~doSomething height=13 width=75 class=\"red\" id=\"btn5\"}}Click me{{/on}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "Choosing the events",
        "text": "Choosing the events\nThe handlerFn argument of {on ...} can optionally be preceded by an eventName string argument  containing one or more white-space separated event names (or namespaced event names, such as \"click.my.ns\").\nIn the absence of an eventName argument, the default is to use the \"click\" event.\nHere is an sample showing three examples – which attach to the \"mouseup mousedown\", \"change\" and \"submit\" events, respectively.\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n  <label><input type=\"checkbox\" data-link=\"{on 'change' change}\"/> Decrease on change</label>\n\n  {^{on \"mouseup mousedown\" mouseUpAndDown}}Increase on up and down{{/on}} <br/><br/>\n\n  <form data-link=\"{on 'submit' formSubmit}\">\n    Age: {^{>age}} <br/>\n    Name: <input data-link=\"name\" /> <br/>\n    Submitted: {^{>submitted}} <br/><br/>\n\n    <button type=\"submit\">Submit</button>\n  </form> \n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {\n  name: \"Jo\",\n  age: 20,\n  submitted: false,\n  change: function() {\n    $.observable(this).setProperty({\n      age: this.age - 1,\n      submitted: false\n    });\n  },\n  mouseUpAndDown: function() {\n    $.observable(this).setProperty({\n      age: this.age + 1,\n      submitted: false\n    });\n  },\n  formSubmit: function() {\n    $.observable(this).setProperty(\"submitted\", true);\n    return false;\n  }  \n};\n\ntmpl.link(\"#result\", person); // Render and link the template\n\n<input type=\"checkbox\" data-link=\"{on 'change' change}\"/> ...\n\n{^{on \"mouseup mousedown\" mouseUpAndDown}} ...\n\n<form data-link=\"{on 'submit' formSubmit}\"> ...\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "And here is the same sample – but attaching to top-level data-linked elements rather than to content rendered by a data-linked template:\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n   Decrease on change\n\n  Increase on up and down \n\n  \n    Age:  \n    Name:  \n    Submitted:  \n\n    Submit\n   \n\nvar person = {\n  name: \"Jo\",\n  age: 20,\n  submitted: false,\n  change: function() {\n    $.observable(this).setProperty({\n      age: this.age - 1,\n      submitted: false\n    });\n  },\n  mouseUpAndDown: function() {\n    $.observable(this).setProperty({\n      age: this.age + 1,\n      submitted: false\n    });\n  },\n  formSubmit: function() {\n    $.observable(this).setProperty(\"submitted\", true);\n    return false;\n  }  \n};\n\n$.link(true, \"#linkedContent\", person); // Data-link top-level content\n\n<input type=\"checkbox\" data-link=\"{on 'change' change}\"/> ...\n\n<button data-link=\"{on 'mouseup mousedown' mouseUpAndDown}\"> ...\n\n<form data-link=\"{on 'submit' formSubmit}\"> ...\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "(For a more complete example of attaching to the \"submit\" event, see the Using submit sample.)\n"
      },
      {
        "_type": "para",
        "title": "Attaching handlers to specific elements within nested content &ndash; the selector argument",
        "text": "Attaching handlers to specific elements within nested content – the selector argument\nIf the {on} binding is on an element or tag with nested element content, then an additional optional selector argument can be passed (after the eventName argument and before the handlerFn argument).\nAs a result the event handler will be attached to the element(s) targeted by the selector. (This is equivalent to the jQuery ‘delegated events’ pattern).\nHere is an example where only the <li>s of class active have click handlers attached:\n"
      },
      {
        "_type": "sample",
        "text": ".active {border: 1px solid green; width: 100px; background-color: white; cursor: pointer;}\n\n\n\n\n<ul>\n  {^{on 'click' '.active' select}}\n    <li>one</li>\n    <li class=\"active\">two</li>\n    <li class=\"active\">three</li>\n  {{/on}}\n</ul>\n\n\n\n  \n    one\n    two\n    three\n  \n\n\n\nvar data = {\n  select: function(ev, eventArgs) {\n    var targetStyle = ev.target.style;\n    targetStyle.backgroundColor = targetStyle.backgroundColor===\"yellow\" ? \"white\" : \"yellow\";\n  }  \n};\n\n$.link(true, \"#linkedContent\", data); // Data-link top-level content\n\n$.templates(\"#tmpl\").link(\"#result\", data); // Render and link template\n\nExample, with data-link=\"{on}\" binding:\n{^{on 'click' '.active' select}}\n  <li>one</li>\n  <li class=\"active\">two</li>\n  ...\n\nExample, with {^{on}} tag:\n<ul data-link=\"{on 'click' '.active' select}\">\n  <li>one</li>\n  <li class=\"active\">two</li>\n  ...\n\n\n"
      },
      {
        "_type": "para",
        "title": "Multiple {on} bindings on the same element",
        "text": "Multiple {on} bindings on the same element\nIt is possible to have multiple {on} bindings on the same element – which might use different selector, eventName or handler arguments. The following sample has an outer <div> element with three {on} bindings – each attaching a different handler to different elements in the nested content  (specified by different selector arguments):\n"
      },
      {
        "_type": "sample",
        "text": "\nul { margin: 0; padding-left: 0;}\nli {border: 1px solid green; width: 100px; background-color: white; cursor: pointer; list-style: none;}\n\n\n\n  <div data-link=\"\n    {on 'click' '.addBtn' add}\n    {on 'click' '.remove' remove}\n    {on 'click' 'li' select}\n  \">\n    <button class=\"addBtn\">add</button>\n    <ul>\n      {^{for items}}\n        <li>{{>label}} <span class=\"remove\"></span></li>\n      {{/for}}\n    </ul>\n  </div>\n\n\n\n\nvar cnt = 0,\ndata = {\n  add: function(ev, eventArgs) {\n    $.observable(data.items).insert({label: \"new\" + cnt++});\n  }, \n  remove: function(ev, eventArgs) {\n    var index = $.view(ev.target).index\n    $.observable(data.items).remove(index);\n    return false;\n  },\n  select: function(ev, eventArgs) {\n    var targetStyle = ev.target.style;\n    targetStyle.backgroundColor = targetStyle.backgroundColor===\"yellow\" ? \"white\" : \"yellow\";\n  },  \n  items: [\n    {label: \"one\"},\n    {label: \"two\"},\n    {label: \"three\"}\n  ]\n};\n\n$.templates(\"#tmpl\").link(\"#result\", data); // Render and link template\n<div data-link=\"\n  {on 'click' '.addBtn' add}\n  {on 'click' '.remove' remove}\n  {on 'click' 'li' select}\n\">\n  <button class=\"addBtn\">add</button>\n  <ul>\n    {^{for items}}\n        <li>{{>label}} <span class=\"remove\"></span></li>\n        ...\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "And similarly, the following variant of the same sample wraps the same nested element content as above with three {^{on}} tags – each of which attaches a handler to different nested elements:\n"
      },
      {
        "_type": "sample",
        "text": "\nul { margin: 0; padding-left: 0;}\nli {border: 1px solid green; width: 100px; background-color: white; cursor: pointer; list-style: none;}\n\n\n\n  {^{on 'click' '.addBtn' add}}\n  {^{on 'click' '.remove' remove}}\n  {^{on 'click' 'li' select}}\n    <button class=\"addBtn\">add</button>\n    <ul>\n      {^{for items}}\n        <li>{{>label}} <span class=\"remove\"></span></li>\n      {{/for}}\n    </ul>\n  {{/on}}\n  {{/on}}\n  {{/on}}\n\n\n\n\nvar cnt = 0,\ndata = {\n  add: function(ev, eventArgs) {\n    $.observable(data.items).insert({label: \"new\" + cnt++});\n  }, \n  remove: function(ev, eventArgs) {\n    var index = $.view(ev.target).index\n    $.observable(data.items).remove(index);\n    return false;\n  },\n  select: function(ev, eventArgs) {\n    var targetStyle = ev.target.style;\n    targetStyle.backgroundColor = targetStyle.backgroundColor===\"yellow\" ? \"white\" : \"yellow\";\n  },  \n  items: [\n    {label: \"one\"},\n    {label: \"two\"},\n    {label: \"three\"}\n  ]\n};\n\n$.templates(\"#tmpl\").link(\"#result\", data); // Render and link template\n{^{on 'click' '.addBtn' add}}\n{^{on 'click' '.remove' remove}}\n{^{on 'click' 'li' select}}\n  <button class=\"addBtn\">add</button>\n  <ul>\n    {^{for items}}\n      <li>{{>label}} <span class=\"remove\"></span></li>\n      ...\n\n\n"
      },
      {
        "_type": "para",
        "title": "The selector argument can target elements that are added later",
        "text": "The selector argument can target elements that are added later\nThe above two samples illustrate the fact that the ‘delegated events’ pattern (using a selector argument) can target elements which are added later in time – and were not yet present when the {on} binding was created.\nIn this case, clicking add will add a new <li> which can be selected and removed thanks to the already established {on} bindings for the select and remove handler actions.\n"
      },
      {
        "_type": "para",
        "title": "Passing parameters",
        "text": "Passing parameters\nThe {on} binding can include parameters to be passed to the handler:\n{on ... myHandler param1 param2}\n\nIn the above case the handler should have the signature function(param1, param2, ev, eventArgs)\n"
      },
      {
        "_type": "para",
        "title": "Setting context",
        "text": "Setting context\nThe {on} binding can take an optional context property – used to specify the this pointer in the handler.\nIf no context property is provided then:\n\nif the provided handler is a 'property chain’, such as a.b.myHandler, the context will be the preceding object in the chain – in this case a.b\notherwise, it will be the current data context\n\nFor example if the current data context is team:\n\n{on add}– Here the handler is the team.add() method, the this pointer is team\n{on settings.edit}– Here the handler is the team.settings.edit() method, the this pointer is team.settings\n{on ~reverse}– Here the handler is the reverse() helper method, the this pointer is team\n{on settings.edit context=#data}– Here the handler is the settings.edit() method, the this pointer is team\n{on ~reverse context=settings}– Here the handler is the reverse() helper method, the this pointer is team.settings\n\n"
      },
      {
        "_type": "para",
        "title": "Passing data",
        "text": "Passing data\nThe {on} binding can take an optional data property – used to specify data which will then be passed to the handler as ev.data.\n"
      },
      {
        "_type": "para",
        "title": "The signature of the event handler function",
        "text": "The signature of the event handler function\nIf the {on} binding is:\n{^{on 'click' myHandler param1 param2 data=myData}}\n\nor\ndata-link=\"{on 'click' myHandler param1 param2 data=myData}\"\n\nthen the myHandler function should have the signature:\nfunction myHandler(param1, param2, ev, eventArgs) { ... }\n\nwhere ev is the jQuery event object, with properties that include:\n\ntarget: the HTML element where the click event occurred\ndata: the myData data\n\nand eventArgs is the JsViews event object, with properties:\n\nchange: the event: \"click\"\nlinkCtx: the link context\nview: the view object\n\n"
      },
      {
        "_type": "para",
        "title": "<b style=\"font-style: normal\">{on} binding &ndash; API summary</b>",
        "text": "{on} binding – API summary\nThe following is a summary of the arguments and properties which can be provided to the {on} binding:\n"
      },
      {
        "_type": "tag",
        "title": "",
        "text": "{^{on}} tag or {on} data-link binding\n\n{^{on myHandler /}}\n{^{on myHandler}}Click me{{/on}}\n{^{on 'click' ~showMsg msg tmpl=\"Click me\"/}}\n{^{on 'click' '.btn' ~go context=~root}}...{{/on}}\n\ndata-link=\"{on myHandler}\"\ndata-link=\"{on 'click' ~showMsg msg}\"\ndata-link=\"{on 'click' '.btn' ~go context=~root}\"\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Here is a sample which shows the use of most of the above API features:\n"
      },
      {
        "_type": "sample",
        "text": "table {width:80%;}\n\n\n  <table\n    data-link=\"{on 'focus' 'input' ~hlp.showFocus 'Textbox:' context=~settings data=address}\"\n  >\n    <tbody><tr>\n      <td>\n        <input data-link=\"first\"/>\n      </td><td>\n        <input data-link=\"last\"/>\n      </td><td style=\"width:40%\">\n        Move focus to textbox, for message\n      </td>\n    </tr></tbody>\n  </table>\n\n\n\nvar cnt = 0,\n  person = {\n    first: \"Jo\",\n    last: \"Blow\",\n    address: {street: \"1st\"}\n  },\n  helpers = {\n    settings: {\n      format: function(message, val, street) {\n        return message + \" \" + val + \" Address: \" + street;\n      }\n    },\n    hlp: {\n      showFocus: function(msg, ev, eventArgs) {\n        var message = this.format(msg, ev.target.value, ev.data.street);\n        var lastTd = $(ev.target).parents(\"tr\").children().last();\n        lastTd.text(message);\n      }\n    }\n  };\n\n$.templates(\"#tmpl\").link(\"#result\", person, helpers);\n{on} data-link binding:\n<table data-link=\"{on 'focus' 'input' ~hlp.showFocus 'Textbox:' context=~settings data=address}\">\n  <tbody><tr>\n    <td>\n      <input data-link=\"first\"/>\n      ...\n\n{on} arguments:\n\neventName: 'focus'\nselector: 'input'\nhandlerFn: ~hlp.showFocus\nparameter: 'Textbox:'\n\n{on} properties:\n\ncontext: ~settings\ndata: address\n\nHandler:\nshowFocus: function(msg, ev, eventArgs) {\n  var message = this.format(msg, ev.target.value, ev.data.street);\n  ...\n  lastTd.text(message);\n}\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "See also: the Compiled View Models or Using submit samples for examples of using {on} bindings to call methods on View Models.\n"
      },
      {
        "_type": "para",
        "title": "The <span style='font-style: normal'>jsv-domchange</span> event (advanced)",
        "text": "The jsv-domchange event (advanced)\nAn advanced JsViews feature allows you to add an event listener for the 'jsv-domchange' event, on an element wrapping dynamic content such as a {^{for someArray}} block, or an {^{if someExpression}} block.\nThe event handler will get called whenever the immediate content changes dynamically, as in this example:\n"
      },
      {
        "_type": "sample",
        "text": "ul {margin: 0; padding-left: 0;} li {list-style: none;}\n\n\n  {^{on add/}}\n  <ul data-link=\"{on 'jsv-domchange' domChanges} {on 'click' '.remove' remove}\">\n    {^{for items}}\n      <li>{{>label}} <span class=\"remove\"></span></li>\n    {{/for}}\n  </ul>\n\n\nChange: -\nIndex: -\n\n\n\nvar cnt = 0,\ndata = {\n  add: function(ev, eventArgs) {\n    $.observable(data.items).insert({label: \"new\" + cnt++});\n  }, \n  remove: function(ev, eventArgs) {\n    var index = $.view(ev.target).index\n    $.observable(data.items).remove(index);\n    return false;\n  },\n  domChanges: function(ev, eventArgs, tagCtx, linkCtx, observableEventArgs) {\n    $(\"#change\").text(observableEventArgs.change);\n    $(\"#index\").text(observableEventArgs.index);\n  },  \n  items: [\n    {label: \"one\"},\n    {label: \"two\"}\n  ]\n};\n\n$.templates(\"#tmpl\").link(\"#result\", data);\n<ul data-link=\"{on 'jsv-domchange' domChanges} ...\">\n  {^{for items}}\n   ...\n\ndomChanges: function(ev, eventArgs, tagCtx, linkCtx, observableEventArgs) {\n  $(\"#change\").text(observableEventArgs.change);\n  ...\n},\n\n\n"
      }
    ]
  },
  "jsvsettings/delimiters": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "See also Setting tag delimiters for JsRender\n"
      },
      {
        "_type": "para",
        "title": "JsRender default tag delimiters",
        "text": "JsRender default tag delimiters\nTemplate tags in JsRender use the Mustache style: {{...}}.\nWhen using JsViews you can also use data-binding – with data-linked tags, written: {^{...}}\n"
      },
      {
        "_type": "para",
        "title": "Changing delimiters:",
        "text": "Changing delimiters:\nSometimes there can be a need to use different delimiters. For example there may be a conflict if the template is being rendered on the server using a declarative syntax such as Django with the same default delimiters {{ and }}.\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The following call:\n$.views.settings.delimiters(\"<%\", \"%>\");\n\nwill change the tag syntax to <%...%> for JsRender, and <^%...%>) for a data-linked tag in JsViews.\nAnd the following:\n$.views.settings.delimiters(\"<<\", \">>. \"*\");\n\nwill change to  <<...>> for a JsRender tag, and <*<...>>) for a data-linked tag in JsViews.\n(Note: $.views.settings.delimiters(...); also accepts as parameter an array such as [\"<%\", %>, \"*\"] – as shown in this sample.)\n"
      },
      {
        "_type": "para",
        "title": "Verifying current setting for tag delimiters:",
        "text": "Verifying current setting for tag delimiters:\nvar delimiters = $.views.settings.delimiters();\n// Returns an array [\"{{\", \"}}\", \"^\"] - JsRender tag delimiters and JsViews link character\n\n"
      },
      {
        "_type": "sample",
        "title": "Choosing alternative tag delimiters, with JsViews",
        "text": "Choosing alternative tag delimiters, with JsViews\n\n\n\n  <b>[[:title]]</b>\n  <ul>\n    [[for members]]\n      <li>Name: [*[:name]] <input data-link=\"name\"/></li>\n    [[/for]]\n  </ul>\n\n\n$.views.settings.delimiters(\"[[\", \"]]\", \"*\");\n\nvar tmpl = $.templates(\"#peopleTmpl\");\n\nvar team = {\n    title: \"A team\",\n    members: [{name: \"Jo\"}]\n  };\n\ntmpl.link(\"#result\", team);\nMarkup:\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <b>[[:title]]</b>\n  <ul>\n    [[for members]]\n      <li>Name: [*[:name>]] <input data-link=\"name\"/></li>\n    [[/for]]\n  </ul>\n</script>\n\nCode\n$.views.settings.delimiters(\"[[\", \"]]\", \"*\");\n\nvar tmpl = $.templates(\"#peopleTmpl\");\n...\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "See also the sample in the Setting tag delimiters for JsRender topic showing how to use alternative delimiters to ‘render a template with a template’.\n"
      }
    ]
  },
  "jsvsettings/debugmode": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsRender/JsViews has a ‘debug mode’ setting which determines whether error messages encountered during rendering are displayed.\nTo get current debug mode:\nvar isDebugMode = $.views.settings.debugMode(); // false by default\n\nTo set debug mode:\n$.views.settings.debugMode(...);\n\nDebug mode can be set to any of the following:\n\nfalse – errors during rendering will not be rendered (but an exception will be thrown)\ntrue – no exception will be thrown, but the error message will be rendered, in place of the template tag or block\n\"some string\" – no exception. The string \"some string\" will be rendered in place of the tag or block\n\"\" (empty string) – no exception. The tag or block will simply be replaced by the empty string\na function (to be used as an error handler) – no exception. The handler will run, and the error string will be rendered, or else, if the function returns a string, that string will be rendered\n\nSee Error handling and debugging for a full discussion of alternative approaches, together with details and working examples of $.views.settings.debugMode(...).\nIn particular, see this sample of using $.views.settings.debugMode(true) with JsViews, and data-linking.\n"
      }
    ]
  },
  "jsvsettings/onerror": {
    "sections": []
  },
  "jsvsettings/trigger": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "See Two-way binding.\n"
      },
      {
        "_type": "para",
        "title": "Triggering two-way binding on <b>blur</b>, rather than on <b>keydown</b>",
        "text": "Triggering two-way binding on blur, rather than on keydown\nIn the case of text boxes, textarea, contenteditable and some custom tags, you can choose whether changes to the underlying data are triggered as you type (on keydown), or only on leaving the input control (on change or blur)\nAllowed values for trigger are:\n\ntrue – data updates as you type – on keydown\nfalse – data updates on change (when the input loses focus)\n\n"
      },
      {
        "_type": "para",
        "title": "Global default trigger setting",
        "text": "Global default trigger setting\nTo get current default trigger setting:\nvar defaultTrigger = $.views.settings.trigger(); // true by default\n\nTo modify the default trigger setting:\n$.views.settings.trigger(false); // Default trigger is now false\n\n"
      },
      {
        "_type": "para",
        "title": "Overriding the trigger setting",
        "text": "Overriding the trigger setting\nThe trigger setting can be modified for individual tags or elements, by writing:\n<input data-link=\"name trigger=false\"/> \n{^{textbox name trigger=false}}\n\nNote: You can also set the trigger value to a string consisting of one or more white-space-separated event names, as in:<input data-link=\"name trigger='keyup mouseup'\"/> – but generally only the values true (actually equivalent to trigger='keydown') and false are useful.\n"
      }
    ]
  },
  "jsvsettings/advanced": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews has the following advanced settings:\n\nuseViews – default: false\nlinkAttr – default: \"data-link\"\nnoValidate – default: false\n\nand also the following ‘private’ advanced settings:\n\n_jsv – default: false\n_wm – default: current ‘wrapMap’ settings\n_fe – default: current ‘form element binding’ settings\n\nuseViews controls a JsRender performance optimization, while building the view hierarchy. In very simple templates there will usually not be any need to access the view. JsRender detects these cases, does not create a view, and hence obtains a slight performance gain. By setting useViews to true, you guarantee that JsRender will always create views for template blocks.\nlinkAttr determines the JsViews data-link attribute. By default it is data-link. If there is a conflict where another module also uses the ‘data-link’ attribute, then you can choose a different attribute for JsViews data-linking.\nFor example, if you set $.views.settings.advanced({linkAttr: \"link\"}), then you would write <input link=\"name\"/> instead of <input data-link=\"name\" /> for data-linking an <input/> to name.\nnoValidate controls whether JsViews runs validation code during data-linking, to raise an error in the case of invalid HTML structure (such as <div/> or <div><span></div>) or HTML/JsViews tag structure (such as {^{if...}} <span{{/if}} ... >). By setting noValidate to true, JsViews will skip the validation step, with a minor improvement to performance as a result.\n_jsv is a ‘private’ setting (could change in the future). If set to true JsRender provides a global _jsv variable, which gives access to the internal store of views.\n_wm is a ‘private’ setting (could change in the future). It determines the ‘wrapMap’ configuration which controls how document fragments are inserted into the DOM during data-linking. (Also used by jQuery DOM manipulation).\n_fe is a ‘private’ setting (could change in the future). If contains the ‘form element binding’ configuration, which determines the elements (such as <input/> or <textarea>) which provide two-way data-binding with JsViews – and specifies the default data-linked attribute, such as value.\nTo get current advanced settings:\nvar advancedSettings = $.views.settings.advanced();\n\nBy default the returned advancedSettings object is:\n{useViews: false, linkAttr: \"data-link\", noValidate: false, _jsv: false, _wm: ..., _fe: ...}\n\nTo set advanced settings:\n$.views.settings.advanced({useViews: true});\n// Set one or more advanced settings\n\n"
      }
    ]
  },
  "jsvsettings/allowcode": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The allow code feature is intended for use with rendered templates (using the render() method), and not for data-linked templates.\nThis is because data-linked templates are optimized to re-render incrementally when linked observable data is updated. The {{*...}} tags may therefore run additional times during updating of template content.\n"
      }
    ]
  },
  "jsvsettings": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews provides the following APIs for modifying settings:\n"
      },
      {
        "_type": "links",
        "title": "",
        "text": ""
      }
    ]
  },
  "tmplsyntax": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews data-link syntax takes two forms:\n\nData-linked tags\nData-linked elements\n\nBoth forms use:\n\nData-linked paths\n\n"
      },
      {
        "_type": "para",
        "title": "See also:",
        "text": "See also:\nTutorial sequence of samples: Data-linking tags and elements\n"
      }
    ]
  },
  "jsvapps": {
    "sections": [
      {
        "_type": "para",
        "title": "Apps using JsViews",
        "text": "Apps using JsViews\nJsViews is much more of a framework than JsRender. It does much more than just templating – providing also data-binding, MVVM support, observability of the data/model layer, support for interactive encapsulated components (JsViews tag controls), and more.\nJsViews uses the same templates as JsRender, but adds powerful data-binding features. Like JsRender it is highly flexible and expressive – so it leaves you free to work within your own choice of overall application architecture (including architectures based on MVVM, MVP or MVC – optionally with server/client integration).\nJsViews lets you use your own flavor of data/model layer – whether simple plain JavaScript objects, hand-coded View Model instances, or compiled View Models.\nThe compiled View Models pattern makes it particularly easy to follow a fully-fledged MVVM approach to apps and web pages. It provides for generating View Model instances directly from plain JSON data, and for triggering incremental UI updates when modified JSON data is obtained.\n"
      },
      {
        "_type": "para",
        "title": "Components of an app using JsViews",
        "text": "Components of an app using JsViews\nAny app or web page using JsViews will generally involve defining or registering the following elements:\n\none or more templates – usually with data-linking – see Data-linked templates\na ‘data Layer’ – see JsViews: Data or View Model\noptionally, helpers – in the form of metadata, helper functions and converter functions, see Helpers and converters\noptionally, reusable JsView tag control components for use within your templates – see Custom tag controls\n\n"
      }
    ]
  },
  "jsvmodel": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Just like JsRender, JsViews (along with JsObservable) is designed to work well with either plain JavaScript objects and arrays, or with instances of JavaScript classes, such as View Model classes.\nSee JsRender: Data / View Model for a discussion and examples of using plain objects / ‘hand-coded’ View Model objects / compiled View Model objects, with JsRender.\nWhen using JsViews you can still choose between plain objects and View Model objects, but now you can also bind to those objects, using data-linking.\nSo, for example, if you are using data obtained from a JSON request, you can choose between:\n\ndata-linking your templates directly to the objects and arrays returned from the JSON request – and thus tracking observable changes to those objects\npassing the data through a ‘mapping’ process to create a hierarchy of View Model instances, and data-linking your templates against those objects\n\n"
      },
      {
        "_type": "para",
        "title": "<b>Example: JsViews with plain objects and arrays</b>",
        "text": "Example: JsViews with plain objects and arrays\nIn this example we add JsViews data-binding to the plain objects example taken from the JsRender Data / View Model topic.\n"
      },
      {
        "_type": "code",
        "title": "Data (e.g. from JSON request):",
        "text": "Data (e.g. from JSON request):\nvar person = {\n  name: \"Pete\",\n  address: { ... },\n  phones: [{...}, ...] \n};\n"
      },
      {
        "_type": "template",
        "title": "Template with data-linking:",
        "text": "Template with data-linking:\n... \n\n...\n\n...\n{^{for phones}}\n  ...      \n    \n  ...\n{{/for}}\n...\n\n"
      },
      {
        "_type": "sample",
        "title": "Render and link template directly against plain objects...",
        "text": "Render and link template directly against plain objects...\n\n\n\n  Change data\n  Add phone\n  \n\n\n\n   Change Log\n  Clear\n  \n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address^street\" /></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones}}\n          <tr><td>\n            <input class=\"floatleft\" data-link=\"number\" />\n            <span class=\"remove\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n\n// Compiled template\nvar tmpl = $.templates(\"#personTmpl\");\n\n// Data: hierarchy of plain objects and arrays\nvar person = {\n  name: \"Pete\",\n  address: {\n    street: \"1st Ave\"\n  },\n  phones: [{number: \"111 111 1111\"}, {number:\"222 222 2222\"}] \n};\n\n// Render and link template against plain object hierarchy\ntmpl.link(\"#result\", person);\n\n// Button event handlers for changes\n$(\"#changeObjects\").on(\"click\", function() {\n  $.observable(person).setProperty({\n    name: \"newName\",\n    address: {street: \"New Street\"},\n    phones: [{number: \"123 123 1234\"}, {number: \"321 321 4321\"}]\n  });\n});\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(person.phones).insert({\n    number: \"456 456 4567\"\n  });\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones).remove(\n    $.view(this).index\n  )\n});\n\n// Change log code\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n\nlogChanges(true);\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observable(person).observeAll(changeHandler);\n  } else {\n    $.observable(person).unobserveAll(changeHandler);\n  }\n}\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  if (ev.data.observeAll) {\n    message += \"observeAll path: \" + ev.data.observeAll.path() + \"\"\n  }\n  for (var key in eventArgs) {\n    message += \"\" + key + \": \" + JSON.stringify(eventArgs[key]) + \"\";\n  }\n  $(\".messages\").append(\"\" + message + \"\");\n}\nRender and link template\n\nvar tmpl = $.templates(\"#personTmpl\");\ntmpl.link(\"#result\", person);\n\n"
      },
      {
        "_type": "para",
        "title": "observeAll for plain objects and arrays",
        "text": "observeAll for plain objects and arrays\nOur data-linked sample includes the Change Log idea, copied over from the samples on the observeAll/unobserveAll topics.\nfunction logChanges(enable) {\n  if (enable) {\n    $.observable(person).observeAll(changeHandler);\n  } else {\n    $.observable(person).unobserveAll(changeHandler);\n  }\n}\n\n(You’ll see below how observeAll works identically for observing hierarchies of View Model instances or for observing hierarchies of plain objects).\n"
      },
      {
        "_type": "para",
        "title": "<b>Example: JsViews with 'hand-coded 'View Model objects</b>",
        "text": "Example: JsViews with 'hand-coded 'View Model objects\nSo now let’s switch to the View Model approach, starting from the ‘hand-coded’ View Model example in the JsRender Data / View Model topic, but this time with JsViews data-linking.\n"
      },
      {
        "_type": "para",
        "title": "View Model classes:",
        "text": "View Model classes:\nHere is the class definition for Person:\n// Constructor\nfunction Person(name, address, phones) {\n  this._name = name;\n  this._address = address;\n  this._phones = phones;\n}\n\n// Prototype\nvar personProto = {\n  name: function(val) {\n    if (!arguments.length) {\n      return this._name;\n    }\n    // If there is a value argument, treat as observable setter\n    $.observable(this).setProperty(\"name\", val);\n  },\n// ... (Similar pattern for phones and address)\n};\n\n// For read-write properties, associate setters with getters, \npersonProto.name.set = function(val) {\n  this._name = val;\n};\n...\n\nPerson.prototype = personProto;\n\n...\n\nWe define exactly similar classes for our Address and Phone objects too.\nThe above is a recommended pattern for View Model classes used with JsViews. Note that this pattern automatically integrates observable data changes. (Calling the setter will make the corresponding observable data change, and conversely, making the observable data change will call the setter.)\nCompiled View Models returned by $.views.viewModels(...) also use this observable pattern.\n"
      },
      {
        "_type": "code",
        "title": "Data: View Model object hierarchy",
        "text": "Data: View Model object hierarchy\nvar person = new Person(\n  \"Pete\",\n  new Address(\"1st Ave\"),\n  [new Phone({number: \"111 111 1111\"}), new Phone({number: \"222 222 2222\"})]\n);\n"
      },
      {
        "_type": "para",
        "title": "Template",
        "text": "Template\nAs with JsRender above, to convert our template from using plain objects to using View Model objects, the only change we need to make is to add parens for our properties, which are now getter/setter functions.\nThis applies equally to data-link expressions, such as <input data-link=\"address()^street()\" >.\n(Note: we also change . to ^ in paths if we want deep path binding.)\n"
      },
      {
        "_type": "template",
        "title": "Template",
        "text": "Template\n... \n\n...\n\n...\n{^{for phones()}}\n  ...      \n    \n  ...\n{{/for}}\n...\n\n"
      },
      {
        "_type": "sample",
        "title": "Render and link template against a 'hand-coded' View Model object hierarchy",
        "text": "Render and link template against a 'hand-coded' View Model object hierarchy\n\n\n\n\n  Change data\n  Call setters\n  Add phone\n  \n\n\n\n  Change Log:\n  \n  Clear\n  \n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name()\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address()^street()\" /></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones()}}\n          <tr><td>\n            <input class=\"floatleft\" data-link=\"number()\" />\n            <span class=\"remove\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n\n// Compiled template\nvar tmpl = $.templates(\"#personTmpl\");\n\n// Instantiate View Model hierarchy\nvar person = new Person(\n  \"Pete\",\n  new Address(\"1st Ave\"),\n  [new Phone(\"111 111 1111\"), new Phone(\"222 222 2222\")]\n);\n\n// Render and link the template against person object (instance of Person)\ntmpl.link(\"#result\", person);\n\n// Button event handlers for changes\n$(\"#changeObjects\").on(\"click\", function() { // Use setProperty to make changes\n  $.observable(person).setProperty({\n    name: \"newName\",\n    address: new Address(\"New Street\"),\n    phones: [new Phone(\"123 123 1234\"), new Phone(\"321 321 4321\")]\n  });\n});\n\n$(\"#setObjects\").on(\"click\", function() {    // Use setters to make changes\n  person.name(\"setPete\");\n  person.address(new Address(\"Set Road\"));\n  person.phones([new Phone(\"987 987 9876\")]);\n});\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(person.phones()).insert(new Phone(\"456 456 4567\"));\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones()).remove(\n    $.view(this).index\n  )\n});\n\n// Change log code\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n\nlogChanges(true);\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observable(person).observeAll(changeHandler);\n  } else {\n    $.observable(person).unobserveAll(changeHandler);\n  }\n}\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  if (ev.data.observeAll) {\n    message += \"observeAll path: \" + ev.data.observeAll.path() + \"\"\n  }\n  for (var key in eventArgs) {\n    message += \"\" + key + \": \" + JSON.stringify(eventArgs[key]) + \"\";\n  }\n  $(\".messages\").append(\"\" + message + \"\");\n}\nInstantiate View Model hierarchy\n\nvar person = new Person(...);\n\nRender and link template against person object\n\nvar tmpl = $.templates(\"#personTmpl\");\n\ntmpl.link(\"#result\", person);\n\n\nMake observable changes:\nby directly changing data:\n$(\"#changeObjects\").on(\"click\", function() { // Use setProperty to make changes\n  $.observable(person).setProperty({\n    name: \"newName\",\n    address: new Address(\"New Street\"),\n    phones: [new Phone(\"123 123 1234\"), new Phone(\"321 321 4321\")]\n  });\n});\n\nor by using setters:\n$(\"#setObjects\").on(\"click\", function() {    // Use setters to make changes\n  person.name(\"setPete\");\n  person.address(new Address(\"Set Road\"));\n  person.phones([new Phone(\"987 987 9876\")]);\n});\n\n\n// View Model class definitions using pattern with separate getter and setter functions:\n\n// Person\nfunction Person(name, address, phones) {\n  this._name = name;\n  this._address = address;\n  this._phones = phones;\n}\n\nvar personProto = {\n  name: function(val) {\n    if (!arguments.length) {\n      return this._name;\n    }\n    // If there is a value argument, treat as observable setter\n    $.observable(this).setProperty(\"name\", val);\n  },\n  phones: function(val) {\n    if (!arguments.length) {\n      return this._phones;\n    }\n    // If there is a value argument, treat as observable setter\n    $.observable(this).setProperty(\"phones\", val);\n  },\n  address: function(val) {\n    if (!arguments.length) {\n      return this._address;\n    }\n    // If there is a value argument, treat as observable setter\n    $.observable(this).setProperty(\"address\", val);\n  }\n};\n\npersonProto.name.set = function(val) {\n  this._name = val;\n};\n\npersonProto.address.set = function(val) {\n  this._address = val;\n};\n\npersonProto.phones.set = function(val) {\n  this._phones = val;\n};\n\nPerson.prototype = personProto;\n\n// Address\nfunction Address(street) {\n  this._street = street;\n}\n\nvar addressProto = {\n  street: function(val) {\n    if (!arguments.length) {\n      return this._street;\n    }\n    // If there is a value argument, treat as observable setter\n    $.observable(this).setProperty(\"street\", val);\n  }\n};\n\naddressProto.street.set = function(val) {\n  this._street = val;\n};\n\nAddress.prototype = addressProto;\n\n// Phone\nfunction Phone(number) {\n  this._number = number;\n}\n\nvar phoneProto = {\n  number: function(val) {\n    if (!arguments.length) {\n      return this._number;\n    }\n    // If there is a value argument, treat as observable setter\n    $.observable(this).setProperty(\"number\", val);\n  }\n};\n\nphoneProto.number.set = function(val) {\n  this._number = val;\n};\n\nPhone.prototype = phoneProto;\n\n"
      },
      {
        "_type": "para",
        "title": "<b>Example: JsViews with compiled View Models &ndash; using $.views.viewModels(...)</b>",
        "text": "Example: JsViews with compiled View Models – using $.views.viewModels(...)\nThe built-in support in both JsRender and JsViews for compiled View Models makes it extremely easy to define View Model classes that include get/set properties using the pattern described above, along with any desired additional methods and computed properties. Simple calls to $.views.viewModels(...) allow you to compile View Model classes conforming to these patterns without having to manually write repetitive code for multiple such get/set properties.\nFor details on $.views.viewModels see: Compiled View Models.\nSince here we are using compiled View Models with JsViews, the setters are observable. To change a value, you can either use setProperty(...) to directly make an observable change to the data (which will cause the setter also to be called), or you can call the setter(...) (which will also trigger an observable change to the data). (Either way is equivalent, but usually calling the setter is more convenient…)\nTo illustrate, let’s convert our sample above to use compiled View Models:\n"
      },
      {
        "_type": "sample",
        "title": "Render and link template against a compiled View Model object hierarchy",
        "text": "Render and link template against a compiled View Model object hierarchy\n\n\n\n  Change data\n  Call setters\n  Add phone\n  \n\n\n\n  Change Log:\n  \n  Clear\n  \n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name()\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address()^street()\" /></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones()}}\n          <tr><td>\n            <input class=\"floatleft\" data-link=\"number()\" />\n            <span class=\"remove\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n\n// Compiled template\nvar tmpl = $.templates(\"#personTmpl\");\n\n// Method for Person class\nfunction addPhone(phoneNo) {\n  // Uses Phone() View Model constructor to create Phone instance\n  this.phones().push(Phone(phoneNo));\n}\n\n// Compile Person View Model, with addPhone method\nvar Person = $.views.viewModels({\n  getters: [\"name\", \"address\", \"phones\"],\n  extend: {addPhone: addPhone}\n});\n\n// Compile Address View Model\nvar Address = $.views.viewModels({getters: [\"street\"]});\n\n// Compile Phone View Model\nvar Phone = $.views.viewModels({getters: [\"number\"]});\n\n// Instantiate View Model hierarchy using constructors\nvar person = Person(\n  \"Pete\",\n  Address(\"1st Ave\"),\n  [Phone(\"111 111 1111\"), Phone(\"222 222 2222\")]\n);\n\n// Render and link the template against person object (instance of Person)\ntmpl.link(\"#result\", person);\n\n// Button event handlers for changes\n$(\"#changeObjects\").on(\"click\", function() { // Use setProperty to make changes\n  $.observable(person).setProperty({\n    name: \"newName\",\n    address: Address(\"New Street\"),\n    phones: [Phone(\"123 123 1234\"), Phone(\"321 321 4321\")]\n  });\n});\n\n$(\"#setObjects\").on(\"click\", function() {    // Use setters to make changes\n  person.name(\"setPete\");\n  person.address(Address(\"Set Road\"));\n  person.phones([Phone(\"987 987 9876\")]);\n});\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(person.phones()).insert(Phone(\"456 456 4567\"));\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones()).remove(\n    $.view(this).index\n  )\n});\n\n// Change log code\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n\nlogChanges(true);\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observable(person).observeAll(changeHandler);\n  } else {\n    $.observable(person).unobserveAll(changeHandler);\n  }\n}\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  if (ev.data.observeAll) {\n    message += \"observeAll path: \" + ev.data.observeAll.path() + \"\"\n  }\n  for (var key in eventArgs) {\n    message += \"\" + key + \": \" + JSON.stringify(eventArgs[key]) + \"\";\n  }\n  $(\".messages\").append(\"\" + message + \"\");\n}\nCompile View Models\n\n// Compile Person View Model, with addPhone method\nvar Person = $.views.viewModels({\n  getters: [\"name\", \"address\", \"phones\"],\n  extend: {addPhone: addPhone}\n});\n\n// Compile Address View Model\nvar Address = $.views.viewModels({getters: [\"street\"]});\n\n// Compile Phone View Model\nvar Phone = $.views.viewModels({getters: [\"number\"]});\n\n\n\nInstantiate View Model hierarchy\n\nvar person = Person(\n  \"Pete\",\n  Address(\"1st Ave\"),\n  [Phone(\"111 111 1111\"), Phone(\"222 222 2222\")]\n);\n\n\nMake observable changes:\nby directly changing data:\n$(\"#changeObjects\").on(\"click\", function() { // Use setProperty to make changes\n  $.observable(person).setProperty({\n    name: \"newName\",\n    address: Address(\"New Street\"),\n    phones: [Phone(\"123 123 1234\"), Phone(\"321 321 4321\")]\n  });\n});\n\nor by using setters:\n$(\"#setObjects\").on(\"click\", function() {    // Use setters to make changes\n  person.name(\"setPete\");\n  person.address(Address(\"Set Road\"));\n  person.phones([Phone(\"987 987 9876\")]);\n});\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "(See also the corresponding sample with JsRender.)\n"
      },
      {
        "_type": "para",
        "title": "<b>Using observe and observeAll APIs with View Model hierarchies</b>",
        "text": "Using observe and observeAll APIs with View Model hierarchies\n"
      },
      {
        "_type": "para",
        "title": "observeAll()",
        "text": "observeAll()\nThe Change Log feature above is showing us ALL the changes to View Model instances, even as we structurally modify the tree by adding and removing objects from arrays, setting structured values to properties, etc.\nThis is achieved with exactly the same call to observeAll/unobserveAll that we used above for plain objects:\nfunction logChanges(enable) {\n  if (enable) {\n    $.observable(person).observeAll(changeHandler);\n  } else {\n    $.observable(person).unobserveAll(changeHandler);\n  }\n}\n\n"
      },
      {
        "_type": "para",
        "title": "$.observe()",
        "text": "$.observe()\nSimilarly you can use the observe() APIs to observe specific properties of View Model objects.\n// Observe changes to name, address and phones properties of <em>person</em> object\n$.observe(person, \"name\", \"phones\", \"address\",changeHandler); \n\n// Observe array changes <em>person.phones()</em>\n$.observe(person.phones(), changeHandler);\n\n// Observe changes to street property of <em>person.address()</em> object.\n$.observe(person.address(), \"street\", changeHandler);\n\nor equivalently:\n$.observe(person, \"name\", \"phones\", \"address\",\n    person.phones(), person.address(), \"street\", changeHandler);\n\nHere it is in a sample:\n"
      },
      {
        "_type": "sample",
        "title": "Using $.observe() to observe View Model objects",
        "text": "Using $.observe() to observe View Model objects\n\n\n\n  Change data\n  Call setters\n  Swap address and phones\n  Add phone\n  \n\n\n\n  Change Log:\n  Clear\n  \n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name()\" /></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address()^street()\" /></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones()}}\n          <tr><td>\n            <span class=\"floatleft\">{^{:number()}}</span>\n            <span class=\"remove\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n\n// Compiled template\nvar tmpl = $.templates(\"#personTmpl\");\n\n// Method for Person class\nfunction addPhone(phoneNo) {\n  // Uses Phone() View Model constructor to create Phone instance\n  this.phones().push(Phone(phoneNo));\n}\n\n// Compile Person View Model, with addPhone method\nvar Person = $.views.viewModels({\n  getters: [\"name\", \"address\", \"phones\"],\n  extend: {addPhone: addPhone}\n});\n\n// Compile Address View Model\nvar Address = $.views.viewModels({getters: [\"street\"]});\n\n// Compile Phone View Model\nvar Phone = $.views.viewModels({getters: [\"number\"]});\n\n// Instantiate View Model hierarchy\nvar alt = false,\n  address1 = Address(\"1st Ave\"),\n  phones1 = [Phone(\"111 111 1111\"), Phone(\"222 222 2222\")],\n  address2 = Address(\"New Street\"),\n  phones2 = [Phone(\"123 123 1234\")],\n  person = Person(\"Pete\", address1, phones1);\n\n// Render and link the template against person object (instance of Person)\ntmpl.link(\"#result\", person);\n\n// Observe specific properties on specific objects\n$.observe(person, \"name\", \"phones\", \"address\", person.phones(), person.address(), \"street\", changeHandler);\n\n// Button event handlers for changes\n$(\"#changeObjects\").on(\"click\", function() { // Modify leaf values by observable changes of data\n  $.observable(person).setProperty(\"name\", person.name() + \"+\");\n  $.observable(person.address()).setProperty(\"street\", person.address().street() + \"+\");\n});\n\n$(\"#setObjects\").on(\"click\", function() { // Modify leaf values by calling setters\n  person.name(person.name() + \"*\");\n  person.address().street(person.address().street() + \"*\");\n});\n\n$(\"#swapObjects\").on(\"click\", function() {\n  // Swap the objects (optionally, remove our specific observers)\n  $.unobserve(person.address(), \"street\", changeHandler);\n  $.unobserve(person.phones(), changeHandler);\n\n  person.address(alt ? address1 : address2);\n  person.phones(alt ? phones1 : phones2);\n\n  // observe new objects object on specific paths (if not already observing)\n  $.observe(person.address(), \"street\", changeHandler);\n  $.observe(person.phones(), changeHandler);\n\n  alt = !alt;\n});\n\n$(\"#insert\").on(\"click\", function() {\n  $.observable(person.phones()).insert(new Phone(\"456 456 4567\"));\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones()).remove(\n    $.view(this).index\n  )\n});\n\n// Change log code\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  if (ev.data.observeAll) {\n    message += \"observeAll path: \" + ev.data.observeAll.path() + \"\"\n  }\n  for (var key in eventArgs) {\n    message += \"\" + key + \": \" + JSON.stringify(eventArgs[key]) + \"\";\n  }\n  $(\".messages\").append(\"\" + message + \"\");\n}\nObserve specific properties on specific objects\n\n$.observe(person, \"name\", \"phones\", \"address\",\n    person.phones(), person.address(), \"street\", changeHandler);\n\n"
      },
      {
        "_type": "para",
        "title": "Chained paths with plain objects or with View Model objects",
        "text": "Chained paths with plain objects or with View Model objects\nWith plain object hierarchies you can use chained paths in both templates, and observe() paths:\n<input data-link=\"address^street\" />\n\n$.observe(person, \"address^street\", changeHandler);\n\nBut for View Model hierarchies, you can only used chained paths in templates:\n<input data-link=\"address()^street()\" />\n\nFor the corresponding $.observe() calls you must pass in each View Model object and observe its properties, rather than using a chained path. Parens are not supported within $.observe() paths.\nSo you would write:\n$.observe(person, \"address\", changeHandler);\n$.observe(person.address(), \"street\", changeHandler);\n\nor as a single call:\n$.observe(person, \"address\", person.address(), \"street\", changeHandler);\n\n"
      },
      {
        "_type": "links",
        "title": "For additional details and scenarios for compiled View Models, see:",
        "text": "For additional details and scenarios for compiled View Models, see:\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsvhelpers-converters": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Helpers and converters used in JsViews apps are the same as regular JsRender helpers or converters – defined/registered in the usual way (see Using helpers and Using converters).\nThey can be used in template expressions, including data-linked expressions (see: Data-linked template syntax) such as:\n\n{^{: ~myFormatter(name)}}\n{^{myCvt:name}}\n<div data-link=\"~myFormatter(name)\" ...>)\n<input data-link=\"{intToStr:amount:strToInt}\"/>\n\nThe last of these examples illustrates the use of two-way data-binding in JsViews using converters (see Converters: convert and convert back).\nIn addition to global helpers (registered using $.views.helpers(myHelpers);), JsViews lets you pass helpers in on a specific link call, as in:\n\ntmpl.link(\"#container\", data, myHelpers); (Linked template)\n$.link(true, \"#target\", data, myHelpers); (Top-level declarative linking)\n$.link(expression, \"#target\", data, myHelpers); (Top-level programmatic linking)\n\n"
      }
    ]
  },
  "link-formelems": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The following topics show data-linked textboxes, checkboxes, radio buttons, select drop-downs and lists, textareas and buttons:\n"
      },
      {
        "_type": "links",
        "title": "",
        "text": ""
      },
      {
        "_type": "links",
        "title": "See also",
        "text": "See also\n"
      }
    ]
  },
  "link-button": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The following sample shows three equivalent ways of creating a data-linked button in a template, with the onclick action calling a function (such as a helper method or a View Model method).\nSee the Event binding topic for details.\n"
      },
      {
        "_type": "sample",
        "text": "\n\n\n  {^{on ~doSomething}}Do something{{/on}}\n  <button data-link=\"{on ~doSomething}\">Do something</button>\n  <input type=\"button\" data-link=\"{on ~doSomething}\" value=\"Do something\" />\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar person = {};\n\nvar helpers = {\n  doSomething: function() {\n    alert(\"do something\");\nreturn false;\n  }\n}\n\ntmpl.link(\"#result\", person, helpers); // Render and link the template\n\n<script id=\"tmpl\" type=\"text/x-jsrender\">\n  {^{on ~doSomething}}Do something{{/on}}\n  <button data-link=\"{on ~doSomething}\">Do something</button>\n  <input type=\"button\" data-link=\"{on ~doSomething}\" value=\"Do something\" />\n</script>\n\ntmpl.link(\"#result\", person, helpers); // Render and link the template\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Top-level data-linking can also be used for <button> or <input>:\n"
      },
      {
        "_type": "sample",
        "text": "\n  Do something\n  \n\n\nvar person = {};\n\nvar helpers = {\n  doSomething: function() {\n    alert(\"do something\");\n  }\n}\n\n$.link(true, \"#topLinked\", person, helpers); // Data-link top-level content\n\n\n<div id=\"topLinked\">\n  <button data-link=\"{on ~doSomething}\">Do something</button>\n  <input type=\"button\" data-link=\"{on ~doSomething}\" value=\"Do something\" />\n</div>\n\n$.link(true, \"#topLinked\", person, helpers); // Data-link top-level content\n\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linking to the submit action",
        "text": "Data-linking to the submit action\nIn the case of data-linking to a submit button within a form, it is often useful to instead data-link directly to the submit event of the form as shown in the Event binding topic and in the Using submit sample.\n"
      }
    ]
  },
  "link-elemattribs": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "To data-link to an HTML element attribute, simply use the attribute name as data-link target.\nFor example to data-link to the title attribute use:\ndata-link=\"title{:dataPathOrExpression}\"\n\nThis approach can be used for any HTML attribute, including class, data-* attributes etc., as shown in the following example:\n"
      },
      {
        "_type": "sample",
        "text": "\n.class1 {color:green;}\n.class2 {color:red;}\n\n\n\n\n  <button data-link=\"\n    disabled{:disableButton}\n    title{:'Message: &quot;' + theTitle + '&quot;'}\n    data-myvalue{:myVal}\n    class{:disableButton ? 'class2' : 'class1'}\n  \">\n    I am {^{:disableButton?'disabled':'enabled'}}\n  </button><br/><br/>\n\n  <label><input data-link=\"disableButton\" type=\"checkbox\" /> Disable</label><br/>\n  <label>Set button title: <input data-link=\"theTitle\" /></label> (To see it, hover over the button...)<br/>\n  <label>data-myvalue property: <input data-link=\"myVal\" /></label> (To see it, click on the button...)\n\n\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  theTitle: \"the title\",\n  disableButton: false,\n  myVal: \"My value\"\n}\n\ntmpl.link(\"#result\", data);\n\n$(\"button\").on('click', function() {\n  alert(\n    $(this).data(\"myvalue\") // Can use 'this.dataset.myvalue' for HTML 5 browsers\n  );\n})\n\n<button data-link=\"\n  disabled{:disableButton}\n  title{:'Message: &quot;' + theTitle + '&quot;'}\n  data-myvalue{:myVal}\n  class{:disableButton ? 'class2' : 'class1'}\n\">\n\n\n"
      },
      {
        "_type": "para",
        "title": "Removing HTML attributes, by returning null",
        "text": "Removing HTML attributes, by returning null\nWhen data-linking to an attribute, if the value of the attribute is set to null then the attribute will be removed. For example, setting data-link=\"title{:myTitle||null}\" will lead to the title attribute being removed from the element whenever myTitle returns a falsy value such as \"\", false or 0.\nSpecial cases: Setting selected, disabled, multiple or readonly to any falsy value will remove the corresponding attributes. Setting to any truthy value will set the attribute to a standard value such as multiple=\"multiple\"\n"
      },
      {
        "_type": "para",
        "title": "Element attributes &ndash; and corresponding element properties",
        "text": "Element attributes – and corresponding element properties\nFor attributes that are part of the HTML schema there is generally a corresponding property on the underlying HTML Element object, and data-linking to the attribute will also drive changes the corresponding property. For example, setting the title attribute will also set the underlying elem.title property. However, data-linking to an unknown attribute, such as foo{:...} will add a foo=\"...\" attribute, but will not set an elem.foo property.\n"
      },
      {
        "_type": "para",
        "title": "Data-linking directly to element properties",
        "text": "Data-linking directly to element properties\nTo data link directly to HTML Element properties, use prop-propertyname as data-link target.\nFor example to data-link to the muted property of a <video> element use prop-muted:\n<video ... data-link=\"prop-muted{:dataPathOrExpression}\" ...>\n\nas in the following example:\n"
      },
      {
        "_type": "sample",
        "text": "video {width:400px; height:200px; margin-bottom:20px; display:block}\n\n\n\n  <video autobuffer controls data-link=\"prop-muted{:muted} prop-loop{:loop}\">\n    <source data-link=\"src{:src}\" type=\"video/mp4\">\n  </video>\n  <label>Muted: <input type=\"checkbox\" data-link=\"muted\"/></label>\n  <label>Loop: <input type=\"checkbox\" data-link=\"loop\"/></label>\n\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  src: \"https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4\",\n  muted: true,\n  loop: true\n};\n\ntmpl.link(\"#result\", data);\n\n$(\"video\").on(\"volumechange\", function(ev) {\n  $.observable(data).setProperty(\"muted\", ev.target.muted);\n});\n\n<video ... data-link=\"prop-muted{:muted} prop-loop{:loop}\">\n  <source data-link=\"src{:src}\" ...>\n</video>\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsvadvanced": {
    "sections": [
      {
        "_type": "links",
        "title": "",
        "text": ""
      }
    ]
  },
  "jsvviews": {
    "sections": []
  },
  "linkedtmpls": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Templates used in JsViews apps are regular JsRender templates, defined/registered in the usual way (see Using templates).\nHowever they can include data-linked tags (such as {^{:name}}) and data-linked elements (such as <div data-link=\"name\" ...>). See: Data-linked template syntax.\nInstead of being simply rendered by render() method, they are rendered and data-linked using the link() method.\n"
      }
    ]
  },
  "mvvm-views": {
    "sections": [
      {
        "_type": "para",
        "title": "Using merge() and unmap() for Save/Undo behavior, in an MVVM application",
        "text": "Using merge() and unmap() for Save/Undo behavior, in an MVVM application\nMVVM (Model/View/View-Model) applications (including single page apps – SPAs) generally work with data on the server, considered as the Model, and client data, in the browser – which is a hierarchy of View Models. Client View Models are initialized from the server Model.\nThe user may be able to interact with Views in the browser, and drive changes to the View Model. There will then typically be a process of saving data (from the modified View Model in the browser) back to the server, to update the Model.\nThe following sample (available also at samples/editable/submit) illustrates this, and provides a Submit Changes button (which makes a ‘snapshot’ of current View Model data, and which would in a ‘real app’ save that data back to the server), and an Undo button (which reverts current View Model data back to the last ‘snapshot’).\nSpecifically:\n\nSubmit Changes is bound to the submit action of an HTML form – so will be triggered also by Enter\nIt uses the compiled View Model unmap() feature to make a snapshot of data for sending to the server\nUndo uses the compiled View Model merge() feature to revert changes\n\n"
      },
      {
        "_type": "sample",
        "title": "MVVM Save/Undo, using compiled View Models ",
        "url": "samples/editable-data/submit/sample",
        "text": "MVVM Save/Undo, using compiled View Models \nProvide Submit Changes and Undo buttons, calling the saveData and undo methods of View Model:\n<div class=\"linkedContent\">\n  ...\n  <button data-link=\"{on undo} ...\">Undo</button>\n  ...\n  <form data-link=\"{on 'submit' saveData}\">\n    <button type=\"submit\" ...>Submit Changes</button>\n    ...\n    <tbody data-link=\"{for movies() tmpl='#movieTemplate'}\"></tbody>\n    ...\n    <div data-link=\"{for movies()[selectedIndex()] tmpl='#detailTemplate'}\"></div>\n  </form>\n</div>\n\nProvide undo and saveData methods on compiled View Model:\n$.views.viewModels({\n  MovieApp: {\n    getters: [...],\n    extend: {\n      undo: function() {\n        // Revert to previous savedData\n        this.merge(savedData);\n        ...\n      },\n      saveData: function() {\n        // Save current data, for subsequent Undo behavior\n        savedData = this.unmap();\n        // Submit current data to server\n        $.post(\"/save/data\", ...savedData, function(msg) {...});\n        ...\n      },\n      ...\n\n\n\"use strict\";\nvar VMs = $.views.viewModels,\n  counter = 0,\n\n// Initial data\n  app = {\n    msg: null,\n    selectedIndex: null,\n    movies: [\n    {\n      title:\"Meet Joe Black\",\n      languages: [\n        {name: \"English\"},\n        {name: \"French\"}\n      ]\n    },\n    {\n      title:\"Eyes Wide Shut\",\n      languages: [\n        {name: \"German\"},\n        {name: \"French\"},\n        {name: \"Spanish\"}\n      ]\n    }\n  ]\n  };\n\n// Compile View Models\nVMs({\n  MovieApp: {\n    getters: [\n      \"msg\",\n      \"selectedIndex\",\n      {\n        getter: \"movies\",\n        type: \"Movie\"\n      }\n    ],\n    extend: {\n      undo: function() {\n        this.merge(savedData); // Revert to previous savedData\n        this.msg(null);\n      },\n      saveData: function() {\n        // Save current data, for subsequent Undo behavior\n        savedData = this.unmap();\n        savedData.selectedIndex = null;\n        savedData = JSON.stringify(savedData);\n\n        // In real app, uncomment to save current data to the server:\n        // $.post(\"/save/data\", {movieData : savedData}, function(msg) {\n          var msg = \"In a real app, updated data would have been saved to server\";\n          this.msg(msg); // Display message\n        //});\n        return false; // Do not do default form action for submit\n      },\n      addMovie: function() {\n        $.observable(this.movies()).insert(VMs.Movie(\n          \"NewTitle\" + counter,\n          [VMs.Language(\"NewLanguage\" + counter++)]\n        ));\n        // Set selection on the added item\n        this.select($.view(\".movies tr:last\").index);\n      },\n      removeMovie: function(index) {\n        this.select(); // unselect\n        $.observable(this.movies()).remove(index);\n        return false;\n      },\n      select: function(index) {\n        if (this.selectedIndex() !== index) {\n          this.selectedIndex(index);\n        }\n      },\n      deleteLast: function() { // Example of action using View Model hierarchy\n        var moviesCount = this.movies().length;\n        if (moviesCount) {\n          var lastMovie = this.movies()[moviesCount-1];\n          var languagesCount = lastMovie.languages().length;\n          if (languagesCount) {\n            lastMovie.removeLanguage(languagesCount-1);\n          }\n        }\n      },\n      showData: function() { // Get the current data, and display in 'console'\n        $(\"#console\").append($(\"#showData\").render(this.unmap()));\n      },\n      bgColor: bgColor // Helper for background color rendering\n    }\n  },\n  Movie: {\n    getters: [\n      \"title\",\n      {\n        getter: \"languages\",\n        type: \"Language\"\n      }\n    ],\n    extend: {\n      addLanguage: function() {\n        $.observable(this.languages()).insert(VMs.Language(\"NewLanguage\" + counter++));\n      },\n      removeLanguage: function(index) {\n        $.observable(this.languages()).remove(index);\n        return false;\n      }\n    }\n  },\n  Language: {\n    getters: [\"name\"]\n  }\n});\n\n// Instantiate View Models\nvar appVm = $.views.viewModels.MovieApp.map(app);\n\n// Background color helper function\nfunction bgColor(index) {\n  return this.selectedIndex() === index\n    ? \"yellow\"\n    : (index%2 ? \"#fdfdfe\" : \"#efeff2\");\n}\n\nbgColor.depends = [\"#index\", appVm, \"selectedIndex\"];\n\n// Save copy of initial data, for Undo feature\nvar savedData = app;\n\n// Top level data-linking - bind content to View Models\n$.link(true, \".linkedContent\", appVm);\n\n// Detect changes - to enable Submit/Undo buttons, and warn on page navigation\n$.observable(appVm.movies()).observeAll(function() {\n  // If there have been any data changes, clear message and enable Submit and Undo buttons\n  appVm.msg(\"\");\n});\n\n// \"Navigate away\" behavior\n$(window).on('beforeunload', function(){\n  if (appVm.msg() === \"\") {\n    return \"You have unsaved changes.\";\n  }\n});\n\n"
      },
      {
        "_type": "para",
        "title": "Save/Undo behavior in an MVVM application using plain objects",
        "text": "Save/Undo behavior in an MVVM application using plain objects\nThe above scenario of Save/Undo making a snapshot of current View Model data, and binding to the submit action, can be achieved with either compiled View Models or with plain object hierarchies. But it is easier to achieve with compiled View Models.\nBy way of comparison, here is the corresponding sample using plain objects:\n"
      },
      {
        "_type": "sample",
        "title": "MVVM Save/Undo, using plain objects",
        "text": "MVVM Save/Undo, using plain objects\n\n\n \n\n  \n    show data\n    delete last language\n    Undo\n  \n\n  \n    Submit Changes\n\n    Click to select and edit\n    \n      \n        TitleLanguages\n        Add\n      \n      \n    \n\n    \n  \n\n  \n\n\n\n\n  <tr class=\"hover\" data-link=\"css-background-color{:~bgColor(#index)}\">\n    <td>\n      <span data-link=\"#index + 1\"></span>:\n      <span data-link=\"title\"></span>\n    </td>\n    <td>\n      {^{for languages}}\n        <div data-link=\"name\"></div>\n      {{/for}}\n    </td>\n    <td><span class=\"removeMovie\"></span></td>\n  </tr>\n\n\n\n  <div>\n    <div class=\"title\">Title:</div>\n    <div><input data-link=\"title\" /></div>\n    <div class=\"title\">\n      Languages: <span class=\"addLanguage\">Add</span>\n    </div>\n    {^{for languages ~movie=#data}}\n      <input data-link=\"name\" />\n      <span class=\"removeLanguage\"\"></span>\n    {{/for}}\n  </div>\n\n\n\n\n  <hr/>\n  {{for movies}}<div>\n    <b>Movie:</b> {{>title}}\n    <b>Languages:</b> {{for languages}} {{>name}}{{/for}}\n  </div>{{/for}}\n\n\n\nvar VMs = $.views.viewModels,\n  counter = 0,\n\n  // Initial data\n  app = {\n    msg: null,\n    selectedIndex: null,\n    movies: [\n      {\n        title:\"Meet Joe Black\",\n        languages: [\n          {name: \"English\"},\n          {name: \"French\"}\n        ]\n      },\n      {\n        title:\"Eyes Wide Shut\",\n        languages: [\n          {name: \"German\"},\n          {name: \"French\"},\n          {name: \"Spanish\"}\n        ]\n      }\n    ],\n    select: function(index) {\n      if (this.selectedIndex !== index) {\n        $.observable(this)\n          .setProperty(\"selectedIndex\", index);\n      }\n    },\n    showMsg: function(msg) {\n      $.observable(this).setProperty(\"msg\", msg);\n    }\n  },\n\n  savedData = JSON.stringify(app.movies),\n\n  handlers = {\n    undo: function() {\n      // Revert to previous savedData\n      $.observable(this.movies).refresh(JSON.parse(savedData));\n      $.observable(this).removeProperty(\"selectedIndex\");\n    },\n    saveData: function() {\n      // Make new savedData snapshot\n      savedData = JSON.stringify(this.movies);\n\n      // In real app, uncomment to save current data to the server:\n      // $.post(\"/save/data\", {movieData : savedData}, function(msg) {\n        var msg = \"In a real app, updated data would have been saved to server\";\n        this.showMsg(msg); // Display message\n      //});\n      return false; // Do not do default form action for submit\n    },\n    addMovie: function() {\n      $.observable(this.movies).insert({\n        title: \"NewTitle\" + counter ,\n        languages: [\n          {name: \"NewLanguage\" + counter++}\n        ]}\n      );\n      // Set selection on the added item\n      this.select($.view(\".movies tr:last\").index);\n    },\n    removeMovie: function(ev, evtArgs) {\n      this.select(); // unselect\n      var thisIndex = $.view(ev.target).index;\n      $.observable(this.movies).remove(thisIndex);\n      return false;\n    },\n    addLanguage: function(ev, evtArgs) {\n      var selectedMovie = this.movies[this.selectedIndex];\n      $.observable(selectedMovie.languages).insert({\n        name: \"NewLanguage\" + counter++\n      });\n    },\n    removeLanguage: function(ev, evtArgs) {\n      var selectedMovie = this.movies[this.selectedIndex];\n      var thisIndex = $.view(ev.currentTarget).index;\n      $.observable(selectedMovie.languages).remove(thisIndex);\n      return false;\n    },\n    select: function(ev, evtArgs) {\n      this.select($.view(ev.currentTarget).index);\n    },\n    deleteLast: function() {\n      if (this.movies.length) {\n        var languages = this.movies[this.movies.length - 1].languages;\n        $.observable(languages).remove();\n      }\n    },\n    showData: function() {\n      $(\"#console\").append($(\"#showData\").render(this));\n    },\n    bgColor: bgColor\n  };\n\n// Background color helper function\nfunction bgColor() {\n  return app.selectedIndex === this.index\n    ? \"yellow\"\n    : (this.index%2 ? \"#fdfdfe\" : \"#efeff2\");\n}\n\nbgColor.depends = [\"#index\", app, \"selectedIndex\"];\n\n$.observable(app.movies).observeAll(function() {\n  app.showMsg(\"\"); \n// If there have been any changes made to the movies data we clear\n\t//the Saved... message and this also drives the Save button\n\t//disabled property and the \"navigate away\" behavior.\n});\n\n// \"Navigate away\" behavior\n$(window).on('beforeunload', function(){\n  return app.msg === \"\" ? \"You have unsaved changes.\" : undefined;\n});\n\n$.link(true, \".linkedContent\", app, handlers);\nProvide Submit Changes and Undo buttons, calling the saveData and undo methods of View Model:\n<div class=\"linkedContent\">\n  ...\n  <button data-link=\"{on ~undo} ...\">Undo</button>\n  ...\n  <form data-link=\"{on 'submit' ~saveData}\">\n    <button type=\"submit\" ...>Submit Changes</button>\n    ...\n\nProvide undo and saveData helper methods:\nhandlers = {\n  undo: function() {\n    // Revert to previous savedData\n    $.observable(this.movies).refresh(JSON.parse(savedData));\n    $.observable(this).removeProperty(\"selectedIndex\");\n  },\n  saveData: function() {\n    // Save current data, for subsequent Undo behavior\n    savedData = JSON.stringify(this.movies);\n\n    $.post(\"/save/data\", ...savedData, function(msg) {...});\n    ...\n  },\n...\n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsvviewmodelsapi": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "This topic covers using Compiled View Models with JsViews – along with data-linking and observability.\nCompiled View Models can be used equally well with JsRender or with JsViews – and the same basic scenarios apply:\n\nUsing $.views.viewModels(...) to register/compile View Models (myVM)\nUsing a compiled View Model myVM as constructor/factory method – MyVM(...) – to create View Model instances (myVmInstance)\nUsing MyVM.map(...) to convert a plain object hierarchy (such as from a JSON request) to a hierarchy of View Model instances\nUsing myVMInstance.merge(...) to incrementally update a View Model hierarchy, using updated plain data\nUsing myVMInstance.unmap() to convert a View Model hierarchy back to a plain object hierarchy\n\nHowever JsViews brings additional power to compiled View Models:\n"
      },
      {
        "_type": "para",
        "title": "Compiled View Model instances are automatically 'observable'",
        "text": "Compiled View Model instances are automatically 'observable'\nCompiled View Model classes used with JsViews are automatically observable, so:\n\nCalling a setter function such as person.name(\"newName\") will automatically make an observable change to the View Model instance (person)\nDirectly making an observable change (...setProperty(\"name\", ...)) to a View Model instance person will automatically call the setter person.name(...)\nIncremental updates triggered by myViewModelObject.merge(...) are automatically observable – so data-linked values in the templates will also update incrementally.\n\n"
      },
      {
        "_type": "para",
        "title": "<b>Samples:</b> ",
        "text": "Samples: \n"
      },
      {
        "_type": "para",
        "title": "Using JsViews with a hierarchy of compiled View Model objects",
        "text": "Using JsViews with a hierarchy of compiled View Model objects\nThe following sample adds JsViews and data-linking to the first of the JsRender samples for compiled View Models.\nIt uses exactly the same calls to $.views.viewMethods to obtain compiled View Models – and the same code to then construct the View Model hierarchy:\n// Compile Person View Model, with addPhone method\nvar Person = $.views.viewModels({\n  getters: [\"name\", \"address\", \"phones\"],\n  extend: {addPhone: addPhone}\n});\n...\n// Instantiate View Model hierarchy using constructors\nvar person = Person(\n  \"Pete\",\n  Address(\"1st Ave\"),\n  [Phone(\"111 111 1111\"), Phone(\"222 222 2222\")]\n);\n\n"
      },
      {
        "_type": "sample",
        "title": "Using JsViews with a hierarchy of compiled View Model objects",
        "text": "Using JsViews with a hierarchy of compiled View Model objects\nbutton {margin-bottom: 9px;}\n\nChange name\nAdd Phone\n\n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td>{^{:name()}}</td></tr>\n    <tr><td>Street:</td><td>{^{:address().street()}}</td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones()}}\n          <tr><td>\n            {^{:number()}}\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n\n// Compiled template\nvar tmpl = $.templates(\"#personTmpl\");\n\n// Method for Person class\nfunction addPhone(phoneNo) {\n  // Uses Phone() View Model constructor to create Phone instance\n  $.observable(this.phones()).insert(Phone(phoneNo));\n}\n\n// Compile Person View Model, with addPhone method\nvar Person = $.views.viewModels({\n  getters: [\"name\", \"address\", \"phones\"],\n  extend: {addPhone: addPhone}\n});\n\n// Compile Address View Model\nvar Address = $.views.viewModels({getters: [\"street\"]});\n\n// Compile Phone View Model\nvar Phone = $.views.viewModels({getters: [\"number\"]});\n\n// Instantiate View Model hierarchy using constructors\nvar person = Person(\n  \"Pete\",\n  Address(\"1st Ave\"),\n  [Phone(\"111 111 1111\"), Phone(\"222 222 2222\")]\n);\n\n// Render and link template against person object (instance of Person)\ntmpl.link(\"#result\", person);\n\n// Button handlers\n$(\"#changeName\").on(\"click\", function() {\n  person.name(\"newName\");           // Use the name(...) setter\n});\n\n$(\"#addPhone\").on(\"click\", function() {\n  person.addPhone(\"xxx xxx xxxx\");  // Call the addPhone(...) method\n});\nThe principal changes from the corresponding JsRender sample are as follows:\n\nThe template uses data-linked tags:\n...{^{:name()}}...\n...{^{:address().street()}}...\n...{^{for phones()}}...\n...{^{:number()}}...\n\nInstead of the render() method, we use the link() method:\ntmpl.link(\"#result\", person);\n\nThe addPhone() method inserts a new Phone 'observably’:\nfunction addPhone(phoneNo) {\n  $.observable(this.phones()).insert(Phone(phoneNo));\n}\n\nThe setters (and also the addPhone method) now trigger updates through observable data-changes and data-linking. We don’t now need to re-render the template to show the changes:\n$(\"#changeName\").on(\"click\", function() {\n  person.name(\"newName\");           // Use the name(...) setter\n});\n\n$(\"#addPhone\").on(\"click\", function() {\n  person.addPhone(\"xxx xxx xxxx\");  // Call the addPhone(...) method\n});\n\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "See also: the compiled View Models sample in the Data / View Model topic, which takes the above sample and adds add two-way data-linking on the get/set properties, by replacing data-linked tags such as:\n{^{:name()}}\n\nwith data-linked input elements:\n<input data-link=\"name()\" />\n\n"
      },
      {
        "_type": "para",
        "title": "Using MyViewModel.map(...) to map a whole object hierarchy to a View Model instance hierarchy",
        "text": "Using MyViewModel.map(...) to map a whole object hierarchy to a View Model instance hierarchy\nSimilarly, we will convert from JsRender to JsViews the sample that took a ‘View Model typed hierarchy’, and created a complete hierarchy of View Model instances, by passing a plain data hierarchy to the top-level map() method.\nAgain the code for compiling View Model classes and for  then calling the map() method to generated the View Model hierarchy is unchanged:\nCompile View Model classes (typed hierarchy):\n$.views.viewModels({\n  Person: {\n    getters: [\n      \"name\",                              // Declare 'name' as primitive type (string)\n     {getter: \"address\", type: \"Address\"}, // Declare 'address' as Address (View Model) type\n     {getter: \"phones\", type: \"Phone\"}     // Declare 'phones' as (array) of Phone (View Model) types\n    ],\n    extend: {addPhone: addPhone}\n  },\n  Address: {\n    getters: [\"street\"]\n  },\n  Phone: ...\n});\n\nPerson data (plain object hierarchy, or JSON string):\nvar personData = {\n    name: \"Pete\",\n    address: {street: \"1st Ave\"},\n    phones: [{number: \"111 111 1111\"}, ...]\n  };\n\nUse map() to convert from personData plain object hierarchy (or JSON string) to person View Model hierarchy:\nvar person = $.views.viewModels.Person.map(personData);\n\n"
      },
      {
        "_type": "sample",
        "title": "Using map() to convert from a plain object hierarchy to a View Model hierarchy",
        "text": "Using map() to convert from a plain object hierarchy to a View Model hierarchy\nbutton {margin-bottom: 9px;}\n\nChange name\nAdd Phone\n\n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td>{^{:name()}}</td></tr>\n    <tr><td>Street:</td><td>{^{:address().street()}}</td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones()}}\n          <tr><td>\n            {^{:number()}}\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n\n// Compiled template\nvar tmpl = $.templates(\"#personTmpl\");\n\n// Compile View Models\n$.views.viewModels({\n  Person: {\n    getters: [\n      \"name\",                              // name is a primitive type (string)\n     {getter: \"address\", type: \"Address\"}, // address is of type Address (View Model)\n     {getter: \"phones\", type: \"Phone\"}     // Each phone is of type Phone (View Model)\n    ],\n    extend: {addPhone: addPhone}\n  },\n  Address: {\n    getters: [\"street\"]\n  },\n  Phone:{\n    getters: [\"number\"]\n  }\n});\n\nvar vmCollection = $.views.viewModels;\n\n// Method for Person class\nfunction addPhone(phoneNo) {\n  // Uses Phone() View Model constructor to create Phone instance\n  $.observable(this.phones()).insert(vmCollection.Phone(phoneNo));\n}\n\n// person plain object hierarchy:\nvar personData = {\n  name: \"Pete\",\n  address: {street: \"1st Ave\"},\n  phones: [{number: \"111 111 1111\"}, {number: \"222 222 2222\"}]\n};\n\n// Instantiate View Model hierarchy using map()\nvar person = vmCollection.Person.map(personData);\n\n// Render template against person object (instance of Person)\ntmpl.link(\"#result\", person);\n\n// Button handlers\n$(\"#changeName\").on(\"click\", function() {\n  person.name(\"newName\");           // Use the name(...) setter\n});\n\n$(\"#addPhone\").on(\"click\", function() {\n  person.addPhone(\"xxx xxx xxxx\");  // Call the addPhone(...) method\n});\nChanges from the corresponding JsRender version include:\n\nData-linked tags\n\n... {^{:name()}} ...\n\naddPhone() inserts a new Phone 'observably'\n\nfunction addPhone(phoneNo) {\n  // Uses Phone() View Model constructor to create Phone instance\n  $.observable(this.phones()).insert(vmCollection.Phone(phoneNo));\n}\n\n\nCalling setters, or the addPhone method, trigger observable updates...\n\n...\nperson.name(\"newName\");           // Use the name(...) setter\n\n...\nperson.addPhone(\"xxx xxx xxxx\");  // Call the addPhone(...) method\n\n"
      },
      {
        "_type": "para",
        "title": "Using merge() and unmap()",
        "text": "Using merge() and unmap()\nThe next sample includes  merge() and unmap() – starting from the corresponding JsRender sample, and adding data-linking.\n"
      },
      {
        "_type": "para",
        "title": "Updating with merge() makes minimal incremental changes",
        "text": "Updating with merge() makes minimal incremental changes\nCalling merge(modifiedData) does not replace the whole hierarchy of View Model instances, but works incrementally to add/remove/modify instances as appropriate. So if most of modifiedData content is the same as the data previously passed to map() or merge(), the call will make only minimal changes to the hierarchy.\nWhen using a data-linked template to render the View Model hierarchy, the resulting changes to the rendered (data-linked) view will also be incremental (and minimal).\n"
      },
      {
        "_type": "sample",
        "title": "Using merge() to update View Models, and unmap() to return to plain objects",
        "text": "Using merge() to update View Models, and unmap() to return to plain objects\nbutton {margin-bottom: 9px;}\n\nUpdate\nRevert\nGet Data\nChange name\nAdd Phone\n\n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td>{^{:name()}}</td></tr>\n    <tr><td>Street:</td><td>{^{:address().street()}}</td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones()}}\n          <tr><td>{^{:number()}}</td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\n\n// Compiled template\nvar tmpl = $.templates(\"#personTmpl\");\n\n// Compile View Models\n$.views.viewModels({\n  Person: {\n    getters: [\n      \"name\",                              // name is a primitive type (string)\n     {getter: \"address\", type: \"Address\"}, // address is of type Address (View Model)\n     {getter: \"phones\", type: \"Phone\"}     // Each phone is of type Phone (View Model)\n    ],\n    extend: {addPhone: addPhone}\n  },\n  Address: {\n    getters: [\"street\"]\n  },\n  Phone:{\n    getters: [\"number\"]\n  }\n});\n\nvar vmCollection = $.views.viewModels;\n\n// Method for Person class\nfunction addPhone(phoneNo) {\n  // Uses Phone() View Model constructor to create Phone instance\n  $.observable(this.phones()).insert(vmCollection.Phone(phoneNo));\n}\n\n// First version of data (e.g. from JSON request):\nvar personData = {\n  name: \"Pete\",\n  address: {street: \"1st Ave\"},\n  phones: [{number: \"111 111 1111\"}, {number: \"222 222 2222\"}]\n};\n\n// Second version of data (e.g. new JSON request):\nvar personData2 = {\n  name: \"Peter\",\n  address: {street: \"2nd Ave\"},\n  phones: [{number: \"111 111 9999\"},{number: \"333 333 9999\"}]\n};\n\n// Instantiate View Model hierarchy, using map()\nvar person = vmCollection.Person.map(personData);\n\n// Render template against person object (instance of Person)\ntmpl.link(\"#result\", person);\n\n// Button handlers\n$(\"#update\").on(\"click\", function() {\n  // Update View Model hierarchy, using merge()\n  person.merge(personData2);\n});\n\n$(\"#revert\").on(\"click\", function() {\n  // Revert View Model hierarchy, using merge()\n  person.merge(personData);\n});\n\n$(\"#changeName\").on(\"click\", function() {\n  person.name(\"newName\");           // Use the name(...) setter\n});\n\n$(\"#addPhone\").on(\"click\", function() {\n  person.addPhone(\"xxx xxx xxxx\");  // Call the addPhone(...) method\n});\n\n$(\"#getData\").on(\"click\", function() {\n  // Get current data, using unmap()\n  var updatedPersonData = person.unmap();\n  window.alert(JSON.stringify(updatedPersonData));\n});\nThis sample, based on the corresponding JsRender version, includes using merge()to trigger an incremental (minimal) update to the View Model hierarchy, and as a result, to the data-linked view:\n$(\"#update\").on(\"click\", function() {\n  person.merge(personData2);               // Update person View Model hierarchy\n});\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Since we are using data-linking, we can easily modify the sample to include two-way databinding:\n"
      },
      {
        "_type": "sample",
        "title": "Using merge() and unmap() &ndash; with two-way binding",
        "text": "Using merge() and unmap() – with two-way binding\n\n\n\n  Update\n  Revert\n  Get Data\n  Change name\n  Add Phone\n  \n\n\n\n   Change Log\n  Clear\n  \n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Name:</td><td><input data-link=\"name()\"/></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address()^street()\"/></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones()}}\n          <tr><td>\n            <input class=\"floatleft\" data-link=\"number()\" />\n            <span class=\"remove\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\nvar tmpl = $.templates(\"#personTmpl\");\n\n// Compile View Models\n$.views.viewModels({\n  Person: {\n    getters: [\n      \"name\",                               // name is a primitive type (string)\n      {getter: \"address\", type: \"Address\"}, // address is of type Address (View Model)\n      {getter: \"phones\", type: \"Phone\"}     // Each phone is of type Phone (View Model)\n    ],\n    extend: {addPhone: addPhone}\n  },\n  Address: {\n    getters: [\"street\"]\n  },\n  Phone:{\n    getters: [\"number\"]\n  }\n});\n\nvar vmCollection = $.views.viewModels;\n\n// Method for Person class\nfunction addPhone(phoneNo) {                // Uses vmCollection.Phone() to construct new instance\n  $.observable(this.phones()).insert(vmCollection.Phone(phoneNo));\n}\n\n// First version of data (e.g. from JSON request):\nvar personData = {\n  name: \"Pete\",\n  address: {street: \"1st Ave\"},\n  phones: [{number: \"111 111 1111\"}, {number: \"222 222 2222\"}]\n};\n\n// Second version of data (e.g. from JSON request):\nvar personData2 = {\n  name: \"Peter\",\n  address: {street: \"2nd Ave\"},\n  phones: [{number: \"111 111 9999\"},{number: \"333 333 9999\"}]\n};\n\n// Instantiate View Model hierarchy, using map()\nvar person = vmCollection.Person.map(personData);\n\n// Render and link the template against person (Person instance)\ntmpl.link(\"#result\", person);\n\n// Button handlers\n$(\"#update\").on(\"click\", function() {\n  person.merge(personData2);\n});\n\n$(\"#revert\").on(\"click\", function() {\n  person.merge(personData);\n});\n\n$(\"#changeName\").on(\"click\", function() {\n  person.name(\"newName\");\n});\n\n$(\"#addPhone\").on(\"click\", function() {\n  person.addPhone(\"xxx xxx xxxx\");\n});\n\n$(\"#result\").on(\"click\", \".remove\", function() {\n  $.observable(person.phones()).remove(\n    $.view(this).index\n  )\n});\n\n$(\"#getData\").on(\"click\", function() {\n  var updatedPersonData = person.unmap();\n  window.alert(JSON.stringify(updatedPersonData));\n});\n\n// Change log code\n$(\".clear\").on(\"click\", function() {\n  $(\".messages\").empty();\n});\n\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n\nlogChanges(true);\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observable(person).observeAll(changeHandler);\n  } else {\n    $.observable(person).unobserveAll(changeHandler);\n  }\n}\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  if (ev.data.observeAll) {\n    message += \"observeAll path: \" + ev.data.observeAll.path() + \"\"\n  }\n  for (var key in eventArgs) {\n    message += \"\" + key + \": \" + JSON.stringify(eventArgs[key]) + \"\";\n  }\n  $(\".messages\").append(\"\" + message + \"\");\n}\nThis sample illustrates two-way data-linking of get/set properties on compiled View Models, by replacing the data-linked tags of the previous sample, such as:\n{^{:name()}}\n\nwith data-linked input elements:\n<input data-link=\"name()\" />\n\nIt also illustrates using observeAll with compiled View Model instances – by including the Change Log idea, copied over from the samples on the observeAll/unobserveAll topics.\n\n"
      },
      {
        "_type": "para",
        "title": "MVVM &ndash; Save/Undo",
        "text": "MVVM – Save/Undo\nTypically in an MVVM application, a Save/Undo feature will save View Model data back to the Model on the server, or revert View Model data back to the last version saved.\nThe compiled View Model merge() and unmap() features are very useful for this scenario. See discussion and samples in the MVVM – Dynamic view hierarchy topic.\n"
      },
      {
        "_type": "para",
        "title": "Overriding generated get/set functions (JsViews version)",
        "text": "Overriding generated get/set functions (JsViews version)\nTo override a generated get/set property provided by a compiled View Model you can provide an implementation in the extend hash, with the same name as the get/set in the getters array,  following the pattern below.\n(Note that this pattern is slightly different from the JsRender version):\n// Define a myNameGetSet(...) function, to override the compiled name(...) get/set function\nfunction myNameGetSet(val) {\n  if (!arguments.length) {\n    // No argument: use as a getter\n    return this._name;\n  }\n  // Called with argument: use as setter, and trigger observable change\n  $.observable(this).setProperty(\"name\", val);\n\n  // The above lines are standard compiled get/set code when using JsViews\n\n  console.log(\"name set to \" + val); // This is an additional line of code, for logging\n}\n\n// The following is standard compiled get/set code when using JsViews\nmyNameGetSet.set = function(val) {\n  // Setter called by observable property change\n  this._name = val;\n};\n\n// Declare a Person View Model with an overridden name() get/set property\n$.views.viewModels({\n  Person: {\n    getters: [\n      {getter: \"name\", ...}, // Compiled name() get/set\n      ...\n    ],\n    extend: {\n      name: myNameGetSet,    // Override name() get/set\n      ...\n    }\n    ...\n  },\n  ...\n});\n\nThe above is equivalent to the generated version except that it adds custom logging to the getter/setter function.\n"
      },
      {
        "_type": "para",
        "title": "Sample showing some of the advanced View Model features",
        "text": "Sample showing some of the advanced View Model features\nThe next sample specifically highlights some of the advanced features of compiled View Models, by adding JsViews data-linking to the corresponding JsRender sample.\n\nIt stores compiled View Models on a myVmCollection hash, as a View Model typed collection, rather than on$.views.viewModels\nIt maps from an array of ‘people’ rather than a single person:\nvar people = Person.map(peopleData);\nIt specifies an id key for Person. When updating the phones array the id value is treated as 'primary key’, and used to map 'identity’:\nid: \"id\"\nIt provides an id() callback on Person, for determining identity – allowing identification of corresponding View Model instances within the people array, and hence preventing unnecessary disposal and re-instantiation (which would destroy state, such as the comment value).\nIt has a comment() get/set property that is added as part of the extend definition, not the getters, so it is not initialized from data, in the constructor. Note therefore that if you set a comment on each person instance, then click Update, then Revert, one comment is conserved (since that instance is never disposed – based on the ‘identity’ determination) but the other is lost since the instance is disposed and then re-created by Revert:\nextend: {...comment: comment...}\nIt has defaultVal specified for name, address and phones, either as ‘static’ values or computed by a callback function:\naddress: {type: \"Address\", defaultVal: defaultStreet}\nIt overrides the generated person.name() get/set by a myNameGetSet function which includes logging\nIt passes a JSON string to merge() or map()\n\n"
      },
      {
        "_type": "sample",
        "title": "Mapping from JSON data to View Model hierarchy &ndash; further features",
        "text": "Mapping from JSON data to View Model hierarchy – further features\ntable {margin-bottom: 9px;}\n\nUpdate\nRevert\nGet Data\nChange name\nAdd Phone\n\n\n\n\n  <table class=\"nowidth\"><tbody>\n    <tr><td>Comment:</td><td><input data-link=\"comment()\"/></td></tr>\n    <tr><td>Name:</td><td><input data-link=\"name()\"/></td></tr>\n    <tr><td>Street:</td><td><input data-link=\"address()^street()\"/></td></tr>\n    <tr><td>Phones:</td><td>\n      <table class=\"nowidth\"><tbody>\n        {^{for phones() ~personIndex=#index}}\n          <tr><td>\n            <input class=\"floatleft\" data-link=\"number()\" />\n            <span class=\"remove\" data-link=\"{on remove #index ~personIndex}\"></span>\n          </td></tr>\n        {{/for}}\n      </tbody></table>\n    </td></tr>\n  </tbody></table>\nvar tmpl = $.templates(\"#personTmpl\");\n\nvar myVmCollection = {};\n\n// Compile View Models\n$.views.viewModels({\n  Person: {\n    getters: [\n      {getter: \"name\", defaultVal: \"No name\"}, // Compiled name() get/set\n      {getter: \"address\", type: \"Address\", defaultVal: defaultAddress},\n      {getter: \"phones\", type: \"Phone\", defaultVal: []}\n    ],\n    extend: {\n      name: myNameGetSet,                      // Override name() get/set\n      addPhone: addPhone,\n      comment: comment                         // Additional get/set property, not initialized by data)\n    },\n    id: function(vm, plain) {                  // Callback function to determine 'identity'\n      return vm.personId === plain.personId;\n    }\n  },\n  Address: {\n    getters: [\"street\"]\n  },\n  Phone: {\n    getters: [\"number\"],\n    extend: {\n      remove: remove,\n    },\n    id: \"phoneId\"                              // Treat phoneId as 'primary key', for identity\n  }\n}, myVmCollection);                            // Store View Models (typed hierarchy) on myVmCollection\n\n// Override generated name() get/set\nfunction myNameGetSet(val) {\n  if (!arguments.length) {\n    return this._name; // If there is no argument, use as a getter\n  }\n  $.observable(this).setProperty(\"name\", val);\n};\n\nmyNameGetSet.set = function(val) {\n  this._name = val; // Setter called by observable property change\n  console.log(\"name set to \" + val);           // This is an additional line of code, for logging\n};\n\n// Method for Person class\nfunction addPhone(phoneNo) {                   // Uses myVmCollection.Phone() to construct new instance\n  $.observable(this.phones()).insert(myVmCollection.Phone(phoneNo));\n}\n\n// Method for Phone class\nfunction remove(index, personIndex) {\n  $.observable(people[personIndex].phones()).remove(index);\n};\n\n// get/set for comment (state on View Model instance, not initialized from data)\nfunction comment(val) {\n  if (!arguments.length) {\n    return this._comment; // If there is no argument, use as a getter\n  }\n  $.observable(this).setProperty(\"comment\", val);\n}\n\ncomment.set = function(val) {\n  this._comment = val; // Setter called by observable property change\n};\n\nfunction defaultAddress() {                    // Function providing default address if undefined in data\n  return {street: 'No street for \"' + this.name + '\"'};\n}\n\n// First version of data - array of objects (e.g. from JSON request):\nvar peopleData = [\n  {\n    personId: \"1\",\n    address: {\n      street: \"2nd Ave\"\n    }\n  },\n  {\n    personId: \"2\",\n    name: \"Pete\",\n    phones: [\n      {number: \"333 333 3333\", phoneId: \"2a\"}\n    ]\n  }\n];\n\n// Second version of data - JSON string (e.g. new JSON request):\nvar peopleData2 = '[{\"personId\":\"2\",\"name\":\"Peter\",\"address\":{\"street\":\"11 1st Ave\"},'\n+ '\"phones\":[{\"number\":\"111 111 9999\",\"phoneId\":\"1a\"},{\"number\":\"333 333 9999\",\"phoneId\":\"2a\"}]}]';\n\n// Instantiate View Model hierarchy using map()\nvar people = myVmCollection.Person.map(peopleData);\n\n// Render and link the template against people (array of Person instances)\ntmpl.link(\"#result\", people);\n\n// Button handlers\n$(\"#update\").on(\"click\", function() {\n  people.merge(peopleData2);\n});\n\n$(\"#revert\").on(\"click\", function() {\n  people.merge(peopleData);\n});\n\n$(\"#changeName\").on(\"click\", function() {\n  people[0].name(\"newName\");\n});\n\n$(\"#addPhone\").on(\"click\", function() {\n  people[0].addPhone(\"xxx xxx xxxx\");\n});\n\n$(\"#getData\").on(\"click\", function() {\n  var updatedPeopleData = people.unmap(people);\n  window.alert(JSON.stringify(updatedPeopleData));\n});\nThis sample, like the corresponding JsRender version, shows some of the advanced features of compiled View Models.\n\n"
      },
      {
        "_type": "para",
        "title": "Adding a custom data-linked property to a compiled View Model",
        "text": "Adding a custom data-linked property to a compiled View Model\nFinally, here is a sample which extends a compiled View Model with a custom hand-coded Person.isManager()get/set property. The property is coupled to the Team.manager() property – so setting Person.isManager(...) will update the Team.manager() correspondingly (and conversely when setting Team.manager(...).\nPerson.isManager is not included in the getters declaration, so that the constructor for Person will not expect an isManager parameter to be provided for initialization.\nSee also the related JsRender sample. Note that the JsViews version below is able to take advantage of data-linking, including data-linking directly to the custom Person.isManager property, and as a result is simpler than JsRender version, and requires less code. Also, changing manager triggers minimal incremental updates, whereas in the JsRender version it triggers a complete re-rendering of the whole template.\n"
      },
      {
        "_type": "sample",
        "title": "Sample: extending Person with an isManager property",
        "url": "samples/computed/team-manager/sample",
        "text": "Sample: extending Person with an isManager property\n// Custom function for Person.isManager get/set property\nfunction myIsManager(val) {\n  if (!arguments.length) {\n    return this === team.manager(); // If there is no argument, use as a getter\n  }\n  if (val) {\n    team.manager(this);             // Make this team member manager\n  } else if (this.isManager()) {\n    team.manager(null);             // Set team manager to null\n  }\n}\n\n// Compile View Models\n$.views.viewModels({\n  Team: {...},\n  Person: {\n    getters: [\"name\", ...],\n    extend: {\n      isManager: myIsManager        // use custom function\n    }\n  },\n  Address: {...}\n});\n\n// Specify that the same function is a setter - for two-way data-linking\nmyIsManager.set = true;\n\n// Specify dependency: if team.manager() changes, manager.isManger() should update\nmyIsManager.depends = function() {\n  return [team, \"manager\"];\n}\n// Alternatively - more declarative approach: use ~manager contextual parameter:\n// myIsManager.depends = \"~manager\"\n...\n\n//Initialize second team member to be manager.\nvar manager = team.members()[1];\nmanager.isManager(true);\n...\n\nData-link directly to isManager() with two-way binding:\n<input data-link=\"isManager()\" type=\"checkbox\"/>\n\nUse deep linking on other paths so they update when the team.manager() changes:\n<input data-link=\"manager()^address().ZIP()\" />\n\n\n\"use strict\";\n// Compile template\nvar tmpl = $.templates(\"#teamTmpl\");\n\n// Custom function for Person.isManager get/set property\nfunction myIsManager(val) {\n  if (!arguments.length) {\n    return this === team.manager(); // If there is no argument, use as a getter\n  }\n  if (val) {\n    // Setting this.isManager() to true\n    // So make this team member manager\n    team.manager(this);\n  } else if (this.isManager()) {\n    // Setting this.isManager to false, and this team member is currently manager.\n    // So set team manager to null\n    team.manager(null);\n  }\n}\n\n// Compile View Models\n$.views.viewModels({\n  Team: {\n    getters: [\n      {\n        getter: \"manager\",\n        type: \"Person\"\n      },\n      {\n        getter: \"members\",\n        type: \"Person\"\n      }\n    ]\n  },\n  Person: {\n    getters: [\n      \"name\",\n      {\n        getter: \"address\",\n        type: \"Address\"\n      }\n    ],\n    extend: {\n      isManager: myIsManager // use custom function\n    }\n  },\n  Address: {\n    getters: [\"street\", \"ZIP\"]\n  }\n});\n\n// Specify that the same function is a setter - for two-way data-linking\nmyIsManager.set = true;\n\n// Specify dependency: if team.manager() changes, manager.isManger() should update\nmyIsManager.depends = function() {\n  return [team, \"manager\"];\n}\n// Alternatively - more declarative approach: use ~manager contextual parameter:\n// myIsManager.depends = \"~manager\"\n\n// Initial data\nvar teamData = {\n    manager: null,\n    members: [{\n      name: \"Pete\",\n      address: {\n        street: \"1st Ave\",\n        ZIP: \"12345\"\n      }\n    },{\n      name: \"Bess\",\n      address: {\n        street: \"Central Way\",\n        ZIP: \"98765\"\n      }\n    },\n    {\n      name: \"Henry\",\n      address: {\n        street: \"Main St\",\n        ZIP: \"54321\"\n      }\n    }]\n  };\n\n// Instantiate View Models\nvar team = $.views.viewModels.Team.map(teamData);\n\n//Initialize second team member to be manager.\nvar manager = team.members()[1];\nmanager.isManager(true);\n\ntmpl.link(\"#result\", team, {setManager: function(index) {\n  if (arguments.length === 3) {\n    team.members()[index].isManager(true);\n  } else if (team.manager()) {\n    team.manager().isManager(false);\n  }\n}});\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "jsvassigntag": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In JsViews the {^{: someExpression}} tag is a data-bound version of the JsRender {{: ...}} tag – which evaluates the expression and returns its string value.\nWhen using data-linked templates the data-bound version will update automatically when the data in the expression changes observably.\n"
      },
      {
        "_type": "sample",
        "title": "{^{: ...}}",
        "text": "{^{: ...}}\n\n\n\n  <button data-link=\"{on changeManager}\">Change manager</button><br/><br/>\n\n  <em>Name:</em> <input data-link=\"manager^name\" /><br/>\n  <em>Nickname:</em> <input data-link=\"manager^nickname\" /><br/>\n\n  <em>&lcub;{^:manager^nickname || manager^name}&rcub;:</em>\n  <span class=\"spanbox\">\n    {^{:manager^nickname || manager^name}}\n  </span>\n\n\nvar team = {\n  person1: {\n    name: \"Peter\",\n    nickname: \"Pete\"\n  },\n  person2: {\n    name: \"Octavia\"\n  },\n  changeManager: function() {\n    $.observable(this).setProperty({\n      manager: this.manager === this.person1 ? this.person2 : this.person1\n    });\n  }\n};\n\nteam.manager = team.person1;\n\nvar tmpl = $.templates(\"#teamTmpl\");\n\ntmpl.link(\"#result\", team);\n{^{:manager^nickname || manager^name}}\n\nThe data-linked {^{: ...}} tag updates when the expression manager^nickname || manager^name changes– i.e. when manager.nickname, manager.name or the manager object change.\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Note: {^{: ...}} does not HTML-encode the value of the expression. Therefore if you type in ...<sometag>... as nickname, the {^{: ...}} tag will insert that markup as is, into the HTML, which will cause an error (mismatched tag). In this scenario the {^{> ...}} tag should be used instead.\n"
      },
      {
        "_type": "links",
        "title": "See:",
        "text": "See:\n"
      }
    ]
  },
  "jsvhtmltag": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In JsViews the {^{> someExpression}} tag is a data-bound version of the JsRender {{> ...}} tag – which evaluates the expression and returns the HTML encoded string value of the result.\nWhen using data-linked templates the data-bound version will update automatically when the data in the expression changes observably.\n"
      },
      {
        "_type": "sample",
        "title": "{^{> ...}}",
        "text": "{^{> ...}}\n\n\n\n  <button data-link=\"{on changeManager}\">Change manager</button><br/><br/>\n\n  <em>Name:</em> <input data-link=\"manager^name\" /><br/>\n  <em>Nickname:</em> <input data-link=\"manager^nickname\" /><br/>\n\n  <em>&lcub;^{>manager^nickname || manager^name}&rcub;:</em>\n  <span class=\"spanbox\">\n    {^{>manager^nickname || manager^name}}\n  </span>\n\nvar team = {\n  person1: {\n    name: \"Peter\",\n    nickname: \"Pete\"\n  },\n  person2: {\n    name: \"Octavia\"\n  },\n  changeManager: function() {\n    $.observable(this).setProperty({\n      manager: this.manager === this.person1 ? this.person2 : this.person1\n    });\n  }\n};\n\nteam.manager = team.person1;\n\nvar tmpl = $.templates(\"#teamTmpl\");\n\ntmpl.link(\"#result\", team);\n{^{:manager^nickname || manager^name}}\n\nThe data-linked {^{> ...}} tag updates when the expression manager^nickname || manager^name changes– i.e. when manager.nickname, manager.name or the manager object change.\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Note: Unlike the {^{: ...}}, the {^{> ...}} HTML-encodes the value of the expression. So if you type in ...<sometag>... as nickname, the {^{> ...}} tag will HTML-encode that markup, and there will not be an error.\n"
      },
      {
        "_type": "links",
        "title": "See:",
        "text": "See:\n"
      }
    ]
  },
  "jsvincludetag": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In JsViews the {^{include ...}} tag is a data-bound version of the JsRender {{include ...}} tag.\nWhen using data-linked templates the data-bound version will update automatically when the data in the expression changes observably.\nThe most common scenario for {{include}} is for composition of templates, without change of data context and with statically-defined templates. In that scenario, even within a JsViews data-linked template, the {{include}} itself does not need to be data-linked:\n"
      },
      {
        "_type": "sample",
        "title": "{{include}}",
        "text": "{{include}}\n\n\n\n  I am {^{>manager^name}}\n\n\n\n  <button data-link=\"{on changeManager}\">Change manager</button><br/><br/>\n\n  <em>Name:</em> <input data-link=\"manager^name\" /><br/>\n\n  <em>&lcub;{include tmpl=\"#managerTmpl\"/}&rcub;:</em>\n  <span class=\"spanbox\">\n    {{include tmpl=\"#managerTmpl\"/}}\n  </span>\n\n\n\nvar team = {\n  person1: {\n    name: \"Peter\"\n  },\n  person2: {\n    name: \"Octavia\"\n  },\n  changeManager: function() {\n    $.observable(this).setProperty({\n      manager: this.manager === this.person1 ? this.person2 : this.person1\n    });\n  }\n};\n\nteam.manager = team.person1;\n\nvar tmpl = $.templates(\"#teamTmpl\");\n\ntmpl.link(\"#result\", team);\n{{include tmpl=\"#managerTmpl\"/}}\n\nHere, the {{include}} tag is not data-linked, but the managerTmpl template does itself include data-linking:\n<script id=\"managerTmpl\" type=\"text/x-jsrender\">\n  I am {^{>manager^name}}\n</script>\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "If {{include someExpression ...}} has an argument for moving to a new data-context, and changes in the value of the expression are to drive updates, then the data-linked form {^{include}} must be used:\n"
      },
      {
        "_type": "sample",
        "title": "{^{include}}",
        "text": "{^{include}}\n\n\n\n  I am {^{>name}}\n\n\n\n  <button data-link=\"{on changeManager}\">Change manager</button><br/><br/>\n\n  <em>Name:</em> <input data-link=\"manager^name\" /><br/>\n\n  <em>&lcub;^{include manager tmpl=\"#managerTmpl\"/}&rcub;:</em>\n  <span class=\"spanbox\">\n    {^{include manager tmpl=\"#managerTmpl\"/}}\n  </span>\n\n\n\nvar team = {\n  person1: {\n    name: \"Peter\"\n  },\n  person2: {\n    name: \"Octavia\"\n  },\n  changeManager: function() {\n    $.observable(this).setProperty({\n      manager: this.manager === this.person1 ? this.person2 : this.person1\n    });\n  }\n};\n\nteam.manager = team.person1;\n\nvar tmpl = $.templates(\"#teamTmpl\");\n\ntmpl.link(\"#result\", team);\n{^{include manager tmpl=\"#managerTmpl\"/}}\n\nThe data-linked {^{include}} tag updates when the expression manager changes – i.e. when the manager object is changed.\nAlso the ‘name’ updates when name changes, because the managerTmpl itself has a data-linked {^{>name}} tag:\n<script id=\"managerTmpl\" type=\"text/x-jsrender\">\n  I am {^{>name}}\n</script>\n\n\n"
      },
      {
        "_type": "para",
        "title": "{^{include ...}} with dynamically changing template",
        "text": "{^{include ...}} with dynamically changing template\nIf {{include}} uses tmpl=expression to obtain a template from data or from a helper, then the data-linked {^{include}} can be used to drive updates when the template changes dynamically:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <button data-link=\"{on changeManager}\">Change manager</button><br/><br/>\n\n  <em>Name:</em> <input data-link=\"manager^name\" /><br/>\n  <em>Template:</em> <input data-link=\"manager^template\" /><br/>\n\n  <em>^&lcub;{include manager ^tmpl=\"manager^template\"/}&rcub;:</em>\n  <span class=\"spanbox\">\n    {^{include manager ^tmpl=manager^template/}}\n  </span>\n\nvar team = {\n  person1: {\n    name: \"Peter\",\n    template: \"I am {^{>name}}\"\n  },\n  person2: {\n    name: \"Octavia\",\n    template: \"My name is {^{>name}}\"\n  },\n  changeManager: function() {\n    $.observable(this).setProperty({\n      manager: this.manager === this.person1 ? this.person2 : this.person1\n    });\n  }\n};\n\nteam.manager = team.person1;\n\nvar tmpl = $.templates(\"#teamTmpl\");\n\ntmpl.link(\"#result\", team);\n{^{include manager ^tmpl=manager^template/}}\n\nHere the data-linked {^{include}} uses a different template for each person (^tmpl=manager^template):\nvar team = {\n  person1: {\n    name: \"Peter\",\n    template: \"I am {^{>name}}\" // Template for Peter\n  },\n  ...\n\n– so thanks to the initial ^ in ^tmpl=... (see binding to tag properties), the {^{include}} tag updates also if the template itself changes dynamically.\n\n"
      },
      {
        "_type": "links",
        "title": "See:",
        "text": "See:\n"
      }
    ]
  },
  "jsvfortag": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In JsViews the {^{for someExpression}} tag is a data-bound version of the JsRender {{for ...}} tag – which moves the data context to the object or array returned by the expression, and – if an array – iterates over the array.\nWhen using data-linked templates the data-bound version will update automatically when the data in the expression changes observably, and, for arrays, will also update if the array itself changes observably.\n"
      },
      {
        "_type": "sample",
        "title": "{^{for ...}}",
        "text": "{^{for ...}}\nli {list-style: none}\n\n\n\n  <button data-link=\"{on addMember}\">Add</button>\n  <button data-link=\"{on replaceMembers}\">Replace</button>\n  <ul>\n    {^{for members}}\n      <li>\n        {^{:#index + 1}}: {{>name}}\n        <span class=\"remove\" data-link=\"{on ~root.removeMember #index}\"></span>\n      </li>\n    {{else}}\n      <li>There are no members</li>\n    {{/for}}\n  </ul>\n\n\nvar team = {\n  members: [\n    {name: \"Robert\"},\n    {name: \"Sarah\"}\n  ],\n  addMember: function() {\n    $.observable(this.members).insert({name: \"new\" + cnt++});\n  },\n  removeMember: function(index) {\n    $.observable(this.members).remove(index);\n  },\n  replaceMembers: function() {\n    $.observable(this).setProperty(\"members\", [{name: \"Peter\"}, {name: \"Octavia\"}, {name: \"Xavier\"}]);\n  }\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team);\nData:\nvar team = {\n  members: [\n    {name: \"Robert\"},\n    {name: \"Sarah\"}\n  ],\n...\n\nTemplate:\n...\n{^{for members}}\n  <li>... {^{>name}} ...</li>\n{{else}}\n  <li>There are no members</li>\n{{/for}}\n...\n\nHere, the data-linked {^{for}} tag updates incrementally when the members array is modified as in:\naddMember: function() {\n  $.observable(this.members).insert({name: \"new\" + cnt++});\n}\n...\nremoveMember: function(index) {\n  $.observable(this.members).remove(index);\n}\n\nand updates if the whole members array is replaced, as in:\nreplaceMembers: function() {\n  $.observable(this).setProperty(\"members\", [{name: \"Peter\"}, ...]);\n}\n\n\n"
      },
      {
        "_type": "para",
        "title": "{^{for ...}} with dynamically changing template",
        "text": "{^{for ...}} with dynamically changing template\nIf {{for}} uses tmpl=expression to obtain a template from data or from a helper, then the data-linked {^{for}} can be used to drive updates when the template changes dynamically:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <button data-link=\"{on addMember}\">Add</button>\n  <button data-link=\"{on replaceMembers}\">Replace</button><br/><br/>\n  <label><input type=\"checkbox\" data-link=\"isEditable\"/> Editable</label>\n  <ol>\n    {^{for members ^tmpl=isEditable?\"#memberEditTmpl\":\"#memberTmpl\" /}}\n  </ol>\n\n\n\n  <li>\n    {{>name}}\n    <span class=\"remove\" data-link=\"{on ~root.removeMember #index}\"></span>\n  </li>\n\n\n\n  <li>\n    <input data-link=\"name\"/>\n    <span class=\"remove\" data-link=\"{on ~root.removeMember #index}\"></span>\n  </li>\n\nvar team = {\n  members: [\n    {name: \"Robert\"},\n    {name: \"Sarah\"}\n  ],\n  isEditable: false,\n  addMember: function() {\n    $.observable(this.members).insert({name: \"new\" + cnt++})\n  },\n  removeMember: function(index) {\n    $.observable(this.members).remove(index);\n  },\n  replaceMembers: function() {\n    $.observable(this).setProperty(\"members\", [{name: \"Peter\"}, {name: \"Octavia\"}, {name: \"Xavier\"}])\n  }\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team);\n{^{for members ^tmpl=isEditable?\"#memberEditTmpl\":\"#memberTmpl\" /}}\n\nHere the data-linked {^{for}} uses two different templates, driven by the isEditable property:\nvar team = {\n  members: [...],\n  isEditable: false,\n  ...\n\n– so thanks to the initial ^ in ^tmpl=... the {^{for}} tag updates if isEditable changes – and uses the appropriate template. (See binding to tag properties.)\n\n"
      },
      {
        "_type": "links",
        "title": "See:",
        "text": "See:\n"
      }
    ]
  },
  "jsvpropstag": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In JsViews the {^{props someExpression}} tag is a data-bound version of the JsRender {{props ...}} tag – which iterates over the properties of the object returned by the expression.\nWhen using data-linked templates the data-bound version will update automatically when the data in the expression changes observably, and will also update if the properties of the object itself change observably.\nThe following sample is functionally similar to the example given for {^{for ...}} – but here instead of using a members array, it uses a members object – a dictionary by key of ‘name’ strings:\nteam.members = {m1: \"Robert\", m2: \"Sarah\"}\n\nAdding or removing properties on the members object triggers incremental updates of the {^{props members}} tag content. Replacing the members object triggers a complete update of the content.\n"
      },
      {
        "_type": "sample",
        "title": "{^{props ...}} &ndash; iterating over string properties ",
        "text": "{^{props ...}} – iterating over string properties \nli {list-style: none}\n\n\n\n  <button data-link=\"{on addMember}\">Add</button>\n  <button data-link=\"{on replaceMembers}\">Replace</button>\n  <ul>\n    {^{props members}}\n      <li>\n        {^{:#index+1}}: {{>prop}}\n        <span class=\"remove\" data-link=\"{on ~root.removeMember key}\"></span>\n      </li>\n    {{else}}\n      <li>There are no members</li>\n    {{/props}}\n  </ul>\n\n\nvar team = {\n  members: {m1: \"Robert\", m2: \"Sarah\"},\n  addMember: function() {\n    $.observable(this.members).setProperty(\"n\" + cnt, \"new\" + cnt++);\n  }, \n  removeMember: function(key) {\n    $.observable(this.members).removeProperty(key);\n  },\n  replaceMembers: function() {\n    $.observable(this).setProperty(\"members\", {m1: \"Peter\", m2: \"Octavia\", m3: \"Xavier\"});\n  }\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team);\nData:\nvar team = {\n  members: {m1: \"Robert\", m2: \"Sarah\"},\n...\n\nTemplate:\n...\n{^{props members}}\n  <li>... {{>prop}} ...</li>\n{{else}}\n  <li>There are no members</li>\n{{/props}}\n...\n\nHere, the data-linked {^{props members}} tag updates incrementally when properties of the members object are added or removed, as in:\naddMember: function() {\n  $.observable(this.members).setProperty(\"n\" + cnt, \"new\" + cnt++);\n}, \n...\nremoveMember: function(key) {\n  $.observable(this.members).removeProperty(key);\n}\n\nIt also updates if the whole members object is replaced, as in:\nreplaceMembers: function() {\n  $.observable(this).setProperty(\"members\", {m1: \"Peter\", ...});\n}\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Inside the {^{props members}} tag, a block is rendered for each property, with as data context:\n{key: propertyName, prop: propertyValue}\n\n– so {{>key}} gives the key and {{>prop}} gives the value for that property.\nIf members was not a dictionary of ‘name’ strings, but instead a dictionary of ‘person’ objects, each with a name property, then we would write {{>prop.name}} to display the name for that ‘person’ property.\nHere is a modified version of the sample above, using this dictionary of ‘person’ objects approach:\n"
      },
      {
        "_type": "sample",
        "title": "{^{props ...}} &ndash; iterating over object properties",
        "text": "{^{props ...}} – iterating over object properties\n\n\n\n  <button data-link=\"{on addMember}\">Add</button>\n  <button data-link=\"{on replaceMembers}\">Replace</button>\n  <ol>\n    {^{props members}}\n      <li>\n        {{>prop.name}}\n        <span class=\"remove\" data-link=\"{on ~root.removeMember key}\"></span>\n      </li>\n    {{/props}}\n  </ol>\n\n\nvar team = {\n  members: {\n    m1: {name: \"Robert\"},\n    m2: {name: \"Sarah\"}\n  },\n  addMember: function() {\n    $.observable(this.members).setProperty(\"n\" + cnt, {name: \"new\" + cnt++});\n  }, \n  removeMember: function(key) {\n    $.observable(this.members).removeProperty(key);\n  },\n  replaceMembers: function() {\n    $.observable(this).setProperty(\"members\", {m1: {name: \"Peter\"}, m2: {name: \"Octavia\"}, m3: {name: \"Xavier\"}});\n  }\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team);\nData:\nvar team = {\n  members: {\n    m1: {name: \"Robert\"},\n    m2: {name: \"Sarah\"}\n  },\n...\n\nTemplate:\n...\n{^{props members}}\n  <li>{{>prop.name}} ...</li>\n{{/props}}\n...\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The above samples show adding and removing properties on the members object, but does not show observably modifying the value of an existing property. Here is an updated version using a dictionary of strings – where you can also modify property values observably.\nTo render the value of the ‘name’ string property, we use the data-linked form: {^{>prop}} – which updates automatically when the value of the property changes observably.\n"
      },
      {
        "_type": "sample",
        "title": "{^{props ...}} &ndash; with observably changing property values (strings)",
        "text": "{^{props ...}} – with observably changing property values (strings)\n\n\n\n  <button data-link=\"{on addMember}\">Add</button>\n  <button data-link=\"{on replaceMembers}\">Replace</button>\n  <button data-link=\"{on changeMembers}\">Change</button>\n  <ol>\n    {^{props members}}\n      <li>\n        <input data-link=\"prop\"/>\n        {^{>prop}}\n        <span class=\"remove\" data-link=\"{on ~root.removeMember key}\"></span>\n      </li>\n    {{else}}\n      There are no members\n    {{/props}}\n  </ol>\n\n\nvar team = {\n  members: {m1: \"Robert\", m2: \"Sarah\"},\n  addMember: function() {\n    $.observable(this.members).setProperty(\"n\" + cnt, \"new\" + cnt++);\n  }, \n  removeMember: function(key) {\n    $.observable(this.members).removeProperty(key);\n  },\n  replaceMembers: function() {\n    $.observable(this).setProperty(\"members\", {m1: \"Peter\", m2: \"Octavia\", m3: \"Xavier\"});\n  },\n  changeMembers: function() {\n    for (var property in this.members) {\n      if (property !== $.expando) {\n        $.observable(this.members).setProperty(property, this.members[property] + cnt++);\n      }\n    }\n  }\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team);\nData:\nvar team = {\n  members: {m1: \"Robert\", m2: \"Sarah\"},\n...\n\nTemplate:\n...\n{^{props members}}\n  <li>\n    <input data-link=\"prop\"/>\n    {^{>prop}} ...\n  </li>\n{{else}}\n  There are no members\n{{/props}}\n...\n\nHere, the Change button modifies each of the properties of members:\nchangeMembers: function() {\n  for (var property in this.members) {\n    ...\n    $.observable(this.members).setProperty(property, ...);\n    ...\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "And here is the same thing, but where members is a dictionary of ‘person’ objects – so we use {^{>prop^name}} to render the name. This will update when the name property of the ‘person’ object changes (e.g. when typing into the textbox: <input data-link=\"prop^name\" />) or when a property of members is changed observably to a different ‘person’ object.\n"
      },
      {
        "_type": "sample",
        "title": "{^{props ...}} &ndash; with observably changing property values (objects)",
        "text": "{^{props ...}} – with observably changing property values (objects)\n\n\n\n  <button data-link=\"{on addMember}\">Add</button>\n  <button data-link=\"{on replaceMembers}\">Replace</button>\n  <button data-link=\"{on changeMembers}\">Change</button>\n  <ol>\n    {^{props members}}\n      <li>\n        <input data-link=\"prop^name\"/>\n        {^{>prop^name}}\n        <span class=\"remove\" data-link=\"{on ~root.removeMember key}\"></span>\n      </li>\n    {{/props}}\n  </ol>\n\n\nvar team = {\n  members: {\n    m1: {name: \"Robert\"},\n    m2: {name: \"Sarah\"}\n  },\n  addMember: function() {\n    $.observable(this.members).setProperty(\"n\" + cnt, {name: \"new\" + cnt++});\n  }, \n  removeMember: function(key) {\n    $.observable(this.members).removeProperty(key);\n  },\n  replaceMembers: function() {\n    $.observable(this).setProperty(\"members\", {m1: {name: \"Peter\"}, m2: {name: \"Octavia\"}, m3: {name: \"Xavier\"}});\n  },\n  changeMembers: function() {\n    for (var property in this.members) {\n      if (property !== $.expando) {\n        $.observable(this.members).setProperty(property, {name: this.members[property].name + cnt++});\n      }\n    }\n  }\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team);\nData:\nvar team = {\n  members: {\n    m1: {name: \"Robert\"},\n    m2: {name: \"Sarah\"}\n  },\n...\n\nTemplate:\n...\n{^{props members}}\n  <li>\n    <input data-link=\"prop^name\"/>\n    {^{>prop^name}} ...\n  </li>\n{{/props}}\n...\n\nHere, the Change button modifies each of the properties of members – assigning a different person object:\nchangeMembers: function() {\n  for (var property in this.members) {\n    ...\n    $.observable(this.members).setProperty(property, {name: ...});\n    ...\n\n\n"
      },
      {
        "_type": "para",
        "title": "Loading and editing a dictionary/hash collection",
        "text": "Loading and editing a dictionary/hash collection\nThe following sample is a copy of the last of the Editable data set of samples, and illustrates providing completed editability of a data collection using a dictionary/hash :\n"
      },
      {
        "_type": "sample",
        "url": "samples/editable-data/hash-dictionary/sample",
        "text": "Hash/dictionary of movies:\nmovies = {\n  movJb: {\n    title:\"Meet Joe Black\",\n    ...\n  },\n  movEws: {\n    title:\"Eyes Wide Shut\",\n    ...\n  },\n\nIterate:\n<table>\n  ...\n  <tbody class=\"movies\">\n    {^{props}}\n      <tr...>\n        ...\n      </tr>\n    {{/props}}\n  </tbody>\n</table>\n\nDynamic display of details based on key selection (rather than index selection):\n<div class=\"detail\">\n  {^{for #data[~selectedKey]}}\n    ...\n  {{/for}}\n</div>\n\nEditing and selection actions for hash-based collection:\nhelpers: {\n  ...\n  select: function select(key, ev, eventArgs) {\n    eventArgs.view.ctxPrm(\"selectedKey\", key);\n  },\n  addMovie: function(ev, eventArgs) {\n    var newKey = \"mov\" + counter;\n    $.observable(movies).setProperty(\n      newKey,\n      {\n        title: \"NewTitle\" + counter,\n        ...\n      }\n    );\n    eventArgs.view.ctxPrm(\"selectedKey\", newKey);\n  },\n  removeMovie: function(key, ev, eventArgs) {\n    eventArgs.view.ctxPrm(\"selectedKey\", null);\n    $.observable(movies).removeProperty(key);\n    return false;\n  },\n  ...\n\n\n\"use strict\";\nvar counter = 0,\n  movies = { // Hash/dictionary of movies\n    movJb: {\n      title:\"Meet Joe Black\",\n      languages: [\n        {name: \"English\"},\n        {name: \"French\"}\n      ]\n    },\n    movEws: {\n      title:\"Eyes Wide Shut\",\n      languages: [\n        {name: \"German\"},\n        {name: \"French\"},\n        {name: \"Spanish\"}\n      ]\n    }\n  },\n\n  helpers = {\n//  selectedKey: \"movEws\", // Optionally set initial selection\n    bgColor: function() {\n      return this.ctxPrm(\"selectedKey\")===this.data.key\n        ? \"yellow\"\n        : (this.index%2 ? \"#fdfdfe\" : \"#efeff2\");\n    },\n    select: function select(key, ev, eventArgs) {\n      eventArgs.view.ctxPrm(\"selectedKey\", key);\n    },\n    addMovie: function(ev, eventArgs) {\n      var newKey = \"mov\" + counter;\n      $.observable(movies).setProperty(\n        newKey,\n        {\n          title: \"NewTitle\" + counter,\n          languages: [\n            {name: \"NewLanguage\" + counter++}\n          ]\n        }\n      );\n      eventArgs.view.ctxPrm(\"selectedKey\", newKey);\n    },\n    removeMovie: function(key, ev, eventArgs) {\n      eventArgs.view.ctxPrm(\"selectedKey\", null);\n      $.observable(movies).removeProperty(key);\n      return false;\n    },\n    addLanguage: function(languages) {\n      $.observable(languages).insert({\n        name: \"NewLanguage\" + counter++\n      });\n    },\n    removeLanguage: function(languages, index) {\n      $.observable(languages).remove(index);\n      return false;\n    },\n    deleteLast: function() {\n      var propsArray = $.view(\"#movieList\").get(true, \"array\").data;\n      if (propsArray.length) {\n        var lastMovie = propsArray[propsArray.length - 1].prop;\n        $.observable(lastMovie.languages).remove();\n      }\n    },\n    showData: function() {\n      $(\"#console\").append(\"<hr/>\" + $(\"#showData\").render(movies));\n    }\n  },\n\n  movieTmpl = $.templates(\"#movieTemplate\");\n\n// Set dependency on bgColor, to update on collection (deletion) and selection changes\nhelpers.bgColor.depends = [\"#index\", \"~selectedKey\"];\n\n// Render movies\nmovieTmpl.link(\"#movieList\", movies, helpers);\n\n// Data-link top-level buttons\n$.link(true, \".buttons\", helpers);\n\n"
      },
      {
        "_type": "para",
        "title": "More advanced use of {{props}} &ndash; {{jsonview/}}",
        "text": "More advanced use of {{props}} – {{jsonview/}}\nAn example of more advanced use of {{props}} is the sample custom tag control {{jsonview}}, available from downloads/tag-controls. That tag control uses {^{props}}, and recursively calls itself:\n{^{props}}\n  <li>\n    ...\n    {^{jsonview prop/}}...\n  </li>\n{{/props}}\n\nThe {{jsonview}} tag control can be included in any JsViews page, to show the contextual data at that place in the page, or to show given data returned by an expression {^{jsonview someExpression /}}. Changes to the data will then update dynamically.\nIn the next sample we update the previous one, to include:\n\na data-linked {^{jsonview/}} control to show current data\nallow the user to modify the key values in the members object, using <input data-link=\"key\" />\n{^{props}}...{{else}}...{{/props}} to show a message if the members object is ‘empty’\n\nThis sample is also available at samples/tag-controls/jsonview.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "url": "samples/tag-controls/jsonview/sample",
        "text": "Template:\n...\n<ul>\n  {^{props members}}\n    <li>\n      ...\n      <input data-link=\"key\"/>\n      {^{>key}}\n      <input data-link=\"prop^name\"/>\n      {^{>prop^name}}\n      ...\n    </li>\n  {{else}}\n    ...\n  {{/props}}\n</ul>\n...\n{^{jsonview/}}\n...\n\n\n\"use strict\";\nvar team = {\n  members: {\n    m1: {name: \"Robert\"},\n    m2: {name: \"Sarah\"}\n  },\n  addMember: function() {\n    $.observable(this.members).setProperty(\"n\" + cnt, {name: \"new\" + cnt++});\n  }, \n  removeMember: function(key) {\n    $.observable(this.members).removeProperty(key);\n  },\n  replaceMembers: function() {\n    $.observable(this).setProperty(\"members\", {m1: {name: \"Peter\"}, m2: {name: \"Octavia\"}, m3: {name: \"Xavier\"}});\n  },\n  changeMembers: function() {\n    for (var property in this.members) {\n      if (property !== $.expando) {\n        $.observable(this.members).setProperty(property, {name: this.members[property].name + cnt++});\n      }\n    }\n  }\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team);\n\n/*! Sample JsViews tag control: {{jsonview}} control v0.9.84 (Beta)\nsee: http://www.jsviews.com/#download/sample-tagcontrols */\n/*\n * Copyright 2017, Boris Moore\n * Released under the MIT License.\n*/\n\n(function($) {\n  \"use strict\";\n\n  function isObject(val) {\n    return val && typeof val === \"object\";\n  }\n\n  function notEmpty(val) {\n    return $.views.tags.props.dataMap.getTgt(val).length;\n  }\n\n  notEmpty.depends = \"*\";\n\n  $.views.tags(\"jsonview\", {\n    template: {\n      markup:\n        '{{if ~isArray(#data)}}'\n        + '<span class=\"jsonview\"><span class=\"brace\">[</span>{^{if length}}'\n          + '<ul class=\"jsonview\">'\n            + '{^{for}}'\n              + '<li>{^{jsonview/}}{^{if #index < #parent.data.length-1}},{{/if}}</li>'\n            + '{{/for}}'\n          + '</ul>'\n        + '{{/if}}<span class=\"brace\">]</span></span>'\n      + '{{else ~isObject(#data)}}'\n        + '<span class=\"jsonview\"><span class=\"brace\">{</span>{^{if ~notEmpty(#data)}}'\n          + '<ul class=\"jsonview\">'\n            + '{^{props}}'\n              + '<li>'\n                + '<label>{^{>key}}: </label>'\n                + '{^{jsonview prop/}}{^{if #index < #parent.data.length-1}},{{/if}}'\n              + '</li>'\n            + '{{/props}}'\n          + '</ul>'\n        + '{{/if}}<span class=\"brace\">}</span></span>'\n      + '{{else #data+\"\"===#data}}'\n        + '\"{^{>#data}}\"'\n      + '{{else}}'\n        + '{^{>#data+\"\"}}'\n      + '{{/if}}',\n      helpers: {\n        isObject: isObject,\n        notEmpty: notEmpty,\n        isArray: $.isArray\n      }\n    }\n  });\n})(this.jQuery);\n\n"
      },
      {
        "_type": "para",
        "title": "{^{props ...}} with dynamically changing template (advanced)",
        "text": "{^{props ...}} with dynamically changing template (advanced)\nIf {{props}} uses tmpl=expression to obtain a template from data or from a helper, then the data-linked {^{props}} can be used to drive updates when the template changes dynamically.\nHere it is in a sample (similar to the corresponding sample using the {^{for}} tag).\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <button data-link=\"{on addMember}\">Add</button>\n  <button data-link=\"{on replaceMembers}\">Replace</button><br/><br/>\n  <label><input type=\"checkbox\" data-link=\"isEditable\"/> Editable</label>\n  <ol>\n    {^{props members ^tmpl=isEditable?\"#memberEditTmpl\":\"#memberTmpl\" /}}\n  </ol>\n\n\n\n  <li>\n    {{>prop.name}} \n    <span class=\"remove\" data-link=\"{on ~root.removeMember key}\"></span>\n  </li>\n\n\n\n  <li>\n    <input data-link=\"prop.name\"/>\n    <span class=\"remove\" data-link=\"{on ~root.removeMember #index}\"></span>\n  </li>\n\nvar team = {\n  members: {\n    m1: {name: \"Robert\"},\n    m2: {name: \"Sarah\"}\n  },\n  isEditable: false,\n  addMember: function() {\n    $.observable(this.members).setProperty(\"n\" + cnt, {name: \"new\" + cnt++})\n  },\n  removeMember: function(key) {\n    $.observable(this.members).removeProperty(key);\n  },\n  replaceMembers: function() {\n    $.observable(this).setProperty(\"members\", {m1: {name: \"Peter\"}, m2: {name: \"Octavia\"}, m3: {name: \"Xavier\"}})\n  }\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team);\n{^{props members ^tmpl=editable?\"#memberEditTmpl\":\"#memberTmpl\" /}}\n\nHere the data-linked {^{props}} uses two different templates, driven by the isEditable property:\nvar team = {\n  members: [...],\n  isEditable: false,\n  ...\n\n– so thanks to the initial ^ in ^tmpl=... the {^{props}} tag updates if isEditable changes – and uses the appropriate template. (See binding to tag properties.)\n\n"
      },
      {
        "_type": "links",
        "title": "See:",
        "text": "See:\n"
      }
    ]
  },
  "jsviftag": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In JsViews the {^{if someExpression}} tag is a data-bound version of the JsRender {{if ...}} tag, which renders a block conditionally based on the value of the expression.\nWhen using data-linked templates the data-bound version will update automatically when the value of the expression changes observably.\nThe following sample is similar to one found at Samples: Data-linking {^{for}} and {^{if}}:\n"
      },
      {
        "_type": "sample",
        "title": "{^{if ...}}",
        "text": "{^{if ...}}\n\n\n\n  <label><input type=\"checkbox\" data-link=\"reverse\"/> Reverse name</label><br/><br/>\n\n  {^{if reverse}}\n    <b>{{:last}}</b>, {{:first}}\n  {{else}}\n    {{:first}} <b>{{:last}}</b>\n  {{/if}}\n\n\nvar person = {\n  reverse: true,\n  first:\"Jeff\",\n  last: \"Adams\"\n};\n\nvar tmpl = $.templates(\"#personTemplate\");\n\ntmpl.link(\"#person\", person);\n\n\n\nReverse name \n\n{^{if reverse}}\n  {{:last}}, {{:first}}\n{{else}}\n  {{:first}} {{:last}}\n{{/if}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "{^{if ...}}...{{else}}...{{/if}} with dynamically changing templates (advanced)",
        "text": "{^{if ...}}...{{else}}...{{/if}} with dynamically changing templates (advanced)\nIf the {{if}} or an associated {{else}} tag use template references, rather than inline markup, with tmpl=expression (obtaining a template from data or from a helper), then the data-linked {^{if}} can be used to drive updates when any of the templates change dynamically:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <label><input type=\"checkbox\" data-link=\"isEditable\"/> Editable</label><br/>\n  <label><input type=\"checkbox\" data-link=\"reverse\"/> Reverse</label><br/><br/>\n\n  {^{if reverse ^tmpl=isEditable?'#editableReverseTmpl':'#noeditReverseTmpl'}}\n  {{else ^tmpl=isEditable?'#editableTmpl':'#noeditTmpl'}}\n  {{/if}}\n\n\n\n  <input data-link=\"last\" />, <input data-link=\"first\" />\n\n\n\n  <b>{{:last}}</b>, {{:first}}\n\n\n\n  <input data-link=\"first\" /> <input data-link=\"last\" />\n\n\n\n  {{:first}} <b>{{:last}}</b>\n\nvar person = {\n  isEditable: true,\n  reverse: true,\n  first:\"Jeff\",\n  last: \"Adams\"\n};\n\nvar tmpl = $.templates(\"#personTemplate\");\n\ntmpl.link(\"#person\", person);\n\n\n  {^{if reverse ^tmpl=isEditable?'#editableReverseTmpl':'#noeditReverseTmpl'}}\n  {{else ^tmpl=isEditable?'#editableTmpl':'#noeditTmpl'}}\n  {{/if}}\n\nHere the data-linked {^{if}} and the {{else}} each use two alternate templates, driven by the isEditable property:\nvar team = {\n  members: [...],\n  isEditable: false,\n  ...\n\n– so thanks to the initial ^ in ^tmpl=... (see binding to tag properties), the {^{if}} and {{else}} blocks each update if the isEditable changes – and use the appropriate template.\n\n"
      },
      {
        "_type": "links",
        "title": "See:",
        "text": "See:\n"
      }
    ]
  },
  "jsvelsetag": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In JsViews the {{else ...}} tag is identical to the {{else ...}} tag used in JsRender, and acts as a separator for alternate content blocks, in as association with an {{if}}, {{for}} or {{props}} tag, or with any custom tag.\nIf the associated tag is data-linked, then the rendering of the {{else}} block can also be dynamically driven by observable data changes. See for example the first sample in the {^{if}}, {^{for}} and {^{props}} topics\nIn each case rendering will switch dynamically to the {{else}} block when the data changes appropriately – for example, in the case of {^{for members}}...{{else})...{{/for}}, when the members array is empty.\nThe following example shows an {^{if}} tag with multiple {{else}} blocks:\n"
      },
      {
        "_type": "sample",
        "title": "{^{if ...}} ... {{else ...}} ... {{else}} ... {{/if}}",
        "text": "{^{if ...}} ... {{else ...}} ... {{else}} ... {{/if}}\n\n\n\n  <select data-link=\"type\" size=\"3\">\n    <option value=\"\">Choose type</option>\n    <option>book</option>\n    <option>car</option>\n  </select><br/><br/>\n\n  <input data-link=\"type\" /><br/><br/>\n \n  {^{if type==='book'}}\n    The book price is {{>price}} \n  {{else type==='car'}}\n    The car costs {{>price}}\n  {{else}}\n    Nothing chosen\n  {{/if}}\n\n\nvar object = {\n  type: \"car\",\n  price:\"$25000\"\n};\n\nvar tmpl = $.templates(\"#objectTemplate\");\n\ntmpl.link(\"#object\", object);\n\n\nTemplate:\n...\n{^{if type==='book'}}\n  The book price is {{>price}} \n{{else type==='car'}}\n  The car costs {{>price}}\n{{else}}\n  The price is {{>price}}\n{{/if}}\n...\n\nNote that {{else expression}} behaves as else if, but it is not necessary to write {^{else ...}} – since the dynamic data-linking is determined by the associated {^{if ...}} tag.\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Similarly with {{for ...}} with multiple {{else}} blocks, the data-linked {^{for ...}} means that there is dynamic binding to expressions not only on the {^{for}} tag itself, but also on the {{else}} tags:\n"
      },
      {
        "_type": "sample",
        "title": "{^{for ...}} ... {{else ...}} ... {{else}} ... {{/for}}",
        "text": "{^{for ...}} ... {{else ...}} ... {{else}} ... {{/for}}\nli {list-style: none}\n\n\n\n  <button data-link=\"{on addMember}\">Add member</button>\n  <button data-link=\"{on addReserve}\">Add reserve</button>\n  <ul>\n    {^{for members}}\n      <li>\n        Member {^{:#index + 1}}: {{>name}}\n        <span class=\"remove\" data-link=\"{on ~root.removeMember #index}\"></span>\n      </li>\n    {{else reserves}}\n      <li>\n        Reserve {^{:#index + 1}}: {{>name}}\n        <span class=\"remove\" data-link=\"{on ~root.removeReserve #index}\"></span>\n      </li>\n    {{else}}\n      <li>No members or reserves</li>\n    {{/for}}\n  </ul>\n\n\nvar team = {\n  members: [\n    {name: \"Robert\"},\n    {name: \"Sarah\"}\n  ],\n  reserves: [\n    {name: \"Xavier\"}\n  ],\n  addMember: function() {\n    $.observable(this.members).insert({name: \"new\" + cnt++});\n  },\n  addReserve: function() {\n    $.observable(this.reserves).insert({name: \"new\" + cnt++});\n  },\n  removeMember: function(index) {\n    $.observable(this.members).remove(index);\n  },\n  removeReserve: function(index) {\n    $.observable(this.reserves).remove(index);\n  }\n},\ncnt = 1;\n\n$.templates(\"#teamTemplate\").link(\"#team\", team);\nTemplate:\n{^{for members}}\n  ...Member ... {{>name}}...\n{{else reserves}}\n  ...Reserve ... {{>name}}...\n{{else}}\n  ...No members or reserves...\n{{/for}}\n\nHere, removing all members causes the {{else reserves}} block to be displayed. Then removing all reserves causes the final {{else}} block to be displayed.\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "For the case of {^{if}}...{{else}}...{{/if}} binding, with external template references, see the last {^{if}} sample, which uses the pattern:\n{^{if ... ^tmpl=...}}\n{{else ^tmpl=...}}\n{{/if}}\n\n"
      },
      {
        "_type": "links",
        "title": "See:",
        "text": "See:\n"
      }
    ]
  },
  "jsvontag": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The {^{on ...}} tag is used:\n\nfor attaching event handlers, as an alternative syntax to data-link=\"{on ...}\"\nfor creating buttons, to call a data method/View Model method/helper method.\n\nIt is used only as a data-bound tag in JsViews, and is not available in JsRender.\nSee the Event bindings topic for more information and examples.\n"
      }
    ]
  },
  "jsvcustomtags": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In JsViews the {^{: ...}} tag is a data-bound version of the JsRender {{: ...}} tag.\nWhen using data-linked templates the data-bound version will update automatically when the data in the expression changes observably.\n"
      },
      {
        "_type": "sample",
        "title": "{^{: ...}}",
        "text": "{^{: ...}}\n\n\n\n\n<button data-link=\"{on changeManager}\">Change manager</button><br/><br/>\n\n<em>Name:</em> <input data-link=\"manager^name\" /><br/>\n<em>Nickname:</em> <input data-link=\"manager^nickname\" /><br/><br/>\n\n<em>{^&lcub;:manager^nickname || manager^name}&rcub;:</em> <b>{^{:manager^nickname || manager^name}}</b>\n\n\nvar team = {\n  person1: {\n    name: \"Peter\",\n    nickname: \"Pete\"\n  },\n  person2: {\n    name: \"Octavia\"\n  },\n  changeManager: function() {\n    $.observable(this).setProperty({\n      manager: this.manager === this.person1 ? this.person2 : this.person1\n    });\n  }\n};\n\nteam.manager = team.person1;\n\nvar tmpl = $.templates(\"#managerTmpl\");\n\ntmpl.link(\"#result\", team);\n{^{:manager^nickname || manager^name}}\n\nData-linked tag updates when expression manager^nickname || manager^name changes– i.e. when manager.nickname, manager.name or manager object change.\n\n"
      },
      {
        "_type": "links",
        "title": "See:",
        "text": "See:\n"
      }
    ]
  },
  "jsvradiogrouptag": {
    "sections": [
      {
        "_type": "para",
        "title": "Alternatives for data-linking radio buttons: direct linking, or {^{radiogroup}}",
        "text": "Alternatives for data-linking radio buttons: direct linking, or {^{radiogroup}}\n\nOne way to provide two-way data-binding on a group of radio buttons is by directly data-linking each of the <input> elements, as described in the Data-linked radio buttons topic\nAn alternative and often more convenient approach is to wrap the <input>s with a {^{radiogroup}} tag, as shown in this section\n\n"
      },
      {
        "_type": "para",
        "title": "The {^{radiogroup}} tag",
        "text": "The {^{radiogroup}} tag\nThe {^{radiogroup ...}} tag is used to provide two-way data-linking to a group of radio buttons.\nIt is used only as a data-bound tag in JsViews, and is not available in JsRender.\nThe set of radio buttons (<input type=\"radio\">) are wrapped by the tag (or contained in the external template referenced by tmpl=...) – and are data-linked to the data property specified by the path or expression: {^{radiogroup pathOrExpr}}.\n"
      },
      {
        "_type": "tag",
        "title": "{^{radiogroup pathOrExpr}}",
        "text": "{^{radiogroup pathOrExpr}}\nTwo-way binding between the current selection of a radio button group and a data property\n\n{{radiogroup selectedCar}}\n  <label>\n    <input type=\"radio\" value=\"vlv\"/> \n    Volvo\n  </label>\n  ...\n{{/radiogroup}}\n\n"
      },
      {
        "_type": "sample",
        "title": "{^{radiogroup}}",
        "text": "{^{radiogroup}}\n\n\n\n  {^{radiogroup selectedCar}}\n    <label><input type=\"radio\" value=\"\"/>\n      None</label><br/>\n    <label><input type=\"radio\" value=\"vlv\"/>\n      Volvo</label><br/>\n    <label><input type=\"radio\" value=\"frd\"/>\n      Ford</label><br/>\n  {{/radiogroup}}\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {selectedCar: \"frd\"};\n\ntmpl.link(\"#result\", data);\nData:\nvar data = {\n  selectedCar: \"frd\",\n  ...\n};\n\nHTML:\n{^{radiogroup selectedCar}}\n  <label><input type=\"radio\" value=\"\"/> None</label>\n  <label><input type=\"radio\" value=\"vlv\"/> Volvo</label>\n  <label><input type=\"radio\" value=\"frd\"/> Ford</label>\n{{/radiogroup}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "The name property of the radio &lt;input&gt; elements",
        "text": "The name property of the radio <input> elements\nIf the radio button group is within an HTML <form> which will be submitted, then the associated name property of the radio button group may be specified on the {^{radiogroup}}:\n{^{radiogroup selectedCar name=\"cars\"}}\n  <label><input type=\"radio\" value=\"\"/> None</label>\n  ...\n{{/radiogroup}}\n\nAlternatively it can be specified on each <input>\n{^{radiogroup selectedCar}}\n  <label><input type=\"radio\" value=\"\" name=\"cars\"/> None</label>\n  <label><input type=\"radio\" value=\"vlv\" name=\"cars\"/> Volvo</label>\n  ...\n{{/radiogroup}}\n\nIf it is not specified, then each {^{radiogroup}} will provide an auto-generated unique name, which will be set on the radio button <input> elements.\n"
      },
      {
        "_type": "para",
        "title": "Using a data-linked element &ndash; with data-link=\"{radiogroup ...}\"",
        "text": "Using a data-linked element – with data-link=\"{radiogroup ...}\"\nAn alternative to wrapping radio button <input> tags in a {^{radiogroup}} tag is to wrap them in a data-linked HTML element tag such as a <div>, using data-link=\"{radiogroup ...}\".\n<div data-link=\"{radiogroup selectedCar}\">\n  <label><input type=\"radio\" value=\"\"/> None</label>\n  ...\n</div>\n\nThis approach can be used within templates, but is particularly useful for top-level data-linking, as in the following sample:\n"
      },
      {
        "_type": "sample",
        "title": "Top-level {radiogroup} binding",
        "text": "Top-level {radiogroup} binding\n\n  \n    \n      None\n    \n      Volvo\n   \n      Ford\n  \n\n  \n\nvar data = {selectedCar: \"frd\"};\n\n$.link(true, \"#top-level-linked\", data);\n\nData:\nvar data = {\n  selectedCar: \"frd\",\n  ...\n};\n\nHTML:\n<div data-link=\"{radiogroup selectedCar}\">\n  <label><input type=\"radio\" value=\"\"/> None</label>\n  <label><input type=\"radio\" value=\"vlv\"/> Volvo</label>\n  ...\n</div>\n\n\n"
      },
      {
        "_type": "para",
        "title": "{^{radiogroup}} with {{for}}",
        "text": "{^{radiogroup}} with {{for}}\nA common scenario is when the options in a radio button group come from a data array. The <input type=\"radio\"> elements wrapped by a {^{radiogroup}} can be generated by a {{for}} tag, as in the following example:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  {^{radiogroup selectedCar}}\n    <label><input type=\"radio\" value=\"\"/> None</label><br/>\n    {{for cars}}\n      <label><input type=\"radio\" value=\"{{:id}}\"/> {{:name}}</label><br/>\n    {{/for}}\n  {{/radiogroup}}\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  selectedCar: \"frd\",\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"}\n  ]\n};\n\ntmpl.link(\"#result\", data);\nData includes cars array:\nvar data = {\n  selectedCar: \"frd\",\n  cars: [{id: \"vlv\", name: \"Volvo\"}, ...]\n};\n\n{{radiogroup}} a data-driven array of radio buttons, preceded by an additional ‘unselected’ radio button:\n{^{radiogroup selectedCar}}\n  <label><input type=\"radio\" value=\"\"/> None</label><br/>\n  {{for cars}}\n    <label><input type=\"radio\" value=\"{{:id}}\"/> {{:name}}</label><br/>\n  {{/for}}\n{{/radiogroup}}\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Note: The data-driven set of radio buttons can change dynamically, driven by {^{for}}, as shown in this sample.\n"
      },
      {
        "_type": "para",
        "title": "Radio buttons in an external template, using {radiogroup tmpl=...}",
        "text": "Radio buttons in an external template, using {radiogroup tmpl=...}\nThe set of radio buttons wrapped by a {^{radiogroup}} can be in an external template, referenced using {^{radiogroup tmpl=...}} or data-link=\"{radiogroup tmpl=...}\", as in the following example:\n"
      },
      {
        "_type": "sample",
        "title": "tmpl",
        "text": "tmpl\n\n\n\n  <label><input type=\"radio\" value=\"\"/> None</label><br/>\n  {{for cars}}\n    <label><input type=\"radio\" value=\"{{:id}}\"/> {{:name}}</label><br/>\n  {{/for}}\n\n\n\n  {^{radiogroup selectedCar tmpl=\"#inner\"/}}<br/>\n\n  <div data-link=\"{radiogroup selectedCar tmpl='#inner'}\"></div>\n\n  <span class=\"spanbox\" data-link=\"selectedCar||'none'\"></span>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  selectedCar: \"frd\",\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"}\n  ]\n};\n\ntmpl.link(\"#result\", data);\nTemplate, containing radio buttons:\n<script id=\"inner\" type=\"text/x-jsrender\">\n  <label><input type=\"radio\" value=\"\"/> None</label><br/>\n  ...\n</script>\n\nReferencing “#inner” template from data-linked tag\n{^{radiogroup selectedCar tmpl=\"#inner\"/}}<br/>\n\nReferencing “#inner” template from data-linked element\n<div data-link=\"{radiogroup selectedCar tmpl='#inner'}\"></div>\n\n\n"
      },
      {
        "_type": "para",
        "title": "Data context within block is the same as the outer context",
        "text": "Data context within block is the same as the outer context\nNote that using either a {^{radiogroup ...}} tag or a <div data-link=\"radiogroup ...}\"> to wrap a content block leaves the data-context unchanged. – The current data item within the block is the same as the outer data context (including when referenced as an external template, as in the samples above).\n"
      },
      {
        "_type": "para",
        "title": "Data-linking a {^{radiogroup}} using converters",
        "text": "Data-linking a {^{radiogroup}} using converters\nJust like any other tag, {^{radiogroup}} can use convert and convertBack converters, using the syntax:\n{^{radiogroup convert=... convertBack=.../}}\n\nas shown in the following sample:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n\n\n  <label>\n    <input name=\"cars\" type=\"radio\" value=\"\" data-link=\"{toId:selIndex:fromId}\"/>\n    None\n  </label><br/>\n  {^{radiogroup selIndex convert=\"toId\" convertBack=\"fromId\"}}\n    {^{for cars}}\n      <label><input type=\"radio\" value=\"{{:id}}\"/> {^{:name}}</label><br/>\n    {{/for}}\n  {{/radiogroup}}\n\n  <span class=\"spanbox\" data-link=\"selIndex\"></span> <em>Selected index</em><br/>\n  <span class=\"spanbox\"\n  data-link=\"selIndex === -1 ? 'None' : cars[selIndex].name\"></span>\n  <em>Selected car name</em>\n\nvar tmpl = $.templates(\"#tmpl\");\n\nvar data = {\n  selIndex: 1,\n  cars: [\n    {id: \"vlv\", name: \"Volvo\"},\n    {id: \"frd\", name: \"Ford\"},\n    {id: \"hnd\", name: \"Honda\"}\n  ]\n};\n\n$.views.converters({\n  fromId: function(val) { // convert from id to index\n    var index = -1;\n    this.tagCtx.view.data.cars.forEach(function(car, ind) {\n      if (val === car.id) {\n        index = ind;\n      }\n    });\n    return index;\n  },\n  toId: function(val) {  // convert back from index to id\n    return val === -1 ? \"\" : this.tagCtx.view.data.cars[val].id;\n}});\n\ntmpl.link(\"#result\", data);\nDefine converters:\n$.views.converters({\n  fromId: function(val) { // convert from id to index\n    var index = -1;\n    this.tagCtx.view.data.cars.forEach(function(car, ind) {\n      if (val === car.id) {\n        index = ind;\n      }\n    });\n    return index;\n  },\n  toId: function(val) {  // convert back from index to id\n    return val === -1 ? \"\" : this.tagCtx.view.data.cars[val].id;\n}});\n\nInitialize the data\nvar data = {\n  selIndex: 1,\n  cars: [...]\n}\n\nData-link to selIndex, using the converters:\n{^{radiogroup selIndex convert=\"toId\" convertBack=\"fromId\"}}\n\nIf we had used the direct linking to <input>s, we would have used:\n<input name=\"cars\" type=\"radio\" \n  value=\"{{:id}}\" data-link=\"{toId:~root.selIndex:fromId} value^{:id}\"\n/>\n\n\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linking radio buttons to integer variables",
        "text": "Data-linking radio buttons to integer variables\nSelection of data-linked radio buttons is determined by comparing the current value of the date variable to the value of the <input type=\"radio\" value=\"...\" /> – which is necessarily of type string.\nIn order to data-link to a data variable of type number (integer), use intToStr and strToInt converters, as shown in the following samples:\n"
      },
      {
        "_type": "links",
        "title": "",
        "text": ""
      },
      {
        "_type": "para",
        "title": "See also:",
        "text": "See also:\n\nFor additional details and samples see Data-linked radio buttons\nFor examples of {^{radiogroup}} tags wrapping jQuery UI {{radio}} tag controls, see the Toolbar samples\n\n"
      }
    ]
  },
  "other": {
    "sections": []
  },
  "eventArgs": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "paragraph\n"
      }
    ]
  },
  "jsvglobals": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsRender\n\nrender()\ntemplates()\nviews\n\nJsViews\n\nlink()\nobserve()\nobservable()\nunlink()\nunobserved()\nview()\n\n"
      }
    ]
  },
  "jsvtagcontrols": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Custom tag controls used in JsViews apps are regular JsRender custom tags, defined/registered in the usual way (see Using custom tags).\nHowever, in the context of JsViews data-linking they become stateful ‘controls’ (or ‘widgets’) – self-contained encapsulated components, with a life-cycle of instantiation, initialization, initial rendering, data-binding, updating (triggered by observable data changes), disposal…\n"
      },
      {
        "_type": "para",
        "title": "Custom tags with or without data-linking",
        "text": "Custom tags with or without data-linking\nA custom tag can be used simply for rendering, without data-binding, as in\n{{mytag ...}}\n\nor it can be used (with JsViews) as a data-linked tag (so it becomes a dynamic data-bound tag control), as in:\n{^{mytag ...}}\n\nIt can also be used as a tag binding on a data-linked element:\n<div data-link=\"{mytag ...}\">...</div>\n\n"
      },
      {
        "_type": "sample",
        "text": "\n  <input data-link=\"name\" /><br/>\n\n  No data binding: {{mytag name/}}<br/>\n  Data-linked tag: {^{mytag name/}}<br/>\n  Data-linked element with tag binding: <span data-link=\"{mytag name}\"></span><br/>\n\n\n\nvar myTmpl = $.templates(\"#myTmpl\"),\n  data = { name: \"Jo\" };\n\n$.views.tags(\"mytag\", \"{{:}}\");\n\nmyTmpl.link(\"#page\", data);\nSimple tag:\n$.views.tags(\"mytag\", \"<b>{{:}}</b>\");\n\nUse with or without data-linking:\n<input data-link=\"name\" />\nNo data binding: {{mytag name/}}\nData-linked tag: {^{mytag name/}}\nData-linked element with tag binding: <span data-link=\"{mytag name}\"></span>\n\n\n"
      },
      {
        "_type": "para",
        "title": "Specifying tag options for a custom tag",
        "text": "Specifying tag options for a custom tag\nThe following tag declaration registers a custom tag:\n$.views.tags(\"mytag\", tagOptions);\n\nwhere the tagOptions object (hash) specifies the tag options, and determines how the tag will function.\n(See: Registering a custom tag.)\n"
      },
      {
        "_type": "para",
        "title": "<b>The life-cycle of a JsViews tag control</b>",
        "text": "The life-cycle of a JsViews tag control\nThe tag options can include event handlers for the following life-cycle events:\n\ninit()\nrender()\nonBeforeBind() tag.mainElem, tag.linkedElem and tag.displayElem can be set in tag.onBeforeBind\nonBind()\nonUnbind()\nonAfterLink()\nonUpdate()\nonDispose()\n\n"
      },
      {
        "_type": "para",
        "title": "Custom tag life-cycle without data-linking: init() and render() events only",
        "text": "Custom tag life-cycle without data-linking: init() and render() events only\nWhen a custom tag is rendered without data-linking:\n{{myTag .../}}\n\nthen it will be instantiated during rendering, and immediately disposed, and only the init() and render() life-cycle events will be triggered.\n"
      },
      {
        "_type": "para",
        "title": "Custom tag life-cycle with data-linking (tag control): full life-cycle",
        "text": "Custom tag life-cycle with data-linking (tag control): full life-cycle\nWhen a custom tag is rendered with data-linking:\n{^{myTag .../}}\n\nthen it will behave as a tag control. It will be instantiated during rendering, and the instance will remain as long as the parent HTML element (and JsViews View) are not removed or disposed.\nInitialization:\nDuring the initial rendering and data-linking, life-cycle events will be triggered in the following sequence:\n\ninit() – initialization\nrender() – rendering\nonBeforeBind() – prior to initial data-linking\nonBind() – during initial data-linking\nonAfterLink() – after initial data-linking\n\nData-linking update (observable change):\nIf the tag control has arguments ({^{myTag arg1 .../}})then whenever any of the arguments changes observably, data-linking will be refreshed, with the following sequence of events:\n\nonBeforeChange – cancellable event, before change\nonUpdate – update data-linking\nonAfterLink – after updating data-linking\nonAfterChange – after completing change\n\n– and similarly if the tag has data-bound properties ({^{myTag ^prop1=... .../}}), or declared dependencies which change…\nDisposal:\nIf the containing HTML/View is removed, then the tag control instance will be disposed, with the following sequence of events:\n\nonUnbind() – remove data-link bindings\nonDispose() – dispose of instance\n\nRefresh:\nIf the tag control instance is refreshed (by calling the tag.refresh() method, for example) then the instance will be replaced by a newly rendered and data-linked instance – with the following sequence of events:\n\nonUnbind – remove data-link bindings\nrender – refresh rendering\nonBind – establish new data-link bindings\nonAfterLink – after data-linking refreshed instance\n\n"
      }
    ]
  },
  "jsvtagcontrolsPrevNew": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Custom tag controls used in JsViews apps are regular JsRender custom tags, defined/registered in the usual way (see Using custom tags).\nHowever, in the context of JsViews data-linking they become stateful ‘controls’ (or ‘widgets’) – self-contained encapsulated components, with a life-cycle of instantiation, initialization, initial rendering, data-binding, updating (triggered by observable data changes), disposal…\n"
      },
      {
        "_type": "para",
        "title": "Custom tags with or without data-linking",
        "text": "Custom tags with or without data-linking\nA custom tag can be used simply for rendering, without data-binding, as in\n{{mytag ...}}\n\nor it can be used (with JsViews) as a data-linked tag (so it becomes a dynamic data-bound tag control), as in:\n{^{mytag ...}}\n\nIt can also be used as a tag binding on a data-linked element:\n<div data-link=\"{mytag ...}\">...</div>\n\n"
      },
      {
        "_type": "sample",
        "text": "\n  <input data-link=\"name\" /><br/>\n\n  No data binding: {{mytag name/}}<br/>\n  Data-linked tag: {^{mytag name/}}<br/>\n  Data-linked element with tag binding: <span data-link=\"{mytag name}\"></span><br/>\n\n\n\nvar myTmpl = $.templates(\"#myTmpl\"),\n  data = { name: \"Jo\" };\n\n$.views.tags(\"mytag\", \"{{:}}\");\n\nmyTmpl.link(\"#page\", data);\nSimple tag:\n$.views.tags(\"mytag\", \"<b>{{:}}</b>\");\n\nUse with or without data-linking:\n<input data-link=\"name\" />\nNo data binding: {{mytag name/}}\nData-linked tag: {^{mytag name/}}\nData-linked element with tag binding: <span data-link=\"{mytag name}\"></span>\n\n\n"
      },
      {
        "_type": "para",
        "title": "Specifying tag options for a custom tag",
        "text": "Specifying tag options for a custom tag\nThe following tag declaration registers a custom tag:\n$.views.tags(\"mytag\", tagOptions);\n\nwhere the tagOptions object (hash) specifies the tag options, and determines how the tag will function.\n(See: Registering a custom tag.)\n"
      },
      {
        "_type": "para",
        "title": "<b>The life-cycle of a JsViews tag control</b>",
        "text": "The life-cycle of a JsViews tag control\nThe tag options can include event handlers for the following life-cycle events:\n\ninit()\nrender()\nonBeforeBind() tag.mainElem, tag.linkedElem and tag.displayElem can be set in tag.onBeforeBind\nonBind()\nonUnbind()\nonAfterLink()\nonUpdate()\nonDispose()\n\n"
      },
      {
        "_type": "para",
        "title": "Custom tag life-cycle without data-linking: init() and render() events only",
        "text": "Custom tag life-cycle without data-linking: init() and render() events only\nWhen a custom tag is rendered without data-linking:\n{{myTag .../}}\n\nthen it will be instantiated during rendering, and immediately disposed, and only the init() and render() life-cycle events will be triggered.\n"
      },
      {
        "_type": "para",
        "title": "Custom tag life-cycle with data-linking (tag control): full life-cycle",
        "text": "Custom tag life-cycle with data-linking (tag control): full life-cycle\nWhen a custom tag is rendered with data-linking:\n{^{myTag .../}}\n\nthen it will behave as a tag control. It will be instantiated during rendering, and the instance will remain as long as the parent HTML element (and JsViews View) are not removed or disposed.\nInitialization:\nDuring the initial rendering and data-linking, life-cycle events will be triggered in the following sequence:\n\ninit() – initialization\nrender() – rendering\nonBeforeBind() – prior to initial data-linking\nonBind() – during initial data-linking\nonAfterLink() – after initial data-linking\n\nData-linking update (observable change):\nIf the tag control has arguments ({^{myTag arg1 .../}})then whenever any of the arguments changes observably, data-linking will be refreshed, with the following sequence of events:\n\nonBeforeChange – cancellable event, before change\nonUpdate – update data-linking\nonAfterLink – after updating data-linking\nonAfterChange – after completing change\n\n– and similarly if the tag has data-bound properties ({^{myTag ^prop1=... .../}}), or declared dependencies which change…\nDisposal:\nIf the containing HTML/View is removed, then the tag control instance will be disposed, with the following sequence of events:\n\nonUnbind() – remove data-link bindings\nonDispose() – dispose of instance\n\nRefresh:\nIf the tag control instance is refreshed (by calling the tag.refresh() method, for example) then the instance will be replaced by a newly rendered and data-linked instance – with the following sequence of events:\n\nonUnbind – remove data-link bindings\nrender – refresh rendering\nonBind – establish new data-link bindings\nonAfterLink – after data-linking refreshed instance\n\n"
      },
      {
        "_type": "para",
        "title": "Tag control design patterns",
        "text": "Tag control design patterns\nRendered template:\ntemplate\nProgrammatic rendering (render method):\nrender\nDynamic template:\ninit\nWrapping content:\nchooseBlock\nUser action events:\n{{on}}\nspinbox\nInheritance – derived controls:\nrange\nbase\nTwo-way binding:\nSimple text box\nlinkedElem\nminislider\nlinkedCtxParam\nsetValue\nDefault converters:\nconvert\nconvertBack\nMultiple two-way bindings:\nareaslider\nbindTo\nComposite controls:\npicker\n"
      },
      {
        "_type": "para",
        "title": "AND",
        "text": "AND\nConsider the following simple custom tag control, rendered by a JsRender template:\nSample with init and render, {{}}\nIn JsRender - init and render\nNow add onBind, onAfterLink onDispose and use {^{}}\nExample needing onBind and onAfterLink\nUsing dispose\n(Add convert ?)\nBinding - linkedElem simple textbox\nspinbox\nUser action events\nWrapping content\nInheritance - range\nSpecifying data-binding behavior (one-way and two-way)\nminislider\nlinkedCtxParam\nsetValue\nareaslider\nbindTo\ncomposition: picker\n\ntag.boundProps\ntag.linkedCtxParam\ntag.mainElement\ntag.linkedElement\ntag.displayElement\ntag.setSize\ntag.attr (e.g. {show ...}\ntag.dataBoundOnly\ntag.depends()\ntag.convertBack()\ntag.onBeforeUpdateVal()\ntag.onBeforeChange()\ntag.onArrayChange()\ntag.onAfterChange()\ntag.domChange()\n\n"
      },
      {
        "_type": "sample",
        "text": "\n  {{name firstName lastName prefix=title/}}\n\n\n\n$.views.tags(\"myTag\", {\n  init: function(tagCtx) {\n    this.prefix = tagCtx.props.prefix;\n  },\n  render: function(first, second) {\n    return this.prefix + \" \" + first + \" \" + second\n  }\n})\n\nvar myTmpl = $.templates(\"#myTmpl\"),\n  data = { firstName: \"Jo\", lastName: \"Blow\", title: \"Mr\" },\n  html = myTmpl.render(data);\n\n$(\"#page\").html(html);\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Tag options available in both JsRender and JsViews:\nThe following tag options are documented in the JsRender Registering custom tags topic – and concern primarily the rendering behavior of the custom tag, rather than its dynamic interactive data-bound behavior when using data-linking:\n\nThe init() method: init: tagInitFn\nThe render() method: render: tagRenderFn\nThe template property: template: tagTemplate\nThe baseTag property, specifying tag inheritance: baseTag: ...\n\nThe following more advanced options (also documented in the JsRender Registering custom tags topic) are also available with or without data-linking:\n\ncontentCtx: ...\nconvert: ...\nargDefault: ...\nbindTo: ...\nflow: ...\n\n"
      },
      {
        "_type": "para",
        "title": "OTHER",
        "text": "OTHER\nSpecifying data-binding behavior (one-way and two-way)\n\ntag.boundProps\ntag.linkedCtxParam\ntag.mainElement\ntag.linkedElement\ntag.displayElement\ntag.setSize\ntag.attr (e.g. {show ...}\ntag.dataBoundOnly\ntag.depends()\ntag.convertBack()\ntag.onBeforeUpdateVal()\ntag.onBeforeChange()\ntag.onAfterChange()\ntag.domChange()\n\nAdvanced\n\nlateRender (feature)\ndataMap\n\nProps/Methods\n\ntag.refresh()\ntag.contents()\ntag.childTags()\ntag.nodes()\ntag.setValue()\ntag.setValues()\ntag.updateValue()\ntag.updateValues()\ntag.linkCtx\ntag.parentElem\ntag._.inline\ntag.linkedElem\ntag.displayElem\ntag.linkedElems\ntag.mainElem\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Tag options available only to JsViews custom tag controls:\n"
      },
      {
        "_type": "para",
        "title": "Tag options available only to JsViews custom tag controls ",
        "text": "Tag options available only to JsViews custom tag controls \nThe\nDeclare\n\ntag.boundProps\ntag.linkedCtxParam\ntag.mainElement\ntag.linkedElement\ntag.displayElement\ntag.setSize\ntag.attr (e.g. {show ...}\ntag.dataBoundOnly\ndateMap\nlateRender (feature)\n\nEvent handlers\n\ntag.convertBack()\ntag.domChange()\ntag.depends()\ntag.onBeforeBind()\ntag.onBind()\ntag.onAfterLink()\ntag.onUpdate()\ntag.onBeforeUpdateVal()\ntag.onDispose()\ntag.onBeforeChange()\ntag.onAfterChange()\n\nProps/Methods\n\ntag.refresh()\ntag.contents()\ntag.childTags()\ntag.nodes()\ntag.setValue()\ntag.setValues()\ntag.updateValue()\ntag.updateValues()\ntag.linkCtx\ntag.parentElem\ntag._.inline\ntag.linkedElem\ntag.displayElem\ntag.linkedElems\ntag.mainElem\n\nJsRender\nDeclare\n\ntag.template\ntag.flow\ntag.baseTag\ntag.contentCtx\ntag.argDefault\ntag.bindTo\n\nEvent handlers\n\ntag.init()\ntag.render()\ntag.convert()\n\nProps/Methods\n\ntag.ctxPrm()\ntag.cvt()\ntag.cvtArgs()\ntag.bndArgs()\ntag.ctx\ntag.parent\ntag.parents\ntag.tagCtx\ntag.tagCtxs\ntag.tagName\ntag.base\ntag.baseApply\nrendering\n\n"
      }
    ]
  }
}