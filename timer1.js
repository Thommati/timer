const timerArgs = process.argv.splice(2);

const timer = time => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
};

for (const t of timerArgs) {
  const time = +t;
  if (isNaN(time) || time < 0) {
    continue;
  }
  timer(t);
}
