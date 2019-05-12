[![Netlify Status](https://api.netlify.com/api/v1/badges/63f2f08b-217a-4d3c-b5f2-e72a8bef2b01/deploy-status)](https://app.netlify.com/sites/delta-client/deploys)

# :information_desk_person::information_desk_person: Live-chat-deltaproto :information_desk_person::information_desk_person:

## :point_right: :point_right: [Checkout the deployed version here! ](https://deltaproto.netlify.com/) :point_left: :point_left:

## What is this project about :question:

[Deltaproto](https://www.deltaproto.com/index.html?lang=en) is a Dutch company that producing and assembling PCBA prototypes. This is the real world project for my final assignment in Codaisseur that me and other colleagues have built for Deltaproto. 

A live-chat box need to be implemented into Deltaproto's webpage after client logged-in into their profile page. However, the live-chat is just based on project. Every project includes all information such as quantity of prototype, types of PCBA, prices .... Clients can use the chat-box to communicate with employees of Deltaproto to check/question about a specific project only. 

![live-chat-demo](https://github.com/jendang/live-chat-deltaproto/blob/master/live-chat-demo.png)

## Table of contents

* Technologies used
* Goals for this project
* Prerequisites 
* Features
* Team and Workflow
* Developer further

## Technologies used

### Front-end

* [React](https://github.com/jendang/smart-brains-client/blob/master/create-react-app-docs)
* [Redux](https://redux.js.org/)
* [socket.io-client](https://socket.io/docs/client-api/)
* [Semantic UI](https://semantic-ui.com/)

### Back-end

* [postgresql](https://www.postgresql.org/)
* [typescript](https://www.typescriptlang.org/)
* [typeORMs](https://typeorm.io/#/)
* [socket.io-server](https://socket.io/docs/server-api/)
* [heroku for deploy](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

## Goals for this project

* Implemeting successfully the live-chat with websocket.io
* To showcase disciplined git usage: 
    * Good commit messages
    * Well named branches
* How to work in team as a junior developer

## Prerequisites

### client
* npm/yarn install
* npm/yarn start

### server
* yarn install
* yarn compile
* yarn watch
* yarn start

## Features

* Sign-up/Log-in page: helps the user create a secured user account to be able to purchase prototypes
* Creating project for each other
* Live-chat to communicate and track the progress of purchase

## Team

### Authors

* Jenny Dang - backend development
* Sanh Le - frontend development
* Vanya - frontend development
* Paula - UX designer

### Tasks delegation

* We were a team of three developers and one designer who worked together in this project for about two weeks time. 
* I was responsible for the backend application and few functions in frontend, working closely with another two developers and the UX designer.
* Here are some of my codes that I contributed in this project [database model](https://github.com/jendang/live-chat-deltaproto/blob/master/server/src/messages/entity.ts), [RESTfull request](https://github.com/jendang/live-chat-deltaproto/blob/master/server/src/messages/controller.ts),[Project list](https://github.com/jendang/live-chat-deltaproto/blob/master/client/src/components/projects/ProjectsListContainer.js)


## Agile workflow 

We followed Agile development methodology, a daily Scrum meeting to discuss, plan and share new ideas. Trello was used to track our daily tasks and Slack was used as a communication channel.

[Checkout our project's planning with Trello here! ](https://trello.com/b/09T9QrvJ/deltaproto)

## Developer further

There are many features of this project can be developed further in the future

* Notifications pop-up when the status of progress changes
* The interface of the chat-box

For more information about this project, please feel free to [contact me](https://www.linkedin.com/in/jennydang/)








