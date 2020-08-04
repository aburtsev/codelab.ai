import {
  chain,
  externalSchematic,
  Rule,
  Tree,
  SchematicContext,
} from '@angular-devkit/schematics'
import { Linter, toFileName } from '@nrwl/workspace'
import { libsDir } from '@nrwl/workspace/src/utils/ast-utils'
import { normalize } from 'path'
import { Schema } from './schema.d'

function removeFiles(options: any): Rule {
  const { filesToRemove, directory } = options

  return (tree) => {
    filesToRemove.forEach((file) => {
      console.log(tree.exists(`${directory}/${file}`))
      tree.delete(`${directory}/${file}`)
    })
  }
}

// const deleteFiles = (filesToDelete: Array<string> = []) => (
//   host: Tree,
//   _context: SchematicContext,
// ): Rule => {
//   return (host: Tree, context: SchematicContext): Tree => {
//     filesToDelete.forEach((file) => {
//       host.delete(file)
//     })

//     return host
//   }
// }

export default function (options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const name = toFileName(options.name)
    const projectDirectory = name
    const projectRoot = normalize(`${libsDir(host)}/${projectDirectory}`)

    return chain([
      /**
       * We want to extend the `@nrwl/react` schematics, and override the eslintrc file.
       */
      externalSchematic('@nrwl/react', 'lib', {
        name,
        linter: Linter.EsLint,
      }),
      removeFiles({ directory: projectRoot, filesToRemove: ['.eslintrc'] }),
    ])(host, context)
  }
}
