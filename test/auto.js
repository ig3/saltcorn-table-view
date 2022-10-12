'use strict';
const t = require('tape');
const { auto_test_plugin } = require('@saltcorn/data/plugin-testing');
const plugin = require('../index.js');
const { getState } = require('@saltcorn/data/db/state');

getState().registerPlugin('saltcorn-table-view', plugin);

console.log('about to setup database');

(async () => {
  await require('@saltcorn/data/db/reset_schema')();
  await require('@saltcorn/data/db/fixtures')();
  console.log('setup complete');
  t('auto test', async t => {
    await auto_test_plugin(plugin);
    t.pass("auto_test_plugin doesn't throw");
  });
})();

