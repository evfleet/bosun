import axios from "axios";
import fs from "fs";
import path from "path";

export async function transform(input: string) {
  const inputs = {
    input1: fs.createReadStream(path.resolve(process.cwd(), input)),
  };

  // using axios to properly serialize streams, native fetch needed weird hacks
  const res = await axios.post(`${process.env.BACKEND_URL}/upload`, inputs, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(res);
}
