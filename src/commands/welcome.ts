import {Command} from '@oclif/command'
import * as inquirer from 'inquirer'
import Chewy from 'chewy-lib'
import * as chalk from 'chalk'
import { Answers} from '../utils/types'

export default class Welcome extends Command {
  static description = 'Command to download required files'

  static args = [{name: 'installOption'}]

  async run() {
    const {args} = this.parse(Welcome)
    let directory: string = ''
    let isAnalytics: boolean = false
    let isBI: boolean = false
    let isAdmin: boolean = false
    let isWorker: boolean = false
    let isContent: boolean = false
    let isMobile: boolean = false
    let isGraphQL: boolean = false
    let isAuth: boolean = false
    let isServer: boolean = false

    if (args.installOption === 'minimal') {
      if (!directory) {
        const responses: any = await inquirer.prompt([{
          name: 'name',
          message: 'what you want your project to be called',
          type: 'input',
          default: 'go-chewy',
        }])
        directory = responses.name
      }
      const answers: Answers = {
        name: directory,
        isAnalytics: false,
        isBI: false,
        isAdmin: false,
        isContent: false,
        isGraphQL: false,
        isServer: false,
        isMobile: false,
        isAuth: false,
        isWorker: false
      }
      Chewy.File.createProjectDirectory(directory)
      Chewy.Commands.installMinimalProject(directory)
      Chewy.File.configFileGenerator(answers)
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
      const answers: Answers = {
        name: directory,
        isAnalytics: true,
        isBI: true,
        isAdmin: true,
        isContent: true,
        isGraphQL: true,
        isServer: true,
        isMobile: true,
        isAuth: true,
        isWorker: true
      }
      Chewy.File.createProjectDirectory(directory)
      await Chewy.Commands.installAllApps(directory)
      Chewy.File.configFileGenerator(answers)
      Chewy.File.createGitIgnore(directory)
      Chewy.File.createAppConfigExpo(answers)
    }
    else if (args.installOption === 'custom') {
      if (!directory) {
        const responses: Answers = await inquirer.prompt([{
          name: 'name',
          message: 'what you want your project to be called',
          type: 'input',
          default: 'chewy-stack',
        },
          {
            name: 'isAdmin',
            message: 'Do you want to install appsmith as admin?',
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
            name: 'isMobile',
            message: 'Do you want to install react-native mobile app module?',
            type: 'confirm',
            default: 'Y',
          },
          {
            name: 'isGraphQL',
            message: 'Do you want to install GraphQL as Database?',
            type: 'confirm',
            default: 'Y',
          },
          {
            name: 'isAuth',
            message: 'Do you want to install Auth system for authentication?',
            type: 'confirm',
            default: 'Y',
          },
          {
            name: 'isWorker',
            message: 'Do you want to install Worker module?',
            type: 'confirm',
            default: 'Y',
          },
          {
            name: 'isBI',
            message: 'Do you want to install Metabase for Business Intelligence?',
            type: 'confirm',
            default: 'Y',
          },
          {
            name: 'isAnalytics',
            message: 'Do you want to install Posthog for Analytics?',
            type: 'confirm',
            default: 'Y',
          },
        ])
        directory = responses.name || 'chewy-stack'
        isAdmin = responses.isAdmin
        isAnalytics = responses.isAnalytics
        isBI = responses.isBI
        isWorker = responses.isWorker
        isContent = responses.isContent
        isMobile = responses.isMobile
        isGraphQL = responses.isGraphQL
        isServer = responses.isServer
        isAuth = responses.isAuth
      }
      const answers: Answers = {
        name: directory,
        isBI,
        isAdmin,
        isContent,
        isGraphQL,
        isServer,
        isMobile,
        isAuth,
        isWorker,
        isAnalytics
      }
      Chewy.File.createProjectDirectory(directory)
      Chewy.File.configFileGenerator(answers)
      await Chewy.Commands.installCustomApps(directory, answers)
      if (answers.isAdmin) {
        Chewy.File.createGitIgnore(directory)
      }
      if (answers.isMobile) {
        Chewy.File.createAppConfigExpo(answers)
      }
      Chewy.File.envCreator(directory, 'web')
      Chewy.File.envCreator(directory, 'server')
      this.log('directory is', directory, '----> and isAppsmith', isAdmin)
    }
    else {
      this.log(chalk.redBright('No option or invalid option provided'))
      chalk.greenBright(Chewy.Utils.printInstallOptions())
    }
  }
}
