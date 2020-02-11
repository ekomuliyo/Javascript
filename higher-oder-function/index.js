// filter, reduce, map

const array = [-1, -2 , 0, 1, 4, 6, 10]

console.log(array);

// filter
const newArrayFilter = array.filter(a => a > 3)
console.log(newArrayFilter);

// map
const newArrayMap = array.map(a => a * 2)
console.log(newArrayMap);

// reduce
const newArrayReduce = array.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0);

console.log(newArrayReduce);


// Method chaining
const result = array.filter(a => a > 5)
                    .map(a => a * 3)
                    .reduce((acc, cur) => acc + cur)
console.log(result);
