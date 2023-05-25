const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World I\'m Patricio!')
// })

app.use(express.static('frontend/dist/test-angular-product-manager'))

app.get('/api/hello-world', (req, res) => {
  res.send('Hello World I\'m Patricio!')
})

// Wildcard route
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend/dist/test-angular-product-manager/index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
