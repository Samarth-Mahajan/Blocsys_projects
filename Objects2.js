const obj1={1:"a", 2:"b", 3:"c"};
const obj2={4:"d", 5:"e", 6:"f"};
const obj3={...obj1, ...obj2}
//console.log(obj3);
let user={};
let tinder=[
    {
        id:1,
        email:"sama@example.com",

    },

    {
        id:2,
        email:"elo@example.com",

    }




]

console.log(Object.keys(user));
//console.log(Object.values(tinder));
//console.log(tinder);

//Destructuring objects

const course={
    email:"elo@example.com",
    id:1,
    courseInstructor:"Samarth"
}

const {courseInstructor,id}=course
console.log(courseInstructor,id)