let user = "rushikesh";

const obj = {
  name: "Rushikesh",
  age: 20,
};

console.log("Hello Rushikesh");
console.log(obj.name);

// lets go through syntax

// string

const city: string = "pune"; // after declaring the variable you explicitely define the type of variable.

// number

const num: number = 20;

// boolean

const isLoggedIn: boolean = true;

// but but actually this is not a good practise to decalere the varibale
// you dont need to write data type everytime
// typescript is smart it will auto detect the data type
// then whats the point to use of typescript the exact same thing we were doing in JS
// but there is certain occasion where we have to explicitely define a data type
// we will see this later in tutorial

const score = 100;
// to decalre the varible like this is ok and this is a actual syntax of it.
// as we discussed ts is smart when you try to access method it will only
// suggest number method not string
// score.toFixed() uncomment this and try.

// any - any is a data type but actully is is not a data type
// you just simply saying to typescript do not check datatype for this
// you have to avoide the use of any - unless and untill it requires
// in your tsconfig you can say noImplicitAny it means you cannot use any datatype anymore😁.

let salory: any;

function getSalory() {
  return true;
}
salory = getSalory();
export {}; //
