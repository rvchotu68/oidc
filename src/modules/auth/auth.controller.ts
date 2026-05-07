import type { Request, Response } from "express";

const handleServiceDiscovery = async (req: Request, res: Response) => {
  res.json({ status: "ok", message: "route working" });
};

const handleJWKSDiscovery = async (req: Request, res: Response) => {
  res.json({ status: "ok", message: "endpoint working" });
};

export default { handleServiceDiscovery, handleJWKSDiscovery };
