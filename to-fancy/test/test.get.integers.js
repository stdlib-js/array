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
var hasProxySupport = require( '@stdlib/assert/has-proxy-support' );
var Int32Array = require( './../../int32' );
var array2fancy = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasProxySupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof array2fancy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array-like object supporting individual element retrieval (generic, positive integers)', function test( t ) {
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( y[ i ], x[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting individual element retrieval (typed, positive integers)', function test( t ) {
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( y[ i ], x[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting individual element retrieval (generic, negative integers)', opts, function test( t ) {
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( y[ i-x.length ], x[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an array-like object supporting individual element retrieval (typed, negative integers)', opts, function test( t ) {
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( y[ i-x.length ], x[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'by default, the function returns an array-like object which returns `undefined` when provided an integer index which is out-of-bounds (generic, positive integers)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'by default, the function returns an array-like object which returns `undefined` when provided an integer index which is out-of-bounds (typed, positive integers)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'by default, the function returns an array-like object which returns `undefined` when provided an integer index which is out-of-bounds (generic, negative integers)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x );

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'by default, the function returns an array-like object which returns `undefined` when provided an integer index which is out-of-bounds (typed, negative integers)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x );

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which returns `undefined` when provided an integer index which is out-of-bounds (generic, positive integers)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': false
	});

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which returns `undefined` when provided an integer index which is out-of-bounds (typed, positive integers)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': false
	});

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which returns `undefined` when provided an integer index which is out-of-bounds (generic, negative integers)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': false
	});

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `false`, the function returns an array-like object which returns `undefined` when provided an integer index which is out-of-bounds (typed, negative integers)', function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': false
	});

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		t.strictEqual( y[ idx ], void 0, 'returns expected value' );
	}
	t.end();
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided an integer index which is out-of-bounds (generic, positive integers)', opts, function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		t.throws( badValue( idx ), RangeError, 'throws an error when provided ' + idx );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided an integer index which is out-of-bounds (typed, positive integers)', opts, function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		idx = x.length + i;
		t.throws( badValue( idx ), RangeError, 'throws an error when provided ' + idx );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided an integer index which is out-of-bounds (generic, negative integers)', opts, function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = [ 1, 2, 3, 4 ];
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		t.throws( badValue( idx ), RangeError, 'throws an error when provided ' + idx );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'when `strict` is `true`, the function returns an array-like object which throws an error when provided an integer index which is out-of-bounds (typed, negative integers)', opts, function test( t ) {
	var idx;
	var x;
	var y;
	var i;

	x = new Int32Array( [ 1, 2, 3, 4 ] );
	y = array2fancy( x, {
		'strict': true
	});

	for ( i = 0; i < 10; i++ ) {
		idx = -( i + x.length + 1 );
		t.throws( badValue( idx ), RangeError, 'throws an error when provided ' + idx );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var v = y[ value ]; // eslint-disable-line no-unused-vars
		};
	}
});
