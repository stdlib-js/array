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

# ones2d

> Create a two-dimensional nested array filled with ones.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ones2d = require( '@stdlib/array/base/ones2d' );
```

#### ones2d( shape )

Returns a two-dimensional nested array filled with ones.

```javascript
var out = ones2d( [ 2, 3 ] );
// returns [ [ 1.0, 1.0, 1.0 ], [ 1.0, 1.0, 1.0 ] ]
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
var gscal = require( '@stdlib/blas/base/gscal' );
var ones2d = require( '@stdlib/array/base/ones2d' );

// Create a ones-filled array:
var arr = ones2d( [ 5, 10 ] );

// Scale element values...
gscal( arr[ 0 ].length, 2.0, arr[ 0 ], 1 );
gscal( arr[ 1 ].length, 3.0, arr[ 1 ], 1 );
gscal( arr[ 2 ].length, 4.0, arr[ 2 ], 1 );
gscal( arr[ 3 ].length, 5.0, arr[ 3 ], 1 );
gscal( arr[ 4 ].length, 6.0, arr[ 4 ], 1 );

console.log( arr );
// => [ [ 2.0, 2.0, ... ], [ 3.0, 3.0, ... ], [ 4.0, 4.0, ... ], [ 5.0, 5.0, ... ], [ 6.0, 6.0, ... ] ]
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

-   <span class="package-name">[`@stdlib/array/base/zeros2d`][@stdlib/array/base/zeros2d]</span><span class="delimiter">: </span><span class="description">create a zero-filled two-dimensional nested array.</span>
-   <span class="package-name">[`@stdlib/array/base/ones`][@stdlib/array/base/ones]</span><span class="delimiter">: </span><span class="description">create a generic array filled with ones.</span>
-   <span class="package-name">[`@stdlib/array/base/ones3d`][@stdlib/array/base/ones3d]</span><span class="delimiter">: </span><span class="description">create a three-dimensional nested array filled with ones.</span>
-   <span class="package-name">[`@stdlib/array/base/ones4d`][@stdlib/array/base/ones4d]</span><span class="delimiter">: </span><span class="description">create a four-dimensional nested array filled with ones.</span>
-   <span class="package-name">[`@stdlib/array/base/ones5d`][@stdlib/array/base/ones5d]</span><span class="delimiter">: </span><span class="description">create a five-dimensional nested array filled with ones.</span>
-   <span class="package-name">[`@stdlib/array/base/onesnd`][@stdlib/array/base/onesnd]</span><span class="delimiter">: </span><span class="description">create an n-dimensional nested array filled with ones.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/array/base/zeros2d]: https://github.com/stdlib-js/array/tree/main/base/zeros2d

[@stdlib/array/base/ones]: https://github.com/stdlib-js/array/tree/main/base/ones

[@stdlib/array/base/ones3d]: https://github.com/stdlib-js/array/tree/main/base/ones3d

[@stdlib/array/base/ones4d]: https://github.com/stdlib-js/array/tree/main/base/ones4d

[@stdlib/array/base/ones5d]: https://github.com/stdlib-js/array/tree/main/base/ones5d

[@stdlib/array/base/onesnd]: https://github.com/stdlib-js/array/tree/main/base/onesnd

<!-- </related-links> -->

</section>

<!-- /.links -->
