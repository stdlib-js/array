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
var proxyquire = require( 'proxyquire' );
var Uint8Array = require( './../../float32' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var BooleanArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a `from` method for creating a boolean array from an array-like object or iterable', function test( t ) {
	var arr;

	t.strictEqual( hasOwnProp( BooleanArray, 'from' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.from ), true, 'has method' );

	arr = BooleanArray.from( [] );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a constructor', function test( t ) {
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
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return BooleanArray.from.call( value, [] );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a boolean array constructor', function test( t ) {
	var values;
	var i;

	values = [
		{},
		null,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return BooleanArray.from.call( value, [] );
		};
	}
});

tape( 'the method throws an error if not provided an iterable or array-like object', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return BooleanArray.from( value );
		};
	}
});

tape( 'the method throws an error if not provided an iterable or array-like object (callback)', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return BooleanArray.from( value, clbk );
		};
	}

	function clbk() {
		return true;
	}
});

tape( 'the method throws an error if not provided an iterable or array-like object (callback, thisArg)', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return BooleanArray.from( value, clbk, {} );
		};
	}

	function clbk() {
		return true;
	}
});

tape( 'the method throws an error if provided a second argument which is not a function', function test( t ) {
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
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return BooleanArray.from( [], value );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not a function (thisArg)', function test( t ) {
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
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return BooleanArray.from( [], value, {} );
		};
	}
});

tape( 'the method returns a boolean array', function test( t ) {
	var arr;
	var v;

	// Generic array:
	arr = BooleanArray.from( [] );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = BooleanArray.from( [ true, true, true, true ] );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 4, 'returns expected value' );

	// Generic array containing non-booleans:
	arr = BooleanArray.from( [ 'beep' ] );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	arr = BooleanArray.from( [ null, 4 ] );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	arr = BooleanArray.from( [ true, {}, '' ] );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 3, 'returns expected value' );

	// Typed array:
	arr = BooleanArray.from( new Uint8Array( 0 ) );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = BooleanArray.from( new Uint8Array( [ 1, 1 ] ) );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	// Boolean typed array:
	arr = BooleanArray.from( new BooleanArray( 0 ) );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = BooleanArray.from( new BooleanArray( [ true, false ] ) );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	t.end();
});

tape( 'the method returns a boolean array (iterable)', function test( t ) {
	var BooleanArray;
	var iter;
	var arr;
	var v;

	BooleanArray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	iter = {
		'next': next,
		'i': 0,
		'N': 4
	};
	arr = BooleanArray.from( createIterable( iter ) );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, iter.N, 'returns expected value' );

	t.end();

	function hasSupport() {
		return true;
	}

	function createIterable( iterator ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return iterator;
		}
	}

	function next() {
		iter.i += 1;
		if ( iter.i <= iter.N ) {
			return {
				'value': true
			};
		}
		return {
			'done': true
		};
	}
});

tape( 'the method supports providing a "map" function which is invoked for each source element', function test( t ) {
	var arr;
	var v;

	// Generic array:
	arr = BooleanArray.from( [], clbk1 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = BooleanArray.from( [ true, true, true, true ], clbk1 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 4, 'returns expected value' );

	// Generic array containing non-booleans:
	arr = BooleanArray.from( [ 'beep' ], clbk2 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	arr = BooleanArray.from( [ null ], clbk2 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	arr = BooleanArray.from( [ [], {} ], clbk1 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	arr = BooleanArray.from( [ 4, 5 ], clbk1 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	// Typed array:
	arr = BooleanArray.from( new Uint8Array( 0 ), clbk1 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = BooleanArray.from( new Uint8Array( [ 1, 1 ] ), clbk1 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	// Boolean typed array:
	arr = BooleanArray.from( new BooleanArray( 0 ), clbk2 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = BooleanArray.from( new BooleanArray( [ true, true ] ), clbk2 );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		return v;
	}

	function clbk2() {
		return true;
	}
});

tape( 'the method supports providing a "map" function which is invoked for each iterated value', function test( t ) {
	var BooleanArray;
	var iter;
	var arr;
	var v;

	BooleanArray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	iter = {
		'next': next,
		'i': 0,
		'N': 4
	};
	arr = BooleanArray.from( createIterable( iter ), clbk );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );

	v = arr.length;
	t.strictEqual( v, iter.N, 'returns expected value' );

	t.end();

	function hasSupport() {
		return true;
	}

	function createIterable( iterator ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return iterator;
		}
	}

	function next() {
		iter.i += 1;
		if ( iter.i <= iter.N ) {
			return {
				'value': true
			};
		}
		return {
			'done': true
		};
	}

	function clbk( v ) {
		return !v;
	}
});

tape( 'the method supports providing a `this` context for a provided map function', function test( t ) {
	var arr;
	var ctx;

	ctx = {
		'count': 0
	};
	arr = BooleanArray.from( [ true, true, true, true ], clbk1, ctx );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function clbk1( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v;
	}
});

tape( 'the method supports providing a `this` context for a provided map function (iterable)', function test( t ) {
	var BooleanArray;
	var iter;
	var ctx;
	var arr;

	BooleanArray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	iter = {
		'next': next,
		'i': 0,
		'N': 4
	};
	ctx = {
		'count': 0
	};

	arr = BooleanArray.from( createIterable( iter ), clbk, ctx );
	t.strictEqual( arr instanceof BooleanArray, true, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	t.end();

	function hasSupport() {
		return true;
	}

	function createIterable( iterator ) {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
			return iterator;
		}
	}

	function next() {
		iter.i += 1;
		if ( iter.i <= iter.N ) {
			return {
				'value': true
			};
		}
		return {
			'done': true
		};
	}

	function clbk( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v;
	}
});

tape( 'the method throws an error if provided a non-iterable object (non-ES2015+)', function test( t ) {
	var BooleanArray;
	var values;
	var i;

	BooleanArray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport
	});

	values = [
		{},
		{
			'0': 1,
			'1': 2,
			'2': 3
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return BooleanArray.from( value );
		};
	}

	function hasSupport() {
		return false;
	}
});

tape( 'the method throws an error if provided a non-iterable object (ES2015+)', function test( t ) {
	var BooleanArray;
	var values;
	var i;

	BooleanArray = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	values = [
		{},
		{
			'0': 1,
			'1': 2,
			'2': 3
		},
		{
			'__SYMBOL_ITERATOR__': null
		},
		{
			'__SYMBOL_ITERATOR__': 'beep'
		},
		{
			'__SYMBOL_ITERATOR__': nonIterable1
		},
		{
			'__SYMBOL_ITERATOR__': nonIterable2
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return BooleanArray.from( value );
		};
	}

	function hasSupport() {
		return true;
	}

	function nonIterable1() {
		return null;
	}

	function nonIterable2() {
		return {};
	}
});
