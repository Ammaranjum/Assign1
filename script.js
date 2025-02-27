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

const smart = {
  name: "Donut",
  flavors: ["chocolate", "vanilla"],
};

const copy = JSON.parse(JSON.stringify(smart));

copy.flavors.push("strawberry");
console.log(smart.flavors); // ["chocolate", "vanilla"]

//lodash
import cloneDeep from "lodash/cloneDeep";

const original2 = {
  date: new Date(),
  map: new Map([["key", "value"]]),
};

const copy = cloneDeep(original2);

console.log(copy.date === original2.date); // false (new object)
