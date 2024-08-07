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
var ArrayBuffer = require( './../../buffer' );
var Float32Array = require( './../../float32' );
var Complex128Array = require( './../../complex128' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var Complex64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var arr = new Complex64Array( 0 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var ctor;
	var arr;

	ctor = Complex64Array;

	arr = ctor( 0 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (no argument)', function test( t ) {
	var arr = new Complex64Array();
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (no argument, no new)', function test( t ) {
	var ctor;
	var arr;

	ctor = Complex64Array;

	arr = ctor();
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (length)', function test( t ) {
	var arr = new Complex64Array( 10 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (length, no new)', function test( t ) {
	var ctor;
	var arr;

	ctor = Complex64Array;

	arr = ctor( 10 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (array)', function test( t ) {
	var arr = new Complex64Array( [] );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (array, no new)', function test( t ) {
	var ctor;
	var arr;

	ctor = Complex64Array;

	arr = ctor( [] );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (typed array)', function test( t ) {
	var arr = new Complex64Array( new Float32Array( 0 ) );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (typed array, no new)', function test( t ) {
	var ctor;
	var arr;

	ctor = Complex64Array;

	arr = ctor( new Float32Array( 0 ) );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (complex typed array)', function test( t ) {
	var arr = new Complex64Array( new Complex64Array( 0 ) );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (complex typed array, no new)', function test( t ) {
	var ctor;
	var arr;

	ctor = Complex64Array;

	arr = ctor( new Complex64Array( 0 ) );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (iterable)', function test( t ) {
	var Complex64Array;
	var arr;

	Complex64Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = new Complex64Array( createIterable() );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();

	function hasSupport() {
		return true;
	}

	function createIterable() {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
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
});

tape( 'the constructor returns a 64-bit complex number array (iterable, no new)', function test( t ) {
	var ctor;
	var arr;

	ctor = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	arr = ctor( createIterable() );
	t.strictEqual( arr instanceof ctor, true, 'returns an instance' );

	t.end();

	function hasSupport() {
		return true;
	}

	function createIterable() {
		var it = {};
		it[ '__SYMBOL_ITERATOR__' ] = iterable;
		return it;

		function iterable() {
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
});

tape( 'the constructor returns a 64-bit complex number array (ArrayBuffer)', function test( t ) {
	var arr = new Complex64Array( new ArrayBuffer( 0 ) );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (ArrayBuffer, no new)', function test( t ) {
	var ctor;
	var arr;

	ctor = Complex64Array;

	arr = ctor( new ArrayBuffer( 0 ) );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (ArrayBuffer, byte offset)', function test( t ) {
	var arr = new Complex64Array( new ArrayBuffer( 8 ), 8 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (ArrayBuffer, byte offset, no new)', function test( t ) {
	var ctor;
	var arr;

	ctor = Complex64Array;

	arr = ctor( new ArrayBuffer( 8 ), 8 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (ArrayBuffer, byte offset, length)', function test( t ) {
	var arr = new Complex64Array( new ArrayBuffer( 8 ), 8, 0 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a 64-bit complex number array (ArrayBuffer, byte offset, length, no new)', function test( t ) {
	var ctor;
	var arr;

	ctor = Complex64Array;

	arr = ctor( new ArrayBuffer( 8 ), 8, 0 );
	t.strictEqual( arr instanceof Complex64Array, true, 'returns an instance' );

	t.end();
});

tape( 'attached to the constructor is a property returning the number of bytes per array element', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64Array, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( Complex64Array.BYTES_PER_ELEMENT, 8, 'returns expected value' );
	t.end();
});

tape( 'attached to the constructor is a property returning the constructor name', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64Array, 'name' ), true, 'has property' );
	t.strictEqual( Complex64Array.name, 'Complex64Array', 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance having a `BYTES_PER_ELEMENT` property returning the number of bytes per array element', function test( t ) {
	var arr;

	t.strictEqual( hasOwnProp( Complex64Array.prototype, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( Complex64Array.prototype.BYTES_PER_ELEMENT, 8, 'returns expected value' );

	arr = new Complex64Array( 0 );
	t.strictEqual( arr.BYTES_PER_ELEMENT, 8, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance having a `buffer` property for returning the underlying memory (i.e., ArrayBuffer)', function test( t ) {
	var arr;
	var buf;

	arr = new Complex64Array( 0 );
	buf = arr.buffer;
	t.strictEqual( isArrayBuffer( buf ), true, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance having a `byteLength` property for returning the number of bytes belonging to the array view', function test( t ) {
	var arr;
	var v;

	arr = new Complex64Array( 0 );
	v = arr.byteLength;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = new Complex64Array( new ArrayBuffer( 64 ), 8 );
	v = arr.byteLength;
	t.strictEqual( v, 56, 'returns expected value' );

	arr = new Complex64Array( new ArrayBuffer( 64 ), 64 );
	v = arr.byteLength;
	t.strictEqual( v, 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance having a `byteOffset` property for returning the byte offset pointing to the first array element in the underlying memory', function test( t ) {
	var arr;
	var v;

	arr = new Complex64Array( 0 );
	v = arr.byteOffset;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = new Complex64Array( new ArrayBuffer( 64 ), 32 );
	v = arr.byteOffset;
	t.strictEqual( v, 32, 'returns expected value' );

	arr = new Complex64Array( new ArrayBuffer( 64 ), 64 );
	v = arr.byteOffset;
	t.strictEqual( v, 64, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance having a `length` property for returning the number of array elements', function test( t ) {
	var arr;
	var z;
	var v;

	// No arguments:
	arr = new Complex64Array();
	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	// Explicit array length:
	arr = new Complex64Array( 0 );
	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = new Complex64Array( 10 );
	v = arr.length;
	t.strictEqual( v, 10, 'returns expected value' );

	// Generic array:
	arr = new Complex64Array( [] );
	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	// Generic array containing complex numbers:
	arr = new Complex64Array( [ new Complex64( 1.0, 1.0 ) ] );
	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	z = new Complex64( 1.0, 0.0 );
	z.valueOf = valueOf( z );
	arr = new Complex64Array( [ z, 1.0 ] );
	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	z = new Complex64( 1.0, 0.0 );
	z.valueOf = valueOf( z );
	arr = new Complex64Array( [ 1.0, z ] );
	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	// Typed array:
	arr = new Complex64Array( new Float32Array( 0 ) );
	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = new Complex64Array( new Float32Array( [ 1.0, 1.0 ] ) );
	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	// Complex typed array:
	arr = new Complex64Array( new Complex64Array( 0 ) );
	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = new Complex64Array( new Complex64Array( [ 1.0, 1.0 ] ) );
	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	arr = new Complex64Array( new Complex128Array( 0 ) );
	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = new Complex64Array( new Complex128Array( [ 1.0, 1.0 ] ) );
	v = arr.length;
	t.strictEqual( v, 1, 'returns expected value' );

	// ArrayBuffer:
	arr = new Complex64Array( new ArrayBuffer( 64 ), 32 );
	v = arr.length;
	t.strictEqual( v, 4, 'returns expected value' );

	arr = new Complex64Array( new ArrayBuffer( 64 ), 64 );
	v = arr.length;
	t.strictEqual( v, 0, 'returns expected value' );

	arr = new Complex64Array( new ArrayBuffer( 64 ), 32, 2 );
	v = arr.length;
	t.strictEqual( v, 2, 'returns expected value' );

	t.end();

	function valueOf( z ) {
		return function valueOf() {
			return realf( z );
		};
	}
});

tape( 'the constructor returns an instance having a `length` property for returning the number of array elements (iterable)', function test( t ) {
	var Complex64Array;
	var iter1;
	var iter2;
	var arr;
	var v;

	Complex64Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	iter1 = {
		'next': next1,
		'i': 0,
		'N': 4
	};
	arr = new Complex64Array( createIterable( iter1 ) );
	v = arr.length;
	t.strictEqual( v, iter1.N, 'returns expected value' );

	iter2 = {
		'next': next2,
		'i': 0,
		'N': 4
	};
	arr = new Complex64Array( createIterable( iter2 ) );
	v = arr.length;
	t.strictEqual( v, iter2.N, 'returns expected value' );

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

	function next1() {
		iter1.i += 1;
		if ( iter1.i <= iter1.N ) {
			return {
				'value': [ 1.0, 1.0 ]
			};
		}
		return {
			'done': true
		};
	}

	function next2() {
		iter2.i += 1;
		if ( iter2.i <= iter2.N ) {
			return {
				'value': new Complex64( 1.0, 1.0 )
			};
		}
		return {
			'done': true
		};
	}
});

tape( 'the constructor throws an error if provided an ArrayBuffer which is not a multiple of 8', function test( t ) {
	var values;
	var i;

	values = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		9,
		74,
		801
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an ArrayBuffer having a byte length equal to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( new ArrayBuffer( value ) );
		};
	}
});

tape( 'the constructor throws an error if provided an array-like object having an odd length', function test( t ) {
	var values;
	var i;

	values = [
		[ 1, 2, 3 ],
		new Float32Array( [ 1, 2, 3 ] ),
		{
			'length': 3,
			'0': 1,
			'1': 2,
			'2': 3
		},
		[ new Complex64( 1.0, 1.0 ), 1.0, 1.0 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array-like object having a length equal to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( value );
		};
	}
});

tape( 'the constructor throws an error if provided a non-iterable object (non-ES2015+)', function test( t ) {
	var Complex64Array;
	var values;
	var i;

	Complex64Array = proxyquire( './../lib/main.js', {
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
			return new Complex64Array( value );
		};
	}

	function hasSupport() {
		return false;
	}
});

tape( 'the constructor throws an error if provided a non-iterable object (ES2015+)', function test( t ) {
	var Complex64Array;
	var values;
	var i;

	Complex64Array = proxyquire( './../lib/main.js', {
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
			return new Complex64Array( value );
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

tape( 'the constructor throws an error if provided an iterable object which does not return complex numbers or arrays of real and imaginary components', function test( t ) {
	var Complex64Array;
	var values;
	var i;

	Complex64Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	values = [
		{
			'__SYMBOL_ITERATOR__': createIterable( next1 )
		},
		{
			'__SYMBOL_ITERATOR__': createIterable( next2 )
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( value );
		};
	}

	function hasSupport() {
		return true;
	}

	function createIterable( next ) {
		return iterable;

		function iterable() {
			return {
				'next': next
			};
		}
	}

	function next1() {
		return {
			'value': 1.0
		};
	}

	function next2() {
		return {
			'value': '1.0 + 1.0i'
		};
	}
});

tape( 'the constructor throws an error if provided an iterable object which does not return array containing at least two elements', function test( t ) {
	var Complex64Array;
	var values;
	var i;

	Complex64Array = proxyquire( './../lib/main.js', {
		'@stdlib/assert/has-iterator-symbol-support': hasSupport,
		'@stdlib/symbol/iterator': '__SYMBOL_ITERATOR__'
	});

	values = [
		{
			'__SYMBOL_ITERATOR__': createIterable( next1 )
		},
		{
			'__SYMBOL_ITERATOR__': createIterable( next2 )
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( value );
		};
	}

	function hasSupport() {
		return true;
	}

	function createIterable( next ) {
		return iterable;

		function iterable() {
			return {
				'next': next
			};
		}
	}

	function next1() {
		return {
			'value': []
		};
	}

	function next2() {
		return {
			'value': [ 1.0 ]
		};
	}
});

tape( 'the constructor throws an error if not provided a length, iterable, array-like object, or ArrayBuffer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( value );
		};
	}
});

tape( 'the constructor throws an error if provided more than one argument and the first argument is not an ArrayBuffer', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( value, 0 );
		};
	}
});

tape( 'the constructor throws an error if provided a byte offset argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		3.14,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( new ArrayBuffer( 64 ), value );
		};
	}
});

tape( 'the constructor throws an error if provided a byte offset argument which is not a multiple of 8', function test( t ) {
	var values;
	var i;

	values = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		9,
		65,
		78,
		801
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( new ArrayBuffer( 1e3 ), value );
		};
	}
});

tape( 'the constructor throws an error if provided a byte offset argument such that the view byte length is not a multiple of 8', function test( t ) {
	var values;
	var i;

	values = [
		8,
		16,
		24,
		32,
		48,
		56,
		64,
		72,
		80,
		88
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( new ArrayBuffer( 102 ), value );
		};
	}
});

tape( 'the constructor throws an error if provided a length argument which is not a nonnegative integer (ArrayBuffer)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		3.14,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( new ArrayBuffer( 64 ), 0, value );
		};
	}
});

tape( 'the constructor throws an error if provided insufficient memory to accommodate byte offset and length arguments', function test( t ) {
	var values;
	var i;

	values = [
		8,
		16,
		24,
		32
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Complex64Array( new ArrayBuffer( 100 ), value, 1e3 );
		};
	}
});
