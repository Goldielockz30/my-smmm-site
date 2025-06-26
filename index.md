---
layout: default
title: Welcome to Mizz Media Pro
---
<style>
  :root {
    --color-primary: #801336; /* Burgundy */
    --color-gold: #f7e7ce;    /* Soft cream */
    --color-text: #000000;    /* Black */
  }

  /* Full-page smooth gradient background */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, var(--color-primary), var(--color-gold));
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--color-text);
  }

  /* Make all wrapper and containers transparent to show gradient */
  body, .page, .page__inner-wrap, .layout--single, #main, .wrapper, .wrapper--site, #content, section {
    background: transparent !important;
    box-shadow: none !important;
  }

  /* Section padding and max width */
  section {
    padding: 60px 20px;
    max-width: 960px;
    margin: auto;
  }

  /* Containers background transparent, text black */
  .container, .page__content {
    background: transparent !important;
    padding: 0;
    border-radius: 0;
    color: var(--color-text);
  }

  /* === Header Styling === */
  .site-header {
    background-color: var(--color-primary) !important; /* Burgundy */
    box-shadow: none !important;
    border-bottom: 2px solid var(--color-primary);
    margin: 0;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10000;
  }

  .site-header nav {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    text-align: center;
    max-width: 960px;
  }

  .site-header nav a {
    margin: 0 18px;
    font-weight: bold;
    color: var(--color-gold) !important; /* cream text on burgundy header */
    text-decoration: none;
    display: inline-block;
    padding: 12px 0;
    font-size: 1rem;
  }

  .site-header nav a:hover {
    color: var(--color-gold);
    text-decoration: underline;
  }

  /* To avoid content behind fixed nav */
  body > *:not(.site-header) {
    margin-top: 60px;
  }

  /* Headings color black */
  h1, h2, h3 {
    color: var(--color-text);
  }

  /* Links color black */
  a {
    color: var(--color-text);
    text-decoration: underline;
  }

  a:hover {
    color: var(--color-primary);
  }

  /* Chatbot styles */
  #chatbot-container {
    max-width: 500px;
    margin: 40px auto 0;
    font-family: sans-serif;
    color: var(--color-text);
  }

  #chatlog {
    height: 300px;
    overflow-y: auto;
    background: var(--color-gold);
    border: 2px solid var(--color-primary);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .chat-bubble {
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    max-width: 85%;
  }

  .user {
    background: var(--color-primary);
    color: white;
    text-align: right;
    align-self: flex-end;
  }

  .bot {
    background: var(--color-gold);
    border: 1px solid var(--color-primary);
  }

  #input-area {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  #userInput {
    flex: 1;
    padding: 10px;
    border: 1px solid var(--color-primary);
    border-radius: 5px;
    color: var(--color-text);
  }

  #sendBtn {
    background: var(--color-primary);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Floating Chatbot Icon */
  #floating-chat {
    position: fixed;
    bottom: 25px;
    right: 25px;
    background: var(--color-primary);
    color: var(--color-gold);
    padding: 15px 20px;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    font-weight: bold;
    user-select: none;
  }

  footer {
    max-width: 960px;
    margin: 40px auto 20px;
    padding: 10px 20px;
    text-align: center;
    color: var(--color-text);
    font-weight: bold;
  }

  /* Contact links with icons horizontal */
  #contact-links {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
  }

  #contact-links a img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    border-radius: 5px;
    transition: transform 0.2s ease;
  }

  #contact-links a img:hover {
    transform: scale(1.1);
  }
</style>

<header class="site-header">
  <nav>
    <a href="#welcome">Welcome</a>
    <a href="#offers">What I Offer</a>
    <a href="#demo">Demo Chatbot</a>
    <a href="#packages">Packages</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section id="welcome">
  <h1>Welcome to Mizz Media Pro</h1>
  <p>I help hair & beauty brands glow up — selling out services and products with stunning content, smart Meta ads, and AI that handles the hustle for you.</p>

  <h2>Hi, I’m Nana Johnson</h2>
  <p>Your go-to expert for helping Hair & Beauty brands sell out services and products while building a powerful online presence.</p>


</section>

<section id="offers">
  <h2>What I Offer</h2>
  <ul>
  

### Social Media Management

Specialised content and marketing strategies, schedualing, copywriting, and community engagement accross multiple platforms.

### Meta Ads Management

Get laser-targeted Facebook and Instagram ads to maximise ROI.

### AI Chatbot Integration

Automate guest communication 24/7 with smart chatbots that answer FAQs and boost sales.

### Sales Funnel Optimization

Level up your sales flow to turn browsers into buyers and boost your revenue.

### Performance Analytics Dashboards

Live dashboards with real-time insights on growth, engagement, and conversions.
  </ul>
</section>

<section id="demo">
  <h2>Demo Chatbot</h2>
  <p>Type "hi", "ai", "ads", "price", or "sales" to try it out. 

**Bonus*** Enter your <strong>email</strong> in the chat to get special offers!</p>

  <div id="chatbot-container">
    <h3>💬 Ask MizzMediaBot</h3>
    <div id="chatlog"></div>
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
          reply = "Thanks for sharing your email! I'll send you exclusive offers soon.";
        } else {
          for (const item of responses) {
            if (item.keywords.some(k => userText.includes(k))) {
              reply = item.reply;
              break;
            }
          }
        }
        appendMessage(reply);
      }, 800);
    }
  </script>

</section>

<section id="packages">
  <h2>Packages</h2>
  <ul>
  Packages
 ﻿

<br>
🟦 Essentials – <!-- £1,000/month -->
Social media management 

Platforms: Instagram, Facebook, TikTok

Branded visuals + captions

Content calendar + scheduling

Optional add ons: AI Chatbot

<!--💡 Add Meta Ads Management: +£500/month
💡 Add AI Chatbot: +£300 setup, £100/month -->


<br>
🟪 Growth – <!-- £1,800/month -->
Everything in Essentials 

AI chatbot (FAQ automation, lead capture)

Booking funnel audit (guest journey review)

Content upgrade: Reels or short-form videos 

Optional add ons: Meta Ads Management

<!--💡 Add Meta Ads Management: +£500/month
💡 Monthly analytics report -->


<br>
🟥 Elite – <!-- £2,500/month -->
Everything in Growth

Funnel optimization + landing page build

Advanced Meta Ads: retargeting, conversion tracking

Performance dashboard access

Custom funnel strategy

Concierge support (email + priority chat)

🎯 Ideal for brands who want to scale fast


<br>
Ad spend is separate from your monthly package and goes directly to Meta (Facebook/Instagram).

🧠 I help you plan ad budgets that match your revenue goals and ROI targets.

<br>


⚙️ **Bespoke – Custom Quote**

Multilingual chatbot support

YouTube or Google Ads

Email marketing automation

Dedicated account manager
<br>

### Let’s tailor a plan to meet your goals.
  </ul>
</section>

<section id="contact">
  <h2>Book a Free Call</h2>

  <div class="calendly-inline-widget" data-url="https://calendly.com/mizzmediapro" style="min-width:320px;height:700px;"></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

  <br><br>

  <h3>Contact</h3>

  <div id="contact-icons" style="display: flex; justify-content: center; gap: 20px; align-items: center;">


<a href="mailto:connect@mizzmediapro.com" title="Email">
  <img src="/assets/images/email.png" alt="Email" style="height: 40px; width: auto;">
</a>

<a href="https://www.instagram.com/mizzmediapro" target="_blank" rel="noopener" title="Instagram">
  <img src="/assets/images/instagram.png" alt="Instagram" style="height: 40px; width: auto;">
</a>

<a href="https://www.tiktok.com/@mizzmedia" target="_blank" rel="noopener" title="TikTok">
  <img src="/assets/images/tiktok.png" alt="TikTok" style="height: 40px; width: auto;">
</a>

<a href="https://www.linkedin.com/in/nana-e-a-johnson-282522a6" target="_blank" rel="noopener" title="LinkedIn">
  <img src="/assets/images/linkedin.png" alt="LinkedIn" style="height: 40px; width: auto;">
</a>


  </div>
</section>

<!-- Floating Chatbot Icon -->

<div id="floating-chat" onclick="document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });">
  💬 Chat
</div>