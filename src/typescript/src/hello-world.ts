interface IPerson {
  firstName: string;
  lastname: string;
}

function greeter(person: IPerson): string {
  return "Hello, " + person.firstName + person.lastname;
}

let user = {
  firstName: "Mary",
  lastname: "Jane",
};

document.body.textContent = greeter(user);
