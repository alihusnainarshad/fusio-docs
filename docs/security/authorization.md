
# Authorization

If your API exposes protected endpoints you need a way to authorize your call. At the core Fusio uses OAuth2 for
authorization. This means you need to create an access token to be able to request the API. This access token has always
an expire time and can be revoked.

## Simple

The most simple way to obtain an access token is to use the `/consumer/login` endpoint. If you need more control of your
access token you should use the Oauth2 endpoint to obtain an access token.

### Request

```
POST /consumer/login
Host: 127.0.0.1
Content-Type: application/json

{
  "username": "[username]",
  "password": "[password]"
}
```

### Response

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5N2JkNDUzYjdlMDZlOWFlMDQxNi00YmY2MWFiYjg4MDJjZmRmOWZmN2UyNDg4OTNmNzYyYmU5Njc5MGUzYTk4NDQ3MDEtYjNkYTk1MDYyNCIsImlhdCI6MTQ5MTE2NzIzNiwiZXhwIjoxNDkxMTcwODM2LCJuYW1lIjoidGVzdCJ9.T49Af5wnPIFYbPer3rOn-KV5PcN0FLcBVykUMCIAuwI"
}
```

## OAuth2

Fusio provides an OAuth2 endpoint to obtain an access token. The endpoint supports the following flows:

* Authorization Code
* Resource Owner Password Credentials
* Client Credentials
* Refresh

### Authorization Code

Fusio contains a simple and lightweight OAuth2 authorization server which you can use
at your custom frontend app to handle authentication. At this page we explain shortly
how you can integrate the OAuth2 authorization server into your app. This can boost
your productivity since you can use all integrated tools by Fusio and since this is
based on OAuth2, you can later switch to a different identity provider like Octa or
EntraID.

#### Configuration

At first, you need to create a new app at the Backend which represents your custom app.
At the app you need to set the correct app URL since all provided redirect urls must
have the same Base url. After creation, you get a Client-ID/Secret for this app.

#### Redirect

Now we can start implementing the actual authorization in your app. If the current
user is not authenticated, you need to redirect the user to the following url:

```
https://my_fusio_url.com/authorization/authorize?client_id=&redirect_uri=&scope=&state=
```

With the following query parameters s.

##### `client_id`

The client id of the app which you have previously configured at Fusio.

##### `redirect_uri`

The redirect uri of your app, this is the place where you later exchange the code for an access token.

##### `scope`

Optional the scopes which are needed by your app.

##### `state`

Optional a random value which you can check later at the callback url.

#### Callback

After successful authorization, we redirect the user back to the provided redirect uri.
At the redirect uri you need to exchange the provided code parameter with an access token.
Therefore you need to send the following request to the token endpoint:

```
POST /authorization/token HTTP/1.1
Host: my_fusio_url.com
Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&code=[code]
```

In the authorization header, you need to provide the client id/secret base64 encoded.
The `code` parameter is provided as query parameter to the callback url. As a response,
you get an access token which you can then use to access protected parts of the API.

### Client Credentials

The following example shows how to obtain an access token using the client credentials grant. Which grant you should use
always depends on whether your client is confidential or public. If your client is confidential this means you can
securely store a client id and secret.

#### Request

```
POST /authorization/token
Host: 127.0.0.1
Authorization: Basic NmM2MTM5NDUtOGQ1YS00YTBkLWI2NjAtMDlkZTVmYmRiNzUzOjMxZTA5M2Y5OGVhZDIyZWZjMjFiMzhhODdhMmE1YmQ3MWZjMTJiZWRlMzM3OWY1ZWFlNmM2ZjdkYTlkYWJjNWY=
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&scope=authorization,backend
```

#### Response

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjFcL3Byb2plY3RzXC9mdXNpb1wvcHVibGljIiwic3ViIjoiZTZjYTI4YWEtY2M4Ny01Y2JlLWEwMGEtYWM4YmNiZjgyMTU0IiwiaWF0IjoxNTUzMTA3OTM1LCJleHAiOjE1NTMyODA3MzUsIm5hbWUiOiJBZG1pbmlzdHJhdG9yIn0.9PYOaFkE0Qsnt5EUf-JF-73kBAiq8SVF495bjvo_eM0",
  "token_type": "bearer",
  "expires_in": 1553280735,
  "refresh_token": "65e95c8da122a0a5522f-534b054a029019548036c8253d591309247d2899223a6a7b-907deae7ff",
  "scope": "authorization"
}
```

### Refresh

To extend an existing token you can use the refresh token grant i.e.:

#### Request

```
POST /authorization/token
Host: 127.0.0.1
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&refresh_token=65e95c8da122a0a5522f-534b054a029019548036c8253d591309247d2899223a6a7b-907deae7ff&client_id=6c613945-8d5a-4a0d-b660-09de5fbdb753&client_secret=31e093f98ead22efc21b38a87a2a5bd71fc12bede3379f5eae6c6f7da9dabc5f
```
