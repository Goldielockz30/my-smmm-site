---
layout: single

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

<section id="welcome">
  <h1>Welcome to Mizz Media Pro</h1>
  <p>I help hair & beauty brands glow up — selling out services and products with stunning content, smart Meta ads, and AI that handles the hustle for you.</p>

  <h2>Hi, I’m Nana Johnson</h2>
  <p>Your go-to expert for helping Hair & Beauty brands sell out services and products while building a powerful online presence.</p>
</section>

<section id="offers">
  <h2>What I Offer</h2>

<h3>Social Media Management</h3> 

<br>
Specialised content and marketing strategies, scheduling, copywriting, and community engagement across multiple platforms.

 <br>
<h3>Meta Ads Management</h3>

<br>
Get laser-targeted Facebook and Instagram ads to maximise ROI.

 <br>
<h3>AI Chat Bot Integration</h3>

<br>
Automate guest communication 24/7 with smart chatbots that answer FAQs and boost sales.

<br>
<h3>Sales Funnel Optimisation</h3>

<br>
Level up your sales flow to turn browsers into buyers and boost your revenue.

<br>
<h3>Performance Analytics Dashboards</h3>

<br>
Live dashboards with real-time insights on growth, engagement, and conversions.


</section>

<section id="demo">
  <h2>Demo Chatbot</h2>
  <p>Type "hi", "ai", "ads", "price", or "sales" to try it out.</p> 
  <p><strong>Bonus</strong> Enter your <strong>email</strong> in the chat to get special offers!</p>

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

</section>

<section id="packages">
  <h2>Packages</h2>

<h3>🟦 **Essentials** – Social media management</h3>
<br>
Platforms: Instagram, Facebook, TikTok
<br>
Branded visuals + captions
<br>
Content calendar + scheduling
<br>
Optional add ons: AI Chatbot



<h3>🟪 **Growth** – Everything in Essentials</h3>
<br>
AI chatbot (FAQ automation, lead capture)
<br>
Booking funnel audit (guest journey review)
<br>
Content upgrade: Reels or short-form videos
<br>
Optional add ons: Meta Ads Management



<h3>🟥 **Elite** – Everything in Growth</h3>
<br>
Funnel optimization + landing page build
<br>
Advanced Meta Ads: retargeting, conversion tracking
<br>
Performance dashboard access
<br>
Custom funnel strategy
<br>
Concierge support (email + priority chat)
<br>
🎯 Ideal for brands who want to scale fast


<br>
Ad spend is separate from your monthly package and goes directly to Meta (Facebook/Instagram).
<br>
🧠 I help you plan ad budgets that match your revenue goals and ROI targets.



<h3>⚙️ **Bespoke – Custom Quote**</h3> 
<br>
Multilingual chatbot support
<br>
YouTube or Google Ads
<br>
Email marketing automation
<br>
Dedicated account manager



<h3>Let’s tailor a plan to meet your goals.</h3>

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


