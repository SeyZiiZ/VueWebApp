import userRoutes from './routes/users.js';
import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Bienvenue sur l'api backend")
    res.end();
});

app.use('/api', userRoutes);

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Lancement du serveur sur le port : ${port}`);
});