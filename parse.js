const fs = require('fs');
const parse_json = require('./parser').parse_json

const source_file = process.argv[2] ? process.argv[2] : "custom-script.json"
const target_file = process.argv[3] ? process.argv[3] : "README.md"

const roles_imageless = JSON.parse(fs.readFileSync('roles.json'))

const roles = roles_imageless.map(role => {
  return {
    ...role,
    image: `https://github.com/bra1n/townsquare/blob/main/src/assets/icons/${role.id}.png?raw=true`
  }
})

const remove_underscore = (str) => {
  return str.replace(/_/g, "");
}

fs.readFile(source_file, "utf8", (err, file_text) => {
  if (err) {
    console.error(err)
  } else {
    const raw_data = JSON.parse(file_text)

    const mapped = raw_data.map(role => {
      return roles.filter(r => remove_underscore(r.id) === remove_underscore(role.id))[0]
    })

    fs.writeFile(target_file, parse_json(mapped), err => {
      if (err) {
        console.log(err)
      }
    })
  }
})