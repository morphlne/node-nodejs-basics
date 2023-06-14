import * as fs from "fs"
import * as util from "./utility.js"

const rename = async () => {
    // Write your code here 

    const relativeSource = "/src/fs/files/wrongFilename.txt"
    const source = util.absolutePath(relativeSource)

    const relativeTarget = "/src/fs/files/properFilename.md"
    const target = util.absolutePath(relativeTarget)

    const sourceExists = util.exists(source)
    const targetExists = util.exists(target)

    if (await sourceExists && !(await targetExists)) {
        fs.rename(source, target, err => {
            if (err) throw err
        })
    } else {
        util.throwFsError()
    }
};

await rename();