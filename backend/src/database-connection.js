const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE
// const host = process.env.MONGODB_HOST
// const port = process.env.MONGODB_PORT
// const remote = process.env.MONGODB_REMOTE
let connectionString = process.env.MONGODB_CONNECTION_STRING

mongoose.set('debug', true)

if (!connectionString) {
  connectionString = `mongodb+srv://${username}:${password}@cluster0.1rmwl.mongodb.net/${dbName}?retryWrites=true&w=majority`
}

// if (!connectionString) {
//   connectionString = remote
//     ? `mongodb+srv://${username}:${password}@${host}/${dbName}?retryWrites=true&w=majority`
//     : `mongodb://${host}:${port}/${dbName}`
// }

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(console.log)

module.exports = mongoose.connection
