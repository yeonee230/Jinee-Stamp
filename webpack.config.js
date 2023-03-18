const path = require("path");
const Base_url = "./src/client/js/";
module.exports = {
    entry: {
        main: Base_url + "main.js",
    },
    mode: 'development',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "assets", "js"),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [["@babel/preset-env", { targets: "defaults" }]],
              },
            },
          }
        ],
      },
}