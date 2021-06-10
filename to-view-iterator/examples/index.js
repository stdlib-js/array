/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var Float64Array = require( '@stdlib/array/float64' );
var inmap = require( '@stdlib/utils/inmap' );
var randu = require( '@stdlib/random/base/randu' );
var arrayview2iterator = require( './../lib' );

function scale( v, i ) {
	return v * (i+1);
}

// Create an array filled with random numbers:
var arr = inmap( new Float64Array( 100 ), randu );

// Create an iterator from an array view which scales iterated values:
var it = arrayview2iterator( arr, 40, 60, scale );

// Perform manual iteration...
var v;
while ( true ) {
	v = it.next();
	if ( v.done ) {
		break;
	}
	console.log( v.value );
}
