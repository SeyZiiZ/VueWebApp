import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const initializeDB = async () => {
    try {
        const db = await open({
            filename: './users.db',
            driver: sqlite3.Database
        });

        await db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nom VARCHAR(100),
                prenom VARCHAR(100),
                email VARCHAR(100) UNIQUE,
                password VARCHAR(100),
                isAdmin INTEGER DEFAULT 0
            )
        `);

        console.log('Connexion à la base de données SQLite réussie.');
        return db;
    } catch (err) {
        console.error('Erreur lors de la connexion à la base de données :', err.message);
        throw err;
    }
};