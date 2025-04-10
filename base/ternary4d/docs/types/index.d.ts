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

import { Array4D } from '@stdlib/types/array';
import { Shape4D } from '@stdlib/types/ndarray';

/**
* Ternary callback.
*
* @param v1 - element from first input array
* @param v2 - element from second input array
* @param v3 - element from third input array
* @returns result
*/
type Ternary<T, U, V, W> = ( v1: T, v2: U, v3: V ) => W;

/**
* Applies a ternary callback to elements in three four-dimensional nested input arrays and assigns results to elements in a four-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param arrays - array containing three input nested arrays and one output nested array
* @param shape - array shape
* @param fcn - ternary callback
*
* @example
* var add = require( '@stdlib/number/float64/base/add3' );
* var ones4d = require( '@stdlib/array/base/ones4d' );
* var zeros4d = require( '@stdlib/array/base/zeros4d' );
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = ones4d( shape );
* var y = ones4d( shape );
* var z = ones4d( shape );
* var out = zeros4d( shape );
*
* ternary4d( [ x, y, z, out ], shape, add );
*
* console.log( out );
* // => [ [ [ [ 3.0, 3.0 ], [ 3.0, 3.0 ] ] ] ]
*/
declare function ternary4d<T = unknown, U = unknown, V = unknown, W = unknown>( arrays: [ Array4D<T>, Array4D<U>, Array4D<V>, Array4D<W> ], shape: Shape4D, fcn: Ternary<T, U, V, W> ): void;


// EXPORTS //

export = ternary4d;
