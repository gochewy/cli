import {
  config,
  constants,
  project,
  state,
  utils,
  components,
} from '@gochewy/lib'
import {CliUx, Command, Flags} from '@oclif/core'
import * as colorette from 'colorette'
import * as inquirer from 'inquirer'
import {existsSync} from 'node:fs'
import {resolve} from 'node:path'

const namePrompt = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      default: 'chewy-project',
      name: 'name',
      validate: (input: any) => {
        const parsed = utils.resourceNameSchema.safeParse(input)
        if (!parsed.success) {
          return parsed.error.issues.map(issue => issue.message).join('\n')
        }

        return true
      },
    },
  ])
  return answers.name
}

interface PathPromptOptions {
  defaultValue?: string;
}
const pathPrompt = async (opts: PathPromptOptions) => {
  const {defaultValue = 'chewy-project'} = opts
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'path',
      default: defaultValue,
    },
  ])
  return answers.path as string
}

export default class Init extends Command {
  static description = 'Command to initialize a chewy project.';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({
      char: 'n',
      description: 'project name (kebab-cased)',
    }),
    path: Flags.string({char: 'p', description: 'path to install to'}),
    nonInteractive: Flags.boolean({char: 'n', description: 'run in non-interactive mode'}),
  };

  static args = [
    {
      name: 'name',
      description:
        'kebab-cased name of project, which will also be install directory',
    },
  ];

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Init)
    const {name, path, nonInteractive} = flags

    let actualName: string | undefined = name || args?.name

    if (!actualName && nonInteractive) {
      actualName = await namePrompt()
    }

    if (!actualName) {
      throw new Error('Could not construct app name.')
    }

    let actualPath: string | undefined = path || actualName

    if (!path && nonInteractive) {
      actualPath = await pathPrompt({defaultValue: actualName})
    }

    if (!actualPath) {
      throw new Error('Could not construct installation path.')
    }

    if (existsSync(actualPath)) {
      throw new Error(colorette.red(`Path ${actualPath} already exists.`))
    }

    utils.resourceNameSchema.parse(actualName)
    CliUx.ux.action.start(`Configuring ${colorette.bold(actualPath)}`)
    await project.installRoot(actualPath, {
      name: actualName,
      chewy: {
        version: constants.CHEWY_VERSION,
      },
    })

    CliUx.ux.action.start('Installing required components')
    state.setWorkingDirectory(resolve(actualPath))

    const {requiredComponents, componentSources} = config.component

    for (const component of requiredComponents) {
      CliUx.ux.action.start(`Installing ${colorette.bold(component)}`)
      // eslint-disable-next-line no-await-in-loop
      await components.installComponent({
        url: componentSources[component],
        name: component,
        version: constants.CHEWY_VERSION,
        autoInstallDependencies: true,
      })
    }

    CliUx.ux.action.stop()

    console.log(
      `${colorette.green('✔')} ${colorette.bold(
        'Success!',
      )} Project ${colorette.bold(actualName)} installed to ${colorette.bold(
        actualPath,
      )}`,
    )
    console.log(
      `🐆 ${colorette.bold('Next steps:')}\n${colorette.bgWhite(
        `cd ${actualPath} && chewy dev start`,
      )}`,
    )
  }
}
