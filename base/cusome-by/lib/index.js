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

/**
* Cumulatively test whether at least `n` array elements in a provided array pass a test implemented by a predicate function.
*
* @module @stdlib/array/base/cusome-by
*
* @example
* var cusomeBy = require( '@stdlib/array/base/cusome-by' );
*
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 0, 0, 1, 1 ];
* var y = cusomeBy( x, 2, isPositive );
* // returns [ false, false, false, false, true ]
*
* @example
* var cusomeBy = require( '@stdlib/array/base/cusome-by' );
*
* function isPositive( value ) {
*     return ( value > 0 );
* }
*
* var x = [ 0, 0, 0, 1, 1 ];
*
* var y = [ false, null, false, null, false, null, false, null, false, null ];
* var out = cusomeBy.assign( x, 2, y, 2, 0, isPositive );
* // returns [ false, null, false, null, false, null, false, null, true, null ];
*
* var bool = ( y === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
