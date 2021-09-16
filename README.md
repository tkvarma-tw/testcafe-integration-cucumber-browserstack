# Project Setup

Create SSH key: `ssh-keygen -t rsa -C "Email Id" -b 4096` \
Open the file "id_rsa.pub" which has the public key and copy the contents. \
Go to [page](https://dev.azure.com/essnextgen/_usersSettings/keys) and add your key.

To read more about the [SSH key creation](https://confluence.atlassian.com/bitbucketserver/creating-ssh-keys-776639788.html)

Once SSH key id is created, you can clone the project to your local machine using: `git clone "take-register-ui-automation-tests"`

For more information on [git commands](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

# Getting Started with Automation framework

This project was integrated with [Cucumber JS](https://cucumber.io/docs/cucumber/) and [TestCafe](https://testcafe.io/documentation/402635/getting-started)


## Running Tests Locally

In the project directory, you can run:

### `npm install`

This will install all the packages available in package.json file in project root directory.

### `npm run test-chrome-qa`

It will execute all the feature files added in the `feature/featurefiles` folder with browser chrome in qa environment.

Note: If we want to run the test cases in dev environment then run `npm run test-chrome-dev`.

### `npm run test-safari-qa`

It will execute all the feature files added in the `feature/featurefiles` folder with browser safari in qa environment.

Note: If we want to run the test cases in dev environment then run `npm run test-safari-dev`.

### `ENV=qa FEATURE=DBConnection.feature npm run test-featurefile`

This will execute the specific feature file in any environment specified in `ENV` and `FEATURE`



## Learn More

You can learn more in the [TestCafe Runner Object](https://testcafe.io/documentation/402641/reference/testcafe-api/runner).

To learn Cucumber JS, check out the [Cucumber JS](https://cucumber.io/docs/guides/).





