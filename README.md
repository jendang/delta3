Chat app: This is  a live-chat app for CRM and the conversation based on project.


database: postgres
backend : typeORM, typescript, routing-controller, socket.io-server
- yarn install 
- yarn compile/yarn watch
- yarn start
frontend; react-redux, socket.io-client
- yarn install
- yarn start



There are 2 roles as an user:
- role 0: user, clients/customers
- role 1: admin, company, staffs

As a client you can view all projects that you created, and once you click to one project, it will show project's details and the chat box. 

As an admin you can view all projects of all clients, and when you click on one project, you can chat with client about that specific project.

