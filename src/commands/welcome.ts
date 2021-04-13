import {Command} from '@oclif/command'
import * as fs from 'fs'
import * as inquirer from 'inquirer'
import Chewy from 'chewy-lib'
const {execSync} = require('child_process')

export default class Welcome extends Command {
  static description = 'Command to download required files'

  static args = [{name: 'command'}]

  async run() {
    // const {flags} = this.parse(Welcome)
    let directory
    let isAppsmith
    let isRabbitMQ
    if (!directory) {
      const responses: any = await inquirer.prompt([{
        name: 'name',
        message: 'name for your directory',
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
        name: 'isRabbitMQ',
        message: 'Do you want to install RabbitMQ?',
        type: 'confirm',
        default: 'Y',
      }])
      directory = responses.name
      isAppsmith = responses.isAppsmith
      isRabbitMQ = responses.isRabbitMQ
    }
    fs.mkdirSync(`./../${directory}`, {recursive: true})
    this.log('new directory created')
    try {
      await execSync(`git clone -b 18-project-structure-for-chewy-stack https://gitlab.com/ephemerecreative/x-stack.git ./../${directory}`)
      // eslint-disable-next-line unicorn/catch-error-name
    } catch (err) {
      this.log('Error in new command', err.message)
    }
    Chewy.File.envCreator(directory, 'client')
    Chewy.File.envCreator(directory, 'server')
    const answers = {
      isAppsmith: isAppsmith,
      isRabbitMQ: isRabbitMQ,
    }
    Chewy.File.fileGenerator(answers, directory)
    this.log('directory is', directory, '----> and isAppsmith', isAppsmith)
  }
}
