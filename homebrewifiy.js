const fs = require('fs')

const source_file = process.argv[2] ? process.argv[2] : "custom-script.json"
const target_file = process.argv[3] ? process.argv[3] : "custom-script-homebrewified.json"

const remove_underscore = (str) => {
  return str.replace(/_/g, "");
}

if (process.argv[2] === "-h" || process.argv[2] === "--help") {
  console.log(`
    Usage:
      node homebrewifiy.js [source_file] [target_file]
      source_file defaults to custom-script.json
      target_file defaults to custom-script-homebrewified.json
  `)
  return;
}

fs.readFile('roles.json', 'utf8', (err, raw) => {
  if (err) {
    console.error(err)
  } else {
    const roles_imageless = JSON.parse(raw)

    const roles = roles_imageless.map(role => {
      return {
        ...role,
        image: `https://github.com/bra1n/townsquare/blob/main/src/assets/icons/${role.id}.png?raw=true`
      }
    })

    // console.log(roles)

    fs.readFile(source_file, 'utf8', (err, raw) => {
      if (err) {
        console.error(err)
      } else {
        const data = JSON.parse(raw)

        const mapped = data.map(role => {
          return roles.filter(r => remove_underscore(r.id) === remove_underscore(role.id))[0]
        })

        const id_shifted = mapped.map(role => {
          return {
            ...role,
            id: `${role.id}-homebrew`
          }
        })

        console.log(JSON.stringify(id_shifted))

        fs.writeFile(target_file, JSON.stringify(id_shifted), (err) => {
          if (err) console.error(err)
        })

      }
    })
  }
})