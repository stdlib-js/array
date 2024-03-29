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
var isnan = require( '@stdlib/assert/is-nan' ).isPrimitive;
var zeroTo = require( './../../../zero-to' );
var zeros = require( './../../../zeros' );
var Slice = require( '@stdlib/slice/ctor' );
var pkg = require( './../package.json' ).name;
var sliceAssign = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var x = zeroTo( len, 'generic' );
	var y = zeros( len, 'generic' );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var values;
		var out;
		var v;
		var i;

		values = [
			new Slice(),
			new Slice(),
			new Slice()
		];

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = sliceAssign( x, y, values[ i%values.length ], false );
			v = out[ i%len ];
			if ( v !== v ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( out[ i%len ] ) ) {
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
		bench( pkg+':dtype=generic,len='+len, f );
	}
}

main();
