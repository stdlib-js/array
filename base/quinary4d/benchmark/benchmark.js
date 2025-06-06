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
var filled4dBy = require( './../../../base/filled4d-by' );
var zeros4d = require( './../../../base/zeros4d' );
var numel = require( '@stdlib/ndarray/base/numel' );
var add = require( '@stdlib/number/float64/base/add5' );
var pkg = require( './../package.json' ).name;
var quinary4d = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - array shape
* @returns {Function} benchmark function
*/
function createBenchmark( shape ) {
	var arrays;
	var out;
	var x;
	var y;
	var z;
	var w;
	var v;

	x = filled4dBy( shape, uniform( -100.0, 100.0 ) );
	y = filled4dBy( shape, uniform( -100.0, 100.0 ) );
	z = filled4dBy( shape, uniform( -100.0, 100.0 ) );
	w = filled4dBy( shape, uniform( -100.0, 100.0 ) );
	v = filled4dBy( shape, uniform( -100.0, 100.0 ) );
	out = zeros4d( shape );

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
			quinary4d( arrays, shape, add );
			i3 = i % shape[ 0 ];
			i2 = i % shape[ 1 ];
			i1 = i % shape[ 2 ];
			i0 = i % shape[ 3 ];
			if ( isnan( arrays[ 5 ][ i3 ][ i2 ][ i1 ][ i0 ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();

		i3 = i % shape[ 0 ];
		i2 = i % shape[ 1 ];
		i1 = i % shape[ 2 ];
		i0 = i % shape[ 3 ];
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
