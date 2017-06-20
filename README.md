```
createdb heroku-tasks
createdb heroku-tasks-test

yarn run migrate
yarn run seed
yarn run migrate -- --env=test
yarn start
```



- https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile
- https://devcenter.heroku.com/articles/release-phase
