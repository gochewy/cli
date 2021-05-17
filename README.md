chewycli
========

cli to manage chewy stack project

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/chewycli.svg)](https://npmjs.org/package/chewycli)
[![Downloads/week](https://img.shields.io/npm/dw/chewycli.svg)](https://npmjs.org/package/chewycli)
[![License](https://img.shields.io/npm/l/chewycli.svg)](https://github.com/swarnchahal/chewycli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @gochewy/chewy-cli
$ chewycli COMMAND
running command...
$ chewycli (-v|--version|version)
@gochewy/chewy-cli/0.0.1 darwin-x64 node-v14.15.4
$ chewycli --help [COMMAND]
USAGE
  $ chewycli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`chewycli docker [ARGUMENT]`](#chewycli-docker-argument)
* [`chewycli hello [FILE]`](#chewycli-hello-file)
* [`chewycli help [COMMAND]`](#chewycli-help-command)
* [`chewycli welcome [INSTALLOPTION]`](#chewycli-welcome-installoption)

## `chewycli docker [ARGUMENT]`

Command to run docker containers

```
USAGE
  $ chewycli docker [ARGUMENT]
```

_See code: [src/commands/docker.ts](https://gitlab.com/ephemerecreative/chewy/cli/blob/v0.0.1/src/commands/docker.ts)_

## `chewycli hello [FILE]`

describe the command here

```
USAGE
  $ chewycli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ chewycli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://gitlab.com/ephemerecreative/chewy/cli/blob/v0.0.1/src/commands/hello.ts)_

## `chewycli help [COMMAND]`

display help for chewycli

```
USAGE
  $ chewycli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `chewycli welcome [INSTALLOPTION]`

Command to download required files

```
USAGE
  $ chewycli welcome [INSTALLOPTION]
```

_See code: [src/commands/welcome.ts](https://gitlab.com/ephemerecreative/chewy/cli/blob/v0.0.1/src/commands/welcome.ts)_
<!-- commandsstop -->
