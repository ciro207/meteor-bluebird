Package.describe({
  name: 'jrudio:bluebird',
  version: '2.9.34',
  // Brief, one-line summary of the package.
  summary: 'Bluebird v2.9.34 - Bluebird is a fully featured promise library with focus on innovative features and performance',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jrudio/meteor-bluebird',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('bluebird.js'); // Available on both server and client
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bluebird');
  api.addFiles('bluebird-tests.js');
});
