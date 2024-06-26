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

# assert

> Base array assertion utilities.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/array/base/assert' );
```

#### ns

Assertion utilities.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`contains( x, value )`][@stdlib/array/base/assert/contains]</span><span class="delimiter">: </span><span class="description">test if an array contains a provided search value.</span>
-   <span class="signature">[`hasSameValues( x, y )`][@stdlib/array/base/assert/has-same-values]</span><span class="delimiter">: </span><span class="description">test if two arrays have the same values.</span>
-   <span class="signature">[`isAccessorArray( value )`][@stdlib/array/base/assert/is-accessor-array]</span><span class="delimiter">: </span><span class="description">test if an array-like object supports the accessor (get/set) protocol.</span>
-   <span class="signature">[`isBooleanDataType( value )`][@stdlib/array/base/assert/is-boolean-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array boolean data type.</span>
-   <span class="signature">[`isBooleanArray( value )`][@stdlib/array/base/assert/is-booleanarray]</span><span class="delimiter">: </span><span class="description">test if a value is a `BooleanArray`.</span>
-   <span class="signature">[`isComplexFloatingPointDataType( value )`][@stdlib/array/base/assert/is-complex-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array complex-valued floating-point data type.</span>
-   <span class="signature">[`isComplexTypedArray( value )`][@stdlib/array/base/assert/is-complex-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a complex typed array.</span>
-   <span class="signature">[`isComplex128Array( value )`][@stdlib/array/base/assert/is-complex128array]</span><span class="delimiter">: </span><span class="description">test if a value is a `Complex128Array`.</span>
-   <span class="signature">[`isComplex64Array( value )`][@stdlib/array/base/assert/is-complex64array]</span><span class="delimiter">: </span><span class="description">test if a value is a `Complex64Array`.</span>
-   <span class="signature">[`isDataType( value )`][@stdlib/array/base/assert/is-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array data type.</span>
-   <span class="signature">[`isFloatingPointDataType( value )`][@stdlib/array/base/assert/is-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array floating-point data type.</span>
-   <span class="signature">[`isIntegerDataType( value )`][@stdlib/array/base/assert/is-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array integer data type.</span>
-   <span class="signature">[`isMostlySafeDataTypeCast( from, to )`][@stdlib/array/base/assert/is-mostly-safe-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an array data type can be safely cast or, for floating-point data types, downcast to another array data type.</span>
-   <span class="signature">[`isNumericDataType( value )`][@stdlib/array/base/assert/is-numeric-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array numeric data type.</span>
-   <span class="signature">[`isRealDataType( value )`][@stdlib/array/base/assert/is-real-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array real-valued data type.</span>
-   <span class="signature">[`isRealFloatingPointDataType( value )`][@stdlib/array/base/assert/is-real-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array real-valued floating-point data type.</span>
-   <span class="signature">[`isSafeDataTypeCast( from, to )`][@stdlib/array/base/assert/is-safe-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an array data type can be safely cast to another array data type.</span>
-   <span class="signature">[`isSameKindDataTypeCast( from, to )`][@stdlib/array/base/assert/is-same-kind-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an array data type can be safely cast to, or is of the same "kind" as, another array data type.</span>
-   <span class="signature">[`isSignedIntegerDataType( value )`][@stdlib/array/base/assert/is-signed-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array signed integer data type.</span>
-   <span class="signature">[`isUnsignedIntegerDataType( value )`][@stdlib/array/base/assert/is-unsigned-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array unsigned integer data type.</span>

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
var ns = require( '@stdlib/array/base/assert' );

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

[@stdlib/array/base/assert/contains]: https://github.com/stdlib-js/array/tree/main/base/assert/contains

[@stdlib/array/base/assert/has-same-values]: https://github.com/stdlib-js/array/tree/main/base/assert/has-same-values

[@stdlib/array/base/assert/is-accessor-array]: https://github.com/stdlib-js/array/tree/main/base/assert/is-accessor-array

[@stdlib/array/base/assert/is-boolean-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-boolean-data-type

[@stdlib/array/base/assert/is-booleanarray]: https://github.com/stdlib-js/array/tree/main/base/assert/is-booleanarray

[@stdlib/array/base/assert/is-complex-floating-point-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-complex-floating-point-data-type

[@stdlib/array/base/assert/is-complex-typed-array]: https://github.com/stdlib-js/array/tree/main/base/assert/is-complex-typed-array

[@stdlib/array/base/assert/is-complex128array]: https://github.com/stdlib-js/array/tree/main/base/assert/is-complex128array

[@stdlib/array/base/assert/is-complex64array]: https://github.com/stdlib-js/array/tree/main/base/assert/is-complex64array

[@stdlib/array/base/assert/is-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-data-type

[@stdlib/array/base/assert/is-floating-point-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-floating-point-data-type

[@stdlib/array/base/assert/is-integer-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-integer-data-type

[@stdlib/array/base/assert/is-mostly-safe-data-type-cast]: https://github.com/stdlib-js/array/tree/main/base/assert/is-mostly-safe-data-type-cast

[@stdlib/array/base/assert/is-numeric-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-numeric-data-type

[@stdlib/array/base/assert/is-real-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-real-data-type

[@stdlib/array/base/assert/is-real-floating-point-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-real-floating-point-data-type

[@stdlib/array/base/assert/is-safe-data-type-cast]: https://github.com/stdlib-js/array/tree/main/base/assert/is-safe-data-type-cast

[@stdlib/array/base/assert/is-same-kind-data-type-cast]: https://github.com/stdlib-js/array/tree/main/base/assert/is-same-kind-data-type-cast

[@stdlib/array/base/assert/is-signed-integer-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-signed-integer-data-type

[@stdlib/array/base/assert/is-unsigned-integer-data-type]: https://github.com/stdlib-js/array/tree/main/base/assert/is-unsigned-integer-data-type

<!-- </toc-links> -->

</section>

<!-- /.links -->
