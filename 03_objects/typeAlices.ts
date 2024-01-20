// suppose we have a 20 properties in our object so if I pass this obj to function it becomes a quite lengthy and unreadble.

// so a proper way to pass a object to function is define the type lets see an eg.

// type User = {
//   name: string;
//   age: number;
//   city: string;
//   isMarried: boolean;
// };

// function createUser(user: User):User {
//     return { name: "Rushikesh", age: 25, city: "Pune", isMarried: false };
// }

// createUser({ name: "Rushikesh", age: 25, city: "Pune", isMarried: false });

// function createUser(user: User): User {
//   return { name: "Rushikesh", age: 25, city: "Pune", isMarried: false };
// }

// so basically this is a proper way to define an object in TS.

////////////////////////////////////////////////////////

// lets learn "readonly" , "?", "&" keywords

// suppose we have a scenario where we dont want to update the property of user at that time we can use readonly keyword.

// after creditCard property we have used "?" symbol. what does it mean
// it means thi credir card property is an optional.

type User = {
  readonly _id: string;
  name: string;
  age: number;
  creditCared?: boolean;
};

// lets assign this user type to a variable.

let myUser: User = {
  _id: "1234",
  name: "Rushikesh",
  age: 20,
};
// here if I try to modify the _id property TS wont allow it.
// myUser._id = 20

// here i didnt provide credit card bcz it is optinal.

// If i want to combine the type we can use & symbol like we used to create cardDetails.
// imagine a big properties scenario here.

type cardNumber = {
  cardnumber: number;
};

type cardCvv = {
  cardcvv: number;
};

type cardDetails = cardNumber & cardCvv;

let card: cardDetails = {
  cardnumber: 12345,
  cardcvv: 5050,
};
