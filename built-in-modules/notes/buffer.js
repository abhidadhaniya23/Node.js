// const buff= Buffer('Hey')

const buff= Buffer.alloc(4)     // allocate size of buffer
buff.write("Hey!")


console.log(buff.toString());

console.log(buff);
console.log(buff[0]);
console.log(buff[1]);
console.log(buff[2]);

buff[1]=111
console.log(buff.toString());