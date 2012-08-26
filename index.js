#!/usr/bin/env node

var list = require('list-dir');
list.listen(__dirname, 3000, function(){
	console.log('-- Server created');
});