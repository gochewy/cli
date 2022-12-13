import {Command} from '@oclif/core'

export default class Create extends Command {
  static description = 'Create'

  static examples = [
    `
chewy create
`,
  ]

  static flags = {}

  static args = [
  ]

  async run(): Promise<void> {
  }
}
