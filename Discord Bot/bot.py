import discord
import responses

async def send_message(message, user_message, is_private):
    try:
        response = responses.handle_response(user_message)
        await message.author.send(response) if is_private else await message.channel.send(response)
    except Exception as e:
        print(e)

def run_discord_bot():
    TOKEN = 'MTE0MDM5MTM0MjA4NjgxNTc1NQ.G2ai2a.fbZWcuvtXqruDPsKB6xnB0sR3VeOyCHw6TP4Y4'
    client = discord.Client()

    @client.event
    async def on_ready():
        print(f'{client.user} is now running!')

    @client.event
    async def on_message(message):
        # stops infinite loops by identifying that the message came from user and not a bot
        if message.author == client.user:
            return 
        
        username = str(message.author)
        user_message = str(message.content)
        channel = str(message.channel)

        print(f'{username} said {user_message} in ({channel})')

        # sends a private message to the user if there is a question mark in front of it
        if user_message[0] == '?':
            user_message = user_message[1]
            await send_message(message, user_message, is_private = True)
        else: 
            # can add something in front, like an exclamation mark, so that normal messages don't go through bot
            await send_message(message, user_message, is_private = False)

    client.run(TOKEN)

