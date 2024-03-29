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
var toAccessorArray = require( './../../base/to-accessor-array' );
var Complex64Array = require( './../../complex64' );
var Int32Array = require( './../../int32' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var isArray = require( '@stdlib/assert/is-array' );
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var zeros = require( './../../zeros' );
var mskfilter = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mskfilter, 'function', 'main export is a function' );
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
			mskfilter( value, [] );
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
			mskfilter( [], value );
		};
	}
});

tape( 'the function throws an error if provided collections of unequal length', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 1 ],
		[ 1, 2 ],
		[ 1, 2, 3 ],
		[ 1, 2, 3, 4 ],
		[ 1, 2, 3, 4, 5, 6 ],
		[ 1, 2, 3, 4, 5, 6, 7 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			mskfilter( value, zeros( 5, 'generic' ) );
		};
	}
});

tape( 'the function filters array elements (generic)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = [ 1, 2, 3, 4 ];

	mask = [ 0, 1, 0, 1 ];
	actual = mskfilter( x, mask );
	expected = [ 2, 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	actual = mskfilter( x, mask );
	expected = [];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	actual = mskfilter( x, mask );
	expected = [ 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	actual = mskfilter( x, mask );
	expected = [ 1, 2, 3, 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function filters array elements (accessors)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );

	mask = toAccessorArray( [ 0, 1, 0, 1 ] );
	actual = mskfilter( x, mask );
	expected = [ 2, 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = toAccessorArray( [ 0, 0, 0, 0 ] );
	actual = mskfilter( x, mask );
	expected = [];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = toAccessorArray( [ 0, 0, 0, 1 ] );
	actual = mskfilter( x, mask );
	expected = [ 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = toAccessorArray( [ 1, 1, 1, 1 ] );
	actual = mskfilter( x, mask );
	expected = [ 1, 2, 3, 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function filters array elements (real typed array)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4 ] );

	mask = [ 0, 1, 0, 1 ];
	actual = mskfilter( x, mask );
	expected = [ 2, 4 ];
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	actual = mskfilter( x, mask );
	expected = [];
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	actual = mskfilter( x, mask );
	expected = [ 4 ];
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	actual = mskfilter( x, mask );
	expected = [ 1, 2, 3, 4 ];
	t.strictEqual( isInt32Array( actual ), true, 'returns expected value' );
	t.notEqual( actual, x, 'returns new array' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function filters array elements (complex typed array)', function test( t ) {
	var expected;
	var actual;
	var mask;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	mask = [ 0, 1, 0, 1 ];
	actual = mskfilter( x, mask );
	expected = new Complex64Array( [ 3.0, 4.0, 7.0, 8.0 ] );
	t.notEqual( actual, x, 'returns new array' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 0, 0, 0, 0 ];
	actual = mskfilter( x, mask );
	expected = new Complex64Array( [] );
	t.notEqual( actual, x, 'returns new array' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 0, 0, 0, 1 ];
	actual = mskfilter( x, mask );
	expected = new Complex64Array( [ 7.0, 8.0 ] );
	t.notEqual( actual, x, 'returns new array' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	mask = [ 1, 1, 1, 1 ];
	actual = mskfilter( x, mask );
	expected = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	t.notEqual( actual, x, 'returns new array' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided empty arrays', function test( t ) {
	t.deepEqual( mskfilter( [], [] ), [], 'returns expected value' );
	t.deepEqual( mskfilter( new Int32Array( [] ), [] ), new Int32Array( [] ), 'returns expected value' );
	t.end();
});
