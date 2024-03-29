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
var filled2dBy = require( './../../../base/filled2d-by' );
var flatten2d = require( './../../../base/flatten2d' );
var incrspace = require( './../../../base/incrspace' );
var at2d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof at2d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a nested array element (positive indices)', function test( t ) {
	var expected;
	var indices;
	var actual;
	var shape;
	var i0;
	var i1;
	var x;
	var i;

	shape = [ 5, 5 ];
	x = filled2dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( 0, shape[0], 1 );
	i1 = incrspace( 0, shape[1], 1 );
	indices = nCartesianProduct( i0, i1 );

	expected = flatten2d( x, shape );

	for ( i = 0; i < indices.length; i++ ) {
		actual = at2d.apply( null, [ x ].concat( indices[ i ] ) );
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
	var x;
	var i;

	shape = [ 5, 5 ];
	x = filled2dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( -shape[0], 0, 1 );
	i1 = incrspace( -shape[1], 0, 1 );
	indices = nCartesianProduct( i0, i1 );

	expected = flatten2d( x, shape );

	for ( i = 0; i < indices.length; i++ ) {
		actual = at2d.apply( null, [ x ].concat( indices[ i ] ) );
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
	var x;
	var i;

	shape = [ 5, 5 ];
	x = filled2dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( 0, shape[0]+10, 1 );
	i1 = incrspace( shape[1], shape[1]+10, 1 );
	indices = nCartesianProduct( i0, i1 );

	expected = void 0;

	for ( i = 0; i < indices.length; i++ ) {
		actual = at2d.apply( null, [ x ].concat( indices[ i ] ) );
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
	var x;
	var i;

	shape = [ 5, 5 ];
	x = filled2dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( -shape[0]-10, 0, 1 );
	i1 = incrspace( -shape[1]-10, -shape[1], 1 );
	indices = nCartesianProduct( i0, i1 );

	expected = void 0;

	for ( i = 0; i < indices.length; i++ ) {
		actual = at2d.apply( null, [ x ].concat( indices[ i ] ) );
		t.strictEqual( actual, expected, 'returns expected value for indices ('+indices[ i ].join( ',' )+')' );
	}
	t.end();
});
