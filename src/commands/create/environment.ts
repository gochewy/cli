import * as chewy from '@gochewy/lib'
import {Command} from '@oclif/core'

export default class CreateEnvironment extends Command {
  static description = 'Creates an environment.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = [{name: 'name', required: true}]

  public async run(): Promise<void> {
    const {args} = await this.parse(CreateEnvironment)

    chewy.environments.createEnvironment(args.name)
  }
}
