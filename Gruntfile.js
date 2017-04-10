module.exports = function(grunt) {

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'js/*.js']
        },

        concat: {
            js: {
                src: ['js/grid.js', 'js/index.js', 'js/route.js', 'js/server.js', 'js/filter-excellent.js', 'js/directive.js'],
                dest: 'build/js/app.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'path/to/sourcemap.map'
                },
                src: '<%= concat.js.dest %>',
                dest: 'build/js/app.min.js'
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/app.min.css': 'css/*.css'
                }
            }
        },

        connect: {
            options: {
                port: 9090,
                livereload: true
            },

            server: {
                options: {
                    open: true
                }
            }
        },

        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'index.html',
                    'tpl/*.html',
                    'build/css/app.min.css',
                    'build/js/app.js',
                    'data/*.json',
                    'Gruntfile.js'
                ]
            },
            html: {
                files: ['index.html', 'tpl/*.html']
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint']
            },
            js: {
                files: ['js/*.js'],
                tasks: ['testJs']
            },
            css: {
                files: ['css/*.css'],
                tasks: ['cssmin']
            }
        }
    });

    // 加载任务插件
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // 注册自定义任务
    grunt.registerTask('testJs', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('testAll', ['jshint', 'concat', 'uglify', 'cssmin']);
    grunt.registerTask('default', ['testAll', 'connect', 'watch']);
};