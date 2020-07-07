module.exports = {
    css: {
        loaderOptions: {
            scss: {
            prependData: `@import "~@/styles/styles.scss";`
            }
        }
    },

    publicPath: process.env.NODE_ENV === 'production'
      ? '/hair-salon/'
      : '/'
};
