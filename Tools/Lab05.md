# Lab 5 - Tools

## GitHub and git

1. Fork the TypeScript repository to your own GitHub account
2. Clone the TypeScript fork to your local system
3. Make changes to the local repository and commit it to the server, experiment with git status, add, commit, push...

## NPM

1. Initialize NPM in your local repository with `npm init`
2. Install gulp-typescript to your repository using `npm install gulp-typescript --save-dev`
3. Invoke `npm install` to install all dependencies to the local repository

Questions:

1. What file is created from npm init?

## Bower

1. Install Bower using NPM with `npm install -g bower`
2. Initialize Bower in the local repository using `bower init`
3. Install jquery with the local repository using `bower install jquery --save`

Questions:

1. What file is created from bower init?
2. What is the difference between the options --save and --save-dev?

## tsd

1. Install TypeScript Definitions using `npm install tsd -g`
2. Initialize tsd using `tsd init`
3. Install jquery type definitions using `tsd install jquery --save`

Questions:

1. What file is created from tsd init?

## TypeScript Calculator

1. Add a *source/ts* folder to the project, and add the calculator.ts file
2. Create the Calculator type
3. Add the add and subtract functions with implemenentations

## Configure a Task Runner with Gulp

1. Install the Task Runner gulp using `npm install -g gulp`
2. Add gulp to the dev dependencies using `npm install --save-dev gulp`
3. Create a JavaScript file gulpfile.js:

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
    console.log('Hello, gulp!');
});
```

4. Run gulp with `gulp`. How does the result look like?

### Compile TypeScript with a Task Runner

1. Install a gulp-plugin to compile TypeScript code `npm install -g gulp-typescript`
2. Add this initialization to the gulpfile.js:

```javascript
var ts = require('gulp-typescript');
var tsProject = ts.createProject({
    removeComments : true,
    noImplicitAny : true,
    target : 'ES3',
    module: 'commonjs',
    declarationFiles: false
});
```

3. Compile TypeScript files using *gulp*

```javascript
gulp.task('tsc', function() {
    return gulp.src('./source/ts/**/**.ts')
      .pipe(ts(tsProject))
      .js.pipe(gulp.dest('./temp/source/js'));
});
```

4. Update the default task to perform the new task

```javascript
gulp.task('default', [ 'tsc' ]);
```

## Scaffolding

1. Install Yeoman using NPM (npm install -g yo)
2. Add a generator for TypeScript (npm install -g generator-typescript)
3. Run Yeoman to generate a TypeScript project (yo typescript)

