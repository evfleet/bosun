#! /usr/bin/env node
import "dotenv/config";

import { confirm } from "@inquirer/prompts";
import { Command } from "commander";

import { transform } from "./actions/transform.js";

const program = new Command();

program
  .name("bosun")
  .description("CLI to publish and transform images")
  .version("0.1.0");

program.action(() => {
  console.log("Bosun!");
});

program
  .command("init")
  .description("initialize")
  .option("-y, --yes", "confirm all")
  .action(async (options, command) => {
    if (options.yes) {
      console.log("initializing with skip");
      return;
    }

    const question = await confirm({ message: "Question?" });

    console.log("question", question);
    console.log("initializing bosun");
  });

program
  .command("publish <input>")
  .description("upload image to server")
  .action((input) => {
    console.log(`this is the input ${input}`);
  });

program
  .command("transform <input>")
  .description("transform image")
  .action(transform);

program.parse(process.argv);
