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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var nCartesianProduct = require( './../../../base/n-cartesian-product' );
var filled5dBy = require( './../../../base/filled5d-by' );
var flatten5d = require( './../../../base/flatten5d' );
var incrspace = require( './../../../base/incrspace' );
var at5d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof at5d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a nested array element (positive indices)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var shape;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var x;
	var i;

	shape = [ 2, 2, 2, 2, 2 ];
	x = filled5dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( 0, shape[0], 1 );
	i1 = incrspace( 0, shape[1], 1 );
	i2 = incrspace( 0, shape[2], 1 );
	i3 = incrspace( 0, shape[3], 1 );
	i4 = incrspace( 0, shape[4], 1 );
	indices = nCartesianProduct( i0, i1, i2, i3, i4 );

	expected = flatten5d( x, shape );

	for ( i = 0; i < indices.length; i++ ) {
		actual = at5d.apply( null, [ x ].concat( indices[ i ] ) );
		t.strictEqual( actual, expected[ i ], 'returns expected value for indices ('+indices[ i ].join( ',' )+')' );
	}
	t.end();
});

tape( 'the function returns a nested array element (negative indices)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var shape;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var x;
	var i;

	shape = [ 2, 2, 2, 2, 2 ];
	x = filled5dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( -shape[0], 0, 1 );
	i1 = incrspace( -shape[1], 0, 1 );
	i2 = incrspace( -shape[2], 0, 1 );
	i3 = incrspace( -shape[3], 0, 1 );
	i4 = incrspace( -shape[4], 0, 1 );
	indices = nCartesianProduct( i0, i1, i2, i3, i4 );

	expected = flatten5d( x, shape );

	for ( i = 0; i < indices.length; i++ ) {
		actual = at5d.apply( null, [ x ].concat( indices[ i ] ) );
		t.strictEqual( actual, expected[ i ], 'returns expected value for indices ('+indices[ i ].join( ',' )+')' );
	}
	t.end();
});

tape( 'the function returns `undefined` if provided an out-of-bounds index (positive indices)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var shape;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var x;
	var i;

	shape = [ 2, 2, 2, 2, 2 ];
	x = filled5dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( 0, shape[0]+5, 1 );
	i1 = incrspace( 0, shape[1]+5, 1 );
	i2 = incrspace( 0, shape[2]+5, 1 );
	i3 = incrspace( 0, shape[3]+5, 1 );
	i4 = incrspace( shape[4], shape[4]+5, 1 );
	indices = nCartesianProduct( i0, i1, i2, i3, i4 );

	expected = void 0;

	for ( i = 0; i < indices.length; i++ ) {
		actual = at5d.apply( null, [ x ].concat( indices[ i ] ) );
		t.strictEqual( actual, expected, 'returns expected value for indices ('+indices[ i ].join( ',' )+')' );
	}
	t.end();
});

tape( 'the function returns `undefined` if provided an out-of-bounds index (negative indices)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var shape;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;
	var x;
	var i;

	shape = [ 2, 2, 2, 2, 2 ];
	x = filled5dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( -shape[0]-5, 0, 1 );
	i1 = incrspace( -shape[1]-5, 0, 1 );
	i2 = incrspace( -shape[2]-5, 0, 1 );
	i3 = incrspace( -shape[3]-5, 0, 1 );
	i4 = incrspace( -shape[4]-5, -shape[4], 1 );
	indices = nCartesianProduct( i0, i1, i2, i3, i4 );

	expected = void 0;

	for ( i = 0; i < indices.length; i++ ) {
		actual = at5d.apply( null, [ x ].concat( indices[ i ] ) );
		t.strictEqual( actual, expected, 'returns expected value for indices ('+indices[ i ].join( ',' )+')' );
	}
	t.end();
});
