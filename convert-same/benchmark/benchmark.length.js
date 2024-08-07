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
var isCollection = require( '@stdlib/assert/is-collection' );
var Float64Array = require( './../../float64' );
var Float32Array = require( './../../float32' );
var Int32Array = require( './../../int32' );
var Int16Array = require( './../../int16' );
var Int8Array = require( './../../int8' );
var Uint32Array = require( './../../uint32' );
var Uint16Array = require( './../../uint16' );
var Uint8Array = require( './../../uint8' );
var Uint8ClampedArray = require( './../../uint8c' );
var Complex64Array = require( './../../complex64' );
var Complex128Array = require( './../../complex128' );
var BooleanArray = require( './../../bool' );
var pkg = require( './../package.json' ).name;
var convertArraySame = require( './../lib' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @param {(Array|TypedArray)} v - value having desired data type
* @returns {Function} benchmark function
*/
function createBenchmark( len, v ) {
	var arr;
	var i;

	arr = [];
	for ( i = 0; i < len; i++ ) {
		arr.push( i );
	}
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
			out = convertArraySame( arr, v );
			if ( out.length !== len ) {
				b.fail( 'unexpected length' );
			}
		}
		b.toc();
		if ( !isCollection( out ) ) {
			b.fail( 'should return an array-like object' );
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

		f = createBenchmark( len, [] );
		bench( pkg+':len='+len+',dtype=generic', f );

		f = createBenchmark( len, new Float64Array( 0 ) );
		bench( pkg+':len='+len+',dtype=float64', f );

		f = createBenchmark( len, new Float32Array( 0 ) );
		bench( pkg+':len='+len+',dtype=float32', f );

		f = createBenchmark( len, new Int32Array( 0 ) );
		bench( pkg+':len='+len+',dtype=int32', f );

		f = createBenchmark( len, new Int16Array( 0 ) );
		bench( pkg+':len='+len+',dtype=int16', f );

		f = createBenchmark( len, new Int8Array( 0 ) );
		bench( pkg+':len='+len+',dtype=int8', f );

		f = createBenchmark( len, new Uint32Array( 0 ) );
		bench( pkg+':len='+len+',dtype=uint32', f );

		f = createBenchmark( len, new Uint16Array( 0 ) );
		bench( pkg+':len='+len+',dtype=uint16', f );

		f = createBenchmark( len, new Uint8Array( 0 ) );
		bench( pkg+':len='+len+',dtype=uint8', f );

		f = createBenchmark( len, new Uint8ClampedArray( 0 ) );
		bench( pkg+':len='+len+',dtype=uint8c', f );

		f = createBenchmark( len, new BooleanArray( 0 ) );
		bench( pkg+':len='+len+',dtype=bool', f );

		f = createBenchmark( len, new Complex128Array( 0 ) );
		bench( pkg+':len='+len+',dtype=complex128', f );

		f = createBenchmark( len, new Complex64Array( 0 ) );
		bench( pkg+':len='+len+',dtype=complex64', f );
	}
}

main();
