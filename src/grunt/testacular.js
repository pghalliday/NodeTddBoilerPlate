module.exports = function(grunt) {
  var testacular = require('testacular');

  grunt.registerMultiTask('testacular', 'Run browser unit tests with Testacular', function() {
    // Tell grunt this task is asynchronous.
    var done = this.async();

    // spawn the testacular server
    var child = grunt.utils.spawn({
      cmd: process.platform === 'win32' ? 'node_modules\\.bin\\testacular.cmd' : 'node_modules/.bin/testacular',
      args: ['start', this.file.src, '--single-run']
    }, function(error, result, code) {
      done(code === 0);
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  });
};
