import { absolutePath } from "../fs/utility.js"
import { createReadStream, createWriteStream } from "fs"
import { createGzip } from "zlib"

const compress = async () => {
    // Write your code here 

    const relativeSource = "/src/zip/files/fileToCompress.txt"
    const sourcePath = absolutePath(relativeSource)
    const source = createReadStream(sourcePath)
   
    const relativeTarget = "/src/zip/files/archive.gz"
    const targetPath = absolutePath(relativeTarget)
    const target = createWriteStream(targetPath)

    const gzip = createGzip()

    source
        .pipe(gzip)
        .pipe(target)
};

await compress();