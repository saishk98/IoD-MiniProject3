USE batmandb

SELECT * from characters;

SELECT c.* FROM characters c
JOIN character_game cg ON c.id = cg.character_id
WHERE cg.game_id = 1;

-- Create Missions Table
CREATE TABLE missions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    objective TEXT NOT NULL,
    mission_type ENUM('Main', 'Side') NOT NULL,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);

-- Create Abilities Table
CREATE TABLE abilities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    character_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

-- Create Gear Table
CREATE TABLE gear (
    id INT AUTO_INCREMENT PRIMARY KEY,
    character_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

INSERT INTO missions (id, game_id, title, objective, mission_type) VALUES
(1, 1, 'Escape Arkham Asylum', 'Break free from Joker’s trap.', 'Main'),
(2, 1, 'Defeat Harley Quinn', 'Stop Harley Quinn’s riot inside Arkham.', 'Main'),
(3, 2, 'Find Ra’s al Ghul', 'Uncover the Lazarus Pit.', 'Main'),
(4, 3, 'Defeat Black Mask', 'Take down the crime boss.', 'Main'),
(5, 4, 'Stop Scarecrow’s Plan', 'Prevent Gotham from being overwhelmed by fear toxin.', 'Main'),
(6, 4, 'Neutralize the Arkham Knight', 'Battle Arkham Knight’s militia forces.', 'Main'),
(7, 1, 'Rescue GCPD Officers', 'Find and rescue kidnapped officers in Arkham.', 'Side'),
(8, 2, 'Zsasz’s Phone Calls', 'Track down Victor Zsasz before he kills his next victim.', 'Side'),
(9, 3, 'Penguin’s Arms Smuggling', 'Destroy Penguin’s illegal weapon shipments.', 'Side'),
(10, 4, 'Lex Luthor’s Secret Deals', 'Investigate LexCorp’s hidden involvement in Gotham.', 'Side');

INSERT INTO abilities (id, character_id, name, description) VALUES
(1, 11, 'Stealth Takedown', 'Silently eliminate an enemy without detection.'),
(2, 11, 'Detective Vision', 'Scans environments for clues and enemies.'),
(3, 11, 'Glide Attack', 'Batman swoops down from a vantage point to strike an enemy.'),
(4, 15, 'Gun Kata', 'Combines firearms with martial arts for lethal efficiency.'),
(5, 24, 'Fear Toxin', 'Induces terror with chemical weapons.'),
(6, 27, 'Toxic Control', 'Manipulates plants and releases toxins against enemies.'),
(7, 32, 'Deadshot’s Marksman Precision', 'Never misses a target with deadly accuracy.'),
(8, 33, 'Deathstroke’s Combat Expertise', 'Combines swordplay with firearms in battle.'),
(9, 34, 'Venom-Enhanced Strength', 'Boosts strength beyond human limits.'),
(10, 28, 'Cryo Beam', 'Mr. Freeze can freeze enemies and objects instantly.');

INSERT INTO gear (id, character_id, name, description) VALUES
(1, 11, 'Batarang', 'Throwable bat-shaped weapon used to disable enemies.'),
(2, 11, 'Grappling Hook', 'Allows Batman to grapple onto structures.'),
(3, 11, 'Smoke Pellets', 'Creates a smoke screen to evade enemies or confuse them.'),
(4, 15, 'Dual Pistols', 'Red Hood’s signature firearms for close-range combat.'),
(5, 13, 'Escrima Sticks', 'Nightwing’s iconic weapons that deliver electric shocks.'),
(6, 14, 'Bo Staff', 'Robin’s collapsible combat staff used for agility-based attacks.'),
(7, 28, 'Freeze Gun', 'A weapon that can freeze enemies instantly.'),
(8, 24, 'Scarecrow Syringe', 'Fear toxin injection that induces hallucinations.'),
(9, 22, 'Acrobatic Hammer', 'Harley Quinn’s oversized hammer used for brute-force attacks.'),
(10, 21, 'Joker Gas', 'Releases toxic laughing gas that incapacitates enemies.');

SELECT * FROM games;

INSERT INTO games (id, title, genre, release_date) VALUES
(1, 'Batman: Arkham Asylum', 'Action-Adventure', '2009-08-25'),
(2, 'Batman: Arkham City', 'Action-Adventure', '2011-10-18'),
(3, 'Batman: Arkham Origins', 'Action-Adventure', '2013-10-25'),
(4, 'Batman: Arkham Knight', 'Action-Adventure', '2015-06-23');

CREATE DATABASE batmandb;
USE batmandb;

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    release_date DATE NOT NULL
);

CREATE TABLE characters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    alias VARCHAR(255),
    role ENUM('Hero', 'Villain', 'Anti-Hero') NOT NULL,
    base_of_operations VARCHAR(255),
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);

CREATE TABLE missions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    objective TEXT NOT NULL,
    mission_type ENUM('Main', 'Side') NOT NULL,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);

CREATE TABLE abilities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    character_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

CREATE TABLE gear (
    id INT AUTO_INCREMENT PRIMARY KEY,
    character_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (character_id) REFERENCES characters(id) ON DELETE CASCADE
);

-- Insert Games Data
INSERT INTO games (id, title, genre, release_date) VALUES
(1, 'Batman: Arkham Asylum', 'Action-Adventure', '2009-08-25'),
(2, 'Batman: Arkham City', 'Action-Adventure', '2011-10-18'),
(3, 'Batman: Arkham Origins', 'Action-Adventure', '2013-10-25'),
(4, 'Batman: Arkham Knight', 'Action-Adventure', '2015-06-23');

-- Insert Characters Data
INSERT INTO characters (id, game_id, name, alias, role, base_of_operations) VALUES
(11, 1, 'Batman', 'Bruce Wayne', 'Hero', 'Batcave'),
(12, 2, 'Batgirl', 'Barbara Gordon', 'Hero', 'Gotham'),
(13, 2, 'Nightwing', 'Dick Grayson', 'Hero', 'Blüdhaven'),
(14, 2, 'Robin', 'Tim Drake', 'Hero', 'Wayne Tower'),
(15, 4, 'Red Hood', 'Jason Todd', 'Anti-Hero', 'Gotham'),
(16, 4, 'Azrael', 'Michael Lane', 'Anti-Hero', 'Unknown'),
(17, 2, 'Alfred Pennyworth', 'Alfred', 'Support', 'Wayne Manor'),
(18, 2, 'Lucius Fox', 'Lucius Fox', 'Support', 'Wayne Enterprises'),
(21, 1, 'The Joker', 'Joker', 'Villain', 'Steel Mill'),
(22, 1, 'Harley Quinn', 'Harleen Quinzel', 'Villain', 'Steel Mill'),
(23, 2, 'Riddler', 'Edward Nygma', 'Villain', 'Secret Lair'),
(24, 4, 'Scarecrow', 'Jonathan Crane', 'Villain', 'Abandoned Labs'),
(25, 3, 'Black Mask', 'Roman Sionis', 'Villain', 'Gotham Underworld'),
(26, 2, 'Poison Ivy', 'Pamela Isley', 'Villain', 'Botanical Gardens'),
(27, 4, 'Mr. Freeze', 'Victor Fries', 'Villain', 'Cryogenic Labs'),
(28, 3, 'Bane', 'Bane', 'Villain', 'Underground Hideouts'),
(29, 3, 'Deadshot', 'Floyd Lawton', 'Villain', 'Gotham'),
(30, 4, 'Deathstroke', 'Slade Wilson', 'Villain', 'Gotham'),
(31, 3, 'Mad Hatter', 'Jervis Tetch', 'Villain', 'Hidden Lair'),
(32, 2, 'Talia al Ghul', 'Talia', 'Villain', 'Lazarus Pit'),
(33, 4, 'Arkham Knight', 'Jason Todd', 'Villain', 'Militia HQ');

ALTER TABLE characters MODIFY role VARCHAR(15);

-- Insert Missions Data
INSERT INTO missions (id, game_id, title, objective, mission_type) VALUES
(1, 1, 'Escape Arkham Asylum', 'Break free from Joker’s trap.', 'Main'),
(2, 1, 'Defeat Harley Quinn', 'Stop Harley Quinn’s riot inside Arkham.', 'Main'),
(3, 2, 'Find Ra’s al Ghul', 'Uncover the Lazarus Pit.', 'Main'),
(4, 3, 'Defeat Black Mask', 'Take down the crime boss.', 'Main'),
(5, 4, 'Stop Scarecrow’s Plan', 'Prevent Gotham from being overwhelmed by fear toxin.', 'Main'),
(6, 4, 'Neutralize the Arkham Knight', 'Battle Arkham Knight’s militia forces.', 'Main'),
(7, 1, 'Rescue GCPD Officers', 'Find and rescue kidnapped officers in Arkham.', 'Side'),
(8, 2, 'Zsasz’s Phone Calls', 'Track down Victor Zsasz before he kills his next victim.', 'Side'),
(9, 3, 'Penguin’s Arms Smuggling', 'Destroy Penguin’s illegal weapon shipments.', 'Side'),
(10, 4, 'Lex Luthor’s Secret Deals', 'Investigate LexCorp’s hidden involvement in Gotham.', 'Side'),
(11, 2, 'Riddler’s Trophy Hunt', 'Solve Riddler’s puzzles across Gotham.', 'Side'),
(12, 3, 'Battle Shiva', 'Prove worthiness in combat against Lady Shiva.', 'Side'),
(13, 3, 'Mad Hatter’s Mind Game', 'Escape Mad Hatter’s hypnotic trap.', 'Side'),
(14, 2, 'Save Alfred', 'Find and rescue Alfred from thugs.', 'Side'),
(15, 4, 'Destroy Arkham Knight’s Drone Convoy', 'Prevent the militia’s invasion.', 'Side');

-- Insert Abilities Data
INSERT INTO abilities (id, character_id, name, description) VALUES
(1, 11, 'Stealth Takedown', 'Silently eliminate an enemy without detection.'),
(2, 11, 'Detective Vision', 'Scans environments for clues and enemies.'),
(3, 11, 'Glide Attack', 'Batman swoops down from a vantage point to strike an enemy.'),
(4, 15, 'Gun Kata', 'Combines firearms with martial arts for lethal efficiency.'),
(5, 24, 'Fear Toxin', 'Induces terror with chemical weapons.'),
(6, 26, 'Toxic Control', 'Manipulates plants and releases toxins against enemies.'),
(7, 29, 'Deadshot’s Marksman Precision', 'Never misses a target with deadly accuracy.'),
(8, 30, 'Deathstroke’s Combat Expertise', 'Combines swordplay with firearms in battle.'),
(9, 28, 'Venom-Enhanced Strength', 'Boosts strength beyond human limits.'),
(10, 27, 'Cryo Beam', 'Mr. Freeze can freeze enemies and objects instantly.');

-- Insert Gear Data
INSERT INTO gear (id, character_id, name, description) VALUES
(1, 11, 'Batarang', 'Throwable bat-shaped weapon used to disable enemies.'),
(2, 11, 'Grappling Hook', 'Allows Batman to grapple onto structures.'),
(3, 11, 'Smoke Pellets', 'Creates a smoke screen to evade enemies or confuse them.'),
(4, 15, 'Dual Pistols', 'Red Hood’s signature firearms for close-range combat.'),
(5, 13, 'Escrima Sticks', 'Nightwing’s iconic weapons that deliver electric shocks.'),
(6, 14, 'Bo Staff', 'Robin’s collapsible combat staff used for agility-based attacks.'),
(7, 27, 'Freeze Gun', 'A weapon that can freeze enemies instantly.'),
(8, 24, 'Scarecrow Syringe', 'Fear toxin injection that induces hallucinations.'),
(9, 22, 'Acrobatic Hammer', 'Harley Quinn’s oversized hammer used for brute-force attacks.'),
(10, 21, 'Joker Gas', 'Releases toxic laughing gas that incapacitates enemies.');

CREATE TABLE vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    type ENUM('Land', 'Air', 'Water') NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);

INSERT INTO vehicles (id, game_id, name, type, description) VALUES
(1, 4, 'Batmobile', 'Land', 'Batman’s armored vehicle equipped with advanced weaponry.'),
(2, 2, 'Batcycle', 'Land', 'A high-speed motorcycle used for rapid movement across Gotham.'),
(3, 3, 'Batwing', 'Air', 'Batman’s aerial vehicle used for fast travel and aerial combat.'),
(4, 2, 'GCPD Squad Car', 'Land', 'Standard Gotham police vehicle used for patrols.'),
(5, 4, 'Arkham Knight’s Drone Tank', 'Land', 'Militia-controlled armored tanks deployed throughout Gotham.'),
(6, 3, 'Joker’s Armored Truck', 'Land', 'A heavily fortified vehicle used in Joker’s criminal operations.'),
(7, 1, 'Bane’s Attack Van', 'Land', 'Bane’s modified van used to transport venom supplies.'),
(8, 4, 'Scarecrow’s Helicopter', 'Air', 'A military-grade chopper used by Scarecrow to oversee Gotham’s terror.'),
(9, 2, 'Penguin’s Smuggling Boat', 'Water', 'A covert boat used by Penguin for illegal shipments.'),
(10, 3, 'Black Mask’s Armored Car', 'Land', 'An armored getaway vehicle for Black Mask’s operations.');

CREATE TABLE locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    type ENUM('District', 'Building', 'Underground', 'Landmark') NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE
);

INSERT INTO locations (id, game_id, name, type, description) VALUES
(1, 1, 'Arkham Asylum', 'Building', 'The infamous psychiatric facility housing Gotham’s most dangerous criminals.'),
(2, 2, 'Gotham City', 'District', 'The dark and crime-ridden city that Batman protects.'),
(3, 2, 'Wonder Tower', 'Landmark', 'A central observation tower used by Hugo Strange in Arkham City.'),
(4, 3, 'GCPD Headquarters', 'Building', 'The headquarters of Gotham’s law enforcement.'),
(5, 3, 'Blackgate Prison', 'Building', 'A high-security prison housing Gotham’s worst criminals.'),
(6, 4, 'Ace Chemicals', 'Building', 'A chemical plant central to Joker’s operations in Arkham Knight.'),
(7, 4, 'Wayne Tower', 'Landmark', 'Bruce Wayne’s corporate headquarters in Gotham.'),
(8, 4, 'Miagani Island', 'District', 'A key area of Gotham featuring Wayne Tower and several crime hotspots.'),
(9, 3, 'Bowery District', 'District', 'A crime-ridden area of Gotham filled with gang operations.'),
(10, 4, 'Panessa Studios', 'Building', 'An abandoned film studio repurposed for criminal activities.'),
(11, 1, 'Arkham Mansion', 'Building', 'One of the key buildings within Arkham Asylum housing restricted areas.'),
(12, 2, 'Steel Mill', 'Building', 'The Joker’s hideout in Arkham City, full of deadly traps.'),
(13, 2, 'Subway Tunnels', 'Underground', 'Old subway systems used for criminal hideouts.'),
(14, 3, 'Royal Hotel', 'Building', 'A luxury hotel overtaken by crime lords during Arkham Origins.'),
(15, 4, 'Clock Tower', 'Landmark', 'Batgirl’s secret hideout used for surveillance in Gotham.'),
(16, 4, 'Arkham Knight’s HQ', 'Building', 'A fortified base used by Arkham Knight and his militia forces.'),
(17, 3, 'Crime Alley', 'Landmark', 'The tragic site of Bruce Wayne’s parents’ murder.'),
(18, 2, 'Monarch Theatre', 'Landmark', 'A ruined theatre tied to Joker’s past and Gotham’s dark history.');

SELECT games.title, characters.name, characters.role
FROM games
JOIN characters ON games.id = characters.game_id;

SELECT missions.title, locations.name
FROM missions
JOIN locations ON missions.game_id = locations.game_id
WHERE missions.game_id = 2;

SELECT characters.name, abilities.name, abilities.description
FROM characters
JOIN abilities ON characters.id = abilities.character_id
WHERE characters.name = 'Batman';

SELECT games.title, vehicles.name, vehicles.type
FROM vehicles
JOIN games ON vehicles.game_id = games.id
WHERE games.title = 'Batman: Arkham Knight';

SELECT characters.name, gear.name, gear.description
FROM characters
JOIN gear ON characters.id = gear.character_id
WHERE characters.name = 'Nightwing';

SHOW TABLES;

ALTER TABLE gear RENAME TO gears;

SELECT * FROM gears;