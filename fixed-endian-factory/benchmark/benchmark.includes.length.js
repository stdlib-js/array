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
var pow = require( '@stdlib/math/base/special/pow' );
var zeroTo = require( './../../zero-to' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var factory = require( './../lib' );
var pkg = require( './../package.json' ).name;


// VARIABLES //

var Float64ArrayFE = factory( 'float64' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var arr = new Float64ArrayFE( 'little-endian', zeroTo( len ) );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var result;
		var v;
		var i;

		v = len - 1;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			result = arr.includes( v );
			if ( typeof result !== 'boolean' ) {
				b.fail( 'should return a boolean' );
			}
		}
		b.toc();
		if ( !isBoolean( result ) ) {
			b.fail( 'should return a boolean' );
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
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':includes:len='+len, f );
	}
}

main();
