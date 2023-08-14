// this removes overlays when they are clicked on... possible loading screen of "click here to begin"
// document.querySelector(".overlay").addEventListener("click", handleClick);

// function handleClick() {
//     document.querySelector(".overlay").style.display = "none";
// } 

var flashcards1 = ["Do you think I've ever been in love?", "What about me is most strange or unfamiliar?", "Do you think I've ever had my heart broken?", "What do you think I'd splurge on?", 
"What do you think my major is?", "What do you think I'm going to do in the future (work/employment)?", "What was your first impression of me?", "Do you think I was popular in high school?", "On a scale of 1 - 10, how messy do you think my car is?", "Do you think I like hot cheetos?",
"Do you think I like to read?", "Do you think I'm in Greek Life?", "Do you think I have a sibling? Older or younger?", "Who do you think is my favorite artist?", "Where do you think I grew up?",
"What do you think my favorite Starbucks drink is?", "Do you think I like Taco Bell?", "What sports are you into? Why?"]

// randomly sorts this array so that the order isn't quite the same every time
var a;
var b;
var bucket;
for (var x = 0; x<100; x++) {
    a = Math.floor(Math.random()*flashcards1.length);
    b = Math.floor(Math.random()*flashcards1.length);

    // doesn't let these variables be the same
    while (b === a) {
        b = Math.floor(Math.random()*flashcards1.length);
    }
    bucket = flashcards1[b];
    flashcards1[b] = flashcards1[a]; 
    flashcards1[a] = bucket;
}

var flashcards2 = ["What's the last thing you lied about?", "What is your most defining characteristic?", "Are you lying to yourself about anything?", "How are you, really?", "What is your least favorite personality trait in a person?", "When is the last time you felt lucky to be you?",
"Which one of your parent's personality traits do you want to keep/ let go of?", "What would you tell your younger self and what have you learned from this lesson?", "What is the last thing you lied to your mom about?", "What's the worst pain you've ever been in that wasn't physical?",
"What's your father's name and one thing about him?", "What's the most unexplainable thing that has ever happened to you?", "What would your younger self not believe about your life today?", "What non-domestic animal describes you and why?", "What is your favorite adjective with which to be described?",
"What are you still trying to prove to yourself?", "When is the last time you cried?", "If you could instill one personality trait in your child, what would it be?", "What's the hardest part about dating you?", "What's your favorite song lyric that you can think of off the top of your head?",
"Think of someone that you admire. What made you think about them specifically?", "What's the biggest mistake you've made?", "What's a phrase that you say that you wish you would stop saying?", "What are you most excited for today? Big or small.", "What's the most fun you've ever had? Explain.", 
"What movie do you wish you could watch again for the first time, why? Explain.", "What's the most unexplainable thing that's ever happened to you?", "What have you tolerated from people in the past that you no longer have space for?", "What are you feeling a lot of lately?", 
"What do you need right now but aren't communicating?", "What are you currently working through that others don't see?", "What was your biggest turning point in your dating life?", "What are you overthinking right now?", "What did your last relationship teach you about yourself?", 
"What belief about yourself no longer serves you?", "Who in your life can you be most vulnerable with?", "When asked, 'how are you', how often do you answer truthfully?", "What is your most toxic trait you can admit to?", "What is your heart telling you?", "Who in your life deserves the biggest thank you? Let them know if you can.",
"What can you be kinder towards yourself today?", "What is your mother's name and the most valuable thing she has taught you thus far?", "What are you still trying to prove to yourself?", "What have you been taking for granted lately?", "Is there a feeling you miss?", "What do you need to hear right now?", 
"What about yourself is hard to admit?", "What is one thing you can do to be a better person?", "What did this week/month/year leave you with?", "What lesson should you have learned by now?", "What dating advice would you give yourself?", "What title would you give this chapter in your life?", "When was the last's time you felt most yourself?",
"What part of your life works? What part of your life hurts?", "What has been your happiest memory this past year?", "What would you never want to change about yourself?", "When was the last time you were able to use your pain to help someone else?", "Are you missing anyone right now? Do you think they are missing you?",
"What do you think my main love language is?", "What is the hardest truth you had to face this year?", "What's a feeling you're uncomfortable sharing with me?", "What brought you the most unexpected joy recently?", "What was the lesson from your most recent painful experience?", "What about me is hardest for you to understand?", 
"Have I ever challenged your worldview? How so?", "Have you changed your mind about anything recently?", "How did you get over your first love?", "What's the best lesson an ex has ever taught you?", "What do you need right now, more than anything?", "When was the last time you felt lucky to be you?", "When do you feel most optimistic? Explain.",
"What has being single/ in a relationship taught you about yourself, if anything?", "What's been keeping you sane lately?", "How would you describe the feeling of being in love in one word?", "Do you think I fall in love easily? Why or a why not?", "What lesson took you the longest to unlearn?", "What dating advice would you give to your younger self?",
"How old do you feel, emotionally?", "What's the most embarrassing thing that's ever happened to you?", "Admit something: what could you have done better in your previous relationship(s)?", "What did the people who raised you teach you about love?", "Describe your perfect date.", "What are you passionate about?", "What are you not giving enough time to, currently?",
"When's the last time you surprised yourself?", "How would you describe your ex in three words? How would they describe you?", "How's your heart today, really?", "What type of social situation makes you feel most awkward?", "What makes a friend into a best friend?", "What have you let go of this year that's made the most positive change?", 
"What question are you trying to answer in your life right now?", "What is the nicest thing you can remember doing for a friend? Permission to brag.", "When was the last time someone has made you feel special on your birthday?", "Has a quote ever changed your worldview?", "What's the most important thing you're currently putting off?",
"What are you better at than most people you know?", "What do you need most help with currently?", "What do you wish you could spend more time doing?", "What was your all-time-low, and what has it taught you the most?", "What leaves you the most energized, what leaves you the most drained?"]

for (var y = 0; y<100; y++) {
    a = Math.floor(Math.random()*flashcards2.length);
    b = Math.floor(Math.random()*flashcards2.length);

    // doesn't let these variables be the same
    while (b === a) {
        b = Math.floor(Math.random()*flashcards2.length);
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
"What would make you feel closer to me?", "What do you admire most about me?", "In one word, describe how you feel right now.", "Do you believe everyone has a calling? If so, do you think I've found mine?", "What can we create together?", "What answer of mine made you light up?", "What's the most attractive quality about me that isn't physical?",
"If you made me a playlist, what 3 songs would be on it? Explain.", "Is there anyone who has changed your life but doesn't know it?", "How can I be there for you?", "What do you think my strength is?", "When was the last time you surprised yourself?", "What would you like to learn from me?", "What can I teach you?",
"Who do I remind you of?", "Based off what you've learned about me, do you have any netflix recommendations?", "In a word, how would you describe our conversation?", "Why do you think we met?", "What is something you've learned about yourself this week?", "What would your younger self not believe about your life today?", 
"What is one thing you think I can do that would dramatically improve my life?", "How do our personalities compliment each other?", "Do you think the image you have of yourself matches the image people see you as?", "How would you describe me to a stranger?", "Are any of your insecurities hurting someone else by accident?"]

for (var z = 0; z<100; z++) {
    a = Math.floor(Math.random()*flashcards3.length);
    b = Math.floor(Math.random()*flashcards3.length);

    // doesn't let these variables be the same
    while (b === a) {
        b = Math.floor(Math.random()*flashcards3.length);
    }
    bucket = flashcards3[b];
    flashcards3[b] = flashcards3[a]; 
    flashcards3[a] = bucket;
}


// implement these to only show up after a certain point. Should display "WILDCARD" in big text above the card
var wildcards = ["CREATE YOUR OWN QUESTION TO ASK ME. ANYTHING. MAKE IT COUNT.", "PRESS SHUFFLE ON YOUR MUSIC LIBRARY. EXPLAIN THE FIRST SONG THAT COMES UP!", "SHARE SOMETHING YOU'RE MOST GRATEFUL FOR IN THIS CURRENT MOMENT.", "DESCRIBE THE FIRST PHOTO IN YOUR CAMERA ROLL.", "WHAT DO YOU DISLIKE THAT MOST PEOPLE DON'T?",
"WHAT IS YOUR MOST FAVOURITE MEMORY?", "SHARE YOUR MOST FAVOURITE SONG LYRICS" , "BREAK DOWN YOUR SCREENTIME FOR ME.", "Staring contest! First to smile or look away has to show an embarrassing video, at least 3 years old.", "Reveal your most played song, at the moment. Explain.", "Set an intention for this week. Stick to it.",
"Sing your favourite song lyrics off the top of your head. Both Players.", "What is your favourite memory we share together? Both players. Compare.", "Write down the three most important things to you in a relationship (30 seconds). Compare.", "Admit a dating pet peeve (30 seconds). Compare.", "Think of a movie that always makes you cry. On the count of 3, say your answers out loud. (Both players).",
"Do you need advice on anything in your life right now? Permission to vent. (Both players).", "Write down the three most important qualities in a best friend. (1 minute). Compare."]

for (var zz = 0; zz<100; zz++) {
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


var level = 1;
var i = 0;
var j = 0;
var k = 0;

document.querySelector("#first").textContent=flashcards1[0];
document.querySelector("#second").textContent=flashcards1[1];
document.querySelector("#third").textContent=flashcards1[2];

function levelup() {
    if (level < 3) {
        level++;
        i = 0;
        j = 0;
        k = 0;
        alert("Moving up a level!");
        if (level == 2) {
            document.querySelector("#first").textContent=flashcards2[j];
            document.querySelector("#second").textContent=flashcards2[j+1];
            document.querySelector("#third").textContent=flashcards2[j+2];
        }
    
        if (level == 3) {
            document.querySelector("#first").textContent=flashcards3[k];
            document.querySelector("#second").textContent=flashcards3[k+1];
            document.querySelector("#third").textContent=flashcards3[k+2];
        }
    }

    else {
        alert("Stay tuned for more levels!");
    }
}

function refresh() {
    if (level == 1) {
        i+=3;
        document.querySelector("#first").textContent=flashcards1[i];
        document.querySelector("#second").textContent=flashcards1[i+1];
        document.querySelector("#third").textContent=flashcards1[i+2];
        if (i>= (flashcards1.length - 1)) {
            level++;
            i = 0;
            alert("Moving to Level 2: Connection.");
        }
    }

    if (level == 2) {
        j+=3;
        document.querySelector("#first").textContent=flashcards2[j];
        document.querySelector("#second").textContent=flashcards2[j+1];
        document.querySelector("#third").textContent=flashcards2[j+2];
        if (j>= (flashcards2.length - 1)) {
            level++;
            j = 0;
            alert("Moving to Level 3: Reflection.");
        }
    }

    if (level == 3) {
        k+=3;
        document.querySelector("#first").textContent=flashcards3[k];
        document.querySelector("#second").textContent=flashcards3[k+1];
        document.querySelector("#third").textContent=flashcards3[k+2];
        if (k >= (flashcards3.length - 1)) {
            alert("No more new flashcards. Back to level 1!");
            level = 1;
            k = 0;
            document.querySelector("#first").textContent=flashcards1[i];
            document.querySelector("#second").textContent=flashcards1[i+1];
            document.querySelector("#third").textContent=flashcards1[i+2];
        }
    }

   
}

document.querySelector("#levelup").addEventListener("click", levelup);
document.querySelector("#refresh").addEventListener("click", refresh);




