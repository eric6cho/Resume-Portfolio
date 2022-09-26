# Portfolio App

This project is a portfolio for Eric Cho, which contains the following:
- an introduction
- links to GitHub profile, LinkedIn profile, and resume
- education experience
- work experience
- a list of front-end and full stack projects

## Deployed Application

This application is deployed and hosted on GitHub Pages, and can be viewed at 
[eric6cho.github.io](https://eric6cho.github.io/).

## Available Scripts

All scripts below are run from the project directory.

### Run the React client app

`npm start`

This will start the React client app on port 3000 on [localhost:3000](http://localhost:3000).

### Predeploy the project

`npm predeploy`

This will prepare the files in the master branch to be deployed to GitHub Pages. 
This compiles changes in code, content, and static assets in the build folder.

### Deploy the project

`npm deploy`

This will deploy the predeployed contents to GitHub Pages.
The content shown in the deployed application is based on the `gh-pages` branch, 
which is pushed when this command is run.
