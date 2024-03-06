// Stack(Primitive) and Heap(Non-Primitive)

let myEmail="user@google.com"
let myNewEmail=myEmail

myNewEmail="varun@google.com"

console.log(myEmail)
console.log(myNewEmail)

let user={
    Email:"user@google.com",
    name:"user1"
}

let user1=user

user1.Email="varun@google.com"

console.log(user.Email)
console.log(user1.Email)