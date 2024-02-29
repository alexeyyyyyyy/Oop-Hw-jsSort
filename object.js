const  persons = [new Person("Marry", "Smith", 28),
    new Person("John","Smith", 35),
    new Person("Tigran", "Petrosyan", 41),
    new Person("Peter", "Jackson", 18)];

printArray(persons);
sort(persons,(n2,n1) => n2.age-n1.age ); //TODO sort by age;
printArray(persons);
sort(persons,(n3,n4) =>n4.fullName().length-n3.fullName().length);
printArray(persons);

function sort(persons,comparator) {
    for( let i = 0; i<persons.length - 1; i++) {
        for( let j = 0; j<persons.length - 1 - i; j++) {
            if(comparator(persons[j+1] , persons[j] ) >0) {
                let temp = persons[j];
                persons[j] = persons[j+1];
                persons[j+1] = temp;
            }
        }
    }
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
        return ` ${this.firstName} ${lastName}`;
    }
}