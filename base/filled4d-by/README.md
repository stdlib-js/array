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

# filled4dBy

> Create a filled four-dimensional nested array according to a provided callback function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var filled4dBy = require( '@stdlib/array/base/filled4d-by' );
```

#### filled4dBy( shape, clbk\[, thisArg] )

Returns a filled four-dimensional nested array according to a provided callback function.

```javascript
function clbk() {
    return 1.0;
}

var out = filled4dBy( [ 1, 2, 1, 3 ], clbk );
// returns [ [ [ [ 1.0, 1.0, 1.0 ] ], [ [ 1.0, 1.0, 1.0 ] ] ] ]
```

When invoked, a callback function is provided a single argument:

-   **indices**: current array element indices.

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function clbk() {
    this.count += 1;
    return 1.0;
}

var ctx = {
    'count': 0
};

var out = filled4dBy( [ 1, 1, 2, 3 ], clbk, ctx );
// returns [ [ [ [ 1.0, 1.0, 1.0 ], [ 1.0, 1.0, 1.0 ] ] ] ]

var cnt = ctx.count;
// returns 6
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
var constantFunction = require( '@stdlib/utils/constant-function' );
var filled4dBy = require( '@stdlib/array/base/filled4d-by' );

var out = filled4dBy( [ 1, 1, 1, 3 ], constantFunction( 0.0 ) );
// returns [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ]

out = filled4dBy( [ 1, 1, 3, 1 ], constantFunction( 'beep' ) );
// returns [ [ [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ] ] ]

out = filled4dBy( [ 1, 1, 1, 3 ], constantFunction( null ) );
// returns [ [ [ [ null, null, null ] ] ] ]

out = filled4dBy( [ 1, 1, 3, 1 ], constantFunction( true ) );
// returns [ [ [ [ true ], [ true ], [ true ] ] ] ]

out = filled4dBy( [ 1, 1, 1, 3 ], constantFunction( void 0 ) );
// returns [ [ [ [ undefined, undefined, undefined ] ] ] ]
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

-   <span class="package-name">[`@stdlib/array/base/filled4d`][@stdlib/array/base/filled4d]</span><span class="delimiter">: </span><span class="description">create a filled four-dimensional nested array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/array/base/filled4d]: https://github.com/stdlib-js/array/tree/main/base/filled4d

<!-- </related-links> -->

</section>

<!-- /.links -->
