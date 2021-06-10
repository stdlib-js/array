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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { TypedArray } from '@stdlib/types/array';

/**
* Returns the data type of an array.
*
* ## Notes
*
* -   If provided an argument having an unknown or unsupported type, the function returns `null`.
*
* @param value - input value
* @returns data type
*
* @example
* var dt = dtype( [ 1, 2, 3 ] );
* // returns 'generic'
*
* var dt = dtype( 'beep' );
* // returns null
*/
declare function dtype( value: TypedArray | Array<any> ): string | null;


// EXPORTS //

export = dtype;
