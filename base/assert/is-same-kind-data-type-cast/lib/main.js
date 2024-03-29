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

var sameKindCasts = require( './../../../../same-kind-casts' );


// VARIABLES //

var TABLE = sameKindCasts();


// MAIN //

/**
* Returns a boolean indicating if a provided array data type can be safely cast to, or is of the same "kind" as, another array data type.
*
* @param {string} from - array data type
* @param {string} to - array data type
* @returns {boolean} boolean indicating if a data type can be cast to another data type
*
* @example
* var bool = isSameKindCast( 'float32', 'float64' );
* // returns true
*
* bool = isSameKindCast( 'uint16', 'int16' );
* // returns false
*/
function isSameKindCast( from, to ) {
	if ( from === to ) {
		return true;
	}
	return ( TABLE[ from ][ to ] > 0 );
}


// EXPORTS //

module.exports = isSameKindCast;
