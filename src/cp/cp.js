import { fork } from "child_process"

const spawnChildProcess = async (args) => {
    // Write your code here

    const childPath = "./src/cp/files/script.js"
    fork(childPath, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
