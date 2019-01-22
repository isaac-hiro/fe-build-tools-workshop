# Front-end build tools "All you need to know" workshop (Webpack, Gulp, Babel, TypeScript, Sass, Hot Module Replacement)

*Purpose of the workshop:*

#### To gain practical hands-on knowledge on how to set up Front end build environments that support automatic building of a variety of files and have hot in-place code updates to speed up development.

### Prerequisites:

- Latest Node version installed
- Workshop repository pulled

## Introduction
#### SLIDES: Why to use build tools?

- To use ES6 modules
- To use latest Javascript features
- To use TypeScript
- To use Sass
- To use polyfills for specific target browsers
- To simplify, unify and automate build processes
- To take advantage of production build optimizations
- To speed up local development without the need to refresh the page and lose state
- Dead asset elimination.
	- You only build the images and CSS into your dist/ folder that your application actually needs.
- Stable production deploys.
	- You can't accidentally deploy code with images missing, or outdated styles.

## Webpack & Babel
#### SLIDES: Introduction to Webpack

- What it is and what it can be used for
- Features
- Short comparsion table with other transpilers / builders

#### SLIDES: Introduction to Babel

- What it is and what it can be used for
- Features

#### DEVELOPMENT: Setting up basic Webpack build environment for simple React project

- Setting up webpack config file
- Explaining some options https://webpack.js.org/configuration/ :
	- entry - The point or points to enter the application. At this point the application starts executing. If an array is passed all items will be executed.
		- The path.join() method joins all given path segments together using the platform specific separator as a delimiter, then normalizes the resulting path.

	- mode - "production" | "development" | "none"
		- Chosen mode tells webpack to use its built-in optimizations accordingly.

	- module  - https://webpack.js.org/concepts/modules/#what-is-a-webpack-module 
		- How to process non-js modules using loaders
	- rules
		- test - regex pattern to match modules files
		- exclude / include
		- use - for passing loaders for modules
	- output - https://webpack.js.org/configuration/output/#output-filename
	- resolve  - https://webpack.js.org/configuration/resolve/
		- Extensions - https://webpack.js.org/configuration/resolve/#resolve-extensions 
		- Enables not needing to specify the extensions when importing
	- plugins - https://webpack.js.org/configuration/plugins/
- Adding rules for js and jsx files
- Adding support for Babel:
- .babelrc configuration file added
- Explaining some .babelrc config options:
	- Presets - https://babeljs.io/docs/en/presets
		- A set of preset configuration options.
	- Plugins - https://babeljs.io/docs/en/plugins 
		- On its own. Babel does nothing, it needs plugins to transform code. Plugins can be provided in presets as well.
- Adding babel/env and babel/react presets and explaining the options
	- @babel/env - https://babeljs.io/docs/en/babel-preset-env
		- Allows using latest js syntax, optionally browser polyfills.
		- Targets - allows defining which browsers to target in a variety of ways. Will create necessary polyfills.
- Plugins:
	- Adding support for React class proptypes
	- Adding support for decorators (mobx or smth)
- Adding babel-loader to js/jsx rules
- Showing how to use npm scripts for building files with webpack
- Building a bundle file, including it to html
- Adding production build config
	- Can use process.env.NODE_ENV === "production" if Node env is set to prod in prod
	- Or use separate webpack config and index html files
	- Separate html file for clarity
	- Setting mode to “production”
	- Comparing the file size and automatic minification
- Adding support for sourcemaps
	- Showing sourcemaps exist for dev build and not for prod build
	- Explaining the different versions:
		- Devtool sourcemaps https://webpack.js.org/configuration/devtool/
			- eval / Default sourcemap - kinda works but quite ugly, fastest
			- cheap-eval-source-map - transformed code, fast
			- cheap-module-eval-source-map - original code, fast
			- eval-source-map - original source quality, slow
		- Up to you to choose the best option for dev and prod builds

## TypeScript
#### SLIDES: Introduction to TypeScript

- What it is and what it can be used for
- Features
- Comparsion with FlowJS

#### DEVELOPMENT: Setting up TypeScript build

- Adding tsconfig.json file
- Explaining options https://www.typescriptlang.org/docs/handbook/tsconfig-json.html :
	- compilerOptions https://www.typescriptlang.org/docs/handbook/compiler-options.html
		- Target - ES version, default es3
		- Strict - enables all strict typechecking options
		- Jsx - to support jsx in tsx files, preserve|react
- Adding support for .ts and .tsx files to Webpack config with ts-loader https://github.com/TypeStrong/ts-loader
- Building typescript files

## Sass
#### SLIDES: Short introduction to Sass

- What it is and what it can be used for
- Features

#### DEVELOPMENT: Setting up Sass builds in Webpack

- Adding rules for .scss files in webpack config using loaders:
	- Style-loader - https://github.com/webpack-contrib/style-loader
		- Add css to dom by injecting it into <style> tag in head
		- Good mainly for dev but can also be used in prod, depends on need
	- Css-loader  - https://github.com/webpack-contrib/css-loader
		- Necessary for understating css
		- translates CSS into CommonJS
	- Sass-loader - https://github.com/webpack-contrib/sass-loader
		- compiles Sass to CSS, using Node Sass by default
	- Options sourceMap: true for css-loader and sass-loader will display sourcemaps
- Adding MiniCssExtractPlugin to prod build:
	- Creates a separate CSS file
	- Include the file to prod index.html  <link rel="stylesheet" type="text/css" href="build/styles.css" />
- 2 ways how to include Sass files into project:
	- Create a main .scss file that imports all others and import it into app.js
	- Import relevant .scss component file into relevant React component
		- Have to import globals.scss into each component file

## Webpack Dev Server with Hot Module Replacement (HMR)
#### SLIDES: Introduction to HMR

- What they are
- How they can improve development speed
- How it works
- https://webpack.js.org/concepts/hot-module-replacement/
- https://webpack.js.org/concepts/hot-module-replacement/#in-the-application

#### DEVELOPMENT: Setting up HMR

- Starting simple http-server in order to be able to serve WDS assets
- https://webpack.js.org/guides/hot-module-replacement/
- Not to use in prod
- Setting up Webpack dev server https://webpack.js.org/configuration/dev-server/
- Adding server config in webpack.config.js
	- ContentBase - where served files sit
	- Enabling hot option
	- Adding header for CORS since http-server is running on 8080 port and WDS on 9010
- Adding insertion config to app.js
- Adding http://localhost:9010/bundle.dev.js to index.html
- Demonstrating changes in js/ts files
- Adding HMR support for .scss files
	- already present since style-loader uses it under the hood
	- https://webpack.js.org/guides/hot-module-replacement/#hmr-with-stylesheets
- Demonstrating that it works

## Images with Webpack and ES6 import
#### DEVELOPMENT: Setting up images

- Adding rule for images in webpack config
- Showing how images should be imported in React modules
- Demoing images with HMR updating automatically
- Showing that this works for background images in Sass as well

## Gulp
#### SLIDES: Introduction to Gulp

- What it is and what it can be used for
- Features
- What is a Gulp task and how can it be run
- What can Gulp tasks be used for (compiling, copying, resizing, running tests, linting, etc)
- The syntax of a Gulp task
- Not used that much anymore since Webpack can do most of the things

#### DEVELOPMENT: Setting up Gulp

- Creating a gulpfile.js
- Creating a task for copying image files in order to make bg images in sass work 

## Optimizing builds
#### DEVELOPMENT: optimizing

- Webpack production build is already very well optimized:
	- https://webpack.js.org/configuration/optimization/
	- Most of the optimization flags are true if mode is set to production
	- Not using sourcemaps also decreases build size
- Caching: adding hashes to file names to force re-cache
	- Adding [chunkhash] to prod bundle name and css file
	- Adding html-webpack-plugin plugin https://github.com/jantimon/html-webpack-plugin
		- Enables creating html files and support using templates
	- Create index lodash template file into which automatically are inserted JS and CSS files
	- Demo that changing code creates new bundle files with new hashes
	- Problem: previous bundle files are not removed:
		- Clean-webpack-plugin - https://github.com/johnagan/clean-webpack-plugin
		- Add the plugin with bundle path given as the first plugin, it will remove the folder before anything else happens
- Optimizing images / using svg-s:
	- Base64 inlining using https://www.npmjs.com/package/url-loader
		- Replace file-loader with url-loader in webpack prod config
		- Limit - A Number specifying the maximum size of a file in bytes. If the file is greater than the limit, file-loader is used by default and all query parameters are passed to it.
		- Demo how two images are added to page, one is inlined and other is not
		- Demo that .scss background image uses encoded version as well if under limit
		- Demo that using .png as background image produces weebpack size warning but using svg doesn’t. Also styles.css is considerably smaller with svg-s.

## Separating vendor from custom
#### DEVELOPMENT: Caching chunks

- Creating 3 separate js files https://webpack.js.org/guides/caching/
	- vendor.js - vendor packages that do not change very often but is the biggest file so it can be cached by the client
	- main.js - custom code that changes but is quite small
	- connect.js - tiny file that connects the previous 2
- Add optimization section to webpack prod config
	- Demo that when changing JS or TS file, main.js is the only one updated
	- (For some reason styles.css are also generated if js files updated)

## ESlint, TSlint and SassLint
#### SLIDES: Introduction to linting

- What are Eslint and Tslint
- How they can reduce errors and bugs in code


#### DEVELOPMENT: Setting up linting

- Adding .eslintrc and .eslintignore files
- Talking about different parameters https://eslint.org/docs/user-guide/configuring :
	- Parser  - Babel-ESLint - A wrapper around the Babel parser that makes it compatible with ESLint.
	- For enabling babel parsing
	- Plugins
		- Import - https://www.npmjs.com/package/eslint-plugin-import
			- For es6 import/export syntax validation
		- React - https://www.npmjs.com/package/eslint-plugin-react
			- For react specific rules
		- Babel - https://github.com/babel/eslint-plugin-babel
			- Overwrites rules that might give false positives
	- Env  - An environment defines global variables that are predefined.
		- E.g “window”, “document”, “process” etc
		- https://eslint.org/docs/user-guide/configuring#specifying-environments
	- Extends - to extend already defined rule sets
		- https://eslint.org/docs/user-guide/configuring#extending-configuration-files
	- Rules https://eslint.org/docs/user-guide/configuring#configuring-rules 
		- Configuring with “off”, “warn”, “error”
- Running npm run eslint to lint js and jsx files
- Linting Typescript files
- Adding tslint.json file
- Can use Typescript specific rules https://palantir.github.io/tslint/rules/
- Mentioning that many tslint rules have been removed due to the increased capabilites of TypeScript compiler
- Running npm run tslint to lint .ts and .tsx files
- Linting Sass files https://www.npmjs.com/package/sass-lint
- Adding .sasslintrc file
- Showing sample rules
- Running sass-lint
- Changing a rule to error and a rule to warning to demo how output changes
- Creating global linting npm script
- Stating that this linting script could run together with unit tests as a git pre-commit hook
