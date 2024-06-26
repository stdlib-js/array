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
var instanceOf = require( '@stdlib/assert/instance-of' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var Uint8Array = require( './../../uint8' );
var Int32Array = require( './../../int32' );
var Float64Array = require( './../../float64' );
var BooleanArray = require( './../../bool' );
var toAccessorArray = require( './../../base/to-accessor-array' );
var array2json = require( './../../to-json' );
var ArrayIndex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ArrayIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var x;

	x = new ArrayIndex( [ 1, 2, 3 ] );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( [ true, false, true ] );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( toAccessorArray( [ 1, 2, 3 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( new Uint8Array( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( new BooleanArray( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( new Int32Array( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	t.end();
});

tape( 'the function is a constructor (options)', function test( t ) {
	var x;

	x = new ArrayIndex( [ 1, 2, 3 ], {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( [ true, false, true ], {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( toAccessorArray( [ 1, 2, 3 ] ), {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( new Uint8Array( [ 1, 0, 1 ] ), {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( new BooleanArray( [ 1, 0, 1 ] ), {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = new ArrayIndex( new Int32Array( [ 1, 0, 1 ] ), {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	t.end();
});

tape( 'the function does not require the `new` keyword', function test( t ) {
	var idx;
	var x;

	idx = ArrayIndex;

	x = idx( [ 1, 2, 3 ] );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( [ true, false, true ] );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( toAccessorArray( [ 1, 2, 3 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( new Uint8Array( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( new BooleanArray( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( new Int32Array( [ 1, 0, 1 ] ) );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	t.end();
});

tape( 'the function does not require the `new` keyword (options)', function test( t ) {
	var idx;
	var x;

	idx = ArrayIndex;

	x = idx( [ 1, 2, 3 ], {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( [ true, false, true ], {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( toAccessorArray( [ 1, 2, 3 ] ), {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( new Uint8Array( [ 1, 0, 1 ] ), {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( new BooleanArray( [ 1, 0, 1 ] ), {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

	x = idx( new Int32Array( [ 1, 0, 1 ] ), {} );
	t.strictEqual( instanceOf( x, ArrayIndex ), true, 'returns expected value' );

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
			var v = new ArrayIndex( value ); // eslint-disable-line no-unused-vars
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
			var v = new ArrayIndex( value, {} ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a valid index array', function test( t ) {
	var values;
	var i;

	values = [
		[ 'a', 'b', 'c' ],
		new Float64Array( [ 1.0, 2.0, 3.0 ] ),
		[ 1.5, 2.5, 3.5 ],
		[ null ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = new ArrayIndex( value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a valid index array (options)', function test( t ) {
	var values;
	var i;

	values = [
		[ 'a', 'b', 'c' ],
		new Float64Array( [ 1.0, 2.0, 3.0 ] ),
		[ 1.5, 2.5, 3.5 ],
		[ null ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = new ArrayIndex( value, {} ); // eslint-disable-line no-unused-vars
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
			var v = new ArrayIndex( [ 1, 2, 3 ], value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
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
			var v = new ArrayIndex( [ 1, 2, 3 ], { // eslint-disable-line no-unused-vars
				'persist': value
			});
		};
	}
});

tape( 'the function returns an instance having a `data` property which returns the underlying index array', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.data, x, 'returns expected value' );

	x = [];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.data, x, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.data, x, 'returns expected value' );

	x = new Uint8Array( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.data, x, 'returns expected value' );

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.data, x, 'returns expected value' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.data, x, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.data, x, 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `data` property which throws an error if an instance has been invalidated', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = [];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new Uint8Array( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			var v = idx.data; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an instance having a `dtype` property which returns the underlying index array data type', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.dtype, 'generic', 'returns expected value' );

	x = [];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.dtype, 'generic', 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.dtype, null, 'returns expected value' );

	x = new Uint8Array( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.dtype, 'uint8', 'returns expected value' );

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.dtype, 'bool', 'returns expected value' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.dtype, 'generic', 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.dtype, 'int32', 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `dtype` property which throws an error if an instance has been invalidated', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = [];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new Uint8Array( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			var v = idx.dtype; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an instance having an `id` property which returns the array index identifier', function test( t ) {
	var obj;
	var idx;
	var x;
	var i;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = [];
	idx = new ArrayIndex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = new Uint8Array( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( isString( idx.id ), true, 'returns expected value' );

	// Should assign unique identifiers...
	obj = {};
	for ( i = 0; i < 100; i++ ) {
		idx = new ArrayIndex( [ 1, 2, 3 ] );
		if ( obj[ idx.id ] === void 0 ) {
			obj[ idx.id ] = true;
		} else {
			t.fail( 'should not return a duplicate id: ' + idx.id );
		}
	}
	t.end();
});

tape( 'the function returns an instance having an `id` property which throws an error if an instance has been invalidated', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = [];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new Uint8Array( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			var v = idx.id; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an instance having an `isCached` property which returns a boolean indicating whether an array index is actively cached', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ArrayIndex.get( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x, {
		'persist': true
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ArrayIndex.get( idx.id );
	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ArrayIndex.get( idx.id );
	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ArrayIndex.get( idx.id );
	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ArrayIndex.get( idx.id );
	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ArrayIndex.free( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `type` property which returns the array index type', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = [];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	x = new Uint8Array( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.type, 'mask', 'returns expected value' );

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.type, 'bool', 'returns expected value' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.type, 'bool', 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.type, 'int', 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a `type` property which throws an error if an instance has been invalidated', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = [];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new Uint8Array( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new BooleanArray( [ 0, 1, 0, 1 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			var v = idx.type; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the function returns an instance having a custom `toString` method', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	t.strictEqual( /ArrayIndex<[^>]+>/.test( idx.toString() ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an instance having a custom `toString` method which throws an error if an instance has been invalidated', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			idx.toString();
		};
	}
});

tape( 'the function returns an instance having a custom `toJSON` method', function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	expected = {
		'type': 'ArrayIndex',
		'data': [ 1, 2, 3 ]
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	expected = {
		'type': 'ArrayIndex',
		'data': [ true, false, true, false ]
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	expected = {
		'type': 'ArrayIndex',
		'data': [ 1, 2, 3 ]
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Uint8Array( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x );

	expected = {
		'type': 'ArrayIndex',
		'data': array2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new BooleanArray( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x );

	expected = {
		'type': 'ArrayIndex',
		'data': array2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	idx = new ArrayIndex( x );

	expected = {
		'type': 'ArrayIndex',
		'data': array2json( x )
	};
	actual = idx.toJSON();
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an instance having a custom `toJSON` method which throws an error if an instance has been invalidated', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	ArrayIndex.get( idx.id );
	t.throws( invalidated( idx ), Error, 'throws an error' );

	t.end();

	function invalidated( idx ) {
		return function invalidated() {
			idx.toJSON();
		};
	}
});

tape( 'attached to the constructor is a `name` property', function test( t ) {
	t.strictEqual( ArrayIndex.name, 'ArrayIndex', 'returns expected value' );
	t.end();
});

tape( 'attached to the constructor is a `free` method to free an actively cached index array (non-persisted)', function test( t ) {
	var actual;
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x, {
		'persist': false
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = new BooleanArray( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = new Uint8Array( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `free` method to free an actively cached index array (persisted)', function test( t ) {
	var actual;
	var opts;
	var idx;
	var x;

	opts = {
		'persist': true
	};

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = new BooleanArray( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = new Uint8Array( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x, opts );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	actual = ArrayIndex.free( idx.id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `free` method which returns `false` if an index array has already been freed', function test( t ) {
	var actual;
	var idx;
	var id;
	var x;

	// Generic:
	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ArrayIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ArrayIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Generic (persisted):
	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x, {
		'persist': true
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ArrayIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ArrayIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Accessor:
	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ArrayIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ArrayIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Boolean:
	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ArrayIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ArrayIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Boolean:
	x = new BooleanArray( [ true, false, true, false ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ArrayIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ArrayIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Mask:
	x = new Uint8Array( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ArrayIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ArrayIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	// Integer:
	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	id = idx.id;
	actual = ArrayIndex.free( id );
	t.strictEqual( actual, true, 'returns expected value' );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	actual = ArrayIndex.free( id );
	t.strictEqual( actual, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method to return index array data', function test( t ) {
	var expected;
	var actual;
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	expected = {
		'data': x,
		'type': 'int',
		'dtype': 'generic'
	};
	actual = ArrayIndex.get( idx.id );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual.data, x, 'returns expected value' );

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x, {
		'persist': true
	});

	expected = {
		'data': x,
		'type': 'int',
		'dtype': 'generic'
	};
	actual = ArrayIndex.get( idx.id );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual.data, x, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	expected = {
		'data': x,
		'type': 'int',
		'dtype': null
	};
	actual = ArrayIndex.get( idx.id );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual.data, x, 'returns expected value' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	expected = {
		'data': x,
		'type': 'bool',
		'dtype': 'generic'
	};
	actual = ArrayIndex.get( idx.id );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual.data, x, 'returns expected value' );

	x = new BooleanArray( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x );

	expected = {
		'data': x,
		'type': 'bool',
		'dtype': 'bool'
	};
	actual = ArrayIndex.get( idx.id );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual.data, x, 'returns expected value' );

	x = new Uint8Array( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x );

	expected = {
		'data': x,
		'type': 'mask',
		'dtype': 'uint8'
	};
	actual = ArrayIndex.get( idx.id );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual.data, x, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	expected = {
		'data': x,
		'type': 'int',
		'dtype': 'int32'
	};
	actual = ArrayIndex.get( idx.id );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual.data, x, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method which frees non-persisted index arrays', function test( t ) {
	var idx;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ArrayIndex.get( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x, {
		'persist': false
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	ArrayIndex.get( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method which does not free persisted index arrays', function test( t ) {
	var idx;
	var x;
	var i;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x, {
		'persist': true
	});

	t.strictEqual( idx.isCached, true, 'returns expected value' );

	for ( i = 0; i < 100; i++ ) {
		ArrayIndex.get( idx.id );
		t.strictEqual( idx.isCached, true, 'returns expected value' );
	}
	ArrayIndex.free( idx.id );
	t.strictEqual( idx.isCached, false, 'returns expected value' );

	t.end();
});

tape( 'attached to the constructor is a `get` method which returns `null` if unable to resolve an index array', function test( t ) {
	var actual;
	var idx;
	var id;
	var x;

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x );

	id = idx.id;
	ArrayIndex.free( id );
	actual = ArrayIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = [ 1, 2, 3 ];
	idx = new ArrayIndex( x, {
		'persist': true
	});

	id = idx.id;
	ArrayIndex.free( id );
	actual = ArrayIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = toAccessorArray( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	id = idx.id;
	ArrayIndex.free( id );
	actual = ArrayIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = [ true, false, true, false ];
	idx = new ArrayIndex( x );

	id = idx.id;
	ArrayIndex.free( id );
	actual = ArrayIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = new BooleanArray( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x );

	id = idx.id;
	ArrayIndex.free( id );
	actual = ArrayIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = new Uint8Array( [ 1, 0, 1, 0 ] );
	idx = new ArrayIndex( x );

	id = idx.id;
	ArrayIndex.free( id );
	actual = ArrayIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	x = new Int32Array( [ 1, 2, 3 ] );
	idx = new ArrayIndex( x );

	id = idx.id;
	ArrayIndex.free( id );
	actual = ArrayIndex.get( id );
	t.strictEqual( actual, null, 'returns expected value' );

	actual = ArrayIndex.get( '??beep_boop_foo_bar!!' );
	t.strictEqual( actual, null, 'returns expected value' );

	t.end();
});
