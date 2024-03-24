const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    name: 'server',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    mode: "development",
    entry: './server/index.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      useBuiltIns: 'usage',
                      corejs: 3,
                    },
                  ],
                  [
                    '@babel/preset-react',
                    {
                      useBuiltIns: 'usage',
                      corejs: 3,
                    },
                  ],
                  '@babel/preset-typescript',
                ],
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images',
                publicPath: 'public/images/',
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'server.styles.css',
      })
    ],
  },
  {
    name: 'client',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    mode: "development",
    entry: './src/Client.tsx',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'assets'),
      filename: 'client.js',
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      useBuiltIns: 'usage',
                      corejs: 3,
                    },
                  ],
                  [
                    '@babel/preset-react',
                    {
                      useBuiltIns: 'usage',
                      corejs: 3,
                    },
                  ],
                  '@babel/preset-typescript',
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'client.styles.css',
      }),
      new webpack.DefinePlugin({
        'process.env.REACT_APP_API_BASE_URL': JSON.stringify("https://railway.bulletinboard.techtrain.dev/"),
      }),
    ],
  },
];
