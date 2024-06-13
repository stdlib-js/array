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
var pow = require( '@stdlib/math/base/special/pow' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var pkg = require( './../package.json' ).name;
var Complex128Array = require( './../lib' );


// FUNCTIONS //

/**
* Predicate function.
*
* @private
* @param {Complex128} value - array element
* @param {NonNegativeInteger} idx - array element index
* @param {Complex128Array} arr - array instance
* @returns {boolean} boolean indicating whether a value passes a test
*/
function predicate( value ) {
	return ( real( value ) === -imag( value ) );
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var arr;
	var i;

	arr = [];
	arr.push( new Complex128( 1, -1 ) );
	for ( i = 1; i < len; i++ ) {
		arr.push( new Complex128( i, i ) );
	}
	arr = new Complex128Array( arr );

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var idx;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			idx = arr.findLastIndex( predicate );
			if ( typeof idx !== 'number' ) {
				b.fail( 'should return an integer' );
			}
		}
		b.toc();
		if ( !isInteger( idx ) ) {
			b.fail( 'should return an integer' );
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
		bench( pkg+':findLastIndex:len='+len, f );
	}
}

main();
