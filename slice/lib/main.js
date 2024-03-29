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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var base = require( './../../base/slice' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a shallow copy of a portion of an array.
*
* @param {Collection} x - input array
* @param {integer} [start=0] - starting index (inclusive)
* @param {integer} [end=x.length] - ending index (exclusive)
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be an integer
* @throws {TypeError} third argument must be an integer
* @returns {Collection} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = slice( x, 1, 3 );
* // returns [ 2, 3 ]
*
* var bool = ( out === x );
* // returns false
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var out = slice( x, 1, 3 );
* // returns <Int32Array>[ 2, 3 ]
*
* var bool = ( out === x );
* // returns false
*/
function slice( x ) {
	var start;
	var end;

	if ( !isCollection( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x ) );
	}
	if ( arguments.length > 1 ) {
		start = arguments[ 1 ];
		if ( !isInteger( start ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', start ) );
		}
		if ( arguments.length > 2 ) {
			end = arguments[ 2 ];
			if ( !isInteger( end ) ) {
				throw new TypeError( format( 'invalid argument. Third argument must be an integer. Value: `%s`.', end ) );
			}
		} else {
			end = x.length;
		}
	} else {
		start = 0;
		end = x.length;
	}
	return base( x, start, end );
}


// EXPORTS //

module.exports = slice;
