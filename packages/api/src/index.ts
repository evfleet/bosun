import app from "./app";

const port = process.env.PORT || 8080;

const start = async () => {
  const server = await app.build();

  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

start();
