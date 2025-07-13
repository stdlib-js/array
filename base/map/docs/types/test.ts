/*
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

import toAccessorArray = require( './../../../../base/to-accessor-array' );
import map = require( './index' );

/**
* Callback function.
*
* @param v - input value
* @returns output value
*/
function fcn( v: number ): number {
	return v * 2;
}


// TESTS //

// The function returns an array...
{
	const x = [ 1, 2, 3 ];

	map( x, fcn ); // $ExpectType number[]
	map( new Float64Array( x ), fcn ); // $ExpectType Float64Array
	map( new Float32Array( x ), fcn ); // $ExpectType Float32Array
	map( new Int32Array( x ), fcn ); // $ExpectType Int32Array
	map( new Int16Array( x ), fcn ); // $ExpectType Int16Array
	map( new Int8Array( x ), fcn ); // $ExpectType Int8Array
	map( new Uint32Array( x ), fcn ); // $ExpectType Uint32Array
	map( new Uint16Array( x ), fcn ); // $ExpectType Uint16Array
	map( new Uint8Array( x ), fcn ); // $ExpectType Uint8Array
	map( new Uint8ClampedArray( x ), fcn ); // $ExpectType Uint8ClampedArray
	map( toAccessorArray( x ), fcn ); // $ExpectType number[]

	map( x, fcn, {} ); // $ExpectType number[]
	map( new Float64Array( x ), fcn, {} ); // $ExpectType Float64Array
	map( new Float32Array( x ), fcn, {} ); // $ExpectType Float32Array
	map( new Int32Array( x ), fcn, {} ); // $ExpectType Int32Array
	map( new Int16Array( x ), fcn, {} ); // $ExpectType Int16Array
	map( new Int8Array( x ), fcn, {} ); // $ExpectType Int8Array
	map( new Uint32Array( x ), fcn, {} ); // $ExpectType Uint32Array
	map( new Uint16Array( x ), fcn, {} ); // $ExpectType Uint16Array
	map( new Uint8Array( x ), fcn, {} ); // $ExpectType Uint8Array
	map( new Uint8ClampedArray( x ), fcn, {} ); // $ExpectType Uint8ClampedArray
	map( toAccessorArray( x ), fcn, {} ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	map( 'abc', fcn ); // $ExpectError
	map( 3.14, fcn ); // $ExpectError
	map( true, fcn ); // $ExpectError
	map( false, fcn ); // $ExpectError
	map( null, fcn ); // $ExpectError
	map( {}, fcn ); // $ExpectError
	map( ( x: number ): number => x, fcn ); // $ExpectError

	map( 'abc', fcn, {} ); // $ExpectError
	map( 3.14, fcn, {} ); // $ExpectError
	map( true, fcn, {} ); // $ExpectError
	map( false, fcn, {} ); // $ExpectError
	map( null, fcn, {} ); // $ExpectError
	map( {}, fcn, {} ); // $ExpectError
	map( ( x: number ): number => x, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	map( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	map( [ 1, 2, 3 ], 2 ); // $ExpectError
	map( [ 1, 2, 3 ], false ); // $ExpectError
	map( [ 1, 2, 3 ], true ); // $ExpectError
	map( [ 1, 2, 3 ], null ); // $ExpectError
	map( [ 1, 2, 3 ], void 0 ); // $ExpectError
	map( [ 1, 2, 3 ], {} ); // $ExpectError
	map( [ 1, 2, 3 ], [] ); // $ExpectError

	map( [ 1, 2, 3 ], 'abc', {} ); // $ExpectError
	map( [ 1, 2, 3 ], 2, {} ); // $ExpectError
	map( [ 1, 2, 3 ], false, {} ); // $ExpectError
	map( [ 1, 2, 3 ], true, {} ); // $ExpectError
	map( [ 1, 2, 3 ], null, {} ); // $ExpectError
	map( [ 1, 2, 3 ], void 0, {} ); // $ExpectError
	map( [ 1, 2, 3 ], {}, {} ); // $ExpectError
	map( [ 1, 2, 3 ], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	map(); // $ExpectError
	map( [ 1, 2, 3 ] ); // $ExpectError
	map( [ 1, 2, 3 ], fcn, {}, 3 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 1, 2, 3 ];
	const y = [ 0, 0, 0 ];

	map.assign( x, y, 1, 0, fcn ); // $ExpectType number[]
	map.assign( new Float64Array( x ), new Float64Array( y ), 1, 0, fcn ); // $ExpectType Float64Array
	map.assign( new Float32Array( x ), new Float32Array( y ), 1, 0, fcn ); // $ExpectType Float32Array
	map.assign( new Int32Array( x ), new Int32Array( y ), 1, 0, fcn ); // $ExpectType Int32Array
	map.assign( new Int16Array( x ), new Int16Array( y ), 1, 0, fcn ); // $ExpectType Int16Array
	map.assign( new Int8Array( x ), new Int8Array( y ), 1, 0, fcn ); // $ExpectType Int8Array
	map.assign( new Uint32Array( x ), new Uint32Array( y ), 1, 0, fcn ); // $ExpectType Uint32Array
	map.assign( new Uint16Array( x ), new Uint16Array( y ), 1, 0, fcn ); // $ExpectType Uint16Array
	map.assign( new Uint8Array( x ), new Uint8Array( y ), 1, 0, fcn ); // $ExpectType Uint8Array
	map.assign( new Uint8ClampedArray( x ), new Uint8ClampedArray( y ), 1, 0, fcn ); // $ExpectType Uint8ClampedArray
	map.assign( toAccessorArray( x ), y, 1, 0, fcn ); // $ExpectType number[]
	map.assign( toAccessorArray( x ), toAccessorArray( y ), 1, 0, fcn ); // $ExpectType AccessorArrayLike<number>

	map.assign( x, y, 1, 0, fcn, {} ); // $ExpectType number[]
	map.assign( new Float64Array( x ), new Float64Array( y ), 1, 0, fcn, {} ); // $ExpectType Float64Array
	map.assign( new Float32Array( x ), new Float32Array( y ), 1, 0, fcn, {} ); // $ExpectType Float32Array
	map.assign( new Int32Array( x ), new Int32Array( y ), 1, 0, fcn, {} ); // $ExpectType Int32Array
	map.assign( new Int16Array( x ), new Int16Array( y ), 1, 0, fcn, {} ); // $ExpectType Int16Array
	map.assign( new Int8Array( x ), new Int8Array( y ), 1, 0, fcn, {} ); // $ExpectType Int8Array
	map.assign( new Uint32Array( x ), new Uint32Array( y ), 1, 0, fcn, {} ); // $ExpectType Uint32Array
	map.assign( new Uint16Array( x ), new Uint16Array( y ), 1, 0, fcn, {} ); // $ExpectType Uint16Array
	map.assign( new Uint8Array( x ), new Uint8Array( y ), 1, 0, fcn, {} ); // $ExpectType Uint8Array
	map.assign( new Uint8ClampedArray( x ), new Uint8ClampedArray( y ), 1, 0, fcn, {} ); // $ExpectType Uint8ClampedArray
	map.assign( toAccessorArray( x ), y, 1, 0, fcn, {} ); // $ExpectType number[]
	map.assign( toAccessorArray( x ), toAccessorArray( y ), 1, 0, fcn, {} ); // $ExpectType AccessorArrayLike<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a collection...
{
	const y = [ 0, 0, 0 ];

	map.assign( 2, y, 1, 0, fcn ); // $ExpectError
	map.assign( false, y, 1, 0, fcn ); // $ExpectError
	map.assign( true, y, 1, 0, fcn ); // $ExpectError
	map.assign( null, y, 1, 0, fcn ); // $ExpectError
	map.assign( void 0, y, 1, 0, fcn ); // $ExpectError
	map.assign( {}, y, 1, 0, fcn ); // $ExpectError

	map.assign( 2, y, 1, 0, fcn, {} ); // $ExpectError
	map.assign( false, y, 1, 0, fcn, {} ); // $ExpectError
	map.assign( true, y, 1, 0, fcn, {} ); // $ExpectError
	map.assign( null, y, 1, 0, fcn, {} ); // $ExpectError
	map.assign( void 0, y, 1, 0, fcn, {} ); // $ExpectError
	map.assign( {}, y, 1, 0, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	map.assign( x, 2, 1, 0, fcn ); // $ExpectError
	map.assign( x, false, 1, 0, fcn ); // $ExpectError
	map.assign( x, true, 1, 0, fcn ); // $ExpectError
	map.assign( x, null, 1, 0, fcn ); // $ExpectError
	map.assign( x, void 0, 1, 0, fcn ); // $ExpectError
	map.assign( x, {}, 1, 0, fcn ); // $ExpectError

	map.assign( x, 2, 1, 0, fcn, {} ); // $ExpectError
	map.assign( x, false, 1, 0, fcn, {} ); // $ExpectError
	map.assign( x, true, 1, 0, fcn, {} ); // $ExpectError
	map.assign( x, null, 1, 0, fcn, {} ); // $ExpectError
	map.assign( x, void 0, 1, 0, fcn, {} ); // $ExpectError
	map.assign( x, {}, 1, 0, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const x = [ 1, 2, 3 ];
	const y = [ 0, 0, 0 ];

	map.assign( x, y, '5', 0, fcn ); // $ExpectError
	map.assign( x, y, false, 0, fcn ); // $ExpectError
	map.assign( x, y, true, 0, fcn ); // $ExpectError
	map.assign( x, y, null, 0, fcn ); // $ExpectError
	map.assign( x, y, void 0, 0, fcn ); // $ExpectError
	map.assign( x, y, {}, 0, fcn ); // $ExpectError
	map.assign( x, y, [], 0, fcn ); // $ExpectError
	map.assign( x, y, ( x: number ): number => x, 0, fcn ); // $ExpectError

	map.assign( x, y, '5', 0, fcn, {} ); // $ExpectError
	map.assign( x, y, false, 0, fcn, {} ); // $ExpectError
	map.assign( x, y, true, 0, fcn, {} ); // $ExpectError
	map.assign( x, y, null, 0, fcn, {} ); // $ExpectError
	map.assign( x, y, void 0, 0, fcn, {} ); // $ExpectError
	map.assign( x, y, {}, 0, fcn, {} ); // $ExpectError
	map.assign( x, y, [], 0, fcn, {} ); // $ExpectError
	map.assign( x, y, ( x: number ): number => x, 0, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ 1, 2, 3 ];
	const y = [ 0, 0, 0 ];

	map.assign( x, y, 1, '5', fcn ); // $ExpectError
	map.assign( x, y, 1, false, fcn ); // $ExpectError
	map.assign( x, y, 1, true, fcn ); // $ExpectError
	map.assign( x, y, 1, null, fcn ); // $ExpectError
	map.assign( x, y, 1, void 0, fcn ); // $ExpectError
	map.assign( x, y, 1, {}, fcn ); // $ExpectError
	map.assign( x, y, 1, [], fcn ); // $ExpectError
	map.assign( x, y, 1, ( x: number ): number => x, fcn ); // $ExpectError

	map.assign( x, y, 1, '5', fcn, {} ); // $ExpectError
	map.assign( x, y, 1, false, fcn, {} ); // $ExpectError
	map.assign( x, y, 1, true, fcn, {} ); // $ExpectError
	map.assign( x, y, 1, null, fcn, {} ); // $ExpectError
	map.assign( x, y, 1, void 0, fcn, {} ); // $ExpectError
	map.assign( x, y, 1, {}, fcn, {} ); // $ExpectError
	map.assign( x, y, 1, [], fcn, {} ); // $ExpectError
	map.assign( x, y, 1, ( x: number ): number => x, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a function...
{
	const x = [ 1, 2, 3 ];
	const y = [ 0, 0, 0 ];

	map.assign( x, y, 1, 0, '5' ); // $ExpectError
	map.assign( x, y, 1, 0, 5 ); // $ExpectError
	map.assign( x, y, 1, 0, false ); // $ExpectError
	map.assign( x, y, 1, 0, true ); // $ExpectError
	map.assign( x, y, 1, 0, null ); // $ExpectError
	map.assign( x, y, 1, 0, void 0 ); // $ExpectError
	map.assign( x, y, 1, 0, {} ); // $ExpectError
	map.assign( x, y, 1, 0, [] ); // $ExpectError

	map.assign( x, y, 1, 0, '5', {} ); // $ExpectError
	map.assign( x, y, 1, 0, 5, {} ); // $ExpectError
	map.assign( x, y, 1, 0, false, {} ); // $ExpectError
	map.assign( x, y, 1, 0, true, {} ); // $ExpectError
	map.assign( x, y, 1, 0, null, {} ); // $ExpectError
	map.assign( x, y, 1, 0, void 0, {} ); // $ExpectError
	map.assign( x, y, 1, 0, {}, {} ); // $ExpectError
	map.assign( x, y, 1, 0, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];
	const y = [ 0, 0, 0 ];

	map.assign(); // $ExpectError
	map.assign( x ); // $ExpectError
	map.assign( x, y ); // $ExpectError
	map.assign( x, y, 1, 0 ); // $ExpectError
	map.assign( x, y, 1, 0, fcn, {}, {} ); // $ExpectError
}
