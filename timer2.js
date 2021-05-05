const timer = time => {
  time = +time;
  if (isNaN(time) || time < 0) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
};

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else {
    const numKey = +key;
    if (isNaN(numKey) || numKey < 1 || numKey > 9) {
      return;
    }
    timer(numKey * 1000);
  }
});
