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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, AccessorArrayLike } from '@stdlib/types/array';
import { Mode } from '@stdlib/types/ndarray';

/**
* Index array.
*/
type IndexArray = Collection<number> | AccessorArrayLike<number>;

/**
* Values array.
*/
type ValuesArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Scatters a list of provided values to specified indices in a new zero-filled "generic" array.
*
* @param len - output array length
* @param indices - list of element indices
* @param values - values to scatter
* @param mode - index mode
* @returns output array
*
* @example
* var indices = [ 1, 2 ];
* var values = [ 20, 30 ];
*
* var out = scattered( 4, indices, values, 'throw' );
* // returns [ 0, 20, 30, 0 ]
*
* @example
* var out = scattered( 4, [ 1, 2 ], [ 30 ], 'throw' );
* // returns [ 0, 30, 30, 0 ]
*/
declare function scattered<T = unknown>( len: number, indices: IndexArray, values: ValuesArray<T>, mode: Mode ): Array<number | T>;


// EXPORTS //

export = scattered;
