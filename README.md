# explode.js

Art is an explosion, explode.js is a JavaScript implementation of php's explode utility.

## Description

(PHP 4, PHP 5, PHP 7, PHP 8, Javascript, Typescript)
explode — Split a string by a string

## Installation

```bash
yarn add explode.js
or
npm install explode.js
```

## Examples

```ts
import { explode } from 'explode.js';

explode(' ', 'Art is an explosion'); // ['Art', 'is', 'an', 'explosion']
explode(',', 'Art is an explosion'); // ['Art is an explosion']
explode(' ', 'Art is an explosion', 3); // ['Art', 'is', 'an explosion']
explode(' ', 'Art is an explosion', -3); // ['Art']

explode(',', ','); // ['', '']
explode('', 'empty separator is not allowed'); // throws ValueError
```

## Syntax

```text
explode(separator, string, limit?);
```

Returns an array of strings, each of which is a substring of string formed by splitting it on boundaries formed by the string separator.

## Parameters

### separator

The boundary string.

### string

The input string.

### limit

If limit is set and positive, the returned array will contain a maximum of limit elements with the last element containing the rest of string.
If the limit parameter is negative, all components except the last -limit are returned.
If the limit parameter is zero, then this is treated as 1.

## Return Values

Returns an array of strings created by splitting the string parameter on boundaries formed by the separator.

If separator is an empty string (""), explode() throws a ValueError. If separator contains a value that is not contained in string and a negative limit is used, then an empty array will be returned, otherwise an array containing string will be returned. If separator values appear at the start or end of string, said values will be added as an empty array value either in the first or last position of the returned array respectively.
