// Initialize Auth0 client
let auth0 = null;

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: 'YOUR_AUTH0_DOMAIN',
    client_id: 'YOUR_AUTH0_CLIENT_ID',
    redirect_uri: window.location.origin + '/callback'
  });
};

const login = async () => {
  await auth0.loginWithRedirect();
};

const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
};

const handleRedirectCallback = async () => {
  const query = window.location.search;
  if (query.includes('code=') && query.includes('state=')) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, '/');
  }
};

const getUser = async () => {
  const user = await auth0.getUser();
  if (user) {
    console.log('User:', user);
    // Update UI to show logged-in state
  } else {
    // Show login button or message
  }
};

// Run on page load
window.onload = async () => {
  await configureClient();
  await handleRedirectCallback();
  await getUser();
};
