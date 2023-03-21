const { readFileSync } = require("fs");
const { resolve } = require("path");

const content = readFileSync(resolve('package.json'))
const hasLocalLib = content.includes('"../lib/"') || content.includes('"file:/workspace/')

if(hasLocalLib){
    throw new Error('🛑🛑🛑 DO NOT COMMIT WITH LOCAL LIB 🛑🛑🛑\nTry running `yarn lprod`')
}
else {
    console.log('Nice. No local lib.')
}