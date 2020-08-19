function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { first1Name: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
