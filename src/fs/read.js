import * as fs from "fs"
import * as util from "./utility.js"

const read = async () => {
    // Write your code here 

    const relativePath = "/src/fs/files/fileToRead.txt"
    const path = util.absolutePath(relativePath)

    const exists = util.exists(path)

    if (await exists) {
        const encoding = "utf-8"
        fs.readFile(path, encoding, (err, content) => {
            if (err) throw err
            console.log(content)
        })
    } else {
        util.throwFsError()
    }
};

await read();