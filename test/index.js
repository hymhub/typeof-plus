import { typeis } from "../dist/index.js";
const type1 = typeis(null);
const type2 = typeis([1, 2, 3]);
const type3 = typeis({ name: "test" });
const type4 = typeis(/abc/g);
const type5 = typeis(new Date());
const type6 = typeis(123n);
const type7 = typeis(123);
const type8 = typeis(undefined);
const type9 = typeis("hello");
const type10 = typeis(true);
const type11 = typeis(Symbol("test"));
const type12 = typeis(() => {});

console.log(type1);
console.log(type2);
console.log(type3);
console.log(type4);
console.log(type5);
console.log(type6);
console.log(type7);
console.log(type8);
console.log(type9);
console.log(type10);
console.log(type11);
console.log(type12);