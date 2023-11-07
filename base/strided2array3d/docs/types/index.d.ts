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

import { Array3D, ArrayLike } from '@stdlib/types/array';
import { Shape3D, Strides3D } from '@stdlib/types/ndarray';

/**
* Converts a strided array to a three-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that the input array is compatible with the specified array shape, dimension strides, and index offset.
*
* @param x - input array
* @param shape - array shape
* @param strides - dimension strides
* @param offset - index of the first indexed value in the input array
* @returns three-dimensional nested array
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array3d( x, [ 1, 3, 2 ], [ 4, 2, 1 ], 0 );
* // returns [ [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] ]
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var arr = strided2array3d( x, [ 1, 3, 2 ], [ 1, 1, 3 ], 0 );
* // returns [ [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ] ]
*/
declare function strided2array3d<T = unknown>( x: ArrayLike<T>, shape: Shape3D, strides: Strides3D, offset: number ): Array3D<T>;


// EXPORTS //

export = strided2array3d;
