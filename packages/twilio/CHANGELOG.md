# @openfn/language-twilio

## 0.4.1

### Patch Changes

- Update lock files
- Updated dependencies
  - @openfn/language-common@1.8.1

## 0.4.0

### Minor Changes

- 2c1d603: Remove parameter reassignment to ensure proper functioning inside an
  `each` block; add eslint

  The packages receiving a major bump here exposed functions that didn't work as
  expected inside `each` blocks. Users were previously wrapping these functions
  inside their own custom `fn` blocks, and this change will ensure that they can
  be used inside a standard each.

  See https://github.com/OpenFn/adaptors/issues/275 for more details.

### Patch Changes

- Updated dependencies [2c1d603]
  - @openfn/language-common@1.8.0

## 0.3.4

### Patch Changes

- a22daa6: rename credential-schema to configuration-schemawq

## 0.3.3

### Patch Changes

- 14f481e: mark execute as private
- Updated dependencies [2b4c61a]
  - @openfn/language-common@1.7.6

## 0.3.2

### Patch Changes

- f7ebd3c: remove sample configuration

## 0.3.1

### Patch Changes

- f2aed32: add examples

## 0.3.0

### Minor Changes

- a36a072: ymigrated twilio to monorepo

### Patch Changes

- Updated dependencies [f2a91a4]
  - @openfn/language-common@1.7.5
