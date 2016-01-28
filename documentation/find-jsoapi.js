﻿var content = $.views.documentation.content;

content.find.jsoapi = content.useStorage && $.parseJSON(localStorage.getItem("JsViewsDocTopics/find/jsoapi")) ||
{
  "jsoapi": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "(Work in progress. Other topics to follow…)\n"
      },
      {
        "_type": "links",
        "title": "Modifying data:",
        "text": "Modifying data:\n"
      },
      {
        "_type": "links",
        "title": "Responding to changes in data:",
        "text": "Responding to changes in data:\n"
      },
      {
        "_type": "links",
        "title": "",
        "text": ""
      }
    ]
  },
  "propchange": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Use $.observable(myObject) to obtain an observable object - which provides a setProperty method for making observable changes to the object:\n$.observable(object).setProperty()\n(See also: Observable objects and arrays)\n"
      }
    ]
  },
  "setprop": {
    "sections": [
      {
        "_type": "para",
        "title": "Modifying properties of an object, observably:",
        "text": "Modifying properties of an object, observably:\nIf you pass an object to $.observable(), you obtain an observable object (a very lightweight wrapper around your object) which provides a setProperty() method.\nCall the setProperty() method to make one or more observable changes to properties on your object (or on the nested objects in the ‘object graph’ below it…):\n$.observable(person).setProperty(\"address.street\", \"Main St\");\n\n"
      },
      {
        "_type": "api",
        "title": "$.observable(myObject).setProperty(path, value)",
        "text": "$.observable(myObject).setProperty(path, value)\nMake an observable change to an object property\nModify the value of an object property\n\n$.observable(book).setProperty(\"title\", \"Hope\");\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Observable property change, with data-bound template:",
        "text": "Sample: Observable property change, with data-bound template:\nHere is a sample, using a data-linked template to respond to the observable property changes.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\nStreet: {^{:address.street}}\")\n\nModify the value of a property on a chosen path:\n\n$.observable(person).setProperty(\"address.street\", \"Main St\");\n\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Observable property change, with onPropertyChange handler",
        "text": "Sample: Observable property change, with onPropertyChange handler\nAnd here is a sample, using an event handler for propertyChange to respond to the observable property changes.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n$(person.address).on(\"propertyChange\", changeHandler); \n\nModify the value of a property on a chosen path:\n\n$.observable(person).setProperty(\"address.street\", \"1st Ave\");\n\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Observable property change, with $.observe(...)",
        "text": "Sample: Observable property change, with $.observe(...)\nThis sample uses $.observe() to listen to the observable property changes.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n$.observe(person, \"address.street\", changeHandler);\n\nModify the value of a property on a chosen path:\n\n$.observable(person).setProperty(\"address.street\", \"Main St\");\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": ""
      },
      {
        "_type": "para",
        "title": "API: Changing multiple properties in one call:",
        "text": "API: Changing multiple properties in one call:\nYou can make observable changes to one or more properties in one call to setProperty() as follows:\n"
      },
      {
        "_type": "api",
        "title": "$.observable(myObject).setProperty({prop1: ..., prop2: ..., ...})",
        "text": "$.observable(myObject).setProperty({prop1: ..., prop2: ..., ...})\nModify the values of  one or more object properties\n\n$.observable(person).setProperty(newValues);\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Changing multiple properties in one call:",
        "text": "Sample: Changing multiple properties in one call:\nIn this sample we make changes to properties on two different objects, with a single call to setProperty().\nWe register a single listener for the observable property changes on both objects - with one call to $.observe().\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "Modify two properties, on different paths:\n\n$.observable(person).setProperty(\n  {\n    name: \"Hermione\",\n    \"address.street\": \"Main St\"\n  }\n);\n\nObserve both changes with a single $.observe() handler:\n\n$.observe(person, \"name\", \"address.street\", changeHandler); \n\n"
      }
    ]
  },
  "arrchange": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Use $.observable(myArray) to obtain an observable array - which provides methods for making observable changes to the array:\n"
      },
      {
        "_type": "links",
        "title": "",
        "text": ""
      },
      {
        "_type": "para",
        "title": "",
        "text": "(See also: Observable objects and arrays)\n"
      }
    ]
  },
  "insert": {
    "sections": [
      {
        "_type": "para",
        "title": "Changing an array observably: inserting items",
        "text": "Changing an array observably: inserting items\nIf you pass an array to $.observable(), you obtain an observable array (a very lightweight wrapper around your array) which provides methods for modifying the array observably, including an insert() method:\n"
      },
      {
        "_type": "api",
        "title": "$.observable(myArray).insert(index, insertedItems)",
        "text": "$.observable(myArray).insert(index, insertedItems)\nInsert or append one or more items to an array\nObservably append or insert an item, or set of items\n\n$.observable(people).insert(3, insertedItems);\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Appending to an array:",
        "text": "Sample: Appending to an array:\nHere is a sample using insert() to append an item to an array.\nA data-linked template responds to the observable array changes.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\nvar tmpl = $.templates(\"id: {{:id}}\");\n\ntmpl.link(\"#result\", things);\n\nAppend an item:\n\n$.observable(things).insert(\n  {id: \"item\" + count++}\n);\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Append one or more items",
        "text": "Sample: Append one or more items\nHere we’ll add an event handler for arrayChange to respond to the observable array changes, in addition to the template:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n$([things]).on(\"arrayChange\", changeHandler);\n\nAppend two items:\n\n$.observable(things).insert(\n  [\n    {id: \"item\" + count++},\n    {id: \"item\" + count++}\n  ]\n);\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Inserting items at a chosen index",
        "text": "Sample: Inserting items at a chosen index\nHere we modify the sample above, by specifying the index where we want to insert, rather than simply appending. We’ll also show the alternative $.observe() API for attaching our handler:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n$.observe(things, changeHandler);\n\nInsert a set of items at a chosen index:\n\n$.observable(things).insert(\n  index,\n  items\n);\n\n"
      }
    ]
  },
  "remove": {
    "sections": [
      {
        "_type": "para",
        "title": "Changing an array observably: removing items",
        "text": "Changing an array observably: removing items\nIf you pass an array to $.observable(), you obtain an observable array (a very lightweight wrapper around your array) which provides methods for modifying the array observably, including a remove() method:\n"
      },
      {
        "_type": "api",
        "title": "$.observable(myArray).remove(index, numToRemove)",
        "text": "$.observable(myArray).remove(index, numToRemove)\nRemove one or more items from an array\nObservably remove one or more items from an array\n\n$.observable(people).remove(3, 2);\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Removing the last item in the array",
        "text": "Sample: Removing the last item in the array\nHere is a sample using remove() to remove the last item to an array.\nA data-linked template responds to the observable array changes.\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\nvar tmpl = $.templates(\"id: {{:id}}\");\n\ntmpl.link(\"#result\", things);\n\nRemove the last item:\n\n$.observable(things).remove();\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Removing an item at a specified index:",
        "text": "Sample: Removing an item at a specified index:\nHere we’ll add an event handler for arrayChange to respond to the observable array changes, in addition to the template:\nAnd we’ll remove an item at a specified index.\n"
      },
      {
        "_type": "sample",
        "title": "Observable array change - remove item at chosen index",
        "text": "Observable array change - remove item at chosen index\n\n$([things]).on(\"arrayChange\", changeHandler);\n\nRemove item at index 0 or index 1:\n\n$.observable(things).remove(0);\n...\n$.observable(things).remove(1);\n\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Removing one or more items at a chosen index",
        "text": "Sample: Removing one or more items at a chosen index\nHere we modify the sample above, by specifying the number of items to remove. We’ll also show the alternative $.observe() API for attaching our handler:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n$.observe(things, changeHandler);\n\nRemove two items at index 0:\n\n$.observable(things).remove(0, 2);\n\n\n"
      }
    ]
  },
  "refresh": {
    "sections": [
      {
        "_type": "para",
        "title": "Changing an array observably: replacing all the items",
        "text": "Changing an array observably: replacing all the items\nIf you pass an array to $.observable(), you obtain an observable array (a very lightweight wrapper around your array) which provides methods for modifying the array observably, including a refresh() method:\n"
      },
      {
        "_type": "api",
        "title": "$.observable(myArray).refresh(newItems)",
        "text": "$.observable(myArray).refresh(newItems)\nRefresh an array with a modified or sorted set of items\nObservably refresh the contents of an array\n\n$.observable(people).refresh(newItems);\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Refreshing items in an array (replace or sort)",
        "text": "Sample: Refreshing items in an array (replace or sort)\nHere is a sample using refresh() to replace items within an array.\nA data-linked template responds to the observable array changes. And we’ll also add an event handler for arrayChange to respond to the observable array changes:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n$([things]).on(\"arrayChange\", changeHandler); \n\nReplacing with the same items in different order:\n\n$.observable(things).refresh(\n  things.reverse()\n);\n\nReplacing with a different set of items\n\n$.observable(things).refresh(\n  (things.length === 5 ? otherItems : items)\n);\n\n\n"
      }
    ]
  },
  "move": {
    "sections": [
      {
        "_type": "para",
        "title": "Changing an array observably: moving items",
        "text": "Changing an array observably: moving items\nIf you pass an array to $.observable(), you obtain an observable array (a very lightweight wrapper around your array) which provides methods for modifying the array observably, including a move() method:\n"
      },
      {
        "_type": "api",
        "title": "$.observable(myArray).move(oldIndex, newIndex, numToMove)",
        "text": "$.observable(myArray).move(oldIndex, newIndex, numToMove)\nMove one or more items in an array\nObservably move an item, or sequence of items, in an array.\n\n$.observable(people).move(3, 5, 2);\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Moving items in an array",
        "text": "Sample: Moving items in an array\nHere is a sample using move() to move items within an array.\nA data-linked template responds to the observable array changes. And we’ll also add an event handler for arrayChange to respond to the observable array changes:\n"
      },
      {
        "_type": "sample",
        "title": "",
        "text": "\n$([things]).on(\"arrayChange\", changeHandler); \n\nMoving one item from index 2 to index 0:\n\n$.observable(things).move(2, 0);\n\nMoving two items from index 0 to index 1:\n\n$.observable(things).move(0, 1, 2);\n\n"
      }
    ]
  },
  "observeobjectsarrays": {
    "sections": [
      {
        "_type": "links",
        "title": "Handling change events for objects and arrays:",
        "text": "Handling change events for objects and arrays:\n"
      }
    ]
  },
  "onpropchange": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews and JsObservable raise a jQuery event: “propertyChange”, whenever an object changes observably.\nTo handle the propertyChange changes you have two alternatives:\n\nuse jQuery .on() to attach an event handler to the object\nuse $.observe() to associate a handler with the object, or with a path including the object\n"
      },
      {
        "_type": "code",
        "title": "Using jQuery .on()",
        "text": "Using jQuery .on()\n$(myObject).on(\"propertyChange\", myHandler);\n"
      },
      {
        "_type": "para",
        "title": "Using <a href=\"#observe\">$.observe()</a>",
        "text": "Using $.observe()\n$.observe(myObject, \"*\" , changeHandler); // Choose path \"*\" to listen to changes on all properties of myObject \n\nThis approach also brings some advantages if you want to listen to changes on more than one object or array, or if you want to listen to “deep changes” on a path – i.e. changes not only on the leaf, but on objects higher up the path…\n"
      },
      {
        "_type": "api",
        "title": "function myHandler(ev, eventArgs) { ... }",
        "text": "function myHandler(ev, eventArgs) { ... }\nAn event handler for propertyChange events\nHandler for JsViews observable property change events\n\n$(person).on(\"propertyChange\", myHandler); \n\n"
      },
      {
        "_type": "sample",
        "title": "Handling property change events",
        "text": "Handling property change events\nAdd a handler for propertyChange events on the person object:\n$(person).on(\"propertyChange\", changeHandler); \n\nfunction changeHandler(ev, eventArgs) {\n  var message = ... + eventArgs.path + ... + eventArgs.value ...;\n  ...\n}\n\n\n"
      }
    ]
  },
  "onarrchange": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsViews and JsObservable raise a jQuery event: “arrayChange”, whenever an array changes observably.\nTo handle the arrayChange changes you have two alternatives:\n\nuse jQuery .on() to attach an event handler to the array\nuse $.observe() to associate a handler with the array, or with a path including the array\n"
      },
      {
        "_type": "para",
        "title": "Using jQuery .on()",
        "text": "Using jQuery .on()\n$([myArray]).on(\"arrayChange\", myHandler);\n\n(Note the syntax with the wrapped array: $([myArray]).on();. If you write $(myArray).on(); you will be listening to each item in the array, not to the array itself).\n"
      },
      {
        "_type": "para",
        "title": "Using <a href=\"#observe\">$.observe()</a>",
        "text": "Using $.observe()\n$.observe(myArray, changeHandler); \n\nThis approach also brings some advantages if you want to listen to changes on more than one object or array, or if you want to listen to “deep changes” on a path – i.e. changes not only on the leaf, but on objects higher up the path…\n"
      },
      {
        "_type": "api",
        "title": "function myHandler(ev, eventArgs) { ... }",
        "text": "function myHandler(ev, eventArgs) { ... }\nAn event handler for arrayChange events\nHandler for JsViews observable array change events\n\n$([myArray]).on(\"arrayChange\", myHandler); \n\n"
      },
      {
        "_type": "para",
        "title": "Samples for the <b>handling array change events</b>:",
        "text": "Samples for the handling array change events:\nEach of the following API topics includes samples showing the arrayChange event handler for the corresponding type of array change:\n\n$.observable(array).insert()\n$.observable(array).remove()\n$.observable(array).move()\n$.observable(array).refresh()\n"
      }
    ]
  },
  "observe": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Whenever objects or arrays are changed observably, JsViews raises the corresponding propertyChange or arrayChange jQuery event.\nData-linked templates respond to those events automatically, but if you want to run code in response to data-change events you have two alternatives:\n\nuse jQuery .on() to attach the propertyChange or arrayChange event handler to any object or array you want to 'listen to'\nuse $.observe() to associate a handler with one or more objects, arrays, or paths\n"
      },
      {
        "_type": "para",
        "title": "Using $.observe()",
        "text": "Using $.observe()\n$.observe(myObjectOrArray, ..., changeHandler);\n\nThis approach allows you to register a single handler to listen to changes on multiple targets, which can include both objects and arrays.\n"
      },
      {
        "_type": "para",
        "title": "Examples:",
        "text": "Examples:\n1. Observe changes to a specific property:\n$.observe(person, \"firstName\", changeHandler);\n\n2. Observe changes to a specific property of type array:\n$.observe(person, \"phones\", changeHandler);\n\nHere changeHandler will handle both:\n\narray changes, and \nsetting a new value to the property (switching to a new array, or setting to null or undefined)\n\n3. Observe changes to any property on an object:\n$.observe(person, \"*\", changeHandler);\n\n4. Observe changes on an array:\n$.observe(person.phones, changeHandler); \n\n5. Observe multiple objects/properties/arrays:\n$.observe(person, \"lastName\", \"phones\", \"address.street\", changeHandler);\n\nHere changeHandler will handle both:\n\nchanges to lastName \narray changes to the current phones (array), or changes if a new array is assigned to the phones property\nchanges to the street property of the address property of person\n\n6. Observe paths under more than object:\n$.observe(person1, \"lastName\", \"address.*\", person2, \"firstName\", person3, \"*\", \"address.*\", changeHandler);\n\nHere changeHandler handles:\n\nfor person1: changes to lastName and any address property \nfor person2: changes to firstName\nfor person3: changes to any property of the person3 object itself, and to any property of the person3.address object\n\n"
      },
      {
        "_type": "para",
        "title": "Chained paths: leaf changes or deep changes",
        "text": "Chained paths: leaf changes or deep changes\nBy default you listen to the leaf of a path, but you can specify if you want to listen also to changes on objects higher up the path…\nFor example, here:\n$.observe(team, \"manager.address.street\", changeHandler);\n\nchangeHandler will be called if the value of the street property of the team.manager.address object changes. So it is listening to leaf changes on the path “manager.address.street”.\nIt will not be called if the team.manager property is swapped to a different manager object, or if the team.manager.address property is swapped to a different address object.\nBut by a simple syntax change, the path can be made to listen to changes not only on the leaf property, but also changes on objects higher up the path. These are deep changes on the path:\nFor example, this path:\n$.observe(team, \"manager.address^street\", changeHandler);\n\nwill listen to changes to the street property of address, or the address property of manager.\nAnd the following:\n$.observe(team, \"manager^address.street\", changeHandler);\n\nwill listen to changes to the street property of address, the address property of manager, and the manager property of team.\nSimply replace a . with a ^ at the level up to which you want to listen to changes.\n(If you know that in your app the objects higher up the path will never change dynamically, then stick with the default leaf binding, since that will provide better perf optimization…)\nSee samples below.\nSee also the related discussion and examples on data-linking to deep changes, within data-linked templates.\n"
      },
      {
        "_type": "para",
        "title": "Observing <b>all</b> changes under an object",
        "text": "Observing all changes under an object\nThe * (any wild card symbol) let’s you observe changes to any property (e.g. \"manager.*\" for changes to any property of manager).\nSimilarly the ** (all wild card symbol) let’s you observe all observable changes under a chosen object or array – at any depth.\nYou can write paths such as \"**\", \"some.objectOrArray.**\", \"some^objectOrArray.**\", or even \"some.objectOrArray^**\".\nFor example, this:\n$.observe(team, \"**\", changeHandler);\n\nwill listen to all changes (to any depth) under the team object (for example, changes to the team.manager, team.manager.address or team.manager.address.street properties), and also changes to the team.members property (swapping to another array) – and even to array changes to team.members (adding or removing a member…).\nAnd this:\n$.observe(team, \"manager.address.**\", \"manager.members.**\", changeHandler);\n\nwill listen to all changes (to any depth) under manager.address, and also to all array changes to the manager.members array, and to any changes to objects or arrays under the manager.members array.\nIncluding the ‘^’ alongside the ‘**’ allows you to specify deep paths along with observeAll behavior, such as:\n\"manager.address^**\"\n\nwhich will listen to changing the manager.address to another address object, as well as to all changes (at any depth) under manager.address.\nSee third sample below.\n"
      },
      {
        "_type": "para",
        "title": "Two ways to 'observeAll': the ** wild card and the $.observeAll() API",
        "text": "Two ways to 'observeAll': the ** wild card and the $.observeAll() API\nInternally, using ** actually calls the observeAll() API.\nIn fact:\n$.observe(team, \"**\", callback);\n\nis actually equivalent to:\n$.observable(team).observeAll(callback);\n\nThe first approach can be convenient for combining multiple paths (with or without **) using the same callback.\n"
      },
      {
        "_type": "api",
        "title": "$.observe(objectOrArray, ..., myHandler)",
        "text": "$.observe(objectOrArray, ..., myHandler)\nRegister a handler for observable changes on one or more objects or data paths\nHandle observable property or array change events\n\n$.observe(person, \"address.street\", myHandler); \n\nHandle all property change events on an object\n\n$.observe(person, \"*\", myHandler); \n\nHandle array change events on an array\n\n$.observe(phones, myHandler); \n\n"
      },
      {
        "_type": "api",
        "title": "function myHandler(ev, eventArgs) { ... }",
        "text": "function myHandler(ev, eventArgs) { ... }\nAn event handler for observable data changes - registered using $.observe(...) or $.observable(object).observeAll(...)\nHandler for observable property or array change events\n\n$.observe(person, \"address.street\", myHandler); \n\n"
      },
      {
        "_type": "para",
        "title": "Samples:",
        "text": "Samples:\nHere is a sample showing $.observe(person, \"name\", \"address^*\", changeHandler);\n"
      },
      {
        "_type": "sample",
        "title": "Handling change events using $.observe()",
        "text": "Handling change events using $.observe()\nRegister a handler for changes: \nWe handle changes in the name  and address properties of the person, and any property of the address:\n$.observe(person, \"name\", \"address^*\", changeHandler);\n\n\nDefine the handler:\n\nfunction changeHandler(ev, eventArgs) {\n  var message = ... + eventArgs.path + ... + eventArgs.value ...;\n  ...\n}\n\nTemplate also binds to 'deep paths'\n\n\n\nModify values through template binding or buttons:\n\n$(\"#changeAddress\").on(\"click\", function() {\n  $.observable(person).setProperty(\n    \"address\", \n    {\n      street: \"New Street\",\n      ZIP: \"99999\"\n    }\n...\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Now we modify the above sample to show $.observe(person, ...) also handling array properties: a phones property of person\n"
      },
      {
        "_type": "sample",
        "title": "Handling both property change and array change events, using $.observe()",
        "text": "Handling both property change and array change events, using $.observe()\nRegister a handler for changes: \nWe handle changes in the name, address and phones properties of the person, and the street property of the address.\nBecause the phones property is itself an array, we also handle array changes on the phones array:\n$.observe(person, \"name\", \"address^street\", \"phones\", changeHandler);\n\n\nDefine our handler:\n(Note that it outputs all the fields of eventArgs)\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  for (var key in eventArgs) {\n    message += ... key ... eventArgs[key]...\n  }\n  ...\n}\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "But notice that if you change the value of a phone number, our handler does not ‘listen’ to that change.\nIn the next sample we solve that by listening to all changes under phones, thanks to the ** wild card.\n"
      },
      {
        "_type": "sample",
        "title": "Observing <b>all</b> changes under a path: $.observe() with **",
        "text": "Observing all changes under a path: $.observe() with **\nWe modify the previous sample by replacing the \"phones\" path with \"phones^**\":\n$.observe(person, \"name\", \"address^street\", \"phones^**\", changeHandler);\n\nSo now we observe not only replacing the phones array and making array changes to the phones array – but also any change under phones, such as changing a phones[n].name property.\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "Note that instead of using the ** wild card, we could have used the observeAll() API directly – as shown in the last sample of the observeAll() API topic.\n"
      },
      {
        "_type": "para",
        "title": "$.observe() with computed observables",
        "text": "$.observe() with computed observables\nNext, we’ll modify the last sample to show only a computed observable fullName(reverse) depending on firstName and lastName.\nWe’ll observe changes to fullName():\n$.observe(person, \"fullName\", changeHandler);\n\n(Note: The path for observing a computed observable has no parens – so \"fullName\" rather than \"fullName()\".)\n"
      },
      {
        "_type": "sample",
        "title": "Observing a computed observable",
        "text": "Observing a computed observable\nObserve changes to fullName() computed observable:\n$.observe(person, \"fullName\", changeHandler);\n\n– which will trigger whenever firstName or lastName change, since fullName() has them as dependencies:\nfullName.depends = [\"firstName\", \"lastName\"]; \n\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "unobserve": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "A single call to $.observe(... myHandler) will attach the handler to one or more objects and arrays – to listen to corresponding propertyChange or arrayChange events.\nThe same call (same parameters) but with $.unobserve(...) instead of $.observe(...) will remove the handler from each of those objects.\n"
      },
      {
        "_type": "api",
        "title": "$.unobserve(objectOrArray, ..., myHandler)",
        "text": "$.unobserve(objectOrArray, ..., myHandler)\nUnregister a handler for observable changes on one or more objects or data paths\nRemove handler for observable  changes on specific paths\n\n$.unobserve(person, \"address.street\", myHandler); \n\nRemove all handlers for all observable changes to target object/array\n\n$.unobserve(person); \n\nRemove any handlers targetting specific properties or paths\n\n$.unobserve(person, \"address.street\");\n\n"
      },
      {
        "_type": "para",
        "title": "Samples:",
        "text": "Samples:\nHere is a copy of a sample from the $.observe() topic, on which we have used observe/unobserve to provide an enable/disable checkbox on the Change Log:\n"
      },
      {
        "_type": "sample",
        "title": "Using $.unobserve() to remove handlers",
        "text": "Using $.unobserve() to remove handlers\n<input type=\"checkbox\" checked id=\"attach\"/>\n\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n\n\nCall unobserve() with the same paths and handler, to stop 'listening'...\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observe(person, \"name\", \"address^*\", changeHandler);\n  } else {\n    $.unobserve(person, \"name\", \"address^*\", changeHandler);\n  }\n}\n\n"
      },
      {
        "_type": "para",
        "title": "$.unobserve() variants",
        "text": "$.unobserve() variants\nOmitting the handler and paths:\n$.unobserve(object)\n\nThe above call will remove all change handlers from the object. For example, if you choose Try it in the sample above, and replace the unobserve call by $.unobserve(person); you’ll see that unchecking has the effect of removing JsViews data-link binding in the template too.\nOmitting handler but keeping paths:\n$.unobserve(person, \"name\");\n\nThe above call will remove all bindings of person.name, so choosing Try it and making that change will stop the name binding for both template and message log, but both will continue to respond to changes in address or zip.\nunobserve using “*”:\n$.unobserve(person, \"*\", changeHandler);\n\nThe above call will remove handlers for all properties of person, so choosing Try it and making that change will stop the changes to name or setting the address from showing in the log, but changes in street or zip on the address object will still show.\nunobserving arrays, or multiple objects\n$.unobserve(person, \"name\", person.phones, changeHandler);\n\nThe above call will stop handing changes to person.name, and will stop listening to array change events on the person.phones array. You can test it by choosing Try it on the sample below, (based on the last sample in the $.observe() topic):\nAnd this variant is almost the same:\n$.unobserve(person, \"name\", \"phones\", changeHandler);\n\n– but in addition it will stop listening to setting the phones property of person\n"
      },
      {
        "_type": "sample",
        "title": "Modified sample showing also unobserve() for arrays:",
        "text": "Modified sample showing also unobserve() for arrays:\nCall unobserve with the same paths and handler, to stop 'listening'..\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observe(person, \"name\", \"address^street\", \"phones\", changeHandler);\n  } else {\n    $.unobserve(person, \"name\", \"address^street\", \"phones\", changeHandler);\n  }\n}\n\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "$observable": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "In current JavaScript implementations, modifying objects or arrays does not raise any event, so there is no way for the change to be detected elsewhere.\nJsViews dynamic data-bound UI solves this through data-linking, using the JsObservable observer pattern.\n$.observable() provides a way for you to change objects or arrays observably. Each change will raise a property change or array change event.\nJsViews uses those events to make any data-linked tags or elements in your templates update automatically in response to each change in your underlying data.\nIn addition, it ensures that those events are raised when the user interacts with a data-linked template, and causes changes to the underlying data.\nJsViews also lets you register event handlers or listeners, so your code can listen to the observable changes made to your data objects or view models.\n"
      },
      {
        "_type": "para",
        "title": "$.observable(myObject) and $.observable(myArray)",
        "text": "$.observable(myObject) and $.observable(myArray)\nIf you pass an object to $.observable() then you obtain an observable object (a very lightweight wrapper around your object), which provides a method for modifying object properties observably:\n\nsetProperty\n\nSimilarly, if you pass an array to $.observable() then you obtain an observable array (a lightweight wrapper around your array) which provides a different set of methods, specific to modifying arrays:\n\ninsert\nremove\nmove\nrefresh\n\nNote that you don’t need hold on to the observable wrapped object for reuse. It is so lightweight you can just call $.observable(...) again every time you need to make further changes to your object or array.\n"
      }
    ]
  },
  "observeAll": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "The .observeAll() API allows you to register a single handler to listen to all the changes under a chosen object or array.\nThis means that no matter how complex the hierarchy of objects under the targeted object or array, and no matter how complex the structural changes made to that object hierarchy, the handler will continue to listen to any change on any object or array in the tree.\n$.observable(myObjectOrArray).observeAll(myHandler)\n\n"
      },
      {
        "_type": "api",
        "title": "$.observable(objectOrArray).observeAll(myHandler)",
        "text": "$.observable(objectOrArray).observeAll(myHandler)\nRegister an event handler to observe all changes in an object and on any nested object or array in the 'object graph'  under it\nObserve all changes under an object or array\n\n$.observable(person).observeAll(myHandler)\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The myHandler function registered using the .observeAll() is identical to the handler used with $.observe():\n"
      },
      {
        "_type": "api",
        "title": "function myHandler(ev, eventArgs) { ... }",
        "text": "function myHandler(ev, eventArgs) { ... }\nAn event handler for observable data changes - registered using $.observe(...) or $.observable(object).observeAll(...)\nHandler for observable property or array change events\n\n$.observe(person, \"address.street\", myHandler); \n\n"
      },
      {
        "_type": "para",
        "title": "Sample:",
        "text": "Sample:\nWe’ll use the observeAll() API to provide an alternative version of our last sample in the $.observe() topic.\nThis allows us to include listening to newly added items in the phone array.\n(But in this version we use $observeAll() directly, rather than using the ** wild card as we did in that sample.)\n"
      },
      {
        "_type": "sample",
        "title": "Handling both property change and array change events, using .observeAll()",
        "text": "Handling both property change and array change events, using .observeAll()\nA single observeAll() call for observing all the objects\nEven phone objects added to the phones array will automatically be ‘listened’ to by our handler, without us needing to write any additional code.\n$.observable(person).observeAll(changeHandler);\n\n\nDefine our handler:\n\nfunction changeHandler(ev, eventArgs) {\n  var message = \"\";\n  if (ev.data.observeAll) {\n    message += \"observeAll path: \" + ev.data.observeAll.path() + \"\"\n  }\n  for (var key in eventArgs) {\n    message += ... key ... eventArgs[key]...\n  }\n  ...\n}\n\n"
      },
      {
        "_type": "para",
        "title": "observeAll() with View Model object hierarchies",
        "text": "observeAll() with View Model object hierarchies\nThe observeAll() API works equally well with View Model objects or plain objects. See Plain objects or View Model. At the end of that topic we show our observeAll() sample above, using View Model objects.\n"
      },
      {
        "_type": "para",
        "title": "observeAll() and \"**\" paths",
        "text": "observeAll() and \"**\" paths\nAs an alternative to using the observeAll() API, it is sometimes simpler to use the ** all wild card path in association with $.observe(), or with computed observables, as shown here and here.\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "unobserveAll": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "Just as $.observable(objectOrArray).observeAll(myHandler) will traverse the whole hierarchy of objects or arrays under the root objectOrArray and attach the handler to each object, similarly $.observable(objectOrArray).unobserveAll(myHandler) will traverse the whole hierarchy and remove the handler from any object to which it has been attached.\n"
      },
      {
        "_type": "api",
        "title": "$.observable(objectOrArray).unobserveAll(myHandler)",
        "text": "$.observable(objectOrArray).unobserveAll(myHandler)\nRemove a handler for observable changes, from an object or array, and from any nested objects or arrays under it\nRemove handler from object/array and from all nested objects\n\n$.observable(person).unobserveAll(myHandler); \n\nRemove all handlers for observable changes, from  an object/array and from all nested objects\n\n$.observable(person).unobserveAll(); \n\n"
      },
      {
        "_type": "para",
        "title": "Samples:",
        "text": "Samples:\nHere is a copy of a sample from the .observeAll() topic, on which we have used observeAll/unobserveAll to provide an enable/disable checkbox on the Change Log:\n"
      },
      {
        "_type": "sample",
        "text": "<input type=\"checkbox\" checked id=\"attach\"/>\n\n$(\"#attach\").on(\"click\", function(x) {\n  logChanges(this.checked);\n});\n\n\nCall unobserveAll() on the root, to stop 'listening'...\n\nfunction logChanges(enable) {\n  if (enable) {\n    $.observable(person).observeAll(changeHandler);\n  } else {\n    $.observable(person).unobserveAll(changeHandler);\n  }\n}\n\n"
      },
      {
        "_type": "para",
        "title": "$.unobserveAll() variant",
        "text": "$.unobserveAll() variant\nOmitting the handler:\n$.observable(objectOrArray).unobserveAll()\n\nThe above call will remove all change handlers from the object, and any nested objects.\nTo test it, you can choose Try it in the sample above, and replace the unobserveAll call by $.observable(person).unobserveAll();\nYou’ll see that unchecking will then have the effect of removing not only the logging handler, but also the JsViews data-link binding handler used in the template. Now, changes will trigger neither log messages, nor template updates.\n"
      },
      {
        "_type": "para",
        "title": "unobserveAll() with View Model object hierarchies",
        "text": "unobserveAll() with View Model object hierarchies\nThe unobserveAll() API works equally well with View Model objects or plain objects. See Plain objects or View Model. At the end of that topic we show our unobserveAll() sample above, using View Model objects.\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  },
  "computed": {
    "sections": [
      {
        "_type": "para",
        "title": "",
        "text": "JsRender templates can include computed properties, such as:\n\nperson.firstName(): a computed ‘getter’ property which returns a private _firstName\nperson.fullName(): a computed property which concatenates (and perhaps formats) first and last name.\nexpenses.total(): a computed property which gives the total for a property/column of an array of items.\n\nSee the samples Getter properties with plain objects and Getter properties on View Model.\nJsObservable and JsViews provide support for making computed properties observable, so that in a data-linked template you can bind directly to computed properties, provide two-way data-binding, etc.\n"
      },
      {
        "_type": "para",
        "title": "Computed observable: get / set",
        "text": "Computed observable: get / set\nTo make person.firstName() into a computed observable, with two-way data-binding, specify an associated ‘setter’ function:\nfunction firstName() {\n  return this._firstName; // Get the firstName\n}\n\nfirstName.set = function(val) {\n  this._firstName = val; // Set the firstName\n}\n\nThe firstName() computed observable can be modified observably, either by calling setProperty:\n$.observable(person).setProperty(\"firstName\", \"updatedFirstName\");\n\nor by two-way binding in a template:\n<input data-link=\"firstName()\" />\n\nand if used in a tag expression in a data-linked templates it will update automatically in response to observable changes:\nFirst name: {^{:firstName()}}\n\n<span data-link=\"firstName()\"></span>\n\n$.observe() can be used to listen to observable changes in a computed observable:\nThe following sample shows all of these scenarios:\n"
      },
      {
        "_type": "sample",
        "title": "get/set",
        "text": "get/set\nCode:\nfunction firstName() { return this._firstName; } // Getter (with _firstName as private property)\n\nfirstName.set = function(val) { this._firstName = val; }; // Provide a setter\n\n$.observable(person).setProperty(\"firstName\", person.firstName() + \"+\"); // Modify firstName() observably\n\n$.observe(data.person, \"firstName\", function(ev, evArgs) {\n  ... // Listen to observable changes in firstName()\n});\n\nTemplate:\n<input data-link=\"person.firstName()\" />\n{^{:person.firstName()}}\n<em data-link=\"person.firstName()\"></em>\n\n\n"
      },
      {
        "_type": "para",
        "title": "Get/set properties on a View Model",
        "text": "Get/set properties on a View Model\nRather than using plain JavaScript objects with getter functions, as above, a more common pattern (providing better encapsulation) would be to define a ‘View Model’ class, and to instantiate that class to provide data instances.\nSee Plain objects or View Model for a full discussion of using View Models with JsRender and JsViews.\nHere is a modified version of the above sample, using a View Model Person class, rather than plain objects:\n"
      },
      {
        "_type": "sample",
        "title": "get/set &ndash; View Model",
        "text": "get/set – View Model\nCode:\nfunction firstName() { return this._firstName; } // Getter (with _firstName as private property)\n\nfirstName.set = function(val) { this._firstName = val; }; // Provide a setter\n\n// Person class\nfunction Person(firstName) {\n  this._firstName = firstName;\n}\n\nPerson.prototype = {\n  firstName: firstName\n};\n\nvar data = {\n  person: new Person(\"Jo\")\n};\n\nTemplate:\n<input data-link=\"person.firstName()\" />\n{^{:person.firstName()}}\n<em data-link=\"person.firstName()\"></em>\n\n\n"
      },
      {
        "_type": "para",
        "title": "Computed observable: get &ndash; depends",
        "text": "Computed observable: get – depends\nThe firstName() example above is probably the most common type of computed observable: a get/set property depending on a corresponding ‘private’ property.\nAnother very common use of computed observables is for read-only computed properties that may depend on more than one other property.\nThe  following sample illustrates that, with a person.fullName() computed property which concatenates the computed firstName() and a regular (non-computed) lastName property.\nThis type of computed observable consists simply of a getter function, and a specification of the dependencies – i.e. the other observable properties which the getter function depends on:\nfunction fullName() { return this.firstName() + \" \" + this.lastName; }\n\nfullName.depends = [\"firstName\", \"lastName\"];\n\nThe depends specification above means that whenever firstName() or lastName change, an observable change event for fullName() will also be triggered, and fullName() will be recalculated.\n"
      },
      {
        "_type": "sample",
        "title": "get &ndash; depends",
        "text": "get – depends\nCode:\nfunction fullName() { return this.firstName() + \" \" + this.lastName; } // getter\n\nfullName.depends = [\"firstName\", \"lastName\"]; // Dependencies\n\n$.observe(data.person, \"fullName\", function(ev, evArgs) {\n  ... // listen to changes in fullName()\n});\n\nTemplate:\n{^{:person.fullName()}}\n<em data-link=\"person.fullName()\"></em>\n\n\n"
      },
      {
        "_type": "para",
        "title": "Computed observable: get / set &ndash; depends",
        "text": "Computed observable: get / set – depends\nSometimes a computed observable may depend on other observables, and also have a setter defined.\nFor example we may want to allow two-way binding to fullName() – with a setter which looks for white-space in the provided string and reassigns the preceding and following text to firstName and lastName – so an observable change to fullName automatically triggers appropriate observable changes to firstName and lastName:\n"
      },
      {
        "_type": "sample",
        "title": "get/set &ndash; depends",
        "text": "get/set – depends\nCode:\nfunction fullName() { return this.firstName() + \" \" + this.lastName; }\n\nfullName.set = function(val) { \n  val = val.split(\" \");\n  // Make observable change to dependent properties\n  $.observable(this).setProperty({\n    lastName: val.pop(),\n    firstName: val.join(\" \")\n  });\n};\n\nfullName.depends = [\"firstName\", \"lastName\"];\n\nTemplate:\n<input data-link=\"person.fullName()\" />\n{^{:person.fullName()}}\n<em data-link=\"person.fullName()\" ></em>\n\n\n"
      },
      {
        "_type": "para",
        "title": "Computed observable with parameters",
        "text": "Computed observable with parameters\nA computed observable function myComputed(a, b, c) may take parameters. For example:\nfunction fullName(reverse) {\n return reverse\n   ? this.lastName() + \" \" + this.firstName\n   : this.firstName + \" \" + this.lastName();\n}\n\nfullName.depends = [\"firstName\", \"lastName\"];\n\nThe computed value might be used in a data-linked expression in a template, with a specific value passed in as parameter:\n{^{:person.fullName(true)}}\n\n(You can see an example of this in the samples/computed/fullName samples.)\nPassed-in parameters may be observable values – in which case whenever they change observably, the computed observable will update automatically. For example:\n{^{:person.fullName(~settings.reverseName)}}\n\nThe value of a computed observable (person.fullName(...) above) will update whenever either an observable parameter (in this case: ~setting.reverseName) or a dependency (firstName or lastName) change.\nHere is a working example:\n"
      },
      {
        "_type": "sample",
        "title": "get/set &ndash; depends, with parameters",
        "text": "get/set – depends, with parameters\nCode:\nfunction fullName(reverse) {\n  return reverse\n    ? this.lastName + \" \" + this.firstName()\n    : this.firstName() + \" \" + this.lastName;\n}\n\nTemplate:\n{^{:person.fullName(~settings.reverseName)}}\n\n<em data-link=\"person.fullName(~settings.reverseName)\" ></em>\n\n\n"
      },
      {
        "_type": "para",
        "title": "",
        "text": "The computed fullName(reverse) above takes a parameter, reverse, but note that for read-write computed properties (get/set), you cannot pass additional parameters to the setter. (So in the example above is the setter is still fullName.set = function(val) {...}.) Indeed, clicking on the Reverse name checkbox does not reverse the name in the Full name text box.\nTo achieve that functionality, we need to include \"~settings.reverseName\" as a path in the fullName.depends declaration, rather than passing it in as a parameter:\n"
      },
      {
        "_type": "sample",
        "title": "get/set &ndash; depends (with ~settings.reverseName in depends)",
        "text": "get/set – depends (with ~settings.reverseName in depends)\nfunction fullName() {\n  return settings.reverseName ? ... : ...;\n}\n\nfullName.set = function(val) {\n  ...\n  $.observable(this).setProperty({\n    lastName: settings.reverseName ? ... : ...,\n    firstName: settings.reverseName ? ... : ...\n  });\n};\n\nfullName.depends = [\"firstName\", \"lastName\", \"~settings.reverseName\" ];\n\nvar settings = {reverseName: false};\n\ntmpl.link(\"#result\", data, {settings: settings});\n\n\n"
      },
      {
        "_type": "para",
        "title": "Declaring dependencies for a computed observable",
        "text": "Declaring dependencies for a computed observable\nWhen setting\nmyObservableFunction.depends = dependencyExpression;\n\nfor a computed observable, the dependencyExpression can be a string, such as:\n\n\"firstName\", or\n\"manager^address*\"\n\nor an array of strings (or objects and strings), such as:\n\n[\"firstName\", \"lastName\", \"~settings.reverseName\"] or\n[\"firstName\", \"lastName\", settings, \"reverseName\"]\n\n(The last two are equivalent, assuming the settings object is the helper object referenced declaratively using \"~settings\".)\nIn fact setting depends to an array is equivalent to providing the corresponding arguments to $.observe(). So all the examples of $.observe() (including with deep paths) can also be used in equivalent depends expressions. For example you might have:\nmyObservableFn.depends = [person1, \"lastName\", \"address^*\", person2, \"firstName\", person3, \"*\", \"address.*\"];\n\n– which is similar to the example #6 in the $.observe() examples – and includes a deep path \"address^*\" (listening to changes in the address property of the person1 object and changes to any properties of the person1.address object).\nIn addition, depends expressions can be functions.\nA depends function can return strings or arrays:\nmyObservableFn.depends = function(data) {\n  return [data.person1, \"lastName\", \"address.*\", data.person2, \"firstName\"];\n}\n\n– and/or can use a callback:\nmyObservableFn.depends = function(data, callback) {\n  $.observable(data.person).observeAll(callback);\n  // (In addition to calling the callback, can optionally also return a string or array)\n}\n\nNote that this last example, (using observeAll to call the callback) is a programmatic approach which is actually equivalent to the following declarative version:\nmyObservableFn.depends = \"person.**\";\n\n"
      },
      {
        "_type": "para",
        "title": "Sample: Using the <b>**</b> wild card in <b>depends</b>",
        "text": "Sample: Using the ** wild card in depends\nIn the next sample we’ll use the ** wild card in a depends declaration for a computed observable that tracks the running total of some items in a shopping cart.\nThis sample also illustrates top-level data-linking, and declarative events.\n(For more information see the same sample here: samples/computed/shopping-cart)\n"
      },
      {
        "_type": "sample",
        "title": "Shopping cart",
        "url": "samples/computed/shopping-cart/top-level",
        "text": "Shopping cart\nHere we define a totalAmount() computed observable for calculating the total amount for an array of items in a shopping cart.\nfunction totalAmount() {\n  ...\n  while (...) {\n    amount += this.items[l].price * this.items[l].quantity;\n  }\n  return amount;\n}\n\nvar cart = {\n  total: totalAmount,\n  ...\n  items: [...]\n}\n\nThe total is rendered using:\n<span colspan=\"2\" data-link=\"total()\"></span>\n\n(In this example we are using top-level data-linking.)\n\ndepends with **\ntotalAmount() needs to update when the items array changes, and also when the quantity or price property of an item in the array changes.\nWe can achieve that very easily by declaring the items.** path as a dependency:\ntotalAmount.depends = \"items.**\";\n\n\nvar shoppingCart = {\r\n  add: addItem,\r\n  remove: removeItem,\r\n  total: totalAmount,\r\n  items: [\r\n    {product: \"Pot\", price:  10, quantity: 3},\r\n    {product: \"Kettle\", price:  15.5, quantity: 23}\r\n  ],\r\n  show: true\r\n};\r\n\r\nfunction addItem() {\r\n  $.observable(this.items).insert({\r\n    product: \"new\",\r\n    price:  1,\r\n    quantity: 1\r\n    });\r\n}\r\n\t\r\nfunction removeItem(ev, eventArgs) {\r\n  $.observable(this.items).remove(eventArgs.view.index);\r\n}\r\n\r\nfunction totalAmount() {\r\n  var amount = 0,\r\n    l = this.items.length;\r\n  while (l--) {\r\n    amount += this.items[l].price * this.items[l].quantity;\r\n  }\r\n  return amount;\r\n}\r\n\r\ntotalAmount.depends = \"items.**\";\r\n// totalAmount depends on any changes under the items array\r\n\r\n$.link(true, \"#shoppingcart\", shoppingCart);\r\n\n<title>Computed observable - Shopping cart</title>\r\n\r\n<table id=\"shoppingcart\" class=\"nowidth\" style=\"display:none\" data-link=\"visible{:show}\">\r\n<thead>\r\n  <tr><td>Product</td><td>Price</td><td>Quantity</td><td>Amount</td></tr>\r\n</thead>\r\n<tbody data-link=\"{for items tmpl='#itemTmpl'}\"></tbody>\r\n<tfoot>\r\n  <tr><td colspan=\"3\">No. of items:\r\n    <span data-link=\"items.length\"></span>\r\n  </td>\r\n  <td class=\"add\" data-link=\"{on add}\">Add</td></tr>\r\n  <tr><td colspan=\"4\">Total amount:\r\n    <span colspan=\"2\" data-link=\"total()\"></span>\r\n  </td></tr>\r\n</tfoot>\r\n</table>\r\n\r\n<script id=\"itemTmpl\" type=\"text/x-jsrender\">\r\n  <tr>\r\n    <td><input data-link=\"product trigger=true\" /></td>\r\n    <td><input data-link=\"price trigger=true\" /></td>\r\n    <td><input data-link=\"quantity trigger=true\" /></td>\r\n    <td >\r\n      <span data-link=\"price*quantity\"></span>\r\n      <span class=\"remove\" data-link=\"{on ~root.remove}\"></span>\r\n    </td>\r\n  </tr>\r\n</script>\n"
      },
      {
        "_type": "para",
        "title": "Observing computed observables",
        "text": "Observing computed observables\ndepends declarations and $.observe() calls both use paths such as \"manager.name\" for listening to changes in the manager.name, as in:\ngetNamesList.depends = [\"manager.name\", ...]; // Dependency declaration for team.getNamesList()\n\n$.observe(team, \"manager.name\", changeHandler); // Observe changes in manager.name\n\nIf manager.fullName() is a computed observable then the corresponding path (for listening to changes in the manager.fullName()) is \"manager.fullName\" (without parens) – as in:\ngetNamesList.depends = [\"manager.fullName\", ...]; // Dependency declaration for team.getNamesList()\n\n$.observe(team, \"manager.fullName\", changeHandler); // Observe changes in manager.fullName()\n\nSee $.observe() with computed observables.\n"
      },
      {
        "_type": "links",
        "title": "See also:",
        "text": "See also:\n"
      }
    ]
  }
}