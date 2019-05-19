var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    ///////////////////////
    /** Đóng gói file JS */
    ///////////////////////
    entry: {
        index: [
            './src/controllers/index.js',
            './src/modal/nguoiDung.js',
            './src/services/nguoiDungServices.js',
            './src/controllers/quanLyNguoiDung/login.js',
            './src/controllers/quanLyNguoiDung/dangKy.js',
            './src/controllers/quanLyNguoiDung/quanLyNguoiDung.js',
            
            ],
    },
    /// File đầu vào 
    output: {
        path: path.resolve(__dirname, 'dist'), /// Thư mục chứa file đầu ra
        filename: 'js/[name].js' // Tên file đầu ra
    },
    ////////////////////
    /** Đóng gói CSS / SCSS */
    ///////////////////
    module: {
        rules: [{
                test: /\.css$/, //// Đọc những file có đuôi .css để đóng gói
                use: ['style-loader', 'css-loader'], // Sử dụng 2 loader để đóng gói css
            },
            /** SCSS */
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            //////////////////////
            /** Đóng gói Image */
            ////////////////////
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]", /// đặt tên đúng khi đóng gói
                        outputPath: "images", /// Đặt tên thư mục nằm trong folder đóng gói
                        publicPath: "/dist/images/", /// Đặt lại đường dẫn file hình trong file đã duoc đóng gói 
                        limit: 10000, /// Giới hạn dung lượng file ảnh
                    },
                },
            },
        ],
    },
};