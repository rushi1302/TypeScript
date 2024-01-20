// in typescript while defing a function when you take parameters you must
// provide a datatype
// in case of variable it was an optional but in function you must provide a data type.

function greet(name: string) {
  return "hello " + name;
}

console.log(greet("rushi"));

function logInUser(name: string, email: string, age: number) {
  return true;
}

logInUser("Rushikesh", "r@gmail.com", 25);

// if function expect 3 args and you only pass 2 then ts will throw an error

// lets see an arrow function

let rushAge: number;

let myAge = (age: number): number => {
  return age;
  //   return "hello world";
};

rushAge = myAge(20);

// proper way to write a function syntax is you need to  mention a function return datatype

function myName(name: string): string {
  return name;
}

// for arrow function

const myCity = (city: string): string => {
  return city;
};

myName("rushikesh");

// NEVER - some function return never type - yes is one return type of function it is close to void but not void lets see an exaple
// it is a good practise to in some cases instead of return a void you can return a never
function consoleError(err: string): never {
  throw new Error(err);
}

consoleError("please read again");

export {};
