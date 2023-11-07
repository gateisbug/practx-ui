import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';

export default {
    input: {
        '.': 'src/index.ts',
        Hello: 'src/Hello.tsx',
        World: 'src/World.tsx',
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
            jsc: {
                "parser": {
                    "syntax": "typescript",
                    "tsx": true,
                    "decorators": true
                },
                "target": "es2015",
            },
            tsconfig: './tsconfig.json'
        })),
        typescript(),
        resolve(),
        commonjs()
    ],
    external: ['react', 'react-dom']
};