declare function calculate(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare let prices: number[];
declare let names: string[];
declare let numberOrString: (string | number)[];
declare let tuple: [string, number][];
declare let tuple2: ([string, number] | boolean)[];
declare enum Student {
    Peach = 0,
    Wade = 1,
    Paul = 2
}
declare enum Product {
    Shirt = 0,
    Shoes = 10,
    Pants = 11
}
declare let ProductValue: Product;
declare let Product1: string;
declare enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York"
}
declare let myCity: City;
declare let number: 1 | 2 | 3;
declare let random: 2 | true | string | "Hello" | null;
declare function canBuy(number: 1 | 2 | 3, value: number): number;
declare type comboType = 1 | 2 | boolean | "Hello";
declare let combo: comboType;
