import discord
from discord.ext import commands
import random

TOKEN = 'MTE0MDM5MTM0MjA4NjgxNTc1NQ.GXdBUc.AsbKXqa0unrYrl6eYXHs_cjkWb3ilb2as9w7RA'
prompts1 = ["Do you think I've ever been in love?", "What about me is most strange or unfamiliar?", "Do you think I've ever had my heart broken?", "What do you think I'd splurge on?", 
"What do you think my major is?", "What do you think I'm going to do in the future (work/employment)?", "What was your first impression of me?", "Do you think I was popular in high school?", "On a scale of 1 - 10, how messy do you think my car is?", "Do you think I like hot cheetos?",
"Do you think I like to read?", "Do you think I'm in Greek Life?", "Do you think I have a sibling? Older or younger?", "Who do you think is my favorite artist?", "Where do you think I grew up?",
"What do you think my favorite Starbucks drink is?", "Do you think I like Taco Bell?", "What sports are you into? Why?"]

prompts2 = ["What's the last thing you lied about?", "What is your most defining characteristic?", "Are you lying to yourself about anything?", "How are you, really?", "What is your least favorite personality trait in a person?", "When is the last time you felt lucky to be you?",
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

prompts3 = ["Based on what you learned about me what would you recommend I read?", "What about me surprised you?", "Based on what you know about me, do you have a Netflix recommendation?", "What do you think my superpower is?", "What do you think our most important similarities are?", 
"What do you think is one thing I could do that would drastically improve my life?", "What would be the perfect gift for me?", "How would you describe me to a stranger?", "What do I need to hear right now?", "Based on what you've learned about me, does my social media portray me accurately?",
"What is a lesson you will take away from our conversation?", "What can I help you with?", "What do you think do I fear the most?", "Where am I most qualified to give advice about?", "What about me is the hardest for you to understand?", "If we were a band what would be our name?", "Admit something",
"What parts of yourself do you see in me?", "How does one earn your vulnerability?", "I dare you to do something out of your comfort zone next week.", "What do you recommend I should let go of?", "What has this conversation taught you about yourself?", "What do you think my defining characteristic is?", 
"What question were you most afraid to answer?", "Why do you think we met?", "When this game is over, what will be something you will remember about me?", "What do you think my weakness is?", "How do our personalities compliment each other?", "What do you think I should know about myself that perhaps I'm unaware of?",
"What would make you feel closer to me?", "What do you admire most about me?", "In one word, describe how you feel right now.", "Do you believe everyone has a calling? If so, do you think I've found mine?", "What can we create together?", "What answer of mine made you light up?", "What's the most attractive quality about me that isn't physical?",
"If you made me a playlist, what 3 songs would be on it? Explain.", "Is there anyone who has changed your life but doesn't know it?", "How can I be there for you?", "What do you think my strength is?", "When was the last time you surprised yourself?", "What would you like to learn from me?", "What can I teach you?",
"Who do I remind you of?", "Based off what you've learned about me, do you have any netflix recommendations?", "In a word, how would you describe our conversation?", "Why do you think we met?", "What is something you've learned about yourself this week?", "What would your younger self not believe about your life today?", 
"What is one thing you think I can do that would dramatically improve my life?", "How do our personalities compliment each other?", "Do you think the image you have of yourself matches the image people see you as?", "How would you describe me to a stranger?", "Are any of your insecurities hurting someone else by accident?"]

wildcards = ["CREATE YOUR OWN QUESTION TO ASK ME. ANYTHING. MAKE IT COUNT.", "PRESS SHUFFLE ON YOUR MUSIC LIBRARY. EXPLAIN THE FIRST SONG THAT COMES UP!", "SHARE SOMETHING YOU'RE MOST GRATEFUL FOR IN THIS CURRENT MOMENT.", "DESCRIBE THE FIRST PHOTO IN YOUR CAMERA ROLL.", "WHAT DO YOU DISLIKE THAT MOST PEOPLE DON'T?",
"WHAT IS YOUR MOST FAVOURITE MEMORY?", "SHARE YOUR MOST FAVOURITE SONG LYRICS" , "BREAK DOWN YOUR SCREENTIME FOR ME.", "Staring contest! First to smile or look away has to show an embarrassing video, at least 3 years old.", "Reveal your most played song, at the moment. Explain.", "Set an intention for this week. Stick to it.",
"Sing your favourite song lyrics off the top of your head. Both Players.", "What is your favourite memory we share together? Both players. Compare.", "Write down the three most important things to you in a relationship (30 seconds). Compare.", "Admit a dating pet peeve (30 seconds). Compare.", "Think of a movie that always makes you cry. On the count of 3, say your answers out loud. (Both players).",
"Do you need advice on anything in your life right now? Permission to vent. (Both players).", "Write down the three most important qualities in a best friend. (1 minute). Compare."]

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(intents=intents,command_prefix = '!')

@client.event
async def on_ready():
    print("The bot is ready for use")
    channel = client.get_channel(1140502068247928886)  # Replace with your Welcome channel ID
    await channel.send(f'**Welcome to the Healthut bot!**\n\nInteracting with others can be hard. Sometimes we\'re scared of rejection or judgment, and other times we just don\'t know what to say! Healthut is a bot that provides prompts for one-on-one conversations or with a group! Treat it as a game: one person generates a set of questions, and the other person (or people) get to choose one of the three displayed options to answer.\n\n**Commands:**\n\n***!prompt*** - generates a random set of three questions or options for the other person/people to answer. These three questions are categorized as *level 1, 2, and 3*, where level 1 focuses on first impressions and how you read others, level 2 focuses on emotions and digging deeper, and level 3 focuses on reflection of the players and the moment.\n\n***!wildcard*** - generates a random wildcard (which has a bit of a wilder prompt ;) ← use this after at least a few rounds of regular prompts!\n\nHope you all enjoy, and have fun learning more about each other!')

@client.command()
async def prompt(ctx):
    await ctx.send(f'**Level 1:** {prompts1[random.randint(0, len(prompts1))]} \n**Level 2:** {prompts2[random.randint(0, len(prompts2))]} \n**Level 3**: {prompts3[random.randint(0, len(prompts3))]}')

@client.command()
async def wildcard(ctx):
    await ctx.send(f'**WILDCARD:** {wildcards[random.randint(0, len(wildcards))]}')

client.run(TOKEN)