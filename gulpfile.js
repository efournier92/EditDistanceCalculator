// Core Dependencies
const gulp = require('gulp');
const path = require('path');
const browserSync = require('browser-sync');

// Convert ES6 to ES5
const webpack = require('webpack-stream');
gulp.task('transpile-es6', () => {
  gulp.src('./app_client/main.js')
    .pipe(webpack({
      entry: './app_client/main.js',
      output: {
        path: path.resolve(__dirname, './public/dist/'),
        filename: 'main.bundle.js'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ]
      },
      devtool: 'source-map'
    }))
    .pipe(gulp.dest('./public/dist/'))
});

// Browser-Sync
var reload = browserSync.reload;
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: './',
      index: './app_client/index.html'
    },
    proxy: "localhost:8080"
  })
});


// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('./app_client/*.js').on('change', function() {
    'transpile-es6'
  });
});

// Default Task
gulp.task('default', gulp.parallel('transpile-es6', 'watch'));

