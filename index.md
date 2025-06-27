---
layout: single
permalink: /
title: Mizz Media Pro
---
<header class="site-header">
  <nav>
    <a href="#welcome">Welcome</a>
    <a href="#offers">What I Offer</a>
    <a href="#demo">Demo Chatbot</a>
    <a href="#packages">Packages</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

# Welcome to Mizz Media Pro

## AI Digital Product Creator & Social Media Marketing Manager {#welcome}
I help hair & beauty brands sell out products & services — and I empower social media managers with the tools to do the same.

I built a powerful app to automate your workflows, boost efficiency, and simplify client management.

### Hi, I’m Nana Johnson

As a Social Media Marketing Manager myself, I know how overwhelming it can be to juggle multiple clients, content calendars, and constant deadlines.

That’s exactly why I created this app — to help SMMMs like you automate repetitive tasks, streamline your daily workflows, and scale your services without burning out.

Everything in this app is designed to support the way we actually work — fast, smart, and client-focused.

Built with ❤️ by a fellow SMMM who truly gets it.



- - -

## What I Offer {#offers}

### Social Media Management

Specialised content and marketing strategies, scheduling, copywriting, and community engagement across multiple platforms.

### Meta Ads Management

Get laser-targeted Facebook and Instagram ads to maximise ROI.

### AI Chat Bot Integration

Automate guest communication 24/7 with smart chatbots that answer FAQs and boost sales.

### Sales Funnel Optimisation

Level up your sales flow to turn browsers into buyers and boost your revenue.

### Performance Analytics Dashboards

Live dashboards with real-time insights on growth, engagement, and conversions.

- - -

## Demo Chatbot {#demo}

Type "hi", "ai", "ads", "price", or "sales" to try it out.\
**Bonus** Enter your **email** in the chat to get special offers!

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
        appendMessage(reply, 'bot');
      }, 800);
    }
  </script>

## Packages {#packages}

🟦 Essentials – Social media management
Platforms: Instagram, Facebook, TikTok
Branded visuals + captions
Content calendar + scheduling
Optional add ons: AI Chatbot

🟪 Growth – Everything in Essentials
AI chatbot (FAQ automation, lead capture)
Booking funnel audit (guest journey review)
Content upgrade: Reels or short-form videos
Optional add ons: Meta Ads Management

🟥 Elite – Everything in Growth
Funnel optimization + landing page build
Advanced Meta Ads: retargeting, conversion tracking
Performance dashboard access
Custom funnel strategy
Concierge support (email + priority chat)
🎯 Ideal for brands who want to scale fast

Ad spend is separate from your monthly package and goes directly to Meta (Facebook/Instagram).
🧠 I help you plan ad budgets that match your revenue goals and ROI targets.

⚙️ Bespoke – Custom Quote
Multilingual chatbot support
YouTube or Google Ads
Email marketing automation
Dedicated account manager

Let’s tailor a plan to meet your goals.

## Book a Free Call {#contact}

Schedule a call with Calendly

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

<!-- Floating Chatbot Icon -->

<div id="floating-chat" onclick="document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });">
  💬 Chat
</div>