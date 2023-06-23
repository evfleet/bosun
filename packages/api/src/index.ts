import app from "./app";
import logger from "./loaders/logger";

const port = process.env.PORT || 8080;

const start = async () => {
  const server = await app.build();

  server.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
};

start();
