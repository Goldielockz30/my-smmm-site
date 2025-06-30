---
layout: single
permalink: /
---


<header class="site-header">
  <nav>
  <a href="#welcome" class="nav-link">Welcome</a>
  <a href="#demo" class="nav-link">Demo Chatbot</a> 
  <a href="#offers" class="nav-link">Services</a>
  <a href="#app" class="nav-link">Demo app</a>
  <a href="#packages" class="nav-link">Packages</a>
  <a href="#contact" class="nav-link">Contact</a>
</nav>

</header>
<div style="text-align: center; margin-top: 0; margin-bottom: 20px;">
  <img src="assets\AIBANNER.PNG" alt="Mizz Media Pro Banner" style="max-width: 100%; height: auto;" />
</div>

<h1 style="text-align: center;">Mizz Media Pro</h1>

## AI Digital Product Creator & Social Media Marketing Manager {#welcome}

I help hair and beauty brands sell out their products and services through smart content, Meta ads, and a touch of AI magic.

I also support social media marketing managers with tools to grow, streamline, and scale their services with less stress.

With years of experience in social media and automation, I craft custom strategies tailored to your niche, leveraging AI to take the hustle off your hands.

To make that easier, I created an AI-powered app that automates workflows, boosts efficiency, and simplifies client management.

### Hi, I’m Nana Johnson

Your go-to expert for helping hair and beauty brands sell out their services and products while building a powerful online presence.

As a Social Media Marketing Manager myself, I know how overwhelming it can be to juggle multiple clients, manage content calendars, and meet nonstop deadlines.

That’s exactly why I built an app to support both SMMMs and brands: automating repetitive tasks, simplifying daily workflows, and scaling your services without burning out.

Everything in this app is designed to support how we really work: fast, smart, and client-focused.

## Demo Chatbot {#demo}

Type "hi", "hello" "ai", "ads", "cost" "content", "meta", "chatbot", "price", or "sales" to try it out.\
**Bonus** Enter your **email** in the ChatBot to get a special offer!

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
      { keywords: ['ai', 'chatbot'], reply: 'Automate replies 24/7 using smart chatbots!' },
      { keywords: ['ads', 'meta'], reply: 'Meta Ads help you attract your dream clients.' },
      { keywords: ['price', 'cost'], reply: 'Every project is custom — even if you choose a package. Let’s talk about what fits your goals and budget.' },
      { keywords: ['content'], reply: 'I create scroll-stopping content tailored to your brand.' },
      { keywords: ['sales'], reply: 'I help optimize sales funnels to boost conversions.' }
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
        let reply = "Try asking about AI, price, or ads!";

        if (emailRegex.test(userText)) {
          reply = "Thanks for sharing your email! I'll send you an exclusive offer now.";
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
### 💡 Want your own lead funnel like this?

I can set one up for your brand, fully customized and connected to your MailerLite. 
### Click here to book a setup session 👉 <a href="#bookings" style="display: inline-block; padding: 12px 24px; background-color: #801336; color: #f7e7ce; text-decoration: none; border-radius: 8px; font-weight: bold;">Setup</a>


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


## Ready to streamline your social media business? {#app}

### 👇 Click here to explore my demo app:
<br/>
<a href="https://ai-content-generator-y.streamlit.app/" 
   target="_blank" 
   rel="noopener noreferrer" 
   style="display: inline-block; padding: 12px 24px; background-color: #801336; color: #f7e7ce; text-decoration: none; border-radius: 8px; font-weight: bold;">
   Mizz Media Pro App Demo
</a>

### Built for social media managers and hair & beauty brands who want to scale using AI.


## Packages {#packages}

### 🟦 Essentials – Social Media Management

- Platforms: Instagram, Facebook, TikTok

- Branded visuals + captions

- Content calendar + scheduling

### Optional add-ons:

- AI Chatbot

### 🟪 Growth – Everything in Essentials

- AI Chatbot (FAQ automation, lead capture)

- Booking funnel audit (guest journey review)

- Content upgrade: Reels or short-form videos

### Optional add-ons:

- Meta Ads Management

### 🟥 Elite – Everything in Growth

- Funnel optimization + landing page build

- Advanced Meta Ads: retargeting, conversion tracking

- Performance dashboard access

- Custom growth strategy

- Concierge support (email + priority chat)

### Optional add-ons:

-  Dedicated account manager for hands-on, high-touch support

🎯 Ideal for brands who want to scale fast

### ⚙️ Bespoke – Everything in Elite


✅ Done-for-you funnel setup 

- Includes integration + customization of my chatbot and app demo on your website

-  Lead capture + offer automation using MailerLite

✅ Custom automations

-  Email marketing sequences

-  Performance tracking

-  Smart content delivery (automated posts + tailored messaging)

✅ Support

-  Dedicated account manager for hands-on, high-touch support

🚀 Perfect for brands or SMMMs who want a ready-to-launch system with no tech headaches.

🧠 Ad spend is separate from your monthly package and goes directly to Meta (Facebook/Instagram). 

I help you plan ad budgets that match your revenue goals and ROI targets.

### Want a custom quote? Let’s tailor a plan to meet your goals.

## Connect With Me {#contact}

Want to connect or ask a quick question? 

Reach out using the links below. 

You can also book a free discovery call to chat more in-depth.

### 📬 Social & Email

<div id="contact-icons" style="display: flex; justify-content: center; gap: 20px; align-items: center; margin-bottom: 20px;">

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

### 💬 <span id="bookings">Let's Talk!</span>


Schedule a no-pressure call to explore how I can support your brand or business goals.

<div class="calendly-inline-widget" data-url="https://calendly.com/mizzmediapro" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

<!-- Floating Chatbot Icon -->

<div id="floating-chat" onclick="document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });">
  💬 Chat
</div>



<script>
  document.querySelectorAll('.site-header nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // stop default jump

      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
</script>
