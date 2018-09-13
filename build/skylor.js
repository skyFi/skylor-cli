#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander');

program
  .version('0.1.0')
  .option('-s --size <size>', 'Pizza size', /^(large|medium|small)$/i, 'medium')
  .option('-d --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i)

program
  .command('init <projectName> <dir>')
  .action(function (projectName, dir) {
    console.log(projectName, dir)
  })
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ skylor init [NodeApi | Socket | Micro | ReactAdmin | React | Vue | ReactNative] ./path/to/my-project');
    console.log('');
  });


program.on('--help', function(){
  console.log('')
  console.log('Examples:');
  console.log('');
  console.log('  $ custom-help --help');
  console.log('  $ custom-help -h');
  console.log('');
});

program.parse(process.argv);


