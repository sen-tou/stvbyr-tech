---
title: "Get Mapped Object Inside a Callback Function"
summary: "Sometimes when using array map you maybe want to access the referenced object that is mapped over."
date: 2021-07-12T17:30:11+02:00
draft: false
translationKey: "get-mapped-object-inside-a-callback-function"
# image: "home-header.png"
categories: 
    - Javascript
---

Sometimes when using array map you maybe want to access the referenced object that is mapped over.

If you use a closure you can just reference the mapped object by its name as the closure has access to the outer scope.

```javascript
const names = ["Olive", "Ty", "Hugo", "Ginger"];

const status = names.map(
  (name) => `Took ${name} from names(${names.length} entries)`
);

console.log(status);

// Array(4) [ 
//     0: "Took Olive from names(4 entries)"
//     1: "Took Ty from names(4 entries)"
//     2: "Took Hugo from names(4 entries)"
//     3: "Took Ginger from names(4 entries)"
// ​]
```

But if you wanna use a generic callback you can't do that.

```javascript
const firstNames = ["Olive", "Ty", "Hugo", "Ginger"];
const lastNames = ["Yew", "Ayelloribbin", "First", "Plant"];

const logStatusForNames = (name) => `Took ${name} from names(${names.length} entries)`;

const firstNamesStatus = firstNames.map(logStatusForNames);
const lastNamesStatus = lastNames.map(logStatusForNames);

console.log(firstNamesStatus, lastNamesStatus);

// will not work because "names" is not specified anymore and I can't use any variable either
```

Unfortunately, but there is hope. 

## Method 1: Using the third argument of the callback

Luckily there is a super easy fix for that. 

The callback function actually can take three parameters as its arguments. 

The first one is the value of a single array element. 

The second one is the index of that element. 

And finally the third parameter is a reference to the object that is mapped over.

```javascript
const firstNames = ["Olive", "Ty", "Hugo", "Ginger"];
const lastNames = ["Yew", "Ayelloribbin", "First", "Plant"];

const logStatusForNames = (name, index, names) => `Took ${name} from names(${names.length} entries)`;

const firstNamesStatus = firstNames.map(logStatusForNames);
const lastNamesStatus = lastNames.map(logStatusForNames);

console.log(firstNamesStatus, lastNamesStatus);

// Array(4) [ 
//     0: "Took Olive from names(4 entries)"
//     1: "Took Ty from names(4 entries)"
//     2: "Took Hugo from names(4 entries)"
//     3: "Took Ginger from names(4 entries)"
// ​]
// Array(4) [ 
//     0: "Took Yew from names(4 entries)"
//     1: "Took Ayelloribbin from names(4 entries)"
//     2: "Took First from names(4 entries)"
//     3: "Took Plant from names(4 entries)"
// ​]
```

That's it! Easy right?

## Method 2: Setting the `thisArg`

Technically there is another approach to this. 

You can give the map function a second argument. It will determine what `this` refers to inside the callback function. 

But I do *not* recommend that as the use of `this` should be used in small doses. Or avoided if possible.

There is another caveat though. You can't use arrow functions when using that method. This relates to how arrow functions are implemented in javascript.

```javascript
const firstNames = ["Olive", "Ty", "Hugo", "Ginger"];
const lastNames = ["Yew", "Ayelloribbin", "First", "Plant"];

const logStatusForNamesFunction = function (name) {
    return `Took ${name} from names(${this.length} entries)`
};
const logStatusForNamesArrow = (name) => `Took ${name} from names(${this.length} entries)`;

const firstNamesStatus = firstNames.map(logStatusForNamesFunction, firstNames); // works as in the previous example
const lastNamesStatus = lastNames.map(logStatusForNamesArrow, lastNames); // doesn't work. "this" refers to the window object if called in a browser

console.log(firstNamesStatus, lastNamesStatus);
```

## Conclusion

As you can see it is very easy to reference the mapped object inside a array map callback.

By the way the first method that I showed you also works with `reduce`. The callback can take up to four arguments. The fourth one would be the reduced array.


