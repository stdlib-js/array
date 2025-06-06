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
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var filled2dBy = require( './../../../base/filled2d-by' );
var zeros2d = require( './../../../base/zeros2d' );
var numel = require( '@stdlib/ndarray/base/numel' );
var add = require( '@stdlib/number/float64/base/add3' );
var pkg = require( './../package.json' ).name;
var bternary2d = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - output array shape
* @returns {Function} benchmark function
*/
function createBenchmark( shape ) {
	var arrays;
	var shapes;
	var out;
	var x;
	var y;
	var z;

	shapes = [
		[ 1, shape[ 1 ] ],
		[ shape[ 0 ], 1 ],
		[ 1, 1 ],
		shape
	];
	x = filled2dBy( shapes[ 0 ], uniform( -100.0, 100.0 ) );
	y = filled2dBy( shapes[ 1 ], uniform( -100.0, 100.0 ) );
	z = filled2dBy( shapes[ 2 ], uniform( -100.0, 100.0 ) );
	out = zeros2d( shapes[ 3 ] );

	arrays = [ x, y, z, out ];

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var i0;
		var i1;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			bternary2d( arrays, shapes, add );
			i1 = i % shapes[ 1 ][ 0 ];
			i0 = i % shapes[ 1 ][ 1 ];
			if ( isnan( arrays[ 3 ][ i1 ][ i0 ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();

		i1 = i % shapes[ 1 ][ 0 ];
		i0 = i % shapes[ 1 ][ 1 ];
		if ( isnan( arrays[ 3 ][ i1 ][ i0 ] ) ) {
			b.fail( 'should not return NaN' );
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
	var min;
	var max;
	var sh;
	var N;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		N = floor( pow( pow( 10, i ), 1.0/2.0 ) );
		sh = [ N, N ];
		f = createBenchmark( sh );
		bench( pkg+'::square_matrix:size='+numel( sh ), f );
	}
}

main();
