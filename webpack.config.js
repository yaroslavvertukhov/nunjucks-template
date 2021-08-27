const path = require('path');
const fs = require('fs');

require('dotenv').config();

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

const pagesDir = `${PATHS.src}/html/pages/`;

const pages = fs
  .readdirSync(pagesDir)
  .filter((fileName) => fileName.endsWith('.njk'));
module.exports = {
  stats: {
    children: false,
  },
  performance: {
    hints: false,
  },
  externals: {
    paths: PATHS,
  },
  entry: `${PATHS.src}/app.js`,
  output: {
    filename: 'js/[name].min.js',
    path: PATHS.dist,
    publicPath: '/',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm',
      sass: path.resolve('src/assets/sass'),
      '@': path.resolve('src/vue'),
    },
    extensions: ['.js', '.vue', '.scss', '.sass'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/](node_modules|assets[\\/]js[\\/]vendors)[\\/](.(?!.*\.css$))*$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {
              searchPaths: ['src/html'],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: './configs/postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'import-glob-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              publicPath: 'img/',
              esModule: false,
            },
          },
          {
            loader: 'svgo-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new ESLintPlugin({
      extensions: ['js', 'vue'],
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${pagesDir}/${page}`,
          filename: `./${page.replace(/\.njk/, '.html')}`,
          minify: false,
          env: process.env,
        })
    ),
    new HtmlBeautifyPlugin({
      config: {
        html: {
          end_with_newline: true,
          indent_size: 4,
          indent_with_tabs: false,
          indent_inner_html: true,
          preserve_newlines: true,
          unformatted: ['p', 'i', 'b', 'span'],
        },
      },
      replace: [' type="text/javascript"'],
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
    new SpriteLoaderPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/assets/font', to: 'font' },
      { from: 'src/assets/img/main', to: 'img' },
      { from: 'src/assets/documents', to: 'content/documents' },
      { from: 'src/assets/img/content', to: 'content' },
      { from: 'src/assets/json', to: 'json' },
      { from: 'src/assets/css', to: 'css' },
    ]),
    new VueLoaderPlugin(),
  ],
  devServer: {
    // contentBase: 'src',
    port: 3000,
    disableHostCheck: true,
    historyApiFallback: {
      rewrites: [
        { from: /\/personal/, to: '/personal.html' },
        // { from: /\/personal\/[A-Za-z0-9\-\/]+/, to: '/personal.html' },
      ],
    },
    overlay: {
      warnings: false,
      errors: true,
    },
  },
};
