import { nextAppGenerator } from './next-generator'
import { reactLibraryGenerator } from './react-generator'
import { VanillaTypeScriptGenerator } from './vanilla-typescript-generator'
import { NodePlopAPI } from 'plop'
import { copyFiles } from './actions'

module.exports = function (plop: NodePlopAPI) {
  plop.setActionType('copy-files', copyFiles)

  plop.setGenerator('NextJs app', nextAppGenerator(plop))
  plop.setGenerator('React Library', reactLibraryGenerator(plop))
  plop.setGenerator('Vanilla Typescript', VanillaTypeScriptGenerator(plop))
}
