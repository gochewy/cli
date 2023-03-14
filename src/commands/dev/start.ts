import {Command, Flags} from '@oclif/core'
import * as chewy from '@gochewy/lib'

export default class DevStart extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    this.config.runCommand('deploy', [chewy.constants.CHEWY_DEV_ENV_NAME])
  }
}
