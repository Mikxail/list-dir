list-dir
========
```
node.js ./index.js
```

or
```js
var list = require('list-dir');
list.listen(__dirname, 3000, function(){
  console.log('-- Server created');
});
```

or

```js
var list = require('list-dir').list;
var list_dir = new list({basePath: '/'});
list_dir.get('/some/path', ['size'], function(err, data){ // sort by size
  console.log(data);
});
```