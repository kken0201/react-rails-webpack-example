const DEBUG = !process.argv[1].includes('--release');

module.exports = {
  cache: DEBUG,
  debug: DEBUG,

  entry: {
    Hoge: './react/Hoge.jsx',
  },
  output: { path: './app/assets/javascripts/components', filename: '[name].js' },
  devtool: DEBUG ? 'inline-source-map' : false,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
