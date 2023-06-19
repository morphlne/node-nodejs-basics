import * as fs from "fs"
import * as util from "./utility.js"

const copy = async () => {
    // Write your code here 

    const relativeSource = "/src/fs/files/"
    const source = util.absolutePath(relativeSource)

    const relativeTarget = "/src/fs/files_copy/"
    const target = util.absolutePath(relativeTarget)

    const sourceExists = util.exists(source)
    const targetExists = util.exists(target)

    if (await sourceExists && !(await targetExists)) {
        fs.cp(source, target, { recursive: true }, err => {
            if (err) throw err
        })
    } else {
        util.throwFsError()
    }
};

await copy();
