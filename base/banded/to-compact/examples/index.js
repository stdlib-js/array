/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable no-multi-spaces */

'use strict';

var toCompact = require( './../lib' );

// Define a banded matrix:
var A = [
	[  1,  2,  3,   0,  0 ],
	[ -2,  4,  5,   6,  0 ],
	[ -3, -5,  7,   8,  9 ],
	[  0, -6, -8,  10, 11 ],
	[  0,  0, -9, -11, 12 ]
];

// Convert the matrix to lexicographic compact form:
var AC = toCompact( A, 2, 2, false );
console.log( AC );
/* e.g., =>
	[
		[  0,  0,  3,   6,  9 ],
		[  0,  2,  5,   8, 11 ],
		[  1,  4,  7,  10, 12 ],
		[ -2, -5, -8, -11,  0 ],
		[ -3, -6, -9,   0,  0 ]
	]
*/

AC = toCompact( A, 2, 1, false );
console.log( AC );
/* e.g., =>
	[
		[  0,  0,  3,   6,  9 ],
		[  0,  2,  5,   8, 11 ],
		[  1,  4,  7,  10, 12 ],
		[ -2, -5, -8, -11,  0 ]
	]
*/

AC = toCompact( A, 1, 2, false );
console.log( AC );
/* e.g., =>
	[
		[  0,  2,  5,   8, 11 ],
		[  1,  4,  7,  10, 12 ],
		[ -2, -5, -8, -11,  0 ],
		[ -3, -6, -9,   0,  0 ]
	]
*/

// Convert the matrix to colexicographic compact form:
AC = toCompact( A, 2, 2, true );
console.log( AC );
/* e.g., =>
	[
		[ 0,  0,  1,  -2, -3 ],
		[ 0,  2,  4,  -5, -6 ],
		[ 3,  5,  7,  -8, -9 ],
		[ 6,  8, 10, -11,  0 ],
		[ 9, 11, 12,   0,  0 ]
	]
*/
