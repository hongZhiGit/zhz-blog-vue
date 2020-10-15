module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './src/common/base.scss',

          // Or array of paths
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss', './path/to/functions.scss']
        })
        .end();
    });
  },
  devServer: {
    // 前端端口
    port: 8183,
    // 代理地址
    proxy: {
      '/api': {
        target: 'http://10.144.120.143:8093/',
        secure: false
      }
    }
  }
};