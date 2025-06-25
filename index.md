---
title: Home
layout: home
permalink: /
---
Mizz Media Pro

I help hair & beauty brands glow up - selling out services and products with stunning content, smart meta ads, and AI that handles the hustle for you

## About

Hi, I’m Nana Johnson — your go-to expert for helping Hair & Beauty brands sell out services and products while building a powerful online presence.

I blend smart content strategy, high-converting Meta ads, and AI magic to create custom marketing plans that actually work.

With years of experience in hair, beauty, social media, and automation, I help ambitious brands stand out — and sell out.

Whether you’re launching a new collection, opening a salon, or scaling your eCommerce store, I’m here to help you glow up and grow online.

## What I Offer

### Social Media Management

Specialised content and marketing strategies, scheduling, copywriting, and community engagement across multiple platforms.

### Meta Ads Management

Get laser-targeted Facebook and Instagram ads to maximise ROI.

### AI Chatbot Integration

Automate guest communication 24/7 with smart chatbots that answer FAQs and boost sales.

### Sales Funnel Optimization

Level up your sales flow to turn browsers into buyers and boost your revenue.

### Performance Analytics Dashboards

Live dashboards with real-time insights on growth, engagement, and conversions.

## Demo Chatbot

### Type 'hi', 'hello', 'ai', 'ads', 'price', or 'sales'

<style>
  #chatbot-container {
    max-width: 400px;
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
    padding: 10px 12px;
    border-radius: 8px;
    max-width: 85%;
    word-wrap: break-word;
  }

  .user {
    background: #801336;
    color: white;
    align-self: flex-end;
    text-align: right;
  }

  .bot {
    background: #ffffff;
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
    padding: 10px 15px;
    background: #801336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #sendBtn:hover {
    background: #a01246;
  }
</style>

<div id="chatbot-container">
  <h3>💬 Ask MizzBot</h3>
  <div id="chatlog" style="display: flex; flex-direction: column;"></div>
  <div id="input-area">
    <input id="userInput" type="text" placeholder="Ask me about AI, ads, pricing..." onkeydown="if(event.key==='Enter') sendMessage()" />
    <button id="sendBtn" onclick="sendMessage()">Send</button>
  </div>
</div>

<script>
  const chatlog = document.getElementById('chatlog');
  const userInput = document.getElementById('userInput');

  const responses = [
    {
      keywords: ['hi', 'hello', 'hey'],
      reply: 'Hey there! 👋 How can I help you with AI, content, or growing your brand?'
    },
    {
      keywords: ['ai', 'chatbot'],
      reply: 'AI chatbots automate your replies, answer FAQs, and close leads 24/7.'
    },
    {
      keywords: ['ads', 'meta', 'facebook'],
      reply: 'Meta Ads help you reach your dream buyers at the right time with the right message.'
    },
    {
      keywords: ['price', 'cost', 'packages'],
      reply: 'Our packages start at £1,000/month and include AI automation, ad strategy, and content.'
    },
    {
      keywords: ['sales', 'funnel', 'convert'],
      reply: 'I help you optimize your funnel to turn followers into paying customers faster.'
    },
    {
      keywords: ['content', 'caption', 'calendar'],
      reply: 'I can generate scroll-stopping captions and schedule a full month of content for you.'
    }
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

    const userText = input.toLowerCase();
    appendMessage(input, 'user');
    userInput.value = '';

    // Typing indicator
    const typing = document.createElement('div');
    typing.className = 'chat-bubble bot';
    typing.textContent = 'Typing...';
    chatlog.appendChild(typing);
    chatlog.scrollTop = chatlog.scrollHeight;

    setTimeout(() => {
      typing.remove();

      let reply = "Hmm, I didn't quite get that. Try asking about AI, ads, pricing, or content.";

      if (userText.includes('@') && userText.includes('.')) {
        reply = "Thanks! 💌 We’ll send a custom plan to your email shortly.";
      } else {
        for (const { keywords, reply: r } of responses) {
          if (keywords.some(k => userText.includes(k))) {
            reply = r;
            break;
          }
        }
      }

      appendMessage(reply, 'bot');
    }, 800);
  }
</script>


### Packages

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

🎯 Ideal for brands who want to scale

<br>
Ad spend is separate from your monthly package and goes directly to Meta (Facebook/Instagram).

🧠 I help you plan ad budgets that match your revenue goals and ROI targets.

⚙️ Bespoke – Custom Quote

Multilingual chatbot support

YouTube or Google Ads

Email marketing automation

Dedicated account manager

### Let’s tailor a plan to meet your goals.

<!-- Calendly inline widget begin -->

<div class="calendly-inline-widget" data-url="https://calendly.com/mizzmediapro" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->

### Contact

<footer style="text-align:center; padding:20px 0; ">

  <a href="mailto:connect@mizzmediapro.com" style="margin:0 15px; display:inline-block;">
    <img src="/assets/images/email.png" alt="Email" style="width:32px; height:32px;" />
  </a>

  <a href="https://www.instagram.com/mizzmediapro" target="_blank" rel="noopener" style="margin:0 15px; display:inline-block;">
    <img src="/assets/images/instagram.png" alt="Instagram" style="width:32px; height:32px;" />
  </a>

  <a href="https://www.tiktok.com/@mizzmedia" target="_blank" rel="noopener" style="margin:0 15px; display:inline-block;">
    <img src="/assets/images/tiktok.png" alt="TikTok" style="width:32px; height:32px;" />
  </a>

  <a href="https://www.linkedin.com/in/nana-e-a-johnson-282522a6" target="_blank" rel="noopener" style="margin:0 15px; display:inline-block;">
    <img src="/assets/images/linkedin.png" alt="LinkedIn" style="width:32px; height:32px;" />
  </a>

</footer>