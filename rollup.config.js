import typescript from 'rollup-plugin-typescript';

let pkg = require('./package.json');

export default {
  entry: 'src/index.ts',
  dest: pkg.main,
  format: 'umd',
  moduleName: 'ng.pipes',
  external: ['@angular/core'],
  globals: {'@angular/core': 'ng.core'},
  plugins: [typescript({typescript: require('typescript')})]
}
