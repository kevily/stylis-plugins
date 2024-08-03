import { Engine, rollup, tsc } from '1k-tasks'
import * as path from 'path'

function build(dir: string) {
    const root = path.join(process.cwd(), 'packages', dir)
    const task = new Engine()
    task.registry('babel', rollup.build, {
        root,
        workDir: 'src',
        outputDir: 'dist',
        input: '**/*.ts'
    })
    task.registry('dts', tsc, { root })

    task.run({
        tip: `building ${dir}...`
    })
}

build('class-namespace')
