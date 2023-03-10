function shout(string) {return string.toUpperCase();}
function whisper(string) {return string.toLowerCase();}
function logShout(spy) {console.log("hello".toUpperCase());}
function logWhisper(spy) {console.log("hello".toLowerCase());}
function sayHiToHeadphonedRoommate(string) {switch (string)
    {case string.toLowerCase(): return "I can't hear you!"; 
case string.toUpperCase(): return "YES INDEED!"; 
case "Let's have dinner together!": return "I would love to!";}}