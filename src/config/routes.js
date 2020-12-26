const express = require("express");
const auth = require("./auth");

// receber o server de server.js
module.exports = function (server) {
  // Define URL base para rota protegida com middleware auth JWT
  const protectedApi = express.Router();
  server.use("/api", protectedApi);
  protectedApi.use(auth);
  // Rotas de Ciclo de Pagamento com auth JWT
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(protectedApi, "/billingCycles");

  // API aberta
  const openApi = express.Router();
  server.use("/oapi", openApi);
  // Rotas abertas
  const AuthService = require("../api/user/authService");
  openApi.post("/login", AuthService.login);
  openApi.post("/signUp", AuthService.signUp);
  openApi.post("/validateToken", AuthService.validateToken);
};
