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

import nulls = require( './index' );


// TESTS //

// The function returns an array...
{
	nulls( 3 ); // $ExpectType null[]
}

// The compiler throws an error if the function is provided an argument which is not a number...
{
	nulls( 'abc' ); // $ExpectError
	nulls( true ); // $ExpectError
	nulls( false ); // $ExpectError
	nulls( null ); // $ExpectError
	nulls( [] ); // $ExpectError
	nulls( {} ); // $ExpectError
	nulls( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nulls(); // $ExpectError
	nulls( 3, 2 ); // $ExpectError
}
