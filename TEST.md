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
|[Weaver](#Weaver)|[Zenith](#Zenith)|
|[Seeker](#Seeker)|[Wanton](#Wanton)|
|[Neolith](#Neolith)|[Neolith](#Neolith)|
||[Cutthroat](#Cutthroat)|
||[Savage](#Savage)|
||[Seeker](#Seeker)|
||[Apostle](#Apostle)|
||[Mangler](#Mangler)|
# Peacebroker
*Peaceful beings and forces of nature. Existing in the realm of the living, they are suddenly disturbed by vile creatures.*,,<img src="https://raw.githubusercontent.com/bra1n/townsquare/main/src/assets/icons/good.png" alt="good" width="150">,,Peacebrokers start on the **good** team. They win when all players on the **evil** team die.,
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
[Zenith](#Zenith) chooses themselves. [Cutthroat](#Cutthroat) targets them, but [Zenith](#Zenith) does not die.

[Zenith](#Zenith) was marked by [Neolith](#Neolith) the previous night, and another marked player died today. [Zenith](#Zenith) chooses themselves and [Calamity](#Calamity), but [Calamity](#Calamity) is killed by the [Savage](#Savage).

[Zenith](#Zenith) chooses the [Apostle](#Apostle) and [Cutthroat](#Cutthroat). Neither of them are protected, because they are on different teams. The [Neolith](#Neolith)'s ability kills the [Apostle](#Apostle).

[Zenith](#Zenith) chooses the [Weaver](#Weaver) tonight. [Cutthroat](#Cutthroat) tries to kill the [Weaver](#Weaver), but [Weaver](#Weaver) survives.

[Zenith](#Zenith) chose themselves tonight. The next day, [Calamity](#Calamity) is executed. [Zenith](#Zenith) is killed by [Calamity](#Calamity)'s ability.

## Calamity

"The 1st time you are executed (not the 1st day), all living players die & all dead players come back to life. You stay dead."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/calamity.png" alt="Calamity icon" width="100">

**Calamity** causes living and dead to flip if someone dares to execute them.

 - If Calamity is executed during the 1st day, nothing happens, and their ability is used up.
 - Calamity's ability can often end in multiple teams dying out. In that case, multiple teams win.
 - Calamity being executed while dead does nothing, since they have no ability while dead.
 - Your ability triggers before the game ends (so if all other players of your alignment were dead, they will become alive and the game will not end)

### Examples
Good [Apostle](#Apostle) and [Cutthroat](#Cutthroat) are dead, [Mangler](#Mangler), [Neolith](#Neolith), [Zenith](#Zenith) and [Calamity](#Calamity) are alive. [Calamity](#Calamity) is executed. Now Good [Apostle](#Apostle) and [Cutthroat](#Cutthroat) are alive, everyone else is dead. All fated are dead, so the game ends, and evil wins.

[Calamity](#Calamity) is executed on the first day. [Calamity](#Calamity)'s ability does not trigger.

[Zenith](#Zenith), [Seeker](#Seeker) and [Savage](#Savage) are dead, meanwhile [Calamity](#Calamity), [Sleepwalker](#Sleepwalker), [Cutthroat](#Cutthroat) and [Mangler](#Mangler) are alive. [Calamity](#Calamity) is executed. Now [Zenith](#Zenith), [Seeker](#Seeker) and [Savage](#Savage) are alive, [Calamity](#Calamity), [Sleepwalker](#Sleepwalker), [Cutthroat](#Cutthroat) and [Mangler](#Mangler) are dead. [Zenith](#Zenith), [Seeker](#Seeker) and [Savage](#Savage) are all on different teams, so the game continues and goes into night.

[Calamity](#Calamity) is poisoned by [Neolith](#Neolith). [Calamity](#Calamity) is executed, but nothing happens.

## Elixir

"You cannot die from execution if you were nominated by a fated."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/elixir.png" alt="Elixir icon" width="100">

**Elixir** is protected from fated alignment players during executions.

 - If a good or evil Fatebound nominated and executed them, Elixir's ability does not trigger.
 - If fated Vile or Peacebroker nominated and executed them, Elixir is executed but does not die.

### Examples
[Elixir](#Elixir) is nominated by fated [Seeker](#Seeker), and put on the block. Nobody else is put on the block. [Elixir](#Elixir) is executed, but survives.

[Elixir](#Elixir) is nominated by fated [Apostle](#Apostle), and put on the block. Later, [Cutthroat](#Cutthroat) is put on the block and executed. [Elixir](#Elixir)'s ability does not trigger.

[Elixir](#Elixir) is nominated by fated [Cutthroat](#Cutthroat), and put on the block. Nobody else is put on the block. [Elixir](#Elixir) is executed, but survives.

[Elixir](#Elixir) is nominated by evil [Seeker](#Seeker). [Elixir](#Elixir) is executed and dies.

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
[Sleepwalker](#Sleepwalker), who thinks they are [Cutthroat](#Cutthroat), targets the [Seeker](#Seeker), but nobody dies tonight.

[Sleepwalker](#Sleepwalker), who thinks they are [Seeker](#Seeker), sees the evil [Cutthroat](#Cutthroat) as fated. Later the [Cutthroat](#Cutthroat) is executed, and [Sleepwalker](#Sleepwalker) sees themselves as good, even though they think they are fated.

[Sleepwalker](#Sleepwalker), who thinks they are [Weaver](#Weaver), sees [Cutthroat](#Cutthroat) as [Calamity](#Calamity), [Calamity](#Calamity) as [Sleepwalker](#Sleepwalker) who thinks they are [Seeker](#Seeker), [Savage](#Savage) as [Savage](#Savage), [Seeker](#Seeker) as [Zenith](#Zenith) and [Apostle](#Apostle) as [Neolith](#Neolith). Later, [Sleepwalker](#Sleepwalker) dies, then [Calamity](#Calamity) revives them. They wake up to see all characters as [Savage](#Savage)s - proving to them that they are a [Sleepwalker](#Sleepwalker).

[Sleepwalker](#Sleepwalker), who thinks they are [Neolith](#Neolith), marked the [Apostle](#Apostle). [Apostle](#Apostle) didn't die tonight, but nobody dies from the [Neolith](#Neolith) ability.

# Vile
<img src="https://raw.githubusercontent.com/bra1n/townsquare/main/src/assets/icons/evil.png" alt="evil" width="150">,
## Cutthroat

"Each night\*, choose a player who was nominated today: they die."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/cutthroat.png" alt="Cutthroat icon" width="100">

**Cutthroat** threathens and scares people into nominating after being nominated by the fear of death.

 - If nobody was nominated today, Cutthroat does not wake tonight.
 - Cutthroat may choose a dead player if a dead player was nominated today.

### Examples
[Mangler](#Mangler) and [Zenith](#Zenith) were nominated today. [Cutthroat](#Cutthroat) wakes, but has forgotten who were nominated. They try choosing the [Savage](#Savage), but Storyteller indicates "no", then points to viable players. [Cutthroat](#Cutthroat) then chooses [Mangler](#Mangler), who dies.

Nobody was nominated today. [Cutthroat](#Cutthroat) does not wake. Nobody dies today.

Dead [Calamity](#Calamity) and [Cutthroat](#Cutthroat) were nominated today. [Cutthroat](#Cutthroat) chooses the dead [Calamity](#Calamity).

Only [Cutthroat](#Cutthroat) was nominated today. [Cutthroat](#Cutthroat) is forced to kill themselves today.

[Cutthroat](#Cutthroat) attacks the [Calamity](#Calamity), but [Zenith](#Zenith) chose [Calamity](#Calamity) and [Zenith](#Zenith) that night. Nobody dies.

[Seeker](#Seeker) was nominated today. [Cutthroat](#Cutthroat) chooses [Seeker](#Seeker). [Seeker](#Seeker) dies.

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
On the 1st day, nobody was executed. [Savage](#Savage) chooses the [Apostle](#Apostle), [Apostle](#Apostle) dies.

Today, good [Calamity](#Calamity) was executed and [Savage](#Savage) is brought back to life. [Savage](#Savage) can only kill evil or fated player tonight.

Today evil [Apostle](#Apostle) was executed. [Savage](#Savage) chooses [Cutthroat](#Cutthroat), who doesn't die.

On the 1st day good [Zenith](#Zenith) was executed, but nobody was executed on the 2nd day. Tonight, [Savage](#Savage) choose the good [Calamity](#Calamity), who doesn't die, because they were on the same team as the last executee, who was the good [Zenith](#Zenith).

[Cutthroat](#Cutthroat) was executed today, and [Savage](#Savage) decides to target the dead [Cutthroat](#Cutthroat) to hide a kill.

## Wanton

"Each night\*, if you nominated today, all other non-evil players are poisoned tonight. Otherwise, a player dies tonight."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/wanton.png" alt="Wanton icon" width="100">

**Wanton** wages their bets between poisoning others and exposing themselves.

 - If you did not nominate today, the Storyteller choses a living player who can die today to die.
 - Wanton poisons good and fated players (but not themselves), regardless of character type..
 - Wanton only poisons during the night, and doesn't influence day abilities.

### Examples
Good [Wanton](#Wanton) nominated the [Seeker](#Seeker) today. During night, [Zenith](#Zenith) protects themselves and [Calamity](#Calamity), but evil [Cutthroat](#Cutthroat) still kills [Zenith](#Zenith), because [Zenith](#Zenith) is poisoned tonight by the good [Wanton](#Wanton).

All living players except the [Wanton](#Wanton) nominated today. Storyteller decides to kill [Zenith](#Zenith).

Nobody nominated today. [Zenith](#Zenith) is protecting themselves and [Calamity](#Calamity), so Storyteller has to kill someone between [Wanton](#Wanton) and [Weaver](#Weaver). Storyteller decides to kill [Wanton](#Wanton).

Fated [Wanton](#Wanton) nominated [Zenith](#Zenith) today and later [Weaver](#Weaver) nominated [Elixir](#Elixir). [Elixir](#Elixir) is nominated but does not die. Tonight, [Seeker](#Seeker)'s known target died, they learn [Wanton](#Wanton) and see "Good", because they are poisoned by the [Wanton](#Wanton).

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
[Neolith](#Neolith) choose [Sleepwalker](#Sleepwalker) on the 1st night. Today, [Sleepwalker](#Sleepwalker) was executed. [Neolith](#Neolith)'s ability causes a player to die, and thus Storyteller chooses [Apostle](#Apostle) to die.

[Neolith](#Neolith) has marked [Apostle](#Apostle) and [Elixir](#Elixir) already. This night, [Wanton](#Wanton) killed [Elixir](#Elixir), and [Neolith](#Neolith) chooses the [Wanton](#Wanton). Because none of marked players died during day, [Neolith](#Neolith) doesn't poison or kill anyone tonight.

[Neolith](#Neolith) has marked [Weaver](#Weaver), [Calamity](#Calamity) and [Cutthroat](#Cutthroat) already. Today, [Cutthroat](#Cutthroat) was executed. Tonight, [Neolith](#Neolith) chooses [Seeker](#Seeker). [Weaver](#Weaver), [Calamity](#Calamity), dead [Cutthroat](#Cutthroat) and [Seeker](#Seeker) are all poisoned. Storyteller chooses to kill the [Seeker](#Seeker).

[Neolith](#Neolith) has marked the [Mangler](#Mangler) and [Cutthroat](#Cutthroat) so far. Last night, [Cutthroat](#Cutthroat) died. Today, [Mangler](#Mangler) was executed, and [Cutthroat](#Cutthroat) came back to life. Tonight, [Cutthroat](#Cutthroat) is poisoned by [Neolith](#Neolith), and [Neolith](#Neolith)'s ability kills the [Cutthroat](#Cutthroat).

# Fatebound
*Forthbringers of progress, these humans have discovered a way of tampering with fate, thus embedding themselves in it. Now they have a mission of bringing down the natural order and instilling purity into the world.*,,<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/fated.png" alt="fated" width="100">,
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
[Weaver](#Weaver), [Apostle](#Apostle), [Elixir](#Elixir), [Sleepwalker](#Sleepwalker) who thinks they are the [Seeker](#Seeker), [Wanton](#Wanton) and [Cutthroat](#Cutthroat) are in play. [Weaver](#Weaver) wakes on 1st night to learn [Apostle](#Apostle) as [Seeker](#Seeker) (must register falsely), [Elixir](#Elixir) as [Elixir](#Elixir), [Sleepwalker](#Sleepwalker) as [Sleepwalker](#Sleepwalker), [Wanton](#Wanton) as [Wanton](#Wanton) and [Cutthroat](#Cutthroat) as [Cutthroat](#Cutthroat). Note that only [Apostle](#Apostle) registered falsely.

Evil [Weaver](#Weaver) has been brought back to life by [Calamity](#Calamity). They wake first in the night, before any other roles (even though [Neolith](#Neolith) is alive now). They see [Elixir](#Elixir) as [Elixir](#Elixir), evil [Mangler](#Mangler) as [Calamity](#Calamity), fated [Sleepwalker](#Sleepwalker) as [Sleepwalker](#Sleepwalker), evil [Calamity](#Calamity) as [Mangler](#Mangler) and fated [Apostle](#Apostle) as [Apostle](#Apostle).

[Weaver](#Weaver), [Seeker](#Seeker), [Mangler](#Mangler), [Elixir](#Elixir), [Calamity](#Calamity), [Zenith](#Zenith), [Cutthroat](#Cutthroat), [Savage](#Savage) and [Wanton](#Wanton) are in play. [Weaver](#Weaver) wakes on 1st night to learn: [Seeker](#Seeker) as [Sleepwalker](#Sleepwalker), [Mangler](#Mangler) as [Neolith](#Neolith), [Elixir](#Elixir) as [Elixir](#Elixir), [Calamity](#Calamity) as [Calamity](#Calamity), [Zenith](#Zenith) as [Zenith](#Zenith), [Cutthroat](#Cutthroat) as [Cutthroat](#Cutthroat), [Savage](#Savage) as [Savage](#Savage) and [Wanton](#Wanton) as [Wanton](#Wanton). Because of lack of ability to tell apart who is just registering wrong, [Weaver](#Weaver) doesn't know their teammates.

## Seeker

"You start knowing a player & their alignment. When the player you know dies, you learn another."

<img src="https://raw.githubusercontent.com/JulGvoz/twisted-fates/master/original-icons/seeker.png" alt="Seeker icon" width="100">

Seeker searches for a person who's fate they can accept... killing all the others in the process. They always know the alignment of a player, and each time the player they know dies, they learn another.

 - The Storyteller can show the Seeker themselves (not recommended).
 - Seeker only wakes if the player who they knew died before them during night or day.
 - If Seeker would die tonight, they cannot learn another player.
 - If the player Seeker knows changes alignment, Seeker does not learn this.

### Examples
On the 1st night, [Seeker](#Seeker) learns that Alice (who is [Mangler](#Mangler)) is fated. On the 3rd night, Alice died, so [Seeker](#Seeker) later learns that Bob (who is the [Cutthroat](#Cutthroat)) is evil.

[Seeker](#Seeker) starts knowing that Charlie (who is [Elixir](#Elixir)) is good. [Seeker](#Seeker) tries to execute Charlie, but they do not die (due to [Elixir](#Elixir) ability). [Seeker](#Seeker) doesn't learn anything during night, because the player they know hasn't died yet.

[Seeker](#Seeker) starts knowing that Diana (who is [Savage](#Savage)) is evil. The next night, [Mangler](#Mangler) swaps turns [Seeker](#Seeker) evil and [Savage](#Savage) fated. [Seeker](#Seeker) still thinks that Diana is evil.

[Seeker](#Seeker) starts knowing that Elana (who is [Sleepwalker](#Sleepwalker) who thinks they are [Wanton](#Wanton)) is good. On the 1st day, [Seeker](#Seeker) is executed and on 2nd day, [Calamity](#Calamity) is executed, and [Seeker](#Seeker) is brought back to life. [Sleepwalker](#Sleepwalker) was also brought back to life. [Seeker](#Seeker) wakes that night and learns that dead [Calamity](#Calamity) is good.

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
On the 2nd night, [Mangler](#Mangler) chooses now evil [Apostle](#Apostle) and fated [Seeker](#Seeker). [Apostle](#Apostle) wakes again (they woke this night already to learn they became evil) to learn that they are now fated. Afterward, [Seeker](#Seeker) is woken to learn that they are now evil.

[Mangler](#Mangler) chooses evil [Calamity](#Calamity) and [Cutthroat](#Cutthroat). Since both of them have the same alignment, nothing happens.

[Mangler](#Mangler) chooses good [Sleepwalker](#Sleepwalker) who thinks they are [Apostle](#Apostle) and evil [Cutthroat](#Cutthroat). [Cutthroat](#Cutthroat) learns they are now good, but Storyteller decides to lie to [Sleepwalker](#Sleepwalker) (because [Sleepwalker](#Sleepwalker) thinks they are [Apostle](#Apostle)) and tell them they are now good.

[Seeker](#Seeker) has just been executed, and with 5 players alive, town goes to sleep. Tonight, no kills happen. [Mangler](#Mangler) wakes and chooses last good player [Calamity](#Calamity) and dead [Cutthroat](#Cutthroat). There are no more living good players, so game ends.

[Apostle](#Apostle) has just been executed, and with 4 players alive, town goes to sleep. Tonight, [Mangler](#Mangler) doesn't wake.

Players go to sleep with 5 players alive. [Cutthroat](#Cutthroat) kills the [Calamity](#Calamity) during night, and thus [Mangler](#Mangler) doesn't wake.

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
On the 1st day, [Cutthroat](#Cutthroat) nominated 1st that day. That night, [Apostle](#Apostle) turned evil. [Seeker](#Seeker) nominated 1st today. [Apostle](#Apostle) turns fated tonight.

Good [Apostle](#Apostle) is the last evil player alive. Last fated player is executed, and game ends. Evil has won, but [Apostle](#Apostle) has turned fated because game has ended. Thus, fated (including [Apostle](#Apostle)) and good have lost, and evil have won.

[Apostle](#Apostle) is executed on the 1st day. The following day, [Cutthroat](#Cutthroat) nominates 1st and executes the [Calamity](#Calamity), thus [Apostle](#Apostle) is now alive. Tonight, [Apostle](#Apostle) turns evil, because an evil player nominated first. (Even if [Apostle](#Apostle) was dead at that time)
