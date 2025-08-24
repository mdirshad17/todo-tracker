// handle authentication
import { DatabaseSync } from 'node:sqlite';

// Create (or open) a SQLite database file
const db = new DatabaseSync('./database.sqlite');

//Execute SQL statements from strings
db.exec(`
  CREATE TABLE IF NOT EXISTS users  (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT);
`);

db.exec(`
   CREATE TABLE IF NOT EXISTS todos 
   (id INTEGER PRIMARY KEY AUTOINCREMENT,
   user_id INTEGER,
   task TEXT,
   completed BOOLEAN DEFAULT 0,
   FOREIGN KEY(user_id) REFERENCES users(id)); 
`);


export default db;