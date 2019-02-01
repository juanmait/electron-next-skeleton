import readdirAsync from './util.readdirAsync'

test('files on the project should be okay', async () => {
  expect.assertions(1)
  const dirents = await readdirAsync(process.cwd())
  const fileNames = dirents.map(dirent => dirent.name).sort()
  expect(fileNames).toMatchInlineSnapshot(`
Array [
  ".babelrc",
  ".git",
  ".gitignore",
  ".next",
  ".prettierignore",
  ".prettierrc",
  ".vscode",
  "CHANGELOG.md",
  "jest.config.js",
  "license.md",
  "main",
  "next.config.js",
  "node_modules",
  "package.json",
  "pages",
  "readme.md",
  "scripts",
  "src",
  "tsconfig.json",
  "tslint.json",
  "yarn.lock",
]
`)
})
