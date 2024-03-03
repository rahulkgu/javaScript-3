function Property(obj, property) {
    return obj.hasOwnProperty(property);
}

const Obj = {
    name: "Alice",
    age: 25
};
console.log(Property(Obj, "age"));
console.log(Property(Obj, "email"));