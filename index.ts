import { intro, outro, text, select } from "@clack/prompts";
import { promises as fsPromises } from "fs";
import { join } from "path";
import path from "path";
import { fileURLToPath } from "url";

const BASE_URL: string = `https://raw.githubusercontent.com/github/gitignore/main/`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchGitignore(frameworkSelect: string): Promise<string> {
  const response = await fetch(`${BASE_URL}${frameworkSelect}.gitignore`);
  const text = await response.text();
  return text;
}

async function asyncWriteFile(filename: string, data: any) {
  try {
    await fsPromises.writeFile(join(__dirname, filename), data, {
      flag: "w",
    });

    const contents = await fsPromises.readFile(
      join(__dirname, filename),
      "utf-8",
    );
    console.log(contents);
    return contents;
  } catch (err) {
    console.log(err);
    return "Something went wrong";
  }
}

async function main(): Promise<void> {
  intro(`gnore-v.0.0.1\n`);
  intro(`Generate your gitignore for your project.`);

  const frameworkSelect = await text({
    message: "Pick a Languages/Frameworks",
    placeholder: "TS,JS,Go",
  });
  try {
    asyncWriteFile(
      "./.gitignore.sample",
      await fetchGitignore(frameworkSelect as string),
    );
    outro("Generated your gitingore file.");
  } catch (e) {
    outro("Failed to create gitingore");
    console.error(e);
    throw new Error("No such gitignore found from Github :/");
  }
}

try {
  const result = await main();
} catch (e) {
  console.error(e);
}
