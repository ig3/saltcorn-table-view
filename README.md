# saltcorn-table-view

This is a [saltcorn](https://github.com/saltcorn/saltcorn) plugin providing
a Table view.

It is an experiment to fix
[Issue#1385](https://github.com/saltcorn/saltcorn/issues/1385)
but the issue has been addressed by removing the faulty search form
entirely so this plugin is no longer relevant. Per the response to the
issue, don't use the search form: use filters.

This view is based on the List view of the saltcorn base-plugin. The
configuration parameters are reorganized to fix
[Issue#1385](https://github.com/saltcorn/saltcorn/issues/1385).

It is a small change: properties from the Options section of configuration
workflow are saved to context field options instead of default_state, with
references to the properties from this section modified accordingly.

Otherwise, it is as the original List view.

## Loading

Pending publication to npmjs...

 * Clone the repository
 * npm install
 * In local saltcorn
   * Settings > Modules
   * Click the elipses icon at top right and select Add another module
   * Name: saltcorn-table-view
   * Source: local
   * Location: full path to this repository
   * Click Create

It should load. It did in my test.
