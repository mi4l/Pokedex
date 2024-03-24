import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import process from 'process';

export default {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'templates/index.html')
    })
  ],
  devServer: {
    client: { overlay: false },
    hot: true,
    static: path.join(process.cwd(), "dist"),
    port: 3000,
  }
};