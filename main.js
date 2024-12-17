import { sleep } from "./sleep.js";
import { getRandomNumber } from "./random.js";
import { Person } from "./person.js";

const person = new Person("Latifova Aziza", 2007);

const delay = getRandomNumber();
console.log(`Waiting for: ${delay} milliseconds`);

sleep(delay).then(() => {
  console.log(person.getInfo());
});
