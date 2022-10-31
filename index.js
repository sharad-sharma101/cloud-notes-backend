
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
const dotenv = require("dotenv");

dotenv.config();

const app = express()
const port = process.env.PORT || 5000;

connectToMongo();
app.get('/', (req, res) => {
  res.sendStatus(200)
})
app.use(cors())
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`NoteCloud backend listening on port ${port}`)
})







