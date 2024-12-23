import fs from "fs/promises";
import path from "path";

export async function transform(input: string) {
  const inputPath = path.resolve(process.cwd(), input);
  const file = await fs.readFile(inputPath);
  const filename = inputPath.split("/").at(-1);

  const form = new FormData();

  form.append("file", new Blob([file]), filename);

  const res = await fetch(`${process.env.BACKEND_URL}/upload`, {
    method: "POST",
    body: form,
  });

  console.log(res);
}
