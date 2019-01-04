# Generate boilerplate for your projects

## Installation

```
npm i -g boilerplate-gen
```

## Steps to generate boilerplate

1. Navigate to the folder where you want to create your project
2. type ```gen```

## Choose from the choices available

1. express

### Structure

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

2. express-mongoose

### Structure

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

3. express-mongoose-handlebars

### Structure

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

4. react-webpack-scss

### Structure

```
├── public
│   ├── index.html
│   ├── images
│   ├── favicon.png
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