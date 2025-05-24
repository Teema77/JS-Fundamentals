/*const message = ["C is fun", "Python is cool", "JavaScript is amazing"];
for(let i=0; i<message.length; i++) {
    console.log(message[i]);
}*/

const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];
let output = "";

for (let i = 0; i < messages.length; i++) {
  output += messages[i];
  if (i !== messages.length - 1) {
    output += "\n";
  }
}

console.log(output);
