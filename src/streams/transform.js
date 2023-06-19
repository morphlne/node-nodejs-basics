import { Transform } from "stream"
import { stdin, stdout } from "process"
import { EOL } from "os"

const transform = async () => {
    // Write your code here 

    const reverse = new Transform({
        transform(chunk, ignored, callback) {
            let str = chunk.toString()
            //manipulation with EOL improves readability of stdout
            str = str.replace(EOL, "")
            let reversed = str.split("").reverse().join("")
            reversed = reversed + EOL
            callback(null, reversed)
        }
    })

    stdin
        .pipe(reverse)
        .pipe(stdout)
};

await transform();