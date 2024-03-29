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

var bench = require( '@stdlib/bench' );
var floor = require( '@stdlib/math/base/special/floor' );
var pow = require( '@stdlib/math/base/special/pow' );
var filled2dBy = require( './../../../base/filled2d-by' );
var filledBy = require( './../../../base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var isArrayArray = require( '@stdlib/assert/is-array-array' );
var numel = require( '@stdlib/ndarray/base/numel' );
var pkg = require( './../package.json' ).name;
var take2d = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - array shape
* @returns {Function} benchmark function
*/
function createBenchmark( shape ) {
	var dim;
	var idx;
	var S;
	var x;

	dim = shape.length - 1;
	S = shape[ dim ];

	x = filled2dBy( shape, discreteUniform( -50, 50 ) );
	idx = filledBy( S, discreteUniform( -S, S-1 ) );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var v;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			v = take2d( x, idx, dim, 'normalize' );
			if ( typeof v !== 'object' ) {
				b.fail( 'should return an array' );
			}
		}
		b.toc();
		if ( !isArrayArray( v ) ) {
			b.fail( 'should return an array of arrays' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var shape;
	var min;
	var max;
	var N;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		N = floor( pow( pow( 10, i ), 1.0/2.0 ) );
		shape = [ N, N ];
		f = createBenchmark( shape );
		bench( pkg+'::square_matrix,unsorted_indices:size='+numel(shape)+',num_indices='+N, f );
	}
}

main();
