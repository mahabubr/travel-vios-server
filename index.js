const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const places = require('./data/places.json')
const hotels = require('./data/hotel.json')

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/places', (req, res) => {
    res.send(places)
})

app.get('/places/:id', (req, res) => {
    const id = req.params.id
    const selected_news = hotels.filter(hotel => hotel.category_id === id)
    res.send(selected_news)
})

app.listen(port, () => {
    console.log(`port running ${port}`);
})