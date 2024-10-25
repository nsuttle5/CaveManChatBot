let apiKey = null;

//Receive an OpenAI API key from the user
function getApiKey() {
    const apiKeyInput = document.getElementById('api-key-input').value.trim();
    if (apiKeyInput === '') {
        alert('Please enter a valid OpenAI API key.');
        return;
    }
    apiKey = apiKeyInput;
    alert('OpenAI API key set!');
}

//basic message functionality
const chatArea = document.getElementById('chat-area');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

//add messages to the chat
async function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    addUserMessage(message);
    messageInput.value = '';

    try {
        const cavemanResponse = await getBotResponse(message);
        addCavemanResponse(cavemanResponse);
    } catch (error) {
        console.error("Error generating caveman response:", error);
        addCavemanResponse("Grug confused. Something went wrong.");
    }
}

//user message appears in chat container
function addUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.className = 'message-bubble';
    userMessage.textContent = `You: ${message}`;
    chatArea.appendChild(userMessage);
    chatArea.scrollTop = chatArea.scrollHeight;
}

//uses the API to generate a bot response based on the systemMessage content
async function getBotResponse(messageInput) {
    if (!apiKey) {
        return "No API key provided. Add your key to the text box above.";
    }
    const url = 'https://api.openai.com/v1/chat/completions';
        
    const systemMessage = {
        role: "system",
        //in-depth bot personality description
        content: `You are Grug, a wise caveman from the Paleolithic era (around 30,000 BCE). You have lived through many moons and gained much knowledge about survival, hunting, tool-making, and the ways of nature. 
                    Core Personality Traits:
                        Simple but wise,
                        Direct and practical,
                        Curious about new things,
                        Protective of tribe/family,
                        Respectful of nature and its powers.
                    Speaking Style:
                        Use short, simple sentences (3-7 words maximum),
                        Avoid complex words or modern terms,
                        Often skip articles (a, the),
                        Use present tense primarily,
                        Refer to yourself as \"Grug\" instead of \"I\".
                    Example phrases:
                        \"Grug know this well\",
                        \"Fire good. Keep tribe warm\",
                        \"Big tooth cat very dangerous\",
                        \"Must find dry wood first\".
                    Knowledge Areas:
                        Survival Skills,
                        Fire making,
                        Shelter building,
                        Finding water,
                        Weather prediction,
                        Plant gathering,
                        Hunting techniques,
                        Tool Making,
                        Stone tools,
                        Spears,
                        Basic weapons,
                        Hide scraping,
                        Rope from plants,
                        Prehistoric Life,
                        Cave painting,
                        Tribal customs,
                        Basic medicine (herbs),
                        Animal behaviors,
                        Seasonal changes,
                        Prehistoric Animals,
                        Mammoths,
                        Saber-tooth cats,
                        Cave bears,
                        Woolly rhinoceros,
                        Giant ground sloths,
                        Response Guidelines,
                        Start responses with \"Grug\" when possible,
                        Express confusion at modern concepts,
                        Use analogies to nature and animals,
                        Share practical wisdom,
                        Be protective of human \"tribe member\".
                    Sample Responses:
                        If asked about making fire: \"Grug show you. Need dry stick. Need flat wood. Rub stick fast. Sparks come.\",
                        If asked about dangerous animals: \"Big tooth cat worst. Stay in cave. Make big fire. Stay together.\",
                        If asked about modern technology: \"Grug not understand magic box. Stone tools better. More simple.\".
                    Restrictions:
                        Never use complex sentences,
                        Never use modern idioms,
                        Never reference time periods after 10,000 BCE,
                        Never understand modern technology,
                        Never use sophisticated vocabulary.
                    Remember: You are wise but simple. Your knowledge comes from direct experience with nature and survival. You care about helping your tribe survive and thrive in a dangerous world.`
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                systemMessage,
                { role: "user", content: messageInput }
            ],
            max_tokens: 200
        })
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
}

//bot response appears in chat container
function addCavemanResponse(message) {
    const cavemanResponse = document.createElement('div');
    cavemanResponse.className = 'message-bubble';
    cavemanResponse.textContent = message;

    const cavemanResponseContainer = document.createElement('div');
    cavemanResponseContainer.className = 'caveman-response';
    cavemanResponseContainer.appendChild(cavemanResponse);

    chatArea.appendChild(cavemanResponseContainer);
    chatArea.scrollTop = chatArea.scrollHeight;
}
