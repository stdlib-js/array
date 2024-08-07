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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var noop = require( '@stdlib/utils/noop' );
var Complex64Array = require( './../../complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var array2iterator = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2iterator, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an array-like object', function test( t ) {
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
			array2iterator( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an array-like object (callback)', function test( t ) {
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
			array2iterator( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
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
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			array2iterator( [ 1, 2, 3, 4 ], value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var r;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = array2iterator( values );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		actual.push( r );
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (array-like object)', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var r;
	var i;

	values = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = array2iterator( values );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		actual.push( r );
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (accessors)', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var v1;
	var v2;
	var r;
	var i;

	values = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	expected = [
		{
			'value': new Complex64( 1.0, 2.0 ),
			'done': false
		},
		{
			'value': new Complex64( 3.0, 4.0 ),
			'done': false
		},
		{
			'value': new Complex64( 5.0, 6.0 ),
			'done': false
		},
		{
			'value': new Complex64( 7.0, 8.0 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = array2iterator( values );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		actual.push( r );
		t.equal( typeof r.value, 'object', 'returns an object' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	actual.push( it.next() );

	t.equal( actual.length, expected.length, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		v1 = actual[ i ];
		v2 = expected[ i ];
		if ( i < expected.length-1 ) {
			t.equal( realf( v1.value ), realf( v2.value ), 'returns expected value' );
			t.equal( imagf( v1.value ), imagf( v2.value ), 'returns expected value' );
		}
		t.equal( v1.done, v2.done, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which supports invoking a provided function for each iterated value', function test( t ) {
	var expected;
	var values;
	var it;
	var r;
	var i;

	values = [ 1, 2, 3, 4 ];

	it = array2iterator( values, scale );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [];
	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		t.equal( r.value, expected[ i ], 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.equal( expected.length, values.length, 'has expected length' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function scale( v, i ) {
		v *= i + 1;
		expected.push( v );
		return v;
	}
});

tape( 'the function returns an iterator protocol-compliant object which supports invoking a provided function for each iterated value (array-like)', function test( t ) {
	var expected;
	var values;
	var it;
	var r;
	var i;

	values = {
		'length': 4,
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4
	};

	it = array2iterator( values, scale );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [];
	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		t.equal( r.value, expected[ i ], 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.equal( expected.length, values.length, 'has expected length' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function scale( v, i ) {
		v *= i + 1;
		expected.push( v );
		return v;
	}
});

tape( 'the function returns an iterator protocol-compliant object which supports invoking a provided function for each iterated value (accessors)', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var v1;
	var v2;
	var r;
	var i;

	values = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	expected = [
		{
			'value': new Complex64( 2.0, 4.0 ),
			'done': false
		},
		{
			'value': new Complex64( 6.0, 8.0 ),
			'done': false
		},
		{
			'value': new Complex64( 10.0, 12.0 ),
			'done': false
		},
		{
			'value': new Complex64( 14.0, 16.0 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = array2iterator( values, scale );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		actual.push( r );
		t.equal( typeof r.value, 'object', 'returns an object' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	actual.push( it.next() );

	t.equal( actual.length, expected.length, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		v1 = actual[ i ];
		v2 = expected[ i ];
		if ( i < expected.length-1 ) {
			t.equal( realf( v1.value ), realf( v2.value ), 'returns expected value' );
			t.equal( imagf( v1.value ), imagf( v2.value ), 'returns expected value' );
		}
		t.equal( v1.done, v2.done, 'returns expected value' );
	}
	t.end();

	function scale( v ) {
		return new Complex64( realf( v )*2.0, imagf( v )*2.0 );
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = array2iterator( [ 1, 2, 3, 4 ] );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument; callback)', function test( t ) {
	var it;
	var r;

	it = array2iterator( [ 1, 2, 3, 4 ], scale );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = array2iterator( [ 1, 2, 3, 4 ] );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument; callback)', function test( t ) {
	var it;
	var r;

	it = array2iterator( [ 1, 2, 3, 4 ], scale );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable', function test( t ) {
	var array2iterator;
	var values;
	var it1;
	var it2;
	var i;

	array2iterator = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	values = [ 1, 2, 3, 4 ];

	it1 = array2iterator( values );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < values.length; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable (callback)', function test( t ) {
	var array2iterator;
	var values;
	var it1;
	var it2;
	var i;

	array2iterator = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	values = [ 1, 2, 3, 4 ];

	it1 = array2iterator( values, scale );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < values.length; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function scale( v ) {
		return v * 10.0;
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var array2iterator;
	var it;

	array2iterator = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = array2iterator( [ 1, 2, 3, 4 ] );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable" (callback)', function test( t ) {
	var array2iterator;
	var it;

	array2iterator = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = array2iterator( [ 1, 2, 3, 4 ], scale );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});
