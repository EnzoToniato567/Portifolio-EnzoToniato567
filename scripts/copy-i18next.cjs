const { copyFileSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const source = join(__dirname, '..', 'node_modules', 'i18next', 'dist', 'umd', 'i18next.min.js');
const targetDirectory = join(__dirname, '..', 'js', 'vendor');
const target = join(targetDirectory, 'i18next.js');

mkdirSync(targetDirectory, { recursive: true });
copyFileSync(source, target);
