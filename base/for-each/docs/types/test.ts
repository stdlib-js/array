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
import forEach = require( './index' );

/**
* Callback function.
*
* @param v - array element
* @throws unexpected error
*/
function clbk( v: any ): void {
	if ( v !== v ) {
		throw new Error( 'unexpected error' );
	}
}

// TESTS //

// The function returns undefined...
{
	forEach( [ 1, 2, 3 ], clbk ); // $ExpectType void
	forEach( new Float64Array( [ 1, 2, 3 ] ), clbk ); // $ExpectType void
	forEach( new Float32Array( [ 1, 2, 3 ] ), clbk ); // $ExpectType void
	forEach( new Int32Array( [ 1, 2, 3 ] ), clbk ); // $ExpectType void
	forEach( new Int16Array( [ 1, 2, 3 ] ), clbk ); // $ExpectType void
	forEach( new Int8Array( [ 1, 2, 3 ] ), clbk ); // $ExpectType void
	forEach( new Uint32Array( [ 1, 2, 3 ] ), clbk ); // $ExpectType void
	forEach( new Uint16Array( [ 1, 2, 3 ] ), clbk ); // $ExpectType void
	forEach( new Uint8Array( [ 1, 2, 3 ] ), clbk ); // $ExpectType void
	forEach( new Uint8ClampedArray( [ 1, 2, 3 ] ), clbk ); // $ExpectType void
	forEach( toAccessorArray( [ 1, 2, 3 ] ), clbk ); // $ExpectType void

	forEach( [ 1, 2, 3 ], clbk, {} ); // $ExpectType void
	forEach( new Float64Array( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
	forEach( new Float32Array( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
	forEach( new Int32Array( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
	forEach( new Int16Array( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
	forEach( new Int8Array( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
	forEach( new Uint32Array( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
	forEach( new Uint16Array( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
	forEach( new Uint8Array( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
	forEach( new Uint8ClampedArray( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
	forEach( toAccessorArray( [ 1, 2, 3 ] ), clbk, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	forEach( 2, clbk ); // $ExpectError
	forEach( false, clbk ); // $ExpectError
	forEach( true, clbk ); // $ExpectError
	forEach( {}, clbk ); // $ExpectError

	forEach( 2, clbk, {} ); // $ExpectError
	forEach( false, clbk, {} ); // $ExpectError
	forEach( true, clbk, {} ); // $ExpectError
	forEach( {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	forEach( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	forEach( [ 1, 2, 3 ], 2 ); // $ExpectError
	forEach( [ 1, 2, 3 ], false ); // $ExpectError
	forEach( [ 1, 2, 3 ], true ); // $ExpectError
	forEach( [ 1, 2, 3 ], null ); // $ExpectError
	forEach( [ 1, 2, 3 ], void 0 ); // $ExpectError
	forEach( [ 1, 2, 3 ], {} ); // $ExpectError
	forEach( [ 1, 2, 3 ], [] ); // $ExpectError

	forEach( [ 1, 2, 3 ], 'abc', {} ); // $ExpectError
	forEach( [ 1, 2, 3 ], 2, {} ); // $ExpectError
	forEach( [ 1, 2, 3 ], false, {} ); // $ExpectError
	forEach( [ 1, 2, 3 ], true, {} ); // $ExpectError
	forEach( [ 1, 2, 3 ], null, {} ); // $ExpectError
	forEach( [ 1, 2, 3 ], void 0, {} ); // $ExpectError
	forEach( [ 1, 2, 3 ], {}, {} ); // $ExpectError
	forEach( [ 1, 2, 3 ], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	forEach(); // $ExpectError
	forEach( [ 1, 2, 3 ] ); // $ExpectError
	forEach( [ 1, 2, 3 ], clbk, {}, 3 ); // $ExpectError
}
