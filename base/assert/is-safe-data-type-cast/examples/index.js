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

var cartesianSquare = require( './../../../../cartesian-square' );
var dtypes = require( './../../../../dtypes' );
var isSafeCast = require( './../lib' );

// Generate a list of dtype pairs:
var dt = cartesianSquare( dtypes() );

// For each data type pair, determine whether one can safely cast from one data type to another...
var i;
for ( i = 0; i < dt.length; i++ ) {
	console.log( '%s. Safe? %s.', dt[i].join( ' => ' ), isSafeCast.apply( null, dt[i] ) );
}
