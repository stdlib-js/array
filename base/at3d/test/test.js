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
var filled3dBy = require( './../../../base/filled3d-by' );
var flatten3d = require( './../../../base/flatten3d' );
var incrspace = require( './../../../base/incrspace' );
var at3d = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof at3d, 'function', 'main export is a function' );
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
	var x;
	var i;

	shape = [ 3, 3, 3 ];
	x = filled3dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( 0, shape[0], 1 );
	i1 = incrspace( 0, shape[1], 1 );
	i2 = incrspace( 0, shape[2], 1 );
	indices = nCartesianProduct( i0, i1, i2 );

	expected = flatten3d( x, shape );

	for ( i = 0; i < indices.length; i++ ) {
		actual = at3d.apply( null, [ x ].concat( indices[ i ] ) );
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
	var x;
	var i;

	shape = [ 3, 3, 3 ];
	x = filled3dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( -shape[0], 0, 1 );
	i1 = incrspace( -shape[1], 0, 1 );
	i2 = incrspace( -shape[2], 0, 1 );
	indices = nCartesianProduct( i0, i1, i2 );

	expected = flatten3d( x, shape );

	for ( i = 0; i < indices.length; i++ ) {
		actual = at3d.apply( null, [ x ].concat( indices[ i ] ) );
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
	var x;
	var i;

	shape = [ 3, 3, 3 ];
	x = filled3dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( 0, shape[0]+10, 1 );
	i1 = incrspace( 0, shape[1]+10, 1 );
	i2 = incrspace( shape[2], shape[2]+10, 1 );
	indices = nCartesianProduct( i0, i1, i2 );

	expected = void 0;

	for ( i = 0; i < indices.length; i++ ) {
		actual = at3d.apply( null, [ x ].concat( indices[ i ] ) );
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
	var x;
	var i;

	shape = [ 3, 3, 3 ];
	x = filled3dBy( shape, discreteUniform( 0, 10 ) );

	i0 = incrspace( -shape[0]-10, 0, 1 );
	i1 = incrspace( -shape[1]-10, 0, 1 );
	i2 = incrspace( -shape[2]-10, -shape[2], 1 );
	indices = nCartesianProduct( i0, i1, i2 );

	expected = void 0;

	for ( i = 0; i < indices.length; i++ ) {
		actual = at3d.apply( null, [ x ].concat( indices[ i ] ) );
		t.strictEqual( actual, expected, 'returns expected value for indices ('+indices[ i ].join( ',' )+')' );
	}
	t.end();
});
