var request = require('request');
var botApiKey = process.env.BOTAPIKEY;

var songList = ["green_light", "sober", "homemade_dynamite", "the_louvre", "liability", "hard_feelings", /*"sober_ii",*/ "writer_in_the_dark", "supercut", /*"liability_reprise", */"perfect_places"];
lyrics = {
    "0" : ["I know about what you did and I wanna scream the truth", "Thought you said that you would always be in love\nBut you're not in love no more", "Did it frighten you\nHow we kissed when we danced on the light up floor?", "But I hear sounds in my mind", "Brand new sounds in my mind", "But honey I'll be seein' you 'ever I go", "But honey I'll be seein' you down every road", "Oh, I wish I could get my things and just let go",  "All those rumors, they have big teeth\nHope they bite you"],
    "1" : ["Night, midnight, lose my mind", "It's time we danced with the truth", "Move along with the truth", "I'm actin' like I don't see\nEvery ribbon you used to tie yourself to me", "Will you sway with me? Go astray with me?", "But what will we do when we're sober?", "When you dream with a fever\nBet you wish you could touch our rush", "We pretend that we just don't care\nBut we care", "Can we keep up with the ruse?", "We know that it's over", "In the mornin', you'll be dancin' with all the heartache"],
    "2" : ["Don't know you super well\nBut I think that you might be the same as me", "I'll give you my best side, tell you all my best lies", "Know I think you're awesome, right?", "I guess we're partying"],
    "3" : ["Our days and nights are perfumed with obsession", "I am your sweetheart psychopathic crush", "Drink up your movements, still I can't get enough", "Can you hear the violence?", "I call and you come through", "Blow all my friendships\nTo sit in hell with you", "But we're the greatest\nThey'll hang us in the Louvre", "Okay I know that you are not my type\n(Still I fall)", "Just move in close to me, closer, you'll feel it coasting"],
    "4" : ["She's so hard to please, but she's a forest fire", "I do my best to meet her demands, play at romance, we slow dance", "The truth is I am a toy that people enjoy\n'Til all of the tricks don't work anymore", "I know that it's exciting running through the night [...]", "They're gonna watch me disappear into the sun\nYou're all gonna watch me disappear into the sun"],
    "5" : ["Please, could you be tender?\nAnd I will sit close to you", "Our bodies are young and blue", "[...] I remember the rush when forever was us", "God, I wish I believed ya\nWhen you told me this was my home", "I care for myself the way I used to care about you", "Why even try to get right?", "Three years, loved you every single day, made me weak"],
    "6" : ["Sorry, I was never good like you", "Did my best to exist just for you", "Bet you rue the day you kissed a writer in the dark", "I am my mother's child, I'll love you 'til my breathing stops", "I'll love you 'til you call the cops on me", "When you see me, will you say I've changed?", "I let the seasons change my mind"],
    "7" : ["In my head, I play a supercut of us", "The visions never stop", "But when I reach for you, there's just a supercut", "I'm someone, you maybe might love", "I'll be your quiet afternoon crush", "Make you crazy over my touch", "But it's just a supercut of us", "So I fall\nInto continents and cars\nAll the stages and the stars\nI turn all of it to just a supercut", "Cause in my head (In my head, I do everything right)", "When you call, I'll forgive and not fight", "Come home to my heart", "All the moments I play in the dark\nWild and fluorescent"],
    "8" : ["Every night, I live and die", "It's just another graceless night", "I'm nineteen and I'm on fire", "But when we're dancing I'm alright", "Are you lost enough?", "Have another drink, get lost in us", "I'll blow my brains out to the radio", "'Cause we are young and we're ashamed", "Send us to perfect places", "All of our heroes fading", "Let's go to perfect places", "Now I can't stand to be alone", "What the fuck are perfect places anyway?"]

}

var song = lyrics[Math.floor(Math.random() * songList.length)];
var lyric = song[Math.floor(Math.random() * song.length)];

var uri = "https://api.telegram.org/" + botApiKey + "/sendMessage?chat_id=@melodramalyrics&parse_mode=markdown&text=" + "" + lyric + "";

request(uri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});