const { connect } = require('mongoose');

connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    console.log(`Cannot connect to mongodb: ${err}`);
    process.exit(1);
  });
