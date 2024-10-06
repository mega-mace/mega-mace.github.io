# Homebrews

This is a growing collection of thoughts on homebrew  games I've played over time. I started out with ones available on romhacking.net (RHDN).

## Homebrew Highlights

### RHDN NES

These are my picks for the "most interesting" games I came across (in no particular order). I don't know if I'd call them all the "best", as there are games that are more polished/complete that aren't listed, but also less conceptually interesting. Conversely, some of the games I did list aren't conceptually that original, but had a level of polish that stood out over others. Larger reviews can be found in the Chronology.

- **BladeBuster**: Although just a short space shooter, impresses on the graphical front
- **Lan Master**: Cool puzzle game that's a take on, I think, Pipe Dream
- **D Pad Hero**: As it sounds, a rhythm game played with the D-Pad
- **From Below**: Admittedly this is just Tetris, but it has a twist, and a lot of polish
- **Lunar Limit**: Fun arcade style action as it makes twin-stick shooting fun with the NES' control limitations
- **Star Evil**: Action 52 parody game that turns into an esoteric adventure
- **Streemerz**: Another Action 52 parody/"remake", highly polished and interesting platformer control scehme

## Homebrew Chronology

I wasn't sure the best way to organize my complete list, but decided on the order I played them. I started out with _most_ of the NES games available on RHDN, in approximate chronological order, as they make up about half of all homebrews on the site. I skipped some that appeared to be ports and demakes of games for other systems, as I'm interested in what people came up with. As I went on, I also was more inclined to skip clones of basic games (think stuff like Tic-Tac-Toe).

### RHDN NES 2000s and earlier

The thing I found in this first decade and change is most of the games are very primitive and minimal. They lean towards arcade-style gameplay and/or implementations of common generic games. A lot of them have incomplete sounds and music or none at all.

#### Froggy 1K

This is a very very VERY basic Frogger clone. Unless I'm missing something, it's just a single level, which takes place oddly on a very small portion of the screen. There's no sound and when you win or lose the game it just freezes. 

#### Galaxxon: The Third War

I lucked out that it didn't take long to find a passable NES game. Galaxxon is a vertical shmup, the kind where you fly high over a landscape, much like... games I've played before, but can't think of by name. Oh, 1942? This genre isn't really my forte, but Galaxxon seems fairly forgiving so that's a plus in my book. The main gimmick around this one is rather than picking up new weapons, you increase the number of shots you can have on screen at a time (starting only at 1). There's also some kind of timer that if you hit 0 the wave might restart or you might go to the next level.

It's not quite officially licensed game quality, but the graphics, sound/music and mechanics are a big step up from most of the stuff I played in this batch of hacks. It even has some cool stuff like parallax, faked cloud transparency (you can see ships underneath) and wraparound in both axes. On the downside, I find the shooting and movement to feel a bit slow, enemies are pretty basic and it did crash on me once.

I read the manual after the fact, so it is something I should revisit now that I understand it better. Apparently the goal is to shoot enough ships in the time limit to advance, and I also missed that I could use smart bombs. The manual is actually depicted like an NES one too, and it includes a recap of the (fictional?) first two Galaxxon games, plus a guide for breathing fire in real life.

#### The Game

This is something like Pong if instead of controlling the paddle, you control a ball trying to hit a paddle that's constantly moving up and down. And instead of a ball, it's a bullet; instead of bouncing off the paddle you pass through it and wrap back to the start. You get points for hitting the paddle but lose a life if you miss it. The most interesting thing about it is the variable difficulty (changing the bullet speed, paddle speed and paddle size), but it's too basic.

#### Grave Digger

As I look at the screenshot for this one again, it solidified that it was bugged when I played it, which is unfortunate since it looked fairly interesting. I don't know if there is a name for this, but it's based on a type of puzzle I've seen in games before. You have a grid full of gravestones, and I presume the objective is to get them all flipped, but you can only flip several at a time in a cross pattern. I was able to flip the graves, but my player character who is supposed to move around to pick the section you want to flip was nowhere to be found, so I had no idea what was going on.

#### Manhole

This reminds of a Game & Watch game, perhaps even of the same name. There are characters that run around the scene, and four holes they can drop down, and you have to appear over the hole at the right time to hold up a manhole so they can walk across. I was a little confused by the controls on this one, and it gets difficult fast.

#### Masmix

I would describe this as sort of like Pac-Man, but only in the very loosest sense. It's a maze where you have to run over items to win, though they are asymmetrical areas with more open space and fewer "dots" than Pac-Man. There are enemies to avoid that are just big weapons that move around, and it was hard to discern if they actually have AI or just go randomly. They also disappear after the second of the game's four levels.

#### Mouser 2

I'll give some credit to this one, because it holds the distinction of the oldest NES homebrew on RHDN, and I'm sure in 1997 (or even now) it couldn't have been easy making this stuff. The goal is to grab pieces of cheese while avoiding collisions, as a mouse that moves at constant speed in the last direction you pressed. Not sure if this was a bug or the game is unfinished, but it would just keep restarting the second level after I got a certain piece of cheese, so that is where my journey ended.

#### Munchie Attack

A high score game where you appear as a floating mouth, flying around as food and weapons fly across the screen from the right. You get points for food and lose life for hitting weapons, and the flying objects gradually get faster. Simple arcadey concept that's fairly fun, but the basic graphics and lack of music will make it hard to go back to this one.

#### NESnake

This is the classic game Snake. I was most interested in this one to see how it would handle a long snake due to the sprite flickering limit - the answer is that all but the head of the snake is rendered as a "tile" rather a "sprite". I'm far from expert level hacking yet, but I think there would be a deceptive complexity to pulling that off on the NES, so it's nice the game is functional. The only bug I saw was that the "food" can spawn on your snake tail, but it just means waiting a little more for it to clear away. The graphics are very simple, with the snake and most obstacles being made up of single color squares. It has a good amount of levels too; I'm not sure how many, but I had to be on my 10th or so when I gave up.

#### Solar Wars

A high effort homebrew that feels unfortunately wasted on its guesswork-based gameplay and two player limitation. I'd describe this as like Worms, except it's just one unit (a tank) per side. It _can_ be played with one player, so I at least got the idea, but since there is no CPU opponent the one-player mode is more like a controller pass mode. You take turns moving your tank and selecting a shot trajectory to try to fire one off to hit your opponent. The game even has multiple stages, and I noticed destructible terrain in the limited look I gave it. The main problem is a lack of a shot preview, so it just feels like guessing.

#### Putt Putt

A top down putting game where you pick a direction to aim the ball and time your hit with a power meter. Not a bad concept, but has very minimal graphics and only two levels.

#### Pegs

Yet another game that's a puzzle I've seen before, usually in physical form. You set up a triangular board with pegs and one open slot, trying to jump pegs to remove them until you have as few pegs as possible. That's it, though the graphics and sound are decent on this one.

#### STING

This is sort of like Asteroids in how you control your ship by pointing in a direction and thrusting. Even looks kinda like it too; the graphical style is pretty pre-NES. The twist on it is that you are navigating through vertical levels, trying to pick up cards before you can go through a portal to the next level. It's fairly novel but got too difficult too fast for me.

#### Fighter F-8000

Promising looking vertical shooter that was unfortunately plagued with severe graphic loading glitches and slowdowns when I played it. The aesthetic has a sort of clean, MS Paint-y look to it that reminded me more of a Flash game than NES.

#### Wraith 

Two level long vertical shump with a high emphasis on obstacle avoidance. It looks decent but the slow movement of the ship and wonky collision detection don't mesh with the level design. Enemy ships often don't shoot until you're so close to them that there's no time to avoid it. The sound is partly complete, but this is the kind of game where the lack of sound and visual feedback hurts more than some of the other games here without sound.

#### NESnake 2

This is the sequel to NESnake, so it's pretty simliar, but has more elaborate graphics and music. There are multiple difficulty levels that unlock as you go, and it has a two player mode. It also introduces some extra power ups and ways to change the level. But still, it's just Snake, and I got bored before finishing all of it. I also am still not a big fan of the one-way walls, which are a bit hard to parse in the heat of the game.

#### Falldown

Yet another high score type game, in which you control a ball that rolls around ascending rows of random blocks. Each row has one or more gaps in it. The goal is to keep the ball on screen basically - roll down fast enough to avoid getting pushed off the top, but don't drop down off the screen. It's decent enough, but gets old fast, and there's no music.

#### D-Pad Hero 

This game closes out the underwhelming 2000s of RHDN homebrews; would the decade go out with a bang and hope for what's to come? Sort of! This is a cool homebrew that I'm terrible at. It's a rhythm game played with the NES controller, complete with 8-bit versions of songs from Guns N Roses, Daft Punk, Michael Jackson and a-ha. My big struggle was trying to hit right and B at the same time (or left and A); for some reason it just didn't feel right. But the game doesn't seem to fail you mid song like actual Guitar Hero, and even includes a "Listen" option for the songs so you can watch how they'd look played perfectly. I also appreciate that it actually mutes the channel when you miss a note.

### RHDN NES 2010-2019

#### D-Pad Hero 2

Well what do you know, the first game I played for the next decade is a follow-up. I thought this one looked good with it's 3Dish note scroll that comes at you, but I had an even tougher time. For one thing, the notes seem like they decelerate towards the buttom prompts, which is confusing for timing. I also don't like how it incorporates the select button as a note. It requires you to unlock songs as you go now, and failing a song is possible. There are some little homages to Mega Man and THPS here. It has difficulty levels now too, but even on Beginner it was too much for me. Still a cool technical piece with not just the music but now the note scroll.

#### NES Virus Cleaner

A top-down, move the character through the space collecting items while avoiding obstacles type game. It's okay, the character doesn't feel like it moves quite as precisely as it should. I couldn't get very far.

#### Thwaite

I feel like this is based on a famous Atari-ish era game, but the name escapes me. The goal is to defend the houses by launching fireworks from the ground at descending missiles. You move a cursor around to pick a destination for the firework to explode, which is a little difficult with a d-pad, but the docs for the game say it supports a SNES mouse. Many of these homebrews I've played are arcade-like in a very basic sense, but this one is more accurate with the arcade style level scaling. That also means it's very hard; it says the objective is to get through seven nights (which each consist of multiple rounds), and I couldn't even make it through one.

#### Forehead Block Guy

Not sure how to describe this one, it's sort of like SMB2 in that you throw a block at enemies, except you don't have to pick the block up, it just respawns repeatedly over your head. The stages are single screens and you have to throw the block at enemies, then touch them while they're stunned until you clear them out and it goes to the next level. Okay concept but has some weird collisions and confusing enemy spawns.

#### Lawn Mower

Decent concept game with decent graphics and music, but poor execution. It's a top down game where the goal is to mow all the tall grass on the screen, basically you just control the lawn mower and try to go over every spot necessary. The wrinkle in it is that you very quickly lose fuel and have to pick it up as it randomly spawns on the screen. The arbitrary nature of the fuel spawns makes it hard to learn any real strategy for this.

#### Zooming Secretary

This is I guess something like Burger Time, a single-screen, wrapping-screen arcade game with ladders and platforms. You play as a secretary who has to learn a subject from a file cabinet, then answer a call related to that subject, but there are multiple phones going off and you can only learn one subject at a time. Of course you have obstacles like annoying types of coworkers. Amusing concept, and well-made, though a well-worn style of game.

#### Mine Shaft

Similar concept to Falldown - descend a randomly appearing series of platforms, but don't fall off - but better. I'm not sure if the platform spawns are always fair, but it more or less works. There is a little bit of strategy because you additionally have a health meter, with red platforms that take away your health and blue ones that replenish it, plus springs and conveyor belts. Graphics are pretty basic but it does use parallax.

#### PogoCats

Apparently these are not the animal cats, but the 50's slang - your playable characters (no gameplay difference that I can tell) are greaser and pinup girl. It's a Doodle Jump clone. There are different types of platforms and power ups and obstacles. Plays pretty well for the most part, though I had some weird collision detection sometimes. It also didn't seem like it got harder as it goes on - it doesn't _repeat_ per se, since the platforms are random, but seems like the same algorithm for the entire game.

#### Streemerz

I almost didn't want to include this one, since I saw the word "port" in its readme. A port of what, I had no clue. Turns out, it was a game in the notorious Action 52. I looked a video up of the "original" _after_ deciding to play regardless, and it was totally fair of me to play it, since it's much more like its own game that merely took the concept and ran with it. It's a platform game where you can ascend only by shooting a streamer at a diagonal angle, sort of like a grapple. There's a little "bounce" to your character when you reach the hook point, which can be annoying sometimes, but also seems to be a deliberate part of the challenge as the game goes on. I didn't get that far as I'm just sampling things for now, but this is by far the best one I've played yet, by virtue of being the first one that doesn't play like a simple arcade game. It looks like there could be frustrating moments to it, but the control is pretty novel and has some nice platforming sequences.

#### Driar

And now back to the arcade style games, though a pretty nice one. Driar is a single-screen platformer where you collect all the stars to advance to the next level, but have to avoid enemies. Each level is a totally new layout and visual style, so I don't mean it's _that_ primitive when I say arcade style. At times I thought it relies more on tight jumps where it should be relying on tricky enemies instead, but I haven't seen all 38 of the advertised levels. Certainly is still very playble either way.

#### Blade Buster

Vertical shmup that could almost be mistaken for a professionally made game, if not for what appears to be a single two minute-long score atttack mode as the entire game. But the graphics and music are very impressive. Compared to the earlier shmups in this list, it is much more of a bullet hell, but your ship also has the maneuverability and fire rate to match.

#### Snail Maze

I've used the term "maze" in describing some games here, but this one is the most straightforward type of maze, like the kind you would find in a physical puzzle book. The "twist", if you can call it that, is they have rather unforgiving time limits on the maze and you can't pause. I could pause the emulator, but then that might as well be the same thing as the puzzle book.

#### Kill Your F'ing Friends

Four player fighting game. I don't know why I downloaded this, thought I'd see if it had CPU players. May very well be fun with other people, but when I played it, they just stood there since they aren't being controlled. It does have special moves in it, but it's a bit awkward since it's a top down view. So if you try to press down and B for a move you also end up moving below your opponent.

#### Magic Floor

I don't understand this game at all and there are no instructions. You move a ball around a big grid of tiles of varying colors. I think there is some rule that you can only move along same colored tiles generally, and if you press A sometimes it lets you jump over tiles. But there are locations where you can make an "unexpected" move and the square will show an arrow pointing in that direction. I think the goal is to uncover all the arrows in the leve, but I really can't tell if there's some kind of logic to this or it's just a guessing game.

#### Inversion

Interesting puzzle platformer concept, but gets annoyingly difficult rather quickly. The premise is you "invert" the level to change almost everything interactable with it on or off. You need to flip switches, etc. to open the door out of the level, but avoid obstacles, and also avoid inverting yourself into a trap if you aren't careful. It's also entirely grayscale, which I've thought could be a cool concept for an NES game, but the graphics are basic.

#### Double Action Blaster Guys

Another single screen wrapping game. It's a platformer where you go around jumping and shooting enemies. The fundamental flaw is the movement is a little too fast and the enemies are erratic, it just doesn't feel like the levels were thought out much. But it's loaded with features, like two player mode, selectable difficulty and even a level editor. It has a limited level select, so it was nice I could skip to a later one, but it was more of the same compared to early levels.

#### Sgt. Helmet - Training Day

A top down military action/adventure game, which reminds me of countless NES games that I can't actually name because I never _really_ played any of them. I was mostly with this one until I got to the end of the mission (the goal being to pick up five bombs and plant them at the supercomputer at the end) and it asked me to go back to the start. The game consists of multiple screens that are a bit maze-like; not necessarily tricky, but tedious. The way it goes is you need to pick up keys for the doors along the way, and there's a good chance you'll go up a screen and find it's a dead end, then have to go back and take the other fork in the path. Then of course when you have to reverse this, it plays out again. There are enemies in the game but they often spawn in areas that don't give you a good distance or angle to shoot them safely.

#### MillioNESy

A Who Wants To Be A Millionaire inspired game with trivia on NES games. I was a little surprised not to see any trivia/game show type games until this point, as they would seem pretty easy to make, and are generally fun enough. This one even has lifelines in it. My main complaint about this is that the questions seem to be totally random without a difficulty curve, and it didn't take long for me to see a repeat.

#### Lan Master

Grid puzzle game that I guess is like Pipe Dream. Each puzzle has a series of computers and cables at various angles laid out, and the goal is to rotate them so that all the computers connect. Pretty fun and challenging; I flamed out early due to the time limits, but might revisit.

#### Chase

Another sort of "collect everything in the maze to advance" type game. This one is the closest to Pac-Man yet, though I wouldn't call it a clone, with a much more colorful style and the fact you don't move around automatically. With only five short levels, it feels more like a demo of NES hacking, but to be fair its own author even said as much.

#### Rock Paper Scissors

A dropping columns puzzle game with rock, paper and scissors. I thought this was going to be like Yoshi's Cookie or something but from what I played it only drops one piece at a time. So basically if you drop a paper, wait for a scissors to drop to clear it, etc. There is maybe some slight strategizing to clear a big amount at once, and the... silver balls? that sometimes appear throw a wrinkle in the mix, but it was a little boring.

#### Paint or Draw

A simple drawing app, which I'm not sure really counts as a full game, but it was categorized as such, so I downloaded it. It mostly interests me as something I might want to look into how it was done at some point.

#### Purple Cape Man

An action platformer starring a guy who looks like a bad NES Batman cosplayer. It's playable but pretty lacking in the visuals department. The gameplay is basic, with the most interesting thing being some jumps that take advantage of its floaty physics, but for the most part it's just simple platforming and enemies that stand in one place and shoot. Has some abrupt transitions (i.e. enemy deaths and level transitions).

#### Ralph 4

Wow, this one is tough. It's a top down game where you move through a series of rooms, but they have giant teddy bears moving all over, and if you touch one you get kicked back to the start of the room. Decently fun but there are some very small safe windows after a while.

#### Galaxy Patrol

Talk about basic. This is a game where you "fly" through a star field, except your ship stays near the top of the screen and you can only move left or right, while stars come at you from the bottom. Interspersed with the stars are fuel containers. The goal is simply to avoid hitting a star or running out of fuel. The difficulty seems to plateau and leave you at the mercy of RNG, or I just didn't make it far enough to see if things changed.

#### Snowball Blaster

This plays like an LCD console game with Atari graphics and music. All you do is control a triangle that can go into one of three positions (left, center, right). "Snowballs" (just circles) come at you from the same three sets of positions. Eventually they start coming two at a time but... this is a game you'd only lose because you got bored first.

#### Falling

A game where you endlessly fall and avoid random obstacles while trying to get random objects that give you points. Wouldn't be amazing but would be better if the random spawns felt a little more structured.

#### Star Evil

Apparently this is another remake of an Action 52 game, except... not really. I don't want to spoil it but it takes an interesting turn that makes it maybe the most original entry on here yet (but certainly with some things in the realm of NES games). Unfortunately I got stuck for the time being.

#### Lunar Limit

This game is actually by the same developer as Star Evil (and Ralph 4). It's a twin stick shooter on a console that doesn't have twin sticks, but it's got a control scheme that I'm not sure any of the other attempts on the console used. Instead of incomprehensible button combinations like in Smash TV, you constantly fire and can rotate your gun (which is actually the moon, orbiting you, the Earth) clockwise or counterclockwise with A and B. It has a few power ups you can pick up and use with select. Another interesting thing about the control scheme is it gives you more than 8 directions to fire, which is subtly impressive.

#### Chicken of the Farm

This is another type of platformer game where you navigate one "screen" (though it can scroll) at a time, searching for keys to make some sort of portal or whatever show up so you can go to the next level. Pretty decent, I like the way the from jumps in a little arc, but on only the first world (each of which has multiple levels) the jumps already get pretty crazy.

#### Simplistic

This one is true to its name, but I'm not sure it's really like anything I've played before. Unfortunately it's two players, but I could see the mechanics. You play as a blue circle and a red square comes at you repeatedly (this is happening on a line with simple shapes). If you press A with the right timing when the square is close to you, the game warps you ahead a little bit. Otherwise the square pushes you back to the start. I think it's meant to be a competition with the second player to see who can get to the end fastest. But really, it's just a timed button press game.

#### Nova the Squirrel

Kirby/Mario clone mix. This one has far too many levels for me to sample now, but seems like an actually complete and well thought out game. I felt like it was a bit slow to give me copy abilities, at least in a couple starting levels. The control doesn't feel _amazing_ but it gets the job done. However, I really dislike the aesthetic of this game which doesn't look very NES-like.

And this, it turns out, is my last game of the 2010s, because the remaining one I realize is just a short story displayed in Russian, so no need to download it. The decade's hacks still hold on to a lot of arcade-style tropes, but I can see that the depth and quality is overall increasing. And now, on to the current decade; hard to believe I can still play NES homebrews that are only a few years old or less.

Edit: I went back to it and actually think the controls are the fatal flaw keeping me from completing it. It has a run button like Mario, but the acceleration when you run is so uncomfortable that it hinders the experience.

### RHDN NES 2020-2024

#### Kid Funky

A decent start to the decade, Kid Funky is weirdly more fun than its minimum visuals, lack of any sound and slow, floaty platforming would suggest. I think it's because it does a good job with the essentials of a platforming challenge, even if it is pretty rudimentary simple movement and jumps. However, the penalty for dying in it is rather punishing, so it's something I played with heavy rewind.

#### From Below

Normally I skip over clone games, but this clone of Tetris offered a twist. Aside from bringing in modern Tetris mechanics, it offers a couple game modes where a Kraken will come from the bottom of the screen and push one column of blocks up. It has two modes where you can do this, operating on a timer or based on each turn you take, which both add a lot of challenge. This game also looks and sounds almost like a professional game. If I did have some complaints, and I only say this _because_ the game is so well made, I wish the blocks had some more colorful visuals, and for there to be a different music track for each mode. I also was a little disappointed you couldn't hold pieces, since the select button is unused.

#### Carpet Shark

A game where you play as a shark "swimming" underneath a carpet and have to pop out at the right time to eat people. It's okay, the timing and positioning for eating people was a bit awkward to understand at first. You take damage if you don't do it right. The bosses are also pretty annoying.

#### The Ninja of the 4 Seasons

I didn't even need to be paying attention to the uploader to tell this was made by the same person as Kid Funky, as it's like a bit of a successor. In spite of the name, there sadly isn't any ninja combat, as it's again just run and jump, but it does a better job. It plays faster and those cruel jumps don't really show up until the final season. The graphics are still pretty simple but quite improved, and it has a song playing and _some_ sound effects. There are some parts that are still jank but it's playable.

#### Plummet Challenge

An interesting concept, it's an unlosable high score game. You go around single screen levels, jumping and falling down, with the goal to be able to get as many points from gems as possible. You do a weird sort of tumbling if you fall far enough and once the tumbling starts you "die" when you hit something, but it really just takes you to the next screen.

#### ROOMS

A single screen platformer with some difficult to time jumps through and around obstacles. They are well made for what they are, but the game is pretty basic. For how many levels there are it would've been nice to see more obstacle types and palette changes. It's the sort of game that plays out like jump over this thing, now jump over two of them, now jump over two of them that are moving, etc.

#### Cur Manor 

A top down action/adventure game that is pretty unforgiving. You go around searching for keys across multiple screens and trying to avoid or shoot down the enemies in your way. The enemies that can shoot back are really annoying, you pretty much have to lead your shots on them as they walk up or they will kill you most of the time. You die in one hit, though I found a vest item that gives you an extra one. But still, even after figuring out the approach on some of these enemies, it was mostly just frustrating.

#### The Arm Wrestling Classic

I have to admit this one is charming, it's like Punch-Out but with arm wrestling and button mashing. It prompts you with the button to press on screen, but it uses every available button on the controller, which is a bit of a fatal flaw. Though I didn't play with a proper NES controller, a d-pad isn't really meant to be mashed the same way as a face button can be. I also wish there was a little bit more of a cue for when the prompted button is about to change, as you'll be penalized for the wrong press.

#### Deth Complex 2

This platforming adventure game has a cool horror aesthetic and music, but it's sadly one of the buggiest I've played in the entire list. For example, when you press the attack button, you don't actually attack until you release it. This also causes a weird thing where if you hold down turbo attack, it just looks like you're keeping the attack out. You don't have invincibility frames after getting hit. I only made it a few screens in where I couldn't figure out this part where it seems like you are able to double jump through a certain section, which naturally was buggy as well.

#### Astro Smash N Blast

A very simple single screen space shooter (sort of in the vein of Space Invaders, but not exactly). Also very difficult, the projectiles come way too quickly and are small targets. I didn't really enjoy this one.

#### Space Mutants

A game that looks a lot like Deth Complex 2... which makes sense, as I realized later it's the same creator. This one is a bit more sci-fi, but a similar gameplay concept. Some of the bugs are a little smoother, like the attack capability, but I found myself dying often due to limited invincibility frames. There's an annoying enemy early on that takes a lot of hits but it has a tendency to kinda float around and end up on top of you, which is hard to avoid because you don't move super fast. 

Unfortunately, a disappointing end to this set of RHDN NES Homebrews, which also is likely the end of them on this site entirely. Even for ones in the early 2020s I started seeing more itch.io links, so I guess that's the popular landing spot for these now, and maybe something I will check out in the future...
