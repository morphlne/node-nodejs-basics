import * as path from "path"
import { release, version } from "os"
import { createServer } from "http"
import { fileURLToPath } from "url"
import { createRequire } from "module"
import * as c from "./files/c.js"

const random = Math.random();

export let unknownObject;

const require = createRequire(import.meta.url)
if (random > 0.5) {
    unknownObject = require('./files/a.json')
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject)

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
