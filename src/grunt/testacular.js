module.exports = function(grunt) {
  var testacular = require('testacular');

  grunt.registerMultiTask('testacular', 'Run browser unit tests with Testacular', function() {
    // Tell grunt this task is asynchronous.
    var done = this.async();

    // spawn the testacular server
    grunt.utils.spawn({
      cmd: process.platform === 'win32' ? 'node_modules\\.bin\\testacular.cmd' : 'node_modules/.bin/testacular',
      args: ['start', this.file.src, '--single-run']
    }, function(error, result, code) {
      console.log(result.stdout);
      console.log(result.stderr);
      done(code === 0);
    });
  });
};
