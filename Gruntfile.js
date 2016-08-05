var appConfig = {
	srcJs: 'planetx-api/',
	distJs: 'planetx-api/',
	devcode: 'DevCode',
	gruntfile: 'SourceCode/grunt',
	version: '1.0.0'
};

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		config: appConfig,
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
			js: ['<%= config.distJs %>/*.min.js']
		},
		
		rename: {
    		mv: {
    			src: '<%= config.srcJs %>/planetx-api-*.js',
    			dest: '<%= config.srcJs %>/planetx-api-<%= config.version %>.js'
    		}
		},
		
		uglify: {
    		js: {
    			files: [{src: ['<%= config.srcJs %>/planetx-api-<%= config.version %>.js'], 
    					dest: '<%= config.distJs %>/planetx-api-<%= config.version %>.min.js'}]
    		}
		},
		
		tags: {
        	script: {
            	options: {
					scriptTemplate: '<script src="{{ path }}<%= now %>"></script>',
    	            openTag: '<!-- start script template tags -->',
        	        closeTag: '<!-- end script template tags -->'
            	},
            	
            	files: [
            		{src: ['<%= config.srcJs %>/planetx-api-<%= config.version %>.js'],
					dest: 'tests/testrunner.html'}
            	]
    	    },

        	title: {
            	options: {
					scriptTemplate: '<title>planetx-api-js <%= config.version %> TestRunner</title>',
    	            openTag: '<!-- start title template tags -->',
        	        closeTag: '<!-- end title template tags -->'
            	},
            	
            	files: [
            		{src: ['<%= config.srcJs %>/planetx-api-<%= config.version %>.js'],
					dest: 'tests/testrunner.html'}
            	]
    	    }
	    }
	});

	grunt.registerTask('default', ['clean', 'rename', 'uglify', 'tags']);
};
