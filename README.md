list-dir
========

node.js ./index.js

or

```js
var list = require('list-dir');
var list_dir = new list({basePath: '/'});
list_dir.get('/some/path', ['size'], function(err, data){ // sort by size
  console.log(data);
});
```