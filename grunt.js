/*global module:false*/
module.exports = function(grunt) {

  // Add our custom tasks.
  // These include:
  //    test - Run unit tests with Mocha (overrides the nodeunit test task)
  grunt.loadTasks('src/grunt');

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'src/**/*.js']
    },
    mocha: {
      files: ['src/server/**/*.test.js']
    },
    testacular: {
      client: 'testacular.conf.js'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        jQuery: true
      }
    },
    mochaConfig: {
      options: {
        reporter: 'nyan'        
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'mocha testacular');
};
