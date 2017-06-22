# Integrating with Sendgrid

Sendgrid is a 3rd-Party Service that's integrated with Heroku.  Getting setup with Sendgrid couldn't be easier:

- Add the Sendgrid addon
- Find your Sendgrid username and password from the Environment
- Login to Sendgrid using that username/password
- Create an api key at https://app.sendgrid.com/settings/api_keys
- Set it on your app with `heroku config:set SENDGRID_API_KEY="..."`
