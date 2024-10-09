function createPerson(firstName, lastName, pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl: pl,
    fullName: function () {
      console.log(
        `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
      );
    },
  };
}

const john = createPerson("John", "Doe", "Python");
const huxn = createPerson("HuXn", "WebDev", "Golang");
const jordan = createPerson("jordan", "peterson", "JavaScript");
console.log(john);
console.log(huxn);
console.log(jordan);

console.log(john.fullName());