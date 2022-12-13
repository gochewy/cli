import {Command} from '@oclif/core'

export default class Init extends Command {
  static description = 'Init'

  static examples = [
    `
chewy init
`,
  ]

  static flags = {}

  static args = [
  ]

  async run(): Promise<void> {
  }
}
