# Psychologist's Office Appointment App (front end)

## The table of contents

- About
- Live-demo
- Link for back-end repository
- Features
- How to use the application
- Getting started (Development)
- Launch the application
- Test the application
- Author
- Show your support
- Acknowledgments
- Issues
- 📝 License

## About

In this application, I have an appointment app for a Psychologist's office. The user can choose from a list of 
consultancies and choose a date and time to make an appointment with the Psychologist at that time. the user has the admin privelege he can also create a new Consultancy area and see a list of all appointments made. The user logs in and signs up to the application using Json Web Token.

To build this application I used:

- Javascript ES6;
- Html/CSS;
- React;
- Redux;
- React-Redux;
- Jest;
- Create React App;
- React Hooks;
- React Router
- Linters ( eslint and stylelint)

## Live-Demo

[The live demo link](https://psychology-appointments-app.vercel.app/)

## Link for back-end repository

[Link for back-end repository](https://github.com/gurbuzertunga/Psychology_Appointment_API)

## Screenshots

![screenshot1](https://user-images.githubusercontent.com/65021553/118004632-4cac9100-b352-11eb-8fee-e29cabb2ca6c.png)

![screenshot2](https://user-images.githubusercontent.com/65021553/118004823-7b2a6c00-b352-11eb-8187-02bee6959f55.png)

![screenshot3](https://user-images.githubusercontent.com/65021553/118005142-ccd2f680-b352-11eb-862a-1d081326ef2e.png)

## Features

- Log in, log out and sign up
- Show the list of consultancies;
- Show the list of the appointments of the user;
- Create a new consultancy;
- Admin access
- Admin can create a new consultancy
- Admin can see a list of all appointments

The Account of the admin is:
- email: admin@email.com
- password: 123456

## How to use the application

Application has secure login and signup. A user must provide e-mail and password while logging in. On Sign Up 
User must provide a username, e-mail, password and password confirmation.

In this Application, on the home page, the user gets the information about the Psychologist. When the User creates a new account or sign in with their account they are sent to consultancies page where they can choose an area they want to make an appointment with. 

User can click any of the listed consultancies to get a detailed explanation on each consultancy area. User can make an appointment from both consultancies listing page and consultancy index page where they can see the area details. User also has access to ```MY PAGE``` where they can see their appointments.

App also has an admin access where admin signs in with his/her account and the admin can create a new consultancy area providing area name and details. Admin can also list all the appointments made for him/her.

## Getting started (Feature)

To get a local copy of the repository please run the following commands on your terminal:

```
$ git clone git@github.com:gurbuzertunga/Psychology_Appointment_Frontend.git
$ cd Psychology_Appointment_Frontend
$ git checkout feature

```

## Launch the application

After making the local copy of the repository:
- get inside the repository folder;
- setup the dependencies of the project: in the terminal run: ```npm install```
- enter the command: ```npm start``` to start the server in localhost.
- then you get the application in the localhost in your web browser.

## Test the application

After making the local copy of the repository:
- get inside the repository folder;
- setup the dependencies of the project: in the terminal run: ```npm install```
- enter the command: ```npm run test``` to test the application.
- then you get the application tested.

In this application I test the components using the snapshots and I test the logical functions using jest.

## Author

👤 **Gürbüz Ertunga**

- Github: [@gurbuzertunga](https://github.com/gurbuzertunga)
- Twitter: [@dantewuhu](https://twitter.com/dantewuhu)
- Linkedin: [GurbuzErtunga](https://www.linkedin.com/in/gurbuz-ertunga-a607a2a5/)

## 🤝 Contributing

Contributions, issues ,and feature requests are welcome!

## Show your support

Give an ⭐️ if you like this project!

## Acknowledgments

- Hat tip to [stackoverflow](https://stackoverflow.com) community.
- Hat tip to [Microverse](https://www.microverse.org/) TSE for Code Review
- Hat tip to [Create React App](https://github.com/facebook/create-react-app)
- Hat tip to [Heroku](https://www.heroku.com/)
- Hat tip to anyone whose code was used

## Issues
If you would like to report an issue [the link](https://github.com/gurbuzertunga/Psychology_Appointment_Frontend/issues)

## 📝 License

All source code is available jointly under the MIT License.
See [MIT licence](./LICENSE.md) for details.