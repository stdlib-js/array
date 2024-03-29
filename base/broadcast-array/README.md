<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# broadcastArray

> Broadcast an array to a specified shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var broadcastArray = require( '@stdlib/array/base/broadcast-array' );
```

#### broadcastArray( x, inShape, outShape )

Broadcasts an array to a specified shape.

```javascript
var x = [ 1, 2 ];

var out = broadcastArray( x, [ 2 ], [ 2, 2 ] );
// returns {...}

var shape = out.shape;
// returns [ 2, 2 ]

var strides = out.strides;
// returns [ 0, 1 ]

var ref = out.ref;
// returns [ 1, 2 ]

var bool = ( x === ref );
// returns true

var data = out.data;
// returns [ [ 1, 2 ] ]
```

The function returns an object having the following properties:

-   **ref**: reference to the original input array.
-   **data**: broadcasted array.
-   **shape**: broadcasted array shape.
-   **strides**: broadcasted array strides. Strides describe how to iterate over broadcasted array dimensions.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The broadcasted array shares the same data as the input array. As more than one element of a broadcasted array may refer to the same memory location, writing to the broadcasted array may affect multiple elements. If you need to write to the broadcasted array, copy the array **before** performing operations which may mutate elements.
-   The function throws an error if a provided input shape is [incompatible][@stdlib/ndarray/base/broadcast-shapes] with a provided output shape.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var broadcastArray = require( '@stdlib/array/base/broadcast-array' );

// Create a 2x1 array:
var x = [
    [ 1 ],
    [ 2 ]
];

// Broadcast the array to 3x2x4:
var o = broadcastArray( x, [ 2, 1 ], [ 3, 2, 4 ] );
// returns {...}

// Retrieve the shape:
var sh = o.shape;
// returns [ 3, 2, 4 ]

// Retrieve the array "strides":
var st = o.strides;
// returns [...]

// Initialize loop indices:
var i0 = 0;
var i1 = 0;
var i2 = 0;

// Iterate over elements in the broadcasted array...
var i;
var j;
var k;
for ( i = 0; i < sh[ 0 ]; i++ ) {
    i1 = 0;
    for ( j = 0; j < sh[ 1 ]; j++ ) {
        i2 = 0;
        for ( k = 0; k < sh[ 2 ]; k++ ) {
            console.log( 'y[%s] = %d', [ i, j, k ].join( ',' ), o.data[ i0 ][ i1 ][ i2 ] );
            i2 += st[ 2 ];
        }
        i1 += st[ 1 ];
    }
    i0 += st[ 0 ];
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
