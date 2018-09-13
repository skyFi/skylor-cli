#!/usr/bin/env node

const clone = require('git-clone');
const program = require('commander');
const shell = require('shelljs');
const chalk = require('chalk');
const pkg = require('./package');

program
  .version(pkg.version)
  .description(pkg.dependencies)

program
  .command('init <tpl> <project>')
  .alias('i')
  .description('请选择模版初始化工程')
  .action(function(tpl, project) {
    require('figlet')('S K Y L O R', function(err, data) {
      if (data) {
        console.log(chalk.red(data))
      }

      console.log('目前skylor-cli支持以下模板：');
      listTemplateToConsole();

      if (tpl && project) {
        let pwd = shell.pwd();
        clone(`https://github.com/skyFi/skylor-${tpl}.git`, pwd + `/${project}`, null, function() {
          shell.rm('-rf', pwd + `/${project}/.git`);
          console.log(`当前创建的项目地址：${pwd}/${project}/`);
          console.log('接下来你可以：');
          console.log('');
          console.log(chalk.blue(`    $ cd ${project}`));
          console.log(chalk.blue(`    $ npm install`));
          console.log(chalk.blue(`    $ npm start`));
          console.log('');
        })
      } else {
        console.error(chalk.red('正确命令例子：skylor r myProject'));
      }
    });
  }).on('--help', function() {
  console.log('');
  console.log('Examples:');
  console.log('');
  console.log(chalk.blue('  $ skylor i r myProject'));
  console.log(chalk.blue('  $ skylor init ra myProject'));
  console.log('');
  console.log('All Available Templates:');
  listTemplateToConsole();
});

program.parse(process.argv);

function listTemplateToConsole() {
  console.log('');
  console.log(chalk.green('  api  -  Api 服务器工程'));
  console.log(chalk.green('  io   -  Socket 服务器工程'));
  console.log(chalk.green('  mi   -  Nodejs 微服务器工程'));
  console.log(chalk.green('  r    -  React 最佳实践'));
  console.log(chalk.green('  ra   -  React 后台管理最佳实践'));
  console.log(chalk.green('  rn   -  React Native 最佳实践'));
  console.log(chalk.green('  v    -  Vue 最佳实践'));
  console.log('');
}