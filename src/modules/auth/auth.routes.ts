import express from "express";
import type { Router } from "express";

//user imports

import authController from "./auth.controller.js";

const router: Router = express.Router();

//Discovery endpoints

router.get(
  "/.well-known/oidc-configuration",
  authController.handleServiceDiscovery,
);

router.get("/.well-known/jwks.json", authController.handleJWKSDiscovery);

export default router;
