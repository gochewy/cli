import {Command, Flags} from '@oclif/core'
import * as chewy from '@gochewy/lib'

export default class DevStart extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const graph = chewy.project.getDependencyGraph()
    console.log(graph.entryNodes())
  }
}
