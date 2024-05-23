console.log("A Hecker's Terminal")
let container = document.querySelector('.container')

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function addItem(msg1, msg2){
    let command = document.createElement('p')
    command.innerText = `>>> HT::C:\\System\\@${name} = ${msg1}`;
    container.appendChild(command);

    let message = document.createElement('h2')
    message.innerText = msg2;
    container.appendChild(message);
}

async function main(){
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("h2");
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{

            last.innerHTML = last.innerHTML + "."
        }

    }, 100);

    let myObj = {
        "#import java.sys.system.r.systemScanner && java.sys.fileScanner && java.sys.cracker.corrupter.systemCorrupter && java.util.Scanner;":"Importing System Modules",
        "systemScanner.readSystemFilesBySystemKey(ez77_^jfshfdsfdsj479312^&*f__rcqewjrowqe)":"Reading System Files",
        "fileScanner.system.scanSystemFiles(System.processor.thread(5))":"Scanning System Files",
        "Scanner(System.in).next()":"Extracting System Passwords and data",
        "systemCorrupter.sys.cracker.corruptSystemByKey(ez77_^jfshfdsfdsj479312^&*f__rcqewjrowqe)":"Corrupting System Files",
        "firebase.heckerTerminal.db.newSystem.dispatch(ez77_^jfshfdsfdsj479312^&*f__rcqewjrowqe, system.extractedData())":"Dispatching Data to cloud Server",
        "systemsystemCorrupter.sys.cracker.CleanUp":"Cleaning Up"
    }

    for (const myObjKey in myObj) {
        await addItem(myObjKey, myObj[myObjKey]);
        await randomDelay()
    }
    clearInterval(t)
    alert("Your system has been cracked Successfully :D");
    container.innerHTML = "<h1>Leave</h1>"
}

main()
