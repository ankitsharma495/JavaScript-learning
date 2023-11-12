// singleton
// Object.create

// object literals

const mySym = Symbol("key1")  //first declare the symbol then use it as a key in object.


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])       way to access datatype SYMBOL.we cannot access it using dot opertaor if we use dot opertaor it will be in string.

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//this keyword is use to access the particular object (JsUser)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());