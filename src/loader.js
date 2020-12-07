const server = require("./config/server");
require("./config/database");
require("./config/routes")(server); // envia o server para routes
