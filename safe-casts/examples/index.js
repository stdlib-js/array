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

var dtypes = require( '@stdlib/array/dtypes' );
var safeCasts = require( './../lib' );

var DTYPES;
var list;
var i;

// Get the list of supported array data types:
DTYPES = dtypes();

// Print the list of array data types to which a data type can be safely cast...
for ( i = 0; i < DTYPES.length; i++ ) {
	list = safeCasts( DTYPES[ i ] );
	console.log( '%s: %s', DTYPES[ i ], list.join( ', ' ) );
}
