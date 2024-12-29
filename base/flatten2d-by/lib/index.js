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

/**
* Flatten a two-dimensional nested array according to a callback function.
*
* @module @stdlib/array/base/flatten2d-by
*
* @example
* var flatten2dBy = require( '@stdlib/array/base/flatten2d-by' );
*
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten2dBy( x, [ 2, 2 ], false, scale );
* // returns [ 2, 4, 6, 8 ]
*
* @example
* var flatten2dBy = require( '@stdlib/array/base/flatten2d-by' );
*
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten2dBy( x, [ 2, 2 ], true, scale );
* // returns [ 2, 6, 4, 8 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var flatten2dBy = require( '@stdlib/array/base/flatten2d-by' );
*
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = new Float64Array( 4 );
* var y = flatten2dBy( x, [ 2, 2 ], true, out, 1, 0, scale );
* // returns <Float64Array>[ 2, 6, 4, 8 ]
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
