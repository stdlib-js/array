/* eslint-disable max-lines, max-len */

/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Complex128Array = require( './../../complex128' );
var Complex64Array = require( './../../complex64' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var isArray = require( '@stdlib/assert/is-array' );
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isComplex128Array = require( '@stdlib/assert/is-complex128array' );
var isComplex64Array = require( '@stdlib/assert/is-complex64array' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var everyBy = require( '@stdlib/utils/every-by' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var zeros = require( './../../base/zeros' );
var toStrided = require( './fixtures/complex_strided.js' );
var linspace = require( './../lib/assign.js' );


// FUNCTIONS //

/**
* Returns an array-like object which uses accessors.
*
* @private
* @param {NonNegativeInteger} len - array length
* @returns {ArrayLikeObject} array-like object
*/
function AccessorArray( len ) {
	var self = this;
	this.data = zeros( len );
	this.length = len;
	this.set = setter;
	this.get = getter;
	return this;

	function setter( value, idx ) {
		self.data[ idx ] = value;
	}

	function getter( idx ) {
		return self.data[ idx ];
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof linspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not a real or complex number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
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
			linspace( value, 10, new Float64Array( 10 ) );
		};
	}
});

tape( 'the function throws an error if the first argument is not a real or complex number (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
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
			linspace( value, 10, new Float64Array( 10 ), {} );
		};
	}
});

tape( 'the function throws an error if the second argument is not a real or complex number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
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
			linspace( 0, value, new Float64Array( 10 ) );
		};
	}
});

tape( 'the function throws an error if the second argument is not a real or complex number (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
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
			linspace( 0, value, new Float64Array( 10 ), {} );
		};
	}
});

tape( 'the function throws an error if the third argument is not an array-like object', function test( t ) {
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
			linspace( 0, 10, value );
		};
	}
});

tape( 'the function throws an error if the third argument is not an array-like object (options)', function test( t ) {
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
			linspace( 0, 10, value, {} );
		};
	}
});

tape( 'the function throws an error if the fourth argument is not an object', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( 0, 10, new Float64Array( 10 ), value );
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( 0, 10, new Float64Array( 10 ), {
				'endpoint': value
			});
		};
	}
});

tape( 'the function throws an error if provided one or more complex number arguments and the data type of the output array is not a complex number data type or "generic"', function test( t ) {
	var values;
	var x1;
	var x2;
	var i;

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	values = [
		new Float64Array( 10 ),
		new Float32Array( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( x1, x2, value );
		};
	}
});

tape( 'if the specified output array length is `0`, the function returns the output array unchanged (dtype=float64)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': false
	};
	out = new Float64Array( 0 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float64Array( out.length );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns the output array unchanged (dtype=float32)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': true
	};
	out = new Float32Array( 0 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float32Array( out.length );

	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns the output array unchanged (dtype=complex128)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Complex128Array( 0 );
	actual = linspace( 0, 10, out );
	expected = new Float64Array( out.length*2 );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns the output array unchanged (dtype=complex64)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Complex64Array( 0 );
	actual = linspace( 0, 10, out );
	expected = new Float32Array( out.length*2 );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (real; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = zeros( 0 );
	actual = linspace( 0, 10, out );
	expected = [];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns the output array unchanged (complex; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	out = zeros( 0 );
	actual = linspace( x1, x2, out );
	expected = [];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns the output array unchanged (accessor array)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new AccessorArray( 0 );
	actual = linspace( 0, 10, out );
	expected = zeros( out.length );

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float64)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Float64Array( 1 );
	actual = linspace( 0, 10, out );
	expected = new Float64Array( [ 10.0 ] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float32)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Float32Array( 1 );
	actual = linspace( 0, 10, out );
	expected = new Float32Array( [ 10.0 ] );

	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex128)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Complex128Array( 1 );
	actual = linspace( 0, 10, out );
	expected = new Float64Array( [ 10.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex64)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new Complex64Array( 1 );
	actual = linspace( 0, 10, out );
	expected = new Float32Array( [ 10.0, 0.0 ] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (real; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = zeros( 1 );
	actual = linspace( 0, 10, out );
	expected = [ 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex64; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	out = zeros( 1 );
	actual = linspace( x1, x2, out );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex64( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex128; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	out = zeros( 1 );
	actual = linspace( x1, x2, out );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex-like; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = {
		're': 0.0,
		'im': 0.0
	};
	x2 = {
		're': 100.0,
		'im': 10.0
	};

	out = zeros( 1 );
	actual = linspace( x1, x2, out );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = 0.0;
	x2 = new Complex64( 100.0, 10.0 );

	out = zeros( 1 );
	actual = linspace( x1, x2, out );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 100.0;

	out = zeros( 1 );
	actual = linspace( x1, x2, out );
	expected = [ 100.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (real; accessor array)', function test( t ) {
	var expected;
	var actual;
	var out;

	out = new AccessorArray( 1 );
	actual = linspace( 0, 10, out );
	expected = [ 10.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex; accessor array)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	out = new AccessorArray( 1 );
	actual = linspace( x1, x2, out );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex64( actual.data[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; accessor array)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = 0.0;
	x2 = new Complex64( 100.0, 10.0 );

	out = new AccessorArray( 1 );
	actual = linspace( x1, x2, out );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual.data[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; accessor array)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 100.0;

	out = new AccessorArray( 1 );
	actual = linspace( x1, x2, out );
	expected = [ 100.0, 0.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual.data[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float64; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': true
	};
	out = new Float64Array( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float64Array( [ 10.0 ] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float32; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': true
	};
	out = new Float32Array( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float32Array( [ 10.0 ] );

	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex128; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': true
	};
	out = new Complex128Array( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float64Array( [ 10.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex64; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': true
	};
	out = new Complex64Array( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float32Array( [ 10.0, 0.0 ] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (real; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': true
	};
	out = zeros( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = [ 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex64; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex64( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex128; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	opts = {
		'endpoint': true
	};
	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex-like; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = {
		're': 0.0,
		'im': 0.0
	};
	x2 = {
		're': 100.0,
		'im': 10.0
	};

	opts = {
		'endpoint': true
	};
	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = 0.0;
	x2 = new Complex64( 100.0, 10.0 );

	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 100.0;

	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 100.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (real; accessor array; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': true
	};
	out = new AccessorArray( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = [ 10.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex; accessor array; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	out = new AccessorArray( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex64( actual.data[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; accessor array; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = 0.0;
	x2 = new Complex64( 100.0, 10.0 );

	out = new AccessorArray( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual.data[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; accessor array; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 100.0;

	out = new AccessorArray( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 100.0, 0.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual.data[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float64; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': false
	};
	out = new Float64Array( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float64Array( [ 0.0 ] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float32; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': false
	};
	out = new Float32Array( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float32Array( [ 0.0 ] );

	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex128; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': false
	};
	out = new Complex128Array( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex64; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': false
	};
	out = new Complex64Array( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = new Float32Array( [ 0.0, 0.0 ] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (real; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': false
	};
	out = zeros( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = [ 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex64; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex64( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex128; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex-like; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = {
		're': 0.0,
		'im': 0.0
	};
	x2 = {
		're': 100.0,
		'im': 10.0
	};

	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = 0.0;
	x2 = new Complex64( 100.0, 10.0 );

	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 100.0;

	out = zeros( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (real; accessor array; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;

	opts = {
		'endpoint': false
	};
	out = new AccessorArray( 1 );
	actual = linspace( 0, 10, out, opts );
	expected = [ 0.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex; accessor array; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	out = new AccessorArray( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex64( actual.data[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; accessor array; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = 0.0;
	x2 = new Complex64( 100.0, 10.0 );

	out = new AccessorArray( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual.data[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; accessor array; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 100.0;

	out = new AccessorArray( 1 );
	actual = linspace( x1, x2, out, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isComplex128( actual.data[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (real; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = 0.0;
	x2 = 10.0;

	opts = {
		'endpoint': false
	};

	out = new Float64Array( 2 );
	actual = linspace( x1, x2, out, opts );
	expected = new Float64Array( [ x1, 5.0 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 2 );
	actual = linspace( x2, x1, out, opts );
	expected = new Float64Array( [ x2, 5.0 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 5 );
	actual = linspace( x1, x2, out, opts );
	expected = new Float64Array( [ x1, 2.0, 4.0, 6.0, 8.0 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 5 );
	actual = linspace( x2, x1, out, opts );
	expected = new Float64Array( [ x2, 8.0, 6.0, 4.0, 2.0 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 5 );
	actual = linspace( x2, x2, out, opts );
	expected = new Float64Array( [ x2, x2, x2, x2, x2 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 5 );
	actual = linspace( x1, x2, out, opts );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x1, 'returns expected value' );
	t.notEqual( actual[ actual.length-1 ], x2, 'returns expected value' );

	out = new Float64Array( 5 );
	actual = linspace( x2, x1, out, opts );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.notEqual( actual[ actual.length-1 ], x1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (real; dtype=float64)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = -5.0;
	x2 = 5.0;

	opts = {
		'dtype': 'float64'
	};

	out = new Float64Array( 2 );
	actual = linspace( x1, x2, out, opts );
	expected = new Float64Array( [ x1, x2 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 2 );
	actual = linspace( x2, x1, out, opts );
	expected = new Float64Array( [ x2, x1 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 6 );
	actual = linspace( x1, x2, out, opts );
	expected = new Float64Array( [ x1, -3.0, -1.0, 1.0, 3.0, x2 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 6 );
	actual = linspace( x2, x1, out, opts );
	expected = new Float64Array( [ x2, 3.0, 1.0, -1.0, -3.0, x1 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 6 );
	actual = linspace( x2, x2, out, opts );
	expected = new Float64Array( [ x2, x2, x2, x2, x2, x2 ] );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float64Array( 5 );
	actual = linspace( x1, x2, out, opts );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x1, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], x2, 'returns expected value' );

	out = new Float64Array( 5 );
	actual = linspace( x2, x1, out, opts );
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], x1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (real; dtype=float32)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = -5.0;
	x2 = 5.0;

	out = new Float32Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ x1, x2 ] );
	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float32Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ x2, x1 ] );
	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float32Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ x1, -3.0, -1.0, 1.0, 3.0, x2 ] );
	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float32Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ x2, 3.0, 1.0, -1.0, -3.0, x1 ] );
	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float32Array( 6 );
	actual = linspace( x2, x2, out );
	expected = new Float32Array( [ x2, x2, x2, x2, x2, x2 ] );
	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = new Float32Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x1, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], x2, 'returns expected value' );

	out = new Float32Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], x1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (real; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = -5.0;
	x2 = 5.0;

	out = zeros( 2 );
	actual = linspace( x1, x2, out );
	expected =[ x1, x2 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 2 );
	actual = linspace( x2, x1, out );
	expected =[ x2, x1 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x1, x2, out );
	expected =[ x1, -3.0, -1.0, 1.0, 3.0, x2 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x2, x1, out );
	expected =[ x2, 3.0, 1.0, -1.0, -3.0, x1 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x2, x2, out );
	expected =[ x2, x2, x2, x2, x2, x2 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x1, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], x2, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], x1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (real; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = 0.0;
	x2 = 10.0;

	opts = {
		'endpoint': false
	};

	out = zeros( 2 );
	actual = linspace( x1, x2, out, opts );
	expected = [ x1, 5.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 2 );
	actual = linspace( x2, x1, out, opts );
	expected = [ x2, 5.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x1, x2, out, opts );
	expected = [ x1, 2.0, 4.0, 6.0, 8.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x2, x1, out, opts );
	expected = [ x2, 8.0, 6.0, 4.0, 2.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x2, x2, out, opts );
	expected = [ x2, x2, x2, x2, x2 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x1, x2, out, opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x1, 'returns expected value' );
	t.notEqual( actual[ actual.length-1 ], x2, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x2, x1, out, opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.notEqual( actual[ actual.length-1 ], x1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (real; accessor array)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = -5.0;
	x2 = 5.0;

	out = new AccessorArray( 2 );
	actual = linspace( x1, x2, out );
	expected =[ x1, x2 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 2 );
	actual = linspace( x2, x1, out );
	expected =[ x2, x1 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x1, x2, out );
	expected =[ x1, -3.0, -1.0, 1.0, 3.0, x2 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x2, x1, out );
	expected =[ x2, 3.0, 1.0, -1.0, -3.0, x1 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x2, x2, out );
	expected =[ x2, x2, x2, x2, x2, x2 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.data[ 0 ], x1, 'returns expected value' );
	t.strictEqual( actual.data[ actual.length-1 ], x2, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.data[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual.data[ actual.length-1 ], x1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (real; accessor array; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = 0.0;
	x2 = 10.0;

	opts = {
		'endpoint': false
	};

	out = new AccessorArray( 2 );
	actual = linspace( x1, x2, out, opts );
	expected = [ x1, 5.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 2 );
	actual = linspace( x2, x1, out, opts );
	expected = [ x2, 5.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x1, x2, out, opts );
	expected = [ x1, 2.0, 4.0, 6.0, 8.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x2, x1, out, opts );
	expected = [ x2, 8.0, 6.0, 4.0, 2.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x2, x2, out, opts );
	expected = [ x2, x2, x2, x2, x2 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual.data, expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x1, x2, out, opts );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.data[ 0 ], x1, 'returns expected value' );
	t.notEqual( actual.data[ actual.length-1 ], x2, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x2, x1, out, opts );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( actual.data[ 0 ], x2, 'returns expected value' );
	t.notEqual( actual.data[ actual.length-1 ], x1, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 10.0;

	opts = {
		'endpoint': false
	};

	out = new Complex128Array( 2 );
	actual = linspace( x1, x2, out, opts );
	expected = new Float64Array( [ realf( x1 ), imagf( x1 ), 5.0, 0.0 ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 2 );
	actual = linspace( x2, x1, out, opts );
	expected = new Float64Array( [ x2, 0.0, 5.0, 0.0 ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x1, x2, out, opts );
	expected = new Float64Array( [ realf( x1 ), imagf( x1 ), 2.0, 0.0, 4.0, 0.0, 6.0, 0.0, 8.0, 0.0 ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x2, x1, out, opts );
	expected = new Float64Array( [ x2, 0.0, 8.0, 0.0, 6.0, 0.0, 4.0, 0.0, 2.0, 0.0 ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x1, x2, out, opts );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.notEqual( actual[ actual.length-2 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x2, x1, out, opts );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.notEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; dtype=complex128)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( -5.0, -5.0 );
	x2 = 5.0;

	out = new Complex128Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ realf( x1 ), imagf( x1 ), x2, 0.0 ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ x2, 0.0, realf( x1 ), imagf( x1 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ realf( x1 ), imagf( x1 ), -3.0, -4.0, -1.0, -3.0, 1.0, -2.0, 3.0, -1.0, x2, 0.0 ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ x2, 0.0, 3.0, -1.0, 1.0, -2.0, -1.0, -3.0, -3.0, -4.0, realf( x1 ), imagf( x1 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; dtype=complex64)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( -5.0, -5.0 );
	x2 = 5.0;

	out = new Complex64Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ realf( x1 ), imagf( x1 ), x2, 0.0 ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ x2, 0.0, realf( x1 ), imagf( x1 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ realf( x1 ), imagf( x1 ), -3.0, -4.0, -1.0, -3.0, 1.0, -2.0, 3.0, -1.0, x2, 0.0 ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ x2, 0.0, 3.0, -1.0, 1.0, -2.0, -1.0, -3.0, -3.0, -4.0, realf( x1 ), imagf( x1 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( -5.0, -5.0 );
	x2 = 5.0;

	out = zeros( 2 );
	actual = linspace( x1, x2, out );
	expected = [ realf( x1 ), imagf( x1 ), x2, 0.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 2 );
	actual = linspace( x2, x1, out );
	expected = [ x2, 0.0, realf( x1 ), imagf( x1 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x1, x2, out );
	expected = [ realf( x1 ), imagf( x1 ), -3.0, -4.0, -1.0, -3.0, 1.0, -2.0, 3.0, -1.0, x2, 0.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x2, x1, out );
	expected = [ x2, 0.0, 3.0, -1.0, 1.0, -2.0, -1.0, -3.0, -3.0, -4.0, realf( x1 ), imagf( x1 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 10.0;

	opts = {
		'endpoint': false
	};

	out = zeros( 2 );
	actual = linspace( x1, x2, out, opts );
	expected = [ realf( x1 ), imagf( x1 ), 5.0, 0.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 2 );
	actual = linspace( x2, x1, out, opts );
	expected = [ x2, 0.0, 5.0, 0.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x1, x2, out, opts );
	expected = [ realf( x1 ), imagf( x1 ), 2.0, 0.0, 4.0, 0.0, 6.0, 0.0, 8.0, 0.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x2, x1, out, opts );
	expected = [ x2, 0.0, 8.0, 0.0, 6.0, 0.0, 4.0, 0.0, 2.0, 0.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x1, x2, out, opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.notEqual( actual[ actual.length-2 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x2, x1, out, opts );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.notEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; accessor array)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( -5.0, -5.0 );
	x2 = 5.0;

	out = new AccessorArray( 2 );
	actual = linspace( x1, x2, out );
	expected = [ realf( x1 ), imagf( x1 ), x2, 0.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 2 );
	actual = linspace( x2, x1, out );
	expected = [ x2, 0.0, realf( x1 ), imagf( x1 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x1, x2, out );
	expected = [ realf( x1 ), imagf( x1 ), -3.0, -4.0, -1.0, -3.0, 1.0, -2.0, 3.0, -1.0, x2, 0.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x2, x1, out );
	expected = [ x2, 0.0, 3.0, -1.0, 1.0, -2.0, -1.0, -3.0, -3.0, -4.0, realf( x1 ), imagf( x1 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; accessor array; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 10.0;

	opts = {
		'endpoint': false
	};

	out = new AccessorArray( 2 );
	actual = linspace( x1, x2, out, opts );
	expected = [ realf( x1 ), imagf( x1 ), 5.0, 0.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 2 );
	actual = linspace( x2, x1, out, opts );
	expected = [ x2, 0.0, 5.0, 0.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x1, x2, out, opts );
	expected = [ realf( x1 ), imagf( x1 ), 2.0, 0.0, 4.0, 0.0, 6.0, 0.0, 8.0, 0.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x2, x1, out, opts );
	expected = [ x2, 0.0, 8.0, 0.0, 6.0, 0.0, 4.0, 0.0, 2.0, 0.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x1, x2, out, opts );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.notEqual( actual[ actual.length-2 ], x2, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x2, x1, out, opts );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], x2, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.notEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; dtype=complex128)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = -5.0;
	x2 = new Complex64( 5.0, 5.0 );

	out = new Complex128Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ x1, 0.0, realf( x2 ), imagf( x2 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ realf( x2 ), imagf( x2 ), x1, 0.0 ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ x1, 0.0, -3.0, 1.0, -1.0, 2.0, 1.0, 3.0, 3.0, 4.0, realf( x2 ), imagf( x2 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ realf( x2 ), imagf( x2 ), 3.0, 4.0, 1.0, 3.0, -1.0, 2.0, -3.0, 1.0, x1, 0.0 ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], x1, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x2 ), 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], x1, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; dtype=complex64)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = -5.0;
	x2 = new Complex64( 5.0, 5.0 );

	out = new Complex64Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ x1, 0.0, realf( x2 ), imagf( x2 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ realf( x2 ), imagf( x2 ), x1, 0.0 ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ x1, 0.0, -3.0, 1.0, -1.0, 2.0, 1.0, 3.0, 3.0, 4.0, realf( x2 ), imagf( x2 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ realf( x2 ), imagf( x2 ), 3.0, 4.0, 1.0, 3.0, -1.0, 2.0, -3.0, 1.0, x1, 0.0 ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], x1, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x2 ), 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], x1, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = -5.0;
	x2 = new Complex64( 5.0, 5.0 );

	out = zeros( 2 );
	actual = linspace( x1, x2, out );
	expected = [ x1, 0.0, realf( x2 ), imagf( x2 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 2 );
	actual = linspace( x2, x1, out );
	expected = [ realf( x2 ), imagf( x2 ), x1, 0.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x1, x2, out );
	expected = [ x1, 0.0, -3.0, 1.0, -1.0, 2.0, 1.0, 3.0, 3.0, 4.0, realf( x2 ), imagf( x2 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x2, x1, out );
	expected = [ realf( x2 ), imagf( x2 ), 3.0, 4.0, 1.0, 3.0, -1.0, 2.0, -3.0, 1.0, x1, 0.0 ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], x1, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x2 ), 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], x1, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (mixed; accessor array)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = -5.0;
	x2 = new Complex64( 5.0, 5.0 );

	out = new AccessorArray( 2 );
	actual = linspace( x1, x2, out );
	expected = [ x1, 0.0, realf( x2 ), imagf( x2 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 2 );
	actual = linspace( x2, x1, out );
	expected = [ realf( x2 ), imagf( x2 ), x1, 0.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x1, x2, out );
	expected = [ x1, 0.0, -3.0, 1.0, -1.0, 2.0, 1.0, 3.0, 3.0, 4.0, realf( x2 ), imagf( x2 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x2, x1, out );
	expected = [ realf( x2 ), imagf( x2 ), 3.0, 4.0, 1.0, 3.0, -1.0, 2.0, -3.0, 1.0, x1, 0.0 ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], x1, 'returns expected value' );
	t.strictEqual( actual[ 1 ], 0.0, 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x2 ), 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], x1, 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 10.0, 10.0 );

	opts = {
		'endpoint': false
	};

	out = new Complex64Array( 2 );
	actual = linspace( x1, x2, out, opts );
	expected = new Float32Array( [ realf( x1 ), imagf( x1 ), 5.0, 5.0 ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 2 );
	actual = linspace( x2, x1, out, opts );
	expected = new Float32Array( [ realf( x2 ), imagf( x2 ), 5.0, 5.0 ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x1, x2, out, opts );
	expected = new Float32Array( [ realf( x1 ), imagf( x1 ), 2.0, 2.0, 4.0, 4.0, 6.0, 6.0, 8.0, 8.0 ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x2, x1, out, opts );
	expected = new Float32Array( [ realf( x2 ), imagf( x2 ), 8.0, 8.0, 6.0, 6.0, 4.0, 4.0, 2.0, 2.0 ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x1, x2, out, opts );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.notEqual( actual[ actual.length-2 ], realf( x2 ), 'returns expected value' );
	t.notEqual( actual[ actual.length-1 ], imagf( x2 ), 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x2, x1, out, opts );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x2 ), 'returns expected value' );
	t.notEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.notEqual( actual[ actual.length-1 ], imagf( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex64; dtype=complex64)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( -5.0, -5.0 );
	x2 = new Complex64( 5.0, 5.0 );

	out = new Complex64Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ realf( x1 ), imagf( x1 ), realf( x2 ), imagf( x2 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ realf( x2 ), imagf( x2 ), realf( x1 ), imagf( x1 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ realf( x1 ), imagf( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, realf( x2 ), imagf( x2 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ realf( x2 ), imagf( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, realf( x1 ), imagf( x1 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x2 ), 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex64; dtype=complex128)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( -5.0, -5.0 );
	x2 = new Complex64( 5.0, 5.0 );

	out = new Complex128Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ realf( x1 ), imagf( x1 ), realf( x2 ), imagf( x2 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ realf( x2 ), imagf( x2 ), realf( x1 ), imagf( x1 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ realf( x1 ), imagf( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, realf( x2 ), imagf( x2 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ realf( x2 ), imagf( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, realf( x1 ), imagf( x1 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x2 ), 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex64; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( -5.0, -5.0 );
	x2 = new Complex64( 5.0, 5.0 );

	out = zeros( 2 );
	actual = linspace( x1, x2, out );
	expected = [ realf( x1 ), imagf( x1 ), realf( x2 ), imagf( x2 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 2 );
	actual = linspace( x2, x1, out );
	expected = [ realf( x2 ), imagf( x2 ), realf( x1 ), imagf( x1 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x1, x2, out );
	expected = [ realf( x1 ), imagf( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, realf( x2 ), imagf( x2 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x2, x1, out );
	expected = [ realf( x2 ), imagf( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, realf( x1 ), imagf( x1 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x2 ), 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex64; accessor array)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex64( -5.0, -5.0 );
	x2 = new Complex64( 5.0, 5.0 );

	out = new AccessorArray( 2 );
	actual = linspace( x1, x2, out );
	expected = [ realf( x1 ), imagf( x1 ), realf( x2 ), imagf( x2 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 2 );
	actual = linspace( x2, x1, out );
	expected = [ realf( x2 ), imagf( x2 ), realf( x1 ), imagf( x1 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x1, x2, out );
	expected = [ realf( x1 ), imagf( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, realf( x2 ), imagf( x2 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x2, x1, out );
	expected = [ realf( x2 ), imagf( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, realf( x1 ), imagf( x1 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x2 ), 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex64, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], realf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imagf( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], realf( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imagf( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex128; dtype=complex64)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex128( -5.0, -5.0 );
	x2 = new Complex128( 5.0, 5.0 );

	out = new Complex64Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ real( x1 ), imag( x1 ), real( x2 ), imag( x2 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ real( x2 ), imag( x2 ), real( x1 ), imag( x1 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ real( x1 ), imag( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, real( x2 ), imag( x2 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ real( x2 ), imag( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, real( x1 ), imag( x1 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x2 ), 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex128; dtype=complex128)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex128( -5.0, -5.0 );
	x2 = new Complex128( 5.0, 5.0 );

	out = new Complex128Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ real( x1 ), imag( x1 ), real( x2 ), imag( x2 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ real( x2 ), imag( x2 ), real( x1 ), imag( x1 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ real( x1 ), imag( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, real( x2 ), imag( x2 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ real( x2 ), imag( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, real( x1 ), imag( x1 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x2 ), 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex128; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex128( -5.0, -5.0 );
	x2 = new Complex128( 5.0, 5.0 );

	out = zeros( 2 );
	actual = linspace( x1, x2, out );
	expected = [ real( x1 ), imag( x1 ), real( x2 ), imag( x2 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 2 );
	actual = linspace( x2, x1, out );
	expected = [ real( x2 ), imag( x2 ), real( x1 ), imag( x1 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x1, x2, out );
	expected = [ real( x1 ), imag( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, real( x2 ), imag( x2 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 6 );
	actual = linspace( x2, x1, out );
	expected = [ real( x2 ), imag( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, real( x1 ), imag( x1 ) ];
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x2 ), 'returns expected value' );

	out = zeros( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual );
	t.strictEqual( actual[ 0 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex128; accessor arrays)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = new Complex128( -5.0, -5.0 );
	x2 = new Complex128( 5.0, 5.0 );

	out = new AccessorArray( 2 );
	actual = linspace( x1, x2, out );
	expected = [ real( x1 ), imag( x1 ), real( x2 ), imag( x2 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 2 );
	actual = linspace( x2, x1, out );
	expected = [ real( x2 ), imag( x2 ), real( x1 ), imag( x1 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x1, x2, out );
	expected = [ real( x1 ), imag( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, real( x2 ), imag( x2 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 6 );
	actual = linspace( x2, x1, out );
	expected = [ real( x2 ), imag( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, real( x1 ), imag( x1 ) ];
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual.data ), expected, 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x2 ), 'returns expected value' );

	out = new AccessorArray( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isArrayLikeObject( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( everyBy( actual.data, naryFunction( isComplex128, 1 ) ), true, 'returns expected value' );

	actual = toStrided( actual.data );
	t.strictEqual( actual[ 0 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex-like; dtype=complex64)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = {
		're': -5.0,
		'im': -5.0
	};
	x2 = {
		're': 5.0,
		'im': 5.0
	};

	out = new Complex64Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ real( x1 ), imag( x1 ), real( x2 ), imag( x2 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ real( x2 ), imag( x2 ), real( x1 ), imag( x1 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float32Array( [ real( x1 ), imag( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, real( x2 ), imag( x2 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float32Array( [ real( x2 ), imag( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, real( x1 ), imag( x1 ) ] );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x2 ), 'returns expected value' );

	out = new Complex64Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret64( actual, 0 );
	t.strictEqual( actual[ 0 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x1 ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (complex-like; dtype=complex128)', function test( t ) {
	var expected;
	var actual;
	var out;
	var x1;
	var x2;

	x1 = {
		're': -5.0,
		'im': -5.0
	};
	x2 = {
		're': 5.0,
		'im': 5.0
	};

	out = new Complex128Array( 2 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ real( x1 ), imag( x1 ), real( x2 ), imag( x2 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 2 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ real( x2 ), imag( x2 ), real( x1 ), imag( x1 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 2, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x1, x2, out );
	expected = new Float64Array( [ real( x1 ), imag( x1 ), -3.0, -3.0, -1.0, -1.0, 1.0, 1.0, 3.0, 3.0, real( x2 ), imag( x2 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 6 );
	actual = linspace( x2, x1, out );
	expected = new Float64Array( [ real( x2 ), imag( x2 ), 3.0, 3.0, 1.0, 1.0, -1.0, -1.0, -3.0, -3.0, real( x1 ), imag( x1 ) ] );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 6, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x1, x2, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x2 ), 'returns expected value' );

	out = new Complex128Array( 5 );
	actual = linspace( x2, x1, out );
	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.strictEqual( actual.length, 5, 'returns expected value' );
	t.strictEqual( actual, out, 'returns expected value' );

	actual = reinterpret128( actual, 0 );
	t.strictEqual( actual[ 0 ], real( x2 ), 'returns expected value' );
	t.strictEqual( actual[ 1 ], imag( x2 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-2 ], real( x1 ), 'returns expected value' );
	t.strictEqual( actual[ actual.length-1 ], imag( x1 ), 'returns expected value' );

	t.end();
});
