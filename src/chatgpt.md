To use Google OAuth2 with Node.js and Next.js, you can follow these general steps:

Create a Google API Console project and enable the Google OAuth2 API.

Create credentials for your application in the API Console. You will need to specify the authorized redirect URI(s) for your application, which will be the URLs that Google should redirect users to after they grant or deny permission to your application.

Install the necessary packages in your Node.js project using a package manager like npm or yarn. You will need the google-auth-library and jsonwebtoken packages.

Set up your Next.js application to handle OAuth2 authentication. You will need to create a /api/auth/google route in your Next.js application to handle the authentication flow. This route will redirect the user to Google's authentication page and handle the callback when the user grants or denies permission to your application.

In your Node.js backend, you will need to use the google-auth-library package to exchange the authorization code received from Google for an access token and refresh token.

Use the access token to make API requests on behalf of the user.

Here is some sample code to get you started:

Create a Google API Console project and enable the Google OAuth2 API.

Create credentials for your application in the API Console. You will need to specify the authorized redirect URI(s) for your application, which will be the URLs that Google should redirect users to after they grant or deny permission to your application.

Install the necessary packages in your Node.js project using a package manager like npm or yarn. You will need the google-auth-library and jsonwebtoken packages.

Set up your Next.js application to handle OAuth2 authentication. You will need to create a /api/auth/google route in your Next.js application to handle the authentication flow. This route will redirect the user to Google's authentication page and handle the callback when the user grants or denies permission to your application.




import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

const client_id = 'your_client_id';
const client_secret = 'your_client_secret';
const redirect_uri = 'http://localhost:3000/api/auth/google/callback';
const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);

// Redirect the user to Google's OAuth2 authentication page
export default (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
  });

  res.redirect(authUrl);
};


// Handle the callback after the user grants or denies permission
export default async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);

  // Use the access token to make API requests on behalf of the user
  const userinfo = await google.oauth2({ version: 'v2', auth: oauth2Client }).userinfo.get({});

  console.log('Userinfo:', userinfo.data);

  res.status(200).json(tokens);
};
