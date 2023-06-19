import * as fs from "fs"
import * as util from "./utility.js"

const remove = async () => {
    // Write your code here 

    const relativePath = "/src/fs/files/fileToRemove.txt"
    const path = util.absolutePath(relativePath)

    const exists = util.exists(path)

    if (await exists) {
        fs.rm(path, err => {
            if (err) throw err
        })
    } else {
        util.throwFsError()
    }
};

await remove();