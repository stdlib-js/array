/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var getType = require( './../../dtype' );
var convert = require( './../../convert' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Converts an array to the same data type as a second input array.
*
* @param {Collection} x - array to convert
* @param {(Array|TypedArray|ComplexArray)} y - array having the desired output data type
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} second argument must have a recognized data type
* @returns {(Array|TypedArray|ComplexArray)} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Float64Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
function convertSame( x, y ) {
	var dtype = getType( y );
	if ( dtype === null ) {
		throw new TypeError( format( 'invalid argument. Second argument must have a recognized/supported data type. Type: `%s`. Value: `%s`.', dtype, y ) );
	}
	return convert( x, dtype );
}


// EXPORTS //

module.exports = convertSame;
