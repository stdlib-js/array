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

# fliplr4d

> Reverse the order of elements along the last dimension of a four-dimensional nested input array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var fliplr4d = require( '@stdlib/array/base/fliplr4d' );
```

#### fliplr4d( x )

Reverses the order of elements along the last dimension of a four-dimensional nested input array.

```javascript
var out = fliplr4d( [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] );
// returns [ [ [ [ 2, 1 ], [ 4, 3 ] ] ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filled4dBy = require( '@stdlib/array/base/filled4d-by' );
var fliplr4d = require( '@stdlib/array/base/fliplr4d' );

var x = filled4dBy( [ 1, 3, 3, 3 ], discreteUniform( -50, 50 ) );
console.log( x );

var y = fliplr4d( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/base/fliplr2d`][@stdlib/array/base/fliplr2d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a two-dimensional nested input array.</span>
-   <span class="package-name">[`@stdlib/array/base/fliplr3d`][@stdlib/array/base/fliplr3d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a three-dimensional nested input array.</span>
-   <span class="package-name">[`@stdlib/array/base/fliplr5d`][@stdlib/array/base/fliplr5d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a five-dimensional nested input array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/array/base/fliplr2d]: https://github.com/stdlib-js/array/tree/main/base/fliplr2d

[@stdlib/array/base/fliplr3d]: https://github.com/stdlib-js/array/tree/main/base/fliplr3d

[@stdlib/array/base/fliplr5d]: https://github.com/stdlib-js/array/tree/main/base/fliplr5d

<!-- </related-links> -->

</section>

<!-- /.links -->
