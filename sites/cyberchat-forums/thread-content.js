/**
 * Thread Post Content
 * Detailed post content for forum threads
 */

// Post structure: { user, date, content, editedBy, editedDate }

const THREAD_POSTS = {
    // Thread ID 13: "HELP!! Windows 98 won't boot after installing RealPlayer!"
    13: [
        {
            user: 'momof3',
            date: 'Dec 29, 1999 2:15 PM',
            content: `Hi everyone!

I hope someone can help me. I just tried to install RealPlayer so I could listen to some music online, and now my computer won't start up properly! It just shows a black screen with some white text that says "HIMEM.SYS" error or something like that.

My son usually helps me with computer stuff but he's at college. I'm really worried I broke the computer!! It's my husband's work computer and he needs it tomorrow morning!!!

Please help!!!

Thank you,
Linda`
        },
        {
            user: 'codemonkey',
            date: 'Dec 29, 1999 2:42 PM',
            content: `Can you tell us the EXACT error message? That would help a lot.

Also, what version of Windows 98 are you running? (First Edition or Second Edition?)`
        },
        {
            user: 'momof3',
            date: 'Dec 29, 1999 3:15 PM',
            content: `Oh dear, I turned it off because I was scared. Let me try to turn it back on and write down what it says...

*goes to check*

OK it says:

"ERROR: HIMEM.SYS has detected unreliable XMS memory at address 123ABC00h"

And then something about "XMS Driver not installed"

I don't know what version of Windows it is? How do I check? The computer is a Compaq from last year if that helps.`
        },
        {
            user: 'techmaster99',
            date: 'Dec 29, 1999 3:47 PM',
            content: `Don't panic! This is actually pretty common with RealPlayer installations.

The problem is that RealPlayer modified your CONFIG.SYS or AUTOEXEC.BAT files and messed up your memory management.

Here's what you need to do:

1. When you see that error, press F8 repeatedly as the computer starts
2. Select "Safe Mode Command Prompt Only"
3. Type: EDIT C:\\CONFIG.SYS
4. Look for a line that says DEVICE=C:\\WINDOWS\\HIMEM.SYS
5. Make sure it's the FIRST line in the file (very important!)
6. Save and exit (Alt+F, then X, then Yes)
7. Reboot

Let me know if that works.

-TM99

P.S. You might want to use Windows Media Player instead of RealPlayer. It's more stable.`
        },
        {
            user: 'momof3',
            date: 'Dec 29, 1999 4:23 PM',
            content: `Oh my goodness, that sounds complicated! I'm not very good with DOS commands. Is there an easier way?

Also, I don't know how to "type" anything when the computer won't start. Do I need a special disk?`
        },
        {
            user: 'webwizard',
            date: 'Dec 29, 1999 5:12 PM',
            content: `Linda, don't worry! It's easier than it sounds. Let me walk you through it step by step:

1. Turn on your computer
2. As soon as you see ANYTHING on the screen, start tapping the F8 key (top of your keyboard) over and over
3. You'll see a menu with options. Use the arrow keys to select "Safe Mode Command Prompt Only" and press Enter
4. You'll see a black screen with white text and a C:\\> prompt
5. Type exactly: EDIT C:\\CONFIG.SYS (and press Enter)
6. You'll see a blue screen with text in it
7. Use arrow keys to move to the line that says HIMEM.SYS
8. If it's NOT the first line, cut it (Ctrl+Y) and paste it at the top
9. Press Alt, then F, then X, then Y to save and exit
10. Type: EXIT and press Enter
11. Computer should restart normally

You can do this! Just take it slow.

-WebWizard`
        },
        {
            user: 'momof3',
            date: 'Dec 29, 1999 6:45 PM',
            content: `I tried it but I couldn't get the menu to come up. I kept pressing F8 but nothing happened! Just the same error.

My husband is going to be so upset with me... :((`
        },
        {
            user: 'retrogamer',
            date: 'Dec 29, 1999 7:22 PM',
            content: `Linda - try this instead:

Do you have your Windows 98 CD? You can boot from that and fix it.

1. Put the Windows 98 CD in the drive
2. Restart computer
3. It should boot from CD (if not, you might need to change BIOS settings)
4. Choose "Start computer with CD-ROM support"
5. At the A:> prompt, type: EDIT C:\\CONFIG.SYS
6. Follow the same steps as before

Alternatively, if you have a Windows 98 Startup Disk (floppy), use that instead.`
        },
        {
            user: 'flameking',
            date: 'Dec 29, 1999 8:15 PM',
            content: `lol who still uses RealPlayer in 1999? That software is GARBAGE. This is what you get for not reading the manual.

Next time maybe don't install random stuff if you don't know what you're doing??`,
            editedBy: 'phoenix_rising',
            editedDate: 'Dec 29, 1999 8:47 PM',
            editNote: '[Edited by Phoenix_Rising: Please be respectful to all members]'
        },
        {
            user: 'phoenix_rising',
            date: 'Dec 29, 1999 8:48 PM',
            content: `@FlameKing - Warning issued. Be helpful or don't post.

@MomOf3 - We're here to help! Don't worry about FlameKing. Have you been able to try the CD method?`
        },
        {
            user: 'momof3',
            date: 'Dec 29, 1999 9:34 PM',
            content: `Thank you Phoenix_Rising! Everyone here has been so kind (well, most people anyway).

I found the Windows 98 CD in my husband's desk drawer! I'm going to try the CD method now. Wish me luck!`
        },
        {
            user: 'momof3',
            date: 'Dec 29, 1999 10:52 PM',
            content: `UPDATE: I DID IT!!! The computer is working again!!!

I followed RetroGamer's instructions and it worked! The CONFIG.SYS file had the HIMEM.SYS line in the middle, and I moved it to the top like you all said. When I restarted, Windows loaded perfectly!

Thank you SO MUCH to TechMaster99, WebWizard, RetroGamer, and everyone else who helped! You are all lifesavers! My husband will never know anything went wrong! :)

I'm going to stick with Windows Media Player from now on!

Gratefully,
Linda`
        },
        {
            user: 'techmaster99',
            date: 'Dec 29, 1999 11:43 PM',
            content: `Glad it worked out, Linda!

For future reference, ALWAYS make a backup of your CONFIG.SYS and AUTOEXEC.BAT files before installing new software. You can just copy them to CONFIG.BAK and AUTOEXEC.BAK.

Also, create a Windows 98 Startup Disk if you haven't already (Add/Remove Programs > Startup Disk). Keep it in a safe place for emergencies like this.

Welcome to the forums!

-TM99`
        }
    ],

    // Thread ID 2: "Y2K Countdown Thread - WHO'S STAYING UP?!"
    2: [
        {
            user: 'techmaster99',
            date: 'Dec 25, 1999 8:15 AM',
            content: `So who's planning to stay up for the big moment? New Year's Eve 1999 -> 2000!!!

I'm keeping my computers running just to see if anything weird happens. Got my Pentium III, my old 486, and my Linux box all ready to roll over to 2000.

Anyone else doing anything special? Parties? Tech experiments? Y2K bunker? :D

-TM99`
        },
        {
            user: 'gamegod',
            date: 'Dec 25, 1999 11:42 AM',
            content: `HELL YES! I'm having a LAN party!

12 people coming over, we're gonna frag in Quake III until midnight, then watch the ball drop, then KEEP FRAGGING until dawn!

Pizza, Mountain Dew, and gib explosions. That's how you welcome the new millennium!`
        },
        {
            user: 'skepticalone',
            date: 'Dec 25, 1999 2:34 PM',
            content: `You all better hope nothing happens when the clock strikes midnight...

I've been warning people for MONTHS about Y2K. Government computers, banking systems, power grids - they're all going to crash. Mark my marks.

I've got canned food, bottled water, and a generator. I suggest you all do the same.

Check out my Y2K preparation site: <a href="../../../y2k-tech-watch/index.html" target="_blank">Y2K Tech Watch</a>

And for the REAL truth about what the government isn't telling us: <a href="../../../truth-seekers/index.html" target="_blank">Truth Seekers Network</a>

THE TRUTH IS OUT THERE.`
        },
        {
            user: 'codemonkey',
            date: 'Dec 25, 1999 4:18 PM',
            content: `@SkepticalOne - Dude, relax. Most critical systems have been Y2K compliant for months now. The media is just hyping it up.

That said, I AM curious to see if any old legacy systems have issues. I work with some COBOL code at my job and we've been patching stuff for a year.

I'm staying up just to see what happens. More out of professional curiosity than actual concern.`
        },
        {
            user: 'retrogamer',
            date: 'Dec 25, 1999 6:47 PM',
            content: `Kids these days worried about Y2K...

*laughs in BBS*

In 1985 people thought computers were going to become sentient and take over the world. In 1995 people thought the internet was going to destroy society. Now everyone thinks computers are going to forget what year it is.

Technology has been overhyped and overdramatized since the beginning. It'll be fine.

That said, I'm definitely staying up. Gotta ring in the millennium somehow! Maybe fire up the old Atari 2600 for old times sake.`
        },
        {
            user: 'animelover2000',
            date: 'Dec 26, 1999 10:23 AM',
            content: `I'm going to stay up watching anime! Planning to marathon Cowboy Bebop from start to finish. Should end right around midnight!

Then I'll watch the new year coverage from Japan (they're ahead of us time-wise), THEN watch it happen here in California.

Double millennium celebration! ^_^`
        },
        {
            user: 'xxdarkangelxx',
            date: 'Dec 26, 1999 3:15 PM',
            content: `im prolly just gonna be on aol chat all nite... my parents r having a lame party downstairs

maybe the world WILL end at midnite and we'll all be free from this mortal prison

...or not lol idk

~*~darkness~*~`
        },
        {
            user: 'momof3',
            date: 'Dec 27, 1999 9:12 AM',
            content: `We're having a family party! The kids are excited to stay up until midnight (usually they have to be in bed by 9!).

I'm a little worried about Y2K after everything I've seen on the news, but my husband says it's all going to be fine. We did stock up on some extra supplies just in case though!

Happy New Year everyone! Let's hope the computers don't break! :)`
        },
        {
            user: 'webwizard',
            date: 'Dec 27, 1999 2:45 PM',
            content: `I'll be updating my website at midnight! Going to add a special Y2K celebration page with JavaScript countdown timer and everything.

Already tested it - the countdown works perfectly into 2000. JavaScript doesn't have Y2K bugs!

Might crack open some champagne (or sparkling cider) when the clock hits 00:00.`
        },
        {
            user: 'flameking',
            date: 'Dec 28, 1999 11:38 AM',
            content: `Y2K is a HOAX perpetrated by tech consultants to make money.

NOTHING is going to happen. NOTHING.

All you people "preparing" are sheep. Wake up!

I'm going to bed at 10pm like usual because I'm not a sucker.`
        },
        {
            user: 'techmaster99',
            date: 'Dec 28, 1999 4:21 PM',
            content: `@FlameKing - It's not a hoax, but you're right that the danger is overblown. The reason nothing WILL happen is because thousands of programmers spent the last 2 years fixing the bugs.

It's like saying "Nobody got smallpox this year, therefore vaccines are a hoax." The vaccines are WHY nobody got smallpox.

Same logic applies here. Y2K won't be a big deal BECAUSE we fixed it.

Anyway, who's online at midnight? We should all check in!`
        },
        {
            user: 'phoenix_rising',
            date: 'Dec 29, 1999 12:15 PM',
            content: `I'll be here! I'm planning to be logged into the forums at midnight to welcome in 2000 with you all.

In fact, let's do a roll call! Everyone who's online at 11:55 PM EST on Dec 31st, post in this thread!

It'll be a fun moment to share with the CyberChat community!

-Phoenix`
        },
        {
            user: 'gamegod',
            date: 'Dec 29, 1999 3:42 PM',
            content: `I'll try to post between Quake matches! LAN party is at my place so I'll have access to the forums.

This is going to be LEGENDARY.`
        },
        {
            user: 'napsterking',
            date: 'Dec 29, 1999 5:28 PM',
            content: `I'm downloading as many MP3s as I can before midnight, just in case Napster goes down from Y2K bugs lol

Got about 500 songs queued up. Should have them all by tomorrow night!

New millennium, new music collection!`
        },
        {
            user: 'linuxguru',
            date: 'Dec 29, 1999 7:14 PM',
            content: `Linux kernel is Y2K compliant. No worries here.

I'll be up working on some code. The year 2000 is just another day for UNIX systems. We've been counting seconds since January 1, 1970 anyway.

Besides, the REAL Y2K bug is in 2038 when the 32-bit timestamp overflows. But that's a problem for future developers lol`
        },
        {
            user: 'skepticalone',
            date: 'Dec 29, 1999 9:33 PM',
            content: `You all laugh now, but when the power goes out and banks lose all records of your accounts, don't say I didn't warn you.

I'll be in my bunker with my supplies. Good luck out there.

-SkepticalOne

THE TRUTH IS OUT THERE`
        },
        {
            user: 'retrogamer',
            date: 'Dec 29, 1999 10:08 PM',
            content: `@SkepticalOne - I've survived:

- The great BBS crash of '87
- The internet "will never work" predictions of the early 90s
- Windows 95 launch (THAT was chaos)
- The .com bubble (still inflating)

I think I'll survive Y2K just fine. ;)

See you all in the year 2000!`
        },
        {
            user: 'gamegod',
            date: 'Dec 29, 1999 11:47 PM',
            content: `LAN party is IN FULL SWING! We're taking a break at 11:55 to watch the countdown!

Someone just got fragged and knocked over a 2-liter of Mountain Dew. Floor is sticky but we don't care!

BEST. NEW YEARS. EVER.

WHO'S READY FOR 2000?!?!?!`
        }
    ],

    // Thread ID 50: "Cowboy Bebop is a MASTERPIECE"
    50: [
        {
            user: 'otakumaster',
            date: 'Dec 21, 1999 3:15 PM',
            content: `I just finished watching all 26 episodes of Cowboy Bebop and I need to talk about this with someone who understands.

This. Show. Is. PERFECT.

The animation, the music, the characters, the storylines - everything comes together into something transcendent. This isn't just anime, this is ART.

Spike Spiegel is the coolest protagonist ever created. The jazzy soundtrack by Yoko Kanno is revolutionary. Every episode feels like a mini-movie.

And that ending... episode 26... I'm not crying, you're crying.

「また、会いましょう」("See you, space cowboy...")

If you haven't watched Cowboy Bebop yet, WHAT ARE YOU DOING WITH YOUR LIFE?!

10/10. Masterpiece. Fight me.

-OtakuMaster`
        },
        {
            user: 'animelover2000',
            date: 'Dec 21, 1999 5:42 PM',
            content: `OTAKUMASTER YES!!!!! FINALLY SOMEONE WHO GETS IT!!!

I've been saying this since it started airing! Cowboy Bebop is legitimately one of the greatest anime ever made and I will die on this hill!

The fact that every episode stands alone but also builds this larger narrative... the way they blend genres (western, noir, sci-fi, comedy)... THE MUSIC...

Yoko Kanno is a genius. "Tank!" is iconic. "The Real Folk Blues" makes me emotional every time.

And can we talk about how GORGEOUS the animation is? Sunrise really outdid themselves. Every frame is wallpaper-worthy.

Episode 5 "Ballad of Fallen Angels" is cinema. CINEMA!

This is the anime I show people who say "I don't like anime" because it transcends the medium.

現代の傑作です！(A modern masterpiece!)`
        },
        {
            user: 'poketrainer99',
            date: 'Dec 21, 1999 8:23 PM',
            content: `my older brother watches this show! i tried to watch it but i dont get it??

its just a bunch of people flying around in space being sad? wheres the giant robots and transformation sequences?

i'll stick with Pokemon lol`
        },
        {
            user: 'otakumaster',
            date: 'Dec 21, 1999 9:15 PM',
            content: `@PokeTrainer99 - Not every anime needs giant robots! Cowboy Bebop is more sophisticated. It's aimed at older viewers who appreciate:

- Complex, flawed characters
- Philosophical themes (existentialism, loneliness, the past haunting you)
- Cinematic storytelling
- Jazz fusion soundtracks
- Mature themes without being edgy

No disrespect to Pokemon (I love Pokemon!), but Cowboy Bebop is operating on a different level. It's like comparing a Saturday morning cartoon to a Scorsese film.

Both are good! But one is art.`
        },
        {
            user: 'moviebuff',
            date: 'Dec 22, 1999 10:42 AM',
            content: `I don't usually watch anime but my friend convinced me to watch Cowboy Bebop and... wow.

This feels like if Blade Runner, The Good/Bad/Ugly, and Pulp Fiction had a baby and it was animated. The episode "Ballad of Fallen Angels" especially feels like John Woo meets Ghost in the Shell.

Is all anime this good? Or is Cowboy Bebop an outlier?`
        },
        {
            user: 'animelover2000',
            date: 'Dec 22, 1999 1:18 PM',
            content: `@MovieBuff - Cowboy Bebop is exceptional, but there are other masterpieces!

If you liked Bebop, try:
- **Neon Genesis Evangelion** (psychological mecha, VERY different from typical robot shows)
- **Trigun** (similar western/space vibe, more comedy but gets dark)
- **Serial Experiments Lain** (cyberpunk mind-trip)
- **Ghost in the Shell** (the movie, you mentioned it!)

But yeah, Cowboy Bebop is special even among great anime. Director Shinichiro Watanabe is a visionary.

Welcome to the addiction! ;)`
        },
        {
            user: 'xxdarkangelxx',
            date: 'Dec 22, 1999 4:37 PM',
            content: `cowboy bebop is ok i guess

i like the sad parts and the violence

spike is cool but hes not as dark as i want him to be

*~sadness~*`
        },
        {
            user: 'retrogamer',
            date: 'Dec 23, 1999 9:21 AM',
            content: `You anime kids and your "masterpieces"...

*grumbles in old man*

Fine, I'll check it out. My nephew keeps bugging me about it anyway. If it's as good as you say, I'll report back.

But it better not have any of that tentacle nonsense.`
        },
        {
            user: 'otakumaster',
            date: 'Dec 23, 1999 11:45 AM',
            content: `@RetroGamer - PLEASE watch it! I promise it's NOT that kind of anime!

Cowboy Bebop is mature without being gross. It's got:
- Badass gunfights
- Space dogfights
- Martial arts (the hand-to-hand combat is Bruce Lee level)
- A corgi named Ein
- JAZZ

No tentacles. No fan service. Just pure storytelling.

Report back after episode 5. If you don't love it by then, I'll eat my hat.`
        },
        {
            user: 'gamegod',
            date: 'Dec 24, 1999 2:15 PM',
            content: `The Cowboy Bebop video game for PlayStation is coming out soon in Japan!

Can't wait to import it. Hope it lives up to the anime!

Also, I heard rumors of an English dub. If it's good, this could be HUGE for getting anime into the mainstream.`
        },
        {
            user: 'animelover2000',
            date: 'Dec 24, 1999 5:33 PM',
            content: `@GameGod - English dub?! NOOOO!

Dubs always ruin the original vision! The Japanese voice acting is perfect, especially Kouichi Yamadera as Spike!

If they dub it, they better do it RIGHT. But honestly, subs > dubs FOREVER.

Watch it in Japanese with subtitles or don't watch it at all. That's my stance.`
        },
        {
            user: 'otakumaster',
            date: 'Dec 24, 1999 7:18 PM',
            content: `@AnimeLover2000 - Normally I agree with you, but I heard the English dub for Bebop might actually be good. Steve Blum is voicing Spike and from what I hear, he's nailing it.

Sometimes dubs work. Remember the Akira dub? That was decent.

I'll always prefer subs, but if the Bebop dub is quality, it could introduce SO many people to the show.

Imagine: Cowboy Bebop on Cartoon Network. That would change everything.`
        },
        {
            user: 'webwizard',
            date: 'Dec 25, 1999 10:27 AM',
            content: `I just added a Cowboy Bebop tribute page to my website!

http://www.geocities.com/webwizard/bebop.html

Got some animated GIFs, episode guide, character bios, and MIDI files of the soundtrack!

Check it out! (Best viewed in 800x600 with Internet Explorer 5!)

-WebWizard`
        },
        {
            user: 'napsterking',
            date: 'Dec 26, 1999 3:42 PM',
            content: `Just downloaded the Cowboy Bebop soundtrack on Napster!

THE MUSIC IS SO GOOD!!!

"Tank!" is my new alarm clock song lol

Yoko Kanno is incredible. How have I not heard of her before?!`
        },
        {
            user: 'retrogamer',
            date: 'Dec 27, 1999 8:15 PM',
            content: `UPDATE: I watched episode 5 like you said.

...

Okay. OKAY. You were right.

That church scene with "Ave Maria" playing? The slow-mo action? The STYLE?

This is actually really good. I'm in.

You anime kids win this round.

*continues binge-watching*`
        },
        {
            user: 'otakumaster',
            date: 'Dec 27, 1999 10:33 PM',
            content: `@RetroGamer - I KNEW IT! Welcome to the crew!

Wait until you get to:
- Episode 12 & 13 (Jupiter Jazz parts 1 & 2)
- Episode 24 (Hard Luck Woman)
- Episode 26 (The Real Folk Blues part 2)

Bring tissues for the finale.

See you space cowboy... 🚀`
        },
        {
            user: 'animelover2000',
            date: 'Dec 29, 1999 10:32 PM',
            content: `This thread makes me so happy! Seeing more people discover Cowboy Bebop is like sharing a gift.

1999 has been an AMAZING year for anime:
- Cowboy Bebop
- Excel Saga
- Great Teacher Onizuka
- Hunter x Hunter
- Serial Experiments Lain

But Bebop stands above them all.

Can't wait to see what the year 2000 brings for anime! The future is bright!

「また、会いましょう、スペースカウボーイ。。。」

(See you, space cowboy...)`
        },
        {
            user: 'otakumaster',
            date: 'Dec 29, 1999 11:44 PM',
            content: `@AnimeLover2000 - Agreed on all counts!

You know what? In 20 years, people will still be talking about Cowboy Bebop. I guarantee it. This is the kind of show that becomes timeless.

Mark my words: Cowboy Bebop will be remembered as one of the defining anime of the late 90s and a gateway series for countless fans.

It's not just a great anime. It's a cultural landmark.

Now if you'll excuse me, I'm going to rewatch the whole series. Again.

3... 2... 1... Let's jam! 🎷

-OtakuMaster`
        }
    ],

    // Thread ID 45: "The Matrix changed cinema forever"
    45: [
        {
            user: 'moviebuff',
            date: 'Dec 20, 1999 8:42 AM',
            content: `I've seen The Matrix three times now and I can't stop thinking about it.

This movie has fundamentally changed what cinema can be. The bullet-time effects, the philosophical questions, the action choreography - it's all PERFECT.

"What is real? How do you define real?"

This movie is asking questions that most action films wouldn't dare touch. It's The Seventh Seal meets John Woo meets Neuromancer.

And can we talk about that SOUNDTRACK? Rage Against The Machine, Propellerheads, Rob Dougan... it's as revolutionary as the film itself.

The Matrix will be studied in film schools for decades. Mark my words.

What did you all think?

-MovieBuff`
        },
        {
            user: 'gamegod',
            date: 'Dec 20, 1999 10:15 AM',
            content: `DUDE. YES.

The lobby shootout scene is the greatest action sequence ever filmed. EVER.

I want a Matrix video game SO BAD. Can you imagine playing as Neo, doing bullet-time moves, flying through the air...

If they make it for Dreamcast I'll die happy.`
        },
        {
            user: 'techmaster99',
            date: 'Dec 20, 1999 1:34 PM',
            content: `As someone who works with computers, The Matrix is both awesome and hilariously inaccurate.

"Hacking" doesn't look like that. You can't just "download kung fu" into your brain. The whole "phone line as exit point" thing makes no sense.

BUT... I don't care. It's so cool that I forgive all the technical nonsense.

Also, the "computer code rain" aesthetic is now my screensaver.`
        },
        {
            user: 'skepticalone',
            date: 'Dec 20, 1999 3:47 PM',
            content: `The Matrix is closer to REALITY than you think.

How do you KNOW you're not in a simulation right now? How do you know THIS FORUM isn't just code in some alien computer?

The government doesn't want you asking these questions. They want you asleep. Complacent.

WAKE UP.

THE TRUTH IS OUT THERE.`
        },
        {
            user: 'retrogamer',
            date: 'Dec 20, 1999 5:22 PM',
            content: `@SkepticalOne - Please take your meds.

@MovieBuff - You're absolutely right. The Matrix is groundbreaking. But let's not forget it borrows HEAVILY from:

- Ghost in the Shell (1995)
- Dark City (1998)
- Blade Runner (1982)
- Neuromancer (1984)

Not saying it's not original! Just giving credit where it's due. The Wachowskis clearly love cyberpunk and anime.

Still an amazing film. Saw it twice.`
        },
        {
            user: 'animelover2000',
            date: 'Dec 21, 1999 9:12 AM',
            content: `@RetroGamer - THANK YOU for mentioning Ghost in the Shell!

The Matrix owes SO MUCH to GITS. The green code aesthetic, the philosophical questions about reality, even some of the action sequences.

If you loved The Matrix, you NEED to watch Ghost in the Shell. It came out in 1995 and it's basically The Matrix's spiritual predecessor.

Also check out Akira and Serial Experiments Lain for more mind-bending cyberpunk anime!

BTW I just updated my anime shrine with more GITS content: <a href="../../../anime-shrine/index.html" target="_blank">AnimeLover2000's Anime Shrine</a>`
        },
        {
            user: 'xxdarkangelxx',
            date: 'Dec 22, 1999 4:18 PM',
            content: `the matrix is so dark and deep

trinity is hot

neo is cool

i want to wear a black trenchcoat like him

~*~darkness~*~`
        },
        {
            user: 'codemonkey',
            date: 'Dec 23, 1999 11:45 AM',
            content: `The "woman in the red dress" scene is brilliant programming metaphor.

Neo is distracted by external stimulus (the woman) and fails to notice the actual threat (Agent Smith). It's like when you're debugging code and you focus on the wrong variable.

Also, the whole "humans as batteries" thing makes no thermodynamic sense, but I'll let it slide because the movie is awesome.`
        },
        {
            user: 'scienceguy',
            date: 'Dec 27, 1999 2:33 PM',
            content: `@CodeMonkey - You're right about the thermodynamics! Using humans as power sources violates basic physics. You'd get more energy from just burning the food you feed them.

The original script apparently had humans being used for PROCESSING POWER (like a biological computer network), which makes way more sense. But the studio thought audiences wouldn't get it.

Still a great movie though. Sometimes you have to sacrifice scientific accuracy for narrative clarity.`
        },
        {
            user: 'webwizard',
            date: 'Dec 28, 1999 9:15 AM',
            content: `I just added a Matrix tribute page to my website!

Complete with:
- Green "falling code" background (JavaScript!)
- "Red pill or blue pill" buttons
- Quotes from the movie
- Links to official site

Check it out! <a href="../../../webmaster-dave/index.html" target="_blank">My GeoCities Site</a>

(Best viewed in 1024x768 with Internet Explorer 5!)`
        },
        {
            user: 'moviebuff',
            date: 'Dec 29, 1999 11:15 PM',
            content: `This thread has been amazing! So glad to see everyone appreciates this film.

Quick question: What do you all think they'll do for the sequel? I heard they're planning TWO more movies!

I hope they don't mess it up. The Matrix is perfect as a standalone film. But I trust the Wachowskis.

Here's to cinema in the year 2000 and beyond!

-MovieBuff`
        }
    ],

    // Thread ID 9: "This forum is dying"
    9: [
        {
            user: 'flameking',
            date: 'Dec 20, 1999 11:32 AM',
            content: `This forum used to be good. Now it's just full of newbies asking stupid questions and anime nerds talking about Japanese cartoons.

Where did all the REAL users go?

This place is DYING and the admins don't even care.

RIP CyberChat Forums 1998-1999.`
        },
        {
            user: 'retrogamer',
            date: 'Dec 20, 1999 12:47 PM',
            content: `"This forum is dying" - The eternal cry of the longtime user who's bored.

I've been on BBSes and forums since 1985. Every single one of them has had people saying "this place isn't what it used to be."

You know what? Forums CHANGE. Communities EVOLVE. If you don't like it, start your own forum.

The rest of us are having a great time here.`
        },
        {
            user: 'gamegod',
            date: 'Dec 20, 1999 2:15 PM',
            content: `FlameKing complaining about the state of the forum? What else is new?

Dude, we just hit 15,000 members. The forum is more active than ever. Just because YOU'RE bored doesn't mean it's dying.

Maybe you're the problem? Ever think of that?`
        },
        {
            user: 'flameking',
            date: 'Dec 20, 1999 3:28 PM',
            content: `@GameGod - Oh look, the forum's lapdog defending his precious community.

You know I'm right. The quality of posts has gone way down. Too many kids, too many idiots, too much anime BS.

Remember when we used to have REAL discussions? Now it's all "halp my computer is broke" and "what's ur favorite Pokemon?"

Pathetic.`
        },
        {
            user: 'momof3',
            date: 'Dec 20, 1999 5:42 PM',
            content: `I'm sorry if my questions are "stupid" to you, FlameKing. Some of us are just trying to learn.

I think this forum is very helpful and welcoming (most of the time). I've learned so much from everyone here!

If you don't like it, why do you keep posting?`
        },
        {
            user: 'techmaster99',
            date: 'Dec 20, 1999 7:18 PM',
            content: `@MomOf3 - Your questions aren't stupid. Ignore FlameKing.

@FlameKing - I've been here since day one (check my join date). The forum is fine. Different, yes. But not dying.

More users = more diversity of topics. That's a GOOD thing. If you only want "elite" tech discussion, there are other places for that.

CyberChat is for everyone. Deal with it.`
        },
        {
            user: 'animelover2000',
            date: 'Dec 21, 1999 9:34 AM',
            content: `"too much anime BS"

Excuse me?! The Anime & Manga board is one of the most active boards on the forum! People LOVE discussing anime here!

Just because YOU don't like something doesn't mean it's bad. Get over yourself.`
        },
        {
            user: 'webwizard',
            date: 'Dec 22, 1999 10:15 AM',
            content: `I've noticed FlameKing has warnings in their profile. Maybe that's why they're so angry?

The forum has rules for a reason. If you can't follow them, you're going to have a bad time.

Just saying. 🤷`
        },
        {
            user: 'flameking',
            date: 'Dec 23, 1999 2:47 PM',
            content: `Whatever. You're all sheep anyway.

Enjoy your dying forum. I'm outta here.`,
            editedBy: 'phoenix_rising',
            editedDate: 'Dec 23, 1999 3:15 PM',
            editNote: '[Edited by Phoenix_Rising: Removed personal attacks. Final warning issued.]'
        },
        {
            user: 'phoenix_rising',
            date: 'Dec 23, 1999 3:18 PM',
            content: `@FlameKing - You've received multiple warnings for inflammatory posts and personal attacks. This is your final warning. Any further violations will result in a ban.

@Everyone else - Please don't engage with obvious flame bait. Use the report function instead.

This forum is NOT dying. We're growing and thriving. Different opinions are welcome, but personal attacks are not.

Let's get back to what makes CyberChat great: helping each other and having fun discussions!

-Phoenix_Rising, Head Admin`
        },
        {
            user: 'retrogamer',
            date: 'Dec 24, 1999 11:23 AM',
            content: `I've seen this pattern a hundred times:

1. User joins forum
2. User is active and happy
3. Forum grows and changes
4. User gets bitter
5. User declares forum is "dying"
6. User either leaves or gets banned
7. Forum continues without them

Tale as old as time.

Anyway, Merry Christmas everyone! Here's to CyberChat in the year 2000!`
        },
        {
            user: 'gamegod',
            date: 'Dec 25, 1999 9:15 AM',
            content: `FlameKing always does this. Gets into arguments, gets warned, plays victim, says the forum sucks.

Rinse and repeat.

Honestly, I think he just likes the attention. Don't feed the trolls, people.`
        },
        {
            user: 'codemonkey',
            date: 'Dec 29, 1999 11:53 PM',
            content: `You know what's funny? This "forum is dying" thread has 342 replies and 7,821 views.

If the forum was dying, nobody would be reading this.

QED.`
        }
    ],

    // Thread ID 38: "Unreal Tournament vs Quake III - THE ULTIMATE SHOWDOWN"
    38: [
        {
            user: 'fragmaster',
            date: 'Dec 10, 1999 3:15 PM',
            content: `Okay, it's time to settle this once and for all.

Unreal Tournament came out in November.
Quake III Arena came out in December.

Both are arena shooters. Both have insane multiplayer. Both are AMAZING.

But which one is BETTER?

I'm team Quake III all the way. Here's why:

- Faster gameplay
- Better weapon balance
- ID Software pedigree
- Pure skill-based combat
- That railgun *chef's kiss*

UT is good, but Q3 is LEGENDARY.

Fight me.

-FragMaster`
        },
        {
            user: 'gamegod',
            date: 'Dec 10, 1999 5:42 PM',
            content: `UNREAL TOURNAMENT. End of discussion.

Here's why UT is superior:

- More game modes (Assault, Domination, etc.)
- Better maps (Facing Worlds is ICONIC)
- Better bots (actually competent AI)
- SHOCK RIFLE COMBO (most satisfying weapon ever)
- More customization options

Quake III is just... more Quake. UT is INNOVATIVE.

Sorry FragMaster, but you're wrong on this one.`
        },
        {
            user: 'techmaster99',
            date: 'Dec 10, 1999 8:23 PM',
            content: `From a technical standpoint:

**Quake III:**
- id Tech 3 engine (cutting edge)
- Better netcode
- Runs on everything (even Linux!)
- Moddable
- Lighter system requirements

**Unreal Tournament:**
- Unreal Engine (also cutting edge)
- More content out of the box
- Better graphics (arguably)
- More variety

Honestly? Both are masterpieces. Get both if you can.

But if I had to choose... Q3. The skill ceiling is higher.`
        },
        {
            user: 'poketrainer99',
            date: 'Dec 11, 1999 9:15 AM',
            content: `my big brother plays both of these

they look the same to me? just guys running around shooting each other

i dont get it lol

*goes back to Pokemon*`
        },
        {
            user: 'fragmaster',
            date: 'Dec 11, 1999 11:34 AM',
            content: `@PokeTrainer99 - You sweet summer child.

@TechMaster99 - EXACTLY! The skill ceiling!

Q3 is pure FPS distilled to its essence. No gimmicks, no fluff. Just you, your aim, and your movement.

Strafe-jumping, rocket-jumping, controlling power-ups, timing items... it's CHESS with rocket launchers.

UT is more accessible, which is fine! But Q3 is for the PROS.`
        },
        {
            user: 'gamegod',
            date: 'Dec 12, 1999 2:47 PM',
            content: `"Q3 is for the pros"

Okay elitist. Some of us like VARIETY in our shooters.

Assault mode in UT is incredible. You can't do that in Q3.

Also, the shock rifle combo requires MORE skill than any Q3 weapon. Change my mind.`
        },
        {
            user: 'consolekid',
            date: 'Dec 15, 1999 4:22 PM',
            content: `PC gamers fighting over which mouse-and-keyboard game is better...

Meanwhile I'm over here enjoying GoldenEye 007 on N64 with a CONTROLLER like a normal person.

😂`
        },
        {
            user: 'fragmaster',
            date: 'Dec 15, 1999 6:38 PM',
            content: `@ConsoleKid - GoldenEye is great... for a console game.

But it's nowhere NEAR the skill level of Q3 or UT. The controls are too limited.

Mouse + keyboard = precision
Controller = handicap

PC MASTER RACE.`
        },
        {
            user: 'consolekid',
            date: 'Dec 16, 1999 9:12 AM',
            content: `oh boy here we go with the PC elitism again

have fun spending $2000 on a rig that'll be obsolete in 2 years

I paid $199 for my N64 and it just WORKS

/thread`
        },
        {
            user: 'retrogamer',
            date: 'Dec 18, 1999 11:23 AM',
            content: `Kids, kids, you're both right.

Different platforms for different experiences. PC for precision and power, console for simplicity and convenience.

Now stop fighting and let's all agree that:
- Quake III is the better competitive game
- Unreal Tournament is the better casual/variety game
- GoldenEye is the best console FPS (currently)

Everyone wins. Peace achieved.

You're welcome.`
        },
        {
            user: 'techmaster99',
            date: 'Dec 20, 1999 3:45 PM',
            content: `Update: I just got a Voodoo3 3000 and Q3 runs at 1024x768 with 60+ FPS.

It's GLORIOUS.

UT also looks amazing, but there's something about Q3's clean aesthetic that just works.

My LAN party on New Year's Eve is going to be INSANE.`
        },
        {
            user: 'gamegod',
            date: 'Dec 22, 1999 10:18 AM',
            content: `Okay fine, I'll admit it:

Both games are incredible.

Q3 is better for pure deathmatch.
UT is better for variety and team modes.

We're blessed to have BOTH in 1999.

Now let's stop arguing and go frag some people online.

Who wants to play later? I'll be on the CyberChat Q3 server tonight at 8PM EST!`
        },
        {
            user: 'fragmaster',
            date: 'Dec 29, 1999 9:36 PM',
            content: `This thread got way more heated than I expected lol

But honestly? RetroGamer is right. Both are masterpieces.

I'll be playing Q3 at midnight on New Year's Eve. Starting 2000 with a railgun headshot feels right.

GG everyone. See you in the arena.

-FragMaster`
        }
    ],

    // Thread ID 18: "Pentium III vs AMD Athlon - which is better?"
    18: [
        {
            user: 'gamegod',
            date: 'Dec 20, 1999 9:15 AM',
            content: `Alright tech heads, I need to settle this.

I'm building a new gaming rig for 2000. Budget is $1500. The BIG question:

**Intel Pentium III 600MHz** ($400)
vs
**AMD Athlon 600MHz** ($300)

The Intel has the brand name and stability. The AMD is faster for less money.

Which one should I get? Don't hold back.`
        },
        {
            user: 'techmaster99',
            date: 'Dec 20, 1999 10:42 AM',
            content: `AMD Athlon. No contest.

Here's why:
- $100 cheaper for same clock speed
- Better FPU performance (great for gaming)
- Faster system bus (200MHz vs 133MHz)
- More cache bandwidth
- Better price/performance ratio

Intel is resting on their laurels. AMD is hungry and innovating.

I switched to Athlon last month and my Quake III framerates jumped 20%.

Only downside: runs a bit hotter. Get a good heatsink.`
        },
        {
            user: 'codemonkey',
            date: 'Dec 20, 1999 11:58 AM',
            content: `Intel Pentium III.

Don't fall for the AMD hype. Here's reality:

- Better driver support (fewer headaches)
- More stable for professional work
- Intel's reputation matters
- Better motherboard options
- Proven track record

AMD is fine for budget builds, but if you want RELIABILITY, go Intel.

I run dual PIII 500s at work. Rock solid. Never crashes.`
        },
        {
            user: 'techmaster99',
            date: 'Dec 20, 1999 1:23 PM',
            content: `@CodeMonkey - "AMD is fine for budget builds"?!

The Athlon OUTPERFORMS the PIII at the same clock speed! This isn't about budget, it's about PERFORMANCE.

Check the benchmarks:
- 3DMark 2000: Athlon wins
- Quake III: Athlon wins
- Photoshop filters: Athlon wins
- Video encoding: Athlon wins

The only thing Intel has is brand loyalty. Wake up.`
        },
        {
            user: 'linuxguru',
            date: 'Dec 20, 1999 2:47 PM',
            content: `Both work fine with Linux.

But I prefer AMD because:
1. Better performance per dollar
2. AMD has been more open with specifications
3. Underdog needs support
4. Intel has too much market share (anti-competitive)

Also, the Athlon's superior FPU is excellent for scientific computing.

My Athlon 650 compiles the kernel faster than my buddy's PIII 700. Real world difference.`
        },
        {
            user: 'gamegod',
            date: 'Dec 20, 1999 4:15 PM',
            content: `Okay so I'm seeing:

**TEAM AMD:** TechMaster99, LinuxGuru
**TEAM INTEL:** CodeMonkey

This is getting spicy. Keep it coming!

@TechMaster99 - What about the heat issue? I heard Athlons can literally catch fire if the heatsink comes loose?`
        },
        {
            user: 'techmaster99',
            date: 'Dec 20, 1999 5:33 PM',
            content: `@GameGod - That's overblown. Yes, the Athlon runs hot. Yes, you need a good heatsink and thermal paste.

But "catch fire"? That's Intel FUD (Fear, Uncertainty, Doubt).

Just get:
- Quality heatsink (Alpha PAL8045 or similar)
- Good case airflow
- Arctic Silver thermal paste
- Monitor temps with Motherboard Monitor

Problem solved. I've been running mine 24/7 for months. No issues.`
        },
        {
            user: 'retrogamer',
            date: 'Dec 20, 1999 7:42 PM',
            content: `You kids and your CPU wars...

I remember when we were arguing about 486 vs Pentium. Before that, 386 vs 486.

It never ends. The "best" CPU today is obsolete in 6 months.

My advice? Get whichever fits your budget and UPGRADE next year. Technology moves too fast to be loyal to brands.

That said, AMD Athlon is the better value right now. *ducks*`
        },
        {
            user: 'codemonkey',
            date: 'Dec 21, 1999 9:15 AM',
            content: `Fine, I'll concede that Athlon has better benchmarks.

But when my AMD-using coworker's system blue-screened during a client presentation last week, guess who had to save the day with his STABLE Intel machine?

This guy. 👍

Benchmarks don't matter if your system crashes.`
        },
        {
            user: 'techmaster99',
            date: 'Dec 21, 1999 10:48 AM',
            content: `@CodeMonkey - That's a driver/motherboard issue, not CPU!

AMD doesn't make the whole system! If your coworker got a cheap VIA chipset board and buggy drivers, that's on HIM, not AMD!

Get a good AMD-750 or AMD-760 chipset board and it's just as stable as Intel.

This is like blaming Ford because someone put cheap tires on their car.`
        },
        {
            user: 'momof3',
            date: 'Dec 21, 1999 2:34 PM',
            content: `Oh my, this is getting very technical!

I don't understand most of this but my son wants to build a computer. Would the AMD one be okay for a teenage boy who plays video games?

Thank you!
-Linda`
        },
        {
            user: 'webwizard',
            date: 'Dec 21, 1999 3:52 PM',
            content: `@MomOf3 - Yes! AMD Athlon is PERFECT for gaming!

Your son will love it. Better performance, saves money for a better video card.

Tell him to get:
- AMD Athlon 600MHz or 650MHz
- 128MB RAM (or 256MB if budget allows)
- GeForce 256 or Voodoo3 graphics card

He'll be very happy. :)`
        },
        {
            user: 'gamegod',
            date: 'Dec 22, 1999 11:23 AM',
            content: `UPDATE: I went with AMD Athlon 650MHz!

Ordered it with:
- ASUS K7V motherboard
- 256MB PC133 RAM
- GeForce 256 DDR
- 30GB hard drive

Saved $100 going AMD, put it toward the video card. Can't wait!

Thanks everyone (except CodeMonkey j/k 😂)`
        },
        {
            user: 'techmaster99',
            date: 'Dec 22, 1999 3:15 PM',
            content: `@GameGod - EXCELLENT choice! That's going to be a BEAST of a system!

Post screenshots when you get it running!

@CodeMonkey - Another AMD convert. 😎`
        },
        {
            user: 'codemonkey',
            date: 'Dec 29, 1999 10:12 PM',
            content: `Whatever. Enjoy your space heater.

(Seriously though, nice build @GameGod. Post benchmarks when it's done!)

I still prefer Intel but I respect the Athlon's price/performance. Just keep that thing cool.`
        }
    ],

    // Thread ID 17: "Building my first PC - need advice!"
    17: [
        {
            user: 'newbuilder99',
            date: 'Dec 28, 1999 10:23 AM',
            content: `Hey everyone!

I've been saving up and I'm finally ready to build my first PC from scratch! I've only ever used pre-built computers before.

Budget: $1200
Purpose: Gaming, some web design work
Experience: Total newbie (please be patient!)

I have NO idea where to start. What parts do I need? Where do I buy them? How hard is it to put together?

Any help would be MASSIVELY appreciated!

-NewBuilder99`
        },
        {
            user: 'techmaster99',
            date: 'Dec 28, 1999 11:47 AM',
            content: `Welcome to the club! Building your first PC is exciting.

Here's what you need (essential parts):

**Core Components:**
1. CPU (processor) - AMD Athlon or Intel Pentium III
2. Motherboard - must match your CPU choice
3. RAM - at least 128MB, get 256MB if you can
4. Video card - critical for gaming!
5. Hard drive - 20GB minimum
6. Case + Power supply - 300W minimum
7. CD-ROM drive
8. Floppy drive (for drivers/boot disk)

**Nice to have:**
- Sound card (many motherboards have onboard sound)
- Network card (for internet)
- Extra case fans (cooling)

Where to buy: CompUSA, Fry's, or online (Newegg, Pricewatch)

$1200 will get you a VERY nice system!

What games do you want to play?`
        },
        {
            user: 'newbuilder99',
            date: 'Dec 28, 1999 1:15 PM',
            content: `@TechMaster99 - Thank you!!!

Games: Quake III, Half-Life, Unreal Tournament. Maybe some RTS games too.

So I'm thinking:
- AMD Athlon (seems like good value based on other threads here)
- Best video card I can afford
- Rest goes to other parts

Is that the right approach?

Also... how do I know if parts are compatible? I'm terrified of buying the wrong stuff!`
        },
        {
            user: 'gamegod',
            date: 'Dec 28, 1999 2:34 PM',
            content: `@NewBuilder99 - YES! That's exactly right! CPU + GPU first!

For those games, here's my recommendation:

**CPU:** AMD Athlon 600MHz ($300)
**Motherboard:** ASUS K7V ($130)
**RAM:** 256MB PC133 ($120)
**Video Card:** GeForce 256 SDR ($250) [or DDR if you can stretch budget]
**Hard Drive:** IBM 30GB ($150)
**Case/PSU:** Generic ATX with 300W ($80)
**CD-ROM:** 48x speed ($50)
**Floppy:** Standard ($15)

Total: ~$1095

That leaves $100 for keyboard/mouse/monitor or upgrades!

This will DESTROY Quake III. Trust me.`
        },
        {
            user: 'webwizard',
            date: 'Dec 28, 1999 3:52 PM',
            content: `Compatibility tips:

**CPU + Motherboard:** MUST match
- AMD Athlon needs Socket A (Slot A) motherboard
- Intel PIII needs Slot 1 motherboard
- Check motherboard specs BEFORE buying!

**RAM:** Check motherboard manual
- Most use PC100 or PC133 SDRAM
- Some older boards use EDO RAM (don't get these)

**Video Card:** Almost all use AGP slot
- Check if motherboard has AGP (most do)
- Some budget boards only have PCI (avoid!)

**Case:** Make sure it's ATX form factor
- Most modern motherboards are ATX
- Some are Micro-ATX (smaller)

Read motherboard manual CAREFULLY before buying anything!`
        },
        {
            user: 'techmaster99',
            date: 'Dec 28, 1999 5:18 PM',
            content: `@NewBuilder99 - Don't be intimidated by assembly!

It's basically expensive LEGO:
1. Install CPU on motherboard (match triangle/arrow)
2. Install RAM (it only goes in one way)
3. Mount motherboard in case
4. Plug in power connectors
5. Install video card in AGP slot
6. Install drives (CD, floppy, hard drive)
7. Connect all cables

TIPS:
- Read ALL manuals first
- Ground yourself (touch case to discharge static)
- Don't force anything (if it doesn't fit, it's wrong)
- Keep manual handy for cable connections

It takes 2-3 hours first time. Be patient!

YouTube doesn't exist yet, but there are good guides on Tom's Hardware and AnandTech.`
        },
        {
            user: 'newbuilder99',
            date: 'Dec 28, 1999 7:45 PM',
            content: `You guys are AMAZING! This is so helpful!

I'm going to print out these posts and take them to CompUSA this weekend.

Quick question: Do I need thermal paste for the CPU? I've heard people mention it but don't know what it is.`
        },
        {
            user: 'techmaster99',
            date: 'Dec 28, 1999 9:22 PM',
            content: `YES! Thermal paste is CRITICAL!

It goes between CPU and heatsink to transfer heat. Without it, your CPU will overheat and shut down (or worse).

Get Arctic Silver thermal paste ($8). Best stuff available.

Application:
1. Clean CPU and heatsink with isopropyl alcohol
2. Apply THIN layer of paste (size of rice grain)
3. Spread evenly
4. Attach heatsink

DO NOT skip this step! CPUs are expensive!

Also: Make sure heatsink/fan is properly secured. Athlon CPUs especially need good cooling.`
        },
        {
            user: 'retrogamer',
            date: 'Dec 29, 1999 8:42 AM',
            content: `@NewBuilder99 - One more tip from an old timer:

SAVE YOUR BOXES.

If something doesn't work, you might need to return it. Keep boxes for at least 30 days.

Also save your receipts and write down serial numbers.

And test EVERYTHING before you throw away packaging. Don't wait a month to find out your RAM is dead.

Good luck! Building PCs is addictive. You'll be upgrading constantly now. 😄`
        },
        {
            user: 'momof3',
            date: 'Dec 29, 1999 10:15 AM',
            content: `This is wonderful! My son is reading this thread too!

He's excited to build his own computer now. You all are so helpful to beginners like us.

Thank you everyone!

-Linda`
        },
        {
            user: 'newbuilder99',
            date: 'Dec 29, 1999 11:34 PM',
            content: `UPDATE!!!

I went to CompUSA today and got everything!

Total damage: $1,187 (just under budget!)

Got exactly what GameGod recommended except I went with a nicer case ($120 instead of $80) because it had better airflow and looked cooler.

I'm going to attempt the build tomorrow. Wish me luck!

I'll post an update thread when it's done!

Thanks again everyone! This community is the best!

-NewBuilder99`
        }
    ],

    // Thread ID 40: "Nintendo 64 vs PlayStation - which won the generation?"
    40: [
        {
            user: 'consolekid',
            date: 'Dec 15, 1999 2:45 PM',
            content: `Okay, the generation is almost over. PS2 and Dreamcast are here/coming.

Time to settle this once and for all:

**Nintendo 64** vs **PlayStation**

Which console WON the 5th generation?

I say N64. Here's why:
- GoldenEye 007 (best FPS ever on console)
- Super Mario 64 (revolutionary 3D)
- Zelda: Ocarina of Time (perfect game)
- 4-player split screen (built in!)
- No load times (cartridges rule)

PlayStation is fine but Nintendo had the QUALITY.

Fite me.`
        },
        {
            user: 'gamegod',
            date: 'Dec 15, 1999 4:22 PM',
            content: `PLAYSTATION. Not even close.

Look at the NUMBERS:
- PlayStation: 80+ million sold
- N64: 30 million sold

The market has spoken. PlayStation DOMINATED.

Why?
- Cheaper ($199 vs $249)
- Way more games (2000+ vs 400)
- CD-ROM (bigger games, FMV, better music)
- Final Fantasy VII (system seller)
- Metal Gear Solid
- Resident Evil series
- Tekken 3
- Gran Turismo

N64 has like 10 good games. PlayStation has HUNDREDS.

Sorry Nintendo fanboys, but you lost this round.`
        },
        {
            user: 'poketrainer99',
            date: 'Dec 15, 1999 6:18 PM',
            content: `NINTENDO 64!!!!!

Pokemon Stadium is AMAZING!!!

Also Super Smash Bros is the best game ever made!!!

PlayStation is for old people who like boring games

N64 FOREVER!!!!! 🎮`
        },
        {
            user: 'retrogamer',
            date: 'Dec 15, 1999 8:33 PM',
            content: `*puts on old man hat*

You're BOTH wrong.

Saturn was the real winner. Superior 2D, amazing arcade ports, fighters that PlayStation couldn't match.

But Sega's marketing sucked and they released it too early. Shame.

That said, objectively:
- **Sales:** PlayStation wins
- **First-party games:** N64 wins
- **Third-party support:** PlayStation wins
- **Innovation:** N64 wins (analog stick, rumble pak)
- **Game library diversity:** PlayStation wins

Different strengths. Both great systems.

Now get off my lawn.`
        },
        {
            user: 'consolekid',
            date: 'Dec 16, 1999 9:47 AM',
            content: `@GameGod - QUANTITY ≠ QUALITY

Sure, PlayStation has 2000 games. How many of them are shovelware? How many are you actually going to play?

N64 has fewer games but the hit rate is INSANE:
- Mario 64
- GoldenEye
- Zelda OoT
- Majora's Mask
- Banjo-Kazooie
- Perfect Dark
- Mario Kart 64
- Smash Bros
- Star Fox 64
- Rogue Squadron

That's 10 games that are all 9/10 or higher!

PlayStation has a few masterpieces (FF7, MGS) surrounded by mountains of mediocre JRPGs.`
        },
        {
            user: 'gamegod',
            date: 'Dec 16, 1999 11:15 AM',
            content: `"Mountains of mediocre JRPGs"?!

Excuse me?!

- Final Fantasy VII, VIII, IX (all masterpieces)
- Xenogears
- Chrono Cross
- Legend of Dragoon
- Suikoden I & II
- Wild Arms

Those games have MORE CONTENT than your entire N64 library combined!

80 hour epic story vs 10 hour platformer? I'll take the JRPG.

Also: N64 can't do FMV cutscenes because of cartridges. Missing out on cinematic experiences.`
        },
        {
            user: 'animelover2000',
            date: 'Dec 16, 1999 2:28 PM',
            content: `@GameGod is absolutely right!

PlayStation JRPGs are INCREDIBLE! The storytelling, the characters, the cinematics!

N64 is for kids who like cartoony mascots. PlayStation is for people who appreciate NARRATIVE and ART.

Also, PlayStation has way better anime-style games. N64 has... what? Pokemon?

PlayStation wins for anyone with taste.`
        },
        {
            user: 'xxdarkangelxx',
            date: 'Dec 17, 1999 4:15 PM',
            content: `playstation is darker and more mature

n64 is colorful kiddie stuff

playstation has resident evil and silent hill and stuff

n64 has happy plumbers jumping on mushrooms

playstation wins for edgy people like me

~*~darkness~*~`
        },
        {
            user: 'consolekid',
            date: 'Dec 18, 1999 9:32 AM',
            content: `@DarkAngel - "kiddie"?!

Turok: Dinosaur Hunter
GoldenEye 007
Perfect Dark
Conker's Bad Fur Day

N64 has PLENTY of mature games!

Also "mature" doesn't mean "good". Resident Evil 2 is on BOTH systems and it's better on N64 (no loading screens!).

The "N64 is for kids" argument is lazy.`
        },
        {
            user: 'retrogamer',
            date: 'Dec 20, 1999 11:47 AM',
            content: `This argument again...

Here's the REAL answer:

**If you prefer:**
- Multiplayer: N64
- Single player: PlayStation
- Nintendo IPs: N64
- Third party variety: PlayStation
- Quick loading: N64
- FMV/cutscenes: PlayStation
- Controller: N64 (analog stick was revolutionary)
- Game library size: PlayStation

BOTH systems are excellent. The "winner" depends on what YOU value.

I own both. Best of both worlds.

Stop fighting and enjoy the games!`
        },
        {
            user: 'gamegod',
            date: 'Dec 22, 1999 3:18 PM',
            content: `Fine. @RetroGamer makes good points.

I'll admit N64 has better multiplayer. GoldenEye LAN parties are legendary.

But PlayStation still wins overall because of library size and variety.

HOWEVER... Dreamcast is going to destroy both of them. Soul Calibur looks INSANE.

New generation, new wars. 😎`
        },
        {
            user: 'consolekid',
            date: 'Dec 29, 1999 10:29 PM',
            content: `Okay okay, I'll concede that PlayStation sold more and has more games.

But N64 has Nintendo first-party excellence and that MATTERS.

Also, looking back, both systems were incredible for their time.

We're lucky we got to experience this generation.

Here's to gaming in the 2000s! 🎮

(PS: N64 still has the better controller)`
        }
    ],

    // Thread ID 26: "The Official Napster Thread - Is it legal?"
    26: [
        {
            user: 'napsterking',
            date: 'Dec 12, 1999 9:23 AM',
            content: `Alright, let's talk about the elephant in the room:

**NAPSTER**

For those living under a rock, Napster is a program that lets you download MP3s from other users. For FREE.

I've downloaded over 500 songs in the past month. My music collection has EXPLODED.

But... is it legal? The RIAA is making noise about lawsuits. Some people say it's theft. Others say it's sharing.

What does everyone think? Are we pirates or pioneers?

Discuss.

-NapsterKing`
        },
        {
            user: 'retrogamer',
            date: 'Dec 12, 1999 11:45 AM',
            content: `Oh boy, here we go...

Look, I'm old enough to remember people taping songs off the radio. The music industry didn't collapse then, and it won't collapse now.

Napster is just the next evolution of music sharing. If the record labels were smart, they'd EMBRACE this technology instead of fighting it.

Is it legal? Probably not. Do I care? Not really. I've bought hundreds of CDs over the years. The record labels have made enough money off me.`
        },
        {
            user: 'musiclover',
            date: 'Dec 12, 1999 2:18 PM',
            content: `It's THEFT. Plain and simple.

Artists spend years creating music. Producers, engineers, studios - they all deserve to be paid.

"I've bought CDs before" isn't an excuse to steal. You wouldn't walk into a record store and pocket a CD. This is the same thing.

Napster is going to destroy the music industry. Mark my words.`
        },
        {
            user: 'napsterking',
            date: 'Dec 12, 1999 3:42 PM',
            content: `@MusicLover - Destroy the industry? REALLY?

The music industry makes BILLIONS. Artists see pennies per CD sold. The labels keep all the money.

If anything, Napster HELPS artists by getting their music heard. I've discovered so many bands through Napster that I never would have bought blindly.

In fact, I've BOUGHT more CDs since using Napster because I can preview music first!`
        },
        {
            user: 'techmaster99',
            date: 'Dec 12, 1999 5:27 PM',
            content: `From a technical standpoint, Napster is brilliant. Peer-to-peer file sharing is revolutionary.

Legally? Gray area. The RIAA will probably sue them into oblivion.

Morally? That's complicated. The current music distribution model is broken. CDs cost $15-20 but most of that goes to labels, not artists.

We need a better system. Maybe Napster will force that change.`
        },
        {
            user: 'linuxguru',
            date: 'Dec 13, 1999 8:15 AM',
            content: `Information wants to be free.

The internet was built on sharing. Knowledge, software, and yes, music.

Proprietary music distribution is an outdated model. Open source showed us a better way for software. Napster is showing us the way for music.

The RIAA can sue all they want. You can't stop technology.`
        },
        {
            user: 'musiclover',
            date: 'Dec 13, 1999 10:33 AM',
            content: `"Information wants to be free"?!

Music isn't "information" - it's ART. It's PROPERTY. Musicians have BILLS TO PAY.

You Linux people think everything should be free. That's not how the real world works.

When your favorite band breaks up because they can't make money anymore, don't come crying to me.`
        },
        {
            user: 'momof3',
            date: 'Dec 13, 1999 2:45 PM',
            content: `I'm a bit confused by all this...

My kids use something called "Napster" to get music. Is that illegal? Should I stop them?

They say "everyone does it" but that doesn't make it right.

What should I do?

-Linda`
        },
        {
            user: 'webwizard',
            date: 'Dec 13, 1999 4:12 PM',
            content: `@MomOf3 - Technically, yes, it's probably illegal to download copyrighted music without paying.

Practically, millions of people are doing it and not getting in trouble.

My advice: If your kids want to support artists, have them buy CDs of bands they really like. Using Napster to discover new music is probably fine.

Gray area? Absolutely. But that's where we are right now.`
        },
        {
            user: 'gamegod',
            date: 'Dec 14, 1999 11:28 AM',
            content: `Real talk: I use Napster every day.

I've downloaded:
- Metallica (they'll be fine)
- Limp Bizkit (already rich)
- Eminem (brand new, want to check him out)
- System of a Down (discovered them on Napster!)
- Korn, Deftones, Rage Against the Machine...

My hard drive has 10GB of MP3s. My CD collection? Maybe 20 discs.

Am I a thief? Maybe. Do I feel bad? Not really.

CDs are overpriced. This is market correction.`
        },
        {
            user: 'xxdarkangelxx',
            date: 'Dec 16, 1999 3:47 PM',
            content: `napster is how i discovered all my favorite dark music

marilyn manson, nine inch nails, tool

i would never have bought their cds without hearing them first

record stores dont let you preview before buying

napster = freedom

~*~darkness~*~`
        },
        {
            user: 'retrogamer',
            date: 'Dec 20, 1999 9:15 AM',
            content: `Update: I read that Metallica is considering suing Napster.

METALLICA. The band that built their career on free tape trading in the 80s.

The irony is DELICIOUS.

They got famous by fans sharing bootleg tapes. Now they want to shut down digital sharing?

Sellouts.`
        },
        {
            user: 'napsterking',
            date: 'Dec 29, 1999 11:47 PM',
            content: `This thread has been wild. Here's my final take as we head into 2000:

Napster has changed everything. The music industry will NEVER be the same.

Will it get shut down? Maybe. But the genie is out of the bottle. P2P is here to stay.

The 2000s are going to be VERY interesting for music distribution.

See you all in the new millennium!

-NapsterKing

P.S. Just downloaded the new Rage Against the Machine album. 🔥`
        }
    ],

    // Thread ID 51: "Pokemon Red vs Blue - which did you pick?"
    51: [
        {
            user: 'poketrainer99',
            date: 'Dec 18, 1999 10:15 AM',
            content: `POKEMON TRAINERS!!!

Which version did you get?

I got POKEMON BLUE because Sandslash is exclusive to Blue and hes so cool!!!

Also I picked Squirtle as my starter!!! SQUIRTLE SQUAD 4 EVER!!!

What about you guys? Red or Blue? And which starter?

GOTTA CATCH EM ALL!!! 🎮`
        },
        {
            user: 'gamegod',
            date: 'Dec 18, 1999 12:42 PM',
            content: `Pokemon Red, Charmander starter.

I know Charmander makes the first two gyms harder, but CHARIZARD is worth it.

Fire/Flying type, learns Fly, looks amazing. Best starter, fight me.

Also: Already beat the Elite Four. Mew Two is BROKEN. Level 70 and destroys everything.`
        },
        {
            user: 'animelover2000',
            date: 'Dec 18, 1999 2:28 PM',
            content: `Pokemon Blue! I wanted Sandshrew!

Starter: Bulbasaur. I know everyone says it's "easy mode" but I don't care! Bulbasaur is ADORABLE and Venusaur is powerful!

Grass/Poison is a great typing. Sleep Powder + Leech Seed = unbeatable!

Current team:
- Venusaur (Level 58)
- Pidgeot (Level 52)
- Alakazam (Level 55)
- Lapras (Level 50)
- Raichu (Level 48)
- Snorlax (Level 54)

Almost ready for Elite Four!`
        },
        {
            user: 'poketrainer99',
            date: 'Dec 18, 1999 4:15 PM',
            content: `MY TEAM:

Blastoise (Lvl 62) - MY BOY!!!
Pikachu (Lvl 45) - just like ash!
Charizard (Lvl 55) - traded from my friend
Mewtwo (Lvl 72) - TOO STRONG
Zapdos (Lvl 51) - legendary bird!!!
Dragonite (Lvl 58) - dragon master!

I HAVE 147 POKEMON IN MY POKEDEX!!! ALMOST DONE!!!

Still need Mew though... how do you get Mew???`
        },
        {
            user: 'gamegod',
            date: 'Dec 18, 1999 5:33 PM',
            content: `@PokeTrainer99 - You can't get Mew in the game normally. It was a special Nintendo event only.

HOWEVER... there's a glitch. It's complicated but you can get Mew using the Mew glitch near Cerulean City.

Google "Mew glitch Pokemon Red Blue" - there are guides.

Warning: It's easy to mess up. Save before trying!`
        },
        {
            user: 'xxdarkangelxx',
            date: 'Dec 19, 1999 2:47 PM',
            content: `pokemon is for little kids

i only play mature games like resident evil and silent hill

but if i DID play pokemon id pick the dark and ghost types

gengar is cool i guess

~*~darkness~*~`
        },
        {
            user: 'poketrainer99',
            date: 'Dec 19, 1999 4:22 PM',
            content: `@DarkAngel - POKEMON IS NOT FOR LITTLE KIDS!!!

Its a complex game with strategy and type advantages and stuff!

also the anime is REALLY GOOD and ash is the best trainer ever!!!

POKEMON RULES!!! 🎮🎮🎮`
        },
        {
            user: 'retrogamer',
            date: 'Dec 20, 1999 9:47 AM',
            content: `*old man voice*

Pokemon is actually quite sophisticated for a Game Boy game. The rock-paper-scissors type system is deeper than most RPGs.

I got Pokemon Red for my nephew. Ended up playing it myself. Now I'm hooked.

Level 48 and counting. This game is addictive.

Is it "for kids"? Maybe. Do I care? No.

Good game design is good game design, regardless of target audience.`
        },
        {
            user: 'consolekid',
            date: 'Dec 22, 1999 11:15 AM',
            content: `Pokemon Blue + Squirtle gang!

Trading is the best part. Had to trade with my friend to get all three starters. Now I have all of them!

Also discovered you can duplicate Pokemon using the PC box glitch. Not sure if that's cheating but... I have 6 Master Balls now lol

Can't wait for Pokemon Gold & Silver next year!`
        },
        {
            user: 'momof3',
            date: 'Dec 23, 1999 3:28 PM',
            content: `My son plays Pokemon all the time! He has both Red AND Blue!

I don't understand most of it but he loves it. He keeps trying to explain "type advantages" to me but I get confused!

He wants Pokemon Yellow for Christmas. Is that different from Red and Blue?

-Linda`
        },
        {
            user: 'gamegod',
            date: 'Dec 23, 1999 5:42 PM',
            content: `@MomOf3 - Pokemon Yellow is based on the TV show!

Differences:
- You start with Pikachu (follows you around!)
- You can get all three starters (Bulbasaur, Charmander, Squirtle) in the game
- Team Rocket's Jessie and James appear
- Graphics are slightly improved

If he loves the anime, he'll LOVE Yellow version!

It's a great Christmas gift!`
        },
        {
            user: 'poketrainer99',
            date: 'Dec 29, 1999 10:58 PM',
            content: `FINAL UPDATE OF 1999:

I GOT MEW USING THE GLITCH!!! IT WORKED!!!

148 POKEMON!!!!! ONLY NEED ONE MORE!!!

(still cant find that last pokemon though... i think its a trade evolution)

BEST GAME EVER!!!

CANT WAIT FOR GOLD AND SILVER IN 2000!!!

POKEMON FOREVER!!! 🎮🎮🎮

HAPPY NEW YEAR EVERYONE!!!`
        }
    ],

    // Thread ID 22: "Post your personal websites! Show off your pages!"
    22: [
        {
            user: 'webwizard',
            date: 'Dec 10, 1999 10:23 AM',
            content: `Hey everyone!

Let's share our personal web pages! Whether it's GeoCities, Tripod, Angelfire, or your own domain - POST YOUR LINKS!

I'll start:

**WebWizard's Web Design Hub**
<a href="../../../webmaster-dave/index.html" target="_blank">webmaster-dave @ GeoCities</a>

Features:
- HTML/CSS tutorials
- Free web graphics
- JavaScript snippets
- Guestbook (sign it!)
- Hit counter (over 5000 visitors!)

Built with: Notepad, Paint Shop Pro, and determination!

Now show me yours! :)

-WebWizard`
        },
        {
            user: 'animelover2000',
            date: 'Dec 10, 1999 2:47 PM',
            content: `OMG yes! I've been working on my site for MONTHS!

**AnimeLover2000's Anime Shrine**
<a href="../../../anime-shrine/index.html" target="_blank">My Anime Shrine!</a>

What's on it:
- Episode guides for Cowboy Bebop, Evangelion, Trigun
- Character profiles with pics
- Reviews and ratings
- Links to other anime sites
- MIDI music player (anime themes!)
- Rotating banner GIFs

Took FOREVER to code but I'm so proud! 😊

Please sign my guestbook!`
        },
        {
            user: 'poketrainer99',
            date: 'Dec 10, 1999 4:15 PM',
            content: `MY POKEMON PAGE!!!

<a href="../../../pokemon-paradise/index.html" target="_blank">POKEMON PARADISE!!!</a>

I HAVE:
- All 151 Pokemon with pictures!!!
- Type chart!!!
- Tips and tricks!!!
- My team!!!
- Pokemon jokes!!!
- Links to other Pokemon sites!!!

ITS THE BEST POKEMON SITE EVER!!! (my mom says so)

VISIT IT!!! GOTTA CATCH EM ALL!!! 🎮`
        },
        {
            user: 'skepticalone',
            date: 'Dec 11, 1999 9:42 AM',
            content: `Finally, a place to share TRUTH.

My sites:

**Y2K Tech Watch**
<a href="../../../y2k-tech-watch/index.html" target="_blank">Y2K Preparation & Technical Analysis</a>

**Truth Seekers Network**
<a href="../../../truth-seekers/index.html" target="_blank">Exposing Government Lies</a>

The mainstream media won't tell you what's REALLY happening. But I will.

Wake up, people.

THE TRUTH IS OUT THERE.`
        },
        {
            user: 'xxdarkangelxx',
            date: 'Dec 12, 1999 3:28 PM',
            content: `my site is dark and mysterious

<a href="../../../neon-shadows/index.html" target="_blank">neon shadows</a>

its about the darkness within us all

has poetry and music and stuff

black background obviously

~*~darkness~*~`
        },
        {
            user: 'retrogamer',
            date: 'Dec 13, 1999 10:15 AM',
            content: `I've had a website since 1995. Back when we had to code everything by hand in raw HTML!

Nothing fancy, just:
- Classic game reviews
- BBS history
- Retro computing articles
- Links to other old-school sites

No GeoCities for me. I run my own domain on a Linux server.

You kids and your WYSIWYG editors... *shakes fist at cloud*`
        },
        {
            user: 'momof3',
            date: 'Dec 14, 1999 2:42 PM',
            content: `Oh how wonderful! I didn't know so many people had websites!

I found this lovely site about unicorns and crystals:
<a href="../../../crystal-unicorns/index.html" target="_blank">Crystal Unicorns</a>

It's so pretty and peaceful! The music is nice too!

I don't have my own website yet but maybe my son can help me make one!

-Linda`
        },
        {
            user: 'webwizard',
            date: 'Dec 15, 1999 11:28 AM',
            content: `@MomOf3 - I can help you build a website! It's easier than you think!

Start with a GeoCities free account. Then use their page builder (it's like Microsoft Word but for web pages).

Or if you want to learn HTML, check out my tutorials on my site!

Also, wow, everyone's sites are amazing! I'm adding you all to my "Cool Sites" links page!`
        },
        {
            user: 'gamegod',
            date: 'Dec 16, 1999 4:15 PM',
            content: `My site isn't done yet but I'm building a gaming portal!

Features (when complete):
- Game reviews
- Screenshots
- Cheat codes
- Demo downloads
- Forum (maybe)

Using Dreamweaver 3.0. This software is AMAZING. So much better than hand-coding.

@WebWizard - Before you say it, yes I know "real programmers use Notepad" but Dreamweaver is just faster!`
        },
        {
            user: 'webwizard',
            date: 'Dec 17, 1999 9:47 AM',
            content: `@GameGod - Dreamweaver is actually great! I use it for complex layouts.

The important thing is LEARNING HTML first, THEN using visual tools. Too many people jump straight to FrontPage and never learn the basics.

Your site sounds cool though! Post the link when it's ready!`
        },
        {
            user: 'techmaster99',
            date: 'Dec 20, 1999 2:33 PM',
            content: `I maintain a Linux resource site. Not much design, mostly content.

Tutorials on:
- Kernel compilation
- Apache configuration
- Shell scripting
- Network administration

Function over form. Black text, white background. Fast loading. That's what matters.

"Design" is overrated. Content is king.`
        },
        {
            user: 'consolekid',
            date: 'Dec 22, 1999 11:45 AM',
            content: `Wait, I just realized...

If everyone posts their website links HERE, this thread becomes like a mini web ring!

That's actually really cool! I can discover new sites just by reading this forum!

Internet is so cool! 🌐`
        },
        {
            user: 'webwizard',
            date: 'Dec 29, 1999 11:22 PM',
            content: `@ConsoleKid - EXACTLY! That's the beauty of the web!

We're all connected. One link leads to another. That's how you discover cool stuff!

This thread has become one of my favorites. I've visited everyone's sites and they're all unique and awesome in their own way!

Keep building, everyone! The web is what WE make it!

See you all in the year 2000! 🌐✨

-WebWizard`
        }
    ],

    // Thread ID 54: "X-Files finale - WHAT JUST HAPPENED?!"
    54: [
        {
            user: 'skepticalone',
            date: 'Dec 19, 1999 8:47 PM',
            content: `DID EVERYONE JUST WATCH THAT?!

The X-Files "Millennium" episode! The KISS at the end!!!

Mulder and Scully FINALLY!!!

But more importantly - the Y2K zombie plague?! The conspiracies?! This show is trying to tell us something!

The government doesn't want you to know the truth about Y2K. But X-Files is SHOWING US.

I've been documenting everything on my site: <a href="../../../x-files-truth/index.html" target="_blank">X-Files Truth Archive</a>

THE TRUTH IS OUT THERE!`
        },
        {
            user: 'moviebuff',
            date: 'Dec 19, 1999 9:23 PM',
            content: `@SkepticalOne - It's just a TV show, calm down.

But yes, the Mulder/Scully kiss was LONG overdue! Finally some payoff after 7 seasons!

The Y2K zombie plot was fun but obviously fiction. It's entertainment, not a documentary.`
        },
        {
            user: 'skepticalone',
            date: 'Dec 19, 1999 10:15 PM',
            content: `"Just a TV show"?!

X-Files is based on REAL classified files! The creator Chris Carter has insider sources!

Why do you think the show has lasted 7 seasons? Because people KNOW it's real!

Wake up, sheeple!`
        },
        {
            user: 'retrogamer',
            date: 'Dec 20, 1999 10:42 AM',
            content: `I've been watching X-Files since season 1.

Great show. Atmospheric, well-written, excellent characters.

But SkepticalOne... it's FICTION. Inspired by real UFO lore? Sure. But it's not a documentary.

That said, the Mulder/Scully dynamic is fantastic. The kiss was earned.`
        },
        {
            user: 'xxdarkangelxx',
            date: 'Dec 21, 1999 3:18 PM',
            content: `x files is so dark and mysterious

i love the creepy episodes

the truth IS out there

mulder is cool

~*~darkness~*~`
        },
        {
            user: 'momof3',
            date: 'Dec 22, 1999 9:28 AM',
            content: `I watch X-Files with my husband sometimes!

It's a bit scary for me but the characters are nice. That lady with the red hair is very smart!

My son says it's his favorite show. He has posters in his room!

-Linda`
        },
        {
            user: 'gamegod',
            date: 'Dec 29, 1999 10:37 PM',
            content: `X-Files is great but can we talk about how there's a PS1 game coming out?!

X-Files game! Actual FBI investigation gameplay!

I'm definitely getting it when it comes out!`
        }
    ]
};

module.exports = { THREAD_POSTS };
