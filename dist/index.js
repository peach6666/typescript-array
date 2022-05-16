function calculate(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}:${price}`);
}
let prices = [100, 75, 42];
let names = ["Hat", "Umbrella", "Gloves"];
//陣列型別聯集
let numberOrString = [];
//tuple為長度固定的陣列，規定索引值對應型別
let tuple = [["Hat", 100], ["Gloves", 50]];
//tuple型別使用，規定索引值1必為字串、2必為數值，或必須為布林值
let tuple2 = [...tuple, true];
console.log(tuple2);
//forEach函式代入一陣列，第一參數為陣列值，第二參數為索引值，第三參數為整個陣列
prices.forEach((first, second, third) => {
    console.log(first, second, third);
});
prices.forEach((price, index) => {
    writePrice(names[index], calculate(price));
});
//enum(列舉)，列舉會創造一個物件，其值預設為索引值遞增，但可自定義
var Student;
(function (Student) {
    Student[Student["Peach"] = 0] = "Peach";
    Student[Student["Wade"] = 1] = "Wade";
    Student[Student["Paul"] = 2] = "Paul";
})(Student || (Student = {}));
console.log(Student);
//列舉也是一個型別
var Product;
(function (Product) {
    Product[Product["Shirt"] = 0] = "Shirt";
    Product[Product["Shoes"] = 10] = "Shoes";
    Product[Product["Pants"] = 11] = "Pants";
})(Product || (Product = {}));
console.log(Product);
let ProductValue = 10;
let Product1 = Product[ProductValue];
console.log(Product1);
//字串enum
var City;
(function (City) {
    City["London"] = "London";
    City["Paris"] = "Paris";
    City["NY"] = "New York";
})(City || (City = {}));
console.log(City);
let myCity = City.London;
console.log(myCity);
//字面值型別，自定義特定值成為獨特型別
let number = 1;
//字面值型別可以隨意進行型別聯集
let random;
//在函式中以字面值型別進行限制
function canBuy(number, value) {
    return number * value;
}
console.log(canBuy(2, 48.5));
let combo = true;
//# sourceMappingURL=index.js.map