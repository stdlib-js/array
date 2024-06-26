/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { DataTypeMap } from '@stdlib/types/array';

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   If `dtype` is `'generic'`, the function always returns a zero-filled array.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type (default: 'float64')
* @returns empty array
*
* @example
* var arr = empty( 2 );
* // returns <Float64Array>
*
* @example
* var arr = empty( 2, 'float32' );
* // returns <Float32Array>
*/
declare function empty<T extends keyof DataTypeMap<number> = 'float64'>( length: number, dtype?: T ): DataTypeMap<number>[T];


// EXPORTS //

export = empty;
