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

var isAccessorArray = require( './../../../base/assert/is-accessor-array' );
var AccessorArray = require( './../../../base/accessor' );


// MAIN //

/**
* Converts an array-like object to a minimal array-like object supporting the accessor protocol.
*
* ## Notes
*
* -   If a provided array-like object already supports the accessor protocol, the function returns the provided array-like object; otherwise, the function wraps the provided value in a object which uses accessors for getting and setting elements.
*
* @param {Collection} arr - input array
* @throws {TypeError} must provide an array-like object
* @returns {(Collection|AccessorArray)} array-like object supporting the accessor protocol
*
* @example
* var o = toAccessorArray( [ 1, 2, 3 ] );
* // returns <AccessorArray>
*
* var v = o.get( 0 );
* // returns 1
*/
function toAccessorArray( arr ) {
	if ( arr && typeof arr === 'object' && isAccessorArray( arr ) ) {
		return arr;
	}
	return new AccessorArray( arr );
}


// EXPORTS //

module.exports = toAccessorArray;
