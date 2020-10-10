
// node import syntax, webpack runs on node js
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    // tell what to look at first
    // will look at one file one at a time then look at its imports
    entry: './src/index.js',

    //where to put generated output
    output: {
        // ( absolute path to this file, should be written to dist folder inside project )
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js',
        publicPath: ''
    },

    //how scource maps are generated to debug in browser
    devtool: 'cheap-module-eval-source-map',

    //babel
    module: {
        rules: [ //apply to certain files , each rule is js obj
            {
                test: /\.js$/, //what files effeced by rule (all .js)
                loader: 'babel-loader', // what tool to use for file
                exclude: /node_modules/ //ship as is, dont touch
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ // arr of loaders, loaders obj
                    {loader: 'style-loader'}, // injects css into html
                    {
                        loader: 'css-loader' , options: {// unders stands imports 
                        // options for css modules
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader', options: { //autoprefixing -old css into old browsers 
                        // options for prefixing
                        ident: 'postcss',
                        plugins: () => [ autoprefixer() ]//func return arr // execute plugins to run over css code
  
                        }
                    } 
                ]
            },
            //                                            options/ how big image/ store image/ keep file name/type
            { test : /\.(png|jpe?g|gif)$/, loader: 'url-loader?limit=8000&name=images/[name].[ext]' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            teplate: __dirname + 'src/index.html', //file to use as base
            filename: 'index.html',
            inject: 'body' // where to put /head/body/footer
        })
    ]
};