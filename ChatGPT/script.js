import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://ai.liara.ir/api/v1/6846f3cbf1adf322202df4f1',
  apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2ODE0OGQ5NDUwOTYzZjkzNDg4OTM1Y2UiLCJ0eXBlIjoiYXV0aCIsImlhdCI6MTc0OTQ4MDUwNX0.eByNDp2YorFigpC6lQh55UyZOQYGGLSw6YYH4FAY-AA',
});

document.getElementById('send-btn').addEventListener('click', async () => {
  const userInput = document.getElementById('user-input').value;
  if (!userInput.trim()) return;

  // نمایش پیام کاربر
  const chatBox = document.getElementById('chat-box');
  chatBox.innerHTML += `<div class="user-message">${userInput}</div>`;

  const response = await openai.chat.completions.create({
    model: 'openai/gpt-4o-mini',
    messages: [{ role: 'user', content: userInput }],
  });

  // نمایش پیام هوش مصنوعی
  chatBox.innerHTML += `<div class="ai-message">${response.choices[0].message.content}</div>`;
  document.getElementById('user-input').value = "";
});
