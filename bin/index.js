#! /usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");
const figlet = require("figlet");
const runner = require("../lib/index.js");
const { version } = require("../package.json");

program
  .command("sync <source> <destination>")
  .description("Synchronize two directories or files")
  .option("-f, --force", "overwrite target directory if it exists", true)
  .option("-i, --ignore <string>", "file or directory in ignore list will not sync")
  .action(runner);

program.on("--help", () => {
  console.log(`
      ${figlet.textSync("Keep Pace", {
        width: 80,
        whitespaceBreak: true,
      })}
  `);
  // 新增说明信息
  console.log(
    `\r\nRun ${chalk.cyan(
      "keeppace <command> --help"
    )} for detailed usage of given command\r\n`
  );
});

program.version(`v${version}`).usage("<command> [option]");

// 解析用户执行命令传入参数
program.parse(process.argv);
