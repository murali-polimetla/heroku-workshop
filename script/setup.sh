echo "\n-----------------------------"
echo "Updating Node..."
echo "-----------------------------\n"

. ~/.profile
nvm install 7
nvm alias default 7

echo "\n-----------------------------"
echo "Setting up PostgreSQL..."
echo "-----------------------------\n"
sudo service postgresql start
createdb heroku-tasks
createdb heroku-tasks-test
psql -c "ALTER USER ubuntu PASSWORD 'password';"

echo "export DATABASE_URL=postgres://ubuntu:password@localhost/heroku-tasks" >> ~/.profile
echo "export TEST_DATABASE_URL=postgres://ubuntu:password@localhost/heroku-tasks-test" >> ~/.profile

. ~/.profile

echo "\n-----------------------------"
echo "Setting up Yarn..."
echo "-----------------------------\n"

npm install -g yarn
yarn

echo "\n-----------------------------"
echo "Running migrations..."
echo "-----------------------------\n"

yarn run migrate
yarn run seed
yarn run migrate -- --env=test


echo "\n-----------------------------"
echo "Running tests..."
echo "-----------------------------\n"

yarn test