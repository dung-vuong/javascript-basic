/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book(
  "conan",
  2015,
  "black",
  1995
);
const book2 = new Book(
  "boss",
  2015,
  "black",
  1995
);
const book3 = new Book(
  "employee",
  2015,
  "black",
  1995
);
const book4 = new Book(
  "rich boi",
  2015,
  "black",
  1995
);
const book5 = new Book(
  "poor",
  2015,
  "black",
  1995
);

console.log("Book1:", book1);
console.log("Book2:", book2);
console.log("Book3:", book3);
console.log("Book4:", book4);
console.log("Book5:", book5);