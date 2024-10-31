const fs = require('node:fs');
const needle = require('needle');
let url = process.argv[2];
let path = process.argv[3];

needle.get(`${url}`, (error, response, body) => {
  if (error) console.log('error:', error); // Print the error if one occurred

  fs.writeFile(path, body, (err) => {
    if (err) {
      console.error('Error creating the file:', err);
    } else {
      try {
        const stats = fs.statSync(`${path}`);
        console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
      } catch (err) {
        console.error(err);
      }
    }
  });
});
