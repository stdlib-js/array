/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var withArray = require( './../../../base/with/lib' );
var uniform = require( '@stdlib/random/array/uniform' );
var bench = require( '@stdlib/bench' );
var rand = require( '@stdlib/random/base/randu' );
var pkg = require( './../../../base/with/package.json' ).name;


// MAIN //

bench( pkg, function benchmark( b ) {
	var value;
	var x;
	var v;
	var i;
	var j;

	x = uniform( 100, 0.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = ( i%20 );
		value = rand();
		v = withArray( x, j, value );
		b.equal(v[j], value, 'index ' + j + ' should be updated to ' + value);
	}
	b.toc();
	b.pass( 'benchmark finished' );
	b.end();
});
