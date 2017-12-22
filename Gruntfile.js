module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat : {
      dist : {
        src : [
          "js/modules/*.js",
          'js/main.js'
        ],
        dest: 'prod/productions.js'
      }
    },

    uglify: {
      build : {
        src: 'prod/prodctions.js',
        dest: 'prod/productions.min.js'
      }
    }
  },
  sass : {
  dest : {
    options : {
      style: 'compressed'
    },
    files : {
      "css/main.css" : "sass/main.scss"
    }
  }
}
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['concat','uglify']);//sass
};
