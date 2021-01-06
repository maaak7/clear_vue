const path = require("path");

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: path.resolve(__dirname, process.env.VUE_APP_OUTPUT_DIR),
  indexPath: process.env.NODE_ENV === "production" ? "../resources/views/index.blade.php" : "index.html",
  configureWebpack: {
    resolve: {
      alias: {
        // If using the runtime only build
        vue$: "vue/dist/vue.runtime.esm.js" // 'vue/dist/vue.runtime.common.js' for webpack 1
        // Or if using full build of Vue (runtime + compiler)
        // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname
        }
      },
      scss: {
        prependData: `@import "@/assets/sass/vendors/vue/vuetify/variables.scss";`
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
