

const zip = (a, b) =>
  Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);

// replace Zenith => [Zenith](#Zenith)
const linkify = (str, roles) => {
  return roles.reduce((acc, role, index, arr) => {
    return acc.replace(new RegExp(`${role.name}`, "g"), `[${role.name}](#${role.name.toLowerCase().replace(' ', '-')})`)
  }, str)
}

const generate_intro = (meta) => {
  // link for loading the json file through bra1n tool
  const load_link = meta.load_link

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

  return intro
}

const image_link = (meta, role) => {
  if (!meta || !meta.github) {
    return role.image
  } else {
    const github_base = `https://raw.githubusercontent.com/${meta.github.replace("https://github.com/", "")}`

    return `${github_base}/master/original-icons/${role.id}.png`
  }
}

const parse_json = (json) => {
  // broad information
  const meta = json.filter(c => c.id === "_meta")[0]
  // exclude hidden roles and meta
  const roles = json.filter(c => c.id !== "_meta" && !c.hidden)

  // usually ["good", "evil"], but for me - ["peacebroker", "vile", "fatebound"]
  const team_names = [...new Set(roles.map(role => role.team))]

  const teams = team_names.map(team_name => {
    return {
      name: team_name,
      roles: roles.filter(role => role.team === team_name)
    }
  })

  const format_role = (role) => {
    return [
      `## ${role.name}`,
      "",
      // *sigh* - apparently I don't how to replace * -> \* ...
      `"${role.ability.replace("*", String.fromCharCode(92) + "*")}"`,
      "",
      `<img src="${image_link(meta, role)}" alt="${role.name} icon" width="100">`,
      "",
      ...(Array(role.blurb)),
      "",
      ...(role.explanations ? role.explanations.map(str => ` - ${str}`) : ""),
      "",
      // if examples then list out: [example1, "", example2, "", ...]
      ...(role.examples ? ["### Examples",
        ...(role.examples.flatMap(str => {
          return [linkify(str, roles), ""]
        }))] : "")
    ]
  }

  const capitalize = (str) => str.slice(0, 1).toUpperCase() + str.slice(1)

  const format_team = (team) => {
    return [
      `# ${capitalize(team.name)}`,
      // If a team has a description in meta.teams, write it out here
      ...(Array(meta && meta.teams ? meta.teams[team.name] : "")),
      ...(team.roles.flatMap(format_role))
    ]
  }

  console.log(team_names)

  const teams_formatted = teams.flatMap(format_team)

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
        return `|${first ? linkify(first.name, roles) : ""}|${other ? linkify(other.name, roles) : ""}|`
      })

  const night_order = [
    "### Night order",
    "|First night|Other nights|",
    "|-|-|",
    ...nights_str
  ]

  const rules = meta ? [
    "## Homebrew rules",
    "",
    ...(meta.homebrewRules ? meta.homebrewRules : []),
    ""
  ] : []



  const final_output = [...(meta ? generate_intro(meta) : []), ...rules, ...night_order, ...teams_formatted].join("\n")

  // console.log(final_output)
  return final_output;
}

exports.parse_json = parse_json