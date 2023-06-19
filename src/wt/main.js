import { cpus } from "os"
import { Worker } from "worker_threads"

const performCalculations = async () => {
    // Write your code here

    const cpu = cpus()

    const workerPath = "./src/wt/worker.js"

    const startNumber = 10
    const workerPoolSize = cpu.length

    const promises = []
    
    for (let i = startNumber; i < workerPoolSize + startNumber; i++) {
        promises.push(
            new Promise((success, ignore) => {

                const worker = new Worker(
                    workerPath,
                    { workerData: { n: i } }
                )
                
                worker.once("message", result => {
                    success(result)
                })
            
                worker.once("error", ignore => {
                    success(null)
                })
            })
        )
    }
    
    await Promise.all(promises)

    promises.forEach(
        promise => promise.then(result => {
            const resultWithStatus = result
                ? { status: "resolved", data: result }
                : { status: "error", data: result }
            console.log(resultWithStatus)
        })
    )
};

await performCalculations();