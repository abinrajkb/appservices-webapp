### A sample NodeJS application to configure the CI/CD pipeline with GitHub actions and Azure App Services

* create a sample NodeJS application and push it into the repository
* create an Azure App Service Web App and tag this repository from the 'deployment' tab
* view the logs from 'Actions' tab of the GitHub repository to verify if the initial deployment was successful 
* commit any new changes, and verify that the CI/CD pipeline is working as expected
* navigate to the web app URL, where we can now see our server response

* Deployment Slots
  * create a new branch 'staging' from 'main'
  * create a new 'deployment slot' from App Service instance with the name 'staging'
  * navigate to the 'deployment center' tab of our new staging slot instance and tag our 'staging' branch. Opt for a new workflow file during the setup
  * ensure that a new workflow file was created automatically in the 'staging' branch in our repo
  * update the index.js file to reflect the changes and commit the same in the new staging branch
  * verify that a new build was triggered and our changes were deployed successfully in the staging slot
  * go to 'deployment center' and swap the slots, and ensure that we can now see the changes accordingly when we hit the URLs
  
  We have now setup an end to end CI/CD pipeline with separated branch criterias, where each branch can be tagged to different app service web app slots.
