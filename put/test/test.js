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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Complex128Array = require( './../../complex128' );
var Complex64Array = require( './../../complex64' );
var Int32Array = require( './../../int32' );
var Int8Array = require( './../../int8' );
var BooleanArray = require( './../../bool' );
var zeros = require( './../../zeros' );
var toAccessorArray = require( './../../base/to-accessor-array' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isAccessorArray = require( '@stdlib/assert/is-accessor-array' );
var put = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof put, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a collection', function test( t ) {
	var values;
	var i;

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( value, [], [] );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a collection (options)', function test( t ) {
	var values;
	var i;

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( value, [], [], {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a collection', function test( t ) {
	var values;
	var i;

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( [], value, [] );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a collection (options)', function test( t ) {
	var values;
	var i;

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( [], value, [], {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a collection', function test( t ) {
	var values;
	var i;

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( [], [], value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a collection (options)', function test( t ) {
	var values;
	var i;

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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( [], [], value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( [], [], [], value );
		};
	}
});

tape( 'the function throws an error if provided a `mode` option which is not a valid index mode', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( [], [], [], {
				'mode': value
			});
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not broadcast compatible with the second argument (generic)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ],
		[ 1, 2, 3, 4, 5 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( [ 1, 2, 3, 4 ], [ 1, 2 ], value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not broadcast compatible with the second argument (typed)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ],
		[ 1, 2, 3, 4, 5 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( new Int32Array( [ 1, 2, 3, 4 ] ), [ 1, 2 ], value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not broadcast compatible with the second argument (accessors)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ],
		[ 1, 2, 3, 4, 5 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( toAccessorArray( [ 1, 2, 3, 4 ] ), toAccessorArray( [ 1, 2 ] ), toAccessorArray( value ) );
		};
	}
});

tape( 'the function throws an error if provided a third argument which cannot be safely cast to the input array data type', function test( t ) {
	var values;
	var x;
	var i;

	values = zeros( 5, 'float64' );

	x = [
		zeros( 5, 'uint8' ),
		zeros( 5, 'int8' ),
		zeros( 5, 'int16' ),
		zeros( 5, 'uint16' )
	];
	for ( i = 0; i < x.length; i++ ) {
		t.throws( badValue( x[ i ] ), TypeError, 'throws an error when provided ' + x[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			put( value, zeros( 5, 'generic' ), values );
		};
	}
});

tape( 'the function replaces elements in an array (generic)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 3 ];
	actual = put( x, indices, [ 20, 40 ] );
	expected = [ 1, 20, 3, 40 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, [ 20, 30, 40, 50 ] );
	expected = [ 1, 30, 3, 50 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, [ 20, 30, 40, 50 ] );
	expected = [ 50, 40, 30, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ] );
	expected = [ 1, 100, 3, 4 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (generic, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 3 ];
	actual = put( x, indices, [ 20 ] );
	expected = [ 1, 20, 3, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, [ 20 ] );
	expected = [ 1, 20, 3, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, [ 20 ] );
	expected = [ 20, 20, 20, 20 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, [ 100 ] );
	expected = [ 1, 100, 3, 4 ];
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (accessors, generic)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = toAccessorArray( [ 1, 3 ] );
	actual = put( toAccessorArray( x ), indices, toAccessorArray( [ 20, 40 ] ) );
	expected = [ 1, 20, 3, 40 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	actual = put( toAccessorArray( x ), indices, toAccessorArray( [ 20, 30, 40, 50 ] ) );
	expected = [ 1, 30, 3, 50 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = toAccessorArray( [ 3, 2, 1, 0 ] );
	actual = put( toAccessorArray( x ), indices, toAccessorArray( [ 20, 30, 40, 50 ] ) );
	expected = [ 50, 40, 30, 20 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = toAccessorArray( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );
	actual = put( toAccessorArray( x ), indices, toAccessorArray( [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ] ) );
	expected = [ 1, 100, 3, 4 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (accessors, generic, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = toAccessorArray( [ 1, 3 ] );
	actual = put( toAccessorArray( x ), indices, toAccessorArray( [ 20 ] ) );
	expected = [ 1, 20, 3, 20 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	actual = put( toAccessorArray( x ), indices, toAccessorArray( [ 20 ] ) );
	expected = [ 1, 20, 3, 20 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = toAccessorArray( [ 3, 2, 1, 0 ] );
	actual = put( toAccessorArray( x ), indices, toAccessorArray( [ 20 ] ) );
	expected = [ 20, 20, 20, 20 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	indices = toAccessorArray( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );
	actual = put( toAccessorArray( x ), indices, toAccessorArray( [ 100 ] ) );
	expected = [ 1, 100, 3, 4 ];
	t.strictEqual( isAccessorArray( actual ), true, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (int32)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 3 ];
	actual = put( x, indices, new Int32Array( [ 20, 40 ] ) );
	expected = new Int32Array( [ 1, 20, 3, 40 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, new Int32Array( [ 20, 30, 40, 50 ] ) );
	expected = new Int32Array( [ 1, 30, 3, 50 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, new Int32Array( [ 20, 30, 40, 50 ] ) );
	expected = new Int32Array( [ 50, 40, 30, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Upcasting:
	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, new Int8Array( [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ] ) );
	expected = new Int32Array( [ 1, 100, 3, 4 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (int32, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 3 ];
	actual = put( x, indices, new Int32Array( [ 20 ] ) );
	expected = new Int32Array( [ 1, 20, 3, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, new Int32Array( [ 20 ] ) );
	expected = new Int32Array( [ 1, 20, 3, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, new Int32Array( [ 20 ] ) );
	expected = new Int32Array( [ 20, 20, 20, 20 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Upcasting:
	x = new Int32Array( [ 1, 2, 3, 4 ] );
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, new Int8Array( [ 100 ] ) );
	expected = new Int32Array( [ 1, 100, 3, 4 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (float64)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 1, 3 ];
	actual = put( x, indices, new Float64Array( [ 20.0, 40.0 ] ) );
	expected = new Float64Array( [ 1.0, 20.0, 3.0, 40.0 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, new Float64Array( [ 20.0, 30.0, 40.0, 50.0 ] ) );
	expected = new Float64Array( [ 1.0, 30.0, 3.0, 50.0 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Downcast:
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, new Float64Array( [ 20.0, 30.0, 40.0, 50.0 ] ) );
	expected = new Float32Array( [ 50.0, 40.0, 30.0, 20.0 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Upcasting:
	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, new Float64Array( [ 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0, 100.0 ] ) );
	expected = new Complex128Array( [ 1.0, 2.0, 100.0, 0.0, 5.0, 6.0, 7.0, 8.0 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (float64, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 1, 3 ];
	actual = put( x, indices, new Float64Array( [ 20.0 ] ) );
	expected = new Float64Array( [ 1.0, 20.0, 3.0, 20.0 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 1, 1, 3, 3 ];
	actual = put( x, indices, new Float64Array( [ 20.0 ] ) );
	expected = new Float64Array( [ 1.0, 20.0, 3.0, 20.0 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Downcast:
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	indices = [ 3, 2, 1, 0 ];
	actual = put( x, indices, new Float64Array( [ 20.0 ] ) );
	expected = new Float32Array( [ 20.0, 20.0, 20.0, 20.0 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Upcasting:
	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = put( x, indices, new Float64Array( [ 100.0 ] ) );
	expected = new Complex128Array( [ 1.0, 2.0, 100.0, 0.0, 5.0, 6.0, 7.0, 8.0 ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function replaces elements in an array (accessors, complex64)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = new Complex64Array( [ 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0 ] );
	expected = new Complex64Array( [ 1.0, 2.0, 30.0, 40.0, 5.0, 6.0, 70.0, 80.0 ] );
	actual = put( x, indices, values );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	// Downcast:
	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = new Complex128Array( [ 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0 ] );
	expected = new Complex64Array( [ 1.0, 2.0, 30.0, 40.0, 5.0, 6.0, 70.0, 80.0 ] );
	actual = put( x, indices, values );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function replaces elements in an array (accessors, complex64, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = new Complex64Array( [ 100.0, 200.0 ] );
	expected = new Complex64Array( [ 1.0, 2.0, 100.0, 200.0, 5.0, 6.0, 100.0, 200.0 ] );
	actual = put( x, indices, values );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	// Downcast:
	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = new Complex128Array( [ 100.0, 200.0 ] );
	expected = new Complex64Array( [ 1.0, 2.0, 100.0, 200.0, 5.0, 6.0, 100.0, 200.0 ] );
	actual = put( x, indices, values );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function replaces elements in an array (accessors, boolean)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;
	var v;
	var i;

	x = new BooleanArray( [ true, false, false, true ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = new BooleanArray( [ false, true, false, true ] );
	expected = [ true, true, false, true ];
	actual = put( x, indices, values );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < indices.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( v, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function replaces elements in an array (accessors, boolean, broadcasting)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var values;
	var x;
	var v;
	var i;

	x = new BooleanArray( [ true, false, false, true ] );
	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	values = new BooleanArray( [ true ] );
	expected = [ true, true, false, true ];
	actual = put( x, indices, values );

	t.strictEqual( actual, x, 'returns expected value' );
	for ( i = 0; i < indices.length; i++ ) {
		v = actual.get( i );
		t.strictEqual( v, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the input array unchanged if provided a second argument which is empty', function test( t ) {
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];
	actual = put( x, [], [ 5, 6, 7, 8 ] );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, [ 1, 2, 3, 4 ], 'returns expected value' );

	t.end();
});

tape( 'by default, the function normalizes negative indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ -1, -2, -3, -4 ];
	actual = put( x, indices, [ 5, 6, 7, 8 ] );
	expected = [ 8, 7, 6, 5 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'by default, the function throws an error if provided an out-of-bounds index', function test( t ) {
	var indices;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 2, 50, 1, 2 ];

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		put( x, indices, [ 100 ] );
	}
});

tape( 'when the "mode" is "throw", the function throws an error if provided an out-of-bounds index', function test( t ) {
	var indices;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 4, 5, 1, 2 ];

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		put( x, indices, [ 200 ], {
			'mode': 'throw'
		});
	}
});

tape( 'when the "mode" is "normalize", the function normalizes negative indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ -1, -2, -3, -4 ];
	actual = put( x, indices, [ 5, 6, 7, 8 ], {
		'mode': 'normalize'
	});
	expected = [ 8, 7, 6, 5 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "normalize", the function throws an error if provided an out-of-bounds index', function test( t ) {
	var indices;
	var x;

	x = [ 1, 2, 3, 4 ];
	indices = [ 2, 50, 1, 2 ];

	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		put( x, indices, [ 100 ], {
			'mode': 'normalize'
		});
	}
});

tape( 'when the "mode" is "clamp", the function clamps out-of-bounds indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ -10, 10, -5, 5 ];
	actual = put( x, indices, [ 100, 200, 300, 400 ], {
		'mode': 'clamp'
	});
	expected = [ 300, 2, 3, 400 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'when the "mode" is "wrap", the function wraps out-of-bounds indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ -10, 10, -5, 5 ];
	actual = put( x, indices, [ 100, 200, 300, 400 ], {
		'mode': 'wrap'
	});
	expected = [ 1, 400, 200, 300 ];

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
