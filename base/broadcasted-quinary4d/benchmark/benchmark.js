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

var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var filled4dBy = require( './../../../base/filled4d-by' );
var zeros4d = require( './../../../base/zeros4d' );
var numel = require( '@stdlib/ndarray/base/numel' );
var pkg = require( './../package.json' ).name;
var bquinary4d = require( './../lib' );


// FUNCTIONS //

/**
* Returns the sum.
*
* @private
* @param {number} x - first value
* @param {number} y - second value
* @param {number} z - third value
* @param {number} w - fourth value
* @param {number} v - fifth value
* @returns {number} sum
*/
function add( x, y, z, w, v ) {
	return x + y + z + w + v;
}

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
	var w;
	var v;

	shapes = [
		[ 1, 1, 1, shape[ 0 ] ],
		[ 1, 1, shape[ 1 ], 1 ],
		[ 1, 1, shape[ 2 ], shape[ 3 ] ],
		[ 1, shape[ 3 ], 1, 1 ],
		[ shape[ 0 ], shape[ 1 ], shape[ 2 ], shape[ 3 ] ],
		shape
	];
	x = filled4dBy( shapes[ 0 ], uniform( -100.0, 100.0 ) );
	y = filled4dBy( shapes[ 1 ], uniform( -100.0, 100.0 ) );
	z = filled4dBy( shapes[ 2 ], uniform( -100.0, 100.0 ) );
	w = filled4dBy( shapes[ 3 ], uniform( -100.0, 100.0 ) );
	v = filled4dBy( shapes[ 4 ], uniform( -100.0, 100.0 ) );
	out = zeros4d( shapes[ 5 ] );

	arrays = [ x, y, z, w, v, out ];

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
		var i2;
		var i3;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			bquinary4d( arrays, shapes, add );
			i3 = i % shapes[ 1 ][ 0 ];
			i2 = i % shapes[ 1 ][ 1 ];
			i1 = i % shapes[ 1 ][ 2 ];
			i0 = i % shapes[ 1 ][ 3 ];
			if ( isnan( arrays[ 5 ][ i3 ][ i2 ][ i1 ][ i0 ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();

		i3 = i % shapes[ 1 ][ 0 ];
		i2 = i % shapes[ 1 ][ 1 ];
		i1 = i % shapes[ 1 ][ 2 ];
		i0 = i % shapes[ 1 ][ 3 ];
		if ( isnan( arrays[ 5 ][ i3 ][ i2 ][ i1 ][ i0 ] ) ) {
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
		N = floor( pow( pow( 10, i ), 1.0/4.0 ) );
		sh = [ N, N, N, N ];
		f = createBenchmark( sh );
		bench( pkg+'::equidimensional:size='+numel( sh ), f );
	}
}

main();
