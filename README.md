# Twisted Fates v1.10

To play on [clocktower.online](https://clocktower.online) simply press `E`, choose **Custom Script / Characters**, click **Enter URL** and paste this:

```
https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/twisted-fates.json
```

or open this [link](https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/twisted-fates.json) and press `Ctrl + S`.

<img src="https://i.ibb.co/w7xMHc5/script-icon.png" alt="Twisted Fates v1.10 logo" width="512">

This is *fan-made content*. [Blood on the Clocktower](https://bloodontheclocktower.com) is owned by Steven Medway and [The Pandemonium Institute](https://www.thepandemoniuminstitute.com). 

Designed and curated by Zobody, with help from emptyset#9999 and Sodium#6176.

Icon credit:
 - <https://game-icons.net>

|Name|Icon|Ability|
|-|-|-|
|[Zenith](#zenith)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/zenith.png" alt="Zenith icon" width="50">|Each night*, choose any number of players: if they are on the same team, they cannot die tonight.|
|[Calamity](#calamity)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/calamity.png" alt="Calamity icon" width="50">|The 1st time you are executed (not the 1st day), all living players die & all dead players come back to life. You stay dead.|
|[Elixir](#elixir)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/elixir.png" alt="Elixir icon" width="50">|You cannot die from execution if you were nominated by a fated.|
|[Sleepwalker](#sleepwalker)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/sleepwalker.png" alt="Sleepwalker icon" width="50">|You do not know you are a Peacebroker. You think that you are either Vile or Fatebound.|
|[Cutthroat](#cutthroat)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/cutthroat.png" alt="Cutthroat icon" width="50">|Each night*, choose a player who was nominated today: they die.|
|[Savage](#savage)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/savage.png" alt="Savage icon" width="50">|Each night*, choose a player: if they are not on the same team as last executee, they die.|
|[Wanton](#wanton)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/wanton.png" alt="Wanton icon" width="50">|Each night*, if you nominated today, all other non-evil players are poisoned tonight. Otherwise, a player dies tonight.|
|[Neolith](#neolith)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/neolith.png" alt="Neolith icon" width="50">|Each night, mark a player (not yourself). If a marked player died today, all marked players are poisoned until dusk & a player dies tonight.|
|[Weaver](#weaver)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/weaver.png" alt="Weaver icon" width="50">|You start knowing all other players & their characters. Players of your alignment register falsely to you.|
|[Seeker](#seeker)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/seeker.png" alt="Seeker icon" width="50">|You start knowing a player & their alignment. When the player you know dies, you learn another.|
|[Mangler](#mangler)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/mangler.png" alt="Mangler icon" width="50">|Each night*, choose 2 players (not yourself): they swap alignments. If 4 or fewer players live, you do not wake.|
|[Apostle](#apostle)|<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/apostle.png" alt="Apostle icon" width="50">|Each night* you become the alignment of the 1st player who nominated today. When the game ends, you become fated.|
## Homebrew rules

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
Because Sleepwalker must be in the game, put in all character tokens except the Sleepwalker in the bag, and then assign the "Sleepwalker" reminder token to a Vile or a Fatebound player.


### Night order
|First night|Other nights|
|-|-|
|[Weaver](#weaver)|[Zenith](#zenith)|
|[Seeker](#seeker)|[Wanton](#wanton)|
|[Neolith](#neolith)|[Neolith](#neolith)|
||[Cutthroat](#cutthroat)|
||[Savage](#savage)|
||[Seeker](#seeker)|
||[Apostle](#apostle)|
||[Mangler](#mangler)|
# Peacebroker
*Peaceful beings and forces of nature. Existing in the realm of the living, they are suddenly disturbed by vile creatures.*

<img src="https://raw.githubusercontent.com/bra1n/townsquare/main/src/assets/icons/good.png" alt="good" width="150">

Peacebrokers start on the **good** team. They win when all players on the **evil** team die.

## Zenith

"Each night\*, choose any number of players: if they are on the same team, they cannot die tonight."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/zenith.png" alt="Zenith icon" width="100">

**Zenith** can protect players of the same alignment.

 - Zenith does not care about character type, only on alignment.
 - If a character states that someone dies tonight, players protected by Zenith cannot die from that character.
 - If a character states that someone dies tonight and all viable characters are protected by Zenith, nobody can die (this situation doesn't arrive in practice, as there are always at least 2 players not protected).
 - Zenith may any number of players: 0 players (choosing not to act), 1 player (can pick themselves or someone else), 2 players or more players (can include or exclude themselves).
 - Zenith can choose dead players.

### Examples
[Zenith](#zenith) chooses themselves. [Cutthroat](#cutthroat) targets them, but [Zenith](#zenith) does not die.

[Zenith](#zenith) was marked by [Neolith](#neolith) the previous night, and another marked player died today. [Zenith](#zenith) chooses themselves and [Calamity](#calamity), but [Calamity](#calamity) is killed by the [Savage](#savage).

[Zenith](#zenith) chooses the [Apostle](#apostle) and [Cutthroat](#cutthroat). Neither of them are protected, because they are on different teams. The [Neolith](#neolith)'s ability kills the [Apostle](#apostle).

[Zenith](#zenith) chooses the [Weaver](#weaver) tonight. [Cutthroat](#cutthroat) tries to kill the [Weaver](#weaver), but [Weaver](#weaver) survives.

[Zenith](#zenith) chose themselves tonight. The next day, [Calamity](#calamity) is executed. [Zenith](#zenith) is killed by [Calamity](#calamity)'s ability.

## Calamity

"The 1st time you are executed (not the 1st day), all living players die & all dead players come back to life. You stay dead."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/calamity.png" alt="Calamity icon" width="100">

**Calamity** causes living and dead to flip if someone dares to execute them.

 - If Calamity is executed during the 1st day, nothing happens, and their ability is used up.
 - Calamity's ability can often end in multiple teams dying out. In that case, multiple teams win.
 - Calamity being executed while dead does nothing, since they have no ability while dead.
 - Your ability triggers before the game ends (so if all other players of your alignment were dead, they will become alive and the game will not end)

### Examples
Good [Apostle](#apostle) and [Cutthroat](#cutthroat) are dead, [Mangler](#mangler), [Neolith](#neolith), [Zenith](#zenith) and [Calamity](#calamity) are alive. [Calamity](#calamity) is executed. Now Good [Apostle](#apostle) and [Cutthroat](#cutthroat) are alive, everyone else is dead. All fated are dead, so the game ends, and evil wins.

[Calamity](#calamity) is executed on the first day. [Calamity](#calamity)'s ability does not trigger.

[Zenith](#zenith), [Seeker](#seeker) and [Savage](#savage) are dead, meanwhile [Calamity](#calamity), [Sleepwalker](#sleepwalker), [Cutthroat](#cutthroat) and [Mangler](#mangler) are alive. [Calamity](#calamity) is executed. Now [Zenith](#zenith), [Seeker](#seeker) and [Savage](#savage) are alive, [Calamity](#calamity), [Sleepwalker](#sleepwalker), [Cutthroat](#cutthroat) and [Mangler](#mangler) are dead. [Zenith](#zenith), [Seeker](#seeker) and [Savage](#savage) are all on different teams, so the game continues and goes into night.

[Calamity](#calamity) is poisoned by [Neolith](#neolith). [Calamity](#calamity) is executed, but nothing happens.

## Elixir

"You cannot die from execution if you were nominated by a fated."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/elixir.png" alt="Elixir icon" width="100">

**Elixir** is protected from fated alignment players during executions.

 - If a good or evil Fatebound nominated and executed them, Elixir's ability does not trigger.
 - If fated Vile or Peacebroker nominated and executed them, Elixir is executed but does not die.

### Examples
[Elixir](#elixir) is nominated by fated [Seeker](#seeker), and put on the block. Nobody else is put on the block. [Elixir](#elixir) is executed, but survives.

[Elixir](#elixir) is nominated by fated [Apostle](#apostle), and put on the block. Later, [Cutthroat](#cutthroat) is put on the block and executed. [Elixir](#elixir)'s ability does not trigger.

[Elixir](#elixir) is nominated by fated [Cutthroat](#cutthroat), and put on the block. Nobody else is put on the block. [Elixir](#elixir) is executed, but survives.

[Elixir](#elixir) is nominated by evil [Seeker](#seeker). [Elixir](#elixir) is executed and dies.

## Sleepwalker

"You do not know you are a Peacebroker. You think that you are either Vile or Fatebound."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/sleepwalker.png" alt="Sleepwalker icon" width="100">



 - During setup, the Sleepwalker's token does not go in the bag. Instead, a Vile or Fatebound character goes in the bag (Your choice), and the player who draws that token is secretly the Sleepwalker for the whole game. You know. They do not.
 - If you put an extra Vile token, the Sleepwalker must be a Vile. Accordingly with Fatebound.
 - Sleepwalker has no ability. Whenever their Vile or Fatebound ability would affect the game in some way, it doesn't. However, you pretend that they are the character they think they are. If that character would wake at night, wake the Sleepwalker instead and act as if they were that character. If that character would gain information, you may give them false information instead - and you're encouraged to do so.
 - The Sleepwalker begins thinking they are evil (if given a Vile token) or fated (if given a Fatebound token). If their ability can change their alignment, you may lie to them about their new alignment.
 - If the Sleepwalker thinks their ability couldn't modify their alignment, you cannot lie to them about their alignment other than them thinking that they are their normal starting alignment. If they think they are Vile (and evil), and they turn evil, do not notify them of an alignment change (accordingly with Fatefound and fated). If they would turn good, tell them they became good.
 - You may give explicit indication that Sleepwalker is the Sleepwalker through their information.

### Examples
[Sleepwalker](#sleepwalker), who thinks they are [Cutthroat](#cutthroat), targets the [Seeker](#seeker), but nobody dies tonight.

[Sleepwalker](#sleepwalker), who thinks they are [Seeker](#seeker), sees the evil [Cutthroat](#cutthroat) as fated. Later the [Cutthroat](#cutthroat) is executed, and [Sleepwalker](#sleepwalker) sees themselves as good, even though they think they are fated.

[Sleepwalker](#sleepwalker), who thinks they are [Weaver](#weaver), sees [Cutthroat](#cutthroat) as [Calamity](#calamity), [Calamity](#calamity) as [Sleepwalker](#sleepwalker) who thinks they are [Seeker](#seeker), [Savage](#savage) as [Savage](#savage), [Seeker](#seeker) as [Zenith](#zenith) and [Apostle](#apostle) as [Neolith](#neolith). Later, [Sleepwalker](#sleepwalker) dies, then [Calamity](#calamity) revives them. They wake up to see all characters as [Savage](#savage)s - proving to them that they are a [Sleepwalker](#sleepwalker).

[Sleepwalker](#sleepwalker), who thinks they are [Neolith](#neolith), marked the [Apostle](#apostle). [Apostle](#apostle) didn't die tonight, but nobody dies from the [Neolith](#neolith) ability.

# Vile
<img src="https://raw.githubusercontent.com/bra1n/townsquare/main/src/assets/icons/evil.png" alt="evil" width="150">

## Cutthroat

"Each night\*, choose a player who was nominated today: they die."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/cutthroat.png" alt="Cutthroat icon" width="100">

**Cutthroat** threathens and scares people into nominating after being nominated by the fear of death.

 - If nobody was nominated today, Cutthroat does not wake tonight.
 - Cutthroat may choose a dead player if a dead player was nominated today.

### Examples
[Mangler](#mangler) and [Zenith](#zenith) were nominated today. [Cutthroat](#cutthroat) wakes, but has forgotten who were nominated. They try choosing the [Savage](#savage), but Storyteller indicates "no", then points to viable players. [Cutthroat](#cutthroat) then chooses [Mangler](#mangler), who dies.

Nobody was nominated today. [Cutthroat](#cutthroat) does not wake. Nobody dies today.

Dead [Calamity](#calamity) and [Cutthroat](#cutthroat) were nominated today. [Cutthroat](#cutthroat) chooses the dead [Calamity](#calamity).

Only [Cutthroat](#cutthroat) was nominated today. [Cutthroat](#cutthroat) is forced to kill themselves today.

[Cutthroat](#cutthroat) attacks the [Calamity](#calamity), but [Zenith](#zenith) chose [Calamity](#calamity) and [Zenith](#zenith) that night. Nobody dies.

[Seeker](#seeker) was nominated today. [Cutthroat](#cutthroat) chooses [Seeker](#seeker). [Seeker](#seeker) dies.

## Savage

"Each night\*, choose a player: if they are not on the same team as last executee, they die."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/savage.png" alt="Savage icon" width="100">

**Savage** equalizes the game, by killing players of different alignements than those that were executed today.

 - Savage wakes each night starting with 2nd night, and chooses a player.
 - When a player is executed, place the "Last executee" reminder token near them.
 - If nobody was executed today, the "Last executee" token remains on the last player.
 - If nobody was executed in the game yet, Savage can kill anyone.
 - If Savage is brought back to life later in the game, retroactively place the "Last executee" reminder token on the approipriate player.

### Examples
On the 1st day, nobody was executed. [Savage](#savage) chooses the [Apostle](#apostle), [Apostle](#apostle) dies.

Today, good [Calamity](#calamity) was executed and [Savage](#savage) is brought back to life. [Savage](#savage) can only kill evil or fated player tonight.

Today evil [Apostle](#apostle) was executed. [Savage](#savage) chooses [Cutthroat](#cutthroat), who doesn't die.

On the 1st day good [Zenith](#zenith) was executed, but nobody was executed on the 2nd day. Tonight, [Savage](#savage) choose the good [Calamity](#calamity), who doesn't die, because they were on the same team as the last executee, who was the good [Zenith](#zenith).

[Cutthroat](#cutthroat) was executed today, and [Savage](#savage) decides to target the dead [Cutthroat](#cutthroat) to hide a kill.

## Wanton

"Each night\*, if you nominated today, all other non-evil players are poisoned tonight. Otherwise, a player dies tonight."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/wanton.png" alt="Wanton icon" width="100">

**Wanton** wages their bets between poisoning others and exposing themselves.

 - If you did not nominate today, the Storyteller choses a living player who can die today to die.
 - Wanton poisons good and fated players (but not themselves), regardless of character type..
 - Wanton only poisons during the night, and doesn't influence day abilities.

### Examples
Good [Wanton](#wanton) nominated the [Seeker](#seeker) today. During night, [Zenith](#zenith) protects themselves and [Calamity](#calamity), but evil [Cutthroat](#cutthroat) still kills [Zenith](#zenith), because [Zenith](#zenith) is poisoned tonight by the good [Wanton](#wanton).

All living players except the [Wanton](#wanton) nominated today. Storyteller decides to kill [Zenith](#zenith).

Nobody nominated today. [Zenith](#zenith) is protecting themselves and [Calamity](#calamity), so Storyteller has to kill someone between [Wanton](#wanton) and [Weaver](#weaver). Storyteller decides to kill [Wanton](#wanton).

Fated [Wanton](#wanton) nominated [Zenith](#zenith) today and later [Weaver](#weaver) nominated [Elixir](#elixir). [Elixir](#elixir) is nominated but does not die. Tonight, [Seeker](#seeker)'s known target died, they learn [Wanton](#wanton) and see "Good", because they are poisoned by the [Wanton](#wanton).

## Neolith

"Each night, mark a player (not yourself). If a marked player died today, all marked players are poisoned until dusk & a player dies tonight."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/neolith.png" alt="Neolith icon" width="100">

Neolith slowly marks players, unleashing a surprise attack if they show any weakness.

 - When players are marked, they remain marked until the end of the game.
 - When Neolith dies, "Marked" reminder tokens are removed
 - Players remain marked even if they die.
 - Neolith wakes even if a marked player died.
 - If a marked player died today, when neolith marks another player, that player is also poisoned.
 - Storyteller chooses who Neolith kills. Neolith does not learn of the target.

### Examples
[Neolith](#neolith) choose [Sleepwalker](#sleepwalker) on the 1st night. Today, [Sleepwalker](#sleepwalker) was executed. [Neolith](#neolith)'s ability causes a player to die, and thus Storyteller chooses [Apostle](#apostle) to die.

[Neolith](#neolith) has marked [Apostle](#apostle) and [Elixir](#elixir) already. This night, [Wanton](#wanton) killed [Elixir](#elixir), and [Neolith](#neolith) chooses the [Wanton](#wanton). Because none of marked players died during day, [Neolith](#neolith) doesn't poison or kill anyone tonight.

[Neolith](#neolith) has marked [Weaver](#weaver), [Calamity](#calamity) and [Cutthroat](#cutthroat) already. Today, [Cutthroat](#cutthroat) was executed. Tonight, [Neolith](#neolith) chooses [Seeker](#seeker). [Weaver](#weaver), [Calamity](#calamity), dead [Cutthroat](#cutthroat) and [Seeker](#seeker) are all poisoned. Storyteller chooses to kill the [Seeker](#seeker).

[Neolith](#neolith) has marked the [Mangler](#mangler) and [Cutthroat](#cutthroat) so far. Last night, [Cutthroat](#cutthroat) died. Today, [Mangler](#mangler) was executed, and [Cutthroat](#cutthroat) came back to life. Tonight, [Cutthroat](#cutthroat) is poisoned by [Neolith](#neolith), and [Neolith](#neolith)'s ability kills the [Cutthroat](#cutthroat).

# Fatebound
*Forthbringers of progress, these humans have discovered a way of tampering with fate, thus embedding themselves in it. Now they have a mission of bringing down the natural order and instilling purity into the world.*

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/fated.png" alt="fated" width="100">

## Weaver

"You start knowing all other players & their characters. Players of your alignment register falsely to you."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/weaver.png" alt="Weaver icon" width="100">

Weaver knows the fate of all but their own.

 - Storyteller can send the Weaver a fake Grimoire when playing online.
 - If Weaver is fated, all fated players (usually those who have Fatebound character) must be replaced with another character.
 - When registering falsely, characters can appear as anything else, including another character for the same character type.
 - If there is a Sleepwalker who thinks that they are Fatebound, fated Weaver simply learns Sleepwalker for that player.
 - Storyteller may tell (or sometimes even be forced to tell) Weaver the same character 2 or more times.
 - Weaver does not learn of any reminder or alignment tokens, just the characters of players.

### Examples
[Weaver](#weaver), [Apostle](#apostle), [Elixir](#elixir), [Sleepwalker](#sleepwalker) who thinks they are the [Seeker](#seeker), [Wanton](#wanton) and [Cutthroat](#cutthroat) are in play. [Weaver](#weaver) wakes on 1st night to learn [Apostle](#apostle) as [Seeker](#seeker) (must register falsely), [Elixir](#elixir) as [Elixir](#elixir), [Sleepwalker](#sleepwalker) as [Sleepwalker](#sleepwalker), [Wanton](#wanton) as [Wanton](#wanton) and [Cutthroat](#cutthroat) as [Cutthroat](#cutthroat). Note that only [Apostle](#apostle) registered falsely.

Evil [Weaver](#weaver) has been brought back to life by [Calamity](#calamity). They wake first in the night, before any other roles (even though [Neolith](#neolith) is alive now). They see [Elixir](#elixir) as [Elixir](#elixir), evil [Mangler](#mangler) as [Calamity](#calamity), fated [Sleepwalker](#sleepwalker) as [Sleepwalker](#sleepwalker), evil [Calamity](#calamity) as [Mangler](#mangler) and fated [Apostle](#apostle) as [Apostle](#apostle).

[Weaver](#weaver), [Seeker](#seeker), [Mangler](#mangler), [Elixir](#elixir), [Calamity](#calamity), [Zenith](#zenith), [Cutthroat](#cutthroat), [Savage](#savage) and [Wanton](#wanton) are in play. [Weaver](#weaver) wakes on 1st night to learn: [Seeker](#seeker) as [Sleepwalker](#sleepwalker), [Mangler](#mangler) as [Neolith](#neolith), [Elixir](#elixir) as [Elixir](#elixir), [Calamity](#calamity) as [Calamity](#calamity), [Zenith](#zenith) as [Zenith](#zenith), [Cutthroat](#cutthroat) as [Cutthroat](#cutthroat), [Savage](#savage) as [Savage](#savage) and [Wanton](#wanton) as [Wanton](#wanton). Because of lack of ability to tell apart who is just registering wrong, [Weaver](#weaver) doesn't know their teammates.

## Seeker

"You start knowing a player & their alignment. When the player you know dies, you learn another."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/seeker.png" alt="Seeker icon" width="100">

Seeker searches for a person who's fate they can accept... killing all the others in the process. They always know the alignment of a player, and each time the player they know dies, they learn another.

 - The Storyteller can show the Seeker themselves (not recommended).
 - Seeker only wakes if the player who they knew died before them during night or day.
 - If Seeker would die tonight, they cannot learn another player.
 - If the player Seeker knows changes alignment, Seeker does not learn this.

### Examples
On the 1st night, [Seeker](#seeker) learns that Alice (who is [Mangler](#mangler)) is fated. On the 3rd night, Alice died, so [Seeker](#seeker) later learns that Bob (who is the [Cutthroat](#cutthroat)) is evil.

[Seeker](#seeker) starts knowing that Charlie (who is [Elixir](#elixir)) is good. [Seeker](#seeker) tries to execute Charlie, but they do not die (due to [Elixir](#elixir) ability). [Seeker](#seeker) doesn't learn anything during night, because the player they know hasn't died yet.

[Seeker](#seeker) starts knowing that Diana (who is [Savage](#savage)) is evil. The next night, [Mangler](#mangler) swaps turns [Seeker](#seeker) evil and [Savage](#savage) fated. [Seeker](#seeker) still thinks that Diana is evil.

[Seeker](#seeker) starts knowing that Elana (who is [Sleepwalker](#sleepwalker) who thinks they are [Wanton](#wanton)) is good. On the 1st day, [Seeker](#seeker) is executed and on 2nd day, [Calamity](#calamity) is executed, and [Seeker](#seeker) is brought back to life. [Sleepwalker](#sleepwalker) was also brought back to life. [Seeker](#seeker) wakes that night and learns that dead [Calamity](#calamity) is good.

## Mangler

"Each night\*, choose 2 players (not yourself): they swap alignments. If 4 or fewer players live, you do not wake."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/mangler.png" alt="Mangler icon" width="100">

Mangler twists people's fates, tangling them in a web.

 - After Mangler makes their choice, if the players they chose have different alignments, wake each of them separately and tell them of their alignment change.
 - If Mangler causes all players of a team to become dead, the game ends.
 - If Mangler chooses 2 players of the same alignment, nothing happens.
 - If night started with more than 4 players alive, but when Mangler acts enough players died so that only 4 or 3 players live, Mangler doesn't wake.
 - If at some point there were only 3 or 4 players alive (thus Mangler didn't wake), and later there are 5 or more players alive, Mangler can wake again.

### Examples
On the 2nd night, [Mangler](#mangler) chooses now evil [Apostle](#apostle) and fated [Seeker](#seeker). [Apostle](#apostle) wakes again (they woke this night already to learn they became evil) to learn that they are now fated. Afterward, [Seeker](#seeker) is woken to learn that they are now evil.

[Mangler](#mangler) chooses evil [Calamity](#calamity) and [Cutthroat](#cutthroat). Since both of them have the same alignment, nothing happens.

[Mangler](#mangler) chooses good [Sleepwalker](#sleepwalker) who thinks they are [Apostle](#apostle) and evil [Cutthroat](#cutthroat). [Cutthroat](#cutthroat) learns they are now good, but Storyteller decides to lie to [Sleepwalker](#sleepwalker) (because [Sleepwalker](#sleepwalker) thinks they are [Apostle](#apostle)) and tell them they are now good.

[Seeker](#seeker) has just been executed, and with 5 players alive, town goes to sleep. Tonight, no kills happen. [Mangler](#mangler) wakes and chooses last good player [Calamity](#calamity) and dead [Cutthroat](#cutthroat). There are no more living good players, so game ends.

[Apostle](#apostle) has just been executed, and with 4 players alive, town goes to sleep. Tonight, [Mangler](#mangler) doesn't wake.

Players go to sleep with 5 players alive. [Cutthroat](#cutthroat) kills the [Calamity](#calamity) during night, and thus [Mangler](#mangler) doesn't wake.

## Apostle

"Each night\* you become the alignment of the 1st player who nominated today. When the game ends, you become fated."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/apostle.png" alt="Apostle icon" width="100">

Apostle carries out their mission at any cost.

 - If Apostle dies as good or evil, they will stay good or evil even if game ends.
 - If the game ends with good or evil winning, Apostle turns fated and loses instead.
 - Apostle turning fated due to game ending cannot continue the game.
 - If Apostle would win, but turns fated, they lose, unless all good are dead too.
 - If Apostle is the last remaining player of a team and die, they remain that alignment.
 - If Apostle is the last remaining player of a team and changes alignement, game ends and then apostle turns fated.

### Examples
On the 1st day, [Cutthroat](#cutthroat) nominated 1st that day. That night, [Apostle](#apostle) turned evil. [Seeker](#seeker) nominated 1st today. [Apostle](#apostle) turns fated tonight.

Good [Apostle](#apostle) is the last evil player alive. Last fated player is executed, and game ends. Evil has won, but [Apostle](#apostle) has turned fated because game has ended. Thus, fated (including [Apostle](#apostle)) and good have lost, and evil have won.

[Apostle](#apostle) is executed on the 1st day. The following day, [Cutthroat](#cutthroat) nominates 1st and executes the [Calamity](#calamity), thus [Apostle](#apostle) is now alive. Tonight, [Apostle](#apostle) turns evil, because an evil player nominated first. (Even if [Apostle](#apostle) was dead at that time)
