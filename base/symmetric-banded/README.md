<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Symmetric Banded Arrays

> Symmetric banded array utilities.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/array/base/symmetric-banded' );
```

#### ns

Namespace containing symmetric banded array utilities.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`filled2dBy( N, k, fill, clbk[, thisArg] )`][@stdlib/array/base/symmetric-banded/filled2d-by]</span><span class="delimiter">: </span><span class="description">create a filled two-dimensional symmetric banded nested array according to a provided callback function.</span>
-   <span class="signature">[`toCompact( uplo, arr, k, colexicographic )`][@stdlib/array/base/symmetric-banded/to-compact]</span><span class="delimiter">: </span><span class="description">convert a two-dimensional symmetric banded nested array to compact banded storage.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/array/base/symmetric-banded' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/array/base/symmetric-banded/filled2d-by]: https://github.com/stdlib-js/array/tree/main/base/symmetric-banded/filled2d-by

[@stdlib/array/base/symmetric-banded/to-compact]: https://github.com/stdlib-js/array/tree/main/base/symmetric-banded/to-compact

<!-- </toc-links> -->

</section>

<!-- /.links -->
