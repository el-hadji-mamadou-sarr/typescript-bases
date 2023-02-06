"use strict";
const render = (document) => {
    console.log(document);
};
let arr = [1, 2, 3];
let tuple = [1, 'value'];
let mySize = 2;
console.log(mySize);
const renderString = (String, Screen) => {
    if (Screen) {
        return String + " screen " + Screen.toString();
    }
    else {
        return String;
    }
};
console.log(renderString("hello", 1));
let employee = {
    id: 0,
    name: 'el hadji mamadou',
    retire: (date) => { console.log(date); }
};
const screenPos = (position) => {
    if (typeof position === 'number') {
        return position * 0.2;
    }
    else {
        return parseInt(position) * 0.2;
    }
};
console.log(screenPos('2'));
let quantity = 50;
function getCustomer(id) {
    let cus = {
        id: 3,
        birthday: Date.now().toString()
    };
    return id === 0 ? null : cus;
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
