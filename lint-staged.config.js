'use strict';

module.exports = {
  '**/*.ts?(x)': (filenames) => [
    `env NODE_ENV=production eslint --fix ${filenames.join(' ')}`,
    'tsc',
  ],
};
