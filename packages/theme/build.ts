import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { transform } from 'lightningcss'
import { compileAsync } from 'sass-embedded'
import { glob } from 'tinyglobby'

const root = path.dirname(fileURLToPath(import.meta.url))
const distFolder = path.resolve(root, 'dist')

async function compress(filename: string, css: string) {
  const result = transform({
    filename,
    code: Buffer.from(css),
    minify: true,
    sourceMap: false,
    targets: {
      chrome: 85 << 16,
      firefox: 79 << 16,
      safari: (14 << 16) | (1 << 8),
      edge: 85 << 16,
    },
  })

  return result.code
}

async function compileToCss(scssPath: string, cssPath: string) {
  const cssResult = await compileAsync(scssPath)
  const compressed = await compress(path.basename(scssPath), cssResult.css)
  await mkdir(path.dirname(cssPath), { recursive: true })
  await writeFile(cssPath, compressed)
}

async function copyThemeSource() {
  const files = await glob('src/**/*', { cwd: root, onlyFiles: true })

  for (const file of files) {
    const source = path.resolve(root, file)
    const dest = path.resolve(distFolder, file)
    await mkdir(path.dirname(dest), { recursive: true })
    await copyFile(source, dest)
  }
}

async function buildTheme() {
  await rm(distFolder, { recursive: true, force: true })
  await mkdir(distFolder, { recursive: true })

  const scssFiles = await glob('src/*.scss', {
    cwd: root,
    absolute: true,
    onlyFiles: true,
  })

  await Promise.all(
    scssFiles
      .filter((file) => {
        const baseName = path.basename(file, '.scss')
        return !baseName.startsWith('_') && baseName !== 'theme-component-spec-tokens'
      })
      .map((file) => {
        const outputName = `${path.basename(file, '.scss')}.css`
        return compileToCss(file, path.join(distFolder, outputName))
      }),
  )

  await compileToCss(
    path.resolve(root, 'src/dark/css-vars.scss'),
    path.join(distFolder, 'dark/css-vars.css'),
  )

  await copyThemeSource()
}

await buildTheme()
