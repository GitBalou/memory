module.exports = function(grunt) {

    // Chargement de toutes les tâches contenues dans le package.json
    require('load-grunt-tasks')(grunt);

    grunt.config.init({

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    base: 'www',
                    livereload: true,
                    open : true
                }
            }
        },

        watch: {
            taskName: {
                options: {
                    livereload: true
                },
                files: [
                    "www/**"
                ]
            }
        }
    });

    // Serve with livereload
    grunt.registerTask('serve', ['connect', 'watch']);
};