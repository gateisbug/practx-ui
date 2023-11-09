import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';

export default {
    input: {
        '.': 'src/index.ts',
        ui: 'src/ui/index.ts',
        view: 'src/view/index.ts',
    },
    output: [
        {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name]/index.js',
            chunkFileNames: 'shared/[name]-[hash].js',
        }
    ],
    plugins: [
        swc(defineRollupSwcOption({
            env: {
                targets: [
                    "defaults and fully supports es6-module",
                    "maintained node versions",
                    "partially supports css-grid"
                ],
            },
            jsc: {
                parser: {
                    syntax: "typescript",
                    tsx: true,
                    decorators: true
                },
                target: "es5",
            },
            tsconfig: './tsconfig.json'
        })),
        typescript(),
        resolve(),
        commonjs()
    ],
    external: ['react', 'react-dom']
};