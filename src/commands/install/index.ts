import {Command} from '@oclif/core'

export default class Install extends Command {
  static description = 'Install'

  static examples = [
    `
chewy install
`,
  ]

  static flags = {}

  static args = [
  ]

  async run(): Promise<void> {
  }
}
