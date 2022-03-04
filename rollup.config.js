import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import css from 'rollup-plugin-css-porter'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    // Preferably set as first plugin.
    peerDepsExternal(),
    babel({
      plugins: ['@babel/plugin-syntax-jsx'],
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs(),
    terser(),
    css({ dest: 'dist/styles/iconStyles.min.css' })
  ]
}
