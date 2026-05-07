import http from "node:http";
import type { Server } from "node:http";

// user defined imports
import app from "./app.js";

const PORT: number =
  process.env.PORT && !isNaN(Number(process.env.PORT))
    ? Number(process.env.PORT)
    : 3000;
const server: Server = http.createServer(app);

const initServer = async () => {
  //db connect

  server.listen(PORT, () => {
    console.log(`OIDC Server started listening on PORT: ${PORT}`);
  });
};

initServer().catch((err) => {
  console.log(`Failed to start server with error : ${err.message}`);
  process.exit(1);
});
