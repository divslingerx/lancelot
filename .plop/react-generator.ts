import { NodePlopAPI } from 'plop'

export const reactLibraryGenerator = (plop: NodePlopAPI) => {
  const prompts = [
    {
      type: 'input',
      name: 'appName',
      message: 'App name'
    },
    {
      type: 'input',
      name: 'description',
      message: 'App description'
    },
    {
      type: 'input',
      name: 'port',
      message: 'Port for dev mode (ex: 3045, Check available ports)'
    }
  ]
  const actions = ({ appName, description, port }) => {
    return [
      {
        type: 'copy-files',
        data: {
          source: 'packages/templates/react-library',
          dest: `packages/shared/${appName}`,
          replaceInFiles: {
            '@lancelot/template': `@lancelot/${appName}`,
            '3010': port,
            'React Library Template': description,
            template: appName
          }
        }
      }
    ]
  }

  return {
    description: 'App Generator',
    prompts,
    actions
  }
}
