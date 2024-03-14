# MovieR - an app that allows you to find information about a movie
## About:
It is an application that allows you to find information about a movie or TV series you are interested in. It is developed with NextJS and TypeScript. Also it uses OMDB API to retrieve information about movies/series.
This is not the final version - still need to develop the server and add some functionality to the app.

## Stack:
- NextJS
- TypeScript
- React Hook Form
- Zod
- React Phone Number Input

The development process uses eslint, prettier, husky and lint-staged.

## Deploy:
You can see the main branch running here: https://movier-alpha.vercel.app.

## How to run on your machine:
To run locally, the following steps are required:

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Install dependencies:
   ```bash
   npm install

3. Create an `.env` file (like `.env.example`) and put there your key for OMDB API (it is free).

4. Now you can view all availiable commands in the `package.json` file and run the application using one of them (`npm run dev` - run in development mode, `npm build` - build the production version and then you can run it with `npm start`).

## Possible future improvements:
Сreating a server and adding features: registration and login, sending a message to support and creating watchlists.

## Contributors:
- Andei Shket ([@andreushk](https://github.com/Andreushk))

## More:
The project is for educational purposes and is not commercial.
