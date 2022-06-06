# typeof-plus - a small tool to judge the data type of variables

# Install
```shell
npm install typeof-plus
```

# Usage
```js
import { typeis } from "typeof-plus";
typeis(null); // null
typeis([1, 2, 3]); // array
typeis({ name: "test" }); // object
typeis(/abc/g); // regexp
typeis(new Date()); // date
typeis(123n); // bigint
typeis(123); // number
typeis(undefined); // undefined
typeis("hello"); // string
typeis(true); // boolean
typeis(Symbol("test")); // symbol
typeis(() => {}); // function
```