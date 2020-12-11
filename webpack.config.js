const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: "./bundle.js"
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(tsx|ts)$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, './tsconfig.json')
　　　　　}
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    publicPath: "/",
    // contentBase: "./public",
    hot: true
  }
};