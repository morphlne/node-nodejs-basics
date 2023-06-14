import { access } from "fs"
import path from "path"

export function absolutePath(relativePath) {
    return path.join(path.resolve() + relativePath)
}

export function exists(path) {
    return new Promise ((success, fail) => {
        access(path, err => {
            success(!err)
        })
    })
}

export function throwFsError() {
    throw Error("FS operation failed")
}