/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var dtype = require( './../../../dtype' );
var dtypes = require( './../../../dtypes' );
var pkg = require( './../package.json' ).name;
var setter = require( './../lib' );


// VARIABLES //

var rand = discreteUniform( 0, 127 );


// MAIN //

bench( pkg, function benchmark( b ) {
	var set;
	var dt;
	var i;

	dt = dtypes();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		set = setter( dt[ i%dt.length ] );
		if ( typeof set !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( set ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=generic', function benchmark( b ) {
	var arr;
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'generic', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'float64', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'float32', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'int32', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'int16', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'int8', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'uint32', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'uint16', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'uint8', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
	var set;
	var i;
	var j;
	var v;

	arr = filledBy( 100, 'uint8c', rand );
	set = setter( dtype( arr ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		j = i % arr.length;
		set( arr, j, i%128 );
		v = arr[ j ];
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
