'use strict'

var Logdown = require('../src/index')

Logdown.disable('*')
Logdown.enable('*')
var log = new Logdown({prefix: 'exp:foo'})
log.log('lorem *ipsum* dolor sit _amet_ foo bar')
log.log('lorem *ipsum* dolor sit _amet_ foo bar `var foo = 1` lorem')

var log1 = new Logdown({prefix: 'exp:bar'})
log1.log('lorem *ipsum* dolor sit _amet_ foo bar')
log1.log('lorem *ipsum* dolor sit _amet_ foo bar `var foo = 1` lorem')

var log2 = new Logdown({prefix: 'baz:qux'})
log2.log('lorem *ipsum* dolor sit _amet_ foo bar')
log2.log('lorem *ipsum* dolor sit _amet_ foo bar `var foo = 1` lorem')

//
Logdown.enable('exp:*')

var log3 = new Logdown({prefix: 'exp:foo2'})
log3.log('lorem *ipsum* dolor sit _amet_ foo bar')
log3.log('lorem *ipsum* dolor sit _amet_ foo bar `var foo = 1` lorem')

var log4 = new Logdown({prefix: 'exp'})
log4.log('lorem *ipsum* dolor sit _amet_ foo bar')
log4.log('lorem *ipsum* dolor sit _amet_ foo bar `var foo = 1` lorem')

var log5 = new Logdown({prefix: 'baz:qux2'})
log5.log('lorem *ipsum* dolor sit _amet_ foo bar')
log5.log('lorem *ipsum* dolor sit _amet_ foo bar `var foo = 1` lorem')

Logdown.enable('baz:*')

//
var foo = new Logdown({prefix: 'foo'})
var bar = new Logdown({prefix: 'bar'})
var foobar = new Logdown({prefix: 'foobar'})
var barfoo = new Logdown({prefix: 'barfoo'})

Logdown.enable('-*')

foobar.log('lorem')
foo.log('lorem')
bar.log('lorem')
barfoo.log('lorem')
