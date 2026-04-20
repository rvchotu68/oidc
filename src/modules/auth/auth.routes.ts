import express from "express";
import type { Router } from "express";

//user imports

import authController from "./auth.controller.js";

const router: Router = express.Router();

router.get(
  "/.well-known/oidc-configuration",
  authController.handleServiceDiscovery,
);

export default router;
