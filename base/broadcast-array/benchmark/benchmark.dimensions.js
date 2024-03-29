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
var isArray = require( '@stdlib/assert/is-array' );
var isEven = require( '@stdlib/math/base/assert/is-even' );
var zerosnd = require( './../../../base/zerosnd' );
var pkg = require( './../package.json' ).name;
var broadcastArray = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} N - number of dimensions
* @returns {Function} benchmark function
*/
function createBenchmark( N ) {
	var outShape;
	var inShape;
	var x;
	var i;

	outShape = [];
	inShape = [];

	// Create an input shape such that half of the dimensions are one (and thus need to be broadcasted) and half of the dimensions are equal to the respective output shape dimensions...
	for ( i = 1; i < N+1; i++ ) {
		outShape.push( i );
		if ( isEven( i ) ) {
			inShape.push( i );
		} else {
			inShape.push( 1 );
		}
	}
	x = zerosnd( inShape );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = broadcastArray( x, inShape, outShape );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if (
			!isArray( out.data ) ||
			!isArray( out.ref ) ||
			!isArray( out.shape ) ||
			!isArray( out.strides )
		) {
			b.fail( 'should return an array' );
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
	var f;
	var i;

	min = 1; // 10^min
	max = 10; // 10^max

	for ( i = min; i <= max; i++ ) {
		f = createBenchmark( i );
		bench( pkg+':dimensions='+i, f );
	}
}

main();
