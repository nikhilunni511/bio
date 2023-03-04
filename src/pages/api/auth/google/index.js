import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

const client_id = '2181961958-cgr5trcthgrnnl1re23pa92qs8vhg9rp.apps.googleusercontent.com';
const client_secret = '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';
const redirect_uri = 'http://localhost:3000/api/auth/google/callback';
const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);

// Redirect the user to Google's OAuth2 authentication page
export default function googleAuth(req, res) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
  });

  res.redirect(authUrl);
};
