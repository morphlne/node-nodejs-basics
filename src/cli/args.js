const parseArgs = () => {
    // Write your code here 

    //slice for skip path to node bin & path to script
    const args = process.argv.slice(2)

    const keyPrefix = "--"

    const map = new Map()
    let previousKey = ""
    
    args.forEach(current => {
        if (current.startsWith(keyPrefix)) {
            const key = current.slice(2)
            map[key] = ""
            previousKey = key
        } else {
            map[previousKey] = current
        }
    })

    const formatedArgs = []

    for (const key in map) {
        formatedArgs.push(`${key} is ${map[key]}`)
    }

    console.log(formatedArgs.join(", "))
};

parseArgs();