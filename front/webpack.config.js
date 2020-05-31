const VueLoaderPluging = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
    // 필수 옵션
    entry: { // 가장 핵심이 되는 파일
        app: path.join(__dirname, 'main.js'),
    },
    module: { // 어떻게 스크립트를 합칠지 규칙을 정함
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader', // 'loader' 대신 'use' 사용 가능
        }],
    },
    plugins: [
        new VueLoaderPluging(),
    ],
    output: {
        filename: '[name].js', // app.js - enrty name
        path: path.join(__dirname, 'output'),
    },
    
    // 선택옵션
    mode: 'development',
    devtool: 'eval', // build가 빨라짐
    resolve: { // 확장자 처리 - html에서 import 시 확장자를 적지 않아도 됨
        extensions: ['.js', '.vue']
    },
}