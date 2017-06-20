sudo service postgresql start
psql -c "ALTER USER ubuntu PASSWORD 'password';"
echo "export DATABASE_URL=postgres://ubuntu:password@localhost/heroku-tasks" >> ~/.profile
echo "export TEST_DATABASE_URL=postgres://ubuntu:password@localhost/heroku-tasks-test" >> ~/.profile
