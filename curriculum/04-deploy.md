# Deploy to Heroku

From the command-line in Cloud9 run the following commands:

```
heroku login
heroku apps:create --org=app-cloud
heroku addons:create heroku-postgresql:hobby-dev
git push heroku master
heroku run yarn run seed
```

Open your Heroku app and you should see the app running:

TODO: screenshot
