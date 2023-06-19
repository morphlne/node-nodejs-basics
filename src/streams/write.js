import { absolutePath } from "../fs/utility.js"
import { createWriteStream } from "fs"
import { stdin } from "process"

const write = async () => {
    // Write your code here 

    const relativePath = "/src/streams/files/fileToWrite.txt"
    const path = absolutePath(relativePath)
    const encoding = "utf-8"

    const stream = createWriteStream(path, encoding)

    stdin.pipe(stream)
};

await write();