import busboy from "busboy";
import express from "express";

export function build() {
  const app = express();

  app.post("/upload", (req, res, next) => {
    try {
      const bb = busboy({
        headers: req.headers,
      });

      bb.on("error", (err) => {
        next(err);
      });

      bb.on("file", (name, file) => {
        console.log("file", name);
      });

      bb.on("close", () => {
        bb.removeAllListeners();
      });

      req.pipe(bb);
    } catch (err) {
      res.status(400).json({
        message: `Could not retrieve file from request`,
      });
    }
  });

  return app;
}
