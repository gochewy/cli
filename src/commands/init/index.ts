import {Command, Flags} from '@oclif/core'
import * as colorette from 'colorette'
import Chewy from '@gochewy/lib/dist'

export default class InitIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'project name (kebab-cased)'}),
    path: Flags.string({char: 'p', description: 'path to install to'}),
  }

  static args = [{name: 'name', description: 'kebab-cased name of project, which will also be install directory', default: 'chewy-project'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(InitIndex)
    const {name, path} = flags
    const actualName = name || args?.name
    const actualPath = path || actualName
    Chewy.utils.resourceNameSchema.parse(actualName)
    Chewy.commands.install.installRoot(actualPath, {name: actualName})
    console.log(`${colorette.green('✔')} ${colorette.bold('Success!')} Project ${colorette.bold(actualName)} installed to ${colorette.bold(actualPath)}`)
    console.log(`🐆 ${colorette.bold('Next steps:')}\n${colorette.bgWhite(`cd ${actualPath} && chewy dev start`)}`)
  }
}
