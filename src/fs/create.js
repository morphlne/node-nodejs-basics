import * as fs from "fs"
import * as util from "./utility.js"

const create = async () => {
    // Write your code here 

    const relativePath = "/src/fs/files/fresh.txt"
    const path = util.absolutePath(relativePath)

    const exists = util.exists(path)

    if (await exists) {
        util.throwFsError()
    } else {
        const content = "I am fresh and young"
        fs.writeFile(path, content, err => {
            if (err) throw err
        })
    }
};

await create();