const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: "development",
  entry: {
    bundle: path.join(__dirname, "src/index.js"),
    main: path.join(__dirname, "src/index.ts"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    liveReload: true,
  },
  devtool: "source-map", //to create the source map file for debugging
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_module/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "public"),
    clean: true, //to delete the other files from output folder
    assetModuleFilename: '[name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/index.html",
    }),
    new BundleAnalyzerPlugin()
  ],
};
