import express from "express";
import pino from "pino-http";
import logger from "./loaders/logger";

const build = () => {
  const app = express();

  app.use(pino({ logger }));

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  return app;
};

export default { build };
