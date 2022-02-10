/* eslint-disable max-lines */

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
var Complex128 = require( '@stdlib/complex/float64' );
var Complex64 = require( '@stdlib/complex/float32' );
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var isComplex128 = require( '@stdlib/assert/is-complex128' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var isArray = require( '@stdlib/assert/is-array' );
var isComplex128Array = require( '@stdlib/assert/is-complex128array' );
var isComplex64Array = require( '@stdlib/assert/is-complex64array' );
var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var toStrided = require( './fixtures/complex_strided.js' );
var linspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof linspace, 'function', 'main export is a function' );
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
			linspace( value, 10, 10 );
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
			linspace( value, 10, 10, {} );
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
			linspace( 0, value, 10 );
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
			linspace( 0, value, 10, {} );
		};
	}
});

tape( 'the function throws an error if the third argument is not a nonnegative integer', function test( t ) {
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
			linspace( 0, 10, value );
		};
	}
});

tape( 'the function throws an error if the third argument is not a nonnegative integer (options)', function test( t ) {
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
			linspace( 0, 10, 10, value );
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
			linspace( 0, 10, 10, {
				'endpoint': value
			});
		};
	}
});

tape( 'the function throws an error if provided an unrecognized/unsupported data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'foo',
		'bar',
		'beep',
		'boop',
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
			linspace( 0, 10, 10, {
				'dtype': value
			});
		};
	}
});

tape( 'the function throws an error if provided one or more complex number arguments and the output data type is not a complex number data type or "generic"', function test( t ) {
	var values;
	var x1;
	var x2;
	var i;

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	values = [
		'float64',
		'float32'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			linspace( x1, x2, 10, {
				'dtype': value
			});
		};
	}
});

tape( 'if the specified output array length is `0`, the function returns an empty array (default; real)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( 0, 10, 0 );
	expected = new Float64Array( [] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (default; mixed)', function test( t ) {
	var expected;
	var actual;
	var x1;
	var x2;

	x1 = 0.0;
	x2 = new Complex128( 100.0, 10.0 );

	actual = linspace( x1, x2, 0 );
	expected = new Float64Array( [] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	x1 = new Complex128( 0.0, 0.0 );
	x2 = 100.0;

	actual = linspace( x1, x2, 0 );
	expected = new Float64Array( [] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (default; complex)', function test( t ) {
	var expected;
	var actual;
	var x1;
	var x2;

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	actual = linspace( x1, x2, 0 );
	expected = new Float64Array( [] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (default; complex64)', function test( t ) {
	var expected;
	var actual;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	actual = linspace( x1, x2, 0 );
	expected = new Float32Array( [] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (default; complex-like)', function test( t ) {
	var expected;
	var actual;
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

	actual = linspace( x1, x2, 0 );
	expected = new Float64Array( [] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (dtype=float64)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'float64',
		'endpoint': false
	};
	actual = linspace( 0, 10, 0, opts );
	expected = new Float64Array( [] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (dtype=float32)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'float32',
		'endpoint': true
	};
	actual = linspace( 0, 10, 0, opts );
	expected = new Float32Array( [] );

	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (dtype=complex128)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'complex128'
	};
	actual = linspace( 0, 10, 0, opts );
	expected = new Float64Array( [] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (dtype=complex64)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'complex64'
	};
	actual = linspace( 0, 10, 0, opts );
	expected = new Float32Array( [] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (real; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'generic'
	};
	actual = linspace( 0, 10, 0, opts );
	expected = [];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `0`, the function returns an empty array (complex; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	opts = {
		'dtype': 'generic'
	};
	actual = linspace( x1, x2, 0, opts );
	expected = [];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; real)', function test( t ) {
	var expected;
	var actual;

	actual = linspace( 0, 10, 1 );
	expected = new Float64Array( [ 10.0 ] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; mixed)', function test( t ) {
	var expected;
	var actual;
	var x1;
	var x2;

	x1 = 0.0;
	x2 = new Complex128( 100.0, 10.0 );

	actual = linspace( x1, x2, 1 );
	expected = new Float64Array( [ 100.0, 10.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	x1 = new Complex128( 0.0, 0.0 );
	x2 = 100.0;

	actual = linspace( x1, x2, 1 );
	expected = new Float64Array( [ 100.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; complex)', function test( t ) {
	var expected;
	var actual;
	var x1;
	var x2;

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	actual = linspace( x1, x2, 1 );
	expected = new Float64Array( [ 100.0, 10.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; complex64)', function test( t ) {
	var expected;
	var actual;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	actual = linspace( x1, x2, 1 );
	expected = new Float32Array( [ 100.0, 10.0 ] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; complex-like)', function test( t ) {
	var expected;
	var actual;
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

	actual = linspace( x1, x2, 1 );
	expected = new Float64Array( [ 100.0, 10.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float64)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'float64'
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float64Array( [ 10.0 ] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float32)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'float32'
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float32Array( [ 10.0 ] );

	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex128)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'complex128'
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float64Array( [ 10.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex64)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'complex64'
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float32Array( [ 10.0, 0.0 ] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (real; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'generic'
	};
	actual = linspace( 0, 10, 1, opts );
	expected = [ 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex64; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	opts = {
		'dtype': 'generic'
	};
	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex64( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex128; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	opts = {
		'dtype': 'generic'
	};
	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex-like; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var opts;
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
		'dtype': 'generic'
	};
	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	x1 = 0.0;
	x2 = new Complex64( 100.0, 10.0 );

	opts = {
		'dtype': 'generic'
	};
	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 100.0;

	opts = {
		'dtype': 'generic'
	};
	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; real; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'endpoint': true
	};

	actual = linspace( 0, 10, 1, opts );
	expected = new Float64Array( [ 10.0 ] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; mixed; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = 0.0;
	x2 = new Complex128( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = new Float64Array( [ 100.0, 10.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	x1 = new Complex128( 0.0, 0.0 );
	x2 = 100.0;

	actual = linspace( x1, x2, 1, opts );
	expected = new Float64Array( [ 100.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; complex; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = new Float64Array( [ 100.0, 10.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; complex64; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = new Float32Array( [ 100.0, 10.0 ] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; complex-like; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'endpoint': true
	};

	x1 = {
		're': 0.0,
		'im': 0.0
	};
	x2 = {
		're': 100.0,
		'im': 10.0
	};

	actual = linspace( x1, x2, 1, opts );
	expected = new Float64Array( [ 100.0, 10.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float64; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'float64',
		'endpoint': true
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float64Array( [ 10.0 ] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float32; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'float32',
		'endpoint': true
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float32Array( [ 10.0 ] );

	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex128; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'complex128',
		'endpoint': true
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float64Array( [ 10.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex64; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'complex64',
		'endpoint': true
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float32Array( [ 10.0, 0.0 ] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (real; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'generic',
		'endpoint': true
	};
	actual = linspace( 0, 10, 1, opts );
	expected = [ 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex64; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'dtype': 'generic',
		'endpoint': true
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex64( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex128; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	opts = {
		'dtype': 'generic',
		'endpoint': true
	};
	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex-like; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
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
		'dtype': 'generic',
		'endpoint': true
	};
	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'dtype': 'generic',
		'endpoint': true
	};

	x1 = 0.0;
	x2 = new Complex64( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 10.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic; endpoint=true)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'dtype': 'generic',
		'endpoint': true
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 100.0;

	actual = linspace( x1, x2, 1, opts );
	expected = [ 100.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; real; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'endpoint': false
	};

	actual = linspace( 0, 10, 1, opts );
	expected = new Float64Array( [ 0.0 ] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; mixed; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = 0.0;
	x2 = new Complex128( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	x1 = new Complex128( 0.0, 0.0 );
	x2 = 100.0;

	actual = linspace( x1, x2, 1, opts );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; complex; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; complex64; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'endpoint': false
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = new Float32Array( [ 0.0, 0.0 ] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (default; complex-like; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
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

	actual = linspace( x1, x2, 1, opts );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float64; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'float64',
		'endpoint': false
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float64Array( [ 0.0 ] );

	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=float32; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'float32',
		'endpoint': false
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float32Array( [ 0.0 ] );

	t.strictEqual( isFloat32Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex128; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'complex128',
		'endpoint': false
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	t.strictEqual( isComplex128Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret128( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (dtype=complex64; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'complex64',
		'endpoint': false
	};
	actual = linspace( 0, 10, 1, opts );
	expected = new Float32Array( [ 0.0, 0.0 ] );

	t.strictEqual( isComplex64Array( actual ), true, 'returns expected value' );
	t.deepEqual( reinterpret64( actual, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (real; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'dtype': 'generic',
		'endpoint': false
	};
	actual = linspace( 0, 10, 1, opts );
	expected = [ 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex64; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'dtype': 'generic',
		'endpoint': false
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex64( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex128; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'dtype': 'generic',
		'endpoint': false
	};

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (complex-like; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'dtype': 'generic',
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

	actual = linspace( x1, x2, 1, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'dtype': 'generic',
		'endpoint': false
	};

	x1 = 0.0;
	x2 = new Complex64( 100.0, 10.0 );

	actual = linspace( x1, x2, 1, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'if the specified output array length is `1`, the function returns an array containing a single element (mixed; dtype=generic; endpoint=false)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var x1;
	var x2;

	opts = {
		'dtype': 'generic',
		'endpoint': false
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = 100.0;

	actual = linspace( x1, x2, 1, opts );
	expected = [ 0.0, 0.0 ];

	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.strictEqual( isComplex128( actual[ 0 ] ), true, 'returns expected value' );
	t.deepEqual( toStrided( actual ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;

	start = 0;
	stop = 10;

	// Specify the length:
	actual = linspace( start, stop, 10 );
	t.strictEqual( actual.length, 10 );
	t.strictEqual( actual[0], start );
	t.strictEqual( actual[actual.length-1], 10 );

	// Verify correct values:
	actual = linspace( start, stop, 11 );
	expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

	t.deepEqual( actual, expected );

	// Decrement:
	actual = linspace( stop, start, 11 );
	expected = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ];

	t.deepEqual( actual, expected );
	t.end();
});
