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

import Complex128Array = require( './../../../../complex128' );
import Complex64Array = require( './../../../../complex64' );
import Slice = require( '@stdlib/slice/ctor' );
import sliceAssign = require( './index' );


// TESTS //

// The function returns an array...
{
	sliceAssign( [ 1, 2, 3 ], [ 1, 2, 3 ], new Slice(), false ); // $ExpectType number[]
	sliceAssign( new Float64Array( [ 1, 2, 3 ] ), new Float64Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Float64Array
	sliceAssign( new Float32Array( [ 1, 2, 3 ] ), new Float32Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Float32Array
	sliceAssign( new Int32Array( [ 1, 2, 3 ] ), new Int32Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Int32Array
	sliceAssign( new Int16Array( [ 1, 2, 3 ] ), new Int16Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Int16Array
	sliceAssign( new Int8Array( [ 1, 2, 3 ] ), new Int8Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Int8Array
	sliceAssign( new Uint32Array( [ 1, 2, 3 ] ), new Uint32Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Uint32Array
	sliceAssign( new Uint16Array( [ 1, 2, 3 ] ), new Uint16Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Uint16Array
	sliceAssign( new Uint8Array( [ 1, 2, 3 ] ), new Uint8Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Uint8Array
	sliceAssign( new Uint8ClampedArray( [ 1, 2, 3 ] ), new Uint8ClampedArray( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Uint8ClampedArray
	sliceAssign( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), new Slice(), false ); // $ExpectType Complex128Array
	sliceAssign( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), new Slice(), false ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	sliceAssign( 5, [ 1, 2, 3 ], new Slice(), false ); // $ExpectError
	sliceAssign( true, [ 1, 2, 3 ], new Slice(), false ); // $ExpectError
	sliceAssign( false, [ 1, 2, 3 ], new Slice(), false ); // $ExpectError
	sliceAssign( null, [ 1, 2, 3 ], new Slice(), false ); // $ExpectError
	sliceAssign( void 0, [ 1, 2, 3 ], new Slice(), false ); // $ExpectError
	sliceAssign( {}, [ 1, 2, 3 ], new Slice(), false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	sliceAssign( x, 5, new Slice(), false ); // $ExpectError
	sliceAssign( x, true, new Slice(), false ); // $ExpectError
	sliceAssign( x, false, new Slice(), false ); // $ExpectError
	sliceAssign( x, null, new Slice(), false ); // $ExpectError
	sliceAssign( x, void 0, new Slice(), false ); // $ExpectError
	sliceAssign( x, {}, new Slice(), false ); // $ExpectError
	sliceAssign( x, ( x: number ): number => x, new Slice(), false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a slice object...
{
	const x = [ 1, 2, 3 ];

	sliceAssign( x, x, '5', false ); // $ExpectError
	sliceAssign( x, x, true, false ); // $ExpectError
	sliceAssign( x, x, false, false ); // $ExpectError
	sliceAssign( x, x, null, false ); // $ExpectError
	sliceAssign( x, x, void 0, false ); // $ExpectError
	sliceAssign( x, x, {}, false ); // $ExpectError
	sliceAssign( x, x, [], false ); // $ExpectError
	sliceAssign( x, x, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = [ 1, 2, 3 ];

	sliceAssign( x, x, new Slice(), '5' ); // $ExpectError
	sliceAssign( x, x, new Slice(), 5 ); // $ExpectError
	sliceAssign( x, x, new Slice(), null ); // $ExpectError
	sliceAssign( x, x, new Slice(), void 0 ); // $ExpectError
	sliceAssign( x, x, new Slice(), {} ); // $ExpectError
	sliceAssign( x, x, new Slice(), [] ); // $ExpectError
	sliceAssign( x, x, new Slice(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	sliceAssign(); // $ExpectError
	sliceAssign( x ); // $ExpectError
	sliceAssign( x, x ); // $ExpectError
	sliceAssign( x, x, new Slice() ); // $ExpectError
	sliceAssign( x, x, new Slice(), false, {} ); // $ExpectError
}
