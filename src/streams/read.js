import { absolutePath } from "../fs/utility.js"
import { createReadStream } from "fs"
import { stdout } from "process"

const read = async () => {
    // Write your code here 

    const relativePath = "/src/streams/files/fileToRead.txt"
    const path = absolutePath(relativePath)
    const encoding = "utf-8"

    const stream = createReadStream(path, encoding)

    stream.pipe(stdout)
};

await read();