# Integrating with Sendgrid

Sendgrid is a 3rd-Party Service that's integrated with Heroku.  Getting setup with Sendgrid couldn't be easier:

- Add the Sendgrid addon

  ```
  heroku addons:create sendgrid:starter
  ```

- Login to Sendgrid
- Create an api key at https://app.sendgrid.com/settings/api_keys
- Set it on your app with `heroku config:set SENDGRID_API_KEY="..."`
- Set the `FROM_EMAIL` environment variable `heroku config:set FROM_EMAIL="..."`
- Create a task in your app
-

## Integrating Sendgrid with Review Apps

By default sendgrid won't be available in the review apps.  You can enable it however.
