import { NodePlopAPI } from 'plop'

export const nextAppGenerator = (plop: NodePlopAPI) => {
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
    },
    {
      type: 'input',
      name: 'appPath',
      message: 'App path (ex: /my-app)'
    }
  ]
  const actions = ({ appName, description, port, appPath }) => {
    return [
      {
        type: 'copy-files',
        data: {
          source: 'packages/template/next-app',
          dest: `packages/app/${appName}`,
          replaceInFiles: {
            '@lancelot/template': `@lancelot/${appName}`,
            '3010': port,
            'Frontend App Template': description,
            '/template': appPath,
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
