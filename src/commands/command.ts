import {Command as OclifCommand} from '@oclif/core'
import * as chewy from '@gochewy/lib'
import {execSync} from 'node:child_process'

export default class Command extends OclifCommand {
  static description = 'execute a component command'
  static aliases = ['c']
  static strict = false

  static examples = [
    '<%= config.bin %> <%= command.id %> nextjs init',
  ]

  static flags = {}
  static args = []

  public async run(): Promise<void> {
    const {argv} = await this.parse(Command)
    const [component, ...command] = argv

    if (!component) {
      this.error('Component name is required')
    }

    const cwd = chewy.files.getComponentCommandsDir({name: component})
    const fullCommand = ['yarn', 'run', 'commands', ...command].join(' ')
    console.log(`Running ${fullCommand} in ${cwd}`)
    execSync(fullCommand, {stdio: 'inherit', cwd})
  }
}
