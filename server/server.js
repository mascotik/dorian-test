
const express = require('express')
const app = express()
const port = process.env.port || 3001
const apiRoutes = require("./routes/apiRoutes")

app.use('/api', apiRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

