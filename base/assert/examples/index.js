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

var dtype = require( './../../../dtype' );
var Float64Array = require( './../../../float64' );
var Int32Array = require( './../../../int32' );
var Uint8Array = require( './../../../uint8' );
var Complex128Array = require( './../../../complex128' );
var ns = require( './../lib' );

// Create various arrays:
var arr1 = new Float64Array( [ 1.1, 2.2, 3.3 ] );
var arr2 = new Int32Array( [ 1, 2, 3 ] );
var arr3 = new Uint8Array( [ 1, 2, 3 ] );
var arr4 = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0 ] ); // two complex numbers: 1+1i, 2+2i

// Get data types:
var dt1 = dtype( arr1 );
var dt2 = dtype( arr2 );
var dt3 = dtype( arr3 );
var dt4 = dtype( arr4 );

// Check data types:
console.log( dt1 + ' is floating-point data type: ' + ns.isFloatingPointDataType( dt1 ) );
// => 'float64 is floating-point data type: true'

console.log( dt2 + ' is integer data type: ' + ns.isIntegerDataType( dt2 ) );
// => 'int32 is integer data type: true'

console.log( dt3 + ' is unsigned integer data type: ' + ns.isUnsignedIntegerDataType( dt3 ) );
// => 'uint8 is unsigned integer data type: true'

console.log( dt4 + ' is complex floating-point data type: ' + ns.isComplexFloatingPointDataType( dt4 ) );
// => 'complex128 is complex floating-point data type: true'

// Check if arrays have the same values:
console.log( 'arr2 and arr3 have same values: ' + ns.hasSameValues( arr2, arr3 ) );
// => 'arr2 and arr3 have same values: true'

console.log( 'arr1 and arr2 have same values: ' + ns.hasSameValues( arr1, arr2 ) );
// => 'arr1 and arr2 have same values: false'

// Check safe data type casts:
console.log( 'Can safely cast from ' + dt2 + ' to ' + dt1 + ': ' + ns.isSafeDataTypeCast( dt2, dt1 ) );
// => 'Can safely cast from int32 to float64: true'

console.log( 'Can safely cast from ' + dt1 + ' to ' + dt2 + ': ' + ns.isSafeDataTypeCast( dt1, dt2 ) );
// => 'Can safely cast from float64 to int32: false'

console.log( 'Can safely cast from ' + dt3 + ' to ' + dt2 + ': ' + ns.isSafeDataTypeCast( dt3, dt2 ) );
// => 'Can safely cast from uint8 to int32: true'

console.log( 'Can safely cast from ' + dt4 + ' to ' + dt1 + ': ' + ns.isSafeDataTypeCast( dt4, dt1 ) );
// => 'Can safely cast from complex128 to float64: false'

// Check if arrays contain specific values:
console.log( 'arr1 contains 2.2: ' + ns.contains( arr1, 2.2 ) );
// => 'arr1 contains 2.2: true'

console.log( 'arr2 contains 2: ' + ns.contains( arr2, 2 ) );
// => 'arr2 contains 2: true'

console.log( 'arr2 contains 2.2: ' + ns.contains( arr2, 2.2 ) );
// => 'arr2 contains 2.2: false'

// Check complex array types:
console.log( 'arr4 is Complex128Array: ' + ns.isComplex128Array( arr4 ) );
// => 'arr4 is Complex128Array: true'

console.log( 'arr4 is complex typed array: ' + ns.isComplexTypedArray( arr4 ) );
// => 'arr4 is complex typed array: true'
