import { Tree } from '@angular-devkit/schematics'
import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import { createEmptyWorkspace } from '@nrwl/workspace/testing'
import { join } from 'path'

import * as requireFromString from 'require-from-string'
import { ReactSchematicSchema } from './schema.d'

describe('@codelab/plugins-codelab:library', () => {
  let appTree: Tree
  const options: ReactSchematicSchema = { name: 'test' }

  const testRunner = new SchematicTestRunner(
    '@codelab/plugins-codelab',
    join(__dirname, '../../../collection.json'),
  )

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty())
  })

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('library', options, appTree).toPromise(),
    ).resolves.not.toThrowError()
  })

  it('should overwrite package .eslintrc generated by @nrwl/react:library', async () => {
    appTree = await testRunner
      .runSchematicAsync('library', options, appTree)
      .toPromise()

    const file = appTree.read('/libs/test/.eslintrc.js').toString()
    const eslintrcContents = requireFromString(file)
    const eslintrc = appTree.exists('/libs/test/.eslintrc.js')

    expect(eslintrc).toBeTruthy()
    expect(eslintrcContents.extends).toBe('../../.eslintrc')
  })

  it('should remove root .eslintrc generated by @nrwl/react:library', async () => {
    appTree = await testRunner
      .runSchematicAsync('library', options, appTree)
      .toPromise()
    const eslintrc = appTree.exists('/.eslintrc')

    expect(eslintrc).toBeFalsy()
  })

  it('should generate a .storybook config', async () => {
    appTree = await testRunner
      .runSchematicAsync('library', options, appTree)
      .toPromise()
    const eslintrc = appTree.exists('/libs/test/.storybook')

    expect(eslintrc).toBeFalsy()
  })
})