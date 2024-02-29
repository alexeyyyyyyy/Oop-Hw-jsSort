const  persons = [new Person("Marry", "Smith", 28),
    new Person("John","Smith", 35),
    new Person("Tigran", "Petrosyan", 41),
    new Person("Peter", "Jackson", 18)];

printArray(persons);
sort(persons); //TODO sort by age;
printArray(persons);



function sort(person) {

}

function printArray(arr){
    console.log("===================");
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log("==================");
}
function  Person(firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function (dear) {
        return `${dear} ${this.firstName} ${lastName}`;
    }
}