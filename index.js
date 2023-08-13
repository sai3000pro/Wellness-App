// this removes overlays when they are clicked on... possible loading screen of "click here to begin"
document.querySelector(".overlay").addEventListener("click", handleClick);

function handleClick() {
    document.querySelector(".overlay").style.display = "none";
} 

var flashcards1 = ["Do you think I've ever been in love?", "What about me is most strange or unfamiliar?", "Do you think I've ever had my heart broken?", "What do you think I'd splurge on?", 
"What do you think my major is?", "What do you think I'm going to do in the future (work/employment)?", "What was your first impression of me?", "Do you think I was popular in high school?", "On a scale of 1 - 10, how messy do you think my car is?", "Do you think I like hot cheetos?",
"Do you think I like to read?", "Do you think I'm in Greek Life?", "Do you think I have a sibling? Older or younger?", "Who do you think is my favorite artist?", "Where do you think I grew up?",
"What do you think my favorite Starbucks drink is?", "Do you think I like Taco Bell?"]

// randomly sorts this array so that the order isn't quite the same every time
var a;
var b;
var bucket;
for (var i = 0; i<100; i++) {
    a = Math.floor(Math.random*flashcards1.length);
    b = Math.floor(Math.random*flashcards1.length);

    // doesn't let these variables be the same
    while (b === a) {
        b = Math.floor(Math.random*flashcards1.length);
    }
    bucket = flashcards1[b];
    flashcards1[b] = flashcards1[a]; 
    flashcards1[a] = bucket;
}

var flashcards2 = ["What's the last thing you lied about?", "What is your most defining characteristic?", "Are you lying to yourself about anything?", "How are you, really?", "What is your least favorite personality trait in a person?", "When is the last time you felt lucky to be you?",
"Which one of your parent's personality traits do you want to keep/ let go of?", "What would you tell your younger self and what have you learned from this lesson?", "What is the last thing you lied to your mom about?", "What's the worst pain you've ever been in that wasn't physical?",
"What's your father's name and one thing about him?", "What's the most unexplainable thing that has ever happened to you?", "What would your younger self not believe about your life today?", "What non-domestic animal describes you and why?", "What is your favorite adjective with which to be described?",
"What are you still trying to prove to yourself?", "When is the last time you cried?", "If you could instill one personality trait in your child, what would it be?", "What's the hardest part about dating you?", "What's your favorite song lyric that you can think of off the top of your head?",
"Think of someone that you admire. What made you think about them specifically?", "What's the biggest mistake you've made?", "What's a phrase that you say that you wish you would stop saying?"]

for (i = 0; i<100; i++) {
    a = Math.floor(Math.random*flashcards2.length);
    b = Math.floor(Math.random*flashcards2.length);

    // doesn't let these variables be the same
    while (b === a) {
        b = Math.floor(Math.random*flashcards2.length);
    }
    bucket = flashcards2[b];
    flashcards2[b] = flashcards2[a]; 
    flashcards2[a] = bucket;
}


var flashcards3 = ["Based on what you learned about me what would you recommend I read?", "What about me surprised you?", "Based on what you know about me, do you have a Netflix recommendation?", "What do you think my superpower is?", "What do you think our most important similarities are?", 
"What do you think is one thing I could do that would drastically improve my life?", "What would be the perfect gift for me?", "How would you describe me to a stranger?", "What do I need to hear right now?", "Based on what you've learned about me, does my social media portray me accurately?",
"What is a lesson you will take away from our conversation?", "What can I help you with?", "What do you think do I fear the most?", "Where am I most qualified to give advice about?", "What about me is the hardest for you to understand?", "If we were a band what would be our name?", "Admit something",
"What parts of yourself do you see in me?", "How does one earn your vulnerability?", "I dare you to do something out of your comfort zone next week.", "What do you recommend I should let go of?", "What has this conversation taught you about yourself?", "What do you think my defining characteristic is?", 
"What question were you most afraid to answer?", "Why do you think we met?", "When this game is over, what will be something you will remember about me?", "What do you think my weakness is?", "How do our personalities compliment each other?", "What do you think I should know about myself that perhaps I'm unaware of?",
"What would make you feel closer to me?", "What do you admire most about me?", "In one word, describe how you feel right now.", "Do you believe everyone has a calling? If so, do you think I've found mine?", "What can we create together?", "What answer of mine made you light up?", "What's the most attractive quality about me that isn't physical?"]

for (i = 0; i<100; i++) {
    a = Math.floor(Math.random*flashcards3.length);
    b = Math.floor(Math.random*flashcards3.length);

    // doesn't let these variables be the same
    while (b === a) {
        b = Math.floor(Math.random*flashcards3.length);
    }
    bucket = flashcards3[b];
    flashcards3[b] = flashcards3[a]; 
    flashcards3[a] = bucket;
}


// implement these to only show up after a certain point. Should display "WILDCARD" in big text above the card
var wildcards = ["CREATE YOUR OWN QUESTION TO ASK ME. ANYTHING. MAKE IT COUNT.", "PRESS SHUFFLE ON YOUR MUSIC LIBRARY. EXPLAIN THE FIRST SONG THAT COMES UP!", "SHARE SOMETHING YOU'RE MOST GRATEFUL FOR IN THIS CURRENT MOMENT.", "DESCRIBE THE FIRST PHOTO IN YOUR CAMERA ROLL.", "WHAT DO YOU DISLIKE THAT MOST PEOPLE DON'T?",
"WHAT IS YOUR MOST FAVOURITE MEMORY?", "SHARE YOUR MOST FAVOURITE SONG LYRICS" , "BREAK DOWN YOUR SCREENTIME FOR ME."]

for (i = 0; i<100; i++) {
    a = Math.floor(Math.random*wildcards.length);
    b = Math.floor(Math.random*wildcards.length);

    // doesn't let these variables be the same
    while (b === a) {
        b = Math.floor(Math.random*wildcards.length);
    }
    bucket = wildcards[b];
    wildcards[b] = wildcards[a]; 
    wildcards[a] = bucket;
}


function levelup() {
    alert(flashcards1[o]);
}

document.querySelector("#levelup").addEventListener("click", levelup);


document.querySelector("#refresh").addEventListener("click", handleClick);


alert(flashcards1[o]);
document.querySelector(".first").textContent=flashcards1[0];
document.querySelector(".second").textContent=flashcards1[1];
document.querySelector(".last").textContent=flashcards1[2];
