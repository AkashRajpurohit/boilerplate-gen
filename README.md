# Generate boilerplate for your projects

## Installation

### Install globally once

```bash
npm i -g boilerplate-gen
```

### Using `npx`

```bash
npx boilerplate-gen
```

## Steps to generate boilerplate

1. Navigate to the folder where you want to create your project
2. type ```gen```

## Choose from the choices available

### 1. express

#### Structure

```
├── config
│   ├── winston.js
├── public
├── logs
│   ├── error.log
│   ├── info.log
├── routes
│   ├── index.js
├── app.js
├── node_modules
├── README.md
├── package.json
└── .gitignore
```

#### Packages
```
"dependencies": {
  "cors": "^2.8.4",
  "express": "^4.16.3",
  "morgan": "^1.9.1",
  "winston": "^3.1.0"
},
"devDependencies": {
  "nodemon": "2.0.4"
}
```

### 2. express-mongoose

#### Structure

```
├── config
│   ├── keys.js
│   ├── winston.js
├── public
├── logs
│   ├── error.log
│   ├── info.log
├── models
│   ├── User.js
├── routes
│   ├── index.js
├── app.js
├── node_modules
├── README.md
├── package.json
└── .gitignore
```

#### Packages

```
"dependencies": {
  "cors": "^2.8.4",
  "express": "^4.16.3",
  "mongoose": "^5.3.0",
  "morgan": "1.10.0",
  "winston": "3.2.1"
},
"devDependencies": {
  "nodemon": "^2.0.4"
}
```

### 3. express-mongoose-handlebars

#### Structure

```
├── config
│   ├── keys.js
│   ├── winston.js
├── public
├── logs
│   ├── error.log
│   ├── info.log
├── models
│   ├── User.js
├── views
│   ├── layouts
│   │   ├── main.handlebars
│   ├── partials
│   │   ├── _navbar.handlebars
│   │   ├── _footer.handlebars
│   ├── index.handlebars
├── routes
│   ├── index.js
├── app.js
├── node_modules
├── README.md
├── package.json
└── .gitignore
```

#### Packages

```
"dependencies": {
  "cors": "^2.8.4",
  "express": "^4.16.3",
  "express-handlebars": "4.0.4",
  "mongoose": "^5.3.0",
  "morgan": "1.10.0",
  "winston": "3.2.1"
},
"devDependencies": {
  "nodemon": "^2.0.4"
}
```

### 4. express-mvc

#### Structure

```
├── src
│   ├── api
│   │   ├── v1
│   │   │   ├── users
│   │   │   │   ├── user.controller.js
│   │   │   │   ├── user.model.js
│   │   │   │   ├── user.routes.js
│   │   │   ├── index.js
│   │   ├── index.js
│   ├── config
│   │   ├── winston.js
│   ├── db
│   │   ├── dbConnection.js
│   ├── logs
│   │   ├── error.log
│   │   ├── info.log
│   ├── middlewares
│   │   ├── index.js
│   ├── app.js
│   ├── errorHandler.js
│   ├── index.js
├── test
│   ├── app.test.js
│   ├── api.test.js
├── node_modules
├── README.md
├── package.json
└── .gitignore
```

#### Packages

```
"dependencies": {
  "cors": "2.8.5",
  "dotenv": "^8.2.0",
  "express": "^4.16.4",
  "helmet": "^3.15.0",
  "mongoose": "5.9.16",
  "morgan": "1.10.0",
  "winston": "3.2.1"
},
"devDependencies": {
  "eslint": "^7.1.0",
  "eslint-config-airbnb-base": "^14.1.0",
  "eslint-plugin-import": "^2.14.0",
  "mocha": "^7.2.0",
  "nodemon": "^2.0.4",
  "supertest": "^4.0.2"
}
```

### 4. react-webpack-scss

#### Structure

```
├── public
│   ├── index.html
│   ├── images
│   | ├── favicon.png
├── src
│   ├── components
│   ├── styles
│   │ ├── base
│   │ │   ├── _base.scss
│   │ │   ├── _settings.scss
│   │ ├── components
│   │ ├── styles.scss
│   ├── app.js
├── node_modules
├── README.md
├── package.json
└── .gitignore
```

#### Packages

```
"dependencies": {
  "babel-cli": "6.26.0",
  "babel-core": "6.26.3",
  "babel-loader": "8.1.0",
  "babel-plugin-transform-class-properties": "6.24.1",
  "babel-preset-env": "1.7.0",
  "babel-preset-react": "6.24.1",
  "css-loader": "3.5.3",
  "live-server": "^1.2.1",
  "node-sass": "4.14.1",
  "normalize.css": "8.0.1",
  "react": "16.13.1",
  "react-dom": "16.13.1",
  "react-modal": "3.11.2",
  "sass-loader": "8.0.2",
  "style-loader": "1.2.1",
  "validator": "13.0.0",
  "webpack": "4.43.0",
  "webpack-dev-server": "3.11.0"
}
```

# 💵 Support
> If you found this project helpful or you learned something from the source code and want to thank me, consider buying me a cup of :coffee:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/RajpurohitAkash)

# 🐛 Bugs or Requests

If you encounter any problems feel free to open an [issue](https://github.com/AkashRajpurohit/boilerplate-gen/issues/new?template=bug_report.md). If you feel the library is missing a feature, please raise a [ticket](https://github.com/AkashRajpurohit/boilerplate-gen/issues/new?template=feature_request.md) on GitHub and I'll look into it. Pull request are also welcome.

# Visit My Portfolio
[Akash Rajpurohit](https://akashwho.codes)