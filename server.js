// تعریف توکن و URL
const API_URL_VIRA = "https://api.example.com/chat"; // تغییر نام متغیر
const API_TOKEN = "YOUR_API_TOKEN";

async function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    const chatBox = document.getElementById("chat-box");

    if (!userInput) return;

    // نمایش پیام کاربر
    const userMessage = `<div class="message user-message">${userInput}</div>`;
    chatBox.innerHTML += userMessage;

    try {
        const response = await fetch(API_URL_VIRA, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_TOKEN}`
            },
            body: JSON.stringify({ message: userInput })
        });

        if (!response.ok) {
            throw new Error("مشکلی در ارتباط با API وجود دارد.");
        }

        const data = await response.json();
        const botMessage = `<div class="message bot-message">${data.reply}</div>`;
        chatBox.innerHTML += botMessage;
    } catch (error) {
        const errorMessage = `<div class="message bot-message">خطا: پاسخ چت‌بات قابل دریافت نیست.</div>`;
        chatBox.innerHTML += errorMessage;
        console.error("Error:", error);
    }

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}