#!/usr/bin/env node
'use strict';

// validate that used node version is supported
const semver = require('semver');
let ver = process.versions.node;
ver = ver.split('-')[0]; // explode and truncate tag from version

if (semver.satisfies(ver, '>=8.0.0')) {
  require('../build/skylor.js')
} else {
  console.log(
    require('chalk').red(
      'Node version ' + ver + ' is not supported, please use Node.js 8.0 or higher.'
    )
  );
  process.exit(1);
}