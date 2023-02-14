express = require('express')
app = express()

app.get('/', (req, res) => {
    res.send('Server is up and running. You are now watching the staging environment')
})

app.listen(8080, ()=> {
    console.log('server is listening')
})
