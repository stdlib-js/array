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
var ns = require( '@stdlib/array/base/assert' );
var dtype = require( '@stdlib/array/dtype' );
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Complex128Array = require( '@stdlib/array/complex128' );

// Create various arrays:
var arr1 = new Float64Array( [ 1.1, 2.2, 3.3 ] );
var arr2 = new Int32Array( [ 1, 2, 3 ] );
var arr3 = new Uint8Array( [ 1, 2, 3 ] );
var arr4 = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0 ] ); // two complex numbers: 1+1i, 2+2i

// Get data types:
var dt1 = dtype( arr1 );
var dt2 = dtype( arr2 );
var dt3 = dtype( arr3 );
var dt4 = dtype( arr4 );

// Check data types:
console.log( dt1 + ' is floating-point data type: ' + ns.isFloatingPointDataType( dt1 ) );
// => 'float64 is floating-point data type: true'

console.log( dt2 + ' is integer data type: ' + ns.isIntegerDataType( dt2 ) );
// => 'int32 is integer data type: true'

console.log( dt3 + ' is unsigned integer data type: ' + ns.isUnsignedIntegerDataType( dt3 ) );
// => 'uint8 is unsigned integer data type: true'

console.log( dt4 + ' is complex floating-point data type: ' + ns.isComplexFloatingPointDataType( dt4 ) );
// => 'complex128 is complex floating-point data type: true'

// Check if arrays have the same values:
console.log( 'arr2 and arr3 have same values: ' + ns.hasSameValues( arr2, arr3 ) );
// => 'arr2 and arr3 have same values: true'

console.log( 'arr1 and arr2 have same values: ' + ns.hasSameValues( arr1, arr2 ) );
// => 'arr1 and arr2 have same values: false'

// Check safe data type casts:
console.log( 'Can safely cast from ' + dt2 + ' to ' + dt1 + ': ' + ns.isSafeDataTypeCast( dt2, dt1 ) );
// => 'Can safely cast from int32 to float64: true'

console.log( 'Can safely cast from ' + dt1 + ' to ' + dt2 + ': ' + ns.isSafeDataTypeCast( dt1, dt2 ) );
// => 'Can safely cast from float64 to int32: false'

console.log( 'Can safely cast from ' + dt3 + ' to ' + dt2 + ': ' + ns.isSafeDataTypeCast( dt3, dt2 ) );
// => 'Can safely cast from uint8 to int32: true'

console.log( 'Can safely cast from ' + dt4 + ' to ' + dt1 + ': ' + ns.isSafeDataTypeCast( dt4, dt1 ) );
// => 'Can safely cast from complex128 to float64: false'

// Check if arrays contain specific values:
console.log( 'arr1 contains 2.2: ' + ns.contains( arr1, 2.2 ) );
// => 'arr1 contains 2.2: true'

console.log( 'arr2 contains 2: ' + ns.contains( arr2, 2 ) );
// => 'arr2 contains 2: true'

console.log( 'arr2 contains 2.2: ' + ns.contains( arr2, 2.2 ) );
// => 'arr2 contains 2.2: false'

// Check complex array types:
console.log( 'arr4 is Complex128Array: ' + ns.isComplex128Array( arr4 ) );
// => 'arr4 is Complex128Array: true'

console.log( 'arr4 is complex typed array: ' + ns.isComplexTypedArray( arr4 ) );
// => 'arr4 is complex typed array: true'
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
