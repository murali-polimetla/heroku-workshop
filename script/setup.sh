echo "\n-----------------------------"
echo "Updating Node..."
echo "-----------------------------\n"

. ~/.profile
nvm install 7
nvm alias default 7

echo "\n-----------------------------"
echo "Updating Heroku CLI..."
echo "-----------------------------\n"

heroku update

echo "\n-----------------------------"
echo "Staring PostgreSQL..."
echo "-----------------------------\n"
sudo service postgresql start

echo "\n-----------------------------"
echo "Setting up Yarn..."
echo "-----------------------------\n"

npm install -g yarn
yarn

echo "\n-----------------------------"
echo "Creating local databases..."
echo "-----------------------------\n"

createdb heroku-tasks
createdb heroku-tasks-test
psql -c "ALTER USER ubuntu PASSWORD 'password';"

echo "DATABASE_URL=postgres://ubuntu:password@localhost/heroku-tasks" >> .env
echo "TEST_DATABASE_URL=postgres://ubuntu:password@localhost/heroku-tasks-test" >> .env

echo "\n-----------------------------"
echo "Running migrations..."
echo "-----------------------------\n"

yarn run migrate
yarn run seed

echo "\n-----------------------------"
echo "Running tests..."
echo "-----------------------------\n"

yarn test
