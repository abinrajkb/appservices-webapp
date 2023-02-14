### A sample NodeJS application to configure the CI/CD pipeline with GitHub actions and Azure App Services

* create a sample NodeJS application and push it into the repository
* create an Azure App Service Web App and tag this repository from the 'deployment' tab
* view the logs from 'Actions' tab of the GitHub repository to verify if the initial deployment was successful 
* commit any new changes, and verify that the CI/CD pipeline is working as expected
* navigate to the web app URL, where we can now see our server response

* Deployment Slots
  * create a new branch 'staging' from 'main'
  * create a new 'deployment slot' from App Service instance with the name 'staging'
  * navigate to the 'deployment center' tab of our new staging slot instance
  * update the index.js file to reflect the changes and commit the same in the new staging branch
  * create a new workflow file 'staging_experimentwebapp101.yml' which points to the 'staging' slot from the 'staging' branch
