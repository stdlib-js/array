/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import Int8Array = require( './index' );


// TESTS //

// The function returns a typed array instance...
{
	new Int8Array( 10 ); // $ExpectType Int8Array
	new Int8Array( [ 2, 5, 5, 7 ] ); // $ExpectType Int8Array
}

// The constructor function has to be invoked with `new`...
{
	Int8Array( 10 ); // $ExpectError
	Int8Array( [ 2, 5, 5, 7 ] ); // $ExpectError
}
