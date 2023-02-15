express = require('express')
app = express()

app.get('/', (req, res) => {
    res.send('server is up and running')
})

app.listen(8080, ()=> {
    console.log('server is listening')
})
