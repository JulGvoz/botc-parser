const fs = require('fs');
const parse_json = require('./parser').parse_json

const source_file = process.argv[2] ? process.argv[2] : "roles.json"
const target_file = process.argv[3] ? process.argv[3] : "README.md"

fs.readFile(source_file, "utf8", (err, file_text) => {
  if (err) {
    console.error(err)
  } else {
    const raw_data = JSON.parse(file_text)

    fs.writeFile(target_file, parse_json(raw_data), err => {
      if (err) {
        console.log(err)
      }
    })
  }
})