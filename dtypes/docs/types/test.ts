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

import dtypes = require( './index' );


// TESTS //

// The function returns an array of data types...
{
	dtypes(); // $ExpectType DataType[]
	dtypes( 'floating_point' ); // $ExpectType DataType[]
	dtypes( 'floating_point_and_generic' ); // $ExpectType DataType[]
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dtypes( 'floating_point', 2 ); // $ExpectError
}
