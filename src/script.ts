//type any
const render =(document:any)=>{
    console.log(document)
}

//type array
let arr:number[] = [1,2,3]

//type tuple
let tuple:[number, string]= [1,'value'];

//enums
const enum Size {Small=1,Medium,Large}
let mySize: Size = Size.Medium;
console.log(mySize);

//functions
const renderString = (String: string, Screen ?: number) : string=>{

    if(Screen){
        return String + " screen " + Screen.toString();
    }else{
        return String;
    }

}
console.log(renderString("hello",1));

//type aliases
type Employee = {
    readonly id:number,
    name: string,
    retire: (date:Date)=>void
}

let employee: Employee = {
    id:0,
    name:'el hadji mamadou',
    retire:(date:Date)=>{console.log(date)}
}

//union type
const screenPos = (position: number|string):number=>{
    if(typeof position === 'number'){
        return position*0.2;
    }else{
        return parseInt(position)*0.2;
    }
}

console.log(screenPos('2'))

//type intersection

//type literal
let quantity: 50|100 = 50;


//chaining or optionnal operator
type Customer ={
    id:number,
    birthday:string
}
function getCustomer (id:number):Customer |null |undefined
{
    let cus:Customer={
        id:3,
        birthday:Date.now().toString()
    }
    return id === 0 ? null : cus;
}

let customer = getCustomer(1);

console.log(customer?.birthday);
