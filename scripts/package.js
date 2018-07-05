#! /usr/bin/env node

var fs = require('fs');
var exec = require('child_process').exec;
var jsonfile = require('jsonfile');

var manifestFile = 'manifest.json';
var distDir = './dist/';

if (!fs.existsSync(distDir)){
  fs.mkdirSync(distDir);
}

fs.readFile(manifestFile, 'UTF-8', function (err, data) {
  if (err) {
    console.log('Error!', err);
  }
  var manifest = JSON.parse(data);
  var fileList = [
    '_locales/**/*',
    'icons/*'
  ];

  var noPathFileList = [
    'dist/background.js',
    'dist/manifest.json'
  ]

  if(process.env.CIRCLE_BUILD_NUM) {
    manifest.version = manifest.version + '.' + process.env.CIRCLE_BUILD_NUM;
  }

  jsonfile.writeFile(distDir + manifestFile, manifest);

  var zipFile = distDir + manifest.short_name + '-' + manifest.version + '.zip';
  fileList.unshift(zipFile);
  var cmd = 'zip ' + fileList.join(' ') + ' && zip -j ' + zipFile + ' ' + noPathFileList.join(' ');

  exec(cmd, function(error, stdout, stderr) {
    if (error) {
      console.log('Error!', error, stderr);
    } else {
      console.log('All good! Chrome extension packaged into\n', zipFile);
    }
  });
});
