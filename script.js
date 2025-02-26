//strcuturing cloning

const original = {
  name: "Donut",
  flavors: ["chocolate", "vanilla"],
  details: { price: 2.5, available: true },
};

const copy = structuredClone(original);

copy.details.price = 3.0;
console.log(original.details.price); // 2.5 (unchanged)

//using json.parse

const original = {
  name: "Donut",
  flavors: ["chocolate", "vanilla"],
};

const copy = JSON.parse(JSON.stringify(original));

copy.flavors.push("strawberry");
console.log(original.flavors); // ["chocolate", "vanilla"]

//lodash
import cloneDeep from "lodash/cloneDeep";

const original = {
  date: new Date(),
  map: new Map([["key", "value"]]),
};

const copy = cloneDeep(original);

console.log(copy.date === original.date); // false (new object)
