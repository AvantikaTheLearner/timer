const args = process.argv.slice(2);
args.sort((a, b) => a - b);
console.log(args);


for (let elem of args) {
  if (elem > 0) {
    elem *= 1000;
    setTimeout(() => {
      process.stdout.write(".");
    }, elem);
  }
  
}
if (args.length > 2) {
  setTimeout(() => {
    console.log(); //move the cursor to new line
  }, args[args.length - 1] * 1000);
}