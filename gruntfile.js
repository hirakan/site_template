//sassコンパイル
module.exports = function (grunt) {
 
  grunt.initConfig({
 
    //package.jsonを取得
    pkg: grunt.file.readJSON('package.json'),
 
    //タスクの設定（grunt-contrib-sass）
    sass: {
      styles: {
        //SCSSファイルを指定
        src: 'sass/style.scss',
        compass : true ,
        //CSSを書きだしファイルを指定
        dest: 'css/style.css'
      }
    },
    //style.cssのベンダープレフィックス自動付与
    autoprefixer: {
        target: {
            expand: true,
            src: 'css/style.css',
            dest: ''
        },
        options: {
            // 対象とするブラウザをこのように指定することができます。
            browsers: ['last 5 version', 'ie 8', 'ie 9']
        }
    },
    //画像の圧縮
     imagemin: {
        dynamic: { 
          files: [{
            expand: true, 
            cwd: './img_org/',
            src: ['**/*.{png,jpg,gif}'], 
            dest: './img/' 
          }]
        }
    },
    //スタイルガイド
    styleguide: {
      options: {
        includeType: 'css',
        includePath: 'css/demo.css'
      },
      dist: {
        files: {
          'docs/styleguide': ['style_test/']
        }
      }
    },
    //タスクの設定（grunt-contrib-watch）
    watch: {
      sass: {
        //変更を監視するファイルを指定
        files: ['sass/*.scss'],
        //変更されたらどのタスクを実行するか指定
        tasks: [ 'sass' ]
      },
      autoprefixer: {
        //変更を監視するファイルを指定
        files: ['sass/*.scss'],
        //変更されたらどのタスクを実行するか指定
        tasks: [ 'autoprefixer' ]
      },
      imagemin: {
        //cwd: 'src/',
        files:  ['**/*.{png,jpg,gif}'], 
        tasks: ['imagemin']
      },
    }
  });
 
  // プラグインの読み込み
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', [ 'sass' ,'autoprefixer','imagemin']);
grunt.registerTask('styleguide', ['compass', 'kss']);
 
}


