import {Command} from '@oclif/core'

export default class Dev extends Command {
  static description = 'Dev'

  static examples = [
    `
chewy dev
`,
  ]

  static flags = {}

  static args = [
  ]

  async run(): Promise<void> {
  }
}
