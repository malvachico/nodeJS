const fs = require('fs');

fs.readFile(`${__dirname}/txt/start.txt`, 'utf-8', (err, data1) => {
  if (err) {
    console.log('ERROR1!');
  }
  fs.readFile(`${__dirname}/txt/${data1}.txt`, 'utf-8', (err, data2) => {
    if (err) {
      console.log('ERROR2!');
    }
    fs.readFile(`${__dirname}/txt/input.txt`, 'utf-8', (err, data3) => {
      if (err) {
        console.log('ERROR3!');
      }
      fs.writeFile(
        `${__dirname}/txt/append.txt`,
        `${data2}\n${data3}`,
        'utf-8',
        err => {
          if (err) {
            console.log('WriteFile Error');
          }
          console.log('append.txt File is Writed!');
        }
      );
    });
  });
});
