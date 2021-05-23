const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    //docker logs --follow [container-id] to show logs
    console.log('Home called!')
    return res.json({message:"hello world"})
})

app.listen(3000, () => {
    console.log('On fire na porta: 3000')
})