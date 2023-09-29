const express = require('express')
const port = process.env.PORT ?? 3000
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express()

app.use((req,res, next) => {
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods", "GET","PUT","POST","DELETE")
  res.header("Access-Control-Allow-Headers","X-PINGOTHER, Content-Type, Authorization")
  app.use(cors())
  next()
})
app.use(express.json())
app.use(express.static(path.join("public")))
app.use(routes)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
