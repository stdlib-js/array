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

var isCollection = require( '@stdlib/assert/is-collection' );
var base = require( './../../base/mskfilter' );
var countTruthy = require( './../../base/count-truthy' );
var zeros = require( './../../zeros' );
var dtype = require( './../../dtype' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a new array by applying a mask to a provided input array.
*
* @param {Collection} x - input array
* @param {Collection} mask - mask array
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a collection
* @throws {Error} must provide collections of equal length
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var y = mskfilter( x, mask );
* // returns [ 2, 4 ]
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
* var mask = [ 0, 1, 0, 1 ];
*
* var y = mskfilter( x, mask );
* // returns <Int32Array>[ 2, 4 ]
*/
function mskfilter( x, mask ) {
	var dt;
	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	if ( !isCollection( mask ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', mask ) );
	}
	if ( x.length !== mask.length ) {
		throw new Error( format( 'invalid arguments. Must provide equal length array-like objects.' ) );
	}
	dt = dtype( x );
	if ( dt === 'generic' || dt === null ) {
		return base( x, mask );
	}
	return base.assign( x, mask, zeros( countTruthy( mask ), dt ), 1, 0 );
}


// EXPORTS //

module.exports = mskfilter;
