const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
  definition: {
    openapi: "3.0.0",
    info: { 
      title: "BatmanDB API", 
      version: "1.0.0", 
      description: "API for managing characters, abilities, gear, locations, missions, and vehicles." 
    },
    servers: [
      { url: "http://localhost:3000", description: "Local development server" }
    ]
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
module.exports = specs;