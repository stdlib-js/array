<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# base

> Base (i.e., lower-level) array utilities.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/array/base' );
```

#### ns

Arrays.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arraylike2object( x )`][@stdlib/array/base/arraylike2object]</span><span class="delimiter">: </span><span class="description">convert an array-like object to an object likely to have the same "shape".</span>
-   <span class="signature">[`copy( x )`][@stdlib/array/base/copy]</span><span class="delimiter">: </span><span class="description">copy the elements of an array-like object to a new "generic" array.</span>
-   <span class="signature">[`filledBy( len, clbk[, thisArg] )`][@stdlib/array/base/filled-by]</span><span class="delimiter">: </span><span class="description">create a filled "generic" array according to a provided callback function.</span>
-   <span class="signature">[`filled( value, len )`][@stdlib/array/base/filled]</span><span class="delimiter">: </span><span class="description">create a filled "generic" array.</span>
-   <span class="signature">[`incrspace( start, stop, increment )`][@stdlib/array/base/incrspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array according to a provided increment.</span>
-   <span class="signature">[`linspace( start, stop, length )`][@stdlib/array/base/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array.</span>
-   <span class="signature">[`logspace( a, b, length )`][@stdlib/array/base/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>
-   <span class="signature">[`ones( len )`][@stdlib/array/base/ones]</span><span class="delimiter">: </span><span class="description">create a "generic" array filled with ones.</span>
-   <span class="signature">[`unitspace( start, stop, increment )`][@stdlib/array/base/unitspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1.</span>
-   <span class="signature">[`zeros( len )`][@stdlib/array/base/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled "generic" array.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/array/base' );

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

[@stdlib/array/base/arraylike2object]: https://github.com/stdlib-js/array/tree/main/base/arraylike2object

[@stdlib/array/base/copy]: https://github.com/stdlib-js/array/tree/main/base/copy

[@stdlib/array/base/filled-by]: https://github.com/stdlib-js/array/tree/main/base/filled-by

[@stdlib/array/base/filled]: https://github.com/stdlib-js/array/tree/main/base/filled

[@stdlib/array/base/incrspace]: https://github.com/stdlib-js/array/tree/main/base/incrspace

[@stdlib/array/base/linspace]: https://github.com/stdlib-js/array/tree/main/base/linspace

[@stdlib/array/base/logspace]: https://github.com/stdlib-js/array/tree/main/base/logspace

[@stdlib/array/base/ones]: https://github.com/stdlib-js/array/tree/main/base/ones

[@stdlib/array/base/unitspace]: https://github.com/stdlib-js/array/tree/main/base/unitspace

[@stdlib/array/base/zeros]: https://github.com/stdlib-js/array/tree/main/base/zeros

<!-- </toc-links> -->

</section>

<!-- /.links -->
