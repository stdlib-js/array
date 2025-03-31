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

// TypeScript Version: 4.1

/**
* Tests whether an input value is a supported array byte order.
*
* @param v - value to test
* @returns boolean indicating whether an input value is a supported array byte order
*
* @example
* var bool = isByteOrder( 'little-endian' );
* // returns true
*
* bool = isByteOrder( 'big-endian' );
* // returns true
*
* bool = isByteOrder( 'foo' );
* // returns false
*/
declare function isByteOrder( v: any ): boolean;


// EXPORTS //

export = isByteOrder;
