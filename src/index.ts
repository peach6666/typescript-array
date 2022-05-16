function calculate(amount:number):number{
    return amount * 1.2
}

function writePrice(product:string,price:number):void{
    console.log(`Price for ${product}:${price}`)
}

let prices:number[]=[100,75,42]
let names:string[]=["Hat","Umbrella","Gloves"]
//陣列型別聯集
let numberOrString:(string|number)[]=[]
//tuple為長度固定的陣列，規定索引值對應型別
let tuple:[string,number][]=[["Hat",100],["Gloves",50]]
//tuple型別使用，規定索引值1必為字串、2必為數值，或必須為布林值
let tuple2:([string,number]|boolean)[]=[...tuple,true]
console.log(tuple2)

//forEach函式代入一陣列，第一參數為陣列值，第二參數為索引值，第三參數為整個陣列
prices.forEach((first,second,third)=>{
    console.log(first,second,third)
})
prices.forEach((price:number,index:number)=>{
    writePrice(names[index],calculate(price))
})

//enum(列舉)，列舉會創造一個物件，其值預設為索引值遞增，但可自定義
enum Student{Peach,Wade,Paul}
console.log(Student)
//列舉也是一個型別
enum Product{Shirt,Shoes=10,Pants}
console.log(Product)
let ProductValue:Product=10
let Product1=Product[ProductValue]
console.log(Product1)
//字串enum
enum City{London="London",Paris="Paris",NY="New York"}
console.log(City)
let myCity:City=City.London
console.log(myCity)

//字面值型別，自定義特定值成為獨特型別
let number:1|2|3=1
//字面值型別可以隨意進行型別聯集
let random:2|true|string|"Hello"|null
//在函式中以字面值型別進行限制
function canBuy(number:1|2|3,value:number){
    return number * value
}
console.log(canBuy(2,48.5))

//型別別名，使用type定義重複使用的型別註記為變數
type comboType=1|2|boolean|"Hello"
let combo:comboType=true