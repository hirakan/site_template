/*デモ
var gulp = require('gulp');

gulp.task('default', function() {
  console.log('テスト表示です');
});
*/

var gulp 		= require('gulp'),
	concat		= require('gulp-concat'),
	uglify		= require('gulp-uglify');
gulp.task('js', function(){//タスクの定義
	return gulp.src('js/*.js')//ソースの指定
	.pipe(concat('bundle.js'))//concatの適用
	.pipe(uglify())//uglifyの適用
	.pipe(gulp.dest('dist')) //ソースの配置
});
gulp.task('watch', function(){//タスクの定義
	gulp.watch(['js/*.js'],['js']);//jsのファイル監視の実行
});



/*sassでコンパイル*/
// @file gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass({
        style : 'expanded',
         compass : true ,
    }))
    .pipe(gulp.dest('/css/'));
});

// 追記する
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});

//スタイルガイドKSS
var gulp = require('gulp');
var gulpkss = require('gulp-kss-robloach');

gulp.task('kss', function() {
  gulp.src('css/style.css')
    .pipe(gulpkss({
      overview: 'path_to_overview_markdown',
      template: 'path_to_template_dir'
    }))
    .pipe(gulp.dest('sg'));
});