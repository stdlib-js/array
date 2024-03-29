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
var Complex64Array = require( './../../complex64' );
var toAccessorArray = require( './../../base/to-accessor-array' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var isArray = require( '@stdlib/assert/is-array' );
var take = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof take, 'function', 'main export is a function' );
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
			take( value, [] );
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
			take( value, [], {} );
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
			take( [], value );
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
			take( [], value, {} );
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
			take( [], [], value );
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
			take( [], [], {
				'mode': value
			});
		};
	}
});

tape( 'the function takes elements from an array (generic)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ 1, 3 ];
	actual = take( x, indices );

	expected = [ 2, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 3, 3 ];
	actual = take( x, indices );

	expected = [ 2, 2, 4, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 3, 2, 1, 0 ];
	actual = take( x, indices );

	expected = [ 4, 3, 2, 1 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
	actual = take( x, indices );

	expected = [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from an array (accessor)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );

	indices = toAccessorArray( [ 1, 3 ] );
	actual = take( x, indices );

	expected = [ 2, 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = toAccessorArray( [ 1, 1, 3, 3 ] );
	actual = take( x, indices );

	expected = [ 2, 2, 4, 4 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = toAccessorArray( [ 3, 2, 1, 0 ] );
	actual = take( x, indices );

	expected = [ 4, 3, 2, 1 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	indices = toAccessorArray( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] );
	actual = take( x, indices );

	expected = [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function takes elements from an array (complex typed)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	indices = toAccessorArray( [ 1, 1, 3 ] );
	actual = take( x, indices );

	expected = new Complex64Array( [ 3.0, 4.0, 3.0, 4.0, 7.0, 8.0 ] );
	t.notEqual( actual, x, 'returns different reference' );
	t.strictEqual( isSameComplex64Array( actual, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided a second argument which is empty', function test( t ) {
	var x = [ 1, 2, 3, 4 ];
	t.deepEqual( take( x, [] ), [], 'returns expected value' );
	t.end();
});

tape( 'by default, the function normalizes negative indices', function test( t ) {
	var expected;
	var indices;
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	indices = [ -1, -2, -3, -4 ];
	actual = take( x, indices );
	expected = [ 4, 3, 2, 1 ];
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
		take( x, indices );
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
		take( x, indices, {
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
	actual = take( x, indices, {
		'mode': 'normalize'
	});
	expected = [ 4, 3, 2, 1 ];
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
		take( x, indices, {
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
	actual = take( x, indices, {
		'mode': 'clamp'
	});
	expected = [ 1, 4, 1, 4 ];
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
	actual = take( x, indices, {
		'mode': 'wrap'
	});
	expected = [ 3, 3, 4, 2 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
