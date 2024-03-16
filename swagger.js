const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "CafeMigom",
    description: "The best",
    contact: {
      name: "Egorka",
    },
    server: ["http://localhost:5001"],
  },
};
const outputFile = "./swaggerdoc.json";
const routes = ["./routes/index.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
