# 🦇 BatmanDB API - README

## 🔍 Full Database Structure Overview  
My database consists of multiple interconnected tables, each serving a specific role.

CREATE TABLE games (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_date DATE,
    developer VARCHAR(255)
);

CREATE TABLE characters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    game_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    alias VARCHAR(255),
    role VARCHAR(100),
    base_of_operations VARCHAR(255),
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);

CREATE TABLE missions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    game_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    objectives TEXT NOT NULL,
    difficulty VARCHAR(50),
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);

CREATE TABLE abilities (
    id INT PRIMARY KEY AUTO_INCREMENT,
    character_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

CREATE TABLE gears (
    id INT PRIMARY KEY AUTO_INCREMENT,
    character_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

CREATE TABLE locations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE vehicles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    character_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

🔗 Relationships Between Tables
Primary Connections: 
✅ Characters ↔ Games → game_id in characters connects to id in games. <br>
✅ Missions ↔ Games → game_id in missions connects to id in games. <br>
✅ Abilities ↔ Characters → character_id in abilities connects to id in characters. <br>
✅ Gear ↔ Characters → character_id in gears connects to id in characters. <br>
✅ Vehicles ↔ Characters → character_id in vehicles connects to id in characters.

1️⃣ Clone the Repository
git clone https://github.com/saishk98/IoD-MiniProject3.git
cd IoD-MiniProject3

2️⃣ Install Dependencies
npm install

3️⃣ Start the API
npm start

4️⃣ Set Up MySQL Database
mysql -u root -p
source BatmanDB.sql;

📌 API Documentation
Swagger UI: http://localhost:3000/api-docs

🔍 Example API Calls
GET http://localhost:3000/characters/{id}/full-profile

🔹 Example Response:
{
    "id": 11,
    "name": "Batman",
    "alias": "Bruce Wayne",
    "base_of_operations": "Batcave",
    "games": [
        { "id": 1, "title": "Batman: Arkham Asylum" },
        { "id": 2, "title": "Batman: Arkham City" },
        { "id": 3, "title": "Batman: Arkham Origins" },
        { "id": 4, "title": "Batman: Arkham Knight" }
    ],
    "abilities": [
        { "id": 1, "name": "Stealth Takedown" },
        { "id": 2, "name": "Detective Vision" },
        { "id": 3, "name": "Glide Attack" },
        { "id": 100, "name": "Remote Claw" }
    ],
    "gears": [
        { "id": 1, "name": "Batarang" },
        { "id": 2, "name": "Grappling Hook" },
        { "id": 3, "name": "Smoke Pellets" }
    ],
    "missions": [
        { "id": 301, "title": "Save Gotham" },
        { "id": 302, "title": "Defeat Joker" }
    ]
}

👨‍💻 Developer Use Cases
Front-End Developers - Build a character selection screen with complete details. ✔ API Endpoint: /characters/{id}/full-profile