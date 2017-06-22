# Heroku CI/CD and Review Apps

## Setup the Pipeline

- Open the app
- Go to "Deploy"
- Click "New Pipeline..."
- Click "Create Pipeline"
- Click on the menu for the app and select "Move app to `staging`"

## Setup CI

- Click on "Tests"
- Click on "Connect to Github"
- Search for heroku-workshop
- Click "Connect"
- Click "Enable Heroku CI"
- Click the "Tests" tab
- Click "+ New Test"
- Click "Start Test Run"

You should see the test pass.

## Continuous Deployment

- Click on the app menu for the staging app
- Click "Configure Automatic Deploys"
- Check "Wait for CI to pass before deploy"
- Click "Enable Automatic Deploys"

## Review Apps

- Click "Enable Review Apps..."
- Check "Create New..." and check "Destroy stale..."
- Click "Enable"

## View a Review App in Action

- In Github go to your "Code" tab of your repo
- Click "New Pull Request"
- In the first dropdown choose your fork
- The dropdowns will change
- In the first dropdown choose "master"
- In the second dropdown choose `pr-1-tasks-list`
- You should see 3 changed files
- Click "Create Pull Request"
- In Heroku you should see that a new Review App will be created

  > NOTE: Tests will _not_ run because for this demo you haven't created a new commit.  The tests would have been run when this branch was pushed in real life.

- Open the URL and make sure things look good
- Go to Github and merge the pull request
- The tests should pass and it should auto-deploy

And that's a real-life review-app -> CI -> CD scenario!

## Viewing an error

- Create a new pull request from master -> pr-2-task-create-test-broken

  > This branch contains a test that will pass

- You'll see that it creates a review app - you can ignore this
- Manually trigger a test build

  > NOTE: in production developers would be pushing code, and these would all be automatic.  But for this workshop we don't want you to write a lot of code...

- Merge this broken code to master
- You'll see that the staging app is _not_ rolled in
- Merge pr-3-task-create-works into master (this fixes it)
- You'll see that staging gets auto-deployed
