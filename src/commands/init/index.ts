import * as Chewy from '@gochewy/lib/dist'
import {Command, Flags} from '@oclif/core'
import * as colorette from 'colorette'
import * as inquirer from 'inquirer'

const namePrompt = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      default: 'chewy-project',
      name: 'name',
      validate: (input: any) => {
        const parsed = Chewy.utils.resourceNameSchema.safeParse(input)
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
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'project name (kebab-cased)'}),
    path: Flags.string({char: 'p', description: 'path to install to'}),
  }

  static args = [{name: 'name', description: 'kebab-cased name of project, which will also be install directory'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Init)
    const {name, path} = flags

    let actualName: string | undefined = name || args?.name

    if (!actualName) {
      actualName = await namePrompt()
    }

    if (!actualName) {
      throw new Error('Could not construct app name.')
    }

    let actualPath: string | undefined = path || actualName

    if (!path) {
      actualPath = await pathPrompt({defaultValue: actualName})
    }

    if (!actualPath) {
      throw new Error('Could not construct installation path.')
    }

    Chewy.utils.resourceNameSchema.parse(actualName)
    Chewy.commands.install.installRoot(actualPath, {
      name: actualName,
      chewy: {
        version: Chewy.constants.CHEWY_VERSION,
      },
    })
    console.log(`${colorette.green('✔')} ${colorette.bold('Success!')} Project ${colorette.bold(actualName)} installed to ${colorette.bold(actualPath)}`)
    console.log(`🐆 ${colorette.bold('Next steps:')}\n${colorette.bgWhite(`cd ${actualPath} && chewy dev start`)}`)
  }
}

