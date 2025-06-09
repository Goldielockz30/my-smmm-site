---
layout: default
title: Mizz Media Pro
---

# Mizz Media Pro

### I help Airbnb hosts get fully booked with smart content planning + meta ads + AI

## About 

Hi, I’m Nana Johnson — your go-to expert for helping Airbnb hosts maximize their bookings using the power of AI and smart social media marketing. With years of experience in social media and automation, I tailor strategies to your unique rental property to get you fully booked.


## What I Offer

### Social Media Management 
Specialised content and marketing strategies, schedualing, copywriting, and community engagement accross multiple platforms.

### Meta Ads Management
Get laser-targeted Facebook and Instagram ads to maximise ROI.

### AI Chatbot Integration
Automate guest communication 24/7 with smart chatbots that answer FAQs and boost bookings.

### Booking Funnel Optimization
Improve your booking flow to maximize conversions and revenue.

### Performance Analytics Dashboards
Live dashboards with real-time insights on growth, engagement, and conversations.


## Demo Chatbot

### To try out demo chat bot try typing 'hi', 'hello', 'ai', 'ads', 'price', or 'booking'

<div id="chatbot" style="max-width:400px; border:1px solid #ccc; border-radius:8px; padding:10px; background:#f9f9f9;">
  <div id="chatlog" style="height:200px; overflow-y:auto; border:1px solid #ddd; padding:10px; background:#fff;"></div>
  <input id="userInput" type="text" placeholder="Type your message here..." 
    style="width:calc(100% - 60px); padding:8px; margin-top:10px;" 
    onkeypress="if(event.key === 'Enter'){ event.preventDefault(); sendMessage(); }" />
  <button onclick="sendMessage()" style="padding:8px 10px; margin-top:10px; background:#89CFF0; border:none; border-radius:5px; color:#fff;">Send</button>
</div>

<script>
  const chatlog = document.getElementById('chatlog');
  const userInput = document.getElementById('userInput');

  const responses = {
    'hi': 'Hello! How can I help you with AI and ads today?',
    'hello': 'Hi there! Ask me anything about boosting Airbnb bookings using AI.',
    'ai': 'AI chatbots automate guest messages 24/7.',
    'ads': 'Meta Ads reach the perfect Airbnb guests for you.',
    'price': 'Packages start at £1,000/month.',
    'booking': 'I help optimize your booking funnel to maximize revenue.'
  };

  function botReply(msg) {
    const reply = document.createElement('div');
    reply.style.margin = '10px 0';
    reply.style.padding = '8px';
    reply.style.background = '#e0e7ff';
    reply.style.borderRadius = '5px';
    reply.textContent = msg;
    chatlog.appendChild(reply);
    chatlog.scrollTop = chatlog.scrollHeight;
  }

  function sendMessage() {
    const userText = userInput.value.trim().toLowerCase();
    if (!userText) return;

    const userDiv = document.createElement('div');
    userDiv.style.margin = '10px 0';
    userDiv.style.padding = '8px';
    userDiv.style.background = '#89CFF0';
    userDiv.style.color = 'white';
    userDiv.style.borderRadius = '5px';
    userDiv.textContent = userInput.value;
    chatlog.appendChild(userDiv);
    chatlog.scrollTop = chatlog.scrollHeight;
    userInput.value = '';

    let reply = 'Sorry, I did not understand that. Try asking about AI, ads, or pricing.';
    for (const key in responses) {
      if (userText.includes(key)) {
        reply = responses[key];
        break;
      }
    }

    setTimeout(() => botReply(reply), 700);
  }
</script>




### Packages
<br>
🟦 Essentials – £1,000/month
Social media management (3 posts/week)

Platforms: Instagram, Facebook, TikTok

Branded visuals + captions

Content calendar + scheduling


💡 Add Meta Ads Management: +£500/month
💡 Add AI Chatbot: +£300 setup, £100/month



<br>
🟪 Growth – £1,800/month
Everything in Essentials

AI chatbot (FAQ automation, lead capture)

Booking funnel audit (guest journey review)

Content upgrade: Reels or short-form videos (2/month)

💡 Add Meta Ads Management: +£500/month
💡 Monthly analytics report

<br>
🟥 Elite – £2,500/month
Everything in Growth

Funnel optimization + landing page build

Advanced Meta Ads: retargeting, conversion tracking

Performance dashboard access

Custom funnel strategy

Concierge support (email + priority chat)

🎯 Ideal for superhosts, urban properties, or multi-unit listings

<br>
Ad spend is separate from your monthly package and goes directly to Meta (Facebook/Instagram).


🧠 We help you plan ad budgets that match your revenue goals and ROI targets.

⚙️ Bespoke – Custom Quote
Multi-property or agency support

Multilingual chatbot support

YouTube or Google Ads

Email marketing automation

Dedicated account manager

### Let’s tailor a plan to meet your goals.  
[Book a Strategy Call](https://calendly.com/connect-mizzmediapro/30min)


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




