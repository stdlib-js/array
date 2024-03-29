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

var tape = require( 'tape' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var AccessorArray = require( './../../../base/accessor' );
var Float64Array = require( './../../../float64' );
var Float32Array = require( './../../../float32' );
var Complex128Array = require( './../../../complex128' );
var Complex64Array = require( './../../../complex64' );
var Int32Array = require( './../../../int32' );
var zeros = require( './../../../zeros' );
var Slice = require( '@stdlib/slice/ctor' );
var sliceAssign = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sliceAssign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an input array which cannot be safely cast to the output array data type', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( 5, 'float64' );

	values = [
		zeros( 5, 'uint8' ),
		zeros( 5, 'int8' ),
		zeros( 5, 'int16' ),
		zeros( 5, 'uint16' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceAssign( x, value, new Slice(), false );
		};
	}
});

tape( 'the function throws an error if provided an input array which is not broadcast compatible with the output array slice', function test( t ) {
	var values;
	var y;
	var i;

	y = zeros( 5, 'float64' );

	values = [
		zeros( 2, 'float64' ),
		zeros( 3, 'float64' ),
		zeros( 4, 'float64' ),
		zeros( 10, 'float64' ),
		zeros( 0, 'float64' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceAssign( value, y, new Slice(), false );
		};
	}
});

tape( 'when `strict` is `true`, the function throws an error if provided a slice which is out-of-bounds', function test( t ) {
	var values;
	var x;
	var i;

	x = zeros( 5, 'generic' );

	values = [
		new Slice( 10, 20 ),
		new Slice( -20, -10 ),
		new Slice( 0, 100 ),
		new Slice( 0, -100 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sliceAssign( x, x, value, true );
		};
	}
});

tape( 'when `strict` is `false`, the function returns the output array unchanged if provided a slice which is out-of-bounds', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1 ];
	y = zeros( x.length, 'generic' );
	actual = sliceAssign( x, y, new Slice( 10, 20 ), false );

	expected = zeros( x.length, 'generic' );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1 ] );
	y = zeros( x.length, 'int32' );
	actual = sliceAssign( x, y, new Slice( -20, -10 ), false );

	expected = zeros( x.length, 'int32' );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 1 ] );
	y = zeros( x.length, 'generic' );
	actual = sliceAssign( x, y, new Slice( 0, -100 ), false );

	expected = zeros( x.length, 'generic' );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0 ] );
	y = zeros( x.length, 'generic' );
	actual = sliceAssign( x, y, new Slice( -10, -20 ), false );

	expected = zeros( x.length, 'float64' );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs slice assignment with support for broadcasting (generic)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = [ 1, 2, 3 ];
	y = zeros( 3, 'generic' );

	expected = [ 1, 2, 3 ];
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 2, 3 ];
	y = zeros( 3, 'generic' );

	expected = [ 3, 2, 1 ];
	actual = sliceAssign( x, y, new Slice( null, null, -1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 3 ];
	y = zeros( 3, 'generic' );

	expected = [ 3, 0, 1 ];
	actual = sliceAssign( x, y, new Slice( null, null, -2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1, 3 ];
	y = zeros( 3, 'generic' );

	expected = [ 1, 0, 3 ];
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 2, 3 ];
	y = zeros( 3, 'generic' );

	expected = [ 0, 2, 3 ];
	actual = sliceAssign( x, y, new Slice( 1, null ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 2 ];
	y = zeros( 3, 'generic' );

	expected = [ 0, 2, 0 ];
	actual = sliceAssign( x, y, new Slice( 1, y.length-1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 1 ];
	y = zeros( 3, 'generic' );

	expected = [ 0, 0, 0 ];
	actual = sliceAssign( x, y, new Slice( 1, 1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Broadcasting:
	x = [ 1 ];
	y = zeros( 3, 'generic' );

	expected = [ 1, 1, 1 ];
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ 3 ];
	y = zeros( 3, 'generic' );

	expected = [ 3, 0, 3 ];
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs slice assignment with support for broadcasting (float64)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = zeros( 3, 'float64' );

	expected = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = zeros( 3, 'float32' ); // downcast

	expected = new Float32Array( [ 3.0, 2.0, 1.0 ] );
	actual = sliceAssign( x, y, new Slice( null, null, -1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 3.0 ] );
	y = zeros( 3, 'float64' );

	expected = new Float64Array( [ 3.0, 0.0, 1.0 ] );
	actual = sliceAssign( x, y, new Slice( null, null, -2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 3.0 ] );
	y = zeros( 3, 'float32' ); // downcast

	expected = new Float32Array( [ 1.0, 0.0, 3.0 ] );
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 2.0, 3.0 ] );
	y = zeros( 3, 'float64' );

	expected = new Float64Array( [ 0.0, 2.0, 3.0 ] );
	actual = sliceAssign( x, y, new Slice( 1, null ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 2.0 ] );
	y = zeros( 3, 'float64' );

	expected = new Float64Array( [ 0.0, 2.0, 0.0 ] );
	actual = sliceAssign( x, y, new Slice( 1, y.length-1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0 ] );
	y = zeros( 3, 'float64' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	actual = sliceAssign( x, y, new Slice( 1, 1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Broadcasting:
	x = new Float64Array( [ 1.0 ] );
	y = zeros( 3, 'float64' );

	expected = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Float64Array( [ 3.0 ] );
	y = zeros( 3, 'float64' );

	expected = new Float64Array( [ 3.0, 0.0, 3.0 ] );
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Upcasting:
	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = zeros( 3, 'complex128' );

	expected = new Complex128Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function performs slice assignment with support for broadcasting (complex128)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = zeros( 3, 'complex128' );

	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = zeros( 3, 'complex128' );

	expected = new Complex128Array( [ 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ] );
	actual = sliceAssign( x, y, new Slice( null, null, -1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = zeros( 3, 'complex64' ); // downcast

	expected = new Complex64Array( [ 3.0, 4.0, 0.0, 0.0, 1.0, 2.0 ] );
	actual = sliceAssign( x, y, new Slice( null, null, -2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = zeros( 3, 'complex128' );

	expected = new Complex128Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0 ] );
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = zeros( 3, 'complex128' );

	expected = new Complex128Array( [ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ] );
	actual = sliceAssign( x, y, new Slice( 1, null ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0 ] );
	y = zeros( 3, 'complex64' ); // downcast

	expected = new Complex64Array( [ 0.0, 0.0, 1.0, 2.0, 0.0, 0.0 ] );
	actual = sliceAssign( x, y, new Slice( 1, y.length-1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0 ] );
	y = zeros( 3, 'complex128' );

	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	actual = sliceAssign( x, y, new Slice( 1, 1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	// Broadcasting:
	x = new Complex128Array( [ 1.0, 2.0 ] );
	y = zeros( 3, 'complex128' );

	expected = new Complex128Array( [ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( actual, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 3.0, 4.0 ] );
	y = zeros( 3, 'complex64' ); // downcast

	expected = new Complex64Array( [ 3.0, 4.0, 0.0, 0.0, 3.0, 4.0 ] );
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function performs slice assignment with support for broadcasting (int32)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new Int32Array( [ 1, 2, 3 ] );
	y = zeros( 3, 'int32' );

	expected = new Int32Array( [ 1, 2, 3 ] );
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	y = zeros( 3, 'int32' );

	expected = new Int32Array( [ 3, 2, 1 ] );
	actual = sliceAssign( x, y, new Slice( null, null, -1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 3 ] );
	y = zeros( 3, 'int32' );

	expected = new Int32Array( [ 3, 0, 1 ] );
	actual = sliceAssign( x, y, new Slice( null, null, -2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 3 ] );
	y = zeros( 3, 'int32' );

	expected = new Int32Array( [ 1, 0, 3 ] );
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 2, 3 ] );
	y = zeros( 3, 'int32' );

	expected = new Int32Array( [ 0, 2, 3 ] );
	actual = sliceAssign( x, y, new Slice( 1, null ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 2 ] );
	y = zeros( 3, 'int32' );

	expected = new Int32Array( [ 0, 2, 0 ] );
	actual = sliceAssign( x, y, new Slice( 1, y.length-1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1 ] );
	y = zeros( 3, 'int32' );

	expected = new Int32Array( [ 0, 0, 0 ] );
	actual = sliceAssign( x, y, new Slice( 1, 1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Broadcasting:
	x = new Int32Array( [ 1 ] );
	y = zeros( 3, 'int32' );

	expected = new Int32Array( [ 1, 1, 1 ] );
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 3 ] );
	y = zeros( 3, 'int32' );

	expected = new Int32Array( [ 3, 0, 3 ] );
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs slice assignment with support for broadcasting (accessors)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = new AccessorArray( [ 1, 2, 3 ] );
	y = zeros( 3, 'generic' );

	expected = [ 1, 2, 3 ];
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 1, 2, 3 ] );
	y = zeros( 3, 'generic' );

	expected = [ 3, 2, 1 ];
	actual = sliceAssign( x, y, new Slice( null, null, -1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 1, 3 ] );
	y = zeros( 3, 'generic' );

	expected = [ 3, 0, 1 ];
	actual = sliceAssign( x, y, new Slice( null, null, -2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 1, 3 ] );
	y = zeros( 3, 'generic' );

	expected = [ 1, 0, 3 ];
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 2, 3 ] );
	y = zeros( 3, 'generic' );

	expected = [ 0, 2, 3 ];
	actual = sliceAssign( x, y, new Slice( 1, null ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 2 ] );
	y = zeros( 3, 'generic' );

	expected = [ 0, 2, 0 ];
	actual = sliceAssign( x, y, new Slice( 1, y.length-1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 1 ] );
	y = zeros( 3, 'generic' );

	expected = [ 0, 0, 0 ];
	actual = sliceAssign( x, y, new Slice( 1, 1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Broadcasting:
	x = new AccessorArray( [ 1 ] );
	y = zeros( 3, 'generic' );

	expected = [ 1, 1, 1 ];
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new AccessorArray( [ 3 ] );
	y = zeros( 3, 'generic' );

	expected = [ 3, 0, 3 ];
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs slice assignment with support for broadcasting (array-like)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;

	x = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	expected = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	expected = {
		'length': 3,
		'0': 3,
		'1': 2,
		'2': 1
	};
	actual = sliceAssign( x, y, new Slice( null, null, -1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 2,
		'0': 1,
		'1': 3
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	expected = {
		'length': 3,
		'0': 3,
		'1': 0,
		'2': 1
	};
	actual = sliceAssign( x, y, new Slice( null, null, -2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 2,
		'0': 1,
		'1': 3
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	expected = {
		'length': 3,
		'0': 1,
		'1': 0,
		'2': 3
	};
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 2,
		'0': 2,
		'1': 3
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	expected = {
		'length': 3,
		'0': 0,
		'1': 2,
		'2': 3
	};
	actual = sliceAssign( x, y, new Slice( 1, null ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 1,
		'0': 2
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	expected = {
		'length': 3,
		'0': 0,
		'1': 2,
		'2': 0
	};
	actual = sliceAssign( x, y, new Slice( 1, y.length-1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 1,
		'0': 1
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	expected = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};
	actual = sliceAssign( x, y, new Slice( 1, 1 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Broadcasting:
	x = {
		'length': 1,
		'0': 1
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	expected = {
		'length': 3,
		'0': 1,
		'1': 1,
		'2': 1
	};
	actual = sliceAssign( x, y, new Slice(), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	x = {
		'length': 1,
		'0': 3
	};
	y = {
		'length': 3,
		'0': 0,
		'1': 0,
		'2': 0
	};

	expected = {
		'length': 3,
		'0': 3,
		'1': 0,
		'2': 3
	};
	actual = sliceAssign( x, y, new Slice( null, null, 2 ), false );

	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
