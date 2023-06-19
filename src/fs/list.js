import * as fs from "fs"
import * as util from "./utility.js"

const list = async () => {
    // Write your code here 

    const relativePath = "/src/fs/files/"
    const path = util.absolutePath(relativePath)

    const exists = util.exists(path)

    if (await exists) {
        fs.readdir(path, { withFileTypes: true }, (err, dirents) => {
            if (err) throw err
            dirents.forEach(dirent => {
                if (dirent.isFile()) {
                    console.log(dirent.name)
                }
            })
          })
    } else {
        util.throwFsError()
    }
};

await list();