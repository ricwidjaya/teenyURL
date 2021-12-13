# TeenyURL
## _A URL shortener which you can track clicks_

<img width="1440" alt="Screen Shot 2021-12-13 at 19 06 58" src="https://user-images.githubusercontent.com/43133690/145808675-e7c80ac7-4cb0-42e7-9458-4a3e53fad459.png">


TeenyURL is a web app built with Express.js and Node.js that allows you to minimize your URL and keep tracks of link clicks.


## Features

-  User can view all URLs on index dashboard.
-  User can shorten URLs with UTM parameters.
-  User can track clicks through the link as long as the server is running.

## Getting Start

### Environment Setup
1. [Node.js](https://nodejs.org/en/) v16 LTS
2. [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) v4.2.17

### Installing

1. Open your terminal and clone the project to local.
```
git clone https://github.com/ricwidjaya/teenyURL.git
```

2. Change directory to the project
```
cd teenyURL 
```

3. Install all dependencies
```
npm install
```

4. Install nodemon package
```
npm install -g nodemon
```

5. Run the data seeder to create initial data by using below npm script, if successful, `Seeds Generated` will show in the terminal.
```
npm run seed
```

6. Run the server on localhost using below npm script, if successful, `teenyURL APP runs on port ${YOUR_PORT}` will show in the terminal.
```
npm run dev
```

## Contributor
> [Richard Widjaya](https://github.com/ricwidjaya)
