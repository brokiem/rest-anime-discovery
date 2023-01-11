import express from 'express';
import cors from 'cors';

import AnimeRoute from "./routes/anime-route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/anime', AnimeRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})