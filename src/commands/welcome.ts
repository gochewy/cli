import {Command} from '@oclif/command'
import * as fs from 'fs'
import * as inquirer from 'inquirer'
import Chewy from 'chewy-lib'
import * as chalk from 'chalk'
import { cli } from 'cli-ux'
const {execSync} = require('child_process')

export default class Welcome extends Command {
  static description = 'Command to download required files'

  static args = [{name: 'installOption'}]

  async run() {
    const {args} = this.parse(Welcome)
    let directory
    let isAppsmith
    let isRabbitMQ
    let isContent
    if (args.installOption === 'minimal') {
      if (!directory) {
        const responses: any = await inquirer.prompt([{
          name: 'name',
          message: 'what you want your project to be called',
          type: 'input',
          default: 'chewy-stack',
        }])
        directory = responses.name
      }
      Chewy.File.createProjectDirectory(directory)
      Chewy.Commands.installMinimalProject(directory)
    }
    else if (args.installOption === 'all') {
      if (!directory) {
        const responses: any = await inquirer.prompt([{
          name: 'name',
          message: 'what you want your project to be called',
          type: 'input',
          default: 'chewy-stack',
        }])
        directory = responses.name
      }
      Chewy.File.createProjectDirectory(directory)
      Chewy.Commands.installAllApps(directory)
    }
    else if (args.installOption === 'custom') {
      if (!directory) {
        const responses: any = await inquirer.prompt([{
          name: 'name',
          message: 'what you want your project to be called',
          type: 'input',
          default: 'chewy-stack',
        },
          {
            name: 'isAppsmith',
            message: 'Do you want to install appsmith?',
            type: 'confirm',
            default: 'Y',
          },
          {
            name: 'isServer',
            message: 'Do you want to install backend server?',
            type: 'confirm',
            default: 'Y',
          },
          {
            name: 'isContent',
            message: 'Do you want to install Directus as content management system?',
            type: 'confirm',
            default: 'Y',
          },
          {
            name: 'isRabbitMQ',
            message: 'Do you want to install RabbitMQ?',
            type: 'confirm',
            default: 'Y',
          }])
        directory = responses.name
        isAppsmith = responses.isAppsmith
        isRabbitMQ = responses.isRabbitMQ
        isContent = responses.isContent
      }
      const answers = {
        isAppsmith: isAppsmith,
        isRabbitMQ: isRabbitMQ,
        isContent: isContent
      }
      Chewy.File.createProjectDirectory(directory)
      Chewy.File.configFileGenerator(answers, directory)
      Chewy.Commands.installCustomApps(directory)

      Chewy.File.envCreator(directory, 'client')
      Chewy.File.envCreator(directory, 'server')

      Chewy.File.configFileGenerator(answers, directory)
      Chewy.File.createConfig(directory)
      this.log('directory is', directory, '----> and isAppsmith', isAppsmith)
    }
    else {
      this.log(chalk.redBright('No option or invalid option provided'))
      chalk.greenBright(Chewy.Utils.printInstallOptions())
    }
  }
}
