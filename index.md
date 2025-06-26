<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Mizz Media Pro</title>
<style>
  :root {
    --color-primary: #801336; /* Burgundy */
    --color-bg: #f2d8a1;      /* Cream */
    --color-text: #000000;    /* Black */
    --color-gold: #D4AF37;    /* Gold / Yellow */
  }

  /* Smooth full-page gradient */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, var(--color-primary), var(--color-bg));
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--color-text);
  }

  /* Remove backgrounds on all main wrappers so gradient shows through */
  body > * {
    background: transparent !important;
    box-shadow: none !important;
    margin: 0;
    padding: 0;
  }

  /* Content containers with semi-transparent background */
  .content-box {
    background: rgba(242, 216, 161, 0.85); /* semi-transparent cream */
    padding: 30px 40px;
    border-radius: 12px;
    margin: 30px auto;
    max-width: 900px;
    color: var(--color-text);
  }

  /* Header styling */
  .site-header {
    background-color: transparent !important;
    box-shadow: none !important;
    border-bottom: 2px solid var(--color-primary);
    position: relative;
    z-index: 1000;
    padding: 15px 0;
  }

  .site-header nav {
    text-align: center;
  }

  .site-header nav a {
    margin: 0 15px;
    font-weight: bold;
    color: var(--color-gold) !important;
    text-decoration: none;
    padding: 10px 0;
    display: inline-block;
    font-size: 1.1rem;
  }

  .site-header nav a:hover {
    text-decoration: underline;
  }

  /* Headings */
  h1, h2, h3 {
    color: var(--color-primary);
    margin-top: 0;
  }

  /* Sections spacing */
  section {
    margin: 40px 0;
    padding: 0;
  }

  /* Footer */
  footer {
    text-align: center;
    margin: 40px 0 20px 0;
    color: var(--color-text);
    font-size: 0.9rem;
  }

  /* Floating chat icon */
  #floating-chat {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--color-primary);
    color: var(--color-bg);
    padding: 12px 16px;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    user-select: none;
    font-size: 1.1rem;
  }
</style>
</head>
<body>

<header class="site-header">
  <nav>
    <a href="#welcome">Welcome</a>
    <a href="#offers">What I Offer</a>
    <a href="#demo">Demo Chatbot</a>
    <a href="#packages">Packages</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section id="welcome" class="content-box">
  <h1>Welcome to Mizz Media Pro</h1>
  <p>All your social media needs handled with care and style.</p>
</section>

<section id="offers" class="content-box">
  <h2>What I Offer</h2>
  <p>Expert social media management, AI chatbots, and more.</p>
</section>

<section id="demo" class="content-box">
  <h2>Demo Chatbot</h2>
  <p>Try out our AI chatbot demo right here.</p>
</section>

<section id="packages" class="content-box">
  <h2>Packages</h2>
  <p>Choose the best plan that fits your brand.</p>
</section>

<section id="contact" class="content-box">
  <h2>Book a Free Call</h2>

  <div class="calendly-inline-widget" data-url="https://calendly.com/mizzmediapro" style="min-width:320px;height:700px;"></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

  <br><br>
  <p>Or email me directly: <a href="mailto:nana@mizzmediapro.com">nana@mizzmediapro.com</a></p>
</section>

<footer>
  <p>© 2025 Mizz Media Pro | Nana Johnson</p>
</footer>

<div id="floating-chat" onclick="document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });">
  💬 Chat
</div>

</body>
</html>
