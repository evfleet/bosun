import axios from "axios";
import fs from "fs";
import path from "path";

export async function transform(input: string) {
  const files = {
    file: fs.createReadStream(path.resolve(process.cwd(), input)),
  };

  // TODO: Had problem with node fetch working with busboy
  // using axios to set headers and serialize read streams
  const res = await axios.post(`${process.env.BACKEND_URL}/upload`, files, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(res);
}
