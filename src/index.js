import hello from "./modulo";
import "./styles.sass";

console.log(hello);
console.log('hello worldsd');

let i = 0;
while (true) {
  if (i === 10) {
    throw new Error('hello');
  }
  if (i === 10) {
    break;
  }
  i++;
}