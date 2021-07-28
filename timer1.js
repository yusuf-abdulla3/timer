const args = process.argv.slice(2);
console.log(args);
for (let i = 0; i < args.length; i++) {
  let val = Number(args[i]);
  if (val >= 0) {
    setTimeout(() => process.stdout.write('\x07'), val * 1000);
  }
}
  