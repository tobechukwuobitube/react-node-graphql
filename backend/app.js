const express = require('express')
const mongoose = require('mongoose')
const { graphqlHTTP  } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()

mongoose.connect('mongodb+srv://admin:admin@react-node-graphql.qnsgz.mongodb.net/moviemaker?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB!'))
.catch((error) => console.log('Error', error))

const schema = buildSchema(`
    type Query {
        name: String
    }
`)

const rootValue = {
    name: () => {
        return 'Hello from GraphQL'
    }
}

// Setup GraphQL
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue
}))

app.get('/', (req, res) => {
    res.send('Hello from backend app.js')
})

app.listen(4000, () => {
    console.log('Server on port 4000')
})