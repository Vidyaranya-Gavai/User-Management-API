import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/routes.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

app.get('/', (req, res) =>  {
    res.send("<h1>Home Page</h1>");
});