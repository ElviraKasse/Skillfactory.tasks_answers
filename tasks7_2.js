function checking(obj, objKeyName) {
    return (objKeyName in obj);  //возвращаем резултат функции
}

const animal1 = {
    name: "dog",
    breed: "Husky",
    age: 2,
};

console.log(checking(animal1, "same"));  // false
console.log(checking(animal1, "name"));  // true