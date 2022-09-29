var person = {
  firstName: 'Andrew',
  lastName: 'Hoang',
  hobby: 'Cars'
};
console.log(person);

var fullName = (person.firstName + ' ' + person.lastName);
console.log("The person's name is " + fullName);

person.Job = 'Mechanic';
console.log("The peron's current job is " + person.Job);

person.previousJob = 'Server';
console.log("The person's previous job is " + person.previousJob);

console.log(person);
