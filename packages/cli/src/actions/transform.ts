import fs from "fs";
import path from "path";

export async function transform(input: string) {
  const form = new FormData();

  form.append("file", fs.createReadStream(path.resolve(process.cwd(), input)));

  const res = await fetch(`${process.env.BACKEND_URL}/upload`, {
    method: "POST",
    body: form,
  });

  console.log(res);
}
