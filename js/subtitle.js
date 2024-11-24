// Subtitles you see on the homescreen.

const say = [
  "i dont fkn know anymore man",
  "not as good as coolmathgames",
  "Don't get caught",
  "the goddess kevin made this site",
  "good soup 🍲",
  "You wouldn't download a car?",
  "can't beat the og, coolmathgames",
  "this is just schoology ok? idk or what i think this is a glitch",
  "ur lucky i dont put ads on the website, think of the 2 cent revenue i could make.",
  "Ur moms favorite",
  "Does a set of all sets contain itself?",
  "no update for a whole year, bro fell off",
  "get back to your school work",
  "These aren't the games you're looking for...",
  "Uncultured Swine!",
  "Among Us VR?",
  "error = ran out of subtitles",
  "I ❤️ DAVID ALTERS",
  "better call saul",
  "internet admin thinks he can stop me",
  "Schoology is Down",
  "Lunchly > Lunchables 🤑🤑🤑",
  "Jesse, we need to game Jesse.",
  "what rhymes with digger",
  "4 big guys :)",
  "it's really your own fault if you get caught",
  "We are Number One",
  "Click Me!",
  "Click Me!",
  "Click Me!",
  "Click Me!",
  "Click Me!",
  "Kanye did nothing wrong",
  "Hey you, shut up",
  "Hey, it says gullible on the ceiling.",
  "this website is the whole reason i exist",
  "You don't exist",
  "accept my friend request bruv",
  "the teacher is behind you 💀💀",
  "Warning: Luma chat can cause cancer!",
  "Oh yeah, Luma is locked in 🧑‍🍳🧑‍🍳🧑‍🍳",
  "<q>yes, mom im doing my homework</q>",
  "n___r, never 😈",
  "Luma won't fall off.",
  "why we using linewize? unblocking is too easy lmao",
  "luma on a fieldtrip",
  "MELLO IS TOP SIGMA",
  "jake is sigma frfr",
  "yacob b thuggin",
  "tommy g got drip",
  "tedwin buggin",
  "nebula fell off",
  "<q>add doom eternal to the next update plz?</q>",
  "can u add some ps5 games next update?",
  "DONT TYPE DIDDY ON THE HOMEPAGE PLEASE I BEG U!!!",
  "DONT TYPE DIDDY ON THE HOMEPAGE PLEASE I BEG U!!!",
  "DONT TYPE DIDDY ON THE HOMEPAGE PLEASE I BEG U!!!",
  "i wanna go home :(",
  "i wanna work for mcdonalds one day",
  "thx for da visits",
  "u cant touch dis",
  "wenimechaindasuma",
  "i wanna go home :(",
  "How did you get here?",
  "what the rizz?",
  "Imagine playing during a fieldtrip. Mad Respect",
  "Coding hard brain iz yogurt :(",
  "boutta leak ur ip >:)",
  "luma chat is unhinged",
  "FREE DIDDY HE DID NOTHING WRONG",
  "Mad Geeked",
  "Hawk 1: whats 1x1, Hawk 2: uhhh",
  "GTA 6 coming to Luma 3",
  "Madden 25 coming to Luma 3",
  "Doom Eternal coming to Luma 3",
  "You used to call me on my cell phone 😭 Late night when you need my love 😭😭😭",
  "follow smartschoolboy9 on instagram",
  "shoutout to the chromebook kids",
  "new subtitles?",
  "on bludsss im a thug",
  "two steps ahead, i am always two steps ahead. this has been the greatest social experiment i’ve come to known...",
  "HAWK TUAH!",
  "stop clicking me",
  "⬇️ click down there to start stupid ⬇️",
  "⬇️ click down there to start stupid ⬇️",
  "gta 6 is gonna be crazy",
  "only the best",
  "GET OUT!! 😡😡",
  "YOU NEED TO LEAVE!!! 😡😡😡😡",
  "edia is awesome sauce",
  "D1 Yapper",
  "dont mess with my gang",
  "im so funny",
  "water is wet water is wet water is wet water is wet water is wet",
  "those who know",
  "luma 4 coming 2040",
  "if i could i would",
  "free waylon he did nothing wrong",
  "cooking up luma 4",
  "<q>he cant count to 3</q> they said",
  "you guys thought luma 3 would never release",
  "350+ games",
  "thanks for 45k visits :)",
  "YOU EAT BABIES!!",
  "YOU EAT BABIES!!",
  "YOU EAT BABIES!!",
  "before gta 6",
  "look how cool this website is",
  "built different",
  "Created with ChatGPT 4o",
  "minecraft coming never",
  "roblox coming never",
  "i hate money",
  "Welcome to Luma",
  "Welcome to Luma",
  "Welcome to Luma",
  "Welcome to Luma",
  "They’re remaking Indiana Jones without Harrison Ford—you can’t do that! And now they’re making Ghostbusters with only women!! What’s going on?!"
];

var seCode = ['KeyD', 'KeyI', 'KeyD', 'KeyD','KeyY'];
var seCodePosition = 0;
var vid = '/img/websiteutility/secret.webp';

document.addEventListener('keydown', function(event) {
  if (event.code === seCode[seCodePosition]) {
    seCodePosition++;
    if (seCodePosition === seCode.length) {
      document.getElementById('subtitle').innerHTML = '<img style=border-radius:5px; src="' + vid + '" width="400" height="200" autoplay loop></img>';
      seCodePosition = 0;
    }
  } else {
    seCodePosition = 0;
  }
});



const changeSub = (num) => {
  document.getElementById("subtitle").innerHTML = say[num];
};

const newSub = () => {
  const howmany = say.length;
  const bRand = Math.floor(Math.random() * howmany);
  const sayWhat = say[bRand];
  document.getElementById("subtitle").innerHTML = sayWhat;
};

newSub();

const changeSplash = (num) => {
  const subtitle = say[num];
  document.getElementById("subtitle").innerHTML = subtitle;
  const ret = `Set current splash to splash ${num}, ${subtitle}`;
  return ret;
};
