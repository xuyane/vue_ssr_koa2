import babel from 'rollup-plugin-babel'
import resovle from 'rollup-plugin-node-resolve'

export default {
  entry:'src/index.js',
  format:'umd',
  plugin:[
    resovle(),
    babel({
      exclude:'node_modules/**'
    })
  ],
  dest:'build/bundle.js'
}
