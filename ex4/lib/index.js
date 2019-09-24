const fs = require('fs')

const createStream = fs.createWriteStream('aula3.txt')

createStream.write('Hello World!')

createStream.end()