function greeter(person) {
    return "Hello, " + person.firstName + person.lastname;
}
var user = {
    firstName: "Mary",
    lastname: "Jane"
};
document.body.textContent = greeter(user);
