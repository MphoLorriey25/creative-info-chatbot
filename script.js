const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

const API_KEY = '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'; // <-- Replace here

// Function to add a chat message to the box
function appendMessage(text, className) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message ' + className;
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Call OpenRouter API with the user message and return bot reply
async function getBotResponse(message) {
  const url = 'https://openrouter.ai/api/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`
  };
  const body = {
    model: 'gpt-4o-mini', // you can try other models if you want
    messages: [{ role: 'user', content: message }]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || 'API error');
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error fetching from OpenRouter:', error);
    return "Sorry, I couldn't connect to the AI service. Please try again later.";
  }
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userText = userInput.value.trim();
  if (!userText) return;

  appendMessage(userText, 'user-message');
  userInput.value = '';
  appendMessage('Typing...', 'bot-message');

  const botReply = await getBotResponse(userText);

  // Remove the 'Typing...' message
  const typingMessage = chatBox.querySelector('.bot-message:last-child');
  if (typingMessage && typingMessage.textContent === 'Typing...') {
    typingMessage.remove();
  }

  appendMessage(botReply, 'bot-message');
});

