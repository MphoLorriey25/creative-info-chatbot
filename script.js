const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

const responses = [
  { keywords: ['what is artificial intelligence', 'what is ai'], reply: "Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn. 🤖" },
  { keywords: ['types of ai'], reply: "There are mainly 3 types: Narrow AI (specialized tasks), General AI (human-like intelligence), and Super AI (beyond human intelligence, still theoretical). 🧠" },
  { keywords: ['machine learning'], reply: "Machine Learning is a subset of AI where machines learn patterns from data without being explicitly programmed. 📊" },
  { keywords: ['deep learning'], reply: "Deep Learning uses neural networks with many layers to model complex patterns — like how the brain works! 🧠🔍" },
  { keywords: ['neural network'], reply: "A Neural Network is a series of algorithms inspired by the human brain that helps computers recognize patterns and solve problems. 🕸️" },
  { keywords: ['natural language processing', 'nlp'], reply: "NLP is a field of AI that helps machines understand and interpret human language. That's how chatbots like me work! 💬" },
  { keywords: ['computer vision'], reply: "Computer Vision allows machines to 'see' and interpret images and videos, like recognizing faces or objects. 👁️" },
  { keywords: ['ai ethics'], reply: "AI Ethics deals with ensuring AI systems are fair, transparent, and don’t harm humans. Very important for responsible AI! ⚖️" },
  { keywords: ['can ai think'], reply: "AI can process information and learn, but it doesn't truly 'think' or feel like humans do. 🧠❤️" },
  { keywords: ['future of ai'], reply: "The future of AI is exciting, with possibilities like self-driving cars, better healthcare, and smarter personal assistants! 🚗🏥" },
  { keywords: ['what is chatbot'], reply: "A chatbot is an AI program designed to simulate human conversation, like me! 🤖💬" },
  { keywords: ['difference between ai and ml'], reply: "AI is the broad science of making machines smart; Machine Learning is a method to achieve AI by learning from data. 📚" },
  { keywords: ['who invented ai'], reply: "AI as a field was founded in 1956 at a conference at Dartmouth College by pioneers like John McCarthy. 🎓" },
  { keywords: ['what is reinforcement learning'], reply: "Reinforcement Learning teaches machines to make decisions by rewarding good actions, like training a pet! 🐶🎾" },
  { keywords: ['what is supervised learning'], reply: "Supervised Learning is where models learn from labeled data — they know the right answers during training. ✅" },
  { keywords: ['what is unsupervised learning'], reply: "Unsupervised Learning finds patterns in data without labeled answers — like grouping similar photos. 🔍" },
  { keywords: ['ai in healthcare'], reply: "AI helps doctors diagnose diseases, personalize treatments, and analyze medical data faster. 🏥💡" },
  { keywords: ['ai in gaming'], reply: "AI creates smarter game opponents and immersive experiences. Ever played against a clever bot? 🎮" },
  { keywords: ['what is overfitting'], reply: "Overfitting is when an AI model learns too much noise from training data and performs poorly on new data. 🎯" },
  { keywords: ['what is dataset'], reply: "A dataset is a collection of data used to train and evaluate AI models. 📂" },
  // Fallback general responses
  { keywords: ['hi', 'hello', 'hey'], reply: "Hello! How can I assist you with AI today? 😊" },
  { keywords: ['thank you', 'thanks'], reply: "You're welcome! Happy to help! 😊" },
  { keywords: ['bye', 'goodbye'], reply: "Goodbye! Come back anytime to chat about AI! 👋" },
];

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function findResponse(input) {
  input = input.toLowerCase();
  for (const item of responses) {
    for (const keyword of item.keywords) {
      if (input.includes(keyword)) {
        return item.reply;
      }
    }
  }
  return "Sorry, I don't have an answer for that yet. Try asking about AI topics! 🤔";
}

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userText = userInput.value.trim();
  if (!userText) return;

  addMessage(userText, 'user');
  userInput.value = '';
  setTimeout(() => {
    const botReply = findResponse(userText);
    addMessage(botReply, 'bot');
  }, 700);
});
