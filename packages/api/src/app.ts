import express from "express";

const build = () => {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  return app;
};

export default { build };
