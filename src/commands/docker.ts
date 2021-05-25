import {Command} from '@oclif/command'
import { execSync } from 'child_process'
import Chewy from 'chewy-lib-local'

export default class Docker extends Command {
  static description = 'Command to run docker containers'

  static args = [{name: 'argument'}]

  async run() {
    const {args} = this.parse(Docker)
    console.log(args.argument)
    const dirName = require('./../../config.json').directory
    const config = require(`./../../../${dirName}/project-config.json`);
    if(dirName) {
      if (args.argument === 'start') {
        if (config.dev.worker)
          execSync(`docker-compose -f ./../${dirName}/docker-compose.yml -f ./../${dirName}/keycloak/docker-compose.yml -f ./../${dirName}/worker/docker-compose.yml up -d`)
        else {
          execSync(`docker-compose -f ./../${dirName}/docker-compose.yml -f ./../${dirName}/keycloak/docker-compose.yml -f ./../${dirName}/gql/docker-compose.yml up -d`)
        }
      }
      else if (args.argument === 'stop') {
        if (config.dev.worker) {
          execSync(`docker-compose -f ./../${dirName}/docker-compose.yml -f ./../${dirName}/keycloak/docker-compose.yml -f ./../${dirName}/worker/docker-compose.yml down`)
        }
        else {
          execSync(`docker-compose -f ./../${dirName}/docker-compose.yml -f ./../${dirName}/keycloak/docker-compose.yml -f ./../${dirName}/gql/docker-compose.yml down`)
        }
      }
    }
    else {
      console.log("Directory not found")
    }
  }
}
