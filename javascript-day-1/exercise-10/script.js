const laptop = {
    brand : "Google",
    specifications : {
        ram : 16,
        company :"Intel"
    },
    feature : ["1",2,"3a"],
    model : "10a",
    price : 51000,
    color : "Black",
    storage : 256
}
console.log(laptop);
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.price);
console.log(laptop.color);
console.log(laptop.storage);
console.log(`${laptop.brand} costs ${laptop.price} and comes in ${laptop.color} color.`);
console.log(laptop.specifications);
console.log(laptop.specifications.ram);
console.log(laptop.specifications.company);