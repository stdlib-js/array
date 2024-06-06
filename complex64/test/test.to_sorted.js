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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );
var Float32Array = require( './../../float32' );
var Complex64Array = require( './../lib' );


// FUNCTIONS //

/**
* Comparison function.
*
* @private
* @param {Complex64} a - first value for comparison
* @param {Complex64} b - second value for comparison
* @returns {number} comparison result
*/
function compareFcn( a, b ) {
	var re1;
	var re2;
	var im1;
	var im2;
	re1 = realf( a );
	re2 = realf( b );
	if ( re1 < re2 ) {
		return -1;
	}
	if ( re1 > re2 ) {
		return 1;
	}
	im1 = imagf( a );
	im2 = imagf( b );
	if ( im1 < im2 ) {
		return -1;
	}
	if ( im1 > im2 ) {
		return 1;
	}
	return 0;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `toSorted` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64Array.prototype, 'toSorted' ), true, 'has property' );
	t.strictEqual( isFunction( Complex64Array.prototype.toSorted ), true, 'has method' );
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.toSorted.call( value, compareFcn );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex64Array( 10 );

	values = [
		'5',
		3.14,
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
			return arr.toSorted( value );
		};
	}
});

tape( 'the method returns an empty array if operating on an empty complex number array', function test( t ) {
	var arr;
	var out;

	arr = new Complex64Array();
	out = arr.toSorted( compareFcn );

	t.strictEqual( out.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the method returns a new typed array containing elements in sorted order', function test( t ) {
	var expected;
	var arr;
	var out;

	arr = new Complex64Array( [ 3.0, -3.0, 1.0, -1.0, 2.0, -2.0 ] );
	expected = new Float32Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	out = arr.toSorted( compareFcn );

	t.strictEqual( instanceOf( out, Complex64Array ), true, 'returns expected value' );
	t.notEqual( out, arr, 'returns a new instance' );
	t.strictEqual( out.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( out, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the method does not change the array length', function test( t ) {
	var arr;
	var out;

	arr = new Complex64Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	out = arr.toSorted( compareFcn );

	t.strictEqual( out.length, arr.length, 'returns expected value' );
	t.end();
});
