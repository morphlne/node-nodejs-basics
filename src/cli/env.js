const parseEnv = () => {
    // Write your code here 

    const prefix = "RSS_"
    const env = process.env
    const filteredEnv = []

    for (const key in env) {
        if (key.startsWith(prefix)) {
            filteredEnv.push(`${key}=${env[key]}`)
        }
    }

    console.log(filteredEnv.join("; "))
};

parseEnv();