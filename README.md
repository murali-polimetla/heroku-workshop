- Create a Cloud9 Account
- On Cloud9 Connect Github
- Fork the Github repo
- Create the Cloud9 Repo
- Run these commands

  ```
  sudo service postgresql start
  createdb heroku-tasks
  createdb heroku-tasks-test

  nvm install 7
  nvm alias default 7

  psql -c "ALTER USER ubuntu PASSWORD 'password2';"
  export DATABASE_URL="postgres://ubuntu:password@localhost/heroku-tasks"
  export TEST_DATABASE_URL="postgres://ubuntu:password@localhost/heroku-tasks-test"

  sudo -u <user_name> psql -c "ALTER USER <user_name> PASSWORD '<new_password>';"

  npm install -g yarn
  yarn
  yarn run migrate
  yarn run seed
  yarn run migrate -- --env=test
  yarn start
  ```


- https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile
- https://devcenter.heroku.com/articles/release-phase
