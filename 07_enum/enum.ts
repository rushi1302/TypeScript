// enum is special data type where you have some choices and you can only select those values for eg. when you hover on male it will say the default number for male is = 0 and it will increment for others +1

enum Human {
  male,
  female,
  other,
}

const men = Human.male;

// here I can provide my own order  which is start from 10 and by default it will increase +1 for others.
// enum ticket {
//   left = 10,
//   middle,
//   right,
// }

// const myTicket = ticket[10];

// if you compile above code in js it will produce immense amount of js code. which ideally not good. so the solution is use const before declaring ani enum value.

const enum ticket {
  left = 10,
  middle,
  right,
}

const myTicket = ticket.left;

// now after compile it will only produce only one line of code.
