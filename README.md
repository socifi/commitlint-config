# Commitlint Config

[![npm version](https://badge.fury.io/js/%40socifi%2Fcommitlint-config.svg)](https://badge.fury.io/js/%40socifi%2Fcommitlint-config)
[![CircleCI](https://circleci.com/gh/socifi/commitlint-config/tree/master.svg?style=shield)](https://circleci.com/gh/socifi/commitlint-config/tree/master)

Shareable config for [commitling](https://github.com/marionebl/commitlint).

## How to use

Create ```commitlint.config.js``` file and enter following config:

```javascript
module.exports = {
    extends: ['@socifi/commitlint-config'],
};

```

## Format of Commit message

```Changed: CON-865 Some change in code.```

### Type

Following types are allowed:

- **Changed**
- **Fixed**
- **Removed**
- **Added**
- **Depreciated**
- **Docs**
- **Refactored**
- **Test** - should not be in master branch
- **InProgress, WIP** - should not be in master branch

### Reference

Reference to JIRA issue. eg. CON-156. It is recommended but not required.

### Commit message

MUST exist.
