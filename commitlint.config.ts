import type { UserConfig } from '@commitlint/types';

// build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs:     Documentation only changes
// feat:     A new feature
// fix:      A bug fix
// perf:     A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test:     Adding missing tests or correcting existing tests

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  /*
   * Resolve and load conventional-changelog-atom from node_modules.
   * Referenced packages must be installed
   */
  // parserPreset: 'conventional-changelog-atom',
  /*
   * Resolve and load @commitlint/format from node_modules.
   * Referenced package must be installed
   */
  formatter: '@commitlint/format',
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  // rules: {
  //   'type-enum': [2, 'always', ['foo']],
  // },
  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  ignores: [(commit) => commit === ''],
  /*
   * Whether commitlint uses the default ignore rules.
   */
  defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  /*
   * Custom prompt configs
   */
  prompt: {
    messages: {},
    questions: {
      type: {
        description: 'please input type:',
      },
    },
  },
};

module.exports = Configuration;
