
let mySym=Symbol("Key1");
let user1={
    email: "user1@example.com",
    [mySym]:"myKey",
    phoneNumber: "12344556",
    address: "Pune",
    emp_id: 54
}
console.log(user1.email);
console.log (typeof user1[mySym]);
console.log(typeof user1);

user1.greetings=function(){
    console.log(`Hello! ${this.email}`);

};
console.log(user1.greetings());