/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const waterBottle = {
    name: "StarBucks Bottle",
    length: 30,
    color: "brown",
    pingpong:{
        radius: 3,
        depth: 30
    }
}

console.log("my gf water bottle", waterBottle)