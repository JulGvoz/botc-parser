const fs = require('fs');

const zip = (a, b) =>
  Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);

const source_file = process.argv[2] ? process.argv[2] : "roles.json"
const target_file = process.argv[3] ? process.argv[3] : "README.md"

fs.readFile(source_file, "utf8", (err, file_text) => {
  if (err) {
    console.error(err)
  } else {
    const raw_data = JSON.parse(file_text)

    // broad information
    const meta = raw_data.filter(c => c.id === "_meta")[0]
    // exclude hidden roles and meta
    const roles = raw_data.filter(c => c.id !== "_meta" && !c.hidden)

    // usually ["good", "evil"], but for me - ["peacebroker", "vile", "fatebound"]
    const team_names = [...new Set(roles.map(role => role.team))]

    const teams = team_names.map(team_name => {
      return {
        team_name: team_name,
        roles: roles.filter(role => role.team === team_name)
      }
    })

    // many files will simply use the github base anyway
    const github_base = `https://raw.githubusercontent.com/${meta.github.replace("https://github.com/", "")}`

    // link for loading the json file through bra1n tool
    const load_link = `${github_base}/${source_file}`

    const format_role = (role) => {
      return [
        `## ${role.name}`,
        "",
        // *sigh* - apparently I don't how to replace * -> \* ...
        `"${role.ability.replace("*", String.fromCharCode(92) + "*")}"`,
        "",
        `<img src="${github_base}/master/original-icons/zenith.png" alt="${role.name} icon" width="100">`,
        "",
        `${role.blurb}`,
        "",
        ...(role.explanations.map(str => ` - ${str}`)),
        "",
        "### Examples",
        ...(role.examples.flatMap(str => {
          return [str, ""]
        }))
      ]
    }
    console.log(format_role(roles[0]))

    // roles that act on the first night, ordered
    const first_night =
      roles
        .filter(role => role.firstNight > 0)
        .sort((a, b) => {
          return a.firstNight - b.firstNight
        })

    // roles that act on the second night, ordered
    const other_night =
      roles
        .filter(role => role.otherNight > 0)
        .sort((a, b) => {
          return a.otherNight - b.otherNight
        })

    const nights_table = zip(first_night, other_night)
    // Night orders formatted for Markdown: ["|a|b|", "|c|d|", ...]
    const nights_str =
      nights_table
        .map(([first, other]) => {
          return `|${first ? first.name : ""}|${other ? other.name : ""}|`
        })

    /*
    We have to make sure not to list out helpers 
    if there is no meta.helpers
    if there is only 1 helper, we musn't add "and"
    otherwise, simply join together with ", " and join the last one using "and"
    */
    const helpers_formated =
      !meta.helpers || meta.helpers.length == 0 ? "" :
        meta.helpers.length == 1 ? meta.helpers[0] :
          `${meta.helpers.slice(0, meta.helpers.length - 1).join(", ")} and ${meta.helpers[meta.helpers.length - 1]}`

    const intro = [
      `# ${meta.name}`,
      "",
      "To play on [clocktower.online](https://clocktower.online) simply press `E`, choose **Custom Script / Characters**, click **Enter URL** and paste this:",
      "",
      "```",
      load_link,
      "```",
      "",
      "or open this [link](https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/twisted-fates.json) and press `Ctrl + S`.",
      "",
      `<img src="${meta.logo}" alt="${meta.name} logo" width="512">`,
      "",
      "This is *fan-made content*. [Blood on the Clocktower](https://bloodontheclocktower.com) is owned by Steven Medway and [The Pandemonium Institute](https://www.thepandemoniuminstitute.com). ",
      "",
      `Designed and curated by ${meta.author}${meta.helpers && meta.helpers.length > 0 ? ", with help from " + helpers_formated : ""}.`,
      "",
      ...(meta.iconCredit && meta.iconCredit.length > 0 ? ["Icon credit:",
        ...(meta.iconCredit.map(source => ` - ${source}`)),
        ""] : [])
    ]

    const rules = [
      "## Homebrew rules",
      "",
      ...(meta.homebrewRules ? meta.homebrewRules : []),
      "",
      "### Night order",
      "|First night|Other nights|",
      "|-|-|",
      ...nights_str,

    ]

    const final_output = [...intro, ...rules, ...format_role(roles[0])].join("\n")

    // console.log(final_output)
    fs.writeFile(target_file, final_output, err => {
      if (err) {
        console.log(err)
      }
    })
  }
})