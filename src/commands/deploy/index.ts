import * as chewy from '@gochewy/lib'
import {Command} from '@oclif/core'

export default class DeployIndex extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = [{
    name: 'environment',
  }]

  public async run(): Promise<void> {
    const {args} = await this.parse(DeployIndex)

    const environment = args.environment || chewy.constants.CHEWY_DEV_ENV_NAME

    await chewy.project.deploy(environment)
  }
}
