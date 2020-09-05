const mongoose = require('mongoose')
// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variable.env' }) 

//our database connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})
mongoose.connection.on('error', (err) => {
    console.error(`Database error → ${err.message}`);
  })

// READY?! Let's go!
require('./src/model/order')
require('./src/model/user')

// Start our app!
const app = require('./app') 
app.set('port', process.env.PORT || 7777) 
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`) 
}) 