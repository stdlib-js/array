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

var bench = require( '@stdlib/bench' );
var ArrayBuffer = require( './../../buffer' );
var Float64Array = require( './../../float64' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( ITERATOR_SYMBOL === null )
};
var Float64ArrayLE = factory( 'float64' );


// FUNCTIONS //

/**
* Returns an "iterable" object.
*
* @private
* @returns {Object} iterable object
*/
function createIterable() {
	var out = {};
	out[ ITERATOR_SYMBOL ] = iterator;
	return out;

	function iterator() {
		return {
			'next': next
		};
	}

	function next() {
		return {
			'done': true
		};
	}
}


// MAIN //

bench( pkg+'::instantiation,new', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayLE();
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new', function benchmark( b ) {
	var ctor;
	var arr;
	var i;

	ctor = Float64ArrayLE;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = ctor();
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,length', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayLE( 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,typed_array', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Float64Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayLE( buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,array', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayLE( buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,iterable', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayLE( createIterable() );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayLE( buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayLE( buf, 8 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset,length', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayLE( buf, 8, 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayLE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
