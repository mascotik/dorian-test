
const express = require('express')
const app = express()
const port = process.env.port || 3001
const apiRoutes = require("./routes/apiRoutes")

// API routes middleware
app.use('/api',apiRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

