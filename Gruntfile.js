module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            react: {
                files: 'components/*.jsx',
                tasks: ['browserify']
            },

            style: {
                files: 'css/*.css',
                tasks: ['browserify']
            }
        },

        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            client: {
                src: ['components/**/*.jsx'],
                dest: 'scripts/bundle.js'
            }
        },

        nodemon: {
            dev: {
                script: 'index.js'
            }
        },

        concurrent: {
            dev: {
                tasks: ['browserify', 'watch', 'nodemon'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', [
        'concurrent:dev'
    ]);
};