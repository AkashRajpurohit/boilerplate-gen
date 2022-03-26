# Generate boilerplate for your projects
Tired of writing the same boilerplate again for similar kinds of project? Use boilerplate-gen to bootstrap a new project quickly as possible with preloaded templates.

![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103) ![Stars](https://img.shields.io/github/stars/AkashRajpurohit/boilerplate-gen) ![Visited](https://visitor-badge.laobi.icu/badge?page_id=boilerplate-gen-akash.visitor-badge)

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

# 💵 Support
> If you found this project helpful or you learned something from the source code and want to thank me, consider buying me a cup of :coffee:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/RajpurohitAkash)

# 🐛 Bugs or Requests

If you encounter any problems feel free to open an [issue](https://github.com/AkashRajpurohit/boilerplate-gen/issues/new?template=bug_report.md). If you feel the library is missing a feature, please raise a [ticket](https://github.com/AkashRajpurohit/boilerplate-gen/issues/new?template=feature_request.md) on GitHub and I'll look into it. Pull request are also welcome.

# Visit My Portfolio
[Akash Rajpurohit](https://akashwho.codes)
