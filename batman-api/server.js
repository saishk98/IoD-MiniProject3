const express = require('express');
const cors = require('cors');
const charactersRouter = require('./routes/characters');
const gamesRouter = require('./routes/games');
const abilitiesRouter = require('./routes/abilities');
const gearsRouter = require('./routes/gears');
const locationsRouter = require('./routes/locations');
const missionsRouter = require('./routes/missions');
const vehiclesRouter = require('./routes/vehicles');
const swaggerUI = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swagger');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("🦇 Welcome to the BatmanDB API! Visit /api-docs for Swagger documentation.");
});

// API Routes
app.use('/characters', charactersRouter);
app.use('/games', gamesRouter);
app.use('/abilities', abilitiesRouter);
app.use('/gears', gearsRouter);
app.use('/locations', locationsRouter);
app.use('/missions', missionsRouter);
app.use('/vehicles', vehiclesRouter);

// Swagger Docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));