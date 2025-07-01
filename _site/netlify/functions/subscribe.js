exports.handler = async (event) => {
  const { email } = JSON.parse(event.body || '{}');

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email is required." })
    };
  }

  const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${process.env.BOT_ID}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY
    },
    body: JSON.stringify({ email, resubscribe: true })
  });

  return {
    statusCode: response.ok ? 200 : 500,
    body: JSON.stringify({ success: response.ok })
  };
};
