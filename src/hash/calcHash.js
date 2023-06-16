import * as fs from "fs"
import * as util from "../fs/utility.js"
import * as crypto from "crypto"

const calculateHash = async () => {
    // Write your code here 

    const relativePath = "/src/hash/files/fileToCalculateHashFor.txt"
    const path = util.absolutePath(relativePath)
    
    new Promise((success, fail) => {
        fs.readFile(path,  (err, content) => {
            if (err) throw err
            success(content)
        })
    }).then(content => {
        const algorithm = "sha256"
        const hex = "hex"
        const hash = crypto.createHash(algorithm)
        hash.update(content)
        const hexHash = hash.digest(hex)
        console.log(hexHash)
    })
}

await calculateHash();