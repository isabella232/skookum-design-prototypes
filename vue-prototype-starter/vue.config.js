module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./node_modules/normalize-scss/sass/_normalize.scss";
          @import '@/styles/variables.scss';
          @import "@/styles/base.scss";
          @import '@/styles/animations.scss';
        `
      }
    }
  }
}