oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @gochewy/chewy-cli
$ chewy COMMAND
running command...
$ chewy (--version)
@gochewy/chewy-cli/0.0.0 linux-x64 node-v16.17.1
$ chewy --help [COMMAND]
USAGE
  $ chewy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`chewy hello PERSON`](#chewy-hello-person)
* [`chewy hello world`](#chewy-hello-world)
* [`chewy help [COMMAND]`](#chewy-help-command)
* [`chewy plugins`](#chewy-plugins)
* [`chewy plugins:install PLUGIN...`](#chewy-pluginsinstall-plugin)
* [`chewy plugins:inspect PLUGIN...`](#chewy-pluginsinspect-plugin)
* [`chewy plugins:install PLUGIN...`](#chewy-pluginsinstall-plugin-1)
* [`chewy plugins:link PLUGIN`](#chewy-pluginslink-plugin)
* [`chewy plugins:uninstall PLUGIN...`](#chewy-pluginsuninstall-plugin)
* [`chewy plugins:uninstall PLUGIN...`](#chewy-pluginsuninstall-plugin-1)
* [`chewy plugins:uninstall PLUGIN...`](#chewy-pluginsuninstall-plugin-2)
* [`chewy plugins update`](#chewy-plugins-update)

## `chewy hello PERSON`

Say hello

```
USAGE
  $ chewy hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/gochewy/cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `chewy hello world`

Say hello world

```
USAGE
  $ chewy hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ chewy hello world
  hello world! (./src/commands/hello/world.ts)
```

## `chewy help [COMMAND]`

Display help for chewy.

```
USAGE
  $ chewy help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for chewy.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `chewy plugins`

List installed plugins.

```
USAGE
  $ chewy plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ chewy plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `chewy plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ chewy plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ chewy plugins add

EXAMPLES
  $ chewy plugins:install myplugin 

  $ chewy plugins:install https://github.com/someuser/someplugin

  $ chewy plugins:install someuser/someplugin
```

## `chewy plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ chewy plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ chewy plugins:inspect myplugin
```

## `chewy plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ chewy plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ chewy plugins add

EXAMPLES
  $ chewy plugins:install myplugin 

  $ chewy plugins:install https://github.com/someuser/someplugin

  $ chewy plugins:install someuser/someplugin
```

## `chewy plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ chewy plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ chewy plugins:link myplugin
```

## `chewy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ chewy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chewy plugins unlink
  $ chewy plugins remove
```

## `chewy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ chewy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chewy plugins unlink
  $ chewy plugins remove
```

## `chewy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ chewy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ chewy plugins unlink
  $ chewy plugins remove
```

## `chewy plugins update`

Update installed plugins.

```
USAGE
  $ chewy plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
