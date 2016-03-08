# react-typescript-template

This is a very basic project using React that you can use to bootstrap your own projects. Everything is already setup for dev, test and linting. This project is using Typescript as main language.

first run `npm install` then `npm run typings-install`

then you can run the following commands :

* `npm start` : run the dev mode build with a dev server at `http://localhost:8080/`
* `npm run build` : create a single minified JS file in `dist` if `test` and `lint` passes
* `npm run lint` : lint your javascript files using tslint
* `npm test` : run your tests
* `npm run test:cov` : run test code coverage

In dev mode, you can open your app at `http://localhost:8080/`.
Each time you change your Javascript code, everything will be re-processed and the app will reload automatically using webpack-dev-server and embedded live reload.

You should use Node 4 or 5 to run the project.

Dependencies
------------

* for dev and build
  * `webpack` : the bundler, uses `webpack.config.js`
  * `webpack-dev-server` : the dev HTTP server
  * `typescript` : the Typescript language
  * `typings` : the manager for TypeScript definitions
  * `ts-loader` : webpack loader for typescript
* for runtime
  * `es5-shims` : ES2015 runtime
  * `react` : The React ;-)
  * `react-dom` : to use React in an DOM environment
* for tests
  * `mocha` : the test runner
  * `chai` : for assertions
  * `jsdom` : for headless browser testing
  * `react-addons-test-utils` : for React related tests
* for linting
  * `tslint` : the linter, uses `tslint.json`
