/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var accessors = require( './../../../base/accessors' );


// MAIN //

/**
* Converts an array-like to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding array meta data to ensure that internal functions operating on arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **accessorProtocol**: `boolean` indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param {Collection} x - array-like object
* @returns {Object} object containing array meta data
*
* @example
* var obj = arraylike2object( [ 1, 2, 3, 4 ] );
* // returns {...}
*/
function arraylike2object( x ) {
	var o = accessors( x );
	return {
		'data': x,
		'accessorProtocol': o.accessorProtocol,
		'accessors': o.accessors
	};
}


// EXPORTS //

module.exports = arraylike2object;
