# JAM Stack App

This is a work in progress project (far from being complete) with the goal to improve my skills on Node.js, React and React Native. The purpose is to build an API with public and private routes that will be accessed by a restricted dashboard (backend UI) to add, edit and delete content and by an App that will consume the data.

## Stack

- Node JS
- React
- React Native (not started yet)

## API

The API is being built on Node.js. For restricted routes I'm using **jsonwebtoken**. The database being used is **SQLite** and the queries are made with the **knex.js** query builder package.

## Dashboard

The private dashboard will allow users to manage all the app content by making calls to the created API through the **Axios** package. This backend UI is being developed with the Create React App boilerplate. Currently, only the **Login** feature and **Settings** page are built (even not at 100%).


---


This is project makes use of some approaches and tools to provide a better code quality and more consistency.

- Huksy
- Lint-staged
- Standard JS