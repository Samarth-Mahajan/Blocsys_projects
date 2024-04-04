function userLoggedIn(username) {
    if(username ===undefined){
        console.log("please enter a username")
        

    }
    return `${username} just loged in`;


}
console.log(userLoggedIn())

const array=[200,400,600,700]

function secondElement(getElement){
    return getElement[1];


}
console.log(secondElement(array))