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

<!-- lint disable maximum-heading-length -->

# flattenBy

> Flatten an n-dimensional nested array according to a callback function.

<section class="usage">

## Usage

```javascript
var flattenBy = require( '@stdlib/array/base/flatten-by' );
```

#### flattenBy( x, shape, colexicographic, clbk\[, thisArg] )

Flattens an n-dimensional nested array according to a callback function.

```javascript
function scale( v ) {
    return v * 2;
}

var x = [ [ 1, 2 ], [ 3, 4 ] ];

var out = flattenBy( x, [ 2, 2 ], false, scale );
// returns [ 2, 4, 6, 8 ]
```

To flatten in colexicographic order, provide a third argument equal to `true`.

```javascript
function scale( v ) {
    return v * 2;
}

var x = [ [ 1, 2 ], [ 3, 4 ] ];

var out = flattenBy( x, [ 2, 2 ], true, scale );
// returns [ 2, 6, 4, 8 ]
```

To set the callback execution context, provide a `thisArg` argument.

<!-- eslint-disable no-invalid-this -->

```javascript
function scale( v ) {
    this.count += 1;
    return v * 2;
}

var x = [ [ 1, 2 ], [ 3, 4 ] ];
var ctx = {
    'count': 0
};

var out = flattenBy( x, [ 2, 2 ], false, scale, ctx );
// returns [ 2, 4, 6, 8 ]

var count = ctx.count;
// returns 4
```

#### flattenBy.assign( x, shape, colexicographic, out, stride, offset, clbk\[, thisArg] )

Flattens an n-dimensional nested array according to a callback function and assigns elements to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function scale( v ) {
    return v * 2;
}

var x = [ [ 1, 2 ], [ 3, 4 ] ];
var out = new Float64Array( 4 );

var y = flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, scale );
// returns <Float64Array>[ 2, 4, 6, 8 ]

var bool = ( y === out );
// returns true

y = flattenBy.assign( x, [ 2, 2 ], true, out, 1, 0, scale );
// returns <Float64Array>[ 2, 6, 4, 8 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A callback function is provided the following arguments:

    -   **value**: nested array element.
    -   **indices**: element indices (in lexicographic order).
    -   **arr**: the input array.

-   Both functions assume that all nested arrays have the same length (i.e., the input array is **not** a ragged array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );
var flattenBy = require( '@stdlib/array/base/flatten-by' );

var fcn = naryFunction( abs, 1 );

// Define a 2x2x1x2x2 array:
var x = [
    [
        [
            [
                [ -1, -2 ], [ -3, -4 ]
            ]
        ],
        [
            [
                [ -5, -6 ], [ -7, -8 ]
            ]
        ]
    ],
    [
        [
            [
                [ -9, -10 ], [ -11, -12 ]
            ]
        ],
        [
            [
                [ -13, -14 ], [ -15, -16 ]
            ]
        ]
    ]
];

var out = flattenBy( x, [ 0, 0, 0, 0, 0 ], false, fcn );
// returns []

out = flattenBy( x, [ 0, 0, 0, 0, 0 ], true, fcn );
// returns []

out = flattenBy( x, [ 1, 1, 1, 1, 1 ], false, fcn );
// returns [ 1 ]

out = flattenBy( x, [ 1, 1, 1, 1, 1 ], true, fcn );
// returns [ 1 ]

out = flattenBy( x, [ 1, 2, 1, 2, 2 ], false, fcn );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8 ]

out = flattenBy( x, [ 1, 2, 1, 2, 2 ], true, fcn );
// returns [ 1, 5, 3, 7, 2, 6, 4, 8 ]

out = flattenBy( x, [ 2, 2, 1, 2, 2 ], false, fcn );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

out = flattenBy( x, [ 2, 2, 1, 2, 2 ], true, fcn );
// returns [ 1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/base/flatten`][@stdlib/array/base/flatten]</span><span class="delimiter">: </span><span class="description">flatten an n-dimensional nested array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/array/base/flatten]: https://github.com/stdlib-js/array/tree/main/base/flatten

<!-- </related-links> -->

</section>

<!-- /.links -->
