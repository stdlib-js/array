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
var randu = require( '@stdlib/random/array/randu' );
var pkg = require( './../package.json' ).name;
var Float32ArrayFE = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var values;
	var arr1;
	var arr2;
	var arr3;
	var N;

	arr1 = randu( len );
	arr2 = randu( len );
	arr3 = randu( len );
	arr1 = new Float32ArrayFE( 'little-endian', arr1 );

	values = [
		new Float32ArrayFE( 'little-endian', arr2 ),
		new Float32ArrayFE( 'big-endian', arr3 )
	];
	N = values.length;

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
			v = arr1.set( values[ i%N ] );
			if ( typeof v !== 'undefined' ) {
				b.fail( 'should return undefined' );
			}
		}
		b.toc();
		if ( typeof v !== 'undefined' ) {
			b.fail( 'should return undefined' );
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
		bench( pkg+':set:len='+len, f );
	}
}

main();