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
var base = require( './../../base/cartesian-product' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns the Cartesian product.
*
* @param {Collection} x1 - first input array
* @param {Collection} x2 - second input array
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a collection
* @returns {Array<Array>} list of ordered tuples comprising the Cartesian product
*
* @example
* var x1 = [ 1, 2, 3 ];
* var x2 = [ 4, 5 ];
*
* var out = cartesianProduct( x1, x2 );
* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
*/
function cartesianProduct( x1, x2 ) {
	if ( !isCollection( x1 ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array-like object. Value: `%s`.', x1 ) );
	}
	if ( !isCollection( x2 ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', x2 ) );
	}
	return base( x1, x2 );
}


// EXPORTS //

module.exports = cartesianProduct;
