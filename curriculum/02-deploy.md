## Deploy to Heroku

```
heroku login
heroku apps:create --org=app-cloud
heroku addons:create heroku-postgresql:hobby-dev
git push heroku master
heroku run yarn run seed
```
