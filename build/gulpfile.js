const gulp = require('gulp');
const concat = require('gulp-concat');

const jsAssets = [
  // React
  './node_modules/react/umd/react.production.min.js',
  './node_modules/react-dom/umd/react-dom.production.min.js',
  // React-Router
  './node_modules/react-router/umd/react-router.min.js',
  './node_modules/react-router-dom/umd/react-router-dom.min.js',
  // Mobx
  './node_modules/mobx/lib/mobx.umd.js',
  // Lodash
  './node_modules/lodash/lodash.min.js'
];

gulp.task('build-js', () => {
  return gulp
    .src(jsAssets)
    .pipe(concat('h5ds-vendor.min.js', { newLine: '\n\n' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('build-js'));
