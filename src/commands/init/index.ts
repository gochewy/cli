import {Command, Flags} from '@oclif/core'
import * as colorette from 'colorette'
// import resourceNameSchema from 'chewy-lib/dist'

export default class InitIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'project name (kebab-cased)', required: true}),
  }

  static args = [{name: 'path', description: 'path to create project in', default: 'chewy-project'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(InitIndex)
    const {name} = flags
    const path: string = args[0]
    // resourceNameSchema.vali(name)
    console.log(colorette.green(`Creating project ${name} in ${path}`))
  }
}
