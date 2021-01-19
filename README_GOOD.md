# Twisted Fates

To play on [clocktower.online](https://clocktower.online) simply press `E`, choose **Custom Script / Characters**, click **Enter URL** and paste this:

```
https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/twisted-fates.json
```

or open this [link](https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/twisted-fates.json) and press `Ctrl + S`.

<img src="https://i.ibb.co/w7xMHc5/script-icon.png" alt="twisted-fates" width="512">

This is *fan-made content*. [Blood on the Clocktower](https://bloodontheclocktower.com) is owned by Steven Medway and [The Pandemonium Institute](https://www.thepandemoniuminstitute.com). 

Designed and curated by Zobody, with help from emptyset#9999.

Icon credit:
 - <https://game-icons.net>

## Homebrew Rules

There are 3 alignments/teams: good, evil and fated, and 3 character types:
- [Peacebrokers](#Peacebroker) start good.
- [Vile](#Vile) start evil.
- [Fatebound](#Fatebound) start fated.

Good team wins when all evils die. 

Evil team wins when all fated die. 

Fated team wins when all good die.

Team that wins | Team that died out
-|-
Good|Evil
Evil|Fated
Fated|Good

Game immediately ends when all players in any of the teams are dead.

### Setup
Players | Peacebroker | Fatebound | Vile
-|-|-|-
5|2|2|1
6|2|2|2
7|3|2|2
8|3|3|2
9|3|3|3
10|4|3|3
11|4|4<sup>\[\*\]</sup>|4<sup>\[\*\]</sup>

<sup>\[\*\]</sup>
Because [Sleepwalker](#Sleepwalker) must be in the game, put in all character tokens except the Sleepwalker in the bag, and then assign the "Sleepwalker" reminder token to a Vile or a Fatebound player.

### Night order
|First night | Other nights|
|-|-|
|[Weaver](#Weaver)|[Zenith](#Zenith)|
|[Seeker](#Seeker)|[Wanton](#Wanton)|
|[Neolith](#Neolith)|[Neolith](#Neolith)|
| |[Cutthroat](#Cutthroat)|
| |[Savage](#Savage)|
| |[Seeker](#Seeker)|
| |[Apostle](#Apostle)|
| |[Mangler](#Mangler)|

# Peacebroker
*Peaceful beings and forces of nature. Existing in the realm of the living, they are suddenly disturbed by vile creatures.*

<img src="https://raw.githubusercontent.com/bra1n/townsquare/main/src/assets/icons/good.png" alt="good" width="150">

Peacebrokers start on the **good** team. They win when all players on the **evil** team die.
## Zenith
"Each night\*, choose any number of players: if they are on the same team, they cannot die tonight."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/zenith.png" alt="zenith" width="100">

**Zenith** can protect players of the same alignment.

- Zenith does not care about character type, only on alignment.
- If a character states that someone dies tonight, players protected by Zenith cannot die from that character.
- If a character states that someone dies tonight and all viable characters are protected by Zenith, nobody can die (this situation doesn't arrive in practice, as there are always at least 2 players not protected).
- Zenith may any number of players: 0 players (choosing not to act), 1 player (can pick themselves or someone else), 2 players or more players (can include or exclude themselves).
- Zenith can choose dead players.

### Examples
Zenith chooses themselves. [Cutthroat](#Cutthroat) targets them, but Zenith does not die.

Zenith was marked by [Neolith](#Neolith) the previous night, and another marked player died today. Zenith chooses themselves and [Calamity](#Calamity), but [Calamity](#Calamity) is killed by the [Savage](#Savage).

Zenith chooses the [Apostle](#Apostle) and [Cutthroat](#Cutthroat). Neither of them are protected, because they are on different teams. The [Neolith](#Neolith)'s ability kills the [Apostle](#Apostle).

Zenith chooses the Weaver tonight. Cutthroat tries to kill the Weaver, but Weaver survives.

Zenith chose themselves tonight. The next day, Calamity is executed. Zenith is killed by Calamity's ability.

## Calamity
"The 1st time you are executed (not the 1st day), all living players die & all dead players come back to life. You stay dead."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/calamity.png" alt="calamity" width="100">

**Calamity** causes living and dead to flip if someone dares to execute them.

- If Calamity is executed during the 1st day, nothing happens, and their ability is used up.
- Calamity's ability can often end in multiple teams dying out. In that case, multiple teams win.
- Calamity being executed while dead does nothing, since they have no ability while dead.
- Your ability triggers before the game ends (so if all other players of your alignment were dead, they will become alive and the game will not end)

### Examples
Good [Apostle](#Apostle) and [Cutthroat](#Cutthroat) are dead, [Mangler](#Mangler), [Neolith](#Neolith), [Zenith](#Zenith) and Calamity are alive. Calamity is executed. Now Good [Apostle](#Apostle) and [Cutthroat](#Cutthroat) are alive, everyone else is dead. All fated are dead, so the game ends, and evil wins.

Calamity is executed on the first day. Calamity's ability does not trigger.

[Zenith](#Zenith), [Seeker](#Seeker) and [Savage](#Savage) are dead, meanwhile Calamity, [Sleepwalker](#Sleepwalker), [Cutthroat](#Cutthroat) and [Mangler](#Mangler) are alive. Calamity is executed. Now [Zenith](#Zenith), [Seeker](#Seeker) and [Savage](#Savage) are alive, Calamity, [Sleepwalker](#Sleepwalker), [Cutthroat](#Cutthroat) and [Mangler](#Mangler) are dead. [Zenith](#Zenith), [Seeker](#Seeker) and [Savage](#Savage) are all on different teams, so the game continues and goes into night.

Calamity is poisoned by [Neolith](#Neolith). Calamity is executed, but nothing happens.

## Elixir
"You cannot die from execution if you were nominated by a fated."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/elixir.png" alt="elixir" width="100">

**Elixir** is protected from fated alignment players during executions.

- If a good or evil Fatebound nominated and executed them, Elixir's ability does not trigger.
- If fated Vile or Peacebroker nominated and executed them, Elixir is executed but does not die.

### Examples

Elixir is nominated by fated [Seeker](#Seeker), and put on the block. Nobody else is put on the block. Elixir is executed, but survives.

Elixir is nominated by fated [Apostle](#Apostle), and put on the block. Later, [Cutthroat](#Cutthroat) is put on the block and executed. Elixir's ability does not trigger.

Elixir is nominated by fated [Cutthroat](#Cutthroat), and put on the block. Nobody else is put on the block. Elixir is executed, but survives.

Elixir is nominated by evil [Seeker](#Seeker). Elixir is executed and dies.

## Sleepwalker
"You do not know you are a Peacebroker. You think that you are either Vile or Fatebound."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/sleepwalker.png" alt="sleepwalker" width="100">

- During setup, the Sleepwalker's token does not go in the bag. Instead, a Vile or Fatebound character goes in the bag (Your choice), and the player who draws that token is secretly the Sleepwalker for the whole game. You know. They do not.
- If you put an extra Vile token, the Sleepwalker must be a Vile. Accordingly with Fatebound.
- Sleepwalker has no ability. Whenever their Vile or Fatebound ability would affect the game in some way, it doesn't. However, you pretend that they are the character they think they are. If that character would wake at night, wake the Sleepwalker instead and act as if they were that character. If that character would gain information, you may give them false information instead - and you're encouraged to do so.
- The Sleepwalker begins thinking they are evil (if given a Vile token) or fated (if given a Fatebound token). If their ability can change their alignment, you may lie to them about their new alignment.
- If the Sleepwalker thinks their ability couldn't modify their alignment, you cannot lie to them about their alignment other than them thinking that they are their normal starting alignment. If they think they are Vile (and evil), and they turn evil, do not notify them of an alignment change (accordingly with Fatefound and fated). If they would turn good, tell them they became good.
- You may give explicit indication that Sleepwalker is the Sleepwalker through their information.

### Examples
Sleepwalker, who thinks they are [Cutthroat](#Cutthroat), targets the [Seeker](#Seeker), but nobody dies tonight.

Sleepwalker, who thinks they are [Seeker](#Seeker), sees the evil [Cutthroat](#Cutthroat) as fated. Later the [Cutthroat](#Cutthroat) is executed, and Sleepwalker sees themselves as good, even though they think they are fated.

Sleepwalker, who thinks they are [Weaver](#Weaver), sees [Cutthroat](#Cutthroat) as [Calamity](#Calamity), [Calamity](#Calamity) as Sleepwalker who thinks they are [Seeker](#Seeker), [Savage](#Savage) as [Savage](#Savage), [Seeker](#Seeker) as [Zenith](#Zenith) and [Apostle](#Apostle) as [Neolith](#Neolith). Later, Sleepwalker dies, then [Calamity](#Calamity) revives them. They wake up to see all characters as [Savages](#Savages) - proving to them that they are a Sleepwalker.

Sleepwalker, who thinks they are [Neolith](#Neolith), marked the [Apostle](#Apostle). [Apostle](#Apostle) didn't die tonight, but nobody dies from the [Neolith](#Neolith) ability.

# Vile

<img src="https://raw.githubusercontent.com/bra1n/townsquare/main/src/assets/icons/evil.png" alt="evil" width="150">

## Cutthroat
"Each night\*, choose a player who was nominated today: they die."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/cutthroat.png" alt="cutthroat" width="100">

**Cutthroat** threathens and scares people into nominating after being nominated by the fear of death.

- If nobody was nominated today, Cutthroat does not wake tonight.
- Cutthroat may choose a dead player if a dead player was nominated today.

### Examples
[Mangler](#Mangler) and [Zenith](#Zenith) were nominated today. Cutthroat wakes, but has forgotten who were nominated. They try choosing the [Savage](#Savage), but Storyteller indicates "no", then points to viable players. Cutthroat then chooses [Mangler](#Mangler), who dies.

Nobody was nominated today. Cutthroat does not wake. Nobody dies today.

Dead [Calamity](#Calamity) and Cutthroat were nominated today. Cutthroat chooses the dead [Calamity](#Calamity).

Only Cutthroat was nominated today. Cutthroat is forced to kill themselves today.

Cutthroat attacks the [Calamity](#Calamity), but [Zenith](#Zenith) chose [Calamity](#Calamity) and [Zenith](#Zenith) that night. Nobody dies.

[Seeker](#Seeker) was nominated today. Cutthroat chooses [Seeker](#Seeker). [Seeker](#Seeker) dies.

## Savage
"Each night\*, choose a player: if they are not on the same team as last executee, they die."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/savage.png" alt="savage" width="100">

**Savage** equalizes the game, by killing players of different alignements than those that were executed today.

- Savage wakes each night starting with 2nd night, and chooses a player.
- When a player is executed, place the "Last executee" reminder token near them.
- If nobody was executed today, the "Last executee" token remains on the last player.
- If nobody was executed in the game yet, Savage can kill anyone.
- If Savage is brought back to life later in the game, retroactively place the "Last executee" reminder token on the approipriate player.

### Examples

On the 1st day, nobody was executed. Savage chooses the [Apostle](#Apostle), [Apostle](#Apostle) dies.

Today, good [Calamity](#Calamity) was executed and Savage is brought back to life. Savage can only kill evil or fated player tonight.

Today evil [Apostle](#Apostle) was executed. Savage chooses [Cutthroat](#Cutthroat), who doesn't die.

On the 1st day good [Zenith](#Zenith) was executed, but nobody was executed on the 2nd day. Tonight, Savage choose the good [Calamity](#Calamity), who doesn't die, because they were on the same team as the last executee, who was the good [Zenith](#Zenith).

[Cutthroat](#Cutthroat) was executed today, and Savage decides to target the dead [Cutthroat](#Cutthroat) to hide a kill.

## Wanton
"Each night\*, if you nominated today, all other non-evil players are poisoned tonight. Otherwise, a player dies tonight."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/wanton.png" alt="wanton" width="100">

**Wanton** wages their bets between poisoning others and exposing themselves.

- If you did not nominate today, the Storyteller choses a living player who can die today to die.
- Wanton poisons good and fated players (but not themselves), regardless of character type..
- Wanton only poisons during the night, and doesn't influence day abilities.

### Examples

Good Wanton nominated the Seeker today. During night, Zenith protects themselves and Calamity, but evil Cutthroat still kills Zenith, because Zenith is poisoned tonight by the good Wanton.

All living players except the Wanton nominated today. Storyteller decides to kill Zenith.

Nobody nominated today. Zenith is protecting themselves and Calamity, so Storyteller has to kill someone between Wanton and Weaver. Storyteller decides to kill Wanton.

Fated Wanton nominated Zenith today and later Weaver nominated Elixir. Elixir is nominated but does not die. Tonight, Seeker's known target died, they learn Wanton and see "Good", because they are poisoned by the Wanton.

## Neolith
"Each night, mark a player. If a marked player died today, all marked players are poisoned until dusk & a player dies tonight."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/neolith.png" alt="neolith" width="100">

**Neolith** slowly marks players, unleashing a surprise attack if they show any weakness.

- When players are marked, they remain marked until the end of the game.
- When Neolith dies, "Marked" reminder tokens are removed
- Players remain marked even if they die.
- Neolith wakes even if a marked player died.
- If a marked player died today, when neolith marks another player, that player is also poisoned.
- Storyteller chooses who Neolith kills. Neolith does not learn of the target.

# Fatebound
*Forthbringers of progress, these humans have discovered a way of tampering with fate, thus embedding themselves in it. Now they have a mission of bringing down the natural order and instilling purity into the world.*

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/fated.png" alt="fated" width="100">

## Weaver
"You start knowing the entire Grimoire. Players of your alignment register falsely to you in the Grimoire you see."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/weaver.png" alt="weaver" width="100">

**Weaver** knows the fate of all but their own.

- Before showing the Grimoire to Weaver, the Storyteller must save the real grimoire (taking a screenshot or a photo. It is often useful to do this even if Weaver is not in play), show a modified Grimoire, and then restore the Grimoire.
- All Fatebound characters **must** be replaced with Vile or Peacebroker characters.
- If there is a Sleepwalker who thinks that they are Fatebound, Weaver sees the Fatebound character with the "Sleepwalker" reminder token next to them.
- Duplicate or paper tokens may be required, as the Weaver could see duplicate tokens. 
- Weaver's teammates can register as Sleepwalkers too. In that case, either the original Fatebound character or any other character can be shown.
- Weaver should not see alignment tokens next to characters.

## Seeker
"You start knowing a player & their alignment. When the player you know dies, you learn another."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/seeker.png" alt="seeker" width="100">

**Seeker** searches for a person who's fate they can accept... killing all the others in the process. They always know the alignment of a player, and each time the player they know dies, they learn another.

- The Storyteller can show the Seeker themselves (not recommended).
- Seeker only wakes if the player who they knew died before them during night or day.
- If Seeker would die tonight, they cannot learn another player.
- If the player Seeker knows changes alignment, Seeker does not learn this.

## Mangler
"Each night\*, choose 2 players (not yourself): they swap alignments. If just 4 players live, you lose this ability."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/mangler.png" alt="mangler" width="100">

**Mangler** twists people's fates, tangling them in a web.

- After Mangler makes their choice, if the players they chose have different alignments, wake each of them separately and tell them of their alignment change.
- If Mangler causes all players of a team to become dead, the game ends.
- If Mangler chooses 2 players of the same alignment, nothing happens.
- If night started with more than 4 players alive, but when Mangler acts enough players died so that only 4 or 3 players live, Mangler doesn't wake.



## Apostle
"Each night\* you become the alignment of the 1st player who nominated today. When the game ends, you become fated."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/apostle.png" alt="apostle" width="100">

**Apostle** carries out their mission at any cost.

- If Apostle dies as good or evil, they will stay good or evil even if game ends.
- If the game ends with good or evil winning, Apostle turns fated and loses instead.
- Apostle turning fated due to game ending cannot continue the game.
- If Apostle would win, but turns fated, they lose, unless all good are dead too.
- If Apostle is the last remaining player of a team and die, they remain that alignment.
- If Apostle is the last remaining player of a team and changes alignement, game ends and then apostle turns fated.