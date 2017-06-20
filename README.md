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
heroku apps:create
heroku addons:create heroku-postgresql:hobby-dev
git push heroku master
heroku run yarn run seed
```

## TODO

- Add Account CRUD to show heroku updating salesforce
- Comment out things in master
- Create a branch where they are uncommented for create
- Create a branch where they are uncommented for delete
- Create a branch where account CRUD is enabled
- Add sendgrid email notification to env var
