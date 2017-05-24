import babel from 'rollup-plugin-babel'

export default {
	entry: 'src/main.js',
	dest: 'dist/main.js',
	format: 'umd',
	sourceMap: 'dist/main.js.map',
	moduleName: 'add',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
}
