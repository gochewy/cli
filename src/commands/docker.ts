import {Command} from '@oclif/command'
const {execSync} = require('child_process')
const config = require('./../../../kkk/project-config.json');

export default class Docker extends Command {
  static description = 'Command to run docker containers'

  static args = [{name: 'argument'}]

  async run() {
    const {args} = this.parse(Docker)
    console.log(args.argument)
    if (args.argument === 'start') {
      if (config.dev.servicesEnabled.rabbitMQ)
      execSync('docker-compose -f ./../kkk/docker-compose.yml -f ./../kkk/keycloak/docker-compose.yml -f ./../kkk/worker/docker-compose.yml up -d')
      else {
      execSync('docker-compose -f ./../kkk/docker-compose.yml -f ./../kkk/keycloak/docker-compose.yml -f ./../kkk/gql/docker-compose.yml up -d')
      }
    }
    else if (args.argument === 'stop') {
      if (config.dev.servicesEnabled.rabbitMQ) {
        execSync('docker-compose -f ./../kkk/docker-compose.yml -f ./../kkk/keycloak/docker-compose.yml -f ./../kkk/worker/docker-compose.yml down')
      }
      else {
        execSync('docker-compose -f ./../kkk/docker-compose.yml -f ./../kkk/keycloak/docker-compose.yml -f ./../kkk/gql/docker-compose.yml down')
      }
    }
  }
}
