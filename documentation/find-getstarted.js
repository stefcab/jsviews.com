﻿var content = $.views.documentation.content;

content.find.getstarted = content.useStorage && $.parseJSON(localStorage.getItem("JsViewsDocTopics/find/getstarted")) ||
{
  "getstarted": {
    "sections": [
      {
        "_type": "links",
        "title": "",
        "text": ""
      },
      {
        "_type": "links",
        "title": "Other links:",
        "text": "Other links:\n"
      }
    ]
  },
  "jsrplaying": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "(See also: JsRender Quickstart)\n"
      },
      {
        "_type": "para",
        "title": "JsRender templates",
        "text": "JsRender templates\nJsRender templates are probably the most powerful and at the same time the most intuitive of template engines out there.\nTo get started, let’s just create a template, and run it against some data. The way you do that in code is like this:\n"
      },
      {
        "_type": "template",
        "title": "Here's a template:",
        "text": "Here's a template:\nName: {{:name}}\n"
      },
      {
        "_type": "code",
        "title": "Here's some code:",
        "text": "Here's some code:\nvar person = {\n    name: \"Adriana\"\n};\n\nvar html = myTemplate.render(person);\n"
      },
      {
        "_type": "para",
        "title": "And here it is as a working sample:",
        "text": "And here it is as a working sample:\nLet’s go straight to a sample showing how that template renders against the data. Like all the samples in this documentation, it is a working sample that you can experiment with.\n"
      },
      {
        "_type": "sample",
        "title": "A first template:",
        "text": "A first template:\nYou can hit Try it, modify the template or the data, then hit Run Code to see the effect immediately in the running sample above.\nFor example, replace the data with the following:\n[\n  {\n    \"name\": \"Adriana\"\n  },\n  {\n    \"name\": \"Robert\"\n  }\n]\n\nOr try replacing the template with the following:\n<table><tbody><tr>\n  <td>Name</td>\n  <td>{{:name}}</td>\n</tr></tbody></table>\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "OK – a few interesting things there. For example, if you tried changing the data, and provided an array instead of an object, you will have seen that the template rendered once for each item in the array.\nBut before we look at more details on the template rendering, let’s look at how you get a compiled template object for your markup (the myTemplate object in the code example above) so you can call the render method.\nThe next working example shows you that.\n"
      },
      {
        "_type": "sample",
        "title": "Complete code for template rendering:",
        "text": "Complete code for template rendering:\n\n\n\n  <label>Name:</label> {{:name}}<br/>\n\nvar myTemplate = $.templates(\"#personTmpl\");\n\nvar people = [\n  {\n    name: \"Adriana\"\n  },\n  {\n    name: \"Robert\"\n  }\n];\n\nvar html = myTemplate.render(people);\n\n$(\"#peopleList\").html(html);\nTake a look at the Code, Full Code or Try It tabs.\nIn the html you see that we put our markup in a script block with type=\"text/x-jsrender\"…\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <label>Name:</label> {{:name}}\n</script>\n\n… and then in the code we call the $.templates() method with a jQuery selector for that script block, to get the compiled template.\nvar myTemplate = $.templates(\"#personTmpl\");\n\nAfter that we run the code we have already seen to render the template against our data, and get the HTML output as a string. (We pass the data – this time we used an array – to the render() method of our compiled template.)\nvar html = myTemplate.render(people);\n\nFinally we simply insert that output into the HTML DOM using the jQuery html() method.\nAgain, you can play with the sample in the Try it tab, by changing the data, or the markup, or the code.\nFor example if you change the template to produce a <tr>, you will want to insert the output into the tbody of a table, by adding a <table><tbody> target container – as in the following:\n<table><tbody id=\"peopleList\"></tbody></table>\n\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <tr>\n    <td>Name</td>\n    <td>{{:name}}</td>\n  </tr>\n</script>\n\n\n"
      },
      {
        "_type": "para",
        "title": "What else is in templates?",
        "text": "What else is in templates?\nJsRender template have a very rich feature-set, yet a small number of predefined tags. The links at the bottom of this topic give details on some of the features.\nBut let’s try one more sample, where this time, instead of passing our people array to the template.render() method, we will pass an object (our app object) which will have a people property. Now in the template we will use a {{for}} tag to iterate over the people.\nAlso we’ll use an {{if}} tag to test whether the person has a nickname field, and if so we will render out the nickname too…\n"
      },
      {
        "_type": "sample",
        "title": "Some template tags...",
        "text": "Some template tags...\n\n\n\n  <tr><td>\n    <ul>\n      {{for people}}\n        <li>\n          {{:name}}\n          {{if nickname}}\n            ( {{:nickname}} )\n          {{/if}}\n        </li>\n      {{/for}}\n    </ul>\n  </td></tr>\n\nvar myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\",\n      nickname: \"Bob\"\n    }\n  ];\n\n  app = {\n    people: people\n  };\n\nvar html = myTemplate.render(app);\n\n$(\"#peopleList\").html(html);\n\nThe {{for people}}...{{/for}} block tag, in the template, looks at the current data item (the app that we passed in) and navigates a data-path that you provide as parameter – in this case people.\nJsRender supports different kinds of paths, as well as expressions of various kinds. The data-path can be something like address.street, with ‘dot’ separators, but in this case it is simply the people property of the app object.\nNow, because people is an array, JsRender will render the content of the {{for}}...{{/for}} block once for each item in the array.\nWithin the block the current item is now the person(item in the people array), and there we have an {{if nickname}}...{{/if}} block tag, which takes an expression as parameter.\nIn this case the expression is another data-path, nickname. So it renders the content of the {{if}}...{{/if}} block if the nickname is not undefined (or is not null, or the empty string).\nYou can experiment by replacing the {{if nickname}} expression. For example, try giving Adriana the nickname Adriana! Then try replacing {{if nickname}} with:\n{{if nickname && nickname !== name}} \n\n\n"
      },
      {
        "_type": "para",
        "title": "Next:",
        "text": "Next:\nJsRender Quickstart\n"
      },
      {
        "_type": "links",
        "title": "Links:",
        "text": "Links:\n"
      }
    ]
  },
  "jsvplaying": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "(See also: JsViews Quickstart)\n"
      },
      {
        "_type": "para",
        "title": "JsViews: A platform for data-bound single-page apps",
        "text": "JsViews: A platform for data-bound single-page apps\nJsViews provides dynamic data-bound views, built on top of JsRender templates. It \"brings JsRender templates to life\". So let’s start with the JsRender template we ended up with in the Playing with JsRender topic:\n"
      },
      {
        "_type": "sample",
        "title": "Using the template.link() method",
        "text": "Using the template.link() method\n\n\n\n  <tr><td>\n    <ul>\n      {{for people}}\n        <li>\n          {{:name}}\n        </li>\n      {{/for}}\n    </ul>\n  </td></tr>\n\n\nvar myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nmyTemplate.link(\"#peopleList\", app);\nIf you look at the code you will see it is almost identical to the previous JsRender sample. One difference though: the two lines for rendering the template as a string and then inserting it into the DOM:\nvar html = myTemplate.render(app);\n\n$(\"#peopleList\").html(html);\n\n…have been replaced by a single line:\nmyTemplate.link(\"#peopleList\", app);\n\nThat line of code actually does three things:\n\nFirst it renders the template against the data (second parameter)\nNext, it inserts the resulting HTML under the container element (first parameter)\nFinally, it data-binds the HTML against the data\n\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linking",
        "text": "Data-linking\nIn JsViews we refer to data-linking. It means data-binding, but refers to the particular approach used in JsViews, which is based on observable objects and arrays.\nIf you take an object and assign a new value to one of its properties (fields), there is no corresponding event that can allow other code to know you modified the object. Similarly, mutating an array will not provide any events or notifications to other code.\nThat’s where JsObservable comes in. It provides ways of changing objects and arrays, observably.\nThe next sample shows what happens when the template renders against an array, and then that array is modified ‘observably’ (observable collection change).\n$(\"#addBtn\").on(\"click\", function() {\n  $.observable(people).insert({name: \"name\"});\n});\n\n"
      },
      {
        "_type": "sample",
        "title": "Data-linked tags and observable arrays and objects ",
        "text": "Data-linked tags and observable arrays and objects \n\n\n\n  <tr><td>\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr><td>\n      {{:name}}\n    </td></tr>\n  {{/for}}\n\nvar myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function() {\n  $.observable(people).insert({name: \"name\"});\n});\nClick on the Add button, and a new row gets added to the array. The template rendering automatically updates to show the new row.\nIt uses the code:\n$.observable(people).insert({name: \"name\"});\n\nBut notice that the template is different from previously. It has that extra carat sign: {^{for ...}}. Try removing the ^ and then clicking the Add button. – Nothing happens.\nAny regular JsRender tag {{sometag ...}} – whether built-in or custom – can be data-linked by adding the ^: {^{sometag ...}}. That tag has become ‘dynamic’ and will re-render itself whenever it needs to, if the underlying data changes (‘observably’).\nRemove the ^, and the tag is 'dead’…\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "What about changing an object? Let’s modify the name on a person object (observable property change):\n"
      },
      {
        "_type": "sample",
        "title": "Observable change: setProperty",
        "text": "Observable change: setProperty\n\n\n\n  <tr><td colspan=\"2\">\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr>\n      <td>{^{:name}}</td>\n      <td>\n        <button class=\"changeBtn\">Change</button>\n      </td>\n    </tr>\n  {{/for}}\n\nvar myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar counter = 1;\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function() {\n  $.observable(people).insert({name: \"name\"});\n});\n\n$(\"#peopleList\").on(\"click\", \".changeBtn\", function() {\n  var dataItem = $.view(this).data;\n  $.observable(dataItem).setProperty(\"name\", dataItem.name + counter++);\n});\n\nHere is the code when you click Change:\nfunction() {\n  var dataItem = $.view(this).data;\n\n  $.observable(dataItem).setProperty(\"name\", dataItem.name + counter++);\n}\n\nThe code for setProperty should make sense, given what we have already seen. You call $.observable(myObject) to get an ‘observable form of your object’ which will provide you with appropriate methods you can call: setProperty(...) if it was an object, and insert, remove, refresh and move, if it was an array.\nBut in our case, the first problem is to know which person object should be modified by this particular button. The this pointer in the click-handler is the element, and our code:\nvar dataItem = $.view(this).data;\n\n– let’s us get the view (an ‘instance’ of a rendered template, or template tag block) and hence to the data item (in this case the person) we want to modify.\nAs in the previous sample, we have ‘brought a tag to life’ by writing:\n<td>{^{:name}}</td>\n\nChange it back to:\n<td>{{:name}}</td>\n\nand you will see that the name no longer updates when you click on the Change button.\n\n"
      },
      {
        "_type": "para",
        "title": "Data-linked tags...",
        "text": "Data-linked tags...\nSo far we have used data-linked template tags for data-linking, as in:\n<td>{^{:name}}</td>\n\nBut the fact that the data-linked tag is wrapped by an HTML element means that if we want we can replace it by an ‘element-based’ syntax:\n"
      },
      {
        "_type": "template",
        "title": "...or element-based data-linking",
        "text": "...or element-based data-linking\n\n"
      },
      {
        "_type": "sample",
        "title": "Element-based linking: \"data-link\"",
        "text": "Element-based linking: \"data-link\"\n\n\n\n  <tr><td colspan=\"2\">\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr>\n      <td data-link=\"name\"></td>\n      <td>\n        <button class=\"changeBtn\">Change</button>\n      </td>\n    </tr>\n  {{/for}}\n\nvar myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar counter = 1;\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function() {\n  $.observable(people).insert({name: \"name\"});\n});\n\n$(\"#peopleList\").on(\"click\", \".changeBtn\", function() {\n  var dataItem = $.view(this).data;\n  $.observable(dataItem).setProperty(\"name\", dataItem.name + counter++);\n});\n\nSo this version of the sample uses:\n<td data-link=\"name\"></td>\n\nTry changing it back to the data-linked tag syntax, with {^{. You will see that the sample works just the same…\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "But what about two-way data-binding?\n"
      },
      {
        "_type": "sample",
        "title": "Two-way data-binding",
        "text": "Two-way data-binding\n\n\n\n  <tr><td colspan=\"2\">\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr>\n      <td data-link=\"name\"></td>\n      <td>\n        <input data-link=\"name\"/>\n      </td>\n    </tr>\n  {{/for}}\n\nvar myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar app = {\n    people: people\n  };\n\nvar counter = 1;\n\nmyTemplate.link(\"#peopleList\", app);\n\n$(\"#addBtn\").on(\"click\", function() {\n  $.observable(people).insert({name: \"name\"});\n});\n\nThis is where the element-based data-linking comes into its own. The textbox uses declarative binding:\n<td data-link=\"name\"></td>\n<td>\n  <input data-link=\"name\"/>\n</td>\n\nThe <input> and the <td> are both data-linked. The underlying data gets modified when you change the name in the textbox – and updates the <td>, without you needing to write any propertyChange code at all.\n\n"
      },
      {
        "_type": "para",
        "title": "A more complete sample:",
        "text": "A more complete sample:\nThis was just a glimpse of some of the richness of JsViews data-linking. The next sample lets you see a more fully-fledged example, which you can experiment with.\nFor more details on JsViews features and APIs see the Links section below.\n"
      },
      {
        "_type": "sample",
        "title": "data-linking to &lt;select>... and much more...",
        "text": "data-linking to <select>... and much more...\n\n\n\n  <tr><td>\n    <button id=\"addBtn\">Add</button>\n    <button id=\"removeBtn\" data-link=\"disabled{:selectedID === '0'}\">Remove</button>\n  </td></tr>\n  <tr><td>\n    <select data-link=\"selectedID\" size=\"5\">\n      <option value=\"0\">Choose a person to edit</option>\n      {^{for people}}\n        <option data-link=\"{:name} value{:ID}\"></option>\n      {{/for}}\n    </select>\n  </td></tr>\n  <tr><td>\n    <label>Name:<input data-link=\"{:selected()^name:} disabled{:selectedID === '0'}\" /></label>\n    <label>Nickname:<input data-link=\"{:selected()^nickname:} disabled{:selectedID === '0'}\" /></label>\n  </td></tr>\n  <tr><td class=\"center\">\n    {^{for selected()}}\n      {^{:name}}\t\n      {^{if nickname}}\n        ( {^{:nickname}} )\n      {{/if}}\n    {{/for}}\n  </td></tr>\n\nvar myTemplate = $.templates(\"#peopleTmpl\");\n\nvar people = [\n  {\n    ID: \"Ad0\",\n    name: \"Adriana\"\n  },\n  {\n    ID: \"Ro0\",\n    name: \"Robert\",\n    nickname: \"Bob\"\n  }\n];\n\nvar counter = 1;\n\nvar app = {\n    people: people,\n    selectedID: -1, // No selection. (Or could set to initial selection - e.g. \"0\")\n    selected: function() {\n      for (var i=0; iThis sample includes binding to <select>…\n<select data-link=\"selectedID\" size=\"5\">\n\nAnd also to each <option> within the <select>…\n{^{for people}}\n  <option data-link=\"{:name} value{:ID}\"></option>\n{{/for}}\n\nIt also shows observably removing items from an array…\n$.observable(people).remove($.inArray(app.selected(), people));\n\nIt shows data-linking to the disabled property of an element…\n<button data-link=\"disabled{:selectedID === '0'}\">Remove</button>\n\nAnd it shows the use of a computed observable in JsViews:\nvar app = {\n    ...\n    selected: function() {\n      ...\n    }\n  };\n\napp.selected.depends = \"selectedID\";\n\n\n"
      },
      {
        "_type": "para",
        "title": "Next:",
        "text": "Next:\nJsViews Quickstart\n"
      },
      {
        "_type": "links",
        "title": "Links:",
        "text": "Links:\n"
      }
    ]
  },
  "jsr-quickstart": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Best-of-breed templating\nSimple and intuitive, powerful and extensible, lightning fast\nFor templated content in the browser or on Node.js (with Express 4, Hapi and Browserify integration)\nJsRender is a light-weight but powerful templating engine, highly extensible, and optimized for high-performance rendering, without DOM dependency. It is designed for use in the browser or on Node.js, with or without jQuery.\nJsRender and JsViews together provide the next-generation implementation of the official jQuery plugins jQuery Templates, and jQuery Data Link – and supersede those libraries.\n"
      },
      {
        "_type": "para",
        "title": "JsRender on Node.js",
        "text": "JsRender on Node.js\nJsRender can be used to render templates on the server (using Node.js) as well as in the browser. JsRender on Node.js has all the features and APIs of JsRender in the browser, plus some additional ones specific to Node.js.\nIt also provides built-in Express, Hapi and Browserify integration – which makes it easy to register templates as simple .html files on the file system, and then load and render them either server-side, client-side or both.\nLearn more: JsRender Node.js Quickstart and JsRender APIs for Node.js.\nCode samples: See JsRender Node Starter for running code examples of Node.js scenarios, including with Express, Hapi and Browserify.\n"
      },
      {
        "_type": "para",
        "title": "JsRender and JsViews",
        "text": "JsRender and JsViews\nJsRender is used for data-driven rendering of templates to strings, ready for insertion in the DOM.\nIt is also used by the JsViews platform, which adds data binding to JsRender templates, and provides a fully-fledged MVVM platform for easily creating interactive data-driven single page apps and websites.\n"
      },
      {
        "_type": "para",
        "title": "JsRender installation",
        "text": "JsRender installation\njsrender.js is available from downloads on this site.\nCDN delivery is available from the cdnjs CDN at cdnjs.com/libraries/jsrender.\nAlternatively:\n\nIt can be installed with Bower, using $ bower install jsrender\nIt can be loaded using an AMD script loader, such as RequireJS\nFor installation using Node.js (npm) see JsRender Node.js Quickstart\n(For browser loading using Browserify or webpack – see JsRender Node.js Quickstart, JsRender as a Browserify module and JsRender as a webpack module)\n\n"
      },
      {
        "_type": "para",
        "title": "Using JsRender with jQuery",
        "text": "Using JsRender with jQuery\nWhen jQuery is present, JsRender loads as a jQuery plugin and adds $.views, $.templates and $.render to the jQuery namespace object, $ (or window.jQuery).\nExample HTML page: JsRender with jQuery\n"
      },
      {
        "_type": "para",
        "title": "JsRender without jQuery",
        "text": "JsRender without jQuery\nWhen jQuery is not present, JsRender provides its own jsrender namespace object, exposed as window.jsrender\nThe jsrender namespace provides the same methods/APIs as with jQuery, so if jQuery is not present you can still use all the API examples, by simply writing:\nvar $ = window.jsrender;\n\n// Now use code as in samples/examples, with $.views... $.templates... $.render...\n\nExample HTML page: JsRender without jQuery\n\nJsRender usage\n"
      },
      {
        "_type": "para",
        "title": "Define a template",
        "text": "Define a template\nFrom a string:\nvar tmpl = $.templates(\"Name: {{:name}}\");\n\nFrom a template declared as markup in a script block:\n<script id=\"myTemplate\" type=\"text/x-jsrender\">Name: {{:name}}</script>\n\nvar tmpl = $.templates(\"#myTemplate\");\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Render a template",
        "text": "Render a template\ntmpl.render(object) (or shortcut form: tmpl(object)) renders the template with the object as data context.\ntmpl.render(array) (or tmpl(array)) renders the template once for each item in the array.\nvar tmpl = $.templates(\" Name: {{:name}}<br/> \");\n\nvar person = {name: \"Jim\"};\n\n// Render template for person object\nvar html = tmpl.render(person); // ready for insertion, e.g $(\"#container\").html(html);\n\n// result: \"Name: Jim<br/> \"\n\nvar people = [{name: \"Jim\"}, {name: \"Pedro\"}];\n\n// Render template for people array\nvar html = tmpl.render(people); // ready for insertion...\n\n// result: \"Name: Jim<br/> Name: Pedro<br/> \"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Register a named template &ndash; and render it",
        "text": "Register a named template – and render it\n// Register named template \"myTmpl1\", from string \n$.templates(\"myTmpl1\", \"Name: {{:name}}<br/> \");\n// (or from script block: $.templates(\"myTmpl1\", \"#myTemplate\"); ...)\n\nvar person = {name: \"Jim\"};\n\n// Render named template\nvar html = $.render.myTmpl1(person);\n\n// result: \"Name: Jim<br/> \"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "\nTemplate tags\n"
      },
      {
        "_type": "para",
        "title": "Template tag syntax",
        "text": "Template tag syntax\n\nAll tags other than {{: ...}} {{> ...}} {{* ...}} {{!-- --}} behave as block tags\nBlock tags can have content, unless they use the self-closing syntax:\n\nBlock tag – with content: {{sometag ...}} content {{/sometag}}\nSelf-closing tag – no content (empty): {{sometag .../}}\n\nA particular case where self-closing syntax is used is when a block tag uses the named parameter tmpl=... to reference an external template – which then replaces what would have been the block content:\n\nSelf-closing block  tag referencing an external template: {{sometag ... tmpl=.../}}(This lets you do template composition. See example.)\n\nTags can take both unnamed arguments and named parameters:\n\n{{sometag argument1 param1=...}} content {{/sometag}}\nan example of a named parameter is the tmpl=... parameter mentioned above\narguments and named parameters can be assigned values from simple data-paths such as address.street or from richer expressions such as product.quantity * 3.1 / 4.5, or name.toUpperCase()\n\n\nLearn more…\nBuilt-in tags"
      },
      {
        "_type": "para",
        "title": "",
        "text": ""
      },
      {
        "_type": "para",
        "title": "<b>{{: ...}}</b> (Evaluate)",
        "text": "{{: ...}} (Evaluate)\n{{: pathOrExpr}} inserts the value of the path or expression.\nvar data = {address: {street: \"Main Street\"} };\nvar tmpl = $.templates(\"<b>Street:</b> {{:address.street}}\");\nvar html = tmpl.render(data);\n\n// result: \"<b>Street:</b> Main Street\"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "<b>{{> ...}}</b> (HTML-encode)",
        "text": "{{> ...}} (HTML-encode)\n{{> pathOrExpr}} inserts the HTML-encoded value of the path or expression.\nvar data = {condition: \"a < b\"};\nvar tmpl = $.templates(\"<b>Formula:</b> {{>condition}}\");\nvar html = tmpl.render(data);\n\n// result: \"<b>Formula:</b> a &lt; b\"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "<b>{{include ...}}</b> (Template composition &ndash; partials)",
        "text": "{{include ...}} (Template composition – partials)\n{{include pathOrExpr}}...{{/include}}evaluates the block content against a specified/modified data context.\n{{include ... tmpl=.../}} evaluates the specified template against an (optionally modified) context, and inserts the result. (Template composition).\nvar data = {name: \"Jim\", address: {street: \"Main Street\"} };\n\n// Register two named templates\n$.templates({\n    streetTmpl: \"<i>{{:street}}</i>\",\n    addressTmpl: \"{{:name}}'s address is {{include address tmpl='streetTmpl'/}}.\"\n});\n\n// Render outer template\nvar html = $.templates.addressTmpl.render(data);\n\n// result: \"Jim's address is <i>Main Street</i>\"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "<b>{{for ...}}</b> (Template composition, with iteration over arrays)",
        "text": "{{for ...}} (Template composition, with iteration over arrays)\n{{for pathOrExpr}}...{{/for}}evaluates the block content against a specified data context. If the new data context is an array, it iterates over the array, renders the block content with each data item as context, and concatenates the result.\n{{for pathOrExpr tmpl=.../}} evaluates the specified template against a data context. If the new data context is an array, it iterates over the array, renders the template with each data item as context, and concatenates the result.\n<script id=\"peopleTmpl\" type=\"text/x-jsrender\">\n  <ul>{{for people}}\n    <li>Name: {{:name}}</li>\n  {{/for}}</ul>\n</script>\n\nvar data = {people: [{name: \"Jim\"}, {name: \"Pedro\"}] };\nvar tmpl = $.templates(\"#peopleTmpl\");\nvar html = tmpl.render(data);\n\n// result: \"<ul> <li>Name: Jim</li> <li>Name: Pedro</li> </ul>\"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "<b>{{props ...}}</b> (Iteration over properties of an object)",
        "text": "{{props ...}} (Iteration over properties of an object)\n{{props pathOrExpr}}...{{/prop}} or {{props pathOrExpr tmpl=.../}} iterates over the properties of the object returned by the path or expression, and renders the content/template once for each property – using as data context: {key: propertyName, prop: propertyValue}.\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  <ul>{{props person}}\n    <li>{{:key}}: {{:prop}}</li>\n  {{/props}}</ul>\n</script>\n\nvar data = {person: {first: \"Jim\", last: \"Varsov\"} };\nvar tmpl = $.templates(\"#personTmpl\");\nvar html = tmpl.render(data);\n\n// result: \"<ul> <li>first: Jim</li> <li>last: Varsov</li> </ul>\"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "<b>{{if ...}}</b> (Conditional inclusion)",
        "text": "{{if ...}} (Conditional inclusion)\n{{if pathOrExpr}}...{{/if}} or {{if pathOrExpr tmpl=.../}} renders the content/template only if the evaluated path or expression is 'truthy’.\n{{if pathOrExpr}}...{{else pathOrExpr2}}...{{else}}...{{/if}}  behaves as 'if – else if – else’ and renders each block based on the conditions.\n<script id=\"personTmpl\" type=\"text/x-jsrender\">\n  {{if nickname}}\n    Nickname: {{:nickname}}\n  {{else name}}\n    Name: {{:name}}\n  {{else}}\n    No name provided\n  {{/if}}\n</script>\n\nvar data = {nickname: \"Jim\", name: \"James\"};\nvar tmpl = $.templates(\"#personTmpl\");\nvar html = tmpl.render(data);\n\n// result: \"Nickname: Jim\"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "<b>Other built-in tags</b>",
        "text": "Other built-in tags\nFor details on all the above built-in tags, as well as comment tags {{!-- ... --}} and allow code tags  {{* ...}} and {{*: ...}}, see the tags documentation.\n"
      },
      {
        "_type": "para",
        "title": "<b>Custom tags</b>",
        "text": "Custom tags\nCreating your own custom tags is easy. Register a custom tag using $.views.tags(\"mytag\" , ...). The second parameter will generally be a tagOptions object on which you can specify a render method, template, event handlers, etc. (There are many examples in the JsRender and JsViews custom tag samples here and here). But for simple tags, you may only need a simple render function, or a template string.\nFor example the two following definitions for a {{fullName/}} tag provide equivalent behavior:\nAs a render function:\n$.views.tags(\"fullName\", function(val) {\n    return val.first + \" \" + val.last;\n});\n\nOr as a template string:\n$.views.tags(\"fullName\", \"{{:first}} {{:last}}\");\n\nEither way, the result will be as follows:\nvar tmpl = $.templates(\"{{fullName person/}}\");\nvar data = {person: {first: \"Jim\", last: \"Varsov\"}};\nvar html = tmpl.render(data);\n\n// result: \"Jim Varsov\"\n\n"
      },
      {
        "_type": "para",
        "title": "Helpers",
        "text": "Helpers\nFor details see Helpers.\nHere is a simple example. Two helpers – a function, and a string:\nvar myHelpers = {\n    upper: function(val) { return val.toUpperCase(); },\n    title: \"Sir\"\n};\n\nAccess the helpers using the ~myhelper syntax:\nvar tmpl = $.templates(\"{{:~title}} {{:first}} {{:~upper(last)}}\");\n\nWe can pass the helpers in with the render() method\nvar data = {first: \"Jim\", last: \"Varsov\"};\n\nvar html = tmpl.render(data, myHelpers);\n\n// result: \"Sir Jim VARSOV\"\n\nOr we can register helpers globally:\n$.views.helpers(myHelpers);\n\nvar data = {first: \"Jim\", last: \"Varsov\"};\nvar html = tmpl.render(data);\n\n// result: \"Sir Jim VARSOV\"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Converters",
        "text": "Converters\nConverters are used with the {{: ...}} tag, using the syntax {{mycvtr: ...}}}.\nExample – an upper converter, to convert to upper case:\n$.views.converters(\"upper\", function(val) { return val.toUpperCase(); });\n\nvar tmpl = $.templates(\"{{:first}} {{upper:last}}\");\nvar data = {first: \"Jim\", last: \"Varsov\"};\nvar html = tmpl.render(data);\n\n// result: \"Jim VARSOV\"\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Logic and expressions",
        "text": "Logic and expressions\nJsRender supports rich expressions and logic, but at the same time encapsulates templates to prevent random access to globals. If you want to provide access to global variables within a template, you have to pass them in as data or as helpers.\nYou can assign rich expressions to any template arguments or parameters, as in:\n{{:person.nickname ? \"Nickname: \" + person.nickname : \"(has no nickname)\"}}\nor\n{{if ~limits.maxVal > (product.price*100 - discount)/rate}}\n  ...\n{{else ~limits.minVal < product.price}}\n  ... \n{{else}}\n  ... \n{{/if}}\n\n"
      },
      {
        "_type": "links",
        "title": "Links:",
        "text": "Links:\n"
      }
    ]
  },
  "jsv-quickstart": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews: Next-generation MVVM and MVP framework – bringing templates to life\nThe power of MVVM, the flexibility of JavaScript, the speed and ease of JsRender templates and jQuery\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "JsViews builds on top of JsRender templates, and adds data-binding and observable data, to provide a fully-fledged MVVM platform for easily creating interactive data-driven single-page apps and websites.\n"
      },
      {
        "_type": "para",
        "title": "JsRender and JsViews",
        "text": "JsRender and JsViews\nJsRender is used for data-driven rendering of templates to strings, ready for insertion in the DOM. (See JsRender Quickstart and JsRender GitHub repository).\nJsViews incorporates JsRender templates, together with data-binding, observable data and MVVM support. It provides a powerful platform for building dynamic interactive websites and single-page apps.\n(Note: JsRender and JsViews together provide the next-generation implementation of the official jQuery plugins JQuery Templates, and JQuery Data Link – and supersede those libraries.)\n"
      },
      {
        "_type": "para",
        "title": "JsViews installation",
        "text": "JsViews installation\njsviews.js is available from downloads on this site.\nCDN delivery is available from the cdnjs CDN at cdnjs.com/libraries/jsviews.\nAlternatively:\n\nIt can be installed with Bower, using $ bower install jsviews\nIt can be loaded using an AMD script loader, such as RequireJS\nFor installation using Node.js (npm), and loading using Browserify or webpack, see JsViews as a Browserify module and JsViews as a webpack module\n\nExample HTML page: Loading JsViews\n(Note that jsviews.js includes all of jsrender.js code – so jsrender.js does not need to be loaded first.)\n\nJsViews usage\n"
      },
      {
        "_type": "para",
        "title": "Data-linked templates",
        "text": "Data-linked templates\nJsViews provides data-linking – so that JsRender templates become data-bound:\n\nData-linked tags or elements in your templates will update automatically whenever the underlying data changes.\nSome data-linked tags or elements provide two-way data-linking, so that user interactions will trigger “observable” changes to the underlying data (which may then trigger other updates elsewhere in your templated UI).\n\nData-linked template tags:\nAny JsRender tag, {{...}} can be data-linked by writing {^{...}}, as in:\n<ul>\n  {^{for people}} <!-- The <li> list will update when the people array changes -->\n    <li>{^{:name}}</li> <!-- This will update when the name property changes -->\n  {{/for}}\n</ul>\n\nLearn more…\nData-linked HTML elements:\nHTML elements within templates can be data-linked by adding a data-link attribute:\n<input data-link=\"name\"/> <!-- This has two-way data-binding to the name property -->\n<span data-link=\"name\"></span> <!-- This will update when the name property changes -->\n\nHTML elements within ‘top-level’ page content can also be data-linked – see below.\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Render and link a template",
        "text": "Render and link a template\nWith JsRender, you call the render() method, then insert the resulting HTML in the DOM.\nvar html = tmpl.render(data, helpersOrContext);\n$(\"#container\").html(html);\n\nWith JsViews, you can instead call the link() method:\ntmpl.link(\"#container\", data, helpersOrContext);\n\nwhich in one line of code will:\n\nrender the template\ninsert the resulting HTML as content under the HTML container element\ndata-link that content to the underlying data\n\nNow observable changes in the data will automatically trigger updates in the rendered UI.\nThere are two ways of calling the link() method:\n\nIf you have a reference to the template object, call template.link(...)\nIf you have registered the template by name (\"myTmpl\"), call link.myTmpl(...)\n\nExample: - Template from string\nvar tmpl = $.templates(\"{^{:name}} <input data-link='name' />\");\nvar person = {name: \"Jim\"};\ntmpl.link(\"#container\", person);\n\nExample: - Template from script block\n<script id=\"myTemplate\" type=\"text/x-jsrender\">{^{:name}} <input data-link=\"name\" /></script>\n\nvar tmpl = $.templates(\"#myTemplate\");\nvar person= {name: \"Jim\"};\ntmpl.link(\"#container\", person);\n\nExample: - Named template from string\n$.templates(\"myTmpl1\", \"{^{:name}} <input data-link='name' />\");\nvar person= {name: \"Jim\"};\n$.link.myTmpl1(\"#container\", person);\n\nExample: - Named template from script block\n<script id=\"myTemplate\" type=\"text/x-jsrender\">{^{:name}} <input data-link=\"name\" /></script>\n\n$.templates(\"myTmpl2\", \"#myTemplate\");\nvar data = {name: \"Jim\"};\n$.link.myTmpl2(\"#container\", data);\n\nResult: After each link() example above the container element will have the following content:\nJim <input value=\"Jim\" />\n\nwith the name property of person object data-linked to the \"Jim\" text node and two-way data-linked to the <input />\nSee: Playing with JsViews for working samples, such as this one\nLearn more….\n"
      },
      {
        "_type": "para",
        "title": "Top-level data-linking",
        "text": "Top-level data-linking\nYou can use data-linking not only for templated content, but also to data-bind to top-level HTML content in your page:\n$.link(true, \"#target\", data);\n\nThis will activate any declarative data-binding (data-link=\"...\" expressions) on the target element – or on elements within its content.\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Making \"observable\" changes to objects and arrays",
        "text": "Making \"observable\" changes to objects and arrays\nIn current JavaScript implementations, modifying objects or arrays does not raise any event, so there is no way for the change to be detected elsewhere. JsViews dynamic data-bound UI solves this through data-linking, using the JsObservable observer pattern.\nThe JsViews $.observable() API provides a way for you to change objects or arrays observably. Each change will raise a property change or array change event.\nModify an object observably\n$.observable(person).setProperty(\"name\", newName);\n\n$.observable(person) makes the person object “observable”, by providing a setProperty(...) method. Use setProperty to change a value, and the change will be “observed” by the declarative data-binding in the template.\nModify an array observably\n$.observable(people).insert(newPerson);\n\n$.observable(people) makes the people array “observable”, by providing methods like insert(...) and remove(...). Use them to make changes to arrays, and the changes will be “observed” by data-bound elements and tags in the template – such as the {^{for dataArray}} tag.\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Responding to data changes",
        "text": "Responding to data changes\nJsViews uses the property change or array change events to make any data-linked tags or elements in your templates update automatically in response to each observable change in your underlying data. In addition, with two-way data-linking, it ensures that those events are raised when the user interacts with a data-linked template, and causes changes to the underlying data.\nobserve() and observeAll()\nThe [$.observe()](#observe) and $.observable().observeAll() APIs make it very easy for you to register event handlers or listeners, so your code can listen to specific observable changes made to your data objects or view models:\n$.observe(person, \"name\", function(...) {\n  // The \"name\" property of person has changed\n  ...\n});\n\n$.observable(person).observeAll(function(...) {\n  // A property of person, or a nested object property, has changed\n  ...\n});\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Accessing the view hierarchy",
        "text": "Accessing the view hierarchy\nEach instance of a rendered template or a template block tag is associated with a JsViews “view” object – so nested tags lead to a hierarchy of view objects. The view hierarchy shows how the underlying data objects map to the rendered UI.\nFrom UI back to data:\nUse $.view(elem) to get from a DOM element to the corresponding view object for that part of the rendered content. From the view you can then get to the underlying data, the index, etc.\nExample:\n{^{for people}}\n  ...\n  <button class=\"changeBtn\">Change</button>\n  ...\n{{/for}}\n\nClick-handler code for Change button:\n$(\".changeBtn\").on(\"click\", function() {\n  var view = $.view(this); // From the clicked HTML element ('this'), get the view object\n  var person = view.data;  // The 'person' data object for clicked button\n  var index = view.index;  // The index of this 'item view'. (Equals index of person in people array)\n  $.observable(person).setProperty(\"name\", person.name + \" \" + index); // Change the person.name\n});\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Data-linked paths",
        "text": "Data-linked paths\nJsViews data-linked templates (and the $.observe() API) use the same paths and expressions as JsRender templates, but in addition provide ‘leaf’ data-binding – such as:\n{^{:team.manager.name`}}                    <!-- updates when name changes -->\n<span data-link=\"team.manager.name\"></span> <!-- updates when name changes -->\n<input data-link=\"team.manager.name\" />     <!-- two-way binding to name -->\n\nBut data-linked paths have additional support, such as linking deeper into paths:\n{^{:team^manager.name`}}                    <!-- updates when name, manager, or team changes -->\n\nLearn more…\n"
      },
      {
        "_type": "para",
        "title": "Computed observables",
        "text": "Computed observables\nJsViews also allows you to data-bind to computed values, such as:\n{^{:shoppingCart.totalAmount()}}           <!-- updates when totalAmount() changes -->\n<input data-link=\"person.fullName()\" />    <!-- two-way binding to the computed fullName() -->\n\nLearn more…\n"
      },
      {
        "_type": "links",
        "title": "Links:",
        "text": "Links:\n"
      }
    ]
  },
  "jsr-node-quickstart": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsRender can be used to render templates on the server (using Node.js) as well as in the browser.\nJsRender on Node.js has the full set of features and APIs provided by JsRender in the browser (see JsRender Quickstart).\nIn addition, it provides built-in Express, Hapi and Browserify/webpack integration, as well as APIs for accessing templates stored as simple .html files on the file system. This makes it easy to render the same templates server-side, client-side or both.\n"
      },
      {
        "_type": "para",
        "title": "Installation",
        "text": "Installation\nInstall jsrender:\n$ npm install jsrender --save\n\nLoad the jsrender module:\nvar jsrender = require('jsrender');\n\nNow call JsRender APIs, or use Express or Hapi integration (see below), for server-rendering of JsRender templates.\nLearn more about JsRender installation and usage on Node.js…\n"
      },
      {
        "_type": "para",
        "title": "Rendering templates on the server",
        "text": "Rendering templates on the server\nOn Node.js you can use all the normal JsRender APIs to render templates (such as a layout template) – and return the HTML string in the HTTP response:\nvar jsrender = require('jsrender');\n\nvar tmpl = jsrender.templates('Name: {{:name}}<br/>'); // Compile template from string\n\nvar html = tmpl.render({name: \"Jim\"}); // Render\n// result: \"Jim Varsov\"\n\napp.get('/...', function(req, res) {\n  res.send(html);\n});\n\nNote that template composition works on Node.js just as it does with JsRender on the browser – and can include file paths.\n"
      },
      {
        "_type": "para",
        "title": "Defining templates as .html files",
        "text": "Defining templates as .html files\nJsRender templates can be stored directly in the file system (e.g. as .html, .jsr. or .jsrender files).\nLet’s rewrite the example above, but store the template as an .html file rather than compile it from a string:\nTemplate: ./templates/myTemplate.html – with contents:\nName: {{:name}}<br/>\n\nCode: JsRender recognizes file paths, so you can write:\nvar jsrender = require('jsrender');\n\nvar tmpl = jsrender.templates('./templates/myTemplate.html'); // Compile the template from file\n\nvar html = tmpl.render({name: \"Jim\"}); // Render\n// result: Name: Jim<br/>\n\n...\nres.send(html);\n\nLearn more about file-based templates…\n"
      },
      {
        "_type": "para",
        "title": "Using helpers, converters, custom tags...",
        "text": "Using helpers, converters, custom tags...\nOn Node.js you can use the full set of JsRender features, template tags and APIs, just as you would in the browser – by simply using the jsrender namespace object returned from require('jsrender'), instead of the jQuery object, $. In addition you can take advantage of file-based templates.\nFor example, here is the JsRender Quickstart Custom Tags sample, as you might write it on Node.js:\nTemplate: ./templates/personTemplate.html:\nName: {{fullName person/}}\n\nCode:\nvar jsrender = require('jsrender');\n\njsrender.views.tags(\"fullName\", \"{{:first}} {{:last}}\"); // Register custom tag\n\nvar tmpl = jsrender.templates('./templates/personTemplate.html'); // Compile template\n\nvar html = tmpl.render({person: {first: \"Jim\", last: \"Varsov\"}}); // Render\n// result: \"Jim Varsov\"\n\nLearn more about APIs, features…\n"
      },
      {
        "_type": "para",
        "title": "Using Express to render templates",
        "text": "Using Express to render templates\nIn Express you can use JsRender APIs to render the template, as in the examples above, then return the html in the HTTP response:\napp.get('/...', function(req, res) {\n  res.send(html);\n});\n\nBut alternatively you can register JsRender as template engine for Express:\nvar jsrender = require('jsrender');\n\napp.engine('html', jsrender.__express); // Set JsRender as template engine for .html files\napp.set('view engine', 'html'); \napp.set('views', __dirname + '/templates'); // Folder location for JsRender templates for Express\n\nRender template ./templates/myTemplate.html – content: Name: {{:name}}<br/>:\napp.get('/...', function(req, res) {\n  res.render('myTemplate', {name: \"Jim\"}); \n  // result: Name: Jim<br/>\n});\n\n"
      },
      {
        "_type": "para",
        "title": "Using Hapi to render templates",
        "text": "Using Hapi to render templates\nJsRender also has built-in support as template engine for Hapi:\nSet JsRender as the template engine for Hapi:\nvar jsrender = require('jsrender');\n\nserver.register(vision, function (err) {\n  ...\n  server.views({\n    engines: { html: jsrender },\n    relativeTo: __dirname,\n    path: 'templates'\n  });\n\nUse Hapi to render a template:\nserver.route({\n  method: 'GET',\n  path: '/',\n  handler: function (request, reply) {\n    return reply.view('myTemplate', myData);\n  }\n});\n\n"
      },
      {
        "_type": "para",
        "title": "Details:",
        "text": "Details:\nJsRender APIs for Node.js\n— Installation and usage\n— File-based templates\n— Express and Hapi integration\n— Server/browser shared templates\n— Browserify support\n— Webpack support\n"
      },
      {
        "_type": "links",
        "title": "Other links:",
        "text": "Other links:\n"
      },
      {
        "_type": "para",
        "title": "JsRender Node Starter",
        "text": "JsRender Node Starter\nFor details and running code samples for Node.js scenarios, including with Express, Hapi and Browserify, see the JsRender Node Starter project on GitHub.\n"
      }
    ]
  },
  "home": {
    "sections": [
      {
        "_type": "links",
        "title": "",
        "text": ""
      }
    ]
  },
  "temp": {
    "sections": [
      {
        "_type": "para",
        "title": "Data-link target attributes",
        "text": "Data-link target attributes\nData-linking to value, innerHTML, innerText, class, disabled, CSS attributes, visibility, data-* attributes, selection, SVG\n"
      },
      {
        "_type": "para",
        "title": "Data-link expressions",
        "text": "Data-link expressions\n{for}, {if}, custom bindings\n"
      },
      {
        "_type": "para",
        "title": "Event bindings",
        "text": "Event bindings\nparagraph\n"
      },
      {
        "_type": "para",
        "title": "Datamaps",
        "text": "Datamaps\nparagraph\n"
      },
      {
        "_type": "para",
        "title": "Tag hierarchy",
        "text": "Tag hierarchy\nparagraph\n"
      },
      {
        "_type": "para",
        "title": "Contextual parameters",
        "text": "Contextual parameters\nparagraph\n"
      }
    ]
  }
}