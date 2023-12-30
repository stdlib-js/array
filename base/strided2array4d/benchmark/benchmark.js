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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var zeroTo = require( './../../../base/zero-to' );
var numel = require( '@stdlib/ndarray/base/numel' );
var orders = require( '@stdlib/ndarray/orders' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var pkg = require( './../package.json' ).name;
var strided2array4d = require( './../lib' );


// VARIABLES //

var ORDERS = orders();


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveIntegerArray} shape - array shape
* @param {string} order - memory layout order
* @returns {Function} benchmark function
*/
function createBenchmark( shape, order ) {
	var strides = shape2strides( shape, order );
	var x = zeroTo( numel( shape ) );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var out;
		var i0;
		var i1;
		var i2;
		var i3;
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = strided2array4d( x, shape, strides, 0 );
			i3 = i % shape[ 0 ];
			i2 = i % shape[ 1 ];
			i1 = i % shape[ 2 ];
			i0 = i % shape[ 3 ];
			if ( isnan( out[ i3 ][ i2 ][ i1 ][ i0 ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();

		i3 = i % shape[ 0 ];
		i2 = i % shape[ 1 ];
		i1 = i % shape[ 2 ];
		i0 = i % shape[ 3 ];
		if ( isnan( out[ i3 ][ i2 ][ i1 ][ i0 ] ) ) {
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
	var ord;
	var sh;
	var N;
	var f;
	var i;
	var j;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( j = 0; j < ORDERS.length; j++ ) {
		for ( i = min; i <= max; i++ ) {
			N = floor( pow( pow( 10, i ), 1.0/4.0 ) );
			sh = [ N, N, N, N ];
			ord = ORDERS[ j ];
			f = createBenchmark( sh, ord );
			bench( pkg+'::equidimensional:size='+numel( sh )+',order='+ord, f );
		}
	}
}

main();
