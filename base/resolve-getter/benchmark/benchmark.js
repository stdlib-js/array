/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var isFunction = require( '@stdlib/assert/is-function' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var filledBy = require( './../../../filled-by' );
var pkg = require( './../package.json' ).name;
var resolveGetter = require( './../lib' );


// VARIABLES //

var rand = discreteUniform( 0, 127 );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var get;
	var i;

	values = [
		filledBy( 10, 'generic', rand ),
		filledBy( 10, 'float64', rand ),
		filledBy( 10, 'float32', rand ),
		filledBy( 10, 'int32', rand ),
		filledBy( 10, 'uint32', rand )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		get = resolveGetter( values[ i%values.length ] );
		if ( typeof get !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( get ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=generic', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'generic', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=float64', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'float64', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=float32', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'float32', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=int32', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'int32', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=int16', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'int16', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=int8', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'int8', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint32', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'uint32', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint16', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'uint16', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint8', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'uint8', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=uint8c', function benchmark( b ) {
	var arr;
	var get;
	var i;
	var v;

	arr = filledBy( 100, 'uint8c', rand );
	get = resolveGetter( arr );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = get( arr, i%arr.length );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
