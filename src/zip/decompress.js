import { absolutePath } from "../fs/utility.js"
import { createReadStream, createWriteStream } from "fs"
import { createUnzip } from "zlib"

const decompress = async () => {
    // Write your code here 

    const relativeSource = "/src/zip/files/archive.gz"
    const sourcePath = absolutePath(relativeSource)
    const source = createReadStream(sourcePath)
   
    const relativeTarget = "/src/zip/files/fileToCompress_decompressed.txt"
    const targetPath = absolutePath(relativeTarget)
    const target = createWriteStream(targetPath)

    const unzip = createUnzip()

    source
        .pipe(unzip)
        .pipe(target)
};

await decompress();