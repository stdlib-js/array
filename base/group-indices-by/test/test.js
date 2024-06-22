/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var toAccessorArray = require( './../../../base/to-accessor-array' );
var Float64Array = require( './../../../float64' );
var groupIndicesBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof groupIndicesBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function groups array element indices according to an indicator function', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 'beep', 'boop', 'foo', 'bar' ];

	expected = {
		'b': [ 0, 1, 3 ],
		'f': [ 2 ]
	};
	out = groupIndicesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function indicator( v ) {
		return v[ 0 ];
	}
});

tape( 'the function groups array element indices according to an indicator function (typed arrays)', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 3.14, 4.2, -1.0, -10.2 ] );

	expected = {
		'1': [ 2, 3 ],
		'2': [ 0, 1 ]
	};
	out = groupIndicesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function indicator( v, i ) {
		if ( i < 2 ) {
			return 2;
		}
		return 1;
	}
});

tape( 'the function groups array element indices according to an indicator function (array-like objects)', function test( t ) {
	var expected;
	var out;
	var x;

	x = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'bar'
	};

	expected = {
		'be': [ 0 ],
		'bo': [ 1 ],
		'fo': [ 2 ],
		'ba': [ 3 ]
	};
	out = groupIndicesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function indicator( v ) {
		return v.slice( 0, 2 );
	}
});

tape( 'the function groups array element indices according to an indicator function (accessor arrays)', function test( t ) {
	var expected;
	var out;
	var x;

	x = toAccessorArray( [ 'beep', 'boop', 'foo', 'bar' ] );

	expected = {
		'b': [ 0, 1, 3 ],
		'f': [ 2 ]
	};
	out = groupIndicesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();

	function indicator( v ) {
		return v[ 0 ];
	}
});

tape( 'the function groups array element indices according to an indicator function (string serialization)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 'beep', 'boop', 'foo', 'bar' ];

	expected = {
		'[object Object]': [ 0, 1, 2, 3 ]
	};
	out = groupIndicesBy( x, indicator );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();

	function indicator() {
		return {};
	}
});

tape( 'the function returns an empty object if provided an empty array', function test( t ) {
	var expected;
	var actual;

	expected = {};
	actual = groupIndicesBy( [], indicator );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function indicator( v ) {
		t.fail( 'should not be called' );
		return v;
	}
});

tape( 'the function supports specifying a callback execution context', function test( t ) {
	var expected;
	var out;
	var ctx;
	var x;

	x = [ 'beep', 'boop', 'foo', 'bar' ];

	expected = {
		'b': [ 0, 1, 3 ],
		'f': [ 2 ]
	};
	ctx = {
		'count': 0
	};
	out = groupIndicesBy( x, indicator, ctx );

	t.deepEqual( out, expected, 'returns expected value' );
	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function indicator( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v[ 0 ];
	}
});
