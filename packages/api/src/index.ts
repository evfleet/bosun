import { build } from "./app.js";

async function start() {
  const app = await build();
  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
}

start();
