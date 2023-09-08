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

# bbinary2d

> Apply a binary callback to elements in [broadcasted][@stdlib/array/base/broadcast-array] nested input arrays and assign results to elements in a two-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var bbinary2d = require( '@stdlib/array/base/broadcasted-binary2d' );
```

#### bbinary2d( arrays, shapes, fcn )

Applies a binary callback to elements in [broadcasted][@stdlib/array/base/broadcast-array] nested input arrays and assigns results to elements in a two-dimensional nested output array.

```javascript
var zeros2d = require( '@stdlib/array/base/zeros2d' );
var add = require( '@stdlib/math/base/ops/add' );

var x = [ [ 1.0, 2.0 ] ];
var y = [ [ 3.0 ], [ 4.0 ] ];
var z = zeros2d( [ 2, 2 ] );

var shapes = [
    [ 1, 2 ],
    [ 2, 1 ],
    [ 2, 2 ]
];

bbinary2d( [ x, y, z ], shapes, add );
// z => [ [ 4.0, 5.0 ], [ 5.0, 6.0 ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing two input nested arrays and one output nested array.
-   **shapes**: array shapes.
-   **fcn**: binary function to apply.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input and output array shapes must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filled2dBy = require( '@stdlib/array/base/filled2d-by' );
var zeros2d = require( '@stdlib/array/base/zeros2d' );
var add = require( '@stdlib/math/base/ops/add' );
var bbinary2d = require( '@stdlib/array/base/broadcasted-binary2d' );

var shapes = [
    [ 1, 3 ],
    [ 3, 1 ],
    [ 3, 3 ]
];

var x = filled2dBy( shapes[ 0 ], discreteUniform( -100, 100 ) );
console.log( x );

var y = filled2dBy( shapes[ 1 ], discreteUniform( -100, 100 ) );
console.log( y );

var z = zeros2d( shapes[ 2 ] );
console.log( z );

bbinary2d( [ x, y, z ], shapes, add );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/base/broadcast-array]: https://github.com/stdlib-js/array/tree/main/base/broadcast-array

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
