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

# zeros4d

> Create a zero-filled four-dimensional nested array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var zeros4d = require( '@stdlib/array/base/zeros4d' );
```

#### zeros4d( shape )

Returns a zero-filled four-dimensional nested array.

```javascript
var out = zeros4d( [ 1, 1, 2, 3 ] );
// returns [ [ [ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ] ] ]
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
var zeros4d = require( '@stdlib/array/base/zeros4d' );

var out = zeros4d( [ 1, 1, 1, 3 ] );
// returns [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ]

out = zeros4d( [ 1, 1, 3, 1 ] );
// returns [ [ [ [ 0.0 ], [ 0.0 ], [ 0.0 ] ] ] ]
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

-   <span class="package-name">[`@stdlib/array/base/zeros`][@stdlib/array/base/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled generic array.</span>
-   <span class="package-name">[`@stdlib/array/base/ones4d`][@stdlib/array/base/ones4d]</span><span class="delimiter">: </span><span class="description">create a four-dimensional nested array filled with ones.</span>
-   <span class="package-name">[`@stdlib/array/base/zeros2d`][@stdlib/array/base/zeros2d]</span><span class="delimiter">: </span><span class="description">create a zero-filled two-dimensional nested array.</span>
-   <span class="package-name">[`@stdlib/array/base/zeros3d`][@stdlib/array/base/zeros3d]</span><span class="delimiter">: </span><span class="description">create a zero-filled three-dimensional nested array.</span>
-   <span class="package-name">[`@stdlib/array/base/zeros5d`][@stdlib/array/base/zeros5d]</span><span class="delimiter">: </span><span class="description">create a zero-filled five-dimensional nested array.</span>
-   <span class="package-name">[`@stdlib/array/base/zerosnd`][@stdlib/array/base/zerosnd]</span><span class="delimiter">: </span><span class="description">create a zero-filled n-dimensional nested array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/array/base/zeros]: https://github.com/stdlib-js/array/tree/main/base/zeros

[@stdlib/array/base/ones4d]: https://github.com/stdlib-js/array/tree/main/base/ones4d

[@stdlib/array/base/zeros2d]: https://github.com/stdlib-js/array/tree/main/base/zeros2d

[@stdlib/array/base/zeros3d]: https://github.com/stdlib-js/array/tree/main/base/zeros3d

[@stdlib/array/base/zeros5d]: https://github.com/stdlib-js/array/tree/main/base/zeros5d

[@stdlib/array/base/zerosnd]: https://github.com/stdlib-js/array/tree/main/base/zerosnd

<!-- </related-links> -->

</section>

<!-- /.links -->
