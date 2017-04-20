#!/usr/bin/env node
'use strict';

const packageInfo = require('./package.json');
const path = require('path');
const fs = require('fs');
const argv = require('optimist').argv;
const DEFAULT_TARGET = 'TEST_README.md';
const DEFAULT_LINE = 0;
const QUERY_HELP =
`Query format: subject-status-color

Dashes --  →  - Dash
Underscores __  →  _ Underscore 
_ or Space  →  Space`;

switch(argv._[0]) {
  case 'add': add(argv); break;
  case 'clean': clean(argv); break;
  default: add();
}

function add(argv) {
  if(!argv._[1]) {
    return console.log(QUERY_HELP);
  }
  const query = argv._[1];
  const filePath = path.resolve(__dirname, (argv.t || argv.target || DEFAULT_TARGET));
  const fileContent = 
  console.log('fp:', filePath);
}

function clean(argv) {
    console.log('clean', argv);
}
