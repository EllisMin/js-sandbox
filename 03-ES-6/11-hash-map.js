// Maps; may be choice for hashmap than using object when manipulating data

const map = new Map();

// Setting key, val pair
map.set(1, "first str");
map.set(2, "second str");
map.set(3, "some num");

map.set(true, "correct");
map.set(false, "wrong");
map.set("ans", 10);
console.log(map);

// Access
console.log(map.get(1));

// Remove with key
if (map.has(2)) {
  map.delete(2);
}

// Traverse: Note the order, should be val, key
map.forEach((val, key) => {
  console.log(`key: ${key} and val: ${val}`);
});

// Destructuring map: Note that the order here is key, val
for (let [key, val] of map.entries()) {
  if (typeof key === "number") {
    console.log(`key: ${key} and val: ${val}`);
  }
}

const ans = parseInt(prompt("What is correct number?: "));
console.log(map.get(ans === map.get("ans")));

// Clearing map; delete all entries
map.clear();
