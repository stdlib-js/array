<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# cartesianPower

> Return the [Cartesian power][cartesian-product].

<section class="usage">

## Usage

```javascript
var cartesianPower = require( '@stdlib/array/base/cartesian-power' );
```

#### cartesianPower( x, n )

Returns the [Cartesian power][cartesian-product].

```javascript
var x = [ 1, 2 ];

var out = cartesianPower( x, 2 );
// returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
```

If provided an empty array, the function returns an empty array.

```javascript
var out = cartesianPower( [], 2 );
// returns []
```

If `n` is less than or equal to zero, the function returns an empty array.

```javascript
var out = cartesianPower( [ 1, 2 ], 0 );
// returns []
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var cartesianPower = require( '@stdlib/array/base/cartesian-power' );

var x = linspace( 0, 5, 6 );

var out = cartesianPower( x, 3 );
// returns [ [ 0, 0, 0 ], [ 0, 0, 1 ], ..., [ 5, 5, 4 ], [ 5, 5, 5 ] ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/cartesian-power`][@stdlib/array/cartesian-power]</span><span class="delimiter">: </span><span class="description">return the Cartesian power.</span>
-   <span class="package-name">[`@stdlib/array/base/cartesian-product`][@stdlib/array/base/cartesian-product]</span><span class="delimiter">: </span><span class="description">return the Cartesian product.</span>
-   <span class="package-name">[`@stdlib/array/base/cartesian-square`][@stdlib/array/base/cartesian-square]</span><span class="delimiter">: </span><span class="description">return the Cartesian square.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cartesian-product]: https://en.wikipedia.org/wiki/Cartesian_product

<!-- <related-links> -->

[@stdlib/array/cartesian-power]: https://github.com/stdlib-js/array/tree/main/cartesian-power

[@stdlib/array/base/cartesian-product]: https://github.com/stdlib-js/array/tree/main/base/cartesian-product

[@stdlib/array/base/cartesian-square]: https://github.com/stdlib-js/array/tree/main/base/cartesian-square

<!-- </related-links> -->

</section>

<!-- /.links -->
