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
var Float64ArrayFE = factory( 'float64' );


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

bench( pkg+'::instantiation,new:endianness=little-endian', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'little-endian' );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:endianness=big-endian', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'big-endian' );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new:endianness=little-endian', function benchmark( b ) {
	var ctor;
	var arr;
	var i;

	ctor = Float64ArrayFE;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = ctor( 'little-endian' );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new:endianness=big-endian', function benchmark( b ) {
	var ctor;
	var arr;
	var i;

	ctor = Float64ArrayFE;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = ctor( 'big-endian' );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,length:endianness=little-endian', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'little-endian', 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,length:endianness=big-endian', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'big-endian', 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,typed_array:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Float64Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'little-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,typed_array:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Float64Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'big-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,array:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'little-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,array:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'big-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,iterable:endianness=little-endian', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'little-endian', createIterable() );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,iterable:endianness=big-endian', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'big-endian', createIterable() );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'little-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'big-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'little-endian', buf, 8 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'big-endian', buf, 8 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset,length:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'little-endian', buf, 8, 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset,length:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float64ArrayFE( 'big-endian', buf, 8, 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float64ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
