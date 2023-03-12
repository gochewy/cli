import {components, utils} from '@gochewy/lib'
import {Command} from '@oclif/core'

export default class UpdateComponent extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}

  static args = [{name: 'component', required: false}]

  public async run(): Promise<void> {
    const {args} = await this.parse(UpdateComponent)

    const name = args.component ?? components.getComponentName()

    utils.log.info(`📦 Updating ${name}...`)

    await components.updateComponent([{name}])

    utils.log.info('✅ Component updated!')
  }
}
