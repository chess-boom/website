# Chess Boom Website

[![NodeJS with Webpack](https://github.com/chess-boom/website/actions/workflows/webpack.yml/badge.svg)](https://github.com/chess-boom/website/actions/workflows/webpack.yml)
[![Lint Code Base](https://github.com/chess-boom/website/actions/workflows/super-linter.yml/badge.svg)](https://github.com/chess-boom/website/actions/workflows/super-linter.yml)

## Debug Scripts

### `npm start`

Runs the app in dev mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run coverage`

Generate coverage report.

## Build

### `npm run build`

Builds the app for production to the `build` folder.

The build is minified and the filenames include the hashes.

## Selenium Test

In order to run the selenium test file (.side), the selenium chrome extension needs to be downloaded. Afterwards, start the website in localhost:3000, import the .side file in the extension and run the test.
