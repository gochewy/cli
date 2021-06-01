"use strict";
exports.__esModule = true;
exports.printInstallOptions = void 0;
var chalk = require("chalk");
var log = console.log;
var printInstallOptions = function () {
    log();
    log(chalk.yellow("_________ .__                             _________ __                 __    \n" +
        "\\_   ___ \\|  |__   ______  _  _____.__.  /   _____//  |______    ____ |  | __\n" +
        "/    \\  \\/|  |  \\_/ __ \\ \\/ \\/ <   |  |  \\_____  \\\\   __\\__  \\ _/ ___\\|  |/ /\n" +
        "\\     \\___|   Y  \\  ___/\\     / \\___  |  /        \\|  |  / __ \\\\  \\___|    < \n" +
        " \\______  /___|  /\\___  >\\/\\_/  / ____| /_______  /|__| (____  /\\___  >__|_ \\\n" +
        "        \\/     \\/     \\/        \\/              \\/           \\/     \\/     \\/"));
    log(chalk.magenta("=============================="));
    log(chalk.magenta("===Chewy-CLI install options=="));
    log(chalk.magenta("=============================="));
    log(chalk.greenBright("" +
        ".@@,............,@@@,.............@@. \n" +
        "  .@@..@@@@@@@@...........@@@@.@@@@.@@. \n" +
        "  ./@...............................@@. \n" +
        "  ..@@.............................@@.. \n" +
        "  ..@@.............................@@.. \n" +
        "  .@@.......@@@.@.......@@@.@.......@@. \n" +
        "  @@........@@@@@.......@@@@@........@@ \n" +
        "  @@.................................@@ \n" +
        "  .@/............@@@@@@.............@@. \n" +
        "  ..@,......@.....@..@.....@.......%@.. \n" +
        "  ...@@......@.....@@@....@.......@@... \n" +
        "  .....@@@.....................@@@..... \n" +
        "  ........@@@@.............@@@@........ \n" +
        "  ..............*@@@@@@@,.............."));
    log(chalk.greenBright("To install with no extra modules use init minimal"));
    log(chalk.greenBright("To install with all modules use init all"));
    log(chalk.greenBright("To install with options to install modules use init custom"));
    log();
};
exports.printInstallOptions = printInstallOptions;
