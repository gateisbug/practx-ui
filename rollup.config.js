import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';
import babel from '@rollup/plugin-babel';

import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

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
      chunkFileNames: 'shared/[name]-[hash].js'
    }
  ],
  plugins: [
    postcss({
      // modules: {
      //   generateScopedName: 'prx-[hash:base64:8]',
      // },
      plugins: [
        autoprefixer,
        postcssPresetEnv({
          stage: 1,
          minimumVendorImplementations: 2,
        }),
      ],
      extract: false
    }),
    swc(defineRollupSwcOption({
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
          decorators: true
        },
        target: "es5",
        minify: false,
      },
      tsconfig: './tsconfig.json'
    })),
    typescript(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: ['.yarn/**', 'dist'],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: [
        'babel-plugin-styled-components'
      ]
    })
  ],
  external: ['react', 'react-dom'] // 이곳에 포함되지 않은 라이브러리는 번들링시 포함됨.
};