<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# bquaternary4d

> Apply a quaternary callback to elements in four [broadcasted][@stdlib/array/base/broadcast-array] input arrays and assign results to elements in a four-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var bquaternary4d = require( '@stdlib/array/base/broadcasted-quaternary4d' );
```

#### bquaternary4d( arrays, shapes, fcn )

Applies a quaternary callback to elements in four [broadcasted][@stdlib/array/base/broadcast-array] input arrays and assigns results to elements in a four-dimensional nested output array.

```javascript
var add = require( '@stdlib/number/float64/base/add4' );
var zeros4d = require( '@stdlib/array/base/zeros4d' );

var x = [ [ 1.0, 2.0 ] ];
var y = [ [ 3.0 ], [ 4.0 ] ];
var z = [ [ 5.0 ] ];
var w = [ [ 2.0 ] ];
var out = zeros4d( [ 2, 2, 2, 2 ] );

var shapes = [
    [ 1, 2 ],
    [ 2, 1 ],
    [ 1, 1 ],
    [ 1, 1 ],
    [ 1, 2, 2, 2 ]
];

bquaternary4d( [ x, y, z, w, out ], shapes, add );
// out => [ [ [ [ 11.0, 12.0 ], [ 12.0, 13.0 ] ], [ [ 11.0, 12.0 ], [ 12.0, 13.0 ] ] ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing four input nested arrays and one output nested array.
-   **shapes**: array shapes.
-   **fcn**: quaternary function to apply.

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
var filled4dBy = require( '@stdlib/array/base/filled4d-by' );
var zeros4d = require( '@stdlib/array/base/zeros4d' );
var add = require( '@stdlib/number/float64/base/add4' );
var bquaternary4d = require( '@stdlib/array/base/broadcasted-quaternary4d' );

var shapes = [
    [ 1, 1, 3, 1 ],
    [ 3, 1, 1, 1 ],
    [ 1, 1, 1, 3 ],
    [ 1, 3, 1, 1 ],
    [ 3, 3, 3, 3 ]
];

var x = filled4dBy( shapes[ 0 ], discreteUniform( -100, 100 ) );
console.log( x );

var y = filled4dBy( shapes[ 1 ], discreteUniform( -100, 100 ) );
console.log( y );

var z = filled4dBy( shapes[ 2 ], discreteUniform( -100, 100 ) );
console.log( z );

var w = filled4dBy( shapes[ 3 ], discreteUniform( -100, 100 ) );
console.log( w );

var out = zeros4d( shapes[ 4 ] );
console.log( out );

bquaternary4d( [ x, y, z, w, out ], shapes, add );
console.log( out );
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
