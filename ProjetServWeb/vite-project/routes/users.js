import express from 'express';
import jwt from 'jsonwebtoken';
import {initializeDB} from '../db.js';
import bcrypt from 'bcrypt';

const router = express.Router();

let db;
(async () => {
    db = await initializeDB();
})();

const validMail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// POST NOUVEAUX USERS
router.post('/register', async (req, res) => {
    const { nom, prenom, email, password } = req.body;

    if (!nom || !prenom || !email || !password) {
        return res.status(400).json({ message: 'Nom, prénom, email et mot de passe sont requis' });
    }

    if (!validMail(email)) {
        return res.status(400).json({message: 'Le format de l\'adresse mail est incorect !'});
    }

    try {
        const saltRounds = 10; // Nombre de cycles pour le salage
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const result = await db.run(
            `INSERT INTO users (nom, prenom, email, password) VALUES (?, ?, ?, ?)`,
            [nom, prenom, email, hashedPassword]
        );
        const user = { id: result.lastID, nom, prenom, email };
        res.status(201).json({ message: 'Utilisateur créé', user });
    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT') {
            res.status(400).json({ message: 'Email déjà utilisé' });
        } else {
            res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error: error.message });
        }
    }
});

// RECUPERER TOUS LES USERS
router.get('/users', async (req, res) => {
    try {
        const users = await db.all('SELECT id, nom, prenom, email, isAdmin, password FROM users');
        
        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'Aucun utilisateur trouvé' });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: error.message });
    }
});


// CRUD - Read by ID (GET) - Obtenir un utilisateur par ID
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await db.get(
      "SELECT id, nom, prenom, email FROM users WHERE id = ?",
      [id]
    );

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  } catch (err) {
    console.log("Erreur lors de la recuperation de l'utilisateur", err);
    res.status(500).json({message: "Erreur lors de la recuperation de l'utilisateur "})
  }
});

// CRUD - Update (PUT) - Mettre à jour un utilisateur
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await db.get(
        "DROP "
    );
});

// CRUD - Delete (DELETE) - Supprimer un utilisateur
router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).json({ message: 'Utilisateur supprimé' });
    } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
});

// Route de connexion (Login) - Authentification JWT
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email et mot de passe sont requis' });
    }

    if (!validMail(email)) {
        return res.status(400).json({message: 'Le format de l\'adresse mail est incorect !'});
    }

    try {
        const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

        if (!user) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }

        // Générer un token JWT valide pour 1 heure
        const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET || 'your_secret_key', { expiresIn: '1h' });
        const {prenom, isAdmin} = user;
        res.status(200).json({ message: 'Login réussi', token, prenom, isAdmin});
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ message: 'Erreur lors de la connexion', error: error.message });
    }
});


export default router;