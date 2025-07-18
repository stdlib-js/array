<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# sparsearray2iterator

> Create an iterator from a sparse array-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sparsearray2iterator = require( '@stdlib/array/to-sparse-iterator' );
```

#### sparsearray2iterator( src\[, mapFcn\[, thisArg]] )

Returns an iterator which iterates over each element in a sparse array-like `object`.

<!-- eslint-disable no-sparse-arrays -->

```javascript
var it = sparsearray2iterator( [ 1, , , 4 ] );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

To invoke a function for each `src` value, provide a callback function.

<!-- eslint-disable no-sparse-arrays -->

```javascript
function fcn( v ) {
    return v * 10.0;
}

var it = sparsearray2iterator( [ 1, , 3, 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 10.0

v = it.next().value;
// returns 30.0

// ...
```

The invoked function is provided three arguments:

-   **value**: iterated value.
-   **index**: iterated value index.
-   **src**: source array-like object.

<!-- eslint-disable no-sparse-arrays -->

```javascript
function fcn( v, i ) {
    return v * (i+1);
}

var it = sparsearray2iterator( [ 1, 2, , 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 4

v = it.next().value;
// returns 16
```

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable no-sparse-arrays -->

```javascript
function fcn( v ) {
    this.count += 1;
    return v * 10.0;
}

var ctx = {
    'count': 0
};

var it = sparsearray2iterator( [ 1, , 3, 4 ], fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns 10.0

v = it.next().value;
// returns 30.0

var count = ctx.count;
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   If provided a generic `array`, the returned iterator **ignores** holes (i.e., `undefined` values). To iterate over all generic `array` elements, use [`@stdlib/array/to-iterator`][@stdlib/array/to-iterator].
-   A returned iterator does **not** copy a provided array-like `object`. To ensure iterable reproducibility, copy a provided array-like `object` **before** creating an iterator. Otherwise, any changes to the contents of an array-like `object` will be reflected in the returned iterator.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke an array's `@@iterator` method, regardless of whether this method is defined. To convert an array to an implementation defined iterator, invoke this method directly.
-   The returned iterator supports array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/complex64`][@stdlib/array/complex64]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var sparsearray2iterator = require( '@stdlib/array/to-sparse-iterator' );

function scale( v, i ) {
    return v * (i+1);
}

// Create an array partially filled with random numbers:
var arr = new Array( 100 );
var i;
for ( i = 0; i < arr.length; i += 2 ) {
    arr[ i ] = randu();
}

// Create an iterator from the array which scales iterated values:
var it = sparsearray2iterator( arr, scale );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
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

-   <span class="package-name">[`@stdlib/array/from-iterator`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>
-   <span class="package-name">[`@stdlib/array/to-iterator`][@stdlib/array/to-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object.</span>
-   <span class="package-name">[`@stdlib/array/to-sparse-iterator-right`][@stdlib/array/to-sparse-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator from a sparse array-like object, iterating from right to left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex64]: https://github.com/stdlib-js/array/tree/main/complex64

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array/tree/main/from-iterator

[@stdlib/array/to-iterator]: https://github.com/stdlib-js/array/tree/main/to-iterator

[@stdlib/array/to-sparse-iterator-right]: https://github.com/stdlib-js/array/tree/main/to-sparse-iterator-right

<!-- </related-links> -->

</section>

<!-- /.links -->
