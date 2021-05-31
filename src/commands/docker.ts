import {Command} from '@oclif/command'
import Chewy from 'chewy-lib'

export default class Docker extends Command {
  static description = 'Command to run docker containers'

  static args = [{name: 'argument'}]

  async run() {
    const {args} = this.parse(Docker)

      if (args.argument === 'start') {
        await Chewy.Commands.startDocker();
      }
      else if (args.argument === 'stop') {
        await Chewy.Commands.stopDocker()
      }
    else {
      console.log("Enter valid command")
    }
  }
}
