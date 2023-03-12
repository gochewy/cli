import {Command} from '@oclif/core'

export default class UpdateIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = [{name: 'component', required: false}]

  public async run(): Promise<void> {
    const {args} = await this.parse(UpdateIndex)
  }
}
