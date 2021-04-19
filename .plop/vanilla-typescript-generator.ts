import { NodePlopAPI } from 'plop'

export const VanillaTypeScriptGenerator = (plop: NodePlopAPI) => {
  const prompts = [
    {
      type: 'input',
      name: 'libName',
      message: 'Library name'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Library description'
    }
  ]
  const actions = ({ libName, description }) => {
    return [
      {
        type: 'copy-files',
        data: {
          source: 'packages/templates/vanilla-typescript',
          dest: `packages/shared/${libName}`,
          replaceInFiles: {
            '@lancelot/template': `@lancelot/${libName}`,
            'Templated shared functions': description
          }
        }
      }
    ]
  }

  return {
    description: 'Shared Module Generator',
    prompts,
    actions
  }
}
