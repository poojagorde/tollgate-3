import express from 'express'
// import { connectDB } from './utils/dbConfig.js'
import dotenv from 'dotenv'

// configure dotenv
dotenv.config()

// connect to database
// connectDB()

// create express app
const app = express()
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send('Backend is running...')
})

app / use('/api/claims', claimRoutes)

// launching the server on the port
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
