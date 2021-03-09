const mongoose = require('mongoose');

const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DBNAME;
const mongodbUrl = `mongodb+srv://${user}:${password}@cluster0.jzjfj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});