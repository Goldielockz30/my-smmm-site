// /admin/auth.js

const auth0 = new Auth0Client({
  domain: "https://dev-lqu56b6r54md4cln.us.auth0.com",       // e.g. dev-lqu56b6r54md4cln.us.auth0.com
  client_id: "zom0RPYQzv4LRJ3kj414Aom8jH1ME8OV", // e.g. zom0RPYQzv4LRJ3kj414Aom8jH1ME8OV
  redirect_uri: window.location.origin + "/admin/"
});

async function login() {
  await auth0.loginWithRedirect();
}

async function handleRedirect() {
  try {
    await auth0.handleRedirectCallback();
    const user = await auth0.getUser();
    console.log("User logged in:", user);
    // Here you can add code to show the admin UI or proceed further
  } catch (err) {
    console.error("Error handling redirect:", err);
  }
}

window.onload = async () => {
  if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
    await handleRedirect();
  } else {
    const isAuthenticated = await auth0.isAuthenticated();
    if (!isAuthenticated) {
      login();
    } else {
      const user = await auth0.getUser();
      console.log("User already logged in:", user);
      // Show admin UI here
    }
  }
};
