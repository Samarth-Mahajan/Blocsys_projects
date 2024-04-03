let myName="Samarth";
let nickName=myName;
nickName="Samya";
console.log(myName);
console.log(nickName);

let userOne={
    email:"samarth1929@gmail.com",
    username:"samarth1929"
}

let userTwo=userOne
userTwo.email="atharva1929@gmail.com"  //refrence is changed
console.log(userTwo.email)
console.log(userOne.email)

let name="         samarth    "
console.log(name.trim())
console.log(name)