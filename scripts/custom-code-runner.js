/**
 * It helps code-runner vscode plugin to decide between run the current file by
 * using either `ts-node` for `.ts` files or `jest` for `.test.ts` files.
 * See `.vscode/settings.json` in the key `code-runner.executorMap`.
 */

const { extname, basename } = require('path')
const isTest = Boolean(process.argv.slice(2)[0].match(/\.test\.tsx?$/))
process.stdout.write(isTest ? 'jest' : 'ts-node')
