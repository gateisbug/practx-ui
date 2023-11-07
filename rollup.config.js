import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'esm',
            sourcemap: true,
        }
    ],
    plugins: [
        swc(defineRollupSwcOption({
            jsc: {
                "parser": {
                    "syntax": "typescript",
                    "tsx": true,
                    "decorators": true
                },
                "target": "es6",
            },
            tsconfig: './tsconfig.json'
        })),
        typescript(),
        resolve(),
        commonjs()
    ],
    external: ['react', 'react-dom']
};