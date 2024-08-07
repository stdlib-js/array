/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var tape = require( 'tape' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var ArrayBuffer = require( './../../buffer' );
var Float32Array = require( './../../float32' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var Complex64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `set` method for setting one or more array elements', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64Array.prototype, 'set' ), true, 'has property' );
	t.strictEqual( isFunction( Complex64Array.prototype.set ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex number array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 5 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.set.call( value, 0 );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a complex number, a complex number array, or an array-like object', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.set( value );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a complex number, a complex number array, or an array-like object (index argument)', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.set( value, 0 );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is not a nonnegative integer', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.set( new Complex64( 1.0, -1.0 ), value );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is out-of-bounds (complex number)', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		arr.length,
		arr.length + 1,
		arr.length + 2,
		arr.length + 3
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.set( new Complex64( 1.0, -1.0 ), value );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is out-of-bounds (complex typed array)', function test( t ) {
	var values;
	var arr1;
	var arr2;
	var i;

	arr1 = new Complex64Array( 10 );
	arr2 = new Complex64Array( 10 );

	values = [
		1,
		2,
		3,
		4,
		5
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr1.set( arr2, value );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is out-of-bounds (array-like object containing complex numbers)', function test( t ) {
	var values;
	var arr1;
	var arr2;
	var i;

	arr1 = new Complex64Array( 10 );
	arr2 = [];
	for ( i = 0; i < arr1.length; i++ ) {
		arr2.push( new Complex64( i, -i ) );
	}

	values = [
		1,
		2,
		3,
		4,
		5
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr1.set( arr2, value );
		};
	}
});

tape( 'the method throws an error if provided an index argument which is out-of-bounds (array-like object containing interleaved components)', function test( t ) {
	var values;
	var arr1;
	var arr2;
	var i;

	arr1 = new Complex64Array( 10 );
	arr2 = [];
	for ( i = 0; i < arr1.length; i++ ) {
		arr2.push( i );
		arr2.push( -i );
	}

	values = [
		1,
		2,
		3,
		4,
		5
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr1.set( arr2, value );
		};
	}
});

tape( 'the method throws an error if provided an array-like object containing interleaved components which has an odd length', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		[ 1 ],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4, 5 ],
		[ 1, 2, 3, 4, 5, 6, 7 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.set( value );
		};
	}
});

tape( 'the method throws an error if provided an array-like object containing interleaved components which has an odd length (index argument)', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		[ 1 ],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4, 5 ],
		[ 1, 2, 3, 4, 5, 6, 7 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.set( value, 0 );
		};
	}
});

tape( 'the method sets an array element (complex number)', function test( t ) {
	var arr;
	var v;
	var i;

	arr = new Complex64Array( 10 );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	// No index argument:
	arr.set( new Complex64( 20.0, -20.0 ) );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), 20.0, 'returns expected value' );
	t.strictEqual( imagf( v ), -20.0, 'returns expected value' );

	arr.set( new Complex64( 0.0, 0.0 ) );

	// Index argument:
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( realf( v ), 0.0, 'returns expected value' );
		t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

		arr.set( new Complex64( i, -i ), i );

		v = arr.get( i );
		t.strictEqual( realf( v ), i, 'returns expected value' );
		t.strictEqual( imagf( v ), -i, 'returns expected value' );
	}
	t.end();
});

tape( 'the method sets an array element (complex typed array)', function test( t ) {
	var arr;
	var buf;
	var v;
	var i;

	arr = new Complex64Array( 10 );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	// No index argument:
	buf = [ 20.0, -20.0 ];
	arr.set( new Complex64Array( buf ) );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	buf = [ 0.0, 0.0 ];
	arr.set( new Complex64Array( buf ) );

	// Index argument:
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( realf( v ), 0.0, 'returns expected value' );
		t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

		buf = [ i, -i ];
		arr.set( new Complex64Array( buf ), i );

		v = arr.get( i );
		t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
		t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );
	}

	// Multiple values, no index argument:
	buf = [ 20.0, -20.0, -40.0, 40.0 ];
	arr.set( new Complex64Array( buf ) );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	// Multiple values, index argument:
	buf = [ -100.0, -200.0, -300.0, -400.0 ];
	arr.set( new Complex64Array( buf ), 2 );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the method sets an array element (array-like object containing complex numbers)', function test( t ) {
	var arr;
	var buf;
	var v;
	var i;

	arr = new Complex64Array( 10 );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	// No index argument:
	buf = [ 20.0, -20.0 ];
	arr.set( [ new Complex64( buf[0], buf[1] ) ] );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	buf = [ 0.0, 0.0 ];
	arr.set( [ new Complex64( buf[0], buf[1] ) ] );

	// Index argument:
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( realf( v ), 0.0, 'returns expected value' );
		t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

		buf = [ i, -i ];
		arr.set( [ new Complex64( buf[ 0 ], buf[ 1 ] ) ], i );

		v = arr.get( i );
		t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
		t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );
	}

	// Multiple values, no index argument:
	buf = [ 20.0, -20.0, -40.0, 40.0 ];
	arr.set( [ new Complex64( buf[0], buf[1] ), new Complex64( buf[2], buf[3] ) ] ); // eslint-disable-line max-len

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	// Multiple values, index argument:
	buf = [ -100.0, -200.0, -300.0, -400.0 ];
	arr.set( [ new Complex64( buf[0], buf[1] ), new Complex64( buf[2], buf[3] ) ], 2 ); // eslint-disable-line max-len

	v = arr.get( 2 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the method sets an array element (array-like object containing interleaved components)', function test( t ) {
	var arr;
	var buf;
	var v;
	var i;

	arr = new Complex64Array( 10 );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

	// No index argument:
	buf = [ 20.0, -20.0 ];
	arr.set( buf );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	buf = [ 0.0, 0.0 ];
	arr.set( buf );

	// Index argument:
	for ( i = 0; i < arr.length; i++ ) {
		v = arr.get( i );
		t.strictEqual( realf( v ), 0.0, 'returns expected value' );
		t.strictEqual( imagf( v ), 0.0, 'returns expected value' );

		buf = [ i, -i ];
		arr.set( buf, i );

		v = arr.get( i );
		t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
		t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );
	}

	// Multiple values, no index argument:
	buf = [ 20.0, -20.0, -40.0, 40.0 ];
	arr.set( buf );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	// Multiple values, index argument:
	buf = [ -100.0, -200.0, -300.0, -400.0 ];
	arr.set( buf, 2 );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the method sets an array element (complex typed array; shared buffer)', function test( t ) {
	var byteOffset;
	var arr;
	var src;
	var buf;
	var ab;
	var v;

	byteOffset = 112;

	ab = new ArrayBuffer( 240 );
	arr = new Complex64Array( ab, byteOffset, 10 );

	// Overlapping (requires copy), multiple values, no index argument:
	buf = [ 20.0, -20.0, -40.0, 40.0 ];
	src = new Complex64Array( ab, byteOffset-(1*arr.BYTES_PER_ELEMENT), 2 );
	src.set( buf );
	arr.set( src );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	// Overlapping (requires copy), multiple values, index argument:
	buf = [ -100.0, -200.0, -300.0, -400.0 ];
	src = new Complex64Array( ab, byteOffset+(1*arr.BYTES_PER_ELEMENT), 2 );
	src.set( buf );
	arr.set( src, 2 );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	// Overlapping (no copy), multiple values, no index argument:
	buf = [ 25.0, -25.0, -45.0, 45.0 ];
	src = new Complex64Array( ab, byteOffset+(1*arr.BYTES_PER_ELEMENT), 2 );
	src.set( buf );
	arr.set( src );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	// Overlapping (no copy), multiple values, index argument:
	buf = [ -105.0, -205.0, -305.0, -405.0 ];
	src = new Complex64Array( ab, byteOffset+(3*arr.BYTES_PER_ELEMENT), 2 );
	src.set( buf );
	arr.set( src, 2 );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	t.end();
});

tape( 'the method sets an array element (typed array; shared buffer)', function test( t ) {
	var byteOffset;
	var arr;
	var src;
	var buf;
	var ab;
	var v;
	var i;

	byteOffset = 112;

	ab = new ArrayBuffer( 240 );
	arr = new Complex64Array( ab, byteOffset, 10 );

	// Overlapping (requires copy), multiple values, no index argument:
	buf = [ 20.0, -20.0, -40.0, 40.0 ];
	src = new Float32Array( ab, byteOffset-(1*arr.BYTES_PER_ELEMENT), 4 );
	for ( i = 0; i < buf.length; i++ ) {
		src[ i ] = buf[ i ];
	}
	arr.set( src );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	// Overlapping (requires copy), multiple values, index argument:
	buf = [ -100.0, -200.0, -300.0, -400.0 ];
	src = new Float32Array( ab, byteOffset+(1*arr.BYTES_PER_ELEMENT), 4 );
	for ( i = 0; i < buf.length; i++ ) {
		src[ i ] = buf[ i ];
	}
	arr.set( src, 2 );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	// Overlapping (no copy), multiple values, no index argument:
	buf = [ 25.0, -25.0, -45.0, 45.0 ];
	src = new Float32Array( ab, byteOffset+(1*arr.BYTES_PER_ELEMENT), 4 );
	for ( i = 0; i < buf.length; i++ ) {
		src[ i ] = buf[ i ];
	}
	arr.set( src );

	v = arr.get( 0 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 1 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	// Overlapping (no copy), multiple values, index argument:
	buf = [ -105.0, -205.0, -305.0, -405.0 ];
	src = new Float32Array( ab, byteOffset+(3*arr.BYTES_PER_ELEMENT), 4 );
	for ( i = 0; i < buf.length; i++ ) {
		src[ i ] = buf[ i ];
	}
	arr.set( src, 2 );

	v = arr.get( 2 );
	t.strictEqual( realf( v ), buf[ 0 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 1 ], 'returns expected value' );

	v = arr.get( 3 );
	t.strictEqual( realf( v ), buf[ 2 ], 'returns expected value' );
	t.strictEqual( imagf( v ), buf[ 3 ], 'returns expected value' );

	t.end();
});
