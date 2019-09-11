const gulp = require('gulp');
const concat = require('gulp-concat');
const packageJson = require('../package.json');

// 预览页面用的
const jsPreviewAssetsMin = [
  // React
  './node_modules/react/umd/react.production.min.js',
  './node_modules/react-dom/umd/react-dom.production.min.js',
  // PubSub
  './node_modules/PubSub/dist/pubsub.min.js'
];

const jsAssetsMin = [
  // React
  './node_modules/react/umd/react.production.min.js',
  './node_modules/react-dom/umd/react-dom.production.min.js',
  // React-Router
  './node_modules/react-router/umd/react-router.min.js',
  './node_modules/react-router-dom/umd/react-router-dom.min.js',
  // Mobx
  './node_modules/mobx/lib/mobx.umd.min.js',
  // Lodash
  './node_modules/lodash/lodash.min.js',
  // PubSub
  './node_modules/PubSub/dist/pubsub.min.js'
];

const jsAssets = [
  // React
  './node_modules/react/umd/react.development.js',
  './node_modules/react-dom/umd/react-dom.development.js',
  // React-Router
  './node_modules/react-router/umd/react-router.js',
  './node_modules/react-router-dom/umd/react-router-dom.js',
  // Mobx
  './node_modules/mobx/lib/mobx.umd.js',
  // Lodash
  './node_modules/lodash/lodash.js',
  // PubSub
  './node_modules/PubSub/src/pubsub.js'
];

gulp.task('build-preview-js:min', () => {
  return gulp
    .src(jsPreviewAssetsMin)
    .pipe(concat(`h5ds-vendor-preview-${packageJson.version}.min.js`, { newLine: '\n\n' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-js:min', () => {
  return gulp
    .src(jsAssetsMin)
    .pipe(concat(`h5ds-vendor-${packageJson.version}.min.js`, { newLine: '\n\n' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-js', () => {
  return gulp
    .src(jsAssets)
    .pipe(concat(`h5ds-vendor-${packageJson.version}.js`, { newLine: '\n\n' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.parallel('build-js', 'build-js:min', 'build-preview-js:min'));
