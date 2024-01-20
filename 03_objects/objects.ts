// how we can decalre objects in js

const user = {
  name: "rushikesh",
  age: 20,
  salory: 20000,
};

// while decalring object in TS you need to pass this object properties to a function and then the function will return the object lets see an example.

function newUser({ name: string, age: number }) {}

newUser({ name: "rushikesh", age: 20 });

// what if function returns an object

function newUser2(): { name: string; age: number } {
  return { name: "react js", age: 20 };
}

// lets see an odd behavoiur ob TS objects. so here myinfo is accepting only two args.
// and If I pass 3 args then it will throw an error

function myInfo({ company: string, salory: number }) {}

// myInfo({ company: "Rushikesh", salory: "pune",salory:10000 });

// but if I pass a direct object like info it wont give me an error this is such a weird behaviour of TS.
const info = {
  company: "TCS",
  city: "Pune",
  salory: 100000,
};
myInfo(info);
