//Assert Equals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` \u2764\uFE0F Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` \u2620 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// countOnly
const countOnly = function(allItems, itemsToCount) {
  const results = {}

for (const item of allItems) {
  if (itemsToCount[item]) {
    if (results[item])  {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
}
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true });

//Tests
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2)

