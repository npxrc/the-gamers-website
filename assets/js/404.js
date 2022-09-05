let nameList = [
    `<playername> IS YOU`, `As seen on TV!`, `The End?`, `Should not be played while driving.`, `1% sugar!`,
    `Ph1lza had a good run!`, `Awesome!`, `100% pure!`, `May contain nuts!`, `All is full of love!`, `More polygons!`,
    `Limited edition!`, `Flashing letters!`, `Made by Notch!`, `It's here!`, `Put that cookie down!`, `Best in class!`,
    `It's finished!`, `Kind of dragon free!`, `Call you Mom!`, `Excitement!`, `More than 500 sold!`, `One of a kind!`,
    `Heaps of hits on YouTube!`, `Indev!`, `Spiders everywhere!`, `Check it out!`, `Holy cow, man!`, `It's a game!`,
    `Made in Sweden!`, `Uses LWJGL!`, `Reticulating splines!`, `Minecraft!`, `Yaaay!`, `Singleplayer!`, `Keyboard compatible!`,
    `Undocumented!`, `Ingots!`, `Exploding creepers!`, `That's no moon!`, `L33t!`, `Create!`, `Survive!`, `Dungeon!`,
    `Exclusive!`, `The bee's knees!`, `Down with O.P.P.!`, `Closed source!`, `Classy!`, `Wow!`, `Not on steam!`, `Oh man!`,
    `Awesome community!`, `Pixels!`, `Teetsuuuuoooo!`, `Kaaneeeedaaaa!`, `Now with difficulty!`, `Enhanced!`, `90% bug free!`,
    `Pretty!`, `12 herbs and spices!`, `Fat free!`, `Absolutely no memes!`, `Free dental!`, `Ask your doctor!`, `Minors welcome!`,
    `Cloud computing!`, `Legal in Finland!`, `Hard to label!`, `Technically good!`, `Bringing home the bacon!`, `Indie!`,
    `GOTY!`, `Ceci n'est pas une title screen!`, `Euclidian!`, `Now in 3D!`, `Inspirational!`, `Herregud!`, `Complex cellular automata!`,
    `Yes, sir!`, `Played by cowboys!`, `OpenGL 1.2!`, `Thousands of colors!`, `Try it!`, `Age of Wonders is better!`,
    `Try the mushroom stew!`, `Sensational!`, `Hot tamale, hot hot tamale!`, `Play him off, keyboard cat!`, `Guaranteed!`,
    `Macroscopic!`, `Bring it on!`, `Random splash!`, `Call your mother!`, `Monster infighting!`, `Loved by millions!`,
    `Ultimate edition!`, `Freaky!`, `You've got a brand new key!`, `Water proof!`, `Uninflammable!`, `Whoa, dude!`,
    `All inclusive!`, `Tell your friends!`, `NP is not in P!`, `Notch <3 ez!`, `Music by C418!`, `Livestreamed!`, `Haunted!`,
    `Polynomial!`, `Terrestrial!`, `Full of stars!`,`Scientific!`, `Cooler than Spock!`, `Collaborate and listen!`,
    `Never dig down!`, `Take frequent breaks!`, `Not linear!`, `Han shot first!`, `Nice to meet you!`, `Buckets of lava!`,
    `Ride the pig!`, `Larger than Earth!`, `sqrt(-1) love you!`, `Phobos anomaly!`, `Punching wood!`, `Falling off cliffs!`,
    `150% hyperbole!`, `Synecdoche!`, `Let's dance!`, `Seecret Friday update!`, `Reference implementation!`, `Lewd with two dudes with food!`,
    `Kiss the sky!`, `20 GOTO 10!`, `Verlet intregration!`, `Peter Griffin!`, `Do not distribute!`, `Cogito ergo sum!`,
    `[[]] lines of code!`, `A skeleton popped out!`, `The Work of Notch!`, `The sum of its parts!`, `BTAF used to be good!`,
    `I miss ADOM!`, `umop-apisdn!`, `OICU812!`, `Bring me Ray Cokes!`, `Finger-licking!`, `Thematic!`, `Pneumatic!`, `Sublime!`,
    `Octagonal!`, `Une baguette!`, `Gargamel plays it!`, `Rita is the new top dog!`, `SWM forever!`, `Representing Edsbyn!`,
    `Matt Damon!`, `Supercalifragilisticexpialidocious!`, `Consummate V's!`, `Cow Tools!`, `Double buffered!`, `Fan fiction!`,
    `Jason! Jason! Jason!`, `Hotter than the sun!`, `Internet enabled!`, `Autonomous!`, `Engage!`, `Fantasy!`, `DRR! DRR! DRR!`,
    `Kick it root down!`, `Regional resources!`, `Woo, facepunch!`, `Woo, somethingawful!`, `Woo, /v/!`, `Woo, tigsource!`,
    `Woo, minecraftforum!`, `Woo, worldofminecraft!`, `Woo, reddit!`, `Woo, 2pp!`, `Google anlyticsed!`, `Now supports åäö!`,
    `Give us Gordon!`, `Tip your waiter!`, `Very fun!`, `12345 is a bad password!`, `Vote for net neutrality!`, `Lives in a pineapple under the sea!`,
    `MAP11 has two names!`, `Omnipotent!`, `Gasp!`, `...!`, `Bees, bees, bees, bees!`, `Jag känner en bot! (I feel a cure!)`,
    `This text is hard to read if you play the game at the default resolution, but at 1080p it's fine!`, `Haha, LOL!`,
    `Hampsterdance!`, `Switches and ores!`, `Menger sponge!`, `idspispopd!`, `Eple (original edit)!`, `So fresh, so clean!`,
    `Slow acting portals!`, `Try the Nether!`, `Don't look directly at the bugs!`, `Oh, ok, Pigmen!`, `Finally with ladders!`,
    `Scary!`, `Play Minecraft, Watch Topgear, Get Pig!`, `Twittered about!`, `Jump up, jump up, and get down!`, `Joel is neat!`,
    `A riddle, wrapped in a mystery!`, `Huge tracts of land!`, `Welcome to your Doom!`, `Stay a while, stay forever!`,
    `Stay a while and listen!`, `Treatment for your rash!`, `"Autological" is!`, `Information wants to be free!`, `"Almost never" is an interesting concept!`,
    `Lots of truthiness!`, `The creeper is a spy!`, `Turing complete!`, `It's groundbreaking!`, `Let our battle's begin!`,
    `The sky is the limit!`, `Jeb has amazing hair!`, `Casual gaming!`, `Undefeated!`, `Kinda like Lemmings!`, `Follow the train, CJ!`,
    `This message will never appear on the splash screen, isn't that weird? (This message will not actually appear on the splash screen of Minecraft. It can only be seen in the Minecraft splash text files.)`,
    `Leveraging synergy!`, `DungeonQuest is unfair!`, `110813!`, `90210!`, `Check out the far lands!`, `Tyrion would love it!`,
    `Also try VVVVVV!`, `Also try Super Meat Boy!`, `Also try Terraria!`, `Also try Mount And Blade!`, `Also try Project Zomboid!`,
    `Also try World of Goo!`, `Also try Limbo!`, `Also try Pixeljunk Shooter!`, `Also try Braid!`, `That's super!`,
    `Bread is pain!`, `Read more books!`, `Khaaaaaaaaan!`, `Less addictive than TV Tropes!`, `More addictive than lemonade!`,
    `Bigger than a bread box!`, `Millions of peaches!`, `Fnord!`, `This is my true form!`, `Totally forgot about Dre!`,
    `Don't bother with the clones!`, `Pumpkinhead!`, `Hobo humping slobo babe!`, `Made by Jeb!`, `Has an ending!`, `Finally complete!`,
    `Feature packed!`, `Boots with the fur!`, `Stop, hammertime!`, `Testificates!`, `Conventional!`, `Homeomorphic to a 3-sphere!`,
    `Doesn't avoid double negatives!`, `Place ALL the blocks!`, `Does barrel rolls!`, `Meeting expectations!`, `PC gaming since 1873!`,
    `Ghoughpteighbteau tchoghs!`, `Déjà vu!`, `Got your nose!`, `Haley loves Elan!`, `Afraid of the big, black bat!`,
    `Doesn't use the U-word!`, `Child's play!`, `See you next Friday or so!`, `From the streets of Södermalm!`, `150 bpm for 400000 minutes!`,
    `Technologic!`, `Funk soul brother!`, `Pumpa kungen!`, `日本ハロー！`, `한국 안녕하세요!`, `Helo Cymru!`, `Cześć Polska!`,
    `你好中国！`, `Привет Россия!`, `Γεια σου ελλάδα!`, `My life for Aiur!`, `Lennart lennart = new Lennart();`,
    `I see your vocabulary has improved!`, `Who put it there?`, `You can't explain that!`, `If not ok then return end`,
    `§1C§2o§3l§4o§5r§6m§7a§8t§9i§ac`, `§kFUNKY LOL`, `Flavor with no seasoning!`, `Strange, but not a stranger!`,
    `Tougher than diamonds, rich like cream!`, `Getting ready to show!`, `Getting ready to know!`, `Getting ready to drop!`,
    `Getting ready to shock!`, `Getting ready to freak!`, `Getting ready to speak!`, `It swings, it jives!`,
    `Cruising streets for gold!`, `Take an eggbeater and beat it against a skillet!`, `Make me a table, a funky table!`,
    `Take the elevator to the mezzanine!`, `Stop being reasonable, this is the Internet!`, `/give @a hugs 64`,
    `This is good for Realms.`, `Any computer is a laptop if you're brave enough!`, `Do it all, everything!`,
    `Where there is not light, there can spider!`, `GNU Terry Pratchett`, `More Digital!`, `Falling with style!`,
    `There's no stopping the Trollmaso`, `Throw yourself at the ground and miss`, `Rule #1: it's never my fault`,
    `Replaced molten cheese with blood?`, `Absolutely fixed relatively broken coordinates`, `Boats FTW`, `Javalicious edition`,
    `Should not be played while driving!`, `You're going too fast!`, `Don't feed chocolate to parrots!`,
    `The true meaning of covfefe`, `An illusion! What are you hiding?`, `Something's not quite right...`, `Monster infighting!`,
    `missingno`, `In case it isn't obvious, foxes aren't players.`, `Buzzy Bees!`, `Minecraft Java Edition presents: Disgusting Bugs`,
    `Team Mystic!`, `Hamilton!`, `(Bedrock Edition beta test) Beta!`, `Absolutely no memes!`,
    ];
  let extensionList = ['ts','html','htm','txt','c++','md','scss','jar','run','sh']
  let i = Math.floor(Math.random() * nameList.length);// picks random
  let ie = Math.floor(Math.random() * extensionList.length);// picks random
  let item = nameList[i]
  let extension = extensionList[ie]
  extension='.'+extension
  item.replace('!','')
  item.replace('?','')
  item.replace('...','')
  item.replace('','')
document.getElementById('generateText').innerHTML = 'You misspelled /' + item + extension
setTimeout(() => {
    document.getElementById('generateText').innerHTML = 'This page will redirect to the home page in 5 seconds.'
}, 10000);
let e = 6
setInterval(() => {
    e-=1
    if (e = 1){
        document.getElementById('generateText').innerHTML = 'This page will redirect to the home page in '+e+' second.'
    } else{
        document.getElementById('generateText').innerHTML = 'This page will redirect to the home page in '+e+' seconds.'
    }
}, 1000);