// http://localhost:3000/api/auth/google/callback?code=4%2F0AWtgzh6mJ5vObd_5m-OuaM04WpDm0cCtOePyfATfq_cP2wn2kkZnZmNKzpMHu066k4ctXA&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent#
import { google } from 'googleapis';
import axios from 'axios';
import { serialize } from 'cookie';

const client_id = '2181961958-cgr5trcthgrnnl1re23pa92qs8vhg9rp.apps.googleusercontent.com';
const client_secret = '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';
const redirect_uri = 'http://localhost:3000/api/auth/google/callback';
const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);

// Redirect the user to Google's OAuth2 authentication page
export default async function googleAuthCallback(req, res) {
    const { query: { code, scope, authuser, prompt } } = req;
    console.log("🚀 ~ file: callback.js:14 ~ googleAuthCallback ~ router:", code);
    const response = await axios
        .post('http://localhost:3001/v1/auth/google/callback', req.query
        )
        .then(({ data }) => data)
        .catch(() => false);
    if (response) {
        res.setHeader('Set-Cookie', serialize('token', 'token_cookie_value'));
    }
    res.json(req.query)
};
