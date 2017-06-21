# Setup on Cloud9

- Create a Cloud9 Account
- On Cloud9 Connect Github
- Fork the Github repo
- Create the Cloud9 Repo
- Run these commands

  ```
  sh script/setup.sh && . ~/.profile
  ```

## Helpful Links

- https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile
- https://devcenter.heroku.com/articles/release-phase

## Deploy to Heroku

```
heroku apps:create --org=app-cloud
heroku addons:create heroku-postgresql:hobby-dev
heroku addons:create sendgrid:starter
git push heroku master
heroku run yarn run seed
```

- Find your sendgrid username and password
- Create an api key at https://app.sendgrid.com/settings/api_keys
- Set it with `heroku config:set SENDGRID_API_KEY="..."`


## TODO

- Add Account CRUD to show heroku updating salesforce
- Comment out things in master
- Create a branch where they are uncommented for create
- Create a branch where they are uncommented for delete
- Create a branch where account CRUD is enabled
- Will the app auto-migrate on production?
  - If not, re-enable `release: npm run migrate` in Procfile
