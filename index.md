---
layout: default
title: Welcome to Mizz Media Pro
---

<style>
:root {
  --main-color: #801336;
  --highlight-color: #f2d8a7;
  --text-color: #1c1c1c;
}

body {
  font-family: 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  background: linear-gradient(to bottom, #fdf6ec, #fff);
}

section {
  padding: 60px 20px;
  max-width: 960px;
  margin: auto;
}

h1, h2, h3 {
  color: var(--main-color);
}

a {
  color: var(--main-color);
  text-decoration: underline;
}

nav {
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 10px 0;
  border-bottom: 2px solid var(--main-color);
  text-align: center;
}

nav a {
  margin: 0 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--main-color);
}

footer {
  text-align: center;
  padding: 40px 20px;
  background: #f2d8a7;
}
</style>

<nav>
  <a href="#welcome">Welcome</a>
  <a href="#offers">What I Offer</a>
  <a href="#demo">Demo Chatbot</a>
  <a href="#packages">Packages</a>
  <a href="#contact">Contact</a>
</nav>

<br><br><br>

<section id="welcome">
  <h1>Welcome to Mizz Media Pro</h1>
  <p>I help hair & beauty brands glow up — selling out services and products with stunning content, smart Meta ads, and AI that handles the hustle for you.</p>

  <h2>Hi, I’m Nana Johnson</h2>
  <p>Your go-to expert for helping Hair & Beauty brands sell out services and products while building a powerful online presence.</p>

  <ul>
    <li>💡 Smart content strategy</li>
    <li>📊 High-converting Meta ads</li>
    <li>🤖 AI that works 24/7</li>
  </ul>
</section>

<section id="offers">
  <h2>What I Offer</h2>
  <ul>
    <li><strong>Social Media Management</strong> – Specialized content, copy, and scheduling</li>
    <li><strong>Meta Ads</strong> – Targeted Facebook & Instagram campaigns</li>
    <li><strong>AI Chatbot</strong> – 24/7 sales and FAQ automation</li>
    <li><strong>Sales Funnels</strong> – Turn browsers into buyers</li>
    <li><strong>Live Dashboards</strong> – Real-time performance tracking</li>
  </ul>
</section>

<section id="demo">
  <h2>Demo Chatbot</h2>
  <p>Type "hi", "ai", "ads", "price", or "sales" to try it out! Enter your <strong>email</strong> in the chat to get special offers.</p>

  <div id="chatbot-container">
    <h3>💬 Ask MizzMediaBot</h3>
    <div id="chatlog" style="display: flex; flex-direction: column;"></div>
    <div id="input-area">
      <input id="userInput" type="text" placeholder="Ask me anything..." onkeydown="if(event.key==='Enter') sendMessage()" />
      <button id="sendBtn" onclick="sendMessage()">Send</button>
    </div>
  </div>

  <script>
    const chatlog = document.getElementById('chatlog');
    const userInput = document.getElementById('userInput');

    const responses = [
      { keywords: ['hi', 'hello'], reply: 'Hi there! Need help with content, ads or AI? 😊' },
      { keywords: ['ai', 'chatbot'], reply: 'I automate replies 24/7 using smart chatbots!' },
      { keywords: ['ads', 'meta'], reply: 'Meta Ads help you attract your dream clients.' },
      { keywords: ['price', 'cost'], reply: 'Packages start at £1,000/month. Ask for more!' },
      { keywords: ['sales'], reply: 'I help optimize funnels to boost conversions.' }
    ];

    function appendMessage(text, sender = 'bot') {
      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${sender}`;
      bubble.textContent = text;
      chatlog.appendChild(bubble);
      chatlog.scrollTop = chatlog.scrollHeight;
    }

    function sendMessage() {
      const input = userInput.value.trim();
      if (!input) return;

      appendMessage(input, 'user');
      userInput.value = '';

      const userText = input.toLowerCase();
      const emailRegex = /\S+@\S+\.\S+/;

      setTimeout(() => {
        let reply = "Try asking about AI, pricing, or ads!";

        if (emailRegex.test(userText)) {
          reply = "Thanks! 💌 Your email is saved. Look out for a free offer!";
          // You can connect this to MailerLite via API later
        } else {
          for (const { keywords, reply: r } of responses) {
            if (keywords.some(k => userText.includes(k))) {
              reply = r;
              break;
            }
          }
        }
        appendMessage(reply, 'bot');
      }, 500);
    }
  </script>

  <style>
    #chatbot-container {
      max-width: 500px;
      margin: 40px auto;
      font-family: sans-serif;
      color: #1c1c1c;
    }

    #chatlog {
      height: 300px;
      overflow-y: auto;
      background: #f2d8a7;
      border: 2px solid #801336;
      padding: 10px;
      border-radius: 10px;
    }

    .chat-bubble {
      margin: 10px 0;
      padding: 10px;
      border-radius: 8px;
      max-width: 85%;
    }

    .user {
      background: #801336;
      color: white;
      text-align: right;
      align-self: flex-end;
    }

    .bot {
      background: #fff;
      border: 1px solid #801336;
    }

    #input-area {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }

    #userInput {
      flex: 1;
      padding: 10px;
      border: 1px solid #801336;
      border-radius: 5px;
    }

    #sendBtn {
      background: #801336;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }
  </style>
</section>

<section id="packages">
  <h2>Packages</h2>

  <h3>🟦 Essentials</h3>
  <ul>
    <li>Social media management</li>
    <li>Instagram, Facebook, TikTok</li>
    <li>Branded visuals + captions</li>
    <li>Optional AI chatbot</li>
  </ul>

  <h3>🟪 Growth</h3>
  <ul>
    <li>Everything in Essentials</li>
    <li>AI chatbot + lead capture</li>
    <li>Booking funnel audit</li>
    <li>Content upgrade: Reels/shorts</li>
  </ul>

  <h3>🟥 Elite</h3>
  <ul>
    <li>Everything in Growth</li>
    <li>Advanced Meta Ads + retargeting</li>
    <li>Custom funnel & performance dashboard</li>
    <li>Concierge support</li>
  </ul>

  <h3>⚙️ Bespoke – Custom Quote</h3>
  <ul>
    <li>Multilingual chatbot</li>
    <li>Email marketing automation</li>
    <li>Google & YouTube Ads</li>
    <li>Dedicated account manager</li>
  </ul>
</section>

<section id="contact">
  <h2>Book a Free Call</h2>

  <div class="calendly-inline-widget" data-url="https://calendly.com/mizzmediapro" style="min-width:320px;height:700px;"></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

  <br><br>

  <h3>Contact</h3>
  <p>Email: <a href="mailto:connect@mizzmediapro.com">connect@mizzmediapro.com</a></p>

  <p>Follow Me:</p>
  <a href="https://www.instagram.com/mizzmediapro" target="_blank">Instagram</a> |
  <a href="https://www.tiktok.com/@mizzmedia" target="_blank">TikTok</a> |
  <a href="https://www.linkedin.com/in/nana-e-a-johnson-282522a6" target="_blank">LinkedIn</a>
</section>

<!-- Floating Chatbot Icon (Optional) -->
<style>
  #floating-chat {
    position: fixed;
    bottom: 25px;
    right: 25px;
    background: #801336;
    color: white;
    padding: 15px 20px;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
</style>

<div id="floating-chat" onclick="document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });">
  💬 Chat
</div>

