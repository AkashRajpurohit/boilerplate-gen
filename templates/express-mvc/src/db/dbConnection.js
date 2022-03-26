const { connect } = require('mongoose');

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    console.log(`Cannot connect to mongodb: ${err}`);
    process.exit(1);
  });
