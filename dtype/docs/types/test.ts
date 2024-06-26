/*
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

import Complex128Array = require( './../../../complex128' );
import Complex64Array = require( './../../../complex64' );
import BooleanArray = require( './../../../bool' );
import dtype = require( './index' );


// TESTS //

// The function returns a data type or null..
{
	dtype( new Float64Array( 10 ) ); // $ExpectType "float64"
	dtype( new Float32Array( 10 ) ); // $ExpectType "float32"
	dtype( new Complex128Array( 10 ) ); // $ExpectType "complex128"
	dtype( new Complex64Array( 10 ) ); // $ExpectType "complex64"
	dtype( new Int32Array( 10 ) ); // $ExpectType "int32"
	dtype( new Int16Array( 10 ) ); // $ExpectType "int16"
	dtype( new Int8Array( 10 ) ); // $ExpectType "int8"
	dtype( new Uint32Array( 10 ) ); // $ExpectType "uint32"
	dtype( new Uint16Array( 10 ) ); // $ExpectType "uint16"
	dtype( new Uint8Array( 10 ) ); // $ExpectType "uint8"
	dtype( new Uint8ClampedArray( 10 ) ); // $ExpectType "uint8c"
	dtype( new BooleanArray( 10 ) ); // $ExpectType "bool"
	dtype( [] ); // $ExpectType "generic"
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dtype(); // $ExpectError
	dtype( [ 1, 2, 3 ], 3 ); // $ExpectError
}
