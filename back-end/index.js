const app = require('./app.js')
const port = 5555;


app.listen(port, () => {
  console.log(`Food App listening on port ${port}`)
})